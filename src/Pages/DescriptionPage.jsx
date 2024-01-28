import React from "react";

const DescriptionPage = ({ movie }) => {
  return (
    <div className="movie-description">
      <div className="main-section">
        <img src={movie.poster} alt={movie.title} className="poster" />
        <div className="details">
          <h1>{movie.title}</h1>
          <p className="release-date">Release Date: {movie.releaseDate}</p>
          <p className="tagline">{movie.tagline}</p>
          <div className="rating-runtime">
            <span className="rating">Rating: {movie.rating}</span>
            <span className="runtime">Runtime: {movie.runtime}</span>
          </div>
        </div>
      </div>

      <div className="details-section">
        <p className="synopsis">{movie.synopsis}</p>
        <div className="genres">
          {movie.genres.map((genre) => (
            <span key={genre}>{genre}</span>
          ))}
        </div>
        <div className="credits">
          <h3>Credits</h3>
          <p>Director: {movie.director}</p>
          <p>Writer: {movie.writer}</p>
          <div className="top-actors">
            <h4>Top Actors</h4>
            {movie.topActors.map((actor) => (
              <div key={actor.id} className="actor">
                <img
                  src={actor.photo}
                  alt={actor.name}
                  className="actor-photo"
                />
                <p>
                  {actor.name} as {actor.character}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional features like trailer, reviews, etc. can be added here */}
    </div>
  );
};

export default DescriptionPage;
