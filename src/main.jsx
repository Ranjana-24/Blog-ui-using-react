import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BlogContextProvider from "./context/BlogContext";
import {BlogContext} from "./context/BlogContext";
import { Toaster } from 'react-hot-toast';
import { FiLoader } from "react-icons/fi";
import ThemeProvider from "./context/ThemeContext";

function InitialLoader() {
  return (
    <div className="flex h-screen items-center justify-center bg-white text-black 
    dark:bg-gray-800 dark:text-white">
      <FiLoader className="animate-spin text-5xl text-black" />
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  
  <StrictMode> 
    <Suspense fallback={<InitialLoader />}>
    <BlogContextProvider> 
      <ThemeProvider>
    <App />
    <Toaster />
    </ThemeProvider>
    </BlogContextProvider>
    </Suspense>
  </StrictMode>
)
