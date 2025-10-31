import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import axios from "axios";
import useFetch from "./useFetch";


function Home() {
  // means grab the data and call it as blogs
 const {data : blogs, isPending, err} = useFetch("http://localhost:8000/blogs");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  // useEffect(() =>{
  //   axios.get("http://localhost:8000/blogs")
  //   .then((response) =>{
  //     setBlogs(response.data);
  //   }).catch((error) =>{
  //     console.log("Error fetching data:", error);
  //   })
  // },[])


  return (
    <div className="home">
      {/* // FROM THIS COMPONENT I AM PASSING PROPS TO BlogList COMPONENT */}
      {/* this means that when i have err what you need to do  */}
      {err && <div className="text-red-500">{err} </div>}  

    {isPending && <div className="text-blue-600"> Loading... </div>}
      {blogs && <BlogList blogs={blogs} title={"All Blogs"} handleDelete={handleDelete} />}
      {blogs && <BlogList blogs={blogs.filter((blog) => {
          return blog.author === "Afzal"})} title={"Afzal's Blogs"} handleDelete={handleDelete}/>}
          </div>
  );
}

export default Home;
