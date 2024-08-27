import { AgentCard } from "../";

interface Params {
  agentsData: {
    image: string;
    name: string;
    lastName: string;
    role: string;
    socialNetworks: {
      name: string;
      link: string;
    }[]
  }[]
}

export const ContactAgentsSection = (params: Params) => {
  return (
    <section className='max-w-[1440px] p-4 sm:p-6 md:p-10 xl:p-12 m-auto text-center'>
      <h2 className='text-black text-[35px] font-bold'>Contacta con nuestros agentes</h2>

      <section className='flex flex-wrap justify-center gap-4 py-16'>
        {
          params.agentsData.slice(0, 3).map(agentData => (
            <AgentCard key={agentData.image} agentData={agentData} />
          ))
        }
      </section>

    </section>
  )
}
