import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CardComponents = ({
  title,
  name,
  description,
  imageUrl,
  id,
  mediaType,
}) => {
  const truncatedDescription =
    description.length > 170 ? `${description.slice(0, 170)}...` : description;

  return (
    <Card
      sx={{
        width: 345,
        height: 400,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {imageUrl && (
        <CardMedia
          component="img"
          height="200"
          width="100%"
          style={{ objectFit: "cover" }}
          image={imageUrl}
          // alt={title}
        />
      )}
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flexGrow: 1,
        }}
      >
        <div>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title || name || "No Title"}
          </Typography>
        </div>
        <div>
          <Typography variant="body2" color="text.secondary">
            {truncatedDescription}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default CardComponents;
