import { useState } from "react";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import BlogDetail from "./components/BlockDetail";
import NotFound from "./components/NotFound";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <div>
        {/* Routes make sure that only one route render on page */}
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create/>}/>
          <Route path="/blogs/:id" element={<BlogDetail/>}/> {/*:id is the param => parameter i passed while defined the route there it can be accepted main component*/}
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
