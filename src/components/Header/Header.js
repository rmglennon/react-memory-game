import React from "react";
import "./Header.css";

const Header = props => (

  <div className="container-fluid">
    <nav className="navbar navbar-light bg-light">
      <h3>Current game score: {props.currentScore} | Top score: {props.topScore}</h3>
      </nav>
  
      <div className="jumbotron">
        <h1 className="display-4">Memory Card Game</h1>
        <p className="lead">Click a card to start, but only click it once!</p>
      </div>
    </div>
  );
  
  export default Header;