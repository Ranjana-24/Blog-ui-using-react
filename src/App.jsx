import HeroPage from "./Pages/HeroPage";

import "./index.css";
import BlogsPage from "./Pages/BlogsPage";

import BlogDetailedPage from "./Pages/BlogDetailedPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ErrorMsg from "./components/ErrorMsg";
import CreateNewPage from "./Pages/CreateNewPage";
import EditPage from "./Pages/EditPage";
import {useState, useEffect} from "react";
import { FiLoader } from "react-icons/fi";
import ScrollToTopButton from "./components/ScrollToTopButton";
import useScrollToTop from "./Hooks/useScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
export default function App() {

  // const [Loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);

  // if(Loading){
  //   return (
  //   <div className="flex items-center h-screen bg-green-100">
  //     <FiLoader className="animate-spin text-green-800 text-5xl ml-150" />
  //     </div>
  //   )
  // }

function AppContent(){
  useScrollToTop();
    return (
 
    <Routes>
        
      <Route
  path="/"
  element={
    <>
      <HeroPage />
      <BlogsPage />
    </>
  }
/>
      <Route path="/blog" element={<BlogsPage />} />
      <Route path="/blog/:id" element={<BlogDetailedPage />} />
    <Route path="*" element={<ErrorMsg/>}></Route>
    <Route path="/createnew" element={<CreateNewPage   />} />
    <Route path="/blog/:id/edit" element={<EditPage   />} />
    
    </Routes>
  
    )
}

// const [spinLoad, setSpinLoad] = useState(true);
//  useEffect(() => {
//    setTimeout(() => {
//      setSpinLoad(false);
//    }, 2000);
//  }, []);
 
//  if(spinLoad){
//   return (
//   <div className="flex items-center h-screen bg-green-100">
//     <FiLoader className="animate-spin text-green-800 text-5xl ml-180 " />
//     </div>
//   )
//  }
  return (
    <Router>
      <ErrorBoundary>
      <AppContent/>
      </ErrorBoundary>
      <ScrollToTopButton />
    </Router>
 
  );
}