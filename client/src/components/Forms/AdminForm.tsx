import { useForm } from 'react-hook-form';
import { useState } from 'react';
import {Link} from 'react-router-dom'

const AdminForm = () => {
    const { register, handleSubmit } = useForm()
    const [data, setData] = useState({})

    const enviar = (d) => {
        const user = {...d, role: 'admin'}
        setData(user)
    }

    return(
        <div className="w-[100%] flex flex-col justify-center items-center">
            <img src="assets/logos/MAX2.png" alt="logo" />
            <div className="flex justify-center items-center gap-4">
                <h1 className="font-bold text-xl lg:text-3xl">Nuevo admin en</h1>
                <img className="w-[130px] mt-1" src="assets/logos/MAX.png" alt="logo" />
            </div>
            <form className="w-[100%] lg:w-[50%] p-4 flex flex-col justify-center items-center" onSubmit={handleSubmit(enviar)}>
                <div className="w-[100%]">
                    <p className="p-2 font-bold">Usuario:</p>
                    <input className="border solid gray p-2 rounded-lg w-[100%]"  placeholder="Nombre de usuario" type="text" {...register("username")}/>
                </div>
                <div className="w-[100%]">
                    <p className="p-2 font-bold">Mail:</p>
                    <input className="border solid gray p-2 rounded-lg w-[100%]"  placeholder="Correo electronico" type="text" {...register("email")}/>
                </div>
                <div className="w-[100%]">
                    <p className="p-2 font-bold">Contraseña:</p>
                    <input className="border solid gray p-2 rounded-lg w-[100%]"  placeholder="Contraseña" type="password" {...register("password")}/>
                </div>
                <button className="w-[100%] font-bold text-xl p-2 m-2 bg-[#1A3670] text-white rounded-lg " type="submit">Ingresar</button>
            </form>
        </div>
    )
}

export default AdminForm