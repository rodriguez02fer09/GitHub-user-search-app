export interface ISocialNetwork {
  isDark: boolean
  infoSocialNetwork: IInforSocialNetwork[]
}

export interface IInforSocialNetwork {
  name: string
  img: JSX.Element
}
