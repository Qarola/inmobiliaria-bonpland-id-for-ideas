import { useState } from 'react';

export const ContactForm = () => {

  const [inputValue, setInputValue] = useState(
    {
      email: '',
      message: ''
    }
  )

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('handleSubmit', inputValue);

    setInputValue({
      email: '',
      message: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    const { name, value } = e.target;

    setInputValue({ ...inputValue, [name]: value });

  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-4 w-[800px] p-10 bg-[#E8EDFF] text-blue1 rounded-md border shadow-[0px_1px_2px_rgba(85,105,135,0.10)]'
    >
      <label className=''>
        Email
        <input
          type='text'
          autoComplete='off'
          value={inputValue.email}
          onChange={handleChange}
          name='email'
          placeholder='Ingresa tu email'
          className='w-full h-12 p-2 rounded-lg border shadow-[0px_1px_2px_rgba(0,0,0,0.10)]'
        />
      </label>
      <label>
        Mensaje
        <textarea
          value={inputValue.message}
          onChange={handleChange}
          name='message'
          placeholder='Ingresa tu mensaje...'
          className='w-full h-[220px] p-2 rounded-lg border shadow-[0px_1px_2px_rgba(0,0,0,0.10)]'
        />
      </label>

      <button
        type='submit'
        className=' h-14 bg-blue1 font-bold text-white p-2 rounded-lg border shadow-[0px_1px_2px_rgba(105,81,255,0.05)]'
      >
        Enviar
      </button>
    </form>
  )
}