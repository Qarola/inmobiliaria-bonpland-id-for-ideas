import { createContext, useState, children, useEffect } from 'react';

interface PropertyContextType {
  property: any | null;
  currentIndex: any | null;
  temporalProperty: any | null;
  create_tempProperty: (data: any) => void;
  create_property: (data: any) => void;
  putIndex: (n: any) => void;
  prevIndex: (n: any) => void;
  nextIndex: (n: any) => void;
}

export const PropertyContext = createContext<UserContextType>({
  property: null,
  currentIndex: null,
  temporalProperty: null,
  create_tempProperty: () => {},
  create_property: () => {},
  putIndex: () => {},
  prevIndex: () => {},
  nextIndex: () => {},
});

const propertyLocal = JSON.parse(sessionStorage.getItem('property')) || null;

export const PropertyProvider = ({ children }: { children: ReactNode }) => {
    const [property, setProperty] = useState<object>(propertyLocal)
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [temporalProperty, setTemporalProperty] = useState<object>()

    const create_property = (data: object) =>{
        setProperty(data)
    }

    const putIndex = (n: int) => {
        setCurrentIndex(n)
    }

    const prevIndex = (n: int) =>{
        setCurrentIndex(currentIndex-1)
    }

    const nextIndex = (n: int) =>{
        setCurrentIndex(currentIndex+1)
    }

    const create_tempProperty = (data: object) => {
        setTemporalProperty(data)
        console.log(temporalProperty)
    }

    const deleteTempProperty = () =>{
        setTemporalProperty({})
    }

    useEffect(() =>{
        sessionStorage.setItem("property", JSON.stringify(property))
    },[property])

    return(
    <PropertyContext.Provider
    value={{
    property,
    currentIndex,
    create_property,
    putIndex,
    nextIndex,
    prevIndex,
    temporalProperty,
    create_tempProperty
    }}>
        {children}
    </PropertyContext.Provider>
    )
}