import React from 'react'
import './socialNetwork.scss'
import {ISocialNetwork, IInforSocialNetwork} from './entities/ISocialNetwork'

const SocialNetwork = ({
  infoSocialNetwork,
  isDark,
}: ISocialNetwork): JSX.Element => {
  const defaultClass = `main-socialnetwork`
  const custonClass = `${isDark ? `${defaultClass}--dark` : `${defaultClass}`}`

  return (
    <div className={`${defaultClass} ${custonClass}`}>
      {infoSocialNetwork.map(({name, img}: IInforSocialNetwork, index) => {
        return (
          <div
            key={index}
            className={`${defaultClass}__info ${custonClass}__info`}
          >
            {img}
            <p>{name}</p>
          </div>
        )
      })}
    </div>
  )
}

export default SocialNetwork
