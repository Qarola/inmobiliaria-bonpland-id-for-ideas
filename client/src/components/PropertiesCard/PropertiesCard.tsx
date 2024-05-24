import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface Params {
  image: string;
  title: string;
  description: string;
  linkMore: string;
}

export const PropertiesCard = (params: Params) => {
  return (
    <article className='max-w-[308px] pb-7 rounded-3xl border border-[#DDE1E6] text-start overflow-hidden shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>

      <img src={'https://i.imgur.com/4YVydMJ.png'} alt='' className='w-full' />
      <div className='px-4 py-6 text-start'>
        <h3 className='mb-4 text-[20px] font-bold'>{params.title}</h3>
        <p>{params.description}</p>
      </div>

      <Link to={params.linkMore} className='p-4'>
        <span className='mr-4 text-[20px] font-bold'>Más Info</span>
        <ArrowForwardIcon viewBox="0 0 28 28" />
      </Link>

    </article>
  )
}