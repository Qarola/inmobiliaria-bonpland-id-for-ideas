import { ContactOptions, ContactForm } from '../';

export const ContactSection = () => {

  return (
    <section className='max-w-[1440px] mx-auto mt-32 px-32'>
      <section className='max-w-[690px]'>
        <h2 className='text-5xl text-blue1 font-bold mb-10'>Mantengamonos en contácto.</h2>
        <p className='text-2xl'>
          Llámenos, envíenos un correo electrónico o siguenos en nuestras redes y nos comunicaremos con usted lo antes posible.
        </p>

      </section>

      <section className='flex items-center gap-10 pt-8'>

        <ContactOptions />

        <ContactForm />

      </section>
    </section>
  )
}