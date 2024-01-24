import { useEffect, useState } from "react";
import axios from "axios";

const MovieListProvider = ({ render }) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const url = `${BASE_URL}/3/trending/all/day?api_key=${API_KEY}`;

  const [trending, setTrending] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);

      try {
        const result = await axios(url);
        setTrending(result.data.results);
      } catch (error) {
        setIsError(true);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {
      // Cleanup logic if needed
    };
  }, [url]);

  return render({ trending, isError });
};

export default MovieListProvider;
