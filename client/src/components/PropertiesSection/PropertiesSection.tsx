import { PropertiesCard } from "../PropertiesCard/PropertiesCard";

interface Params {
  properties: {
    image: string;
    title: string;
    description: string;
    linkMore: string;
  }[]
}

export const PropertiesSection = (params: Params) => {
  return (
    <section className='max-w-[1440px] p-4 sm:p-8 md:p-12 xl:p-20 m-auto text-center'>
      <p className='text-blue2 text-2xl font-bold'>Novedades</p>
      <h2 className='text-black text-[35px] font-bold'>NUESTROS INMUEBLES DESTACADOS</h2>

      <section className='flex flex-wrap justify-center gap-4 py-16'>
        {
          params.properties.slice(0, 3).map(property => (
            <PropertiesCard
              key={property.linkMore}
              image={property.image}
              title={property.title}
              description={property.description}
              linkMore={property.linkMore}
            />
          ))
        }

      </section>

      <button className='px-8 py-4 rounded-2xl bg-blue2 text-white'>Ver más</button>

    </section>
  )
}
