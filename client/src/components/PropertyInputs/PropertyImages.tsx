import {useState, useEffect, useContext} from 'react'
import {PropertyContext} from '../../context/PropertyContext'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


const PropertyImages = () => {
    const [images, setImages] = useState<array>([])
    const [image, setImage] = useState<string>()

    const {currentIndex, prevIndex, nextIndex, temporalProperty, create_tempProperty} =  useContext(PropertyContext)

    const addImage = (image) =>{
        console.log(image)
        if(image){
            const array = [...images,image]
            setImages(array)
        }
    }

    const removeImage = (image) =>{
        const array = images.filter(obj => obj !== image);
        setImages(array)
    }

    const back = () => {
        prevIndex(currentIndex)
    }

    const next = () => {
        if(images.length > 0){
            create_tempProperty({...temporalProperty, images: images})
            nextIndex(currentIndex)
        }
    }

    return(
        <div className="w-[100%] flex flex-col gap-5 p-10">
            <h1 className="text-3xl lg:text-5xl">Añadir imagenes a la publicacion</h1>
            <div className="w-[100%] flex flex-col">
                <div className="w-[100%] flex justify-start items-center gap-1 p-2">
                    <p className="font-bold">Añadir imagen (link):</p>
                    <input className=" p-2" type="file" onChange={(e)=>setImage(e.target.files[0])}/>
                    <div className="bg-blue2 text-white rounded-lg p-2 cursor-pointer" onClick={()=>addImage(image)}>
                        <AddIcon/>
                    </div>
                </div>
                {images.length > 0 ?
                <div className="flex flex-col justify-start gap-2">
                {images.map(image =>(
                    <div key={image} className="w-min flex bg-gray-500 justify-start items-center rounded-lg p-1 gap-2">
                        <p className="font-bold text-white">{image.name}</p>
                        <div className="text-white cursor-pointer" onClick={()=>removeImage(image)}>
                            <RemoveIcon/>
                        </div>
                    </div>
                ))}
                </div>
                :
                <></>
                }
            </div>
            <div className="w-[100%] flex gap-5">
                <button className="p-2 ps-8 pe-8 rounded-lg bg-gray-500 text-white text-lg font-bold" onClick={()=>back()}>Volver</button>
                <button className="p-2 ps-8 pe-8 rounded-lg bg-blue2 text-white text-lg font-bold" onClick={()=>next()}>Siguiente</button>
            </div>
        </div>
    )
}

export default PropertyImages