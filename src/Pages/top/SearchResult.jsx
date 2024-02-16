import { useLocation } from "react-router-dom";
import { SearchListProvider } from "../../components/Provider/DataProvider";
import ListComponent from "../../components/helpers/ListComponent";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";

const SearchResult = () => {
  const location = useLocation();
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const searchQuery = new URLSearchParams(location.search).get("query");
  return (
    <>
      <div style={{ marginTop: "30px", backgroundColor: "#282828" }}></div>
      <SearchListProvider
        page={page}
        query={searchQuery}
        render={({ search, isError }) => (
          <ListComponent data={search} isError={isError} />
        )}
      />
      <Pagination
        sx={{ display: "flex", justifyContent: "center" }}
        count={1000}
        showFirstButton
        showLastButton
        color="primary"
        size="large"
        onChange={handleChange}
      />
    </>
  );
};

export default SearchResult;
