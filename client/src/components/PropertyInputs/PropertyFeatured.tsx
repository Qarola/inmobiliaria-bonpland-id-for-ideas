import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import {useState, useContext} from 'react'
import {PropertyContext} from '../../context/PropertyContext'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const PropertyFeatured = () =>{
    const [featured, setFeatured] = useState<string>()
    const [clicked, setClicked] = useState<array>([])
    const {currentIndex, prevIndex, nextIndex, temporalProperty, create_tempProperty} =  useContext(PropertyContext)

    const back = () => {
        prevIndex(currentIndex)
    }

    const handleClicked = (a) =>{
        let array = [false, false, false]
        array[a] = true
        const options = ['silver','gold','gold_premium']
        setClicked(array)
        setFeatured(options[a])
    }

    const next = () => {
        if(featured){
            create_tempProperty({...temporalProperty, featuredProperties: featured})
            nextIndex(currentIndex)
        }
    }

    return(
        <div className="w-[100%] flex flex-col justify-center items-center p-10 gap-10">
            <h1 className="text-3xl lg:text-5xl">Seleccionar el plan de la publicacion.</h1>
            <div className='h-[100%] flex flex-wrap justify-center items-start gap-5'>
                <div onClick={()=>handleClicked(0)} className={`flex cursor-pointer flex-col justify-start items-center  text-white rounded-lg p-5 gap-10 shadow-xl bg-[#CD7F32] ${clicked[0] === true ? 'border-solid border-2 border-indigo-600' : 'border-solid border-2 border-white'} `}>
                    <p className="font-bold text-5xl">Bronce</p>
                    <div className="flex flex-col gap-5 items-center">
                        <p className="text-3xl">Ventajas</p>
                        <div className="flex flex-col gap-2 items-start">
                            <div className="flex gap-2">
                                <CheckIcon/>
                                <p>Ventaja</p>
                            </div>
                            <div className="flex gap-2">
                                <ClearIcon/>
                                <p>Ventaja</p>
                            </div>
                            <div className="flex gap-2">
                                <ClearIcon/>
                                <p>Ventaja</p>
                            </div>
                            <div className="flex gap-2">
                                <ClearIcon/>
                                <p>Ventaja</p>
                            </div>
                            <div className="flex gap-2">
                                <ClearIcon/>
                                <p>Ventaja</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="text-3xl">Tarifa mensual</p>
                            <div className="flex justify-center">
                                <p>0</p>
                                <AttachMoneyIcon/>
                            </div>
                        </div>
                    </div>
                </div>
                <div onClick={()=>handleClicked(1)} className={`flex cursor-pointer flex-col justify-start items-center  text-white rounded-lg p-5 gap-10 shadow-xl bg-[#C0C0C0] ${clicked[1] === true ? 'border-solid border-2 border-indigo-600' : 'border-solid border-2 border-white'} `}>
                    <p className="font-bold text-5xl">Plata</p>
                    <div className="flex flex-col gap-5 items-center">
                        <p className="text-3xl">Ventajas</p>
                        <div className="flex flex-col gap-2 items-start">
                            <div className="flex gap-2">
                                <CheckIcon/>
                                <p>Ventaja</p>
                            </div>
                            <div className="flex gap-2">
                                <CheckIcon/>
                                <p>Ventaja</p>
                            </div>
                            <div className="flex gap-2">
                                <CheckIcon/>
                                <p>Ventaja</p>
                            </div>
                            <div className="flex gap-2">
                                <ClearIcon/>
                                <p>Ventaja</p>
                            </div>
                            <div className="flex gap-2">
                                <ClearIcon/>
                                <p>Ventaja</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="text-3xl">Tarifa mensual</p>
                            <div className="flex justify-center">
                                <p>500</p>
                                <AttachMoneyIcon/>
                            </div>
                        </div>
                    </div>
                </div>
                <div onClick={()=>handleClicked(2)} className={`flex cursor-pointer flex-col justify-start items-center text-white rounded-lg p-5 gap-10 shadow-xl bg-[#DAA520] ${clicked[2] === true ? 'border-solid border-2 border-indigo-600' : 'border-solid border-2 border-white'} `}>
                    <p className="font-bold text-5xl">Oro</p>
                    <div className="flex flex-col gap-5 items-center">
                        <p className="text-3xl">Ventajas</p>
                        <div className="flex flex-col gap-2 items-start">
                            <div className="flex gap-2">
                                <CheckIcon/>
                                <p>Ventaja</p>
                            </div>
                            <div className="flex gap-2">
                                <ClearIcon/>
                                <p>Ventaja</p>
                            </div>
                            <div className="flex gap-2">
                                <CheckIcon/>
                                <p>Ventaja</p>
                            </div>
                            <div className="flex gap-2">
                                <CheckIcon/>
                                <p>Ventaja</p>
                            </div>
                            <div className="flex gap-2">
                                <CheckIcon/>
                                <p>Ventaja</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="text-3xl">Tarifa mensual</p>
                            <div className="flex justify-center">
                                <p>1000</p>
                                <AttachMoneyIcon/>
                            </div>
                        </div>
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

export default PropertyFeatured