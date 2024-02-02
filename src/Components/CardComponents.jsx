import { useState, useMemo } from "react";
import { styled } from "@mui/system";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PlayCircleFilledWhiteRoundedIcon from "@mui/icons-material/PlayCircleFilledWhiteRounded";
import { Tooltip, useMediaQuery } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import ShareIcon from "@mui/icons-material/Share";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

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

const CardComponents = ({ id, title, name, description, imageUrl }) => {
  const truncatedDescription = useMemo(
    () =>
      description.length > 70 ? `${description.slice(0, 50)}...` : description,
    [description]
  );
  const truncatedTitle = useMemo(
    () => (title.length > 14 ? `${title.slice(0, 14)}...` : title),
    [title]
  );

  const [isHovered, setIsHovered] = useState(false);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  let cardWidth, cardHeight;
  if (isSmallScreen) {
    cardWidth = "100%";
    cardHeight = "auto";
  } else if (isMediumScreen) {
    cardWidth = "100%";
    cardHeight = "auto";
  } else if (isLargeScreen) {
    cardWidth = "100%";
    cardHeight = "100%";
  }
  const cardContentStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    flexGrow: 1,
    // height: "100%",
    minHeight: 100,
  };
  const navigate = useNavigate();

  const handleClick = () => {
    // navigate(`/page/${id}`);
    console.log(`Clicked card with id: ${id} and name: ${name || title}`);
    // return <MovieDetailProvider id={id} render={/* Your render function */} />;
    // call the movie/tv api and send the data to DescriptionPage and render the data there
  };

  return (
    <Card
      sx={{
        width: cardWidth,
        height: cardHeight,
        flexBasis: "100px",
        display: "flex",
        flexDirection: "column",
        overflow: "visible",
        border: "2px",
        borderColor: "purple",
        borderStyle: "solid",
      }}
    >
      {imageUrl && (
        <HoverCardMedia
          component="div"
          height="150"
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
          <img
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            src={imageUrl}
            alt={title}
          />
          {isHovered && (
            <PlayCircleFilledWhiteRoundedIcon
              onClick={handleClick}
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
      <CardContent sx={cardContentStyle}>
        <div>
          <Tooltip
            title={title || name || "No Title"}
            placement="top"
            leaveDelay={200}
            arrow
            style={{ color: "black" }}
          >
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              align="center"
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                borderBlock: "solid",
                borderBlockColor: "#6200EA",
              }}
            >
              {truncatedTitle || name || "No Title"}
            </Typography>
          </Tooltip>
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
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          size="small"
          color="success"
          variant="contained"
          sx={{ fontSize: "0.5rem" }}
          startIcon={<DownloadIcon />}
        >
          Download
        </Button>
        <Button
          size="small"
          variant="contained"
          sx={{ fontSize: "0.5rem" }}
          startIcon={<ShareIcon />}
        >
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardComponents;
