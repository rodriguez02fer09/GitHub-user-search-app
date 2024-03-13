import React from 'react'
import './containerFollSocial.scss'
import SocialNetwork from '../SocialNetwork/SocialNetwork'
import {IContainerFollSocial} from './entities/IContainerFollSocial'
import Followers from '../Followers/Followers'
import Location from '../../assets/Location'
import Twiter from '../../assets/Twiter'
import Link from '../../assets/Link'
import GitHub from '../../assets/GitHub'
import LocationDark from '../../assets/LocationDark'
import LinkDark from '../../assets/LinkDark'
import TwiterDark from '../../assets/TwiterDark'
import GitHubDark from '../../assets/GitHubDark'

const ContainerFollSocial = ({
  isDark,
  data,
}: IContainerFollSocial): JSX.Element => {
  const {public_repos = '0', followers = '0', following = '0'} = data

  const {
    dataLocation = 'No Aviable',
    dataTwiter = 'No Aviable',
    dataLink = 'No Aviable',
    dataGitHub = 'No Aviable',
  } = data

  const infoSocialNetwork = [
    {name: dataLocation, img: isDark ? <LocationDark /> : <Location />}, //location
    {name: dataLink, img: isDark ? <LinkDark /> : <Link />}, //Link
    {name: dataTwiter, img: isDark ? <TwiterDark /> : <Twiter />}, //Twiter
    {name: dataGitHub, img: isDark ? <GitHubDark /> : <GitHub />}, //GitHub
  ]

  const infoFollowers = [
    {nameFollowers: 'Repos', count: public_repos},
    {nameFollowers: 'Followers', count: followers},
    {nameFollowers: 'Following', count: following},
  ]
  return (
    <div className="Container-follSocial">
      <Followers infoFollowers={infoFollowers} isDark={isDark} />
      <SocialNetwork infoSocialNetwork={infoSocialNetwork} isDark={isDark} />
    </div>
  )
}

export default ContainerFollSocial
