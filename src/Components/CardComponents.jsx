import { useState, useMemo } from "react";
import { styled } from "@mui/system";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PlayCircleFilledWhiteRoundedIcon from "@mui/icons-material/PlayCircleFilledWhiteRounded";
import { Tooltip } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import ShareIcon from "@mui/icons-material/Share";

// Styled components
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

// Component
const CardComponents = ({
  title,
  name,
  description,
  imageUrl,
}) => {
  const truncatedDescription = useMemo(
    () =>
      description.length > 170
        ? `${description.slice(0, 170)}...`
        : description,
    [description]
  );
  const truncatedTitle = useMemo(
    () => (title.length > 14 ? `${title.slice(0, 14)}...` : title),
    [title]
  );

  const [isHovered, setIsHovered] = useState(false);

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
          style={{
            position: "relative",
            overflow: "hidden",
            cursor: "pointer",
            transition: "filter 0.3s",
          }}
        >
          <Tooltip title={title}>
            <img
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              src={imageUrl}
              alt={title}
            />
          </Tooltip>
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
            {truncatedTitle || name || "No Title"}
          </Typography>
        </div>
        <div>
          <Tooltip
            title={description}
            placement="top-start"
            leaveDelay={200}
            arrow
            style={{ color: "black" }}
          >
            <Typography variant="body2" color="text.secondary">
              {truncatedDescription}
            </Typography>
          </Tooltip>
        </div>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="success"
          variant="contained"
          startIcon={<DownloadIcon />}
        >
          Download
        </Button>
        <Button size="small" variant="contained" startIcon={<ShareIcon />}>
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardComponents;
