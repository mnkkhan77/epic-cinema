import { useState } from "react";
import { TopRatedProvider } from "../../components/Provider/DataProvider";
import ListComponent from "../../components/helpers/ListComponent";
import Pagination from "@mui/material/Pagination";
import { useTheme } from "@mui/material/styles";
import { Typography, useMediaQuery } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const TopIMDB = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();
  const navigate = useNavigate();
  const pageQuery = new URLSearchParams(location.search).get("page");
  const [page, setPage] = useState(pageQuery ? parseInt(pageQuery, 10) : 1);
  const [totalPages, setTotalPages] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
    navigate(`/toprated?page=${value}`);
  };
  return (
    <div style={isSmallScreen ? { marginTop: "8px" } : { marginTop: "15px" }}>
      <Typography
        variant="h5"
        style={{
          paddingLeft: "35px",
          fontSize: "20px",
          fontWeight: "bold",
          textDecoration: "underline",
          backgroundColor: "#202c33",
          color: "#e9edef",
        }}
      >
        Top Rated
      </Typography>
      <TopRatedProvider
        page={page}
        render={({ topRated, totalPages: providerTotalPages, isError }) => {
          setTotalPages(providerTotalPages);
          return <ListComponent data={topRated} isError={isError} />;
        }}
      />
      <div style={{ backgroundColor: "#3e448b" }}>
        <Pagination
          sx={{ display: "flex", justifyContent: "center" }}
          count={totalPages}
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

export default TopIMDB;
