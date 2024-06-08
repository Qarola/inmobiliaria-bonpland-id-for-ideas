import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { useState, useContext } from "react";
import { UserContext } from '../../context/UserContext';
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { GetUser } from '../../hooks/GetUser';

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
    const { register, handleSubmit } = useForm();
    const [token, setToken] = useState<string | null>(null);
    const [result, setResult] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const { log_user } = useContext(UserContext);

    const userHasAdminPermissions = () => {
        return true; // Aquí puedes implementar la lógica real para verificar los permisos del usuario administrador
    };

    const enviar: SubmitHandler<FieldValues> = (data) => {
        if (data.role === "admin") {
            if (!userHasAdminPermissions()) {
                setError(
                    "No tienes permisos para iniciar sesión como administrador"
                );
                return;
            }
        }

        axios.get('https://inmobiliaria-bonpland-id-for-ideas.onrender.com/users')
            .then(response => {
                const base: any[] = response.data.data;
                axios.post(
                    "https://inmobiliaria-bonpland-id-for-ideas.onrender.com/users/login",
                    data,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                )
                    .then((response) => {
                        const token: string = response.data.token;
                        const userData = GetUser(data.email, base);
                        if (userData !== 'error') {
                            log_user(userData);
                            setResult(true);
                        }
                        localStorage.setItem("token", token);
                        setToken(token);
                    })
                    .catch((error) => {
                        setError(error.response.data.message);
                    });
            })
            .catch(error => {
                console.error('Error al obtener los usuarios:', error);
            });
    };

    return (
        <div className="w-[100%] flex flex-col justify-center items-center p-5 relative">
            {result && (
                <Navigate to="/" replace={true} />
            )}
            <div className="flex flex-col gap-2 absolute top-[10px] right-[10px] lg:top-60 lg:left-[700px] lg:right-[-370px]">
                {error &&
                    <div className="bg-white rounded-lg border-2 border-red p-2">
                        <p>{error}</p>
                    </div>
                }
            </div>
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
                <div className="w-[100%] flex pt-2">
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
