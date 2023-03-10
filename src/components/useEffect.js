import React, {useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css'


function Cards() {

    useEffect(()=>{
      AOS.init({duration: 2000});
    }, []);
  
    return (
        <div>

        </div>
    );
  }
  
  export default Cards;