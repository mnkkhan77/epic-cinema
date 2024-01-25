import "./App.css";
import SignInSide from "./Pages/SignIn";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import TermsOfService from "./Pages/TermsOfServices";

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
  );
}

export default App;
