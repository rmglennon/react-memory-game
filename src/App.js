import React, { Component } from 'react';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  
  // Setting this.state.cards to the cards json array
  // topScore is the most clicked without duplicating (starts increasing again once currentScore reaches its value)
  // currentScore is the most clicked this round. resets to 0 when duplicating clicks
  
  constructor(props) {
    super(props);
    this.state = {
      cards: cards,
      topScore: 0,
      currentScore: 0
    };
    this.checkIfClicked = this.checkIfClicked.bind(this);
  }
  
  
  checkIfClicked(id) {
    let clickedCard = this.state.cards.filter(card => card.id === id)[0];
    //console.log("the clickedCard ", clickedCard);
    let cardsCopy = this.state.cards.slice();
    if (!clickedCard.clicked) {
      clickedCard.clicked = true;
      //console.log(clickedCard);
      cardsCopy[cardsCopy.findIndex((card) => card.id === id)] = clickedCard;
      console.log(cardsCopy);
      this.setState({
        cards: cardsCopy,
      });
    }
    else {
      cardsCopy.sort(function(a, b){return 0.5 - Math.random()});
      let resetCardsCopy = cardsCopy.map((card) => {
        return {
          id: card.id,
          image: card.image,
          clicked: false,
        }
      });
      console.log(resetCardsCopy);
      this.setState({
        cards: resetCardsCopy,
      });
    } 
    // this.setState({
    //   clicked: true
    // });
    console.log("clicked!  " + id);
  }
  
//   removeFriend = id => {
//   // Filter this.state.friends for friends with an id not equal to the id being removed
//   const friends = this.state.cards.filter(card => card.id !== id);
//   // Set this.state.friends equal to the new friends array
//   this.setState({ cards });
// };
  
  // TODO: if clicked is true, then shuffle cards
  

  //   cards.sort(function(a, b){return 0.5 - Math.random()})

  
  // Map over this.state.cards and render a Card component for each object
  render() {
    return (
      <Wrapper>
        <Header currentScore={this.state.currentScore} topScore={this.state.topScore}/>
        
        {this.state.cards.map(card => (
          <Card
            checkIfClicked={this.checkIfClicked}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
