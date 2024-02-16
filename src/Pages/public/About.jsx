import { styled } from "@mui/system";
import ContactForm from "../../components/ui/ContactForm";
import WithBreadcrumbs from "../../components/ui/WithBreadcrumbs";

const StyledAboutContainer = styled("div")({
  maxWidth: "800px",
  margin: "auto",
  padding: "20px",
  textAlign: "justify",
});

const StyledHeading = styled("h1")({
  color: "#333",
  borderBottom: "2px solid #333",
  paddingBottom: "10px",
  marginTop: "0",
});

const StyledSubheading = styled("h2")({
  color: "#555",
  marginTop: "20px",
});

const StyledParagraph = styled("p")({
  fontSize: "16px",
  lineHeight: "1.6",
});
styled("a")({
  color: "#007bff",
  textDecoration: "none",
  fontWeight: "bold",
  ":hover": {
    textDecoration: "underline",
  },
});
const About = () => {
  return (
    <StyledAboutContainer>
      <StyledHeading>About Epic Cinema</StyledHeading>
      <StyledParagraph>
        Welcome to Epic Cinema, your go-to source for the latest movies and TV
        shows. We strive to provide an immersive and enjoyable experience for
        movie enthusiasts.
      </StyledParagraph>
      <StyledParagraph>
        Our platform features a vast collection of trending movies, top-rated
        shows, and an extensive library of genres to cater to diverse tastes.
        Explore and discover new favorites with Epic Cinema.
      </StyledParagraph>
      <StyledSubheading>Our Mission</StyledSubheading>
      <StyledParagraph>
        At Epic Cinema, we are committed to delivering high-quality content,
        keeping you updated with the latest releases, and creating a community
        where movie lovers can connect and share their passion.
      </StyledParagraph>
      <ContactForm />
    </StyledAboutContainer>
  );
};

export default WithBreadcrumbs(About);
