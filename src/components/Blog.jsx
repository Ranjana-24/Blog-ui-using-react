import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { FaForward } from "react-icons/fa6";
import { FaBackward } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import NoPosts from "./NoPosts";

export default function Blog({ BlogsData, setBlogsData, fetchBlog, loading}) {
  const [selectedBlog, setSelectedBlog] = useState(BlogsData[0]);
  const [currentPage, setCurrentPage] = useState(1);
  

  const postsPerPage = 3;
  const startIndex = (currentPage - 1) * postsPerPage;

const currentBlogs = BlogsData.slice(
  startIndex,
  startIndex + postsPerPage
);
const totalPages = Math.ceil(BlogsData.length / postsPerPage);

  return (
    <>
      <hr className="border border-gray-300" />
{loading && BlogsData.length === 0 ? (
  <div className="grid grid-cols-1 gap-1 mt-10 sm:gap-6 md:grid-cols-2
   lg:grid-cols-3 lg:gap-8">
    {/* {[1, 2, 3].map((item) => ( */}
     {Array(3).fill(null).map((_, index) => (
      <div
        key={index}
        className="mx-auto w-full max-w-md overflow-hidden rounded-2xl bg-white "
      >
        {/* Image skeleton */}
        <div className="h-40 w-full animate-pulse bg-gray-300 sm:h-56 md:h-64"></div>

        <div className="p-4 sm:p-5 md:p-6">
          {/* Title skeleton */}
          <div className="mb-4 h-6  animate-pulse rounded bg-gray-300"></div>

          {/* Category skeleton */}
          <p className="mb-3 h-5 w-30 animate-pulse rounded-full bg-gray-300"></p>

          {/* Date skeleton */}
          <p className="mb-3 h-4 w-40 animate-pulse rounded bg-gray-300"></p>

          {/* Author skeleton */}
          <p className="mb-5 h-4 w-32 animate-pulse rounded bg-gray-300"></p>

          {/* Button skeleton */}
          <div className="h-8 w-24 animate-pulse rounded bg-gray-300"></div>
        </div>
      </div>
    ))}
  </div>
  // otherwise
      ) : BlogsData.length === 0 && loading === false ? (
           <NoPosts />
      ) : (
        <div className="min-h-screen bg-green-100 px-3 py-4 xs:px-4 xs:py-6 sm:px-6 
         sm:py-8 md:px-8 lg:px-10 lg:py-10">
        {/* Fetch button */}
        {/* <div className="mb-2 text-center"> */}
          {/* <button
    onClick={async () => {
    setLoading(true);

    try {
      await fetchBlog();
    } catch {
      setLoading(false);
    }
  }}
  disabled={loading}
            className="w-full max-w-xs rounded-full bg-green-700 px-4 py-2 text-sm 
            font-semibold mb-5 text-white hover:bg-green-700 sm:w-auto sm:px-6 sm:py-3 
            sm:text-base"  >
            Fetch Posts
            {loading ? "Loading..." : "Fetch Posts"}
          </button> */}
        {/* </div> */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-0">
          {currentBlogs.map((blog) => (
            <div
              key={blog.id}
              className=" mx-auto mb-4 w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-lg 
              transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:mb-8"
            >
              <img
                src={`https://picsum.photos/800/500?random=${blog.id}`}
                alt={blog.title}
                className="h-40 w-full object-cover xs:h-48 sm:h-56 md:h-64"
              />

              <div className="p-4 sm:p-5 md:p-6">
                <h1 className="mb-3 text-xl font-bold text-gray-900 sm:mb-4 sm:text-2xl">
                  Title: {blog.title}
                </h1>

                <p className="mb-2 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                  {/* category: {blog.tags[0]} */}
                  {blog.category || blog.tags?.[0]}
                </p>

                <p className="mb-2 text-sm text-gray-600">
                  CreatedAt: {blog.createdAt || blog.date}
                </p>

                <p className="mb-5 text-sm font-semibold text-gray-800">
                  Author: {blog.author}
                </p>

                <Link
                  to={`/blog/${blog.id}`}
                  className = "ml-75">
                    <Button className="bg-green-100 text-black ml-15 ">
                    <FaArrowRight  />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">

           <button className="bg-green-700 p-2 mr-2 cursor-pointer 
           disabled:cursor-not-allowed disabled:opacity-50 "
           onClick={() => setCurrentPage(currentPage - 1)}
           disabled={currentPage === 1}
           ><FaBackward /></button>

           <button className="bg-green-700 p-2 cursor-pointer 
           disabled:cursor-not-allowed disabled:opacity-50"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
           ><FaForward /></button>
      </div>
      </div>
      )}
      
    </>
  );
}