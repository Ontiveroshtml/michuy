import React from 'react'
import Navbar from './components/Navbar'
import Inicio from './components/Inicio'
import Cards from './components/Cards'
import './App.css'
import Ubicacion from './components/Ubicacion'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import Whatsapp from './components/Whatsapp'

function App() {
  return (

    <div>
      <Navbar />
      <Inicio />
      <Cards />

     <Ubicacion /> 
     {/* <Contacto /> 
<<<<<<< HEAD
     <Footer />  */}
     
     <Whatsapp/>
    
=======
     <Footer /> */}
>>>>>>> d96bce7b12248ba7cb8293698368a548c36bba4a
    </div>

  );
}
export default App;
