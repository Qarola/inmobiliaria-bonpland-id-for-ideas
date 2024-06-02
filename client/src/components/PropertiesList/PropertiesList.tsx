import {useState, useEffect, useContext} from 'react'
import axios from 'axios';
import {Card} from './Card'
import {PropertyContext} from '../../context/PropertyContext'

export const PropertiesList = ({filters}) => {
    const {properties} =  useContext(PropertyContext)
    console.log(properties)
    return(
        <div className="flex flex-wrap gap-8 justify-center items-start">
            {properties && properties.map(property => (
                <Card property={property}/>
            ))}
        </div>
    )
}