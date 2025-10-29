import { Button } from "./ui/button"
const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">My Mini Blog</h1>
        <div className="space-x-4 mt-2">
          <Button>
          <a href='/' className="text-gray-300 hover:text-white transition duration-300">Home</a>
          </Button>
          <a href='/create' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">New Blog</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
