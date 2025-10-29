import { useState } from "react";
import Navbar from "./components/navbar";
import Home from "./components/Home";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Navbar/>
      <div className="content p-8 justify-center" >
        
        <Home/>
        
      </div>
    </div>
  )
}

export default App
