import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const res = await axios.get(url, { signal: controller.signal });
        if (res.status < 200 || res.status >= 300) {
          throw new Error("Could not fetch the data for that resource");
        }
        setData(res.data);
        setIsPending(false);
        setErr(null);
      } catch (err) {
        if (axios.isCancel(err)) {   // if it Abort then we don't need to update the state 
          console.log("Request canceled");
        } else {
          console.log("Failed to fetch:", err.message);
          setErr(err.message);
          setIsPending(false);
        }
      }
    };

    const timer = setTimeout(() => {
      fetchData(); // ⏱️ Delay by 1 second
    }, 1000);

    return () => {
      clearTimeout(timer);       // 🧹 Clear timeout if component unmounts early
      controller.abort();        // 🧹 Cancel fetch if still pending
    };
  }, [url]);

  return { data, isPending, err };
};

export default useFetch;
