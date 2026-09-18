// import { createContext, useState, useEffect } from "react";

// export const BlogContext = createContext();

// export default function BlogContextProvider({ children }) {
//    const [loading, setLoading] = useState(false);
//    const [BlogsData, setBlogsData] = useState([]);
//    const [skip, setSkip] = useState(0);
//   // const [noposts, setNoposts] = useState(false);
// const authors = ["John", "Sarah", "David", "Emma", "Alex"];

//   const fetchBlog = async () => {
//       // setLoading(true);
//   try{
//     const response = await fetch(
//       `https://dummyjson.com/posts?limit=3&skip=${skip}`);
//     const data = await response.json();
     
//     if(data.posts.length === 0){
//       return;
//     }
//     const fettchedBlogs = data.posts.map((blog, index) => {
//     return{
//       ...blog,
//       createdAt: new Date().toLocaleDateString(),
//       author: `User ${blog.userId}`
//     };
//   });
//     setBlogsData((oldBlogs) => [
//       ...oldBlogs,
//       ...fettchedBlogs
//     ]);

//     setSkip((oldSkip) => oldSkip + 3);
//   }
//   catch(error){
//       console.log(error);
//       setLoading(false);
//     }
//   //finally{
//   //   setLoading(false);
//   // }
// };


// useEffect(() => {
//   fetchBlog();
// }, []);
//   return (
//     <BlogContext.Provider
//       value={{
//         BlogsData,
//         setBlogsData,
//         fetchBlog,
//          loading,
//          setLoading
//       }}
//     >
//       {children}
//     </BlogContext.Provider>
//   );
// }

// // Author:  "User " + blog.userId ,
//       // Author: authors[index]



import { createContext, useState } from "react";
export const BlogContext = createContext();

const initialBlogsPromise = fetch(
  "https://dummyjson.com/posts?limit=3&skip=0"
)
  .then((response) => response.json())
  .then((data) => {
    return data.posts.map((blog) => ({
      ...blog,
      createdAt: new Date().toLocaleDateString(),
      author: `User ${blog.userId}`
    }));
  });

// Suspense resource
const initialBlogsResource = {
  status: "pending",
  result: null,
  read() {
    if (this.status === "pending") {
      throw initialBlogsPromise;
    }
    if (this.status === "error") {
      throw this.result;
    }
    return this.result;
  }
};
initialBlogsPromise
  .then((blogs) => {
    initialBlogsResource.status = "success";
    initialBlogsResource.result = blogs;
  })
  .catch((error) => {
    initialBlogsResource.status = "error";
    initialBlogsResource.result = error;
  });
  
export default function BlogContextProvider({ children }) {
   const initialBlogs = initialBlogsResource.read();
   const [loading, setLoading] = useState(false);
   const [BlogsData, setBlogsData] = useState(initialBlogs);
   const [skip, setSkip] = useState(3);
  // const [noposts, setNoposts] = useState(false);
const authors = ["John", "Sarah", "David", "Emma", "Alex"];
  const fetchBlog = async () => {
      // setLoading(true);
  try{
    const response = await fetch(
      `https://dummyjson.com/posts?limit=3&skip=${skip}`);
    const data = await response.json();
    if(data.posts.length === 0){
      return;
    }
    const fettchedBlogs = data.posts.map((blog, index) => {
    return{
      ...blog,
      createdAt: new Date().toLocaleDateString(),
      author: `User ${blog.userId}`
    };
  });
    setBlogsData((oldBlogs) => [
      ...oldBlogs,
      ...fettchedBlogs
    ]);
    setSkip((oldSkip) => oldSkip + 3);
  }
  catch(error){
      console.log(error);
      setLoading(false);
    }
  //finally{
  //   setLoading(false);
  // }
};
// useEffect(() => {
//   fetchBlog();
// }, []);
  return (
    <BlogContext.Provider
      value={{
        BlogsData,
        setBlogsData,
        fetchBlog,
        loading,
        setLoading,
        initialBlogs
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}

