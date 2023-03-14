import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ScrollUpButton from "react-scroll-up-button";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
ReactDOM.render(
  <React.StrictMode>
     <ScrollUpButton ContainerClassName="ScrollUpButton__Container" TransitionClassName="ScrollUpButton__Toggled" color="#ffff">
                    
      </ScrollUpButton>

      
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


