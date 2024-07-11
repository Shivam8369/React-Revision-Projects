import React, { useState } from "react";
import '../CSS/tictactoe.css'

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xTurn, setTurn] = useState(true);

  const WinningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleClick = (index) => {
    const winner = getWinner(board);
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = xTurn ? "X" : "O";
    setBoard(newBoard);
    setTurn(!xTurn);
  };

  const getWinner = (board) => {
    for (let i = 0; i < WinningPattern.length; i++) {
      const [a, b, c] = WinningPattern[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const resetBoard = () => {
    setTurn(true);
    setBoard(Array(9).fill(null));
  };

  const getStatusMsg = () => {
    const calWinner = getWinner(board);
    if (calWinner) return `Player ${calWinner} is the winner!`;
    if (!board.includes(null)) return "Match is drawn";
    return `Player ${xTurn ? "X" : "O"}'s turn`;
  };

  return (
    <div className="container">
      <div className="message">
        <p>{getStatusMsg()}</p>
        <button className="reset_button" onClick={resetBoard}>
          Reset
        </button>
      </div>

      <div className="board">
        {board.map((b, index) => (
          <button
            className="cell"
            key={index}
            disabled={b != null}
            onClick={() => handleClick(index)}
          >
            {b}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;
