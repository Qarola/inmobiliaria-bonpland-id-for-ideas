import Component_6 from './Globals/Component_6';
import { TeanCard } from './TeanCard/TeanCard';

import oliviaRhye from '../assets/images/Olivia Rhye.png'

const Home = () => {
    return (
        <div className="">
            <Component_6 />
            <TeanCard image={oliviaRhye} name={'Olivia Rhye'} role={'Founder & CEO'} jobDescription={'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.'} />
        </div>
    )
}

export default Home