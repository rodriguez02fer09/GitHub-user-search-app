import React from 'react'
import './followers.scss'

const Followers = ({infoFollowers, isDark}) => {
  const defaultClass = `main-followers`
  const custonClass = `${isDark ? `${defaultClass}--dark` : `${defaultClass}`}`
  return (
    <div className={`${defaultClass} ${custonClass}`}>
      {infoFollowers.map(({nameFollowers, count}, index) => {
        return (
          <div
            className={`${defaultClass}__info ${custonClass}__info`}
            key={index}
          >
            <p>{nameFollowers}</p>
            <p> {count}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Followers
