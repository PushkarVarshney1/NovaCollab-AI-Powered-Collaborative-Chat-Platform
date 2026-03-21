import React, { useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from '../config/axios';
import { UserContext } from '../context/user.context';
import { toast } from 'react-hot-toast';

const AuthCallback = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setUser } = useContext(UserContext);
  
  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Get the authorization code from URL
        const urlParams = new URLSearchParams(location.search);
        const code = urlParams.get('code');
        
        if (!code) {
          toast.error('Authentication failed: No code received');
          navigate('/login');
          return;
        }
        
        // Exchange code for tokens
        const response = await axios.post('/users/google-callback', { code });
        
        // Save token and user data
        localStorage.setItem('token', response.data.token);
        setUser(response.data.user);
        
        toast.success('Logged in with Google successfully!');
        navigate('/home');
      } catch (error) {
        console.error('Google auth callback error:', error);
        toast.error(error.response?.data?.message || 'Authentication failed');
        navigate('/login');
      }
    };
    
    handleCallback();
  }, [location, navigate, setUser]);
  
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-white mb-6">Processing Login...</h2>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
      </div>
    </div>
  );
};

export default AuthCallback;