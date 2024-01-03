import MovieListProvider from "./Provider/MovieListProvider";
import CardComponents from "./CardComponents";

const IMG_API = process.env.REACT_APP_IMG_API;

export default function Hero() {
  return (
    <MovieListProvider
      render={({ movies, isError }) => (
        <div style={{ width: "100%" }}>
          {isError && <div>Error Occurred</div>}
          {!isError && movies && (
            <div style={{ display: "flex", gap: 16 }}>
              {movies.map((movie) => (
                <CardComponents
                  key={movie.id}
                  title={movie.title || movie.name}
                  description={movie.overview}
                  imageUrl={`${IMG_API}${movie.backdrop_path}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    />
  );
}
