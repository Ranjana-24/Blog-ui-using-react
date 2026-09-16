import {useParams, Link, useNavigate} from "react-router-dom";
import ErrorMsg from "../components/ErrorMsg";
import { useContext, useState } from "react";
import {BlogContext} from "../context/BlogContext";
import Navbar from "../components/Navbar";
import Button from "../ui/Button";
import { FaArrowLeft } from "react-icons/fa";
import { IoCreate } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";




import DeleteConfirmationModal from "../modal/DeleteConfirmationModal"; 

export default function BlogDetailedPage() {
  const { BlogsData, setBlogsData } = useContext(BlogContext);
  const [confirmDlt, setConfirmDlt] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const selectedBlog = BlogsData.find(
    (blog) => blog.id === Number(id)
  );

  if (!selectedBlog) {
    return (
      <div className="min-h-screen bg-green-100 p-10 text-center">
        <ErrorMsg />
      </div>
    );
  }

  const handleDelete = () => {
    // cutom browsers dlt popup
    // confirm("Are you sure you want to delete this blog?");
    
    const newBlogsData = BlogsData.filter((tightblog) => blog.id !== Number(id));
    setBlogsData(newBlogsData);
    toast.success("Blog Deleted Successfully");
    navigate("/");
  }

  return (
    <>
      {confirmDlt ? (
        <DeleteConfirmationModal
          confirmDlt={confirmDlt}
          setConfirmDlt={setConfirmDlt}
          handleDelete={handleDelete}
        />
      ) : null}

      <Navbar/>

      <div className="min-h-screen bg-green-100 px-3 sm:px-6 sm:py-8 ">

        <Link 
          to="/" 
          className="text-green-700 hover:text-green-600 
          transition duration-300 hover:underline"
        >
          <Button className="bg-green-600 text-black">
            <FaArrowLeft />
          </Button>
        </Link>

        <div className="mb-20  mr-3 sm:ml-6 sm:mr-6 
        lg:ml-70 lg:mr-10 py-2 px-2 rounded-xl">

          <div className="flex flex-wrap justify-end ml-10 gap-2">
            <Button 
              onClick={() => navigate(`/blog/${selectedBlog.id}/edit`)} 
              className="text-white font-bold px-2"
            ><IoCreate/>
            </Button>

            <Button 
              onClick={() => setConfirmDlt(true)}
              variant="danger"
              className="text-white font-bold px-2"
            >
              <MdDelete/>
            </Button>
          </div>
          <div className="mt-2">
            <p className="text-gray-800 max-w-4xl break-words 
            w-full ml-3 sm:ml-10 mb-6 font-bold font-serif h-15
            text-3xl sm:text-4xl md:text-5xl ">
              {selectedBlog.title}
            </p>
          </div>
          <img 
            src={`https://picsum.photos/800/500?random=${selectedBlog.id}`}
            alt="image" 
            className="mb-6 w-full sm:w-full lg:w-220 
            h-auto sm:h-80 lg:h-90 rounded-xl 
            lg:ml-10 shadow-lg"
          />

          <p 
            className="font-normal ml-3 sm:ml-10
              max-w-1xl text-green-600 bg-green-200
              px-3 py-1 rounded-full mt-2 mb-4
              font-serif inline-block"
          >
             {selectedBlog.category || selectedBlog.tags?.[0]}
          </p>

          <p 
            className="mb-6 text-lg sm:text-xl font-serif 
            leading-8 ml-3 sm:ml-10 max-w-4xl 
            text-gray-600"
          >
            {selectedBlog.content || selectedBlog.body}
          </p>

   
          <p 
            className="font-normal font-serif leading-7 
            text-base text-gray-600 ml-3 sm:ml-10 mt-4"
          >
            • Created At: {selectedBlog.date || selectedBlog.createdAt}
          </p>

          <p 
            className="font-normal font-serif leading-7 
            text-base text-gray-600 ml-3 sm:ml-10 mt-1"
          >
            • Author: {selectedBlog.author}
          </p>

        </div>
      </div>
    </>
  );
}