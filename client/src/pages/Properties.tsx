import SearchBar from '../components/Buscador/Devices/SearchBar'
import { PropertiesList } from '../components/index.ts'

const Properties = () =>{

    return(
        <div className="flex flex-col justify-center items-center p-10 gap-10">
            <SearchBar/>
            <PropertiesList/>
        </div>
    )
}

export default Properties