import React from "react";
import "./searchPrompt.scss";

const SearchPrompt = () => {
  return (
    <div className="SearchPrompt">
      <div className="SearchPrompt_container">
        <input  className="SearchPrompt_container__input"type="search" id="search" name="search" />
        <button className="SearchPrompt_container__button" type="submit">Enviar</button>
      </div>
    </div>
  );
};
export default SearchPrompt;
