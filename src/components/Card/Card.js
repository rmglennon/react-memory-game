import React from "react";
import "./Card.css";

// set properties for the image and the onClick event to see if the card has been clicked or not already
const Card = props => (
  <div className="card">
    <div className="img-container">
      <img 
        alt={"This is image " + props.id} 
        src={props.image}
        onClick={() => props.checkIfClicked(props.id)}
      />
    </div>
  </div>
);

export default Card;
