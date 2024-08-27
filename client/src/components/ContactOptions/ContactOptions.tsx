import icons from '../../assets/iconos/icon';
import { SocialMediaIcon } from '../';

const contactOptions = [
  {
    icon: icons.emailIcon,
    title: 'Email',
    paragraph: 'contacto@bi-max.com'
  },
  {
    icon: icons.phoneIcon,
    title: 'Telefono',
    paragraph: '+55 41 9876-5432'
  },
  {
    icon: icons.locationIcon,
    title: 'Oficina',
    paragraph: '1686, Geraldine Lane, New York, NY 10013'
  },
]

const socialNetworks = [
  {
    name: 'facebook',
    link: ''
  },
  {
    name: 'twitter',
    link: ''
  },
  {
    name: 'instagram',
    link: ''
  },
  {
    name: 'linkedin',
    link: ''
  },
]

export const ContactOptions = () => {
  return (
    <div className='flex flex-wrap gap-10'>
      {
        contactOptions.map(contactOption => (
          <article key={contactOption.title} className='max-w-[262px] px-6'>
            <img src={contactOption.icon} alt={contactOption.icon} />
            <h3 className='my-3 text-2xl md:text-3xl text-blue1'>
              {contactOption.title}
            </h3>
            <p className='text-xl font-medium'>
              {contactOption.paragraph}
            </p>
          </article>
        ))
      }
      <article className='max-w-[262px] px-5'>
        <img src={icons.socialIcon} alt={'icono'} />
        <h3 className='mt-3 mb-7 text-2xl md:text-3xl text-blue1'>
          Redes Sociales
        </h3>
        <div className='flex justify-between'>
          {
            socialNetworks.map(socialNetwork => (
              <SocialMediaIcon key={socialNetwork.name} socialNetwork={socialNetwork} />
            ))
          }
        </div>
      </article>
    </div>
  )
}