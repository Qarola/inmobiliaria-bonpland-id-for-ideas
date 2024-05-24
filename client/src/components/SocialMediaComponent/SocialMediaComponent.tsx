import { Link } from "react-router-dom";
import { IconColors, SocialNetworks } from "../../types";
import icon from '../../assets/iconos/icon';

const socialNetworkIcon = {
  facebook: {
    'dark': icon.facebookBlack,
    'light': icon.facebookWhite,
  },
  instagram: {
    'dark': icon.instagramBlack,
    'light': icon.instagramWhite,
  },
  linkedin: {
    'dark': icon.linkedinBlack,
    'light': icon.linkedinWhite,
  },
  twitter: {
    'dark': icon.twitterBlack,
    'light': icon.twitterWhite,
  },
  youtube: {
    'dark': icon.youtubeBlack,
    'light': icon.youtubeWhite,
  }
};


interface Params {
  iconColor: IconColors;
  socialNetworks: SocialNetworks[]
  className?: string;
}

export const SocialMediaComponent: (params: Params) => JSX.Element = ({
  iconColor,
  socialNetworks,
  className
}: Params) => {
  return (
    <article className={className} >
      {
        socialNetworks?.map(socialNetwork => (
          <Link
            to={socialNetwork.link}
            key={socialNetwork.name}
          >
            <img src={socialNetworkIcon[socialNetwork.name][iconColor.colorOption]} alt={socialNetwork.name} />
          </Link>
        ))
      }
    </article>
  )
}