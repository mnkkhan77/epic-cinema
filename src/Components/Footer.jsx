import React from "react";
import { Link } from "react-router-dom";

const linkStyle = {
  color: "#fff",
  textDecoration: "none", // Remove underline
};

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#282828",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
    position: "fixed",
    bottom: "0",
    width: "100%",
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2023 Epic Cinema</p>
      <div>
        <Link to="/" style={linkStyle}>
          Terms of Service
        </Link>{" "}
        -{" "}
        <Link to="/" style={linkStyle}>
          Contact
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
