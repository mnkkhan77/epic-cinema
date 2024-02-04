import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Rating } from "@mui/material";
import { PlayCircle } from "@mui/icons-material";
import {
  MovieDetailProvider,
  TvDetailProvider,
} from "../Components/Provider/DataProvider";
const Genre = ({ data }) => {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <div className="genre">
      {data.map((genre, index) => (
        <span key={index}>{genre}</span>
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
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const { media_type, id } = location.state.data;

    const toHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
    };


    const IMG_API = process.env.REACT_APP_IMG_API;
    return (
    <div className="detailsBanner" style={{ marginTop: "30px" }}>
      <DetailProvider mediaType={media_type} id={id}>
        {(detail) => (
          <>
            <div className="backdrop-img">
              <img src={`${IMG_API}${detail?.backdrop_path}`} alt="Backdrop" style={{width: "auto", height: 250}}/>

                {/*imageUrl={`${IMG_API}${item.backdrop_path}`}*/}
            </div>
            <div className="opacity-layer"></div>
            <div className="contentWrapper">
              <div className="content">
                <div className="left">
                  {detail?.poster_path ? (
                    <img
                      className="posterImg"
                      src={`${IMG_API}${detail?.poster_path}`}
                      alt={detail?.title || detail?.name}
                      style={{width: "auto", height: 250}}
                    />
                  ) : (
                    <img
                      className="posterImg"
                      src={detail?.poster_path}
                      alt={detail?.title || detail?.name}
                    />
                  )}
                </div>
                <div className="right">
                  <div className="title">{detail?.title || detail?.name}</div>
                  <div className="subtitle">{detail?.tagline}</div>

                  <Genre data={detail?.genres?.map((g) => g.name)} />

                  <div className="row">
                    <Rating rating={detail?.vote_average?.toFixed(1)} />
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
                  </div>

                  <div className="overview">
                    <div className="heading">Overview</div>
                    <div className="description">{detail?.overview}</div>
                  </div>

                  <div className="info">
                    {detail?.status && (
                      <div className="infoItem">
                        <span className="text bold">Status: </span>
                        <span className="text">{detail?.status}</span>
                      </div>
                    )}
                    {detail?.release_date && (
                      <div className="infoItem">
                        <span className="text bold">Release Date: </span>
                        <span className="text">
                          {new Date(detail?.release_date).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </span>
                      </div>
                    )}
                    {detail?.runtime && (
                      <div className="infoItem">
                        <span className="text bold">Runtime: </span>
                        <span className="text">
                          {toHoursAndMinutes(detail?.runtime)}
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
