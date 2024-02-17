import { useLocation, useNavigate } from "react-router-dom";
import { SearchListProvider } from "../../components/Provider/DataProvider";
import ListComponent from "../../components/helpers/ListComponent";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";
import { Typography } from "@mui/material";

const SearchResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchQuery = new URLSearchParams(location.search).get("query");
  const pageQuery = new URLSearchParams(location.search).get("page");
  const [page, setPage] = useState(pageQuery ? parseInt(pageQuery, 500) : 1);

  const handleChange = (event, value) => {
    setPage(value);
    navigate(`/search?query=${searchQuery}&page=${value}`);
  };

  return (
    <>
      <div style={{ marginTop: "15px", backgroundColor: "#282828" }}></div>
      <Typography
        variant="h5"
        style={{
          marginRight: "30px",
          paddingLeft: "30px",
          color: "#e9edef",
          backgroundColor: "#202c33",
        }}
      >
        Search Results for {searchQuery.toUpperCase()}
      </Typography>
      <SearchListProvider
        page={page}
        query={searchQuery}
        render={({ search, isError }) => (
          <ListComponent data={search} isError={isError} />
        )}
      />
      <div style={{ backgroundColor: "#3e448b" }}>
        <Pagination
          sx={{ display: "flex", justifyContent: "center" }}
          count={500}
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
