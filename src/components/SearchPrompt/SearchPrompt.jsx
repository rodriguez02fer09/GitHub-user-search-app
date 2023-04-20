import React from "react";
import "./searchPrompt.scss";
import shape from "../../assets/shape.svg"




const SearchPrompt = ({ isDark }) => {
  const defaultClass = `search-prompt`
  const custonClass = `${isDark ? `${defaultClass}--dark`: `${defaultClass}`}`

  return (
    <div className={`${defaultClass} ${custonClass}`}>
      <div className={`${defaultClass}__container ${custonClass}__container`}>
        <input  className={`${defaultClass}__container-input ${custonClass}__container-input `}  placeholder = "Search GitHub username..."type="text" id="search" name="search" />
        <img className = {`${defaultClass}__container-img ${custonClass}__container-img`}src={shape} alt="" />
        <button className={`${defaultClass}__container-button ${custonClass}__container-button`} type="submit">Search</button>
      </div>
    </div>
  );
};
export default SearchPrompt;
