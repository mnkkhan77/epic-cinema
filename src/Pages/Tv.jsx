import { useState } from "react";
import { TvListProvider } from "../Components/Provider/DataProvider";
import ListComponent from "../Components/components/ListComponent";
import Pagination from "@mui/material/Pagination";

const Tv = () => {
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
        TV
      </div>
      <TvListProvider
        render={({ tv, isError }) => (
          <ListComponent data={tv} isError={isError} />
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

export default Tv;
