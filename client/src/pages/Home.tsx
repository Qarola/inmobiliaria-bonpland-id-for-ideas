import Buscador from '../components/Buscador/Buscador';
import Component_6 from '../components/Globals/Component_6';

import { PropertiesSection, ContactAgentsSection } from '../components';

import { useFetch } from '../hooks/UseFetch';

const Home = () => {

    const { properties, agentsData } = useFetch("url");

    return (
        <div className="">
            <Buscador />
            <PropertiesSection properties={properties} />
            <Component_6 />
            <ContactAgentsSection agentsData={agentsData} />
        </div>
    )
}
export default Home