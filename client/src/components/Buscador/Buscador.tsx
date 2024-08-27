import { useState, useEffect } from 'react';
import Desktop from './Devices/Desktop';
import Movile from './Devices/Movile';

const Buscador = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="mt-0 py-24"> {/* mt-5 agrega un margen superior */}
            {width >= 1020 ? <Desktop /> : <Movile />}
        </div>
    );
};

export default Buscador;
