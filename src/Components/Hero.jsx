import MovieListProvider from "./Provider/MovieListProvider";
import TvListProvider from "./Provider/TvListProvider";
import CardComponents from "./CardComponents";
import Typography from "@mui/material/Typography";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import Grid from "@mui/material/Grid";

const IMG_API = process.env.REACT_APP_IMG_API;

const commonStyles = {
  width: "100%",
  paddingLeft: "30px",
  paddingTop: "20px",
  paddingRight: "30px",
  paddingBlockEnd: "30px",
};

const ListComponent = ({ data, isError }) => (
  <div style={commonStyles}>
    {isError && <div>Error Occurred</div>}
    {!isError && data && (
      <Grid container spacing={3}>
        {data.map((item) => (
          <Grid item xs={6} sm={4} md={2}>
            <CardComponents
              key={item.id}
              title={item.title || item.name}
              description={item.overview}
              imageUrl={`${IMG_API}${item.backdrop_path}`}
            />
          </Grid>
        ))}
      </Grid>
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
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingTop: "20px",
        }}
      >
        <Typography variant="h6" style={{ marginRight: "30px", paddingLeft: "30px"}}>
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
