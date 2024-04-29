import AdminForm from '../Forms/AdminForm';
import CheckIcon from '@mui/icons-material/Check';
import PropertyForm from '../Forms/PropertyForm';
import {useState} from 'react'

const Profile = ({user}) =>{
    const {name, createdAt}: object = user
    const [option, setOption] = useState(true)

    return(
        <div className="flex flex-col gap-4 justify-center items-center gap-10">
            <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center lg:justify-start lg:items-start w-[50%] lg:w-[90%] bg-blue-100 rounded-3xl p-5 gap-10">
                <div className="flex flex-col justify-center items-center lg:w-[25%] bg-[#FFFFFF] rounded-lg shadow-lg p-5 pt-10 pb-10 gap-5">
                    <div className="flex flex-col justify-center items-center gap-4">
                        <img src="assets/images/Vector.png" alt="perfil"/>
                        <p className="text-sm text-[#9A9A9A]">Sube una foto</p>
                    </div>
                    <div className="flex flex-col justify-start items-start p-2 gap-4">
                        <h1 className="text-2xl font-bold uppercase">Cuenta verificada</h1>
                        <p className="text-sm text-[#9A9A9A]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                    <div>
                        <div className="flex gap-2 text-[#9A9A9A]">
                            <CheckIcon/>
                            <p>Email confirmado</p>
                        </div>
                        <div className="flex gap-2 text-[#9A9A9A]">
                            <CheckIcon/>
                            <p>Telefono confirmado</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-3xl font-bold">Hola, {name}</p>
                    <p className="text-md text-[#9A9A9A] w-[60%]" >Miembro desde {createdAt.slice(0, 4)}</p>
                    <button className="btn bg-blue2 text-white p-2 rounded-lg">Editar perfil</button>
                    <p>Propiedades favoritas</p>
                    <p>Aun no tienes</p>
                </div>
            </div>

            {user.role === 'admin' &&
                <div className="flex flex-col justify-center items-center w-[100%] gap-5">
                    <div className="flex gap-5">
                        <h1 className="underline font-bold uppercase cursor-pointer" onClick={()=>setOption(true)}>Admin</h1>
                        <h1 className="underline font-bold uppercase cursor-pointer" onClick={()=>setOption(false)}>Propiedad</h1>
                    </div>
                    {option ?
                    <AdminForm/>
                    :
                    <PropertyForm/>
                    }
                </div>
            }
        </div>
    )
}

export default Profile