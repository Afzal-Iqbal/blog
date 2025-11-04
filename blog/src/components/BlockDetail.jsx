import { useParams, useNavigate } from "react-router-dom"; // ✅ useNavigate added
import useFetch from "./useFetch";
import { Button } from "./ui/button";
import axios from "axios";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // ✅ useNavigate hook
  const { data, error, isPending } = useFetch("http://localhost:8000/blogs/" + id);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/blogs/${id}`);
      console.log("Blog deleted");
      navigate(-1); // ✅ This is the correct way to go back
    } catch (error) {
      console.log("Failed to delete:", error.message);
    }
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-50">
      <div className="blog-detail max-w-xl w-full mt-16 p-6 bg-white rounded-lg shadow-md">
        {isPending && <div className="text-2xl text-blue-700 text-center">Loading...</div>}
        {error && <div className="text-red-500 text-center">{error}</div>}
        {data && (
          <article>
            <h2 className="text-[20px] text-[#f1356d] mb-[10px] text-center">{data.title}</h2>
            <p className="text-center text-gray-600 mb-4">Written by {data.author}</p>
            <div className="text-gray-800 leading-relaxed mb-6">{data.body}</div>
            <Button onClick={handleDelete} className="bg-red-500 hover:bg-red-600 text-white">
              Delete Blog
            </Button>
          </article>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
