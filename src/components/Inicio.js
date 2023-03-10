import React, {useEffect} from 'react'
import 'aos/dist/aos.css'
import {Link} from 'react-scroll'
import AOS from "aos";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FaFacebookF } from 'react-icons/fa';



import './Inicio.css'

const Inicio = () => {

    useEffect(()=>{
        AOS.init({duration: 2000});
      }, []);
    return (
        
        <div id="Inicio" className='hero'>
            <div className='content' data-aos="fade-right">
                <p>Llamanos!</p>
                <p>(+52) 677-885-8894</p>
                <p>Tacos y hamburguesas "MY CHUY" <FontAwesomeIcon icon="fa-brands fa-facebook" /></p>
                <Link to='Cards' style={{color:"#333", cursor:"pointer", textAlign:"center", textDecoration:"none"}} spy={true} smooth={true} offset={-142} duration={700} className='button' >Ver platillos <FontAwesomeIcon icon={faArrowRight} /></Link>
                
            </div>
        </div>
    )
}

export default Inicio
