import React, { Component } from 'react';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";

// import the cards from a json list with image links
import cards from "./cards.json";

// create constructor from the cards and set the initial scores to 0
// topScore is the most cards clicked without duplicating
// currentScore is the most clicked this round, and resets to 0 when duplicating clicks
class App extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      cards: cards,
      topScore: 0,
      currentScore: 0,
    };
    this.checkIfClicked = this.checkIfClicked.bind(this);
  }
  
  // check if a card has been clicked
  checkIfClicked(id) {
    // create a copy of the cards and use a random method to sort the array
    let clickedCard = this.state.cards.filter(card => card.id === id)[0];
    let cardsCopy = this.state.cards.slice().sort(function(a, b){return 0.5 - Math.random()});
    // if a card has not been clicked, set its clicked state to true
    if (!clickedCard.clicked) {
      clickedCard.clicked = true;
      cardsCopy[cardsCopy.findIndex((card) => card.id === id)] = clickedCard;
      
      // set the state and increment the counter
      this.setState({
        cards: cardsCopy,
        currentScore: this.state.currentScore + 1,
        topScore: (this.state.currentScore + 1 > this.state.topScore ? this.state.currentScore + 1 : this.state.topScore),
      });
    }
    
    // if a card has been clicked already, then set its click to false and reset the game
    else {
      
      let resetCardsCopy = cardsCopy.map((card) => {
        return {
          id: card.id,
          image: card.image,
          clicked: false,
        }
      });
      this.setState({
        cards: resetCardsCopy,
        currentScore: 0,
      });
    } 
  }
  
  // render the header, score, wrapper, and footer on the page using the current state values
  render() {
    return (
      <div className="container">
        <Header currentScore={this.state.currentScore} topScore={this.state.topScore}/>
        <Wrapper>  
          {this.state.cards.map(card => (
            <Card
              checkIfClicked={this.checkIfClicked}
              id={card.id}
              key={card.id}
              image={card.image}
              />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;