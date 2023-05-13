import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';


const Square = () => { // Square component is child of Board component.
  return(
    <div style={{
      backgroundColor: "gold",
      margin: 10,
      padding: 20,
    }}>
      Square
    </div>
  )
}

const Board = () => { // Board component is child of Game component.
  return(
    <div style={{
      backgroundColor: "skyblue",
      margin: 10,
      padding: 20,
    }}>
      Board
      < Square />
    </div>

  )
}

const Game  = () => {
return(
  // use css inline styling for Game.
  <div style={{
    backgroundColor: "salmon",
    margin: 10,
    padding: 20,
  }}>
    Game
    <Board />
  </div>

)};

ReactDOM.render(
  <Game />,
  document.getElementById('root'));
