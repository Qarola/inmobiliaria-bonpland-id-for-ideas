import React, { useState, useEffect } from 'react';
import TuneIcon from '@mui/icons-material/Tune';
import ClearIcon from '@mui/icons-material/Clear';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const Movile = () => {
    const [showFilter, setShowFilter] = useState(false)
    const [comprarOption, setComprarOption] = useState();
    const [tipoOption, setTipoOption] = useState();
    const [tFiltExist, setTFiltExist] = useState(false)
    const [cFiltExist, setCFiltExist] = useState(false)

    const toggleFilter = () => {
        setShowFilter(!showFilter)
    }

    const comprarChoose = (option) => {
        setComprarOption(option)
        setCFiltExist(true)
    }

    const tipoChoose = (option) => {
        setTipoOption(option)
        setTFiltExist(true)
    }

    return(
        <div className="relative flex items-center justify-center bg-[#FFFFFF] p-5">
            <div className="w-[100%]">
                <h1 className="mb-4 text-2xl font-medium bg-gradient-to-b from-[#1A3670] to-[#4054B0] inline-block text-transparent bg-clip-text">¿Qué buscas?</h1>
                <div className="flex justify-between bg-white w-[100%] rounded-full shadow-2xl">
                    <input className="w-[69.7%] rounded-l-full p-3" placeholder="Ubicación deseada"/>
                        <div className="relative">
                            <button className="flex  p-3 w-[100%] font-[500] border-l border-gray-100 border-solid" onClick={toggleFilter}>
                                <h5 className="text-gray-500">Filtros</h5>
                                <TuneIcon className="text-gray-500"/>
                            </button>
                            {showFilter && (
                            <div className="absolute w-[170%] flex flex-col bg-white rounded-b-lg shadow-md">
                                <div className="flex flex-col justify-center items-center">
                                    <h1 className="p-2 border-b border-gray-100 border-solid">Transaccion</h1>
                                    <button onClick={(e) => comprarChoose(e.target.textContent)} className="block w-full p-2 hover:bg-gray-100 ">Comprar</button>
                                    <button onClick={(e) => comprarChoose(e.target.textContent)} className="block w-full p-2 hover:bg-gray-100 hover:rounded-b-lg">Vender</button>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <h1 className="p-2 border-b border-gray-100 border-solid">Tipo de propiedad</h1>
                                    <button onClick={(e) => tipoChoose(e.target.textContent)} className="block w-full p-2 hover:bg-gray-100">Casa</button>
                                    <button onClick={(e) => tipoChoose(e.target.textContent)} className="block w-full p-2 hover:bg-gray-100">Apartamento</button>
                                   <button onClick={(e) => tipoChoose(e.target.textContent)} className="block w-full p-2 hover:bg-gray-100 hover:rounded-b-lg">Oficina</button>
                                </div>
                            </div>
                          )}
                        </div>
                    <button className="bg-gradient-to-b from-[#1A3670] to-[#4054B0] hover:from-[#4054B0] hover:to-[#1A3670] text-white rounded-r-full p-3">
                        <SearchRoundedIcon/>
                    </button>
                </div>
                <div className="flex p-2">
                    {cFiltExist
                    ?
                    <div className="flex justify-center items-center gap-1 m-1 p-1 bg-gray-400 text-white font-bold rounded-full">
                        {comprarOption}
                        <ClearIcon onClick={()=>setCFiltExist(false)}/>
                    </div>
                    :
                    <></>
                    }
                    {tFiltExist
                    ?
                    <div className="flex justify-center items-center gap-1 m-1 p-1 bg-gray-400 text-white font-bold rounded-full">
                        {tipoOption}
                        <ClearIcon onClick={()=>setTFiltExist(false)}/>
                    </div>
                    :
                    <></>
                    }
                </div>
            </div>
        </div>
    )
}

export default Movile