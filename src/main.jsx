import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BlogContextProvider from "./context/BlogContext";
import {BlogContext} from "./context/BlogContext";
import { Toaster } from 'react-hot-toast';
import { FiLoader } from "react-icons/fi";

function InitialLoader() {
  return (
    <div className="flex h-screen items-center justify-center bg-green-100">
      <FiLoader className="animate-spin text-5xl text-green-700" />
    </div>
  );
}


createRoot(document.getElementById('root')).render(
  
  <StrictMode> 
    <Suspense fallback={<InitialLoader />}>
    <BlogContextProvider>        
    <App />
    <Toaster />
    </BlogContextProvider>
    </Suspense>
  </StrictMode>
)
