import { Button } from "./ui/button"
import {Link} from 'react-router-dom';

// link enable you to navigate to another page or components without sending fresh request every time it find to="path" path from router and then routes it to there quickly 
const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <h1 className="text-white text-2xl font-bold text-center sm:text-left">My Mini Blog</h1>
        <div className="space-x-4 flex flex-wrap justify-center sm:justify-end">
          <Button>
            <Link to='/' className="text-gray-300 hover:text-white transition duration-300">Home</Link>
          </Button>
          <Link to='/create' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
            New Blog
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
