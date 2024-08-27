import luxuryHomesImagen from '../../assets/images/luxuryHomesImagen.png'

export const LuxuryHomesSection = () => {
  return (
    <section className='bg-gradient-to-b from-blue1 from-33% to-blue3 to-63%'>
      <div className='flex flex-col md:flex-row items-center max-w-[1440px] m-auto p-4 md:p-20'>

        <section className='w-full md:w-[60%] h-[90%] px-4 py-3 md:px-8 md:py-3 rounded-l-3xl border border-[#DDE1E6] bg-white'>

          <h2 className='relative max-w-[340px] text-[28px] md:text-[35px] font-bold leading-8 md:leading-10 mb-6 md:mb-10'>
            Experimenta el lujo sin limites.

            Descubre las exclusivas propiedades de
            <span className='block md:inline'>
              <img
                className='relative md:static bottom-[-10px] left-0 md:left-[200px] inline h-[50px] md:h-[70px] mt-4 md:mt-0' src='assets/logos/MAX.png'
                alt="Logo"
              />
            </span>
          </h2>

          <p className='w-full md:w-[388px] mb-6 md:mb-8 leading-5'>
            Sumergete en un mundo de lujo y exclusividad. Descubre el hogar de tus sueños hoy mismo y haz realidad tu estilo de vida de ensueño.
          </p>

          <button className='block m-auto px-4 py-3 rounded-2xl bg-blue3 text-white text-lg md:text-xl font-bold'>
            Ver Propiedades
          </button>

        </section>

        <img
          className='w-full md:w-[600px] h-auto md:h-[480px] rounded-3xl border overflow-hidden ml-0 md:ml-4 mt-4 md:mt-0 object-cover'
          src={luxuryHomesImagen}
          alt='imagen de una vivienda de lujo'
        />

      </div>
    </section>
  )
}