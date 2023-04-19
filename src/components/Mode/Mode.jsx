import React from "react";
import "./mode.scss";
import imgDark from "../../assets/dark.svg"
import imgLight from "../../assets/light.svg"


const Mode = ({ isDark, toggleDarkMode}) => {
  return (
    <div className={`container-mode ${isDark ? "dark" : ""}`}  >
       <div className={`container-mode__title ${isDark ? "dark" : ""}`}>
      <p>devfinder</p>
    </div>
    <div className={`container-mode__dark ${isDark ? "dark" : ""}`}>
      <p>{isDark ? "LIGHT" : "DARK"}</p>
      <img src={ isDark ? imgLight:imgDark  } onClick={toggleDarkMode} />
    </div>
  </div>
  );
};
export default Mode;
