import { useNavigate } from "react-router-dom";
import { useContext , useState} from "react";
import { BlogContext } from "../context/BlogContext";
import Button from "../ui/Button";
import Navbar from "../components/Navbar";
import { FaArrowLeft } from "react-icons/fa";
//import { validateBlog } from "../Validation";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { blogSchema } from "../schemas/blogSchema";

export default function CreateNewPage() {
  const { register, handleSubmit, formState: { errors } } = useForm(
  {resolver: zodResolver(blogSchema)}
  );
  const { BlogsData, setBlogsData } = useContext(BlogContext);
  //const [valErrors, setValErrors] = useState({});
  const navigate = useNavigate();
 
  // ----
  //const onSubmit = (e) => {
    //e.preventDefault();
  //const formData = new FormData(e.target);
  //   const onSubmit = (data) => {
  //   const newBlog = {
  //     id: Date.now(),
  //     title: formData.get("title"),
  //     image: formData.get("image"),
  //     content: formData.get("content"),
  //     category: formData.get("category"),
  //     date: formData.get("date"),
  //     author: formData.get("author"),
  //   };
  //   const valErrors = validateBlog(newBlog);
  //   setValErrors(valErrors);
  //   if (Object.keys(valErrors).length > 0) {
  //     return;
  //   }
  //   const newBlogsData = [newBlog,...BlogsData];

  //   setBlogsData(newBlogsData);
  //   toast.success("Blog Created Successfully");
  //   navigate("/");
  // };
  const onSubmit = (data) => {
    const newBlog = {
      id: Date.now(),
      title: data.title,
      image: data.image,
      content: data.content,
      category: data.category,
      date: data.date,
      author: data.author,
    };
    setBlogsData([newBlog, ...BlogsData]);
   toast.success("Blog Created Successfully");
  navigate("/");
  }

  return (
    <>
     <Navbar />
    <div className="min-h-screen bg-green-100 px-6 py-12 sm:px-3 sm:py-6 
    lg-px-10 lg:py-10">
     
      <Button
        type="button"
        className=""
        onClick={() => navigate("/")}
      >
        {/* Back to Blogs */}
        <FaArrowLeft />
      </Button>
    
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto max-w-4xl rounded-2xl border 
        border-green-900 bg-green-100 p-8 shadow-lg "
      >
        <div className="mb-5 ">
          <label className="mb-2 block font-semibold text-gray-700">
            Title*
          </label>

          <input
            type="text"
            {...register("title")}
            //name="title"
            placeholder="Enter blog title"
            //required
            className="w-full rounded-xl border border-green-900 p-3 outline-none focus:ring-2 focus:ring-green-500"
          /> 
          {errors.title && <p className="text-red-500 text-xs">{errors.title.message}</p>}
        </div>

        <div className="mb-5">
          <label className="mb-2 block font-semibold text-gray-700">
            Image URL*
          </label>

          <input
            type="text"
            {...register("image")}
            //name="image"
            placeholder="Enter image URL"
            //required
            className="w-full rounded-xl border border-green-900 p-3 outline-none 
            focus:ring-2 focus:ring-green-500"
          />
          {errors.image && <p className="text-red-500 text-xs">{errors.image.message}</p>}
        </div>

        <div className="mb-5">
          <label className="mb-2 block font-semibold text-gray-700">
            Content*
          </label>

          <textarea
            //name="content"
            {...register("content")}
            placeholder="Write your blog content"
            //required
            rows="6"
            className="w-full rounded-xl border border-green-900 p-3 outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.content && <p className="text-red-500 text-xs">{errors.content.message}</p>}
        </div>

        <div className="mb-5">
          <label className="mb-2 block font-semibold text-gray-700">
            Category
          </label>

          <input
            type="text"
            {...register("category")}
            name="category"
            placeholder="Enter category"
            //required
            className="w-full rounded-xl border border-green-900 p-3 outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.category && <p className="text-red-500 text-xs">{errors.category.message}</p>}
        </div>

        <div className="mb-5">
          <label className="mb-2 block font-semibold text-gray-700">
            Date
          </label>

          <input
            type="date"
            {...register("date")}
            name="date"
            //required
            className="w-full rounded-xl border border-green-900 p-3 outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.date && <p className="text-red-500 text-xs">{errors.date.message}</p>}
        </div>

        <div className="mb-6">
          <label className="mb-2 block font-semibold text-gray-700">
            Author*
          </label>

          <input
            type="text"
            {...register("author")}
            name="author"
            placeholder="Enter author name"
            // required
            className="w-full rounded-xl border border-green-900 p-3 outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.author && <p className="text-red-500 text-xs">{errors.author.message}</p>}
        </div>

        <Button
          type="submit"
          className="ml-175"
        >
          Create Blog
        </Button>
      </form>
    </div>
    </>
  );    
}