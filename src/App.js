import "./App.css";
import SignInSide from "./Pages/SignIn";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import TermsOfService from "./Pages/TermsOfServices";
import Layout from "./Components/Layout";
import DescriptionPage from "./Pages/DescriptionPage";
import Reset from "./Pages/Reset";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      <Route
        path="/log_in"
        element={
          <Layout>
            <SignInSide />
          </Layout>
        }
      />
      <Route
        path="/sign_up"
        element={
          <Layout>
            <SignUp />
          </Layout>
        }
      />
      <Route
        path="/terms-of-service"
        element={
          <Layout>
            <TermsOfService />
          </Layout>
        }
      />
      <Route
        path=":media_type/:id"
        element={
          <Layout>
            <DescriptionPage />
          </Layout>
        }
      />
      <Route
        path="/reset"
        element={
          <Layout>
            <Reset />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
