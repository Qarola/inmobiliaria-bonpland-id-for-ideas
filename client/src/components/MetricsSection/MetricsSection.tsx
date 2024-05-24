
export const MetricsSection = () => {
  const dataMetrics = [
    {
      number: '400+',
      paragraph: 'Ventas concretadas'
    },
    {
      number: '100%',
      paragraph: 'Confianza con nuestros clientes'
    },
    {
      number: '10k',
      paragraph: 'Inmuebles publicados'
    },
    {
      number: '200+',
      paragraph: 'Reseñas acerca de nosotros'
    },
  ]
  return (
    <section className='flex flex-wrap xl:flex-nowrap  justify-center align-middle gap-20 max-w-[1440px] p-4 xl:p-20 m-auto'>

      <section className='m-auto'>

        <img className='' src='src/assets/images/metricsImage.png' alt='' />

      </section>

      <section className='flex flex-wrap justify-between gap-6 xl:gap-10 max-w-[480px] '>

        <section>
          <p className='mb-6 text-blue3'>
            Conseguimos
            <span className='text-red uppercase'>
              hogares
            </span>
            para nuestros clientes.
          </p>
          <h2 className='mb-4 font-semibold text-5xl'>
            Encontramos tu hogar perfecto.
          </h2>
        </section>

        {
          dataMetrics.map(dataMetric => (
            <article key={dataMetric.paragraph}>
              <p className='mb-4 font-semibold text-6xl text-blue1'>{dataMetric.number}</p>
              <p className='text-lg'>{dataMetric.paragraph}</p>
            </article>
          ))
        }

      </section>

    </section>
  )
}