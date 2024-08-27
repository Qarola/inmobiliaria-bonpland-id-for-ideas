import { ContactOptions, ContactForm } from '../';

export const ContactSection = () => {

  return (
    <section className='max-w-[1440px] mx-auto px-8 py-24 md:mt-2'>
      <section className='max-w-[690px]'>
        <h2 className='text-3xl md:text-5xl text-blue1 font-bold mb-10'>Mantengámonos en contacto.</h2>
        <p className='text-2xl'>
          Llámenos, envíenos un correo electrónico o síguenos en nuestras redes sociales y nos comunicaremos con usted lo antes posible.
        </p>

      </section>

      <section className='flex flex-col md:flex-row items-center gap-10 pt-8'>
        <ContactOptions />
        <div className='w-full md:w-auto'>
          <ContactForm />
        </div>
      </section>
    </section>
  )
}