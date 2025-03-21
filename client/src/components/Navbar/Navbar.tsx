import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../context/UserContext'
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

export const Navbar = () => {
    const { user } = useContext(UserContext)
    const [clicked, setClicked] = useState(false)

    const toggleClicked = () => {
        setClicked(!clicked)
    }

    return (
        <div className="navbar bg-[#1A3670] fixed lg:relative w-[100%] z-20">
            <Link to="/" className="p-2">
                <img className="navbar__logo" src='assets/logos/MAX.png' alt="Logo" />
            </Link>
            <div id="navbar" className={clicked ? '#navbar active' : '#navbar'}>
                <Link className="text-[#F6F6F6] navbar__item m-3 p-2" to="/">Inicio</Link>
                <Link className="text-[#F6F6F6] navbar__item m-3 p-2" to="/about">Acerca de</Link>
                <Link className="text-[#F6F6F6] navbar__item navbar__item-p m-3 p-2" to="/properties">Comprar</Link>
                <Link className="text-[#F6F6F6] navbar__item navbar__item-p m-3 p-2" to="/">Vender</Link>
                <Link className="text-[#F6F6F6] navbar__item navbar__item-p m-3 p-2" to="/contact">Contacto</Link>
                {user
                    ?
                    <div className="flex account__buttons">
                        <Link className="text-[#F6F6F6] m-3 p-2 navbar__item navbar__register" to="/dashboard">{user.name}</Link>
                    </div>
                    :
                    <div className="flex account__buttons">
                        <Link className="text-[#F6F6F6] m-3 p-2 navbar__item navbar__register" to="/register">Registrarse</Link>
                        <Link className="text-[#1A3670] hover:bg-[#003DA2] hover:text-white transition-colors duration-200 m-3 p-2 me-10 navbar__item bg-[#FEFEFE] rounded" to="/login">Ingresar</Link>
                    </div>
                }
            </div>
            <div id="switch">
                <p onClick={toggleClicked}>{clicked ?
                    <MenuOpenIcon className="navbar__icon" />
                    :
                    <MenuIcon className="navbar__icon" />
                }
                </p>
            </div>
        </div>
    )
}