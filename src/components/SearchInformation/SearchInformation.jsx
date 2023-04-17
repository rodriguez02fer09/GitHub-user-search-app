import React from "react";
import "./searchInformation.scss";
import Profile from "../Profile/Profile";
import ContainerFollSocial from "../ContainerFollSocial/ContainerFollSocial";

const SearchInformation = ({redSocial , img}) => {
  
  return (
    <div className="SearchInformation">
      <Profile />
      <ContainerFollSocial redSocial={redSocial} img={img}/>
    </div>
  );
};

export default SearchInformation;
