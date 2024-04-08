import { useForm } from 'react-hook-form';
import { useState } from 'react';
import {Link} from 'react-router-dom'

const RegisterForm = () => {
    const { register, handleSubmit } = useForm()
    const [data, setData] = useState({})

    const enviar = (d) => {
        setData(d)
    }

    return(
        <div className="w-[100%] flex flex-col justify-center items-center p-5">
            <img src="assets/logos/MAX2.png" alt="logo" />
            <div className="flex justify-center items-center gap-4">
                <h1 className="font-bold text-2xl lg:text-3xl">Registrate en</h1>
                <img className="w-[130px] mt-1" src="assets/logos/MAX.png" alt="logo" />
            </div>
            <form className="p-4 flex flex-col justify-center items-center" onSubmit={handleSubmit(enviar)}>
                <div className="w-[100%]">
                    <p className="p-2 font-bold">Mail:</p>
                    <input className="border solid gray p-2 rounded-lg w-[100%]"  placeholder="Correo electronico" type="text" {...register("email")}/>
                </div>
                <div className="w-[100%]">
                    <p className="p-2 font-bold">Usuario:</p>
                    <input className="border solid gray p-2 rounded-lg w-[100%]"  placeholder="Nombre de usuario" type="text" {...register("username")}/>
                </div>
                <div className="w-[100%]">
                    <p className="p-2 font-bold">Contraseña:</p>
                    <input className="border solid gray p-2 rounded-lg w-[100%]"  placeholder="Contraseña" type="password" {...register("password")}/>
                </div>
                <div className="w-[100%]">
                    <p className="p-2 font-bold">Repetir contraseña:</p>
                    <input className="border solid gray p-2 rounded-lg w-[100%]" placeholder="Repetir contraseña" type="password" {...register("password2")}/>
                </div>
                <button className="w-[100%] font-bold p-2 m-2 bg-[#1A3670] text-white rounded-lg " type="submit">Registrarse</button>
                <button className="flex justify-center items-center text-center gap-2 w-[100%] font-bold p-2 m-2 text-[#556987] border solid gray rounded-lg">
                    <img className="w-[30px]" src="assets/iconos/google.png" alt="Google Logo"/>
                    Registrarse con Google
                </button>
            </form>
            <div className="flex justify-center items-center gap-1">
                <p className="text-sm font-bold">Ya tienes una cuenta?</p>
                <Link className="text-sm text-gray-500" to="/login">Ingresar</Link>
            </div>
        </div>
    )
}

export default RegisterForm