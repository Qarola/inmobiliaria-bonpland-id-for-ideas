import {PropertyContext} from '../../context/PropertyContext'
import {useState, useContext} from 'react'

const PropertyContact = () =>{
    const {currentIndex, prevIndex, nextIndex, temporalProperty, create_tempProperty} =  useContext(PropertyContext)
    const [contact, setContact] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [phone1, setPhone1] = useState<string>('')
    const [phone2, setPhone2] = useState<string>('')
    const [info, setInfo] = useState<string>('')
    const [web, setWeb] = useState<string>('')
    const [code1, setCode1] = useState<string>('')
    const [code2, setCode2] = useState<string>('')

    const back = () => {
        prevIndex(currentIndex)
    }

    const changeInput = (value, setValue) => {
        setValue(value)
    }

    const next = () => {
        if(contact && email && phone1 && code1){
            create_tempProperty({
                ...temporalProperty,
                sellerContact:{
                    contact: contact,
                    other_info: info || '',
                    webpage: web || '',
                    area_code: code1,
                    phone: phone1,
                    area_code2: code2 || '',
                    phone2: phone2 || '',
                    email: email
                }
            })
            nextIndex(currentIndex)
        }
    }

    return(
        <div className="w-[100%] flex flex-col flex-wrap p-10 gap-10">
            <h1 className="text-3xl lg:text-5xl">Informacion del propietario</h1>
            <div className="w-[100%] flex flex-col gap-5">
                <div className="flex gap-5">
                    <div className="w-[100%]">
                        <p className="font-bold">Contacto *</p>
                        <input className="border solid gray p-2 rounded-lg w-[100%]" onChange={(e)=>changeInput(e.target.value, setContact)} type="text"/>
                    </div>
                    <div className="w-[100%]">
                        <p className="font-bold">Email *</p>
                        <input className="border solid gray p-2 rounded-lg w-[100%]" onChange={(e)=>changeInput(e.target.value, setEmail)} type="text"/>
                    </div>
                </div>
                <hr/>
                <div className="flex gap-5">
                    <div className="w-[100%]">
                        <p className="font-bold">1Er Telefono *</p>
                        <input className="border solid gray p-2 rounded-lg w-[100%]" onChange={(e)=>changeInput(e.target.value, setPhone1)} type="text"/>
                    </div>
                    <div className="w-[100%]">
                        <p className="font-bold">2Do Telefono</p>
                        <input className="border solid gray p-2 rounded-lg w-[100%]" onChange={(e)=>changeInput(e.target.value, setPhone2)} type="text"/>
                    </div>
                </div>
                <hr/>
                <div className="flex gap-5">
                    <div className="w-[100%]">
                        <p className="font-bold">Informacion extra</p>
                        <input className="border solid gray p-2 rounded-lg w-[100%]" onChange={(e)=>changeInput(e.target.value, setInfo)} type="text"/>
                    </div>
                    <div className="w-[100%]">
                        <p className="font-bold">Sitio Web</p>
                        <input className="border solid gray p-2 rounded-lg w-[100%]" onChange={(e)=>changeInput(e.target.value, setWeb)} type="text"/>
                    </div>
                </div>
                <hr/>
                <div className="flex gap-5">
                    <div className="w-[100%]">
                        <p className="font-bold">1Er Codigo postal *</p>
                        <input className="border solid gray p-2 rounded-lg w-[100%]" onChange={(e)=>changeInput(e.target.value, setCode1)} type="text"/>
                    </div>
                    <div className="w-[100%]">
                        <p className="font-bold">2Do Codigo postal</p>
                        <input className="border solid gray p-2 rounded-lg w-[100%]" onChange={(e)=>changeInput(e.target.value, setCode2)} type="text"/>
                    </div>
                </div>
            </div>

            <div className="w-[100%] flex gap-5">
                <button className="p-2 ps-8 pe-8 rounded-lg bg-gray-500 text-white text-lg font-bold" onClick={()=>back()}>Volver</button>
                <button className="p-2 ps-8 pe-8 rounded-lg bg-blue2 text-white text-lg font-bold" onClick={()=>next()}>Siguiente</button>
            </div>
        </div>
    )
}

export default PropertyContact