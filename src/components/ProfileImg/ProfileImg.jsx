import React from 'react'
import './profileImg.scss'
import ImgProfile from '../../assets/ImgProfile/ImgProfile'

const ProfileImg = ({data}) => {
  const {avatar_url} = data

  return (
    <div className="main-profile">
      <ImgProfile src={avatar_url} />
    </div>
  )
}

export default ProfileImg
