import { useEffect, useState } from "react";
import axios from "axios";

const TvListProvider = ({ render }) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const url_tv = `${BASE_URL}/3/trending/tv/day?api_key=${API_KEY}`;

  const [tv, setTv] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);

      try {
        const result = await axios(url_tv);
        setTv(result.data.results);
      } catch (error) {
        setIsError(true);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {
      // Cleanup logic if needed
    };
  }, [url_tv]);

  return render({ tv, isError });
};

export default TvListProvider;
