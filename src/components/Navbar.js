import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {Link} from 'react-scroll'
import logo from './images/logo.png'

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: 'white' }} />)
                        : (<FaBars size={30} style={{ color: 'white' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <div className='link-underline link-underline-black link-underline:hover'>
                            <Link to='Inicio' style={{color:"#ffff", cursor:"pointer"}} spy={true} smooth={true} offset={-139} duration={700} onClick={closeMenu}  >Inicio</Link>
                        </div>
                    </li>

                    <li className='nav-item'>
                        <div className='link-underline link-underline-black link-underline:hover'>
                            <Link to='Cards' style={{color:"#ffff", cursor:"pointer"}} spy={true} smooth={true} offset={-150} duration={700} onClick={closeMenu}>Productos</Link>
                        </div>
                    </li>

                    <li className='nav-item'>
                        <div className='link-underline link-underline-black link-underline:hover'>
                            <Link to='Ubicacion' style={{color:"#ffff", cursor:"pointer"}} spy={true} smooth={true} offset={-160} duration={700} onClick={closeMenu}>Ubicación</Link>
                        </div>
                    </li>
                    
                    {/* <li className='nav-item'>
                        <div className='link-underline link-underline-black link-underline:hover'>
                            <a href='#demo' onClick={closeMenu}>Contacto</a>
                        </div>
                    </li> */}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
