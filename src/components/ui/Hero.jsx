import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Divider, ToggleButton, ToggleButtonGroup } from "@mui/material";
import {
  TrendingListProvider,
  TvListProvider,
  MovieListProvider,
} from "../Provider/DataProvider";
import IconBreadcrumbs from "./WithBreadcrumbs";
import ListComponent from "../helpers/ListComponent";
import Pagination from "@mui/material/Pagination";

const Hero = () => {
  const [alignment, setAlignment] = useState(() => {
    const storedAlignment = sessionStorage.getItem("alignment");
    return storedAlignment || "All";
  });

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };
  useEffect(() => {
    sessionStorage.setItem("alignment", alignment);
  }, [alignment]);

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      <div
        style={{
          paddingLeft: "30px",
          backgroundColor: "#282828",
        }}
      >
        <IconBreadcrumbs />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingTop: "10px",
          backgroundColor: "#202c33",
        }}
      >
        <Typography
          variant="h6"
          style={{ marginRight: "30px", paddingLeft: "30px", color: "#e9edef" }}
        >
          Trending
        </Typography>

        <ToggleButtonGroup
          color="primary"
          sx={{ backgroundColor: "#282828" }}
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="Platform"
        >
          <ToggleButton value="All" sx={{ color: "#e9edef" }}>
            All
          </ToggleButton>
          <ToggleButton value="Movies" sx={{ color: "#e9edef" }}>
            Movies
          </ToggleButton>
          <ToggleButton value="Tv" sx={{ color: "#e9edef" }}>
            Tv
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <Divider sx={{ borderColor: "#686868" }} />
      {alignment === "All" && (
        <TrendingListProvider
            page={page}
          render={({ trending, isError }) => (
            <ListComponent data={trending} isError={isError} />
          )}
        />
      )}
      {alignment === "Movies" && (
        <MovieListProvider
            page={page
            }
          render={({ movie, isError }) => (
            <ListComponent data={movie} isError={isError} />
          )}
        />
      )}
      {alignment === "Tv" && (
        <TvListProvider
            page={page}
          render={({ tv, isError }) => (
            <ListComponent data={tv} isError={isError} />
          )}
        />
      )}
        <div style={{backgroundColor: "#3e448b"}}>
      <Pagination
          sx={{ display: "flex", justifyContent: "center" }}
          count={500}
          color="primary"
          size="large"
          siblingCount={0}
          boundaryCount={1}
          onChange={handleChange}
      />
        </div>
    </div>
  );
};

export default Hero;
