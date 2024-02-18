import { useLocation, useNavigate } from "react-router-dom";
import { SearchListProvider } from "../../components/Provider/DataProvider";
import ListComponent from "../../components/helpers/ListComponent";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, useMediaQuery } from "@mui/material";

const SearchResult = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();
  const navigate = useNavigate();
  const searchQuery = new URLSearchParams(location.search).get("query");
  const pageQuery = new URLSearchParams(location.search).get("page");
  const [page, setPage] = useState(pageQuery ? parseInt(pageQuery, 10) : 1);
  const [totalPages, setTotalPages] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
    navigate(`/search?query=${searchQuery}&page=${value}`);
  };
  const formattedQuery = searchQuery.replace(/%/g, " ").toUpperCase();

  return (
    <>
      <div
        style={{
          marginTop: isSmallScreen ? "8px" : "15px",
          backgroundColor: "#282828",
        }}
      ></div>
      <Typography
        variant={isSmallScreen ? "h6" : "h5"}
        style={{
          paddingLeft: "30px",
          color: "#e9edef",
          backgroundColor: "#202c33",
        }}
      >
        Search Results for :-{" "}
        <span style={{ display: "inline-block" }}>{formattedQuery}</span>
      </Typography>
      <SearchListProvider
        page={page}
        query={searchQuery}
        render={({ search, totalPages: providerTotalPages, isError }) => {
          setTotalPages(providerTotalPages);
          return <ListComponent data={search} isError={isError} />;
        }}
      />
      <div style={{ backgroundColor: "#3e448b" }}>
        <Pagination
          sx={{ display: "flex", justifyContent: "center" }}
          count={totalPages}
          color="primary"
          size="large"
          siblingCount={0}
          boundaryCount={1}
          onChange={handleChange}
          page={page}
        />
      </div>
    </>
  );
};

export default SearchResult;
