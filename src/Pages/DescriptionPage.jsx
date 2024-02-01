import { useState } from "react";

import "./style.css";
import Genre from "../Components/components/Genre.jsx";
import { Rating } from "@mui/material";
import { PlayCircle } from "@mui/icons-material";

const DetailsBanner = () => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const dummyData = {
    backdrop_path:
      "http://radiusblocks.com/wp-content/uploads/2022/09/image-grid_3.jpg",
    poster_path:
      "http://radiusblocks.com/wp-content/uploads/2022/09/image-grid_3.jpg",
    name: "Dummy Movie",
    title: "Dummy Movie Title",
    release_date: "2023-01-01",
    tagline: "A dummy movie tagline",
    genres: [
      { id: 1, name: "Action" },
      { id: 2, name: "Adventure" },
      { id: 3, name: "Science Fiction" },
    ],
    vote_average: 7.5,
    overview:
      "This is a dummy movie overview. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Released",
    runtime: 120,
    created_by: [
      { id: 1, name: "Dummy Director 1" },
      { id: 2, name: "Dummy Director 2" },
    ],
    crew: [
      { id: 1, name: "Dummy Director 1", job: "Director" },
      { id: 2, name: "Dummy Writer 1", job: "Screenplay" },
      { id: 3, name: "Dummy Writer 2", job: "Writer" },
    ],
  };

  const url = "/"; // Set your actual URL here

  const _genres = dummyData.genres.map((g) => g.id);

  const director = dummyData.crew?.filter((f) => f.job === "Director");
  const writer = dummyData.crew?.filter(
    (f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
  );

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  return (
    <div className="detailsBanner">
      <>
        <div className="backdrop-img">
          <img src={dummyData.backdrop_path} />
        </div>
        <div className="opacity-layer"></div>
        <div className="contentWrapper">
          <div className="content">
            <div className="left">
              {dummyData.poster_path ? (
                <img className="posterImg" src={dummyData.poster_path} />
              ) : (
                <img className="posterImg" src={dummyData.poster_path} />
              )}
            </div>
            <div className="right">
              <div className="title">"YYYY"</div>
              <div className="subtitle">{dummyData.tagline}</div>

              <Genre data={_genres} />

              <div className="row">
                <Rating rating={dummyData.vote_average.toFixed(1)} />
                <div
                  className="playbtn"
                  onClick={() => {
                    setShow(true);
                    setVideoId(dummyData.video?.key);
                  }}
                >
                  <PlayCircle />
                  <span className="text">Watch Trailer</span>
                </div>
              </div>

              <div className="overview">
                <div className="heading">Overview</div>
                <div className="description">{dummyData.overview}</div>
              </div>

              <div className="info">
                {dummyData.status && (
                  <div className="infoItem">
                    <span className="text bold">Status: </span>
                    <span className="text">{dummyData.status}</span>
                  </div>
                )}
                {dummyData.release_date && (
                  <div className="infoItem">
                    <span className="text bold">Release Date: </span>
                    <span className="text">"MMM D, YYYY"</span>
                  </div>
                )}
                {dummyData.runtime && (
                  <div className="infoItem">
                    <span className="text bold">Runtime: </span>
                    <span className="text">
                      {toHoursAndMinutes(dummyData.runtime)}
                    </span>
                  </div>
                )}
              </div>

              {director?.length > 0 && (
                <div className="info">
                  <span className="text bold">Director: </span>
                  <span className="text">
                    {director?.map((d, i) => (
                      <span key={i}>
                        {d.name}
                        {director.length - 1 !== i && ", "}
                      </span>
                    ))}
                  </span>
                </div>
              )}

              {writer?.length > 0 && (
                <div className="info">
                  <span className="text bold">Writer: </span>
                  <span className="text">
                    {writer?.map((d, i) => (
                      <span key={i}>
                        {d.name}
                        {writer.length - 1 !== i && ", "}
                      </span>
                    ))}
                  </span>
                </div>
              )}

              {dummyData?.created_by?.length > 0 && (
                <div className="info">
                  <span className="text bold">Creator: </span>
                  <span className="text">
                    {dummyData?.created_by?.map((d, i) => (
                      <span key={i}>
                        {d.name}
                        {dummyData?.created_by.length - 1 !== i && ", "}
                      </span>
                    ))}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default DetailsBanner;
