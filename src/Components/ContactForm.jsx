import { useState } from "react";
import { styled } from "@mui/system";

const StyledFormContainer = styled("div")(({ theme }) => ({
  maxWidth: "600px",
  margin: "auto",
  padding: "20px",
  textAlign: "center",
  // backgroundColor: theme.colors.background,
  // color: theme.colors.text,
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
}));

const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const StyledLabel = styled("label")({
  margin: "10px 0",
});

const StyledInput = styled("input")({
  width: "100%",
  padding: "10px",
  margin: "5px 0",
  borderRadius: "5px",
  border: "1px solid #ccc",
});

const StyledTextArea = styled("textarea")({
  width: "100%",
  padding: "10px",
  margin: "5px 0",
  borderRadius: "5px",
  border: "1px solid #ccc",
  resize: "vertical",
});

const StyledButton = styled("button")(({ theme }) => ({
  padding: "10px",
  margin: "10px 0",
  borderRadius: "5px",
  border: "none",
  // backgroundColor: theme.colors.primary,
  color: "#fff",
  cursor: "pointer",
}));

const ContactForm = () => {
  //   const theme = useThemeContext();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    console.log("Form submitted:", formData);
  };

  return (
    // <StyledFormContainer theme={theme}>
    <StyledFormContainer>
      <h2>Contact Us</h2>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>
          Name:
          <StyledInput
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </StyledLabel>
        <StyledLabel>
          Email:
          <StyledInput
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </StyledLabel>
        <StyledLabel>
          Message:
          <StyledTextArea
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </StyledLabel>
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    </StyledFormContainer>
  );
};

export default ContactForm;
