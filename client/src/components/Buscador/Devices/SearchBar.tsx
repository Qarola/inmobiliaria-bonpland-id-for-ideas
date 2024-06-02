import {useState, useEffect, useContext} from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import {PropertyContext} from '../../../context/PropertyContext'

const SearchBar = () =>{
    const [showComprarOptions, setShowComprarOptions] = useState(false);
    const [showTipoPropiedadOptions, setShowTipoPropiedadOptions] = useState(false);
    const [comprarOption, setComprarOption] = useState('Comprar');
    const [tipoOption, setTipoOption] = useState('Tipo de propiedad');
    const [arrowC, setArrowC] = useState(true)
    const [arrowT, setArrowT] = useState(true)
    const [ubication, setUbication] = useState<string>()
    const {searchPerType, reset} =  useContext(PropertyContext)

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

    const call = (t) =>{
        if(t === 'todos'){
            reset()
        }
        else{
            searchPerType(t)
        }
    }

    return(
        <div className="mt-10 lg:mt-0 flex justify-between bg-white w-[100%] rounded-full z-10">
            <input
             className="w-[70%] bg-white rounded-l-full p-3"
             placeholder="Ubicación deseada"
             onChange={(e)=>setUbication(e.target.value)}
             />
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
                        <button onClick={(e) => toggleTipoChoose(e.target.textContent)} className="block w-full p-2 hover:bg-gray-100">todos</button>
                        <button onClick={(e) => toggleTipoChoose(e.target.textContent)} className="block w-full p-2 hover:bg-gray-100">casa</button>
                        <button onClick={(e) => toggleTipoChoose(e.target.textContent)} className="block w-full p-2 hover:bg-gray-100">apartamento</button>
                    </div>
                    )}
                </div>
            <button
             className="bg-gradient-to-b from-[#1A3670] to-[#4054B0] hover:from-[#4054B0] hover:to-[#1A3670] text-white rounded-r-full p-3"
             onClick={()=>call(tipoOption)}
             >
                <SearchRoundedIcon/>
            </button>
        </div>
    )

}

export default SearchBar