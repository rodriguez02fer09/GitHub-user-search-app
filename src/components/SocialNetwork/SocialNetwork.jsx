import React from "react";
import "./socialNetwork.scss";

const socialNetwork = ({ infoSocialNetwork }) => {
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

export default socialNetwork;
