import { useState } from "react";
import axios from "axios";

function useAxios(baseUrl, formatter) {
  const [responses, setResponses] = useState([]);

  const executeRequest = async (subUrl = "") => {
    const response = await axios.get(baseUrl + subUrl);
    setResponses((data) => [...data, formatter(response.data)]);
  };

  return [responses, executeRequest];
}

export default useAxios;
