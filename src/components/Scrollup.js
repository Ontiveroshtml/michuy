import React from "react";
import ScrollUpButton from "react-scroll-up-button";
import './Scrollup.css';

export default class index extends React.Component {
  render() {
    return (
      <div>
        <ScrollUpButton
          ContainerClassName="AnyClassForContainer"
          TransitionClassName="AnyClassForTransition"
        >
        </ScrollUpButton>
      </div>
    );
  }
}
