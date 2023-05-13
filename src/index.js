import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';




const Board = () => {
  return(
    <div>
      Board
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
  </div>

)};

ReactDOM.render(
  <Game />,
  document.getElementById('root'));
