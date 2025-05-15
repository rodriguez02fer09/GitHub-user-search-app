import React from 'react'
import './profileImg.scss'
import ImgProfile from '../../assets/ImgProfile/ImgProfile'
import {IProfileImg} from './entities/IProfileImg'

const ProfileImg: React.FC<IProfileImg> = ({data}) => {
  const {avatar_url} = data

  return (
    <div className="main-profile">
      <ImgProfile src={avatar_url} />
    </div>
  )
}

export default ProfileImg
