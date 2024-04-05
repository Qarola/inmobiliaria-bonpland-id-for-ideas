import List from './List/List'

const Destacados = () => {
    return(
        <div className="mt-20">
            <div className="flex flex-col justify-center items-center">
                <h2 className="uppercase font-bold text-[#003DA2] text-2xl p-1">novedades</h2>
                <h1 className="uppercase font-bold text-2xl p-1">nuestros inmuebles destacados</h1>
                <List/>
                <button className="text-white bg-[#003DA2] p-2 pe-5 ps-5 rounded-xl">Ver más</button>
            </div>
        </div>
    )
}

export default Destacados