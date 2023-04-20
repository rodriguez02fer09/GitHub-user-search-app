import React from "react";
import "./containerInformation.scss";
import ProfileImg from "../ProfileImg/ProfileImg";
import SearchInformation from "../SearchInformation/SearchInformation";

const ContainerInformation = ({isDark}) => {
  const defaultClass = `container-information`
  const custonClass = `${isDark ? `${defaultClass}--dark`: `${defaultClass}`}`
  
  return (
    <div className={`${defaultClass} ${custonClass}`} >
      <ProfileImg />
      <SearchInformation  isDark={isDark}/>
    </div>
  );
};
export default ContainerInformation;
