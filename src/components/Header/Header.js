import React from "react";
import "./Header.css";

// create a header with a Bootstrap navbar and jumbotron
const Header = props => (
  
  <div className="main-container">
    <nav className="navbar sticky-top navbar-light bg-light justify-content-end">
      <h5 className="text-muted">Current game score: {props.currentScore} | Top score: {props.topScore}</h5>
    </nav>
    
    <div className="jumbotron text-muted">
      <h1>Memory Card Game</h1>
      <p className="lead">Click a card, but only click it once!</p>
    </div>
  </div>
);

export default Header;