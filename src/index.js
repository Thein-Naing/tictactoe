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

      onClick={() => {}}>
      {/* /* Square / replace with X // call Board (parent) component prop value here as Js function call. */}
      {/* {props.value} // take out props. add props again for state lifting */}
      {/* Now, let's show the value as a property of the passed down props object. */}
      {props.value}
      {/* X replace with prop. */}

    </button>

  )
}

const Board = () => { // Board component is child of Game component.
  const initialSquares = [
    null, null, null,
    null, null, null,
    null, null, null,
  ];
  const[squares, setSquares] = useState(initialSquares); // for state lifitng.we use initialSquares object so we need to define it.
  const handleClick = (i) => {

      alert (`square ${i} clicked`);

  };

const renderSquare = (i) => { // add index i for square selection
  return (
    // <Square value={i}/> // add prop value here for Square(child) component. add index(i) for individual number.
    <Square value={squares[i]}
    onClickEvent ={()=> handleClick(i)}

    /> // delete prop.
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
