import MovieListProvider from "./Provider/MovieListProvider";
import TvListProvider from "./Provider/TvListProvider";
import CardComponents from "./CardComponents";
import Typography from "@mui/material/Typography";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";

const IMG_API = process.env.REACT_APP_IMG_API;

const commonStyles = {
  width: "100%",
  paddingLeft: "30px",
  paddingTop: "20px",
};

const ListComponent = ({ data, isError }) => (
  <div style={commonStyles}>
    {isError && <div>Error Occurred</div>}
    {!isError && data && (
      <div style={{ display: "flex", gap: 16 }}>
        {data.map((item) => (
          <CardComponents
            key={item.id}
            title={item.title || item.name}
            description={item.overview}
            imageUrl={`${IMG_API}${item.backdrop_path}`}
          />
        ))}
      </div>
    )}
  </div>
);

const Hero = () => {
  const [alignment, setAlignment] = useState("Movies");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <div>
        <Typography variant="h5" style={{ paddingTop: "20px" }}>
          Trending
        </Typography>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="Movies">Movies</ToggleButton>
          <ToggleButton value="Tv">Tv</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <MovieListProvider
        render={({ trending, isError }) =>
          alignment === "Movies" && (
            <ListComponent data={trending} isError={isError} />
          )
        }
      />
      <TvListProvider
        render={({ tv, isError }) =>
          alignment === "Tv" && <ListComponent data={tv} isError={isError} />
        }
      />
    </>
  );
};

export default Hero;
