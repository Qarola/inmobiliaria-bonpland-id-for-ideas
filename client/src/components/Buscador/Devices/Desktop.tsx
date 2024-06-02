import SearchBar from './SearchBar'

const Desktop = () =>{



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
                <SearchBar/>
            </div>
        </div>
    )
}

export default Desktop