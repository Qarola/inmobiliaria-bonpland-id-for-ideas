const Buscador = () => {
    return (
        <div className="relative flex items-center justify-center">
            <div className="w-[100vw] h-[90vh]">
                <img src='/assets/images/bg-example.png' alt="bg" className="object-cover w-full h-full" />
            </div>
            <div className="absolute w-[75%]">
                <h1 className="mb-2 text-2xl font-medium">¿Que buscas?</h1>
                <div className="flex justify-between bg-white w-[100%] rounded-full">
                    <input className="w-[70%] rounded-l-full p-3" placeholder="Ubicacion deseada"/>
                    <button className="p-3 font-normal border-l border-r border-gray-100 border-solid">Comprar</button>
                    <button className="p-3 font-normal">Tipo de propiedad</button>
                    <button className="bg-black text-white rounded-r-full p-3">Lupa</button>
                </div>
            </div>

        </div>
    );
};

export default Buscador;
