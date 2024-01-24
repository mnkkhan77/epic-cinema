import { useEffect, useState } from "react";
import axios from "axios";

const TrendingListProvider = ({ render }) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const url_movie = `${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}`;

  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);

      try {
        const result = await axios(url_movie);
        setMovie(result.data.results);
      } catch (error) {
        setIsError(true);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {
      // Cleanup logic if needed
    };
  }, [url_movie]);

  return render({ movie, isError });
};

export default TrendingListProvider;
