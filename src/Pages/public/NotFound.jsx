import React from "react";
import { useNavigate } from "react-router-dom";
import NotFoundImage from "../../asset/Baki_Hanma.webp";

const NotFound = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div
      style={{
        boxSizing: "border-box",
        backgroundColor: "white",
        borderRadius: "20px",
        padding: "20px",
      }}
    >
      <div
        style={{
          borderRadius: "20px",
          backgroundColor: "black",
          padding: "20px",
        }}
      >
        <div
          style={{
            fontFamily: "Inconsolata",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "24px",
            textTransform: "uppercase",
            paddingLeft: "30px",
          }}
        >
          404 NOT FOUND
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ float: "left", width: "50%", height: "auto" }}>
            <img
              id="photo"
              src={NotFoundImage}
              alt="Not Found"
              style={{
                width: "75%",
                textAlign: "center",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                height: "75%",
              }}
            />
          </div>
          <div
            style={{
              float: "left",
              width: "50%",
              height: "90%",
              paddingLeft: "20px",
              marginBottom: "50px",
              color: "white",
            }}
          >
            <h1
              style={{
                fontFamily: "Space Mono",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "50px",
              }}
            >
              I have bad news <br /> for you
            </h1>
            <p
              style={{
                fontFamily: "Space Mono",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "14px",
                lineHeight: "36px",
                letterSpacing: "-0.035em",
              }}
            >
              The page you are looking <br /> for might be removed or is <br />
              temporarily unavailable
            </p>
            <button
              onClick={handleClick}
              className="btn"
              style={{
                fontFamily: "Space Mono",
                fontStyle: "normal",
                fontSize: "13px",
                fontWeight: "bold",
                background: "#333333",
                color: "white",
                padding: "17px",
                border: "none",
                cursor: "pointer",
              }}
            >
              BACK TO HOMEPAGE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
