import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};

const Footer = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [footerVisible, setFooterVisible] = useState(true);

  const footerStyle = {
    backgroundColor: "#282828",
    color: "#fff",
    textAlign: "center",
    position: "fixed",
    bottom: "0",
    width: "100%",
    transition: "transform 0.3s ease-in-out",
    transform: footerVisible ? "translateY(0)" : "translateY(100%)",
  };

  useEffect(() => {
    function handleScroll() {
      const { scrollHeight, scrollTop, clientHeight } =
        document.documentElement;
      const isBottom = scrollTop + clientHeight >= scrollHeight - 10;
      if (scrollTop > lastScrollTop && !isBottom) {
        setFooterVisible(false);
      } else {
        setFooterVisible(true);
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <footer style={footerStyle}>
      <p>
        © 2023{" "}
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
