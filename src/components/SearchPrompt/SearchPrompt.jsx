import React from "react";
import "./searchPrompt.scss";
import shape from "../../assets/shape.svg"

const SearchPrompt = ({isDark }) => {
  return (
    <div className="SearchPrompt">
      <div className="SearchPrompt_container">
        <input  className={`SearchPrompt_container__input ${isDark ? "dark" : ""}`}  placeholder = "Search GitHub username..."type="text" id="search" name="search" />
        <img className = "SearchPrompt_container__img"src={shape} alt="" />
        <button className="SearchPrompt_container__button" type="submit">Search</button>
      </div>
    </div>
  );
};
export default SearchPrompt;
