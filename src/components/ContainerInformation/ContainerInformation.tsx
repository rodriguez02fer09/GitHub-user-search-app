import React from 'react'
import './containerInformation.scss'
import {IContainerInformation} from './entities/IContainerInformation'
import ProfileImg from '../ProfileImg/ProfileImg'
import SearchInformation from '../SearchInformation/SearchInformation'

const ContainerInformation: React.FC<IContainerInformation> = ({
  isDark,
  data,
}) => {
  const defaultClass = 'container-information'
  const customClass = isDark ? `${defaultClass}--dark` : ''

  return (
    <div className={`${defaultClass} ${customClass}`}>
      <ProfileImg data={data} />
      <SearchInformation isDark={isDark} data={data} />
    </div>
  )
}

export default ContainerInformation
