import { useState } from "react";

const TicToe = () => {
  return (
    <div>
      <Board />
    </div>
  );
};

export default TicToe;

// Square
const Square = (props) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

// Board
const Board = () => {
  //board state
  const [boardSquares, setBoardSquare] = useState(Array(9).fill(null));

  // Turn State
  const [xIsNext, setXIsNext] = useState(true);

  // Handleclick
  const handleClick = (index) => {
    // copy of array
    const squares = [...boardSquares];

    // if the index of array is filled return
    if (calculateWinner(boardSquares) || squares[index]) return;

    // add X or O
    squares[index] = xIsNext ? "X" : "O";

    // calculate next turn
    // set state of board
    setBoardSquare(squares);
    // set state of next turn
    setXIsNext(!xIsNext);
  };

  // Create a render square function
  const renderSquare = (index) => {
    return (
      <Square value={boardSquares[index]} onClick={() => handleClick(index)} />
    );
  };

  // Initialize status
  let status;
  const winner = calculateWinner(boardSquares);
  status = winner
    ? `Winner is ${winner}`
    : `Next-Player ${xIsNext ? "X" : "O"}`;

  return (
    <div>
      <div>{status}</div>
      <div>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

// Calculate Winner
const calculateWinner = (squares) => {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
  ];

  for (let i = 0; i < winningLines.length; i++) {
    const [a, b, c] = winningLines[i];

    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};
