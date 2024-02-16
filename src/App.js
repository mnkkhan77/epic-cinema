import "./App.css";
import SignInSide from "./Pages/auth/SignIn";
import Home from "./Pages/public/Home";
import About from "./Pages/public/About";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Pages/auth/SignUp";
import TermsOfService from "./Pages/public/TermsOfServices";
import Layout from "./components/ui/Layout";
import DescriptionPage from "./Pages/top/DescriptionPage";
import Reset from "./Pages/auth/Reset";
import Movie from "./Pages/top/Movie";
import Tv from "./Pages/top/Tv";
import { TopRatedProvider } from "./components/Provider/DataProvider";
import SearchResult from "./Pages/top/SearchResult";
import NotFound from "./Pages/public/NotFound";

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
        path="/movie"
        element={
          <Layout>
            <Movie />
          </Layout>
        }
      />
      <Route
        path="/toprated"
        element={
          <Layout>
            <TopRatedProvider />
          </Layout>
        }
      />
      <Route
        path="/tv"
        element={
          <Layout>
            <Tv />
          </Layout>
        }
      />
      <Route
        path="/search"
        element={
          <Layout>
            <SearchResult />
          </Layout>
        }
      />
      <Route component={NotFound} />
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
