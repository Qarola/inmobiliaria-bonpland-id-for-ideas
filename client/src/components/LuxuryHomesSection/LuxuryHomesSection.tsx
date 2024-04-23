import luxuryHomesImagen from '../../assets/images/luxuryHomesImagen.png'

export const LuxuryHomesSection = () => {
  return (
    <section className='bg-gradient-to-b from-blue1 from-33%  to-blue3 to-63%'>
      <div className='flex items-center max-w-[1440px] m-auto p-20'>

        <section className='w-[60%] h-[90%] px-8 py-3 rounded-l-3xl border border-[#DDE1E6] bg-white'>

          <h2 className='relative max-w-[340px] text-[35px] font-bold leading-10 mb-10'>
            Experimenta el lujo sin limites.

            Descubre las exclusivas propiedades de
            <span>
              <img
                className=' absolute bottom-[-14px] left-[264px] inline h-[74px]' src='assets/logos/MAX.png'
                alt="Logo"
              />
            </span>
          </h2>

          <p className='w-[388px] mb-8 leading-5'>
            Sumergete en un mundo de lujo y exclusividad. Descubre el hogar de tus sueños hoy mismo y haz realidad tu estilo de vida de ensueño.
          </p>

          <button className='block m-auto px-4 py-3 rounded-2xl bg-blue3 text-white text-xl font-bold'>
            Ver Propiedades
          </button>

        </section>

        <img
          className='w-[600px] h-[480px] rounded-3xl border overflow-hidden'
          src={luxuryHomesImagen}
          alt='imagen de una vivienda d lujo'
        />

      </div>
    </section>
  )
}