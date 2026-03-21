import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import 'remixicon/fonts/remixicon.css'
import App from './App.jsx'

// Remove StrictMode to prevent double rendering in development
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)


