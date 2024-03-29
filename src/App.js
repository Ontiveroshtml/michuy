import React from 'react'
import Navbar from './components/Navbar'
import Inicio from './components/Inicio'
import Cards from './components/Cards'
import './App.css'
import './components/Whatsapp'
import Ubicacion from './components/Ubicacion'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import Whatsapp from './components/Whatsapp'

function App() {
  return (

    <div>
      <Whatsapp/>
      <Navbar />
      <Inicio />
      <Cards />
      <Contacto />
      <Ubicacion />
      <Footer />
    </div>

  );
}
export default App;
