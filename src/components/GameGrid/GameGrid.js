import { useState } from 'react';
import { buildGrid } from '../../helpers/buildGrid';
import { calculateWinner } from '../../helpers/calculateWinner';
import { Square } from '../Square/Square';
import {
  FIRST_PLAYER_SYMBOL,
  SECOND_PLAYER_SYMBOL,
} from '../../constants/game';
import styles from './GameGrid.module.css';

export const GameGrid = ({ sizeX, sizeY, endGame, newGame }) => {
  const [grid, setGrid] = useState(() => buildGrid(sizeX, sizeY));
  const [isFirstPlayer, setIsFirstPlayer] = useState(true);

  if (newGame) {
    const newGrid = buildGrid(sizeX, sizeY);
    setGrid(newGrid);
    console.log(newGrid);
  }

  const handleClick = (rowIndex, cellIndex) => {
    const newGrid = [...grid];
    const row = [...grid[rowIndex]];
    if (row[cellIndex]) {
      return;
    }
    row[cellIndex] = isFirstPlayer ? FIRST_PLAYER_SYMBOL : SECOND_PLAYER_SYMBOL;
    newGrid[rowIndex] = row;
    setGrid(newGrid);
    const newSymbol = newGrid[rowIndex][cellIndex];
    const winner = calculateWinner(newGrid, rowIndex, cellIndex, newSymbol);

    if (winner) {
      endGame();
      return;
    }
    setIsFirstPlayer((value) => !value);
  };

  return (
    <div className={styles.wrapper}>
      {grid.map((row, rowIndex) => (
        <div className={styles.row} key={`${rowIndex}`}>
          {row.map((cell, cellIndex) => (
            <Square
              key={`${rowIndex} ${cellIndex}`}
              value={grid[rowIndex][cellIndex]}
              onSquareClick={() => handleClick(rowIndex, cellIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
