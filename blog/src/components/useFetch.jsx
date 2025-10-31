import axios from "axios";
import { useState, useEffect } from "react";
const useFetch = (url) => {

     const [data, setData] = useState(null);
      const [isPending , setIsPending] = useState(true);
      const [err , setErr] = useState(null);
    
    useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await axios.get(url);
      if(res.status < 200 || res.status >= 300){
        throw new Error("Could not fetch the data for that resource");
      }
      let actual_data = res.data;
      setData(actual_data); // Axios puts the parsed JSON in res.data
      setIsPending(false);
      setErr(null);
    } catch (err) {
      console.log('Failed to fetch:', err.message);
      setErr(err.message);
      setIsPending(false);
    }
  };
  setTimeout(() => {
    
    fetchData();
  }, 1000);
}, [url]);
return {data, isPending, err} 
}


export default useFetch