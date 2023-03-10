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
     <Footer />  */}
     <Whatsapp/>
     {/* <Contacto /> 
     <Footer />  */}
    </div>

  );
}

export default App;
