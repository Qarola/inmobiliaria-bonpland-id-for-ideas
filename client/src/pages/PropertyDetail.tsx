import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import KingBedOutlinedIcon from '@mui/icons-material/KingBedOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';

import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react'
import axios from 'axios'

const PropertyDetail = () =>{
    const { id } = useParams();
    const [property, setProperty] = useState<object>()

    useEffect(()=>{
        axios.get(`https://inmobiliaria-bonpland-id-for-ideas.onrender.com/api/detail/${id}`)
        .then(response =>{
            setProperty(response.data)

        })
        .catch(error=>{
            console.log(error)
        })
    },[])

    console.log(property)


    return(
        <>
        {property &&
            <div className="w-[100%] flex flex-col p-10 gap-2 items-center">
                <div className="w-[100%] flex justify-between">
                    <div className="flex flex-col">
                        <h1 className="font-bold text-lg">{property.titlePost}</h1>
                        <p className="text-gray-500">{property.address}, {property.city}, {property.state}, {property.country}</p>
                        <p className="text-gray-500">CODIGO DE REF: {property.reference}</p>
                    </div>
                    <div className="flex gap-5">
                        <FavoriteBorderIcon/>
                        <ShareOutlinedIcon/>
                    </div>
                </div>
                <div className="flex flex-wrap overflow-hidden">
                    {property.images.map(image=>(
                        <img className="w-[400px] rounded-xl" src={image} alt="img"/>
                    ))}
                </div>
                <div className="flex w-[100%] flex-wrap gap-5">
                    <div className="flex flex-col items-start justify-start p-10 rounded-xl shadow-md shadow-gray-500 gap-2">
                        {property.contractType === 'buy'
                        ?
                        <p>Compra</p>
                        :
                        <p className="shadow shadow-gray-500 p-2" >Alquiler</p>
                        }
                        <p className="font-bold">${property.price}</p>
                        <div className="flex flex-wrap p-5 gap-3">
                            <div className="flex flex-col justify-center items-center p-10 bg-[#C3D2F1] rounded-lg">
                                <KingBedOutlinedIcon/>
                                <p>{property.bathrooms} baños</p>
                            </div>
                            <div className="flex flex-col justify-center items-center p-10 bg-[#C3D2F1] rounded-lg">
                                <BathtubOutlinedIcon/>
                                <p>{property.bathrooms} baños</p>
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-col items-start justify-start p-10 rounded-xl shadow-md shadow-gray-500 gap-2">
                        <p className="font-bold text-lg">Contactar con agente inmobiliario</p>
                        <hr className="w-[100%]"/>
                        <div className="p-2 bg-[#C3D2F1]">
                            <p>{property.sellerContact.phone}</p>
                            <p>{property.sellerContact.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default PropertyDetail