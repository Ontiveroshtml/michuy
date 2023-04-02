import React, {useEffect} from "react";
import Card from "./Card";
import AOS from "aos";
import 'aos/dist/aos.css'
import image1 from "./images/fondo.jpg";
import image2 from "./images/hotdog.jpg"
import imagen3 from "./images/taco.jpg";


const cards = [
  {
    id: 1,
    title: "Hamburguesa",
    image: image1,
    text: "Sabrosa hamburguesa, sí que esta sabrosa no te miento ",
  },

  {
    id: 2,
    title: "Hotdog",
    image: image2,
    text: "Hotdog delicioso, te lo juro que si es verdad ",
  },

  {
    id: 3,
    title: "Taco",
    image: imagen3,
    text: "Taco de los dioses, con un solo bocado sentirás que estas en el cielo.",
  }

];

function Cards() {

  useEffect(()=>{
    AOS.init({duration: 2000});
  }, []);

  return (
    <>
    <div className="ContenedorCarta">
    <h1 data-aos="fade-right">¡Conoce todos nuestros platillos!</h1>
    
    <div className="container d-flex justify-content-center align-items-center h-100" id="Cards" data-aos="fade-right">
      <div className="row">
        {cards.map(({ title, image, id, text }) => (
          <div className="col-md-4" key={id}>

            <Card imageSource={image} title={title} text={text} />
            
          </div>
          
        ))}

        
      </div>
    </div>
    </div>
    </>
  );
}

export default Cards;
