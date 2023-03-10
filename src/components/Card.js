import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import "./Card.css";

function Card({ imageSource, title, text, id }) {

  return (
    <>
   

    <div className="card text-center animate__animated animate__fadeInUp" >
      <div className="overflow" >
        <img src={imageSource} alt="a wallpaper" className="card-img-top" style={{height: "400px"}} />
      </div>
      <div className="card-body text-light ">
        <h4 className="card-title fs-1" >{title}</h4>
        <p className="card-text text-light fs-5 ">
          {text

          }

        </p>
      </div>
    </div>
    </>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card;
