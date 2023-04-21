import React from "react";
import "./profileImg.scss"
import imgProfile from "../../assets/imgProfile.svg"


const ProfileImg = ({data}) => {
    const {avatar_url = imgProfile} = data ;
    return (
        <div className="main-profile" >
            <img src={avatar_url} alt="" />
            
        </div>
    )
}

export default ProfileImg;