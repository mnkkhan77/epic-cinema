import React from "react";
import YouTube from "react-youtube";

const MovieDetailsPage = ({ details }) => {
  const { title, description, ratings, length, thumbnail, trailerUrl } =
    details;

  // YouTube player options
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>Ratings: {ratings}</p>
      <p>Length: {length}</p>
      <div>
        <YouTube videoId={trailerUrl} opts={opts} />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
