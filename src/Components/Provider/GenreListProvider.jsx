import React, { useState, useEffect } from "react";
import axios from "axios";

const GenreListProvider = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDBkZmZiMjJhZDlhZTNlY2JhNDE3ZWE0ZDNkODUzYyIsInN1YiI6IjY0ZmU5OWNhZmZjOWRlMGVlMDBjN2JkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I72akWLKOMrv3hkMP-wxYcpCPpVes0OnaKTKfuI0Tls",
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
