import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (endpoint) => {
  const [data, setData] = useState(null)
  
  useEffect(() => {
    axios
      .get(endpoint)
      .then(({ data }) => setData(data))
      .catch((err) => err);
  }, []);


  return {
    data
  }
}
export default useFetch