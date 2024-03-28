import { Link } from "react-router-dom";

import icon from '../../assets/iconos/icon';

const SocialNetworkIcon = {
  'facebook': {
    'black': icon.facebookBlack,
    'white': icon.facebookWhite,
  },
  'instagram': {
    'black': icon.instagramBlack,
    'white': icon.instagramWhite,
  },
  'linkedin': {
    'black': icon.linkedinBlack,
    'white': icon.linkedinWhite,
  },
  'twitter': {
    'black': icon.twitterBlack,
    'white': icon.twitterWhite,
  },
  'youtube': {
    'black': icon.youtubeBlack,
    'white': icon.youtubeWhite,
  }
}

export enum SocialNetworkEnum {
  facebook = 'facebook',
  instagram = 'instagram',
  linkedin = 'linkedin',
  twitter = 'twitter',
  youtube = 'youtube'
}

export enum SocialNetworkIconColorEnum {
  black = 'black',
  white = 'white',
}

interface Params {
  color: SocialNetworkIconColorEnum;
  socialNetworks:
  {
    name: SocialNetworkEnum;
    link: string;
  }[];
  className?: string;
}

export const SocialMediaComponent: (params: Params) => JSX.Element = ({
  color,
  socialNetworks,
  className
}: Params) => {
  return (
    <article className={className} >
      {
        socialNetworks.map(socialNetwork => (
          <Link
            to={socialNetwork.link}
            key={socialNetwork.name}
          >
            <img src={SocialNetworkIcon[socialNetwork.name][color]} alt={socialNetwork.name} />
          </Link>
        ))
      }
    </article>
  )
}