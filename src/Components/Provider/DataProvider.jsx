import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

const useDataProvider = (url) => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);

      try {
        const result = await axios(url);
        setData(result.data.results);
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

  return { data, isError };
};

export const MovieListProvider = ({ render }) => {
  const url_movie = `${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}`;

  const { data: movie, isError } = useDataProvider(url_movie);

  return render({ movie, isError });
};

export const TrendingListProvider = ({ render }) => {
  const url_trending = `${BASE_URL}/3/trending/all/day?api_key=${API_KEY}`;

  const { data: trending, isError } = useDataProvider(url_trending);

  return render({ trending, isError });
};

export const TvListProvider = ({ render }) => {
  const url_tv = `${BASE_URL}/3/trending/tv/day?api_key=${API_KEY}`;

  const { data: tv, isError } = useDataProvider(url_tv);

  return render({ tv, isError });
};

export const TopRatedProvider = ({ render }) => {
  const url_top_rated = `${BASE_URL}/3/movie/top_rated?api_key=${API_KEY}`;

  const { data: topRated, isError } = useDataProvider(url_top_rated);

  return render({ topRated, isError });
};
