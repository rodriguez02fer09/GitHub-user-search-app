import React from "react";
import "./profile.scss";
import imgProfile from "../../assets/imgProfile.svg";

const Profile = ({ isDark, data }) => {
  const { avatar_url = imgProfile } = data;
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
      <div
        className={`${defaultClass}__cont-profile ${custonClass}__cont-profile`}
      >
        <div className={`${defaultClass}__img ${custonClass}__img`}>
          <img src={avatar_url} alt="" />
        </div>
        <div className={`${defaultClass}__profile ${custonClass}__profile`}>
          <h1>{name}</h1>
          <h3>{login}</h3>
        </div>
        <div className={`${defaultClass}__date ${custonClass}__date`}>
          <h4>{created_at}</h4>
        </div>
      </div>

      {/* <div
        className={`${defaultClass}__cont-profile__mobile ${custonClass}__cont-profile__mobile`}
      >
       
        <div>
          <div
            className={`${defaultClass}__contProfile__mobile ${custonClass}__contProfile__mobile`}
          >
            <div
              className={`${defaultClass}__profile__mobile ${custonClass}__profile__mobile`}
            >
              <h1>{name}</h1>
              <h3>{login}</h3>
            </div>
            <div
              className={`${defaultClass}__date__mobile ${custonClass}__date__mobile`}
            >
              <h4>{created_at}</h4>
            </div>
          </div>
        </div>
      </div> */}

      <div className={`${defaultClass}__biography ${custonClass}__biography`}>
        <h2>{bio}</h2>
      </div>
    </div>
  );
};
export default Profile;
