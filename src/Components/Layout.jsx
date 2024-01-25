import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar /> {/* Use Navbar here */}
      <main>
        {children} {/* This is where the content of each page will go */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
