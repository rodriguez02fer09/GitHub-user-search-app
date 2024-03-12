import React, {useState} from 'react'
import {ILayout} from './entities/ILayout'
import ContainerSearch from '../ContainerSearch/ContainerSearch'

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
      <ContainerSearch isDark={isDark} toggleDarkMode={toggleDarkMode} />
    </div>
  )
}
export default Layout
