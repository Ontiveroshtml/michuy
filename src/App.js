import React from 'react'
import Navbar from './components/Navbar'
import Inicio from './components/Inicio'
import Cards from './components/Cards'
import './App.css'
import Ubicacion from './components/Ubicacion'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

function App() {
  return (

    <div>
      <Navbar />
      <Inicio />
      <Cards />

     <Ubicacion /> 
     {/* <Contacto /> 
     <Footer /> */}
    </div>

  );
}
export default App;
