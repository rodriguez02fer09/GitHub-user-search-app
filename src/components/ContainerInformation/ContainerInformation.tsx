import React from "react";
import "./containerInformation.scss";
import ProfileImg from "../ProfileImg/ProfileImg";
import SearchInformation from "../SearchInformation/SearchInformation";

const ContainerInformation = ({isDark,data }) => {
  const defaultClass = `container-information`
  const custonClass = `${isDark ? `${defaultClass}--dark`: `${defaultClass}`}`
  
  return (
    <div className={`${defaultClass} ${custonClass}`} >
      <ProfileImg data={data }  />
      <SearchInformation  isDark={isDark} data={data }  />
    </div>
  );
};
export default ContainerInformation;
