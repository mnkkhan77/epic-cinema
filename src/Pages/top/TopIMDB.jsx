import { useState } from "react";
import { TopRatedProvider } from "../../components/Provider/DataProvider";
import ListComponent from "../../components/helpers/ListComponent";
import Pagination from "@mui/material/Pagination";

const TopIMDB = () => {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <div style={{ marginTop: "30px" }}>
      <div
        style={{
          paddingLeft: "35px",
          fontSize: "28px",
          fontWeight: "bold",
          textDecoration: "underline",
        }}
      >
        Top Rated
      </div>
      <TopRatedProvider
        page={page}
        render={({ topRated, isError }) => (
          <ListComponent data={topRated} isError={isError} />
        )}
      />
      <Pagination
        sx={{ display: "flex", justifyContent: "center" }}
        count={1000}
        showFirstButton
        showLastButton
        color="primary"
        onChange={handleChange}
      />
    </div>
  );
};

export default TopIMDB;
