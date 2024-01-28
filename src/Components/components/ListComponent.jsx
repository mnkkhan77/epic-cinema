import Grid from "@mui/material/Grid";
import CardComponents from "../CardComponents";

const commonStyles = {
  width: "100%",
  paddingLeft: "30px",
  paddingTop: "20px",
  paddingRight: "30px",
  paddingBlockEnd: "30px",
};

const IMG_API = process.env.REACT_APP_IMG_API;

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

export default ListComponent;
