import PropertyType from '../PropertyInputs/PropertyType'
import { useState, useContext } from "react";
import {PropertyContext} from '../../context/PropertyContext'


const PropertyForm = () => {
    const {currentIndex} = useContext(PropertyContext)

    return (
        <div className="w-[100%] h-[100vh] flex justify-center items-center">
        {currentIndex === 0
        ?
        <PropertyType/>
        :
        <></>
        }
        </div>
    );
};

export default PropertyForm;
