import React from 'react';

const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
];

function Gameboard(props) {
    return (
        <ol id="game-board">
        {initialGameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((col, colIndex) => (
                <li key={colIndex}><button>{col}</button></li>
              ))}
            </ol>
          </li>
        ))}
      </ol> 
    );
}

export default Gameboard;