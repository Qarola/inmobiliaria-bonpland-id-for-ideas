import Buscador from '../components/Globals/Buscador';
import Component_6 from '../components/Globals/Component_6';
import { TeanCard } from '../components/TeanCard/TeanCard';

import oliviaRhye from '../assets/images/Olivia Rhye.png'

const Home = () => {


    return(
        <div className="">
            <Buscador/>
            <Component_6/>
            <TeanCard image={oliviaRhye} name={'Olivia Rhye'} role={'Founder & CEO'} jobDescription={'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.'} />
        </div>
    )
}
export default Home