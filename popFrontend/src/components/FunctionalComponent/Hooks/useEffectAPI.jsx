import { useEffect, useState } from "react";
import axios from "axios";

const useEffectAPI = () => {
  var [posts, setPost] = useState([]);
  useEffect(() => {
    axios
      .get()
      .then((res) => console.log(res))
      .catch((err) => console.log("Couldnt read the API", err));
  }, []);
  return (
    <div>
      <h1> useEffect example with API call</h1>
    </div>
  );
};

export default useEffectAPI;
