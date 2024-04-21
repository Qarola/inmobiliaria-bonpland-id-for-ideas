import { useForm } from 'react-hook-form';
import { useState } from 'react';
import {Link} from 'react-router-dom';

const AdminForm = () => {
    const { register, handleSubmit } = useForm()
    const [data, setData] = useState({})

    const enviar: SubmitHandler<FieldValues> = (d) => {
        const user = {...d, role: 'admin', id: d.email}
        setData(user)
    }

    return(
        <div className="w-[100%] flex flex-col justify-center items-center">
            <div className="flex gap-4">
                <h1 className="font-bold text-xl lg:text-xl">Registrar nuevo administrador</h1>
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