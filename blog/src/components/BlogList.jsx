import { Link } from "react-router-dom";
import { Button } from "./ui/button";

function BlogList({blogs, title, handleDelete}) { // these are the props we will get from the parent component to the child component
  // const blogs = props.blogs || [];
  // const title = props.title;

  const truncate = (text, n = 160) => {
    if (!text) return "";
    return text.length > n ? text.slice(0, n).trim() + "…" : text;
  };

  return (
    <div className="home min-h-screen flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">{title}</h1> 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* blogs.map((blog) => is k matlb ya ha k blogs main aik aik object blog main aye ga then su ko template ki help se display krrahy hain */}
        
        {blogs.map((blog) => (
          <div
            className="blog-preview border border-gray-200 rounded-lg shadow-sm p-6 bg-white transition-transform hover:scale-[1.02] hover:shadow-md"
            key={blog.id}
          >
              <Link to={`/blogs/${blog.id}`}  className="no-underline">
              {/* ya id hamari blogdetail main hum ne params use kiye huay jis ki waja se hum id dynamic karrah ahin */}

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
              {blog.title}
            </h2>
              </Link>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">{truncate(blog.body)}</p>
            <div className="blog-footer flex justify-between items-center mt-4">
              <p className="text-sm text-indigo-500 font-medium">Written by {blog.author}</p>
              <Button onClick={() => handleDelete(blog.id)} className="text-sm sm:text-base px-3 py-1">
                Delete Blog
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
