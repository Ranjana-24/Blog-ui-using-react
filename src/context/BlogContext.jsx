import { createContext, useState, useEffect } from "react";

export const BlogContext = createContext();

export default function BlogContextProvider({ children }) {
   const [loading, setLoading] = useState(false);
   const [BlogsData, setBlogsData] = useState([]);
   const [skip, setSkip] = useState(0);
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


useEffect(() => {
  fetchBlog();
}, []);
  return (
    <BlogContext.Provider
      value={{
        BlogsData,
        setBlogsData,
        fetchBlog,
         loading,
         setLoading
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}

// Author:  "User " + blog.userId ,
      // Author: authors[index]


