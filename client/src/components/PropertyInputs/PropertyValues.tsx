import { useState, useContext } from "react";
import {PropertyContext} from '../../context/PropertyContext'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


const PropertyValues = () => {
    const [bathrooms, setBathrooms] = useState<number>(0)
    const [rooms, setRooms] = useState<number>(0)
    const [area, setArea] = useState<number>()
    const [price, setPrice] = useState<number>()
    const [contractType, setContractType] = useState<string>()

    const {currentIndex, prevIndex, nextIndex, temporalProperty, create_tempProperty} =  useContext(PropertyContext)

    const handleMinus = (setValue, value) => {
        if(value===0){
            setValue(0)
        }
        else{
            setValue(value-1)
        }
    }

    const handlePlus = (setValue, value) => {
        setValue(value+1)
    }

    const handleValue = (setValue, value) =>{
        if(value < 0){
            setValue(value)
        }
    }

    const back = () => {
        prevIndex(currentIndex)
    }

    const next = () => {
        if((bathrooms > 0) && (rooms > 0) && (area > 0) && (price > 0) && (contractType)){
            create_tempProperty({...temporalProperty, bathrooms: bathrooms, rooms: rooms, coveredArea: area, price: price, contractType: contractType})
            nextIndex(currentIndex)
        }
        else{
            console.log(bathrooms, rooms, area, price, contractType)
        }
    }

    return(
        <div className="flex flex-col gap-10">
            <h1 className="text-3xl lg:text-5xl">Añade caracteristicas a la publicacion</h1>
            <div className="flex flex-wrap gap-10">
                <div className="flex gap-2 justify-center items-center">
                    <button className="bg-blue2 text-white rounded-full p-1" onClick={()=>handleMinus(setBathrooms, bathrooms)}>
                        <RemoveIcon/>
                    </button>
                    <p className="flex gap-2 font-bold">{bathrooms} Baños</p>
                    <button className="bg-blue2 text-white rounded-full p-1" onClick={()=>handlePlus(setBathrooms, bathrooms)}>
                        <AddIcon/>
                    </button>
                </div>
                <div className="flex gap-2 justify-center items-center">
                    <button className="bg-blue2 text-white rounded-full p-1" onClick={()=>handleMinus(setRooms, rooms)}>
                        <RemoveIcon/>
                    </button>
                    <p className="flex gap-2 font-bold">{rooms} Habitaciones</p>
                    <button className="bg-blue2 text-white rounded-full p-1" onClick={()=>handlePlus(setRooms, rooms)}>
                        <AddIcon/>
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <p className="font-bold">Area de la propiedad (en metros cuadrados):</p>
                <input className="border solid black rounded-lg p-2" placeholder="metros cuadrados..." onChange={(e)=> setArea(e.target.value)}/>
            </div>
            <div className="flex flex-wrap gap-10">
                <div className="flex flex-col">
                    <p className="font-bold">Tipo de contrato</p>
                    <div className="flex gap-2">
                        <input type="radio" name="option" onClick={()=>setContractType('buy')}/>
                        <p>Compra</p>
                    </div>
                    <div className="flex gap-2">
                        <input type="radio" name="option" onClick={()=>setContractType('rent')}/>
                        <p>Renta</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="font-bold">Precio:</p>
                    <input className="border solid black rounded-lg p-2" placeholder="Precio de la propiedad..." onChange={(e)=>setPrice(e.target.value)}/>
                </div>
            </div>
            <div className="w-[100%] flex gap-5">
                <button className="p-2 ps-8 pe-8 rounded-lg bg-gray-500 text-white text-lg font-bold" onClick={()=>back()}>Volver</button>
                <button className="p-2 ps-8 pe-8 rounded-lg bg-blue2 text-white text-lg font-bold" onClick={()=>next()}>Siguiente</button>
            </div>
        </div>
    )
}

export default PropertyValues