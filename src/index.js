import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';


const Square = (props) => { // Square component is child of Board component.
  // add props as argument.
  // const [value, setValue] = useState(null); //In our square component,
  // we no longer need local state for the value,  since it is now being passed
  return(
     // replace inline style with className='square'
     // replace div with button for event listening.

    <button
    className='square'
    // onClick={()=>} (`square ${props.value} clicked`)} // replace with setValue setter .
    // setValue ('X') also setValue() Unclick Handler is no longer applicable.
    //Past the unclick event prop in as its handler.
// Now, the handle click event handler at the index of the square will be called when the button is clicked.

      // onClick={() => {}}>
        onClick={props.onClickEvent}>
      {/* /* Square / replace with X // call Board (parent) component prop value here as Js function call. */}
      {/* {props.value} // take out props. add props again for state lifting */}
      {/* Now, let's show the value as a property of the passed down props object. */}
      {props.value}
      {/* X replace with prop. */}

    </button>

  )
}

const Board = () => { // Board component is child of Game component.
  // const initialSquares = [
  //   null, null, null,
  //   null, null, null,
  //   null, null, null,
  // ]; replace with const initialSquares = Array(9).fill(null);
  const initialSquares = Array(9).fill(null);
  const[squares, setSquares] = useState(initialSquares); // for state lifitng.we use initialSquares object so we need to define it.
  const[xIsNext, setXIsNext]  = useState(true);


  const handleClick = (i) => {
      // alert (`square ${i} clicked`);
      // 1. make a copy of the square state array.
      const newSquares = [...squares];
      // 2.mutate, the copy setting is index element t0 X.
      newSquares[i] = xIsNext ? "X" : "O"; // to show player X or O
      //3.call the setSquares function with the mutated copy.
      setSquares(newSquares);
      setXIsNext(!xIsNext);

  };

const renderSquare = (i) => { // add index i for square selection
  return (
    // <Square value={i}/> // add prop value here for Square(child) component. add index(i) for individual number.
    <Square value={squares[i]}
    onClickEvent ={()=> handleClick(i)}

    /> // delete prop.
  );
};

  const status = `Next Player ${xIsNext ? 'X' : 'O' }`;
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
