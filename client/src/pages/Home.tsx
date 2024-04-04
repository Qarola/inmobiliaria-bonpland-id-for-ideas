import Buscador from '../components/Buscador/Buscador';
import Component_6 from '../components/Globals/Component_6';
// import { TeamCard, SocialNetworkEnum } from '../components/';

import oliviaRhye from '../assets/images/Olivia Rhye.png'

const Home = () => {

    return (
        <div className="">
            <Buscador />
            <Component_6 />
            {/* <TeamCard image={oliviaRhye} name={'Olivia Rhye'} role={'Founder & CEO'} jobDescription={'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.'} socialNetworks={[
                {
                    name: SocialNetworkEnum.twitter,
                    link: 'twitter'
                },
                {
                    name: SocialNetworkEnum.linkedin,
                    link: 'linkedin'
                },
                {
                    name: SocialNetworkEnum.facebook,
                    link: 'facebook'
                }
            ]} /> */}
        </div>
    )
}
export default Home