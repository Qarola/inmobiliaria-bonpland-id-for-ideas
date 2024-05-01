import { createContext, useState, children, useEffect } from 'react';

interface PropertyContextType {
  property: any | null;
  currentIndex: any | null;
  create_property: (data: any) => void;
  putIndex: (n: any) => void;
  prevIndex: (n: any) => void;
  nextIndex: (n: any) => void;
}

export const PropertyContext = createContext<UserContextType>({
  property: null,
  currentIndex: null,
  create_property: () => {},
  putIndex: () => {},
  prevIndex: () => {},
  nextIndex: () => {},
});

const propertyLocal = JSON.parse(sessionStorage.getItem('property')) || null;

export const PropertyProvider = ({ children }: { children: ReactNode }) => {
    const [property, setProperty] = useState(propertyLocal)
    const [currentIndex, setCurrentIndex] = useState(0)

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
    prevIndex
    }}>
        {children}
    </PropertyContext.Provider>
    )
}