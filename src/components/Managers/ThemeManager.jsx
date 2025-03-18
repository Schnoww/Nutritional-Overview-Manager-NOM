import React, { createContext, useState, useContext} from "react";

const Themes = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("default");

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <Themes.Provider value={{ theme, changeTheme }}>
      {children}
    </Themes.Provider>
  );
};

export const useTheme = () => useContext(Themes);