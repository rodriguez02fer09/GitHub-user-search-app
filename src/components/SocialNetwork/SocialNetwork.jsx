import React from "react";
import "./socialNetwork.scss";
import Location from "../../assets/location.svg";
import Twiter from "../../assets/twiter.svg";
import Link from "../../assets/link.svg";
import Github from "../../assets/gitHub.svg";

const socialNetwork = () => {
  return (
    <div className="main-socialNetwork">
      <div>
        <img src={Location} alt="" />
        <p>san francisco</p>
      </div>
      <div>
        <img src={Twiter} alt="" />
        <p>Not Available</p>
      </div>
      <div>
        <img src={Link} alt="" />
        <p>https://github.blog</p>
      </div>
      <div>
        <img src={Github} alt="" />
        <p>@github</p>
      </div>
    </div>
  );
};

export default socialNetwork;
