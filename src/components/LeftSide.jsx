import Button from "../ui/Button";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {BlogContext} from "../context/BlogContext";
import { IoCreate } from "react-icons/io5";
import {motion} from "framer-motion";

export default function LeftSide() {
  const { fetchBlog, loading } = useContext(BlogContext);
  const navigate = useNavigate();
  return (
    
    <div className="w-full md:w-1/2">
      {/* <button className="bg-green-700 rounded-full px-6 py-2 text-white 
  transition-transform duration-200 hover:-translate-y-1 ml-5 mt-5 sm:ml-10 sm:mt-0 md:ml-20"
      onClick={() => navigate("/createnew")}>
        Create New Blog</button> */}
      {/* <h1 className=" font-playfair font-bold tracking-tight font-bold text-black mt-5
      text-3xl sm:text-4xl md:text-5xl ml-5 sm:ml-10 md:ml-20
    
      ">
        Stories Redefined in
      </h1> */}
      <h1
        className="font-fraunces  tracking-wide  font-size:24 font-bold tracking-tight text-black 
        text-4xl sm:text-5xl md:text-7xl ml-5 sm:ml-10 md:ml-20 font-serif sm:text-5xl md:text-7xl
  ml-5 sm:ml-10 md:ml-20"
        >
        <i>
        Stories Redefined in
        </i>
      </h1>


      <h1 className="font-fraunces font-serif tracking-wide font-bold font-size:25 tracking-tight text-black 
  text-4xl sm:text-5xl md:text-7xl ml-5 sm:ml-10 md:ml-20"

  ><i>Every Read</i></h1>
      <p className="font-serif text-2xl mt-8 ml-5 sm:ml-10 md:ml-20 text-gray-800 break-words ">
   Experience ideas, stories, and inspiration curated for every curious mind.
From insightful articles to captivating stories, every read is crafted to inform, inspire, and leave a lasting impression.
      </p>

      <div className="flex font-fraunces text-1xl h-10 flex-wrap items-center gap-2 
      sm:gap-6 text-black 
      font-bold mt-5 ml-5 sm:ml-10 md:ml-20">
        <p>Fresh Content</p>
        <p>Expert insights</p>
        <p>Inspiring stories</p>
      </div>
      <div className="flex flex-wrap gap-4 sm:mb-5 sm:gap-6 ml-5 sm:ml-10 md:ml-20 mt-6">
        {/* <Button
          text="Begin Reading"
          classname={`bg-green-700 rounded-full px-6 py-2 
            text- transition-transform duration-200 hover:-translate-y-1`}
        /> */}
        
        {/* <Button
          text="Discover Stories"
          classname={`text-green-900 border border-green-900 
            rounded-full px-6 py-2 transition-transform duration-200 
            hover:-translate-y-1`}
        /> */}
          <Button 
          variant = "success"
          className = "font-bold text-white py-4 px-4 hover:text-gray"
          onClick={() => navigate("/createnew")} >
      
              Create new Blog
          </Button>

          <Button
           onClick={fetchBlog}
           disabled={loading}
           className="text-white font-bold hover:text-gray px-8 "
          >
           {loading ? "Loading..." : "Fetch Posts"}
          </Button>
      </div>
    </div>
  );
}
