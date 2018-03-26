# React memory card game 

This is a memory game built with React and has components for the header, card, page wrapper, and footer. 

Play at https://rmglennon.github.io/react-memory-game/.

## Play and score points

The object of the game is to click as many cards as you can without duplicating them. Each time you click, the cards will shuffle into a new position.

The current score is the most clicked this round, and resets to 0 when duplicating clicks. The top score is the most cards since you started paying.

![Video of clicking cards](/public/img/game-play-video.gif)

## Local set up for development purposes

Install [Yarn](https://yarnpkg.com/en/docs/install). In a terminal window, navigate into the folder where you downloaded this app and type `yarn install`. To start the app, type `yarn start` and open your browser to `localhost:3000`.

## Build the React page

`App.js` pulls together all the components. The page is rendered using

```js
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
```

## Technology

- React
- HTML, CSS, Bootstrap
- JavaScript

_Note: Images featuring Disney characters are the property of their respective owners._