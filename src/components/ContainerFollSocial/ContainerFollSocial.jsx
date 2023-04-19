import React from "react";
import "./containerFollSocial.scss";
import SocialNetwork from "../SocialNetwork/SocialNetwork";
import Followers from "../Followers/Followers";
import Location from "../../assets/location.svg"
import Twiter from "../../assets/twiter.svg"
import Link from "../../assets/link.svg"
import GitHub from "../../assets/gitHub.svg"

const ContainerFollSocial = ({isDark}) => {
  const infoSocialNetwork = [
    { name: "San Francisco", img:Location },
    { name: "No Aviable", img:Twiter },
    { name: "https://github.blog", img: Link},
    { name: "@gitHub", img: GitHub },
  ];

  const infoFollowers = [
    {nameFollowers:"Repos", count:"8"},
    {nameFollowers:"Followers", count:"3938"},
    {nameFollowers:"Following", count:"9"}
  ]
  return (
    <div className="ContainerFollSocial">
      <Followers infoFollowers={infoFollowers }  isDark={isDark}/>
      <SocialNetwork infoSocialNetwork={infoSocialNetwork} isDark={isDark} />
    </div>
  );
};

export default ContainerFollSocial;
