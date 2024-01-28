import Typography from "@mui/material/Typography";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import {
  TrendingListProvider,
  TvListProvider,
  MovieListProvider,
} from "./Provider/DataProvider";
import IconBreadcrumbs from "./WithBreadcrumbs";
import ListComponent from "./components/ListComponent";

const Hero = () => {
  const [alignment, setAlignment] = useState("All");

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <div>
      <div style={{ paddingLeft: "30px", paddingTop: "30px" }}>
        <IconBreadcrumbs />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingTop: "10px",
        }}
      >
        <Typography
          variant="h6"
          style={{ marginRight: "30px", paddingLeft: "30px" }}
        >
          Trending
        </Typography>

        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="Platform"
        >
          <ToggleButton value="All">All</ToggleButton>
          <ToggleButton value="Movies">Movies</ToggleButton>
          <ToggleButton value="Tv">Tv</ToggleButton>
        </ToggleButtonGroup>
      </div>
      {alignment === "All" && (
        <TrendingListProvider
          render={({ trending, isError }) => (
            <ListComponent data={trending} isError={isError} />
          )}
        />
      )}
      {alignment === "Movies" && (
        <MovieListProvider
          render={({ movie, isError }) => (
            <ListComponent data={movie} isError={isError} />
          )}
        />
      )}
      {alignment === "Tv" && (
        <TvListProvider
          render={({ tv, isError }) => (
            <ListComponent data={tv} isError={isError} />
          )}
        />
      )}
    </div>
  );
};

export default Hero;
