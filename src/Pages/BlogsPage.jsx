//import { Suspense, lazy } from "react";
//const Blog = lazy(() => import("../components/Blog"));
import Blog from "../components/Blog";
import { useContext } from "react";
import {BlogContext} from "../context/BlogContext";
export default function BlogsPage() {
  const { BlogsData, setBlogsData, fetchBlog, loading} = useContext(BlogContext);
  return (
    <>
  
      <Blog 
        BlogsData={BlogsData}
        setBlogsData={setBlogsData}
        fetchBlog={fetchBlog}
        loading = {loading}

      />
    
    </>
  );
}