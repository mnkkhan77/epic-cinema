import { useState } from "react";
import { TvListProvider } from "../../components/Provider/DataProvider";
import ListComponent from "../../components/helpers/ListComponent";
import Pagination from "@mui/material/Pagination";
import { Typography } from "@mui/material";

const Tv = () => {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <div style={{ marginTop: "15px" }}>
      <Typography
        variant="h5"
        style={{
          paddingLeft: "35px",
          fontSize: "28px",
          fontWeight: "bold",
          textDecoration: "underline",
          backgroundColor: "#202c33",
          color: "#e9edef",
        }}
      >
        TV
      </Typography>
      <TvListProvider
        page={page}
        render={({ tv, isError }) => (
          <ListComponent data={tv} isError={isError} />
        )}
      />
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

export default Tv;
