import React from "react";
import "./searchInformation.scss";
import Profile from "../Profile/Profile";
import ContainerFollSocial from "../ContainerFollSocial/ContainerFollSocial";

const SearchInformation = ({redSocial , img , isDark }) => {
  
  return (
    <div className="SearchInformation" isDark={isDark}>
      <Profile />
      <ContainerFollSocial redSocial={redSocial} img={img} isDark={isDark} />
    </div>
  );
};

export default SearchInformation;
