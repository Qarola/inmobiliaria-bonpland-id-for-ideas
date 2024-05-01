import React, { useState, useEffect } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const Desktop = () =>{
    const [showComprarOptions, setShowComprarOptions] = useState(false);
    const [showTipoPropiedadOptions, setShowTipoPropiedadOptions] = useState(false);
    const [comprarOption, setComprarOption] = useState('Comprar');
    const [tipoOption, setTipoOption] = useState('Tipo de propiedad');
    const [arrowC, setArrowC] = useState(true)
    const [arrowT, setArrowT] = useState(true)

    const toggleComprarOptions = () => {
        setShowComprarOptions(!showComprarOptions);
        setArrowC(!arrowC)
        setShowTipoPropiedadOptions(false);
        setArrowT(true)
    };

    const toggleTipoPropiedadOptions = () => {
        setShowTipoPropiedadOptions(!showTipoPropiedadOptions);
        setArrowT(!arrowT)
        setShowComprarOptions(false);
        setArrowC(true)
    };

    const toggleComprarChoose = (e) => {
        setComprarOption(e)
        setShowComprarOptions(false);
        setArrowC(true)
    };

    const toggleTipoChoose = (e) => {
        setTipoOption(e)
        setShowTipoPropiedadOptions(false);
        setArrowT(true)
    };


    return(
        <div className="relative flex items-center justify-center bg-[#1A3670]">
            <div className="w-[100vw] h-[90vh]">
                <img src='/assets/images/Home-bg.png' alt="bg" className="search__header absolute w-[95%] h-[105%] left-1/2 transform -translate-x-1/2" />
            </div>
            <div className="absolute w-[85%]">
                <div className="flex flex-col justify-center items-center search__header">
                    <img className="w-[350px]" src="assets/logos/MAX.png" alt="icon"/>
                    <div className="bg-white/50 rounded-3xl p-6 mb-10 mt-10">
                        <h1 class="bg-gradient-to-b from-[#1A3670] to-[#4054B0] inline-block text-transparent bg-clip-text text-5xl">Donde los sueños encuentran su dirección.</h1>
                    </div>
                </div>
                <h1 className="mb-4 text-2xl font-medium bg-gradient-to-b from-[#1A3670] to-[#4054B0] inline-block text-transparent bg-clip-text">¿Qué buscas?</h1>
                <div className="flex justify-between bg-white w-[100%] rounded-full">
                    <input className="w-[70%] bg-white rounded-l-full p-3" placeholder="Ubicación deseada"/>
                        <div className="relative">
                            <button className="p-3 w-[100%] font-[500] border-l border-r border-gray-100 border-solid" onClick={toggleComprarOptions}>
                                {comprarOption}
                                {arrowC ?
                                    <ExpandMoreIcon/>
                                    :
                                    <ExpandLessIcon/>
                                }
                            </button>
                            {showComprarOptions && (
                                <div className="absolute w-[100%] bg-white rounded-b-lg shadow-md">
                                    <button onClick={(e) => toggleComprarChoose(e.target.textContent)} className="block w-full p-2 hover:bg-gray-100 ">Comprar</button>
                                    <button onClick={(e) => toggleComprarChoose(e.target.textContent)} className="block w-full p-2 hover:bg-gray-100 hover:rounded-b-lg">Vender</button>
                                </div>
                            )}
                        </div>
                        <div className="relative">
                            <button className="flex p-3 w-[100%] font-[500]" onClick={toggleTipoPropiedadOptions}>
                                {tipoOption}
                                {arrowT ?
                                    <ExpandMoreIcon/>
                                    :
                                    <ExpandLessIcon/>
                                }
                            </button>
                            {showTipoPropiedadOptions && (
                            <div className="absolute bg-white rounded-b-lg shadow-md">
                                <button onClick={(e) => toggleTipoChoose(e.target.textContent)} className="block w-full p-2 hover:bg-gray-100">Casa</button>
                                <button onClick={(e) => toggleTipoChoose(e.target.textContent)} className="block w-full p-2 hover:bg-gray-100">Apartamento</button>
                                <button onClick={(e) => toggleTipoChoose(e.target.textContent)} className="block w-full p-2 hover:bg-gray-100 hover:rounded-b-lg">Oficina</button>
                            </div>
                            )}
                        </div>
                    <button className="bg-gradient-to-b from-[#1A3670] to-[#4054B0] hover:from-[#4054B0] hover:to-[#1A3670] text-white rounded-r-full p-3">
                        <SearchRoundedIcon/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Desktop