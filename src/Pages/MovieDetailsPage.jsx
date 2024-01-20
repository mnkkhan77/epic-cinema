// MovieDescriptionPage.js

import React from "react";
import { css } from "@emotion/react";

const movieDescriptionPageStyle = css`
  font-family: "Arial, sans-serif";
  max-width: 600px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background: linear-gradient(to bottom right, #2c3e50, #3498db);
  color: #ecf0f1;
  overflow: hidden;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
    transform: scale(1.02);
  }
`;

const movieHeaderStyle = css`
  margin-bottom: 20px;
  border-bottom: 2px solid #1abc9c;
  padding-bottom: 10px;
  font-size: 28px;
`;

const movieDetailsStyle = css`
  margin-bottom: 20px;
  font-size: 16px;
`;

const synopsisStyle = css`
  font-size: 18px;
  line-height: 1.5;
`;

const MovieDescriptionPage = ({ movie }) => {
  return (
    <div css={movieDescriptionPageStyle}>
      <div css={movieHeaderStyle}>
        <h1>{movie.title}</h1>
      </div>
      <div css={movieDetailsStyle}>
        <p>
          <strong>Release Date:</strong> {movie.releaseDate}
        </p>
        <p>
          <strong>Genre:</strong> {movie.genre}
        </p>
        <p>
          <strong>Rating:</strong> {movie.rating}
        </p>
      </div>
      <div css={synopsisStyle}>
        <h2>Synopsis</h2>
        <p>{movie.synopsis}</p>
      </div>
    </div>
  );
};
// Example usage:
const movieData = {
  title: "Example Movie",
  releaseDate: "2023-01-01",
  genre: "Action",
  rating: "PG-13",
  synopsis: "This is a sample movie synopsis.",
};

const MovieDetailsPage = () => {
  return (
    <div className="app">
      <MovieDescriptionPage movie={movieData} />
    </div>
  );
};

export default MovieDetailsPage;
