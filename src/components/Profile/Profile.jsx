import React from "react";
import "./profile.scss";

const Profile = () => {
  return (
    <div className="containprofile">
      <div className="containprofile__profile">
        <h1>The Octocat</h1>
        <h3>@octocat</h3>
        <h4>This profile has no bio</h4>
      </div>
      <div className="contain__date">
        <h4>Joined 25 Jan 2011</h4>
      </div>
    </div>
  );
};
export default Profile;
