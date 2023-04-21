import React, { useState } from "react";

import "./containerSearch.scss";
import SearchPrompt from "../SearchPrompt/SearchPrompt";
import SearchInformation from "../ContainerInformation/ContainerInformation";
import Mode from "../Mode/Mode";

const ContainerSearch = ({ isDark, toggleDarkMode }) => {
  const [data, setData] = useState({});
  const [user, setUser] = useState("");

  const apiGitHub = () => {
    fetch(
      `https://api.github.com/users/${user}`,

      {
        headers: {
          Authorization: `Bearer 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`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  };

  const searchPrompt = ({ target }) => {
    setUser(() => target.value);
  };

  return (
    <div className="containerSearch">
      <Mode isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <SearchPrompt
        isDark={isDark}
        onChange={searchPrompt}
        onClick={apiGitHub}
      />
      <SearchInformation isDark={isDark} data={data} />
    </div>
  );
};

export default ContainerSearch;
