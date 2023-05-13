import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';


const Square = () => { // Square component is child of Board component.
  return(
    // <div style={{
    //   backgroundColor: "gold",
    //   margin: 10,
    //   padding: 20,
    // }}> // replace inline style with className='square'
    <div className='square'>
      {/* Square / replace with X */}
      X
    </div>

  )
}

const Board = () => { // Board component is child of Game component.

const renderSquare = () => {
  return (
    <Square />
  );
};

  return(
    <div style={{
      backgroundColor: "skyblue",
      margin: 10,
      padding: 20,
    }}>
    Board
    <div className='board-row'>
      {renderSquare()}{renderSquare()}{renderSquare()}
    </div>
    <div className='board-row'>
    {renderSquare()}{renderSquare()}{renderSquare()}
    </div>
    <div className='board-row'>
    {renderSquare()}{renderSquare()}{renderSquare()}
    </div>



    </div>

  )
}

const Game  = () => {
return(
  // use css inline styling for Game.
  // <div style={{
  //   backgroundColor: "salmon",
  //   margin: 10,
  //   padding: 20,
  // }}>
  <div className='game'>
    Game
    <Board />
  </div>

)};

ReactDOM.render(
  <Game />,
  document.getElementById('root'));
