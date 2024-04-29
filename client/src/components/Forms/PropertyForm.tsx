import { useForm } from 'react-hook-form';
import { useState } from "react";
import axios from 'axios';
import PasswordChecker from '../../hooks/PasswordChecker.ts'

const AdminForm = () => {
    const { register, handleSubmit } = useForm()

    const enviar: SubmitHandler<FieldValues> = (d) => {

    };

    return(
        <div className="w-[100%] flex flex-col justify-center items-center relative">
            <div className="flex gap-4">
                <h1 className="font-bold text-xl lg:text-xl">Crear nueva publicacion</h1>
            </div>
            <form className="w-[100%] lg:w-[50%] p-4 flex flex-col justify-center items-center" onSubmit={handleSubmit(enviar)}>
                <div className="w-[100%]">
                    <p className="p-2 font-bold">Titulo:</p>
                    <input className="border solid gray p-2 rounded-lg w-[100%]"  placeholder="Nombre de usuario" type="text" {...register("titlePost")}/>
                </div>
                <div className="w-[100%]">
                    <p className="p-2 font-bold">Direccion:</p>
                    <input className="border solid gray p-2 rounded-lg w-[100%]"  placeholder="Correo electronico" type="text" {...register("address")}/>
                </div>
                <div className="w-[100%]">
                    <p className="p-2 font-bold">Estado:</p>
                    <input className="border solid gray p-2 rounded-lg w-[100%]"  placeholder="Contraseña" type="password" {...register("state")}/>
                </div>
                <div className="w-[100%]">
                    <p className="p-2 font-bold">Ciudad:</p>
                    <input className="border solid gray p-2 rounded-lg w-[100%]"  placeholder="Contraseña" type="password" {...register("city")}/>
                </div>
                <div className="w-[100%]">
                    <p className="p-2 font-bold">Pais:</p>
                    <input className="border solid gray p-2 rounded-lg w-[100%]"  placeholder="Contraseña" type="password" {...register("country")}/>
                </div>
                <div className="w-[100%]">
                    <p className="p-2 font-bold">Precio:</p>
                    <input className="border solid gray p-2 rounded-lg w-[100%]"  placeholder="Contraseña" type="password" {...register("price")}/>
                </div>
                <button className="w-[100%] font-bold text-xl p-2 m-2 bg-[#1A3670] text-white rounded-lg " type="submit">Crear</button>
            </form>
        </div>
    )
}

export default AdminForm