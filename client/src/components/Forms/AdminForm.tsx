import { useForm } from 'react-hook-form';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import PasswordChecker from '../../hooks/PasswordChecker.ts'

const AdminForm = () => {
    const { register, handleSubmit } = useForm()
    const [pass2, setPass2] = useState()

    const enviar: SubmitHandler<FieldValues> = (d) => {
        const data = { ...d, role: 'admin', id: d.email };
        const r = PasswordChecker(data.password, pass2);

        if (r === 'Ok') {
            axios.post('https://inmobiliaria-bonpland-id-for-ideas.onrender.com/users/register', data)
            .then(response => {
                console.log('usuario registrado', response.data);
                axios.get('https://inmobiliaria-bonpland-id-for-ideas.onrender.com/users')
                .then(response=>{
                    console.log(response.data.data)
                })
            })
            .catch(error => {
                console.log(error.response);
            });
        }
        else{
            console.log("error en la contraseña")
        }
    };

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
                <div className="w-[100%]">
                    <p className="p-2 font-bold">Repetir contraseña:</p>
                    <input className="border solid gray p-2 rounded-lg w-[100%]"  placeholder="Contraseña" type="password" onChange={(e)=>setPass2(e.target.value)}/>
                </div>
                <button className="w-[100%] font-bold text-xl p-2 m-2 bg-[#1A3670] text-white rounded-lg " type="submit">Ingresar</button>
            </form>
        </div>
    )
}

export default AdminForm