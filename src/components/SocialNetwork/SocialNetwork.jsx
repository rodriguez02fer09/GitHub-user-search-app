import React from "react";
import "./socialNetwork.scss";

const SocialNetwork = ({ infoSocialNetwork, isDark  }) => {
  const defaultClass = `main-socialnetwork`
  const custonClass = `${isDark ? `${defaultClass}--dark`: `${defaultClass}`}`
  return (
    <div className={`${defaultClass} ${custonClass}`} >
      {infoSocialNetwork.map(({name ,img}, index) => {
        return (
          <div key ={index} className={`${defaultClass}__info ${custonClass}__info`}>
            <img src={img} alt="" />
            <p>{name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SocialNetwork;
