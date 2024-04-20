import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const [token, setToken] = useState<string | null>(null);


  //El parámetro d en la función enviar no tiene un tipo de dato especificado, por lo que TypeScript lo asume como any.
  const enviar: SubmitHandler<FieldValues> = (data) => {
    //El tipo de parámetro en la función enviar debe coincidir con el tipo esperado por handleSubmit: FieldValues es el tipo genérico utilizado por react-hook-form
    console.log('Datos del formulario:', data);

    const user = { ...data, role: "admin" };

    axios
    .post(
      "https://inmobiliaria-bonpland-id-for-ideas.onrender.com/users/login",
      user,
      {
        headers: {
            
          Authorization: `Bearer ${token}`,
          
        },
      }
    )
    .then((response) => {
      console.log(response.data);
      // Almacena el token en el almacenamiento local del navegador
      console.log('this is token:', token)

      localStorage.setItem('token', response.data.token);
      console.log("Token set:", token);
      setToken(response.data.token);
      // eslint-disable-next-line no-debugger
       debugger; // Pauses the execution of the code here

    })
    .catch((error) => {
      console.log(error.response.data.message);
    });
};

return (
    <div className="w-[100%] flex flex-col justify-center items-center p-5">
      <img src="assets/logos/MAX2.png" alt="logo" />
      <div className="flex justify-center items-center gap-4">
        <h1 className="font-bold text-2xl lg:text-3xl">Ingresa a</h1>
        <img className="w-[130px] mt-1" src="assets/logos/MAX.png" alt="logo" />
      </div>
      <form
        className="w-[100%] sm:w-[70%] lg:w-[60%] p-4 flex flex-col justify-center items-center"
        onSubmit={handleSubmit(enviar)}
      >
        <div className="w-[100%]">
          <p className="p-2 font-bold">Mail:</p>
          <input
            className="border solid gray p-2 rounded-lg w-[100%]"
            placeholder="Correo electronico"
            type="text"
            {...register("email")}
          />
        </div>
        <div className="w-[100%]">
          <p className="p-2 font-bold">Contraseña:</p>
          <input
            className="border solid gray p-2 rounded-lg w-[100%]"
            placeholder="Contraseña"
            type="password"
            {...register("password")}
          />
        </div>
        <div className="w-[100%]">
          <p className="p-2 font-bold">Rol:</p>
          <select {...register("role")}>
            <option value="admin">Administrador</option>
            <option value="user">Usuario</option>
          </select>
        </div>
        <div className="flex justify-between items-center w-[100%] mb-5 mt-4">
          <div className="flex justify-start items-center gap-1">
            <input type="checkbox" />
            <p className="text-sm font-bold">recordarme</p>
          </div>
          <Link className="text-sm text-gray-500" to="/">
            Olvidaste tu contraseña?
          </Link>
        </div>
        <button
          className="w-[100%] font-bold text-xl p-2 m-2 bg-[#1A3670] text-white rounded-lg "
          type="submit"
        >
          Ingresar
        </button>
        <button className="flex justify-center items-center text-center gap-2 w-[100%] font-bold p-2 m-2 text-[#556987] border solid gray rounded-lg">
          <img
            className="w-[30px]"
            src="assets/iconos/google.png"
            alt="Google Logo"
          />
          Ingresar con Google
        </button>
      </form>
    </div>
  );
};

export default LoginForm;