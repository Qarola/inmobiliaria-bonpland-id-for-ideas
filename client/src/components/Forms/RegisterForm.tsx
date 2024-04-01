import { useForm } from 'react-hook-form';
import { useState } from 'react';

const RegisterForm = () => {
    const { register, handleSubmit } = useForm()
    const [data, setData] = useState({})

    const enviar = (d) => {
        setData(d)
    }

    return(
        <div className="w-[100%] flex flex-col justify-center">
            <form className="w-[50%]" onSubmit={handleSubmit(enviar)}>
                <h1 className="">Registro</h1>
                <div className="">
                    <p className="">Nombre:</p>
                    <input className="" type="text" placeholder="ingresar nombre" {...register("nombre")} />
                </div>
                <div className="">
                    <p className="">Email:</p>
                    <input className="" type="text" placeholder="ingresar e-mail" {...register("email")} />
                </div>
                <div className="">
                    <p className="">Contraseña:</p>
                    <input type="password" placeholder="ingresar contraseña" {...register("contraseña1")} />
                </div>
                <div className="">
                    <p className="">Repetir contraseña:</p>
                    <input type="" placeholder="repetir contraseña" {...register("contraseña2")} />
                </div>
                <button className="form__button" type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default RegisterForm