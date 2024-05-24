import {PropertyContext} from '../../context/PropertyContext'
import {useState, useContext} from 'react'
import axios from 'axios'
import FormData from 'isomorphic-form-data';

const PropertyReview = () =>{
    const {currentIndex, prevIndex, nextIndex, temporalProperty, create_tempProperty, putIndex, images, setImagess} =  useContext(PropertyContext)

    const cancel = () =>{
        create_tempProperty({})
        setImagess([])
        putIndex(0)
    }

    const submit: SubmitHandler<FieldValues> = async (e) => {
        e.preventDefault()

        const prop = new FormData
        prop.append('id', temporalProperty.id)
        prop.append('titlePost', temporalProperty.titlePost)
        prop.append('price', temporalProperty.price)
        prop.append('coveredArea', temporalProperty.coveredArea)
        prop.append('contractType', temporalProperty.contractType)
        prop.append('propertyType', temporalProperty.propertyType)
        prop.append('reference', temporalProperty.reference)
        prop.append('rooms', temporalProperty.rooms)
        prop.append('bathrooms', temporalProperty.bathrooms)
        prop.append('address', temporalProperty.address)
        prop.append('country', temporalProperty.country)
        prop.append('city', temporalProperty.city)
        prop.append('state', temporalProperty.state)
        prop.append('status', temporalProperty.status)
        prop.append('sellerContact', JSON.stringify(temporalProperty.sellerContact))
        prop.append('featuredProperties', temporalProperty.featuredProperties)

        images.map(image=>{
            prop.append('images', image)
        })

        const property = {
            message: 'hola',
            property: prop
        }


        axios.post('https://inmobiliaria-bonpland-id-for-ideas.onrender.com/api/properties/create', prop, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(response =>{
            console.log(response)
        })
        .catch(error => {
            console.log(error.response, prop.get('images'))

        })
    }


    return(
        <div className="w-[100%] flex flex-col flex-wrap p-10 gap-10">
            <h1 className="text-3xl lg:text-5xl">Revisa los datos de la publicacion</h1>
            <h1 className="text-2xl ps-3 font-bold">Datos de la propiedad</h1>
            <h1 className="text-xl ps-6">Datos principales</h1>
            <div className="flex w-[100%] justify-around gap-5">
                <div className="flex flex-col gap-5">
                    <div className="flex gap-4">
                        <p className="text-gray-500">Titulo</p>
                        <p className="font-bold">{temporalProperty.titlePost}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-4">
                        <p className="text-gray-500">Tipo de propiedad</p>
                        <p className="font-bold">{temporalProperty.propertyType}</p>
                    </div>
                </div>
            </div>
            <hr/>
            <h1 className="text-xl ps-6">Ubicacion</h1>
            <div className="flex w-[100%] justify-around gap-5">
                <div className="flex flex-col gap-5">
                    <div className="flex gap-4">
                        <p className="text-gray-500">Direccion</p>
                        <p className="font-bold">{temporalProperty.address}</p>
                    </div>
                    <div className="flex gap-4">
                        <p className="text-gray-500">Estado</p>
                        <p className="font-bold">{temporalProperty.state}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-4">
                        <p className="text-gray-500">Ciudad</p>
                        <p className="font-bold">{temporalProperty.city}</p>
                    </div>
                    <div className="flex gap-4">
                        <p className="text-gray-500">Pais</p>
                        <p className="font-bold">{temporalProperty.country}</p>
                    </div>
                </div>
            </div>
            <hr/>
            <h1 className="text-xl ps-6">Detalles de la propiedad</h1>
            <div className="flex w-[100%] justify-around gap-5">
                <div className="flex flex-col gap-5">
                    <div className="flex gap-4">
                        <p className="text-gray-500">Precio</p>
                        <p className="font-bold">{temporalProperty.price}</p>
                    </div>
                    <div className="flex gap-4">
                        <p className="text-gray-500">Cantidad de baños</p>
                        <p className="font-bold">{temporalProperty.bathrooms}</p>
                    </div>
                    <div className="flex gap-4">
                        <p className="text-gray-500">Metros cuadrados</p>
                        <p className="font-bold">{temporalProperty.coveredArea}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-4">
                        <p className="text-gray-500">Tipo de contrato</p>
                        <p className="font-bold">{temporalProperty.contractType}</p>
                    </div>
                    <div className="flex gap-4">
                        <p className="text-gray-500">Habitaciones</p>
                        <p className="font-bold">{temporalProperty.rooms}</p>
                    </div>
                    <div className="flex gap-4">
                        <p className="text-gray-500">Nivel de publicacion</p>
                        <p className="font-bold">{temporalProperty.featuredProperties}</p>
                    </div>
                </div>
            </div>
            <hr/>
            <h1 className="text-xl ps-6">Imagenes</h1>
            <div className="flex flex-col ps-10">
                {images.map(image =>(
                    <p className="font-bold" key={image.name}>
                    {image.name}
                    </p>
                ))}
            </div>
            <h1 className="text-2xl ps-3 font-bold">Datos del vendedor</h1>
            <div className="flex w-[100%] justify-around gap-5">
                <div className="flex flex-col gap-5">
                    <div className="flex gap-4">
                        <p className="text-gray-500">Contacto</p>
                        <p className="font-bold">{temporalProperty.sellerContact.contact}</p>
                    </div>
                    <div className="flex gap-4">
                        <p className="text-gray-500">Email</p>
                        <p className="font-bold">{temporalProperty.sellerContact.email}</p>
                    </div>
                    <div className="flex gap-4">
                        <p className="text-gray-500">Informacion extra</p>
                        <p className="font-bold">{temporalProperty.sellerContact.other_info}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-4">
                        <p className="text-gray-500">Telefono</p>
                        <p className="font-bold">{temporalProperty.sellerContact.phone}</p>
                    </div>
                    <div className="flex gap-4">
                        <p className="text-gray-500">Codigo Postal</p>
                        <p className="font-bold">{temporalProperty.sellerContact.area_code}</p>
                    </div>
                    <div className="flex gap-4">
                        <p className="text-gray-500">Sitio Web</p>
                        <p className="font-bold">{temporalProperty.sellerContact.webpage}</p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="flex w-[100%] justify-around gap-5">
                <div className="flex flex-col gap-5">
                    <div className="flex gap-4">
                        <p className="text-gray-500">Telefono secundario</p>
                        <p className="font-bold">{temporalProperty.sellerContact.phone2}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-4">
                        <p className="text-gray-500">Codigo postal secundario</p>
                        <p className="font-bold">{temporalProperty.sellerContact.area_code2}</p>
                    </div>
                </div>
            </div>
            <div className="w-[100%] flex gap-5">
                <button className="p-2 ps-8 pe-8 rounded-lg bg-gray-500 text-white text-lg font-bold" onClick={()=>cancel()}>Eliminar</button>
                <button className="p-2 ps-8 pe-8 rounded-lg bg-blue2 text-white text-lg font-bold" onClick={submit}>Siguiente</button>
            </div>
        </div>
    )
}

export default PropertyReview