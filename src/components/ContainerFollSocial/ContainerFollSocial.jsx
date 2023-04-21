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
const ContainerFollSocial = ({isDark, data}) => {
  
  const { public_repos ="0", followers ="0", following ="0" }= data

const {dataLocation= "No Aviable", dataTwiter = "No Aviable" , dataLink= "No Aviable",dataGitHub= "No Aviable" }= data

  const infoSocialNetwork = [
    { name: dataLocation, img: isDark ? LocationDark :Location},//location
    { name: dataTwiter, img: isDark ? TwiterDark :Twiter},//Twiter
    { name: dataLink, img:isDark ? LinkDark: Link},//Link
    { name: dataGitHub, img: isDark? GitHubDark: GitHub },//GitHub
  ];

  const infoFollowers = [
    {nameFollowers:"Repos", count:public_repos},
    {nameFollowers:"Followers", count:followers},
    {nameFollowers:"Following", count:following}
  ]
  return (
    <div className="Container-follSocial">
      <Followers infoFollowers={infoFollowers }  isDark={isDark}  />
      <SocialNetwork infoSocialNetwork={infoSocialNetwork} isDark={isDark} />
    </div>
  );
};

export default ContainerFollSocial;
