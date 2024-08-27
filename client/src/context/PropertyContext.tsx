import { createContext, useState, ReactNode, useEffect } from 'react';
import axios from 'axios';

interface PropertyContextType {
  properties: any[] | null;
  searchPerType: (type: string) => void;
  reset: (type: string) => void;
}

export const PropertyContext = createContext<PropertyContextType>({
  properties: null,
  searchPerType: () => {},
  reset: () => {}
});

export const PropertyProvider = ({ children }: { children: ReactNode }) => {
  const [properties, setProperties] = useState<any[]>([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("https://inmobiliaria-bonpland-id-for-ideas.onrender.com/api/all-properties");
        setProperties(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProperties();
  }, []);

  const searchPerType = async (type: string) => {
    if (type !== 'Tipo de propiedad') {
      try {
        const response = await axios.get(`https://inmobiliaria-bonpland-id-for-ideas.onrender.com/api/properties/type/${type}`);
        setProperties(response.data.data);
      } catch (error) {
        console.error(error, type);
      }
    }
  };

    const searchPerFilters = (filters: { [key: string]: any }) => {

    }

    const reset = () =>{
        axios.get("https://inmobiliaria-bonpland-id-for-ideas.onrender.com/api/all-properties")
        .then(response => {
            setProperties(response.data.data)
        })
        .catch(error => {
            console.error(error);
        })
    }

  return (
    <PropertyContext.Provider
      value={{
        properties,
        searchPerType,
        reset,
      }}
     >
      {children}
    </PropertyContext.Provider>
  );
};