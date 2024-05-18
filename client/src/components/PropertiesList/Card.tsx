import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import KingBedOutlinedIcon from '@mui/icons-material/KingBedOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { useState } from 'react'
import {Link} from 'react-router-dom'

export const Card = ({property}) =>{
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }

    return(
        <div className="flex flex-col items-start w-[378px] relative">
            <div className="flex flex-col absolute top-5 right-5">
                {clicked ?
                <FavoriteOutlinedIcon onClick={() => handleClick()} className="text-red"/>
                :
                <FavoriteBorderIcon onClick={() => handleClick()} className="text-white"/>
                }
                <ShareOutlinedIcon className="text-white"/>
            </div>
            <Link className="w-[100%] h-[200px]" to={`/property/${property._id}`}>
                <img className="w-[100%] h-[200px] rounded-lg overflow-hidden mb-2" src={property.images[0]} alt="img"/>
            </Link>
            <h1 className="text-[#4E4C4C] font-bold truncate w-[100%]">{property.titlePost}</h1>
            <h1 className="text-sm text-[#9C9999]">{property.city}, {property.country}</h1>
            <div className="flex gap-2">
                <div className="flex gap-1">
                    <KingBedOutlinedIcon className="text-[#4E4C4C]"/>
                    <h1 className="text-[#4E4C4C]">{property.rooms}</h1>
                </div>
                <div className="flex gap-1">
                    <BathtubOutlinedIcon className="text-[#4E4C4C]"/>
                    <h1 className="text-[#4E4C4C]">{property.bathrooms}</h1>
                </div>
            </div>
        </div>
    )
}
