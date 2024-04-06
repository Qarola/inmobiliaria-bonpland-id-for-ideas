import Buscador from '../components/Buscador/Buscador';
import Component_6 from '../components/Globals/Component_6';
// import { TeamCard, SocialNetworkEnum } from '../components/';
import oliviaRhye from '../assets/images/Olivia Rhye.png'

import { PropertiesCard } from '../components';

import { useFetch } from '../hooks/UseFetch';

const Home = () => {

    const { properties } = useFetch("url");

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
            <PropertiesCard
                key={properties[0].linkMore}
                image={properties[0].image}
                title={properties[0].title}
                description={properties[0].description}
                linkMore={properties[0].linkMore}
            />
        </div>
    )
}
export default Home