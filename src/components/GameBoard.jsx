import React,{useState} from 'react';


const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
];


function Gameboard(props) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    const handleSelectSquare = (rowIndex, colIndex) => {
        setGameBoard((prevGameBoard) => {
            const updateBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
            updateBoard[rowIndex][colIndex] = 'X';
            return updateBoard;
        })

    }

    return (
        <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}><button onClick={()=> handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button></li>
              ))}
            </ol>
          </li>
        ))}
      </ol> 
    );
}

export default Gameboard;