import React, {useState} from 'react'
import {ILayout} from './entities/ILayout'
import ContainerSearch from '../ContainerSearch/ContainerSearch'
import './layout.scss'

interface LayoutComponent extends ILayout {
  defaultClass: string
}

const Layout = ({
  isDark: isDarkCurrent,
  defaultClass = 'layout',
}: LayoutComponent): JSX.Element => {
  const [isDark, setIsDark] = useState<boolean>(isDarkCurrent)

  const toggleDarkMode = () => {
    setIsDark(!isDark)
  }

  return (
    <div className={`${defaultClass} ${isDark ? 'dark' : ''}`}>
      <ContainerSearch
        isDark={isDark}
        toggleDarkMode={toggleDarkMode}
        onClick={(event: React.MouseEvent<SVGElement, MouseEvent>) => {
          throw new Error('Function not implemented.')
        }}
      />
    </div>
  )
}

export default Layout
