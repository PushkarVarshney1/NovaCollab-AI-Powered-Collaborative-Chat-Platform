import axios from 'axios';

// Create a single instance to avoid duplicate requests
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 10000,
});

// Add a request interceptor to prevent duplicate requests
let pendingRequests = new Map();

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        
        // Create a request identifier
        const requestId = `${config.method}:${config.url}`;
        
        // Cancel previous identical requests
        if (pendingRequests.has(requestId)) {
            const controller = pendingRequests.get(requestId);
            controller.abort();
        }
        
        // Create new controller for this request
        const controller = new AbortController();
        config.signal = controller.signal;
        pendingRequests.set(requestId, controller);
        
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        // Remove from pending requests
        const requestId = `${response.config.method}:${response.config.url}`;
        pendingRequests.delete(requestId);
        
        return response;
    },
    (error) => {
        if (error.response?.status === 401) {
            const errorCode = error.response.data?.code;
            
            if (['TOKEN_EXPIRED', 'TOKEN_BLACKLISTED', 'INVALID_TOKEN'].includes(errorCode)) {
                localStorage.removeItem('token');
            }
        }
        
        // Remove from pending requests even on error
        if (error.config) {
            const requestId = `${error.config.method}:${error.config.url}`;
            pendingRequests.delete(requestId);
        }
        
        return Promise.reject(error);
    }
);

export const setAuthToken = (token) => {
    if (token) {
        localStorage.setItem('token', token);
    } else {
        localStorage.removeItem('token');
    }
};

export const isAuthenticated = () => {
    return !!localStorage.getItem('token');
};

export default axiosInstance;
