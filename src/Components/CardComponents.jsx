import React from "react";
import { styled } from "@mui/system";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PlayCircleFilledWhiteRoundedIcon from "@mui/icons-material/PlayCircleFilledWhiteRounded";

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

  const [isHovered, setIsHovered] = React.useState(false);

  const HoverCardMedia = styled(CardMedia)({
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    transition: "filter 0.3s",
    "&:hover": {
      "& img": {
        filter: "brightness(40%)", // Apply filter only to the image
      },
    },
  });

  return (
    <Card
      sx={{
        width: 345,
        height: 400,
        display: "flex",
        flexDirection: "column",
        overflow: "visible",
      }}
    >
      {imageUrl && (
        <HoverCardMedia
          component="div"
          height="200"
          width="100%"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            src={imageUrl}
            alt={title}
          />
          {isHovered && (
            <PlayCircleFilledWhiteRoundedIcon
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#fff",
                fontSize: "60px",
              }}
            />
          )}
        </HoverCardMedia>
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
        <Button
          size="small"
          color="success"
          variant="contained"
          // startIcon={<DownloadIcon />}
        >
          Download
        </Button>
        <Button size="small" variant="contained">
          Share
        </Button>
        <Button size="small" variant="contained">
          Read More ...
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardComponents;
