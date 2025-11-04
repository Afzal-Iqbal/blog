import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

function Home() {
  const { data: fetchedBlogs, isPending, err } = useFetch("http://localhost:8000/blogs");
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    if (fetchedBlogs) {
      setBlogs(fetchedBlogs); // ✅ Sync fetched data into local state
    }
  }, [fetchedBlogs]);

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:8000/blogs/${id}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      console.log("Blog deleted");
      setBlogs(blogs.filter(blog => blog.id !== id)); // ✅ Remove from local state
    } else if (response.status === 404) {
      console.warn("Blog not found. It may have already been deleted.");
    } else {
      console.error("Failed to delete blog:", response.status);
    }
  };

  return (
    <div className="home content px-4 sm:px-6 lg:px-8 py-10 max-w-6xl mx-auto space-y-10">
      {err && <div className="text-red-500 text-center text-base sm:text-lg">{err}</div>}
      {isPending && <div className="text-blue-600 text-center text-base sm:text-lg">Loading...</div>}
      {blogs && <BlogList blogs={blogs} title={"All Blogs"} handleDelete={handleDelete} />}
      {blogs && (
        <BlogList
          blogs={blogs.filter(blog => blog.author === "Afzal")}
          title={"Afzal's Blogs"}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
}

export default Home;
