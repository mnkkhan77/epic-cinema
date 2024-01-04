import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import SignInSide from "./Pages/SignIn";
import Hero from "./Components/Hero";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactForm from "./Components/ContactForm";
import SignUp from "./Pages/SignUp";
import TermsOfService from "./Pages/TermsOfService";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<About />} />
      <Route path="/log_in" element={<SignInSide />} />
      <Route path="/sign_up" element={<SignUp />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
    </Routes>

    // <div className="App">
    //   <Navbar />
    //   {/* <Hero /> */}
    //   {/* <SignInSide /> */}
    //   {/* <Footer /> */}
    // </div>
  );
}

export default App;
