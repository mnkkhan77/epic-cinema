import { useEffect, useState } from "react";
import axios from "axios";
import CardComponents from "../components/CardComponents";

const MovieListProvider = ({ render }) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const IMG_API = process.env.REACT_APP_IMG_API;

  const url = `${BASE_URL}/3/movie/475557?api_key=${API_KEY}&&language=en-US&append_to_response=videos,images,credits`;

  const [movie, setMovie] = useState({});
  const [videos, setVideos] = useState([]);
  const [images, setImages] = useState([]);
  const [credits, setCredits] = useState([]);
  const [isError, setIsError] = useState(false);

  console.log("API_KEY:", API_KEY);
  console.log("BASE_URL:", BASE_URL);
  console.log("URL:", url);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);

      try {
        const result = await axios(url);
        setMovie(result.data);
        setVideos(result.data.videos.results);
        setImages(result.data.images);
        setCredits(result.data.credits);
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

  return (
    <div>
      {!isError && (
        <CardComponents
          key={movie.id} // Make sure each movie has a unique identifier
          title={movie.title}
          description={movie.overview}
          imageUrl={`${IMG_API}${movie.poster_path}`}
        />
      )}
      {isError && <div>Error Occurred</div>}
    </div>
  );
};

export default MovieListProvider;
