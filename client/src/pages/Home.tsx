import Buscador from '../components/Buscador/Buscador';

import { PropertiesSection, ContactAgentsSection, SectionServices, LuxuryHomesSection } from '../components';

import { useFetch } from '../hooks/UseFetch';

const Home = () => {

    const { properties, agentsData } = useFetch("url");

    return (
        <div className="">
            <Buscador />
            <PropertiesSection properties={properties} />
            <LuxuryHomesSection />
            <SectionServices />
            <ContactAgentsSection agentsData={agentsData} />
        </div>
    )
}
export default Home