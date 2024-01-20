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
      <p>
        &copy; 2023{" "}
        <Link
          to="/"
          style={{
            color: "#fff",
            textDecoration: "none",
          }}
        >
          Epic Cinema
        </Link>
      </p>
      <div>
        <Link to="/terms-of-service" style={linkStyle}>
          Terms of Service
        </Link>{" "}
        -{" "}
        <Link to="/contact" style={linkStyle}>
          Contact
        </Link>{" "}
        -{" "}
        <Link to="/about" style={linkStyle}>
          About
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
