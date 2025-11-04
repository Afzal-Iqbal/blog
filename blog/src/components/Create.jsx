import { useState } from "react";
import { Button } from "./ui/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Afzal');
  const [isPending, setIsPending] = useState(false); // ✅ lowercase 's'
  const navigate = useNavigate();
//  const goBack = () => {
//     navigate('/');
//  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true); // ✅ lowercase 's'

    try {
      const response = await axios.post("http://localhost:8000/blogs", blog, {
        headers: { "Content-Type": "application/json" }
      });
      console.log("New blog added:", response.data);
      setIsPending(false);
    } catch (error) {
      console.error("Error adding blog:", error);
      setIsPending(false); // ✅ reset pending even on error
    }
  };

  return (
    <div className="create max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md font-bold">
      <h2 className="text-2xl mb-6 text-center text-gray-800">Add a New Blog</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="text-gray-700">Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="text-gray-700">Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="border border-gray-300 rounded-md p-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <label className="text-gray-700">Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Afzal">Afzal</option>
          <option value="Junaid">Junaid</option>
        </select>

        {!isPending && <Button onClick={() => navigate('/')}>Add Blog</Button>}
        {isPending && <Button  disabled>Adding Blog...</Button>}
      </form>
    </div>
  );
};

export default Create;
