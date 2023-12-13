import MovieListProvider from "./Provider/MovieListProvider";
import CardComponents from "./components/CardComponents";

export default function Hero() {
  return (
    <MovieListProvider
      render={({ movie, videos, images, credits, isError }) => (
        <div>
          <CardComponents />
          {isError && <div>Error Occurred</div>}
          {!isError && movie && (
            <>
              <div>{movie.title}</div>

              <div>{movie.poster_path}</div>

              {/* Render other details using videos, images, and credits */}
              {videos.map((video) => (
                <div key={video.id}>
                  <p>{video.name}</p>
                  {/* Render other properties of the video */}
                </div>
              ))}
            </>
          )}
        </div>
      )}
    />
  );
}
