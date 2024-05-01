import { useForm } from 'react-hook-form';
import { useState } from "react";
import axios from 'axios';
import PasswordChecker from '../../hooks/PasswordChecker.ts'

const AdminForm = () => {
    const { register, handleSubmit } = useForm()
    const [pass2, setPass2] = useState('')
    const [error, setError] = useState('')
    const [created, setCreated] = useState(false)
    const [result, setResult] = useState('')

    const enviar: SubmitHandler<FieldValues> = (d: object) => {
        const data: object = { ...d, role: 'admin', id: d.email };
        const r: string = PasswordChecker(data.password, pass2);
        setResult(r)

        axios.get('https://inmobiliaria-bonpland-id-for-ideas.onrender.com/users/register')
        .then(response => {
            console.log(response.data.data)
        })
        .catch(error=>{
            console.log(error)
        })

        if (r === 'Ok') {
            axios.post('https://inmobiliaria-bonpland-id-for-ideas.onrender.com/users/register', data)
            .then(response => {
                setCreated(true)
            })
            .catch(error => {
                setError(error.response.data.message);
            });
        }
    };

    return(
        <div className="w-[100%] flex flex-col justify-center items-center relative">

            <div className="flex flex-col gap-2 absolute top-[10px] right-[10px] lg:top-60 lg:left-[700px] lg:right-[-370px]">
            {created &&
                <div className=" bg-white rounded-lg border-2 border-red p-2">
                    <p>Administrador registrado.</p>
                </div>
            }
            { error === 'Error1' &&
                <div className=" bg-white rounded-lg border-2 border-red p-2">
                    <p>Las contraseñas no coinciden.</p>
                </div>
            }
            { error === 'Error2' &&
                <div className="bg-white rounded-lg border-2 border-red p-2">
                    <p>La contraseña debe tener entre 8 y 12 caracteres.</p>
                </div>
            }
            </div>
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
                <button className="w-[100%] font-bold text-xl p-2 m-2 bg-[#1A3670] text-white rounded-lg " type="submit">Registrar</button>
            </form>
        </div>
    )
}

export default AdminForm