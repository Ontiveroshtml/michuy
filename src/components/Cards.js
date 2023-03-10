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
  },

  {
    id: 2,
    title: "Hotdog",
    image: image2,
  },

  {
    id: 3,
    title: "Taco",
    image: imagen3,
  }

];

function Cards() {

  useEffect(()=>{
    AOS.init({duration: 2000});
  }, []);

  return (
    <>
    <br/>
    <br/>
    <h1 data-aos="fade-right">¡Conoce todos nuestros platillos!</h1>

    <div className="container d-flex justify-content-center align-items-center h-100" id="Cards" data-aos="fade-right">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>


        ))}
      </div>
    </div>
    </>
  );
}

export default Cards;
