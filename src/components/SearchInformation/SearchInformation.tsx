import React from 'react'
import './searchInformation.scss'
import {ISearchInformation} from './entities/ISearchInformation'
import Profile from '../Profile/Profile'
import ContainerFollSocial from '../ContainerFollSocial/ContainerFollSocial'

const SearchInformation = ({isDark, data}: ISearchInformation): JSX.Element => {
  return (
    <div className="SearchInformation">
      <Profile isDark={isDark} data={data} />
      <ContainerFollSocial isDark={isDark} data={data} />
    </div>
  )
}

export default SearchInformation
