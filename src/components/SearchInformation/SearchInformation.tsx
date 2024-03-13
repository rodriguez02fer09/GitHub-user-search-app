import React from 'react'
import './searchInformation.scss'
import {ISearchInformation} from './entities/ISearchInformation'
import Profile from '../Profile/Profile'
import ContainerFollSocial from '../ContainerFollSocial/ContainerFollSocial'

const SearchInformation = ({
  redSocial,
  img,
  isDark,
  data,
}: ISearchInformation): JSX.Element => {
  return (
    <div className="SearchInformation" isDark={isDark}>
      <Profile isDark={isDark} data={data} />
      <ContainerFollSocial
        redSocial={redSocial}
        img={img}
        isDark={isDark}
        data={data}
      />
    </div>
  )
}

export default SearchInformation
