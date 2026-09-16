import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BlogContextProvider from "./context/BlogContext";
import {BlogContext} from "./context/BlogContext";
import { Toaster } from 'react-hot-toast';
createRoot(document.getElementById('root')).render(
  
  <StrictMode>  
    <BlogContextProvider>        
    <App />
    <Toaster />
    </BlogContextProvider>
  </StrictMode>
)
