import React from "react";
import "./profile.scss";

const Profile = ({ isDark, data }) => {
  const {
    name = "The Octocat",
    login = "@octocat",
    bio = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
    created_at = "Joined 25 Jan 2011",
  } = data;

  const defaultClass = `contain-profile`;
  const custonClass = `${isDark ? `${defaultClass}--dark` : `${defaultClass}`}`;
  return (
    <div className={`${defaultClass} ${custonClass}`}>
      <div className={`${defaultClass}__cont-profile ${custonClass}__cont-profile`}>
        <div className={`${defaultClass}__profile ${custonClass}__profile`}>
          <h1>{name}</h1>
          <h3>{login}</h3>
        </div>
        <div className={`${defaultClass}__date ${custonClass}__date`}>
          <h4>{created_at}</h4>
        </div>
      </div>

      <div className={`${defaultClass}__biography ${custonClass}__biography`}>
        <h4>{bio}</h4>
      </div>
    </div>
  );
};
export default Profile;
