import { useState } from "react";
import { useLocation } from "react-router-dom";
import { PlayCircle } from "@mui/icons-material";
import "./style.css";
import {
  MovieDetailProvider,
  TvDetailProvider,
} from "../Components/Provider/DataProvider";
import CircularWithValueLabel from "../Components/components/CircularProgressWithLabel";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

const Genre = ({ data }) => {
  if (!data || data.length === 0) return null;
  return (
    <div style={{ marginBottom: "25px", flexFlow: "row wrap", color: "white" }}>
      {data.map((genre, index) => (
        <label
          style={{
            backgroundColor: "#990099",
            margin: "2px",
            borderRadius: "10%",
            padding: "2px",
            display: "inline-block",
            fontSize: "0.8em",
          }}
          key={index}
        >
          {genre}
        </label>
      ))}
    </div>
  );
};

const DetailProvider = ({ mediaType, id, children }) => {
  return mediaType === "movie" ? (
    <MovieDetailProvider
      id={id}
      render={({ movieDetail, isLoading, isError }) => {
        if (isLoading) {
          return <div>Loading...</div>;
        }

        if (isError) {
          return <div>Error fetching movie data</div>;
        }

        return children(movieDetail);
      }}
    />
  ) : mediaType === "tv" ? (
    <TvDetailProvider
      id={id}
      render={({ tvDetail, isLoading, isError }) => {
        if (isLoading) {
          return <div>Loading...</div>;
        }

        if (isError) {
          return <div>Error fetching TV data</div>;
        }

        return children(tvDetail);
      }}
    />
  ) : (
    <div>Invalid media type</div>
  );
};

const DescriptionPage = () => {
  const location = useLocation();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const { media_type, id } = location.state.data;

  const toHoursAndMinutes = (totalMinutes) => {
    if (!totalMinutes || isNaN(totalMinutes)) {
      return "";
    }

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    if (hours === 0) {
      return `${minutes}m`;
    } else {
      return `${hours}h ${minutes}m`;
    }
  };

  const IMG_API = process.env.REACT_APP_IMG_API;
  return (
    <div className="detailsBanner">
      <DetailProvider mediaType={media_type} id={id}>
        {(detail) => (
          <>
            <div
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                alignSelf: "center",
                opacity: "25%",
                overflow: "hidden",
              }}
            >
              <img src={`${IMG_API}${detail?.backdrop_path}`} alt="Backdrop" />
            </div>
            <div
              style={{
                width: "100%",
                height: "250px",
                background:
                  "linear-gradient(to bottom, transparent 0%, #282828 100%)",
                position: "absolute",
                bottom: 0,
                left: 0,
              }}
            ></div>
            <div
              style={{
                width: "100%",
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "0 20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  position: "relative",
                  flexDirection: isSmallScreen ? "column" : "row",
                  gap: "25px",
                }}
              >
                <div className="left">
                  {detail?.poster_path ? (
                    <img
                      className="posterImg"
                      src={`${IMG_API}${detail?.poster_path}`}
                      alt={detail?.title || detail?.name}
                    />
                  ) : (
                    <img
                      className="posterImg"
                      src={`${IMG_API}${detail?.poster_path}`}
                      alt={detail?.title || detail?.name}
                    />
                  )}
                </div>
                <div className="right">
                  <div
                    style={{
                      fontSize: "28px",
                      lineHeight: "40px",
                        fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    {detail?.title || detail?.name}
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      lineHeight: "24px",
                      marginBottom: "15px",
                      fontStyle: "italic",
                      opacity: 0.5,
                      color: "yellow",
                    }}
                  >
                    {detail?.tagline}
                  </div>

                  <Genre data={detail?.genres?.map((g) => g.name)} />

                  <div className="row">
                      {detail?.vote_average !=0 ? <CircularWithValueLabel
                      progress={detail?.vote_average * 10}
                      /> : <div style={{color: "white",textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #b92eff, 0 0 20px #b92eff, 0 0 25px #b92eff, 0 0 30px #b92eff, 0 0 35px #b92eff"}}>Not rated yet</div>}
                    {detail?.video && (
                      <div
                        className="playbtn"
                        onClick={() => {
                          setShow(true);
                          setVideoId(detail?.video.key);
                        }}
                      >
                        <PlayCircle />
                        <span className="text">Watch Trailer</span>
                      </div>
                    )}
                    {(detail?.status === "Released" || detail?.status ==="Ended" || detail?.status ==="Returning Series") && (
                      <Button
                        variant="contained"
                        size="small"
                        sx={{
                          color: "black",
                          fontWeight: "bold",
                          fontSize: "1rem",
                          padding: "0px",
                        }}
                      >
                        HD
                      </Button>
                    )}
                      {detail?.episode_run_time && <label style={{backgroundColor: "#c0c0c0", borderRadius: "7%", fontWeight: "bold"}}>
                          Seasons : {detail?.number_of_seasons}
                      </label>}
                  </div>
                  <label>
                    {detail?.spoken_languages?.map((language, index) => (
                      <label
                        style={{
                          backgroundColor: "#dfdfdf",
                          margin: "2px",
                          borderRadius: "10%",
                          padding: "2px",
                          display: "inline-block",
                          fontSize: "0.7em",
                          fontWeight: "bold",
                          marginBottom: "30px",
                        }}
                        key={index}
                      >
                        {language.english_name}
                      </label>
                    ))}
                  </label>

                  <div className="overview">
                    <div className="heading">Overview</div>
                    <Divider/>
                    <div className="description">{detail?.overview}</div>
                  </div>

                  <div className="info">
                    {detail?.status && (
                      <div className="infoItem">
                        <span className="text bold">Status: </span>
                        <span className="text">{detail?.status}</span>
                      </div>
                    )}
                    {(detail?.release_date || detail?.first_air_date) && (
                      <div className="infoItem">
                        <span className="text bold">Release Date: </span>
                        <span className="text">
                          {new Date(
                            detail?.release_date || detail?.first_air_date
                          ).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                    )}
                    {(detail?.runtime ||
                      (detail?.episode_run_time &&
                        detail.episode_run_time.length > 0)) && (
                      <div className="infoItem">
                        <span className="text bold">Runtime: </span>
                        <span className="text">
                          {toHoursAndMinutes(detail?.runtime) ||
                            toHoursAndMinutes(
                              detail?.episode_run_time &&
                                detail.episode_run_time[0]
                            )}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </DetailProvider>
    </div>
  );
};

export default DescriptionPage;
