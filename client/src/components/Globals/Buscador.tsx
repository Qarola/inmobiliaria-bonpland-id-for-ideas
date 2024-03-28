import React, { useState } from 'react';

/*Falta hacerlo responsive*/

const Buscador = () => {
    const [showComprarOptions, setShowComprarOptions] = useState(false);
    const [showTipoPropiedadOptions, setShowTipoPropiedadOptions] = useState(false);
    const [comprarOption, setComprarOption] = useState('Comprar')
    const [tipoOption, setTipoOption] = useState('Tipo de propiedad')

    const toggleComprarOptions = () => {
        setShowComprarOptions(!showComprarOptions);
        setShowTipoPropiedadOptions(false)
    };

    const toggleTipoPropiedadOptions = () => {
        setShowTipoPropiedadOptions(!showTipoPropiedadOptions);
        setShowComprarOptions(false)
    };

    const toggleComprarChose = (e) => {
        setComprarOption(e)
    }

    const toggleTipoChose = (e) => {
        setTipoOption(e)
    }

    return (
        <div className="relative flex items-center justify-center bg-[#1A3670]">
            <div className="w-[100vw] h-[90vh]">
                <img src='/assets/images/Home-bg.png' alt="bg" className="absolute w-[95%] h-[105%] left-1/2 transform -translate-x-1/2" />
            </div>
            <div className="absolute w-[80%]">
                <div className="flex flex-col justify-center items-center">
                    <img className="w-[350px]" src="assets/logos/MAX.png" alt="icon"/>
                    <div className="bg-white/50 rounded-3xl p-6 mb-10 mt-10">
                        <h1 class="bg-gradient-to-b from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-5xl">Donde los sueños encuentran su dirección.</h1>
                    </div>
                </div>
                <h1 className="mb-4 text-2xl font-medium">¿Qué buscas?</h1>
                <div className="flex justify-between bg-white w-[100%] rounded-full">
                    <input className="w-[69.7%] rounded-l-full p-3" placeholder="Ubicación deseada"/>
                    <div className="relative">
                      <button className="p-3 w-[100%] font-[500] border-l border-r border-gray-100 border-solid" onClick={toggleComprarOptions}>
                        {comprarOption}
                      </button>
                      {showComprarOptions && (
                        <div className="absolute w-[100%] bg-white rounded-b-lg shadow-md">
                          <button onClick={(e) => toggleComprarChose(e.target.textContent, 1)} className="block w-full p-2 hover:bg-gray-100 ">Comprar</button>
                          <button onClick={(e) => toggleComprarChose(e.target.textContent, 1)} className="block w-full p-2 hover:bg-gray-100 hover:rounded-b-lg">Vender</button>
                        </div>
                      )}
                    </div>
                    <div className="relative w-[15%]">
                        <button className="p-3 w-[100%] font-[500]" onClick={toggleTipoPropiedadOptions}>
                            {tipoOption}
                        </button>
                        {showTipoPropiedadOptions && (
                        <div className="absolute w-[100%] bg-white rounded-b-lg shadow-md">
                            <button onClick={(e) => toggleTipoChose(e.target.textContent)} className="block w-full p-2 hover:bg-gray-100">Casa</button>
                            <button onClick={(e) => toggleTipoChose(e.target.textContent)} className="block w-full p-2 hover:bg-gray-100">Apartamento</button>
                            <button onClick={(e) => toggleTipoChose(e.target.textContent)} className="block w-full p-2 hover:bg-gray-100 hover:rounded-b-lg">Oficina</button>
                        </div>
                        )}
                    </div>
                    <button className="bg-black text-white rounded-r-full p-3">Lupa</button>
                </div>
            </div>
        </div>
  );
};

export default Buscador;
