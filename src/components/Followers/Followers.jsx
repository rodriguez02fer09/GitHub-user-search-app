import React from "react";
import "./followers.scss";

const Followers = ({ infoFollowers, isDark }) => {
  return (
    <div className={`main-followers  ${isDark ? "dark" : ""}`} >
      {infoFollowers.map(({ nameFollowers, count }, index) => {
        return (
          <div className="main-followers__info " key={index}>
            <p>{nameFollowers}</p>
            <p> {count}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Followers;
