import { Button } from "@/components/ui/button"
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <p className=" mb-3 ">Welcome to the blog!</p>
      <Button variant="secondary" onClick = {()=>{
        setCount(count + 1)
      }}>Click me</Button>
      <p className=" mt-3 ">Count: {count}</p>
    </div>
  )
}

export default App