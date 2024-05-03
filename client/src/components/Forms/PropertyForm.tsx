import PropertyType from '../PropertyInputs/PropertyType'
import PropertyDescription from '../PropertyInputs/PropertyDescription'
import PropertyValues from '../PropertyInputs/PropertyValues'
import PropertyImages from '../PropertyInputs/PropertyImages'
import {PropertyContext} from '../../context/PropertyContext'
import { useState, useContext } from "react";



const PropertyForm = () => {
    const {currentIndex} = useContext(PropertyContext)

    const inputs = [<PropertyType/>, <PropertyDescription/>, <PropertyValues/>, <PropertyImages/>]

    return (
        <div className="w-[100%] h-[100vh] flex justify-center items-center">
            {inputs[currentIndex]}
        </div>
    );
};

export default PropertyForm;
