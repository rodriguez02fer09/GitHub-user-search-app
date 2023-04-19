import React, { useState } from "react";

import "./containerSearch.scss";
import SearchPrompt from "../SearchPrompt/SearchPrompt";
import SearchInformation from "../ContainerInformation/ContainerInformation";
import Mode from "../Mode/Mode";

const ContainerSearch = ({isDark , toggleDarkMode}) => {
  
  return (
    <div className="containerSearch">
      <Mode isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <SearchPrompt isDark={isDark}   />
      <SearchInformation isDark={isDark} />
    </div>
  );
};

export default ContainerSearch;
