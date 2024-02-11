import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      {/* <MouseTrail /> Include MouseTrail component here */}
      <Navbar />
      <main style={{ marginBottom: "80px" }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
