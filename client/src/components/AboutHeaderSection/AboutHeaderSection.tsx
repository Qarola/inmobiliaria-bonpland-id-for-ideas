export const AboutHeaderSection = () => {
  return (
    <div className='text-2xl text-center'>
      <h1 className='md:mt-2 text-blue3'>Acerca de nosotros</h1>
      <img
        className='mt-12 md:mt-0 m-auto' src='src/assets/logos/logo02.svg'
        alt="Logo"
      />
      <p className='mb-6 text-2xl'>
        Aprende sobre la companía y los que estan atras de ella.
      </p>
      <img className='w-full md:w-[1440px] m-auto'
        src='src/assets/images/aboutHeader.png'
        alt=''
      />
    </div>
  )
}
