import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <h2 className="text-3xl font-semibold text-red-600 mb-4">Sorry</h2>
      <p className="text-lg text-gray-700 mb-6">That page cannot be found.</p>
      <Link
        to="/"
        className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition"
      >
        Back to the homepage
      </Link>
    </div>
  );
};

export default NotFound;
