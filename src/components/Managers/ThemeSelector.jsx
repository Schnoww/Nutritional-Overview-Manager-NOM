import React from "react";
import { useTheme } from "./ThemeManager";

const ThemeSelector = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <div>
      <label htmlFor="theme"> Color Blind Options: </label>
      <select
        id="theme"
        value={theme}
        onChange={(e) => changeTheme(e.target.value)}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded
					transition duration-200"
        // defaultValue="default"
      >
        <option value="default">Default</option>
        <option value="deuteranopia">Deuteranopia</option>
        <option value="protanopia">Protanopia</option>
        <option value="tritanopia">Tritanopia</option>
      </select>
      <div
        className="
          bg-white text-black
          data-[theme=deuteranopia]:bg-f5f5dc
          data-[theme=deuteranopia]:text-1a1a1a
          data-[theme=protanopia]:bg-e6f7ff
          data-[theme=protanopia]:text-00274d
          data-[theme=tritanopia]:bg-d9d9d9
          data-[theme=tritanopia]:text-black
          "
      >
      </div>
    </div>
  );
};

export default ThemeSelector;