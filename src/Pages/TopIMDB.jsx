import { useState } from "react";
import { TopRatedProvider } from "../Components/Provider/DataProvider";
import ListComponent from "../Components/components/ListComponent";
import Pagination from "@mui/material/Pagination";

const TopIMDB = () => {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    console.log("value", value);
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
        render={({ topRated, isError }) => (
          <ListComponent data={topRated} isError={isError} />
        )}
      />
      <Pagination
        sx={{ display: "flex", justifyContent: "center" }}
        count={1000}
        showFirstButton
        showLastButton
        onChange={handleChange}
      />
    </div>
  );
};

export default TopIMDB;
