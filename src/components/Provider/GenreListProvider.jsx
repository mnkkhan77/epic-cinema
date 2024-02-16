import React, { useState, useEffect } from "react";
import axios from "axios";

const GenreListProvider = () => {
  const [genres, setGenres] = useState([]);
  const bearer_token = process.env.React_APP_BEARER_TOKEN;

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: bearer_token,
        },
      };

      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/genre/movie/list?language=en",
          options
        );
        setGenres(response.data.genres);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Movie Genres</h2>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenreListProvider;
