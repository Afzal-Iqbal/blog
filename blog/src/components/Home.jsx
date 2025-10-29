import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import axios from "axios";


function Home() {
  const [blogs, setBlogs] = useState(null);
  const [isPending , setIsPending] = useState(true);
  const [err , setErr] = useState(null);


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
useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/blogs");
      if(res.status < 200 || res.status >= 300){
        throw new Error("Could not fetch the data for that resource");
      }
      let actual_data = res.data;
      setBlogs(actual_data); // Axios puts the parsed JSON in res.data
      setIsPending(false);
      setErr(null);
    } catch (err) {
      console.log('Failed to fetch:', err.message);
      setErr(err.message);
      setIsPending(false);
    }
  };
  setTimeout(() => {
    
    fetchData();
  }, 1000);
}, []);


  return (
    <div className="home">
      {/* // FROM THIS COMPONENT I AM PASSING PROPS TO BlogList COMPONENT */}
      {err && <div className="text-red-500">{err} </div>}
    {isPending && <div className="text-blue-600"> Loading... </div>}
      {blogs && <BlogList blogs={blogs} title={"All Blogs"} handleDelete={handleDelete} />}
      {blogs && <BlogList blogs={blogs.filter((blog) => {
          return blog.author === "Afzal"})} title={"Afzal's Blogs"} handleDelete={handleDelete}/>}
          </div>
  );
}

export default Home;
