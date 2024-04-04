import { Link } from 'react-router-dom';
import { SocialNetworks } from '../../types';
import { SocialMediaComponent } from '../SocialMediaComponent/SocialMediaComponent';

const listOptions: {
  name: string;
  link: string;
}[] = [
    {
      name: 'Inicio',
      link: '',
    },
    {
      name: 'Comprar',
      link: '',
    },
    {
      name: 'Vender',
      link: '',
    },
    {
      name: 'Acerca de',
      link: '',
    },
    {
      name: 'Contacto',
      link: '',
    },
    {
      name: 'Ingresar',
      link: '',
    },
  ];

interface Params {
  socialNetworks: SocialNetworks[]
}

export const Footer = (params: Params) => {

  return (
    <section className='bottom-0 w-full text-center py-12 text-white bg-[#1A3670]'>

      <article className='p-3 mb-1'>
        {
          listOptions.map((listOption) => (
            <Link
              className='font-medium m-3 p-1'
              to={listOption.link}
              key={listOption.name}
            >
              {listOption.name}
            </Link>
          ))
        }
      </article>

      <SocialMediaComponent
        className='flex justify-center gap-4 py-3'
        socialNetworks={params.socialNetworks}
        iconColor={{ colorOption: 'light' }} />

      <p className='mt-9 text-sm'>BI/MAX @ 2024. Todos los derechos reservados.</p>
    </section>
  )
}