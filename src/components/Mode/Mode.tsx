import React from 'react'
import {IMode} from './entities/IMode'
import './mode.scss'
import Dark from '../../assets/Dark/Dark'
import Light from '../../assets/Light/Light'

const Mode = ({isDark, toggleDarkMode}: IMode): JSX.Element => {
  return (
    <div className={`container-mode ${isDark ? 'dark' : ''}`}>
      <div className={`container-mode__title ${isDark ? 'dark' : ''}`}>
        <p>devfinder</p>
      </div>
      <div className={`container-mode__dark ${isDark ? 'dark' : ''}`}>
        <p>{isDark ? 'LIGHT' : 'DARK'}</p>
        {isDark ? (
          <Light onClick={toggleDarkMode} />
        ) : (
          <Dark onClick={toggleDarkMode} />
        )}
      </div>
    </div>
  )
}
export default Mode
