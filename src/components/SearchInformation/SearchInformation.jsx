import React from "react";
import "./searchInformation.scss";
import Followers from "../Followers/Followers";
import Profile from "../Profile/Profile";
import SocialNetwork from "../SocialNetwork/SocialNetwork"

const SearchInformation = () => {
  return (
    <div className="SearchInformation ">
    <Profile/>
    <Followers/>
    <SocialNetwork/>

    </div>
  );
};
export default SearchInformation;
