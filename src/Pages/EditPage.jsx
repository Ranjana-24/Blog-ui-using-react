import { useNavigate, useParams } from "react-router-dom";
import ErrorMsg from "../components/ErrorMsg";
import { useContext, useState } from "react";
import {BlogContext} from "../context/BlogContext";
import Navbar from "../components/Navbar";
import { FaArrowLeft } from "react-icons/fa";
import { validateBlog } from "../Validation";
import Button from "../ui/Button";
import toast from "react-hot-toast";

export default function EditPage() {
    const { BlogsData, setBlogsData } = useContext(BlogContext);
    const [valErrors, setValErrors] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();
    const selectedBlog = BlogsData.find((blog) => blog.id === Number(id)
    );
    if(!selectedBlog){
        return(
            <div className="min-h-screen bg-green-100 p-10 text-center">
                <ErrorMsg />
            </div>
        )
    }

    const handleEdit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newBlog = {
            id: selectedBlog.id,
            title: formData.get("title"),
            image: `https://picsum.photos/800/500?random=${selectedBlog.id}`,
            content: formData.get("content"),
            category: formData.get("category"),
            date: formData.get("date"),
            author: formData.get("author"),
        };
        const valErrors = validateBlog(newBlog);
        setValErrors(valErrors);
        if (Object.keys(valErrors).length > 0) {
            return;
        }

        const newBlogsData = BlogsData.map((blog) => {
            if (blog.id === newBlog.id) {
                return newBlog;
            }
            return blog;
           
        });
    
        setBlogsData(newBlogsData);
        toast.success("Blog Updated Successfully");
        navigate(`/blog/${selectedBlog.id}`);
    }

        return (
        <>
        <Navbar/>
        <div className="min-h-screen bg-green-100 px-6 py-12 sm:px-3 sm:py-6 ld-px-10 
        lg:py-10">
        <Button
        type="button"
        onClick={() => navigate("/")}
        className="text-white font-bold"
      >
        {/* Back to Blogs */}
        <FaArrowLeft />

      </Button>
      
        <form onSubmit={handleEdit}
        className="mx-auto max-w-4xl rounded-2xl border 
        border-green-900 text-black bg-green-100 p-8 shadow-lg">
       
        <div className="mb-5 ">
          <label className="mb-2 block font-semibold text-gray-700">
            Title
          </label>

          <input
            type="text"
            name="title"
           defaultValue={selectedBlog.title}
            className="w-full rounded-xl border border-green-900 p-3 outline-none focus:ring-2 focus:ring-green-500"
          />
          {valErrors.title && <p className="text-red-500 text-xs">{valErrors.title}</p>}
        </div>

        <div className="mb-5">
          <label className="mb-2 block font-semibold text-gray-700">
            Image URL
          </label>

          <input
            type="text"
            name="image"
            defaultValue={selectedBlog.image}
            className="w-full rounded-xl border border-green-900 p-3 outline-none focus:ring-2 focus:ring-green-500"
          />
        
        </div>

        <div className="mb-5">
          <label className="mb-2 block font-semibold text-gray-700">
            Content
          </label>

          <textarea
            name="content"
            placeholder="Write your blog content"
            defaultValue={selectedBlog.content || selectedBlog.body}
            rows="6"
            className="w-full rounded-xl border border-green-900 p-3 outline-none focus:ring-2 focus:ring-green-500"
          />
          {valErrors.content && <p className="text-red-500 text-xs">{valErrors.content}</p>}
        </div>

        <div className="mb-5">
          <label className="mb-2 block font-semibold text-gray-700">
            Category
          </label>

          <input
            type="text"
            name="category"
            defeaultValue={selectedBlog.category || selectedBlog.tags?.[0]}
            className="w-full rounded-xl border border-green-900 p-3 outline-none focus:ring-2 focus:ring-green-500"
          />
          {valErrors.category && <p className="text-red-500 text-xs">{valErrors.category}</p>}
        </div>

        <div className="mb-5">
          <label className="mb-2 block font-semibold text-gray-700">
            Date
          </label>

          <input
            type="date"
            name="date"
            defaultValue={selectedBlog.date || selectedBlog.createdAt}
            className="w-full rounded-xl border border-green-900 p-3 outline-none focus:ring-2 focus:ring-green-500"
          />
          {valErrors.date && <p className="text-red-500 text-xs">{valErrors.date}</p>}
        </div>

        <div className="mb-6">
          <label className="mb-2 block font-semibold text-gray-700">
            Author
          </label>

          <input
            type="text"
            name="author"
            defaultValue = {selectedBlog.author}
            className="w-full rounded-xl border border-green-900 p-3 outline-none focus:ring-2 focus:ring-green-500"
          />
          {valErrors.author && <p className="text-red-500 text-xs">{valErrors.author}</p>}
        </div>

        <Button
          type="submit"
          className= "ml-175 text-white font-bold"
        >
          Edit Blog
        </Button>
        </form>
        </div>
        </>
    )
}