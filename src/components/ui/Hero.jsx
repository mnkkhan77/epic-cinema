import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Divider, ToggleButton, ToggleButtonGroup } from "@mui/material";
import {
  TrendingListProvider,
  TvListProvider,
  MovieListProvider,
} from "../Provider/DataProvider";
import ListComponent from "../helpers/ListComponent";
import Pagination from "@mui/material/Pagination";

const Hero = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pageQuery = new URLSearchParams(location.search).get("page");
  const [page, setPage] = useState(pageQuery ? parseInt(pageQuery, 10) : 1);

  const handleChange = (event, value) => {
    setPage(value);
    navigate(`/trending?page=${value}`);
  };

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

  return (
    <div>
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
          <ToggleButton value="Movie" sx={{ color: "#e9edef" }}>
            Movie
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
      {alignment === "Movie" && (
        <MovieListProvider
          page={page}
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
      <div style={{ backgroundColor: "#3e448b" }}>
        <Pagination
          sx={{ display: "flex", justifyContent: "center" }}
          count={500}
          color="primary"
          size="large"
          siblingCount={1}
          boundaryCount={1}
          onChange={handleChange}
          page={page}
        />
      </div>
    </div>
  );
};

export default Hero;
