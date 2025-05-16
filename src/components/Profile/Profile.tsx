import React from 'react'
import './profile.scss'
import imgProfile from '../../assets/ImgProfile/ImgProfile'
import {IProfile} from './entities/IProfile'

const Profile = ({isDark, data}: IProfile): JSX.Element => {
  const date = new Date(data.created_at)
  const formattedDate = date.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const {avatar_url = imgProfile} = data
  const {
    name = 'The Octocat',
    login = '@octocat',
    bio = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.',
    created_at = 'Joined 25 Jan 2011',
  } = data

  const defaultClass = `contain-profile`
  const custonClass = `${isDark ? `${defaultClass}--dark` : `${defaultClass}`}`
  return (
    <div className={`${defaultClass} ${custonClass}`}>
      {/* destok-tablet */}

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
          <h4>{formattedDate}</h4>
        </div>
      </div>

      {/* mobile */}

      <div
        className={`${defaultClass}__main-mobile ${custonClass}__main-mobile`}
      >
        <div className={`${defaultClass}__mobile ${custonClass}__mobile`}>
          <div className={`${defaultClass}__img ${custonClass}__img`}>
            <img src={avatar_url} alt="" />
          </div>

          <div
            className={`${defaultClass}__profile-mobile ${custonClass}__profile-mobile`}
          >
            <div className={`${defaultClass}__profile ${custonClass}__profile`}>
              <h1>{name}</h1>
              <h3>{login}</h3>
              <h4>{formattedDate}</h4>
            </div>
          </div>
        </div>
      </div>

      {/* biografia */}
      <div className={`${defaultClass}__biography ${custonClass}__biography`}>
        <h2>{bio}</h2>
      </div>
    </div>
  )
}
export default Profile
