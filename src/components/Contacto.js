import React from 'react'
import './Contacto.css'
import Logo from './images/logo.png'
import Hamburguesa from './images/fondo.jpg'
import Hotdog from './images/hotdog.jpg'

const Contacto = () => {
    return (
        <section className='formulario'>
        <div className='contacto' id='Contacto'>
            <div className='form'>
                <h1>¡Ponte en contacto con nosotros!</h1>
                <div className='formcontainer'>
                    <form action="https://formspree.io/f/mlekpwoo" method="POST">


                        <p>Nombre(s):
                            <input name='Nombre' type='text' placeholder='Nombre(s)' required />
                        </p>

                        <p>Correo electrónico:
                            <input name='Correo' type='text' placeholder='Correo Electrónico' requiered />
                        </p>

                        <p>Queja o sugerencia:
                        <textarea name="comentarios" rows="2" cols="60" placeholder='Escribe tu queja o sugerencia...'></textarea> 
                        </p>

                        <button type='submit'>Enviar</button>
                        <div className='datos'>
                            <span class="fa solid fa-phone"></span>(+52) 618 125 3704
                            <span class="fa solid fa-envelope-o"></span> Michuy@gmail.com
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div className='logoform'>
        <div className='logoformcontainer'><img src={Logo} alt='Logo' /> </div>
        
        </div>
        </section>

    )
}

export default Contacto
