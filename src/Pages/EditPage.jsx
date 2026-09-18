import { useNavigate, useParams } from "react-router-dom";
import ErrorMsg from "../components/ErrorMsg";
import { useContext, useState } from "react";
import {BlogContext} from "../context/BlogContext";
import Navbar from "../components/Navbar";
import { FaArrowLeft } from "react-icons/fa";
//import { validateBlog } from "../Validation";
import Button from "../ui/Button";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { blogSchema } from "../schemas/blogSchema";

export default function EditPage() {
    const { BlogsData, setBlogsData } = useContext(BlogContext);
    //const [valErrors, setValErrors] = useState({});
    const {register, handleSubmit, formState: { errors }} = useForm( 
      {resolver: zodResolver(blogSchema)});
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

    // const handleEdit = (e) => {
    //     e.preventDefault();
    //     const formData = new FormData(e.target);
    //     const newBlog = {
    //         id: selectedBlog.id,
    //         title: formData.get("title"),
    //         image: `https://picsum.photos/800/500?random=${selectedBlog.id}`,
    //         content: formData.get("content"),
    //         category: formData.get("category"),
    //         date: formData.get("date"),
    //         author: formData.get("author"),
    //     };
    //     const valErrors = validateBlog(newBlog);
    //     setValErrors(valErrors);
    //     if (Object.keys(valErrors).length > 0) {
    //         return;
    //     }

    //     const newBlogsData = BlogsData.map((blog) => {
    //         if (blog.id === newBlog.id) {
    //             return newBlog;
    //         }
    //         return blog;
           
    //     });
    
    //     setBlogsData(newBlogsData);
    //     toast.success("Blog Updated Successfully");
    //     navigate(`/blog/${selectedBlog.id}`);
    // }

  const onSubmit = (data) => {
  const updatedBlog = {
    ...selectedBlog,
    title: data.title,
    image: data.image,
    content: data.content,
    category: data.category,
    date: data.date,
    author: data.author,
  };

  const newBlogsData = BlogsData.map((blog) =>
    blog.id === selectedBlog.id ? updatedBlog : blog
  );

  setBlogsData(newBlogsData);

  toast.success("Blog Updated Successfully");
  navigate(`/blog/${selectedBlog.id}`);
};
        return (
        <>
        <Navbar/>
        <div className="min-h-screen bg-white text-black dark:bg-gray-800 px-6 py-12 sm:px-3 sm:py-6 ld-px-10 
        lg:py-10">
        <Button
        type="button"
        onClick={() => navigate("/")}
        className="text-white font-bold"
      >
        {/* Back to Blogs */}
        <FaArrowLeft />

      </Button>
      
        <form onSubmit={handleSubmit(onSubmit)}
        className="mx-auto max-w-4xl rounded-2xl border 
        border-gray-700 bg-green-100 p-8 shadow-lg bg-white text-black dark:bg-gray-800 
        dark:text-white border border-gray-600">
        <div className="mb-5 ">
          <label className="mb-2 block font-semibold text-gray-400">
            Title
          </label>

          <input
            type="text"
            //name="title"
              {...register("title")}
           defaultValue={selectedBlog.title}
            className="w-full rounded-xl border border-gray-600 p-3 outline-none 
            focus:ring-2"
          />
          {errors.title && <p className="text-red-500 text-xs">{errors.title.message}</p>}
        </div>

        <div className="mb-5">
          <label className="mb-2 block font-semibold text-gray-400">
            Image URL
          </label>

          <input
            type="text"
            //name="image"
              {...register("image")}
            defaultValue={selectedBlog.image}
            className="w-full rounded-xl border border-gray-600 p-3 outline-none "
          />
           {errors.image && <p className="text-red-500 text-xs">{errors.image.message}</p>}
        </div>

        <div className="mb-5">
          <label className="mb-2 block font-semibold text-gray-400">
            Content
          </label>

          <textarea
          type="text"
            //name="content"
              {...register("content")}
            placeholder="Write your blog content"
            defaultValue={selectedBlog.content || selectedBlog.body}
            rows="6"
            className="w-full rounded-xl border border-gray-600 p-3 outline-none "
          />
          {errors.content && <p className="text-red-500 text-xs">{errors.content.message}</p>}
        </div>

        <div className="mb-5">
          <label className="mb-2 block font-semibold text-gray-400">
            Category
          </label>

          <input
            type="text"
            //name="category"
              {...register("category")}
            defaultValue={selectedBlog.category || selectedBlog.tags?.[0]}
            className="w-full rounded-xl border border-gray-600 p-3 outline-none "
          />
          {errors.category && <p className="text-red-500 text-xs">{errors.category.message}</p>}
        </div>

        <div className="mb-5">
          <label className="mb-2 block font-semibold text-gray-400">
            Date
          </label>

          <input
            type="date"
            //name="date"
            {...register ("date")}
            defaultValue={selectedBlog.date || selectedBlog.createdAt}
            className="w-full rounded-xl border border-gray-700 p-3 outline-none "
          />
          {errors.date && <p className="text-red-500 text-xs">{errors.date.message}</p>}
        </div>

        <div className="mb-6">
          <label className="mb-2 block font-semibold text-gray-400">
            Author
          </label>

          <input
            type="text"
            //name="author"
            {...register("author")}
            defaultValue = {selectedBlog.author}
            className="w-full rounded-xl border border-gray-700 p-3 outline-none "
          />
          {errors.author && <p className="text-red-500 text-xs">{errors.author.message}</p>}
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