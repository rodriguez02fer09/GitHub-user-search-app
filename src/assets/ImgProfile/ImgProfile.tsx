import React from 'react'
import {IImageProfile} from './entities/IImgProfile'

const ImgProfile: React.FC<IImageProfile> = ({src}) => {
  return (
    <svg
      width="117"
      height="117"
      viewBox="0 0 117 117"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="58.5" cy="58.5" r="58.5" />

      <image
        href={src}
        width="117"
        height="117"
        clipPath="url(#clipCircle)"
        preserveAspectRatio="xMidYMid slice"
      />
    </svg>
  )
}

export default ImgProfile
