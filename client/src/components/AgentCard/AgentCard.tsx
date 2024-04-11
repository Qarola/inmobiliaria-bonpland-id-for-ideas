import { SocialMediaIcon } from '../';

interface Params {
  agentData: {
    image: string;
    name: string;
    lastName: string;
    role: string;
    socialNetworks: {
      name: string;
      link: string;
    }[];
  }
}

export const AgentCard = ({ agentData }: Params) => {
  return (
    <article className='max-w-[308px] rounded-3xl border border-[#DDE1E6] text-center overflow-hidden shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>

      <img src={agentData.image} alt='' className='w-full' />

      <div className='p-4'>

        <h3 className='text-black text-[20px] font-bold'>{agentData.name} {agentData.lastName}</h3>
        <p className='text-greyDark'>{agentData.role}</p>

      </div>

      <article className='flex justify-center gap-4'>
        {
          agentData.socialNetworks.map(socialNetwork => (
            <SocialMediaIcon socialNetwork={socialNetwork} />
          ))
        }
      </article>

      <button className='p-4 mt-4 rounded-2xl bg-blue2 text-white'>Contacta con {agentData.name}
      </button>

    </article>
  )
}