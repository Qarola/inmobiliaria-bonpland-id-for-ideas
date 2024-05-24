import { useState, useContext } from "react";
import {PropertyContext} from '../../context/PropertyContext'

const PropertyType = () =>{
    const [choose, setChoose] = useState<string>(null)
    const {currentIndex, nextIndex, temporalProperty, create_tempProperty} = useContext(PropertyContext)

    const handleChoose = (d: string) =>{
        if(choose === d){
            setChoose(null)
        }
        else{
            setChoose(d)
        }
    }

    const handleNext = () =>{
        create_tempProperty({...temporalProperty, propertyType: choose})
        nextIndex(currentIndex)
    }

    return(
        <div className="w-[100%] flex flex-col justify-start items-start p-5 gap-10 m-10 lg:m-5">
            <h1 className="text-3xl lg:text-5xl">¿Que tipo de propiedad deseas publicar?</h1>
            <div className="w-[100%] flex flex-wrap justify-center items-start gap-5">
                <div
                    className={`flex justify-start items-center gap-4 cursor-pointer rounded-lg w-[270px] ${choose === 'Casa' ? 'bg-blue2 text-white' : 'bg-[#D7DCF1]'}`}
                    onClick={()=>handleChoose('Casa')}
                 >

                    <img src="assets/images/propertyForm/Casa.png" alt="casa"/>
                    <p className="font-bold">Casa</p>
                </div>
                <div
                    className={`flex justify-start items-center gap-4 cursor-pointer rounded-lg w-[270px] ${choose === 'Departamento' ? 'bg-blue2 text-white' : 'bg-[#D7DCF1]'}`}
                    onClick={()=>handleChoose('Departamento')}
                 >
                    <img src="assets/images/propertyForm/Departamento.png" alt="casa"/>
                    <p className="font-bold">Departamento</p>
                </div>
                <div
                    className={`flex justify-start items-center gap-4 cursor-pointer rounded-lg w-[270px] ${choose === 'Local' ? 'bg-blue2 text-white' : 'bg-[#D7DCF1]'}`}
                    onClick={()=>handleChoose('Local')}
                 >
                    <img src="assets/images/propertyForm/Local.png" alt="casa"/>
                    <p className="font-bold">Local</p>
                </div>
                <div
                    className={`flex justify-start items-center gap-4 cursor-pointer rounded-lg w-[270px] ${choose === 'Cabaña' ? 'bg-blue2 text-white' : 'bg-[#D7DCF1]'}`}
                    onClick={()=>handleChoose('Cabaña')}
                 >
                    <img src="assets/images/propertyForm/Cabaña.png" alt="casa"/>
                    <p className="font-bold">Cabaña</p>
                </div>
            </div>
            {choose !== null
            ?
            <button className="p-2 ps-8 pe-8 rounded-lg bg-blue2 text-white text-lg font-bold" onClick={()=>handleNext()} >Siguiente</button>
            :
            <button className="p-2 ps-8 pe-8 rounded-lg bg-gray-500 text-white text-lg font-bold" >Siguiente</button>
            }

        </div>
    )
}

export default PropertyType