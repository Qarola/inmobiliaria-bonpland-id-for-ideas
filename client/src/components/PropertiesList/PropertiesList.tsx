import {useState, useEffect} from 'react'
import axios from 'axios';
import {Card} from './Card'

export const PropertiesList = ({filters}) => {
    const [properties, setProperties] = useState([])

        axios.get("https://inmobiliaria-bonpland-id-for-ideas.onrender.com/api/all-properties")
        .then(response => {
            setProperties(response.data.data)
        })
        .catch(error=>{
            console.log(error)
        })

    console.log(properties)


    return(
        <div className="flex flex-wrap gap-8 justify-center items-start">
            {properties && properties.map(property => (
                <Card property={property}/>
            ))}
        </div>
    )
}