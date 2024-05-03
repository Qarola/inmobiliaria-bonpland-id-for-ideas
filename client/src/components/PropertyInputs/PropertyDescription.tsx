import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { useState, useContext } from "react";
import {PropertyContext} from '../../context/PropertyContext'


const PropertyDescription = () =>{
    const {temporalProperty, create_tempProperty, currentIndex, nextIndex, prevIndex} = useContext(PropertyContext)
    const { register, handleSubmit } = useForm()

    const enviar: SubmitHandler<FieldValues> = (data: object) => {
        const {address, city, country, state, titlePost}: object = data
        if(address && city && country && state && titlePost){
            create_tempProperty({...temporalProperty, address: address, city: city, country: country, state: state, titlePost: titlePost})
            nextIndex(currentIndex)
        }
    }

    const back = () => {
        prevIndex(currentIndex)
    }

    return(
        <div className="w-[100%] flex flex-col justify-center items-center gap-5 m-5">
            <h1 className="text-3xl lg:text-5xl">Describe la propiedad</h1>
            <form
            className="w-[100%] sm:w-[70%] lg:w-[60%] p-4 flex flex-col justify-center items-center gap-5"
            onSubmit={handleSubmit(enviar)}
             >
                <div className="w-[100%] flex">
                    <p className="p-2 font-bold">Titulo:</p>
                    <input className="border solid gray p-2 rounded-lg w-[100%]"  placeholder="Titulo" type="text" {...register("titlePost")}/>
                </div>
                <div className="w-[100%] flex">
                    <p className="p-2 font-bold">Direccion:</p>
                    <input className="border solid gray p-2 rounded-lg w-[100%]"  placeholder="Direccion" type="text" {...register("address")}/>
                </div>
                <div className="w-[100%] flex">
                    <p className="p-2 font-bold">Ciudad:</p>
                    <input className="border solid gray p-2 rounded-lg w-[100%]"  placeholder="Ciudad" type="text" {...register("city")}/>
                </div>
                <div className="w-[100%] flex">
                    <p className="p-2 font-bold">Estado:</p>
                    <input className="border solid gray p-2 rounded-lg w-[100%]"  placeholder="Estado" type="text" {...register("state")}/>
                </div>
                <div className="w-[100%] flex">
                    <p className="p-2 font-bold">Pais:</p>
                    <input className="border solid gray p-2 rounded-lg w-[100%]"  placeholder="Pais" type="text" {...register("country")}/>
                </div>
                <div className="w-[100%] flex gap-5">
                    <button className="p-2 ps-8 pe-8 rounded-lg bg-gray-500 text-white text-lg font-bold" onClick={()=>back()}>Volver</button>
                    <button className="p-2 ps-8 pe-8 rounded-lg bg-blue2 text-white text-lg font-bold" type="submit">Siguiente</button>
                </div>
            </form>
        </div>
    )
}

export default PropertyDescription