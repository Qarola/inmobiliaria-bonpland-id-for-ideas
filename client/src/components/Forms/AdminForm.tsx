import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from "react";
import axios from 'axios';
import PasswordChecker from '../../hooks/PasswordChecker.ts';

// Define una interfaz para los datos del formulario
interface FormValues {
    name: string;
    email: string;
    password: string;
    role: string; // Agregar la propiedad role
}

const AdminForm = () => {
    const { register, handleSubmit } = useForm<FormValues>(); // Usar la interfaz FormValues
    const [pass2, setPass2] = useState('');
    const [error, setError] = useState('');
    const [created, setCreated] = useState(false);
    const [, setResult] = useState('');

    const enviar: SubmitHandler<FormValues> = async (data) => {
        const formData: FormValues = { ...data, role: 'admin' }; // Agregar role a los datos
        const validationMessage: string = PasswordChecker(formData.password, pass2);
        setResult(validationMessage);

        if (validationMessage === 'Ok') {
            try {
                await axios.post(
                    'https://inmobiliaria-bonpland-id-for-ideas.onrender.com/users/admin/register', 
                    formData, 
                    {
                        withCredentials: true // Asegura que las cookies se envíen con la solicitud
                    }
                );
                setCreated(true);
                setError('');
            } catch (error: any) {
                setError(error.response?.data?.message || "Ocurrió un error");
            }
        } else {
            setError(validationMessage);
        }
    };

    return (
        <div className="w-[100%] flex flex-col justify-center items-center relative">
            {/* Mensajes de error */}
            <div className="flex flex-col gap-2 absolute top-[10px] right-[10px] lg:top-60 lg:left-[700px] lg:right-[-370px]">
                {created && (
                    <div className=" bg-white rounded-lg border-2 border-red p-2">
                        <p>Administrador registrado.</p>
                    </div>
                )}
                { error === 'Error1' && (
                    <div className=" bg-white rounded-lg border-2 border-red p-2">
                        <p>Las contraseñas no coinciden.</p>
                    </div>
                )}
                { error === 'Error2' && (
                    <div className="bg-white rounded-lg border-2 border-red p-2">
                        <p>La contraseña debe tener entre 8 y 12 caracteres.</p>
                    </div>
                )}
            </div>
            <div className="flex gap-4">
                <h1 className="font-bold text-xl lg:text-xl">Registrar nuevo administrador</h1>
            </div>
            <form className="w-[100%] lg:w-[50%] p-4 flex flex-col justify-center items-center" onSubmit={handleSubmit(enviar)}>
                {/* Formulario */}
                <div className="w-[100%]">
                    <p className="p-2 font-bold">Usuario:</p>
                    <input className="border solid gray p-2 rounded-lg w-[100%]"  placeholder="Nombre de usuario" type="text" {...register("name")} />
                </div>
                <div className="w-[100%]">
                    <p className="p-2 font-bold">Mail:</p>
                    <input className="border solid gray p-2 rounded-lg w-[100%]"  placeholder="Correo electronico" type="text" {...register("email")} />
                </div>
                <div className="w-[100%]">
                    <p className="p-2 font-bold">Contraseña:</p>
                    <input className="border solid gray p-2 rounded-lg w-[100%]"  placeholder="Contraseña" type="password" {...register("password")} />
                </div>
                <div className="w-[100%]">
                    <p className="p-2 font-bold">Repetir contraseña:</p>
                    <input className="border solid gray p-2 rounded-lg w-[100%]"  placeholder="Contraseña" type="password" onChange={(e)=>setPass2(e.target.value)} />
                </div>
                <button className="w-[100%] font-bold text-xl p-2 m-2 bg-[#1A3670] text-white rounded-lg " type="submit">Registrar</button>
            </form>
        </div>
    );
}

export default AdminForm;
