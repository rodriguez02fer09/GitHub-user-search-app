import React from "react";
import "./profileImg.scss"
import imgProfile from "../../assets/imgProfile.svg"


const ProfileImg = () => {
    return (
        <div className="main-profile">
            <img src={imgProfile} alt="" />
            
        </div>
    )
}

export default ProfileImg;