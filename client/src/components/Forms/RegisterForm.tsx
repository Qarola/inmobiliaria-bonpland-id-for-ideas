import { useForm } from 'react-hook-form';
import { useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import PasswordChecker from '../../hooks/PasswordChecker.ts'
import {Navigate} from 'react-router-dom';


const RegisterForm = () => {
    const { register, handleSubmit } = useForm()
    const [pass2, setPass2] = useState()
    const [result, setResult] = useState()
    const [error, setError] = useState()
    const [created, setCreated] = useState(false)

    const enviar: SubmitHandler<FieldValues> = (d) => {
        const data = { ...d, role: 'user', id: d.email };
        const r = PasswordChecker(data.password, pass2);
        setResult(r)

        if (r === 'Ok') {
            axios.post('https://inmobiliaria-bonpland-id-for-ideas.onrender.com/users/register', data)
            .then(response => {
                setCreated(true)
                sessionStorage.setItem('user', JSON.stringify({email: data.email, name: data.name, role: data.role}))
            })
            .catch(error => {
                setError(error.response.data.message);
            });
        }
    };

    return(
        <div className="w-[100%] flex flex-col justify-center items-center p-5 relative">
            {created &&
                <Navigate to="/" replace={true} />
            }
            <div className="flex flex-col gap-2 absolute top-[10px] right-[10px] lg:top-60 lg:right-[-260px]">
            { result === 'Error1' &&
                <div className=" bg-white rounded-lg border-2 border-red p-2">
                    <p>Las contraseñas no coinciden</p>
                </div>
            }
            { result === 'Error2' &&
                <div className="bg-white rounded-lg border-2 border-red p-2">
                    <p>La contraseña debe tener entre 8 y 12 caracteres</p>
                </div>
            }
            { error &&
                <div className="bg-white rounded-lg border-2 border-red p-2">
                    <p>{error}</p>
                </div>
            }
            </div>
            <img src="assets/logos/MAX2.png" alt="logo" />
            <div className="flex justify-center items-center gap-4">
                <h1 className="font-bold text-2xl lg:text-3xl">Registrate en</h1>
                <img className="w-[130px] mt-1" src="assets/logos/MAX.png" alt="logo" />
            </div>
            <form className="w-[100%] sm:w-[70%] lg:w-[60%] p-4 flex flex-col justify-center items-center" onSubmit={handleSubmit(enviar)}>
                <div className="w-[100%]">
                    <p className="p-2 font-bold">Mail:</p>
                    <input className="border solid gray p-2 rounded-lg w-[100%]"  placeholder="Correo electronico" type="text" {...register("email")}/>
                </div>
                <div className="w-[100%]">
                    <p className="p-2 font-bold">Usuario:</p>
                    <input className="border solid gray p-2 rounded-lg w-[100%]"  placeholder="Nombre de usuario" type="text" {...register("name")}/>
                </div>
                <div className="w-[100%]">
                    <p className="p-2 font-bold">Contraseña:</p>
                    <input className="border solid gray p-2 rounded-lg w-[100%]"  placeholder="Contraseña" type="password" {...register("password")}/>
                </div>
                <div className="w-[100%]">
                    <p className="p-2 font-bold">Repetir contraseña:</p>
                    <input className="border solid gray p-2 rounded-lg w-[100%]"  placeholder="Contraseña" type="password" onChange={(e)=>setPass2(e.target.value)}/>
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