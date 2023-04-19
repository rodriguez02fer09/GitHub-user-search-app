import React from "react";
import "./containerInformation.scss";
import ProfileImg from "../ProfileImg/ProfileImg";
import SearchInformation from "../SearchInformation/SearchInformation";



const ContainerInformation = ({isDark}) => {
  return (
    <div className={`containerInformation ${isDark ? "dark" : ""}`} >
      <ProfileImg />
      <SearchInformation  isDark={isDark}/>
    </div>
  );
};
export default ContainerInformation;
