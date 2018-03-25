import React, { Component } from 'react';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    cards: cards,
    topScore: 0,
    currentScore: 0
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.cards.filter(card => card.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ cards });
  };
  
  checkIfClicked = id => {
    
  }
  
  
  // shuffleCards = id => {
  // 
  //   cards.sort(function(a, b){return 0.5 - Math.random()})
  // 
  //   this.setState({ friends });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div className="container">
      <Header><h1>Memory Card Game</h1>
      </Header>

      <Wrapper>
        
        {this.state.cards.map(card => (
          <Card
            removeFriend={this.removeFriend}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
