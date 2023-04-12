import React from "react";
import "./containerInformation.scss";
import ProfileImg from "../ProfileImg/ProfileImg";
import SearchInformation from "../SearchInformation/SearchInformation";

const ContainerInformation = () => {
  return (
    <div className="containerInformation">
    <ProfileImg/>
   <SearchInformation/>
    </div>
  );
};
export default ContainerInformation;
