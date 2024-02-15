import Grid from "@mui/material/Grid";
import CardComponents from "../CardComponents";

const commonStyles = {
  width: "100%",
  paddingLeft: "30px",
  paddingTop: "20px",
  paddingRight: "30px",
  paddingBlockEnd: "30px",
  backgroundColor: "#111b21",
};
//0b202a

const IMG_API = process.env.REACT_APP_IMG_API;

const ListComponent = ({ data, isError }) => {
  const filteredData = data.filter((item) => item.media_type !== "person");

  return (
    <div style={commonStyles}>
      {isError && <div>Error Occurred</div>}
      {!isError && filteredData && (
        <Grid container spacing={3}>
          {filteredData.map((item) => (
            <Grid item xs={6} sm={4} md={3} lg={2} xl={2} key={item.id}>
              <CardComponents
                id={item.id}
                title={item.title || item.name}
                description={item.overview}
                imageUrl={
                  item.backdrop_path
                    ? `${IMG_API}${item.backdrop_path}`
                    : // : item.poster_path
                      // ? `${IMG_API}${item.poster_path}`
                      null
                }
                media_type={item.media_type}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default ListComponent;
