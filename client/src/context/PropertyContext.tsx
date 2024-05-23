import { createContext, useState, children, useEffect } from 'react';

interface PropertyContextType {
  currentIndex: any | null;
  images: any | null;
  temporalProperty: any | null;
  create_tempProperty: (data: any) => void;
  putIndex: (n: any) => void;
  prevIndex: (n: any) => void;
  nextIndex: (n: any) => void;
  addImage: (n: any) => void;
  setImagess: (n: any) => void;
}

export const PropertyContext = createContext<UserContextType>({
  currentIndex: null,
  temporalProperty: null,
  images: null,
  create_tempProperty: () => {},
  putIndex: () => {},
  prevIndex: () => {},
  nextIndex: () => {},
  addImage: () => {},
  setImagess: () => {},
});


export const PropertyProvider = ({ children }: { children: ReactNode }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [temporalProperty, setTemporalProperty] = useState<object>()
    const [images, setImages] = useState<array>([])

    const addImage = (image) =>{
        setImages([...images, image])
    }

    const setImagess = (images) =>{
        setImages(images)
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
    }

    const deleteTempProperty = () =>{
        setTemporalProperty({})
    }

    return(
    <PropertyContext.Provider
    value={{
    currentIndex,
    putIndex,
    nextIndex,
    prevIndex,
    temporalProperty,
    create_tempProperty,
    images,
    addImage,
    setImagess
    }}>
        {children}
    </PropertyContext.Provider>
    )
}