import { Button } from "./ui/button";

function BlogList({blogs, title, handleDelete}) { // these are teh props we will get from the parent component to the child component
  // const blogs = props.blogs || [];
  // const title = props.title;

  const truncate = (text, n = 160) => {
    if (!text) return "";
    return text.length > n ? text.slice(0, n).trim() + "…" : text;
  };

  return (
    <div className="home min-h-screen flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">{title}</h1> 
      <div className="grid gap-6 w-full max-w-3xl">
        {/* blogs.map((blog) => is k matlb ya ha k blogs main aik aik object blog main aye ga then su ko template ki help se display krrahy hain */}
        
        {blogs.map((blog) => (
          <div
            className="blog-preview border border-gray-200 rounded-lg shadow-sm p-6 transition-transform hover:scale-[1.02] hover:shadow-md"
            key={blog.id}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              {blog.title}
            </h2>
            <p className="text-gray-700 mb-4">{blog.body}</p>
            <div className="blog-footer flex justify-between items-center mt-4">
    <p className="text-sm text-indigo-500 font-medium">Written by {blog.author}</p>
    <Button onClick={() => handleDelete(blog.id)}>Delete Blog</Button>
</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
