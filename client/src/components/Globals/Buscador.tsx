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
        <div className="relative flex items-center justify-center">
            <div className="w-[100vw] h-[90vh]">
                <img src='/assets/images/bg-example.png' alt="bg" className="object-cover w-full h-full" />
            </div>
            <div className="absolute w-[75%]">
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
