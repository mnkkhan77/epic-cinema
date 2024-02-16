import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    // Define your theme properties here
    colors: {
      primary: "#007bff",
      secondary: "#555",
      // background: "#fff",
      text: "#333",
    },
    // Add more theme properties as needed
  });

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
