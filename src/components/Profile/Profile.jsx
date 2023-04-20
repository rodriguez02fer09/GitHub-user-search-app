import React from "react";
import "./profile.scss";

const Profile = ({isDark}) => {

  const defaultClass = `contain-profile`
  const custonClass = `${isDark ? `${defaultClass}--dark`: `${defaultClass}`}`
  return (
    <div className={`${defaultClass} ${custonClass}`}>
      
      <div className={`${defaultClass}__profile ${custonClass}__profile`} >
        <h1>The Octocat</h1>
        <h3>@octocat</h3>
        <h4>This profile has no bio</h4>
      </div>
      <div className={`${defaultClass}__date ${custonClass}__date`} >
        <h4>Joined 25 Jan 2011</h4>
      </div>
    </div>
  );
};
export default Profile;
