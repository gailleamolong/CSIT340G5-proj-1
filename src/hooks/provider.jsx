import { useState, useEffect } from "react";
import DarkModeContext from "./context.jsx";

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode) {
      const load =() => {
        setIsDarkMode(JSON.parse(darkMode));
      }
      load();
    }
  }, []);

  const handleDarkModeChange = (value) => {
    setIsDarkMode(value);
    localStorage.setItem("darkMode", JSON.stringify(value));
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, handleDarkModeChange }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export default DarkModeProvider;