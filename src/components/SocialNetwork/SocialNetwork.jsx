import React from "react";
import "./socialNetwork.scss";

const SocialNetwork = ({ infoSocialNetwork, isDark  }) => {
  return (
    <div className="main-socialnetwork">
      {infoSocialNetwork.map(({name ,img}, index) => {
        return (
          <div key ={index} className="main-socialnetwork__info">
            <img src={img} alt="" />
            <p>{name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SocialNetwork;
