import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';


const Square = (props) => { // Square component is child of Board component.
  // add props as argument.
  return(
    // <div style={{
    //   backgroundColor: "gold",
    //   margin: 10,
    //   padding: 20,
    // }}> // replace inline style with className='square'
    <div className='square'>
      {/* /* Square / replace with X // call Board (parent) component prop value here as Js function call. */}
      {props.value}
      {/* X replace with prop. */}
    </div>

  )
}

const Board = () => { // Board component is child of Game component.

const renderSquare = (i) => {
  return (
    <Square value={i}/> // add prop value here for Square(child) component.
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
      {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
    </div>
    <div className='board-row'>
    {renderSquare(3)}{renderSquare(4)}{renderSquare(5)}
    </div>
    <div className='board-row'>
    {renderSquare(6)}{renderSquare(7)}{renderSquare(8)}
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
