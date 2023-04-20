import React from "react";
import "./containerFollSocial.scss";
import SocialNetwork from "../SocialNetwork/SocialNetwork";
import Followers from "../Followers/Followers";
import Location from "../../assets/location.svg"
import Twiter from "../../assets/twiter.svg"
import Link from "../../assets/link.svg"
import GitHub from "../../assets/gitHub.svg"

import LocationDark from "../../assets/location-dark.svg"
import TwiterDark from "../../assets/twiter-dark.svg"
import LinkDark from "../../assets/link-dark.svg"
import GitHubDark from "../../assets/github-dark.svg"
const ContainerFollSocial = ({isDark}) => {
  const infoSocialNetwork = [
    { name: "San Francisco", img: isDark ? LocationDark :Location},
    { name: "No Aviable", img: isDark ? TwiterDark :Twiter},
    { name: "https://github.blog", img:isDark ? LinkDark: Link},
    { name: "@gitHub", img: isDark? GitHubDark: GitHub },
  ];

  const infoFollowers = [
    {nameFollowers:"Repos", count:"8"},
    {nameFollowers:"Followers", count:"3938"},
    {nameFollowers:"Following", count:"9"}
  ]
  return (
    <div className="Container-follSocial">
      <Followers infoFollowers={infoFollowers }  isDark={isDark}/>
      <SocialNetwork infoSocialNetwork={infoSocialNetwork} isDark={isDark} />
    </div>
  );
};

export default ContainerFollSocial;
