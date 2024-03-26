import { Link } from "react-router-dom";

import icon from '../../assets/iconos/icon';

const iconInfo = {
  'facebook': {
    link: '',
    img: {
      'black': icon.facebookBlack,
      'white': icon.facebookWhite,
    }
  },
  'instagram': {
    link: '',
    img: {
      'black': icon.instagramBlack,
      'white': icon.instagramWhite,
    }
  },
  'linkedin': {
    link: '',
    img: {
      'black': icon.linkedinBlack,
      'white': icon.linkedinWhite,
    }
  },
  'twitter': {
    link: '',
    img: {
      'black': icon.twitterBlack,
      'white': icon.twitterWhite,
    }
  },
  'youtube': {
    link: '',
    img: {
      'black': icon.youtubeBlack,
      'white': icon.youtubeWhite,
    }
  }
}

export enum SocialNetworkEnum {
  facebook = 'facebook',
  instagram = 'instagram',
  linkedin = 'linkedin',
  twitter = 'twitter',
  youtube = 'youtube'
}

export enum IconColorEnum {
  black = 'black',
  white = 'white',
}

interface params {
  color: IconColorEnum;
  socialNetworks: SocialNetworkEnum[];
  className?: string;
}

export const SocialMediaComponent: (params: params) => JSX.Element = ({
  color,
  socialNetworks,
  className
}: params) => {
  return (
    <article className={className} >
      {
        socialNetworks.map(socialNetwork => (
          <Link
            to={iconInfo[socialNetwork].link}
            key={socialNetwork}
          >
            <img src={iconInfo[socialNetwork].img[color]} alt={socialNetwork} />
          </Link>
        ))
      }
    </article>
  )
}