import React, { useState } from "react";

import "./containerSearch.scss";
import SearchPrompt from "../SearchPrompt/SearchPrompt";
import SearchInformation from "../ContainerInformation/ContainerInformation";
import Mode from "../Mode/Mode";

const ContainerSearch = ({ isDark, toggleDarkMode }) => {
  const [data, setData] = useState({});
  const [user, setUser] = useState("");
  const [notFound, setNotFound] = useState(false);

  const apiGitHub = () => {
    fetch(`https://api.github.com/users/${user}`, {
      headers: {
        Authorization: `Bearer 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`,
      },
    })
      .then((response) => {
        if(response.status === 404){
          setNotFound(true);
        }
        return response.json()
      })
      .then((data) => {
        setData(data);
          console.log(data);
      })
      .catch((error) => console.error(error));
  };
  const searchPrompt = ({ target }) => {
    setNotFound(false);
    setUser(() => target.value);
  };

  return (
    <div className="containerSearch">
      <Mode isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <SearchPrompt
        isDark={isDark}
        onChange={searchPrompt}
        onClick={apiGitHub}
        notFound={notFound}
      />
      <SearchInformation isDark={isDark} data={data} />
    </div>
  );
};

export default ContainerSearch;
