import MovieListProvider from "./Provider/MovieListProvider";
import CardComponents from "./CardComponents";

import { styled } from "@mui/material/styles";

const IMG_API = process.env.REACT_APP_IMG_API;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function Hero() {
  return (
    <>
      <DrawerHeader />
      <MovieListProvider
        render={({ movies, isError }) => (
          <div
            style={{ width: "700%", borderStyle: "solid", borderColor: "red" }}
          >
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
    </>
  );
}
