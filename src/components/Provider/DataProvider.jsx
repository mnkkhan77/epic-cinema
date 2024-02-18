import { useEffect, useState, Suspense } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

const cache = {};

const useDataProvider = (url) => {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      if (cache[url]) {
        setData(cache[url]);
        setIsLoading(false);
      } else {
        try {
          const result = await axios(url);
          const responseData = result.data.results
            ? result.data.results
            : result.data;
          setData(responseData);
          setTotalPages(result.data.total_pages ? result.data.total_pages : 1);
          cache[url] = responseData;
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchData();
  }, [url]);

  return { data, totalPages, isLoading, error };
};

export const MovieListProvider = ({ render, page }) => {
  const url_movie = `${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}&page=${page}`;

  const {
    data: movie,
    totalPages,
    isLoading,
    isError,
  } = useDataProvider(url_movie);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {render({ movie, totalPages, isLoading, isError })}
    </Suspense>
  );
};

export const TrendingListProvider = ({ render, page }) => {
  const url_trending = `${BASE_URL}/3/trending/all/day?api_key=${API_KEY}&page=${page}`;

  const {
    data: trending,
    totalPages,
    isLoading,
    isError,
  } = useDataProvider(url_trending);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {render({ trending, totalPages, isLoading, isError })}
    </Suspense>
  );
};

export const TvListProvider = ({ render, page }) => {
  const url_tv = `${BASE_URL}/3/trending/tv/day?api_key=${API_KEY}&page=${page}`;

  const { data: tv, totalPages, isLoading, isError } = useDataProvider(url_tv);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {render({ tv, totalPages, isLoading, isError })}
    </Suspense>
  );
};

export const TopRatedProvider = ({ render, page }) => {
  const url_topRated = `${BASE_URL}/3/movie/top_rated?api_key=${API_KEY}&page=${page}`;

  const {
    data: topRated,
    totalPages,
    isLoading,
    isError,
  } = useDataProvider(url_topRated);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {render({ topRated, totalPages, isLoading, isError })}
    </Suspense>
  );
};

export const MovieDetailProvider = ({ id, render }) => {
  const url_movie_detail = `${BASE_URL}/3/movie/${id}?api_key=${API_KEY}`;

  const {
    data: movieDetail,
    totalPages,
    isLoading,
    isError,
  } = useDataProvider(url_movie_detail);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {render({ movieDetail, totalPages, isLoading, isError })}
    </Suspense>
  );
};

export const TvDetailProvider = ({ id, render }) => {
  const url_tv_detail = `${BASE_URL}/3/tv/${id}?api_key=${API_KEY}`;

  const {
    data: tvDetail,
    totalPages,
    isLoading,
    isError,
  } = useDataProvider(url_tv_detail);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {render({ tvDetail, totalPages, isLoading, isError })}
    </Suspense>
  );
};

export const SearchListProvider = ({ query, render, page }) => {
  const url_search = `${BASE_URL}/3/search/multi?query=${query}&include_adult=false&api_key=${API_KEY}&page=${page}`;

  const {
    data: search,
    totalPages,
    isLoading,
    isError,
  } = useDataProvider(url_search);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {render({ search, totalPages, isLoading, isError })}
    </Suspense>
  );
};

// movie search
// const url = 'https://api.themoviedb.org/3/search/movie?query={movie%name}&include_adult=false&language=en-US&page=1';
//
// tv search
// const url = 'https://api.themoviedb.org/3/search/tv?query={tv%name}&include_adult=false&language=en-US&page=1';
