import { useLocation } from "react-router-dom";
import "./style.css";
import {
  MovieDetailProvider,
  TvDetailProvider,
} from "../Components/Provider/DataProvider";
import CircularWithValueLabel from "../Components/components/CircularProgressWithLabel";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Skeleton from "@mui/material/Skeleton";
import MatrixLoader from "../Components/components/MatrixLoader";

const Genre = ({ data }) => {
  if (!data || data.length === 0) return null;
  return (
    <div
      style={{ marginBottom: "25px", flexFlow: "row wrap", color: "#e9edef" }}
    >
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
          return <MatrixLoader width="100%" height="100%" color="#00ff00" />;
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
          return <MatrixLoader width="100%" height="100%" color="#00ff00" />;
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

  const textShadowOptions = [
    "0 0 5px #00e676bf,    0 0 10px #00e676bf,    0 0 20px #00e676bf,    0 0 40px #00e676bf,    0 0 80px #00e676bf,    0 0 90px #00e676bf,    0 0 100px #00e676bf,    0 0 150px #00e676bf",
    "0 0 15px #00ff66",
    "0 0 20px hsl(194, 100%, 40%), 0 0 2.5vmin hsl(194, 100%, 40%), 0 0 5vmin hsl(194, 100%, 40%), 0 0 10vmin hsl(194, 100%, 40%), 0 0 15vmin hsl(194, 100%, 40%)",
    "0 0 20px #dd0000, 0 0 2.5vmin #dd0000, 0 0 5vmin #dd0000, 0 0 10vmin #dd0000, 0 0 15vmin #dd0000",
    "0 0 20px #00ff66, 0 0 2.5vmin #00ff66, 0 0 5vmin #00ff66, 0 0 10vmin #00ff66, 0 0 15vmin #00ff66",
  ];

  const randomIndex = Math.floor(Math.random() * textShadowOptions.length);
  const randomTextShadow = textShadowOptions[randomIndex];

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
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                opacity: "25%",
                overflow: "hidden",
              }}
            >
              {detail?.backdrop_path ? (
                <img
                  src={`${IMG_API}${detail?.backdrop_path}`}
                  alt="Backdrop"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    marginTop: "60px",
                  }}
                />
              ) : (
                <MatrixLoader width="100%" height="100%" color="#00ff00" />
              )}
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
                <div
                  style={{
                    flexShrink: "0",
                    width: isSmallScreen ? "200px" : "350px",
                    fontWeight: "bold",
                    display: "block",
                  }}
                >
                  {detail?.poster_path ? (
                    <img
                      style={{ width: "100%", borderRadius: "12px" }}
                      className="posterImg"
                      src={`${IMG_API}${detail?.poster_path}`}
                      alt={detail?.title || detail?.name}
                    />
                  ) : (
                    <Skeleton
                      sx={{ bgcolor: "grey.900" }}
                      variant="rectangular"
                      width="100%"
                      height="100%"
                    />
                  )}
                </div>
                <div className="right">
                  <div
                    style={{
                      display: !isSmallScreen && "flex",
                      alignItems: "start",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "28px",
                        lineHeight: "40px",
                        fontWeight: "bold",
                        color: "#e9edef",
                        marginRight: "10px", // Adjust spacing between the two divs
                      }}
                    >
                      {detail?.title || detail?.name}
                    </div>
                    {detail?.original_name &&
                      detail?.name !== detail?.original_name && (
                        <div
                          style={{
                            fontSize: "28px",
                            lineHeight: "40px",
                            fontWeight: "bold",
                            color: "#e9edef",
                            marginLeft: "10px",
                          }}
                        >
                          ( {detail?.original_name} )
                        </div>
                      )}
                  </div>

                  <div
                    style={{
                      fontSize: "16px",
                      lineHeight: "24px",
                      fontStyle: "italic",
                      fontWeight: "bold",
                      color: "#e9edef",
                      textShadow: randomTextShadow,
                      marginBottom: detail?.created_by ? "0px" : "15px",
                    }}
                  >
                    {detail?.tagline}
                  </div>

                  {detail?.created_by?.length > 0 && (
                    <div
                      style={{
                        color: "#e9edef",
                        fontSize: "0.8em",
                        marginBottom: "15px",
                        borderRadius: "10%",
                        padding: "1px 5px 1px",
                      }}
                    >
                      ( Created By:{" "}
                      {detail?.created_by.map((cby, index) => (
                        <span key={index}>
                          {index > 0
                            ? index === detail?.created_by.length - 1
                              ? " and "
                              : ", "
                            : ""}
                          {cby.name}
                        </span>
                      ))}{" "}
                      )
                    </div>
                  )}

                  <Genre data={detail?.genres?.map((g) => g.name)} />

                  <div className="row">
                    {detail?.vote_average !== 0 ? (
                      <CircularWithValueLabel
                        progress={detail?.vote_average * 10}
                      />
                    ) : (
                      <div
                        style={{
                          color: "#e9edef",
                          textShadow:
                            "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #b92eff, 0 0 20px #b92eff, 0 0 25px #b92eff, 0 0 30px #b92eff, 0 0 35px #b92eff",
                        }}
                      >
                        Not rated yet
                      </div>
                    )}

                    {(detail?.status === "Released" ||
                      detail?.status === "Ended" ||
                      detail?.status === "Returning Series") && (
                      <label
                        style={{
                          color: "#e9edef",
                          backgroundColor: "#dd0000",
                          borderRadius: "10%",
                          fontWeight: "bold",
                          padding: "1px 5px 1px",
                        }}
                      >
                        HD
                      </label>
                    )}
                    {detail?.episode_run_time && (
                      <>
                        <label
                          style={{
                            backgroundColor: "#c0c0c0",
                            borderRadius: "7%",
                            fontWeight: "bold",
                            padding: "1px 5px 1px",
                          }}
                        >
                          {`Season${
                            detail?.number_of_seasons === 1 ? "" : "s"
                          } : ${detail?.number_of_seasons}`}
                        </label>
                        <label
                          style={{
                            backgroundColor: "#c0c0c0",
                            borderRadius: "7%",
                            fontWeight: "bold",
                            padding: "1px 5px 1px",
                          }}
                        >
                          {`Episodes : ${detail?.number_of_episodes}`}
                        </label>
                      </>
                    )}
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
                    <Divider
                      variant="inset"
                      sx={{ marginBottom: "10px", borderColor: "#ff0000" }}
                    />
                    <div className="description">{detail?.overview}</div>
                  </div>

                  <div className="info">
                    {detail?.status && (
                      <div className="infoItem">
                        <span className="text bold">Status: </span>
                        <Divider
                          sx={{ borderColor: "#ff0000", borderWidth: "1px" }}
                        />
                        <span className="text">{detail?.status}</span>
                      </div>
                    )}
                    {(detail?.release_date || detail?.first_air_date) && (
                      <div className="infoItem">
                        <span className="text bold">Release Date: </span>
                        <Divider
                          sx={{ borderColor: "#ff0000", borderWidth: "1px" }}
                        />
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
                        <Divider
                          sx={{ borderColor: "#ff0000", borderWidth: "1px" }}
                        />
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
