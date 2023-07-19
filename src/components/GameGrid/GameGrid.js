import { useContext } from 'react';
import { Square } from '../Square/Square';
import { PlayersContext } from '../Context/PlayersContext';
import {
  FIRST_PLAYER_SYMBOL,
  SECOND_PLAYER_SYMBOL,
} from '../../constants/game';
import { playersQueue } from '../../constants/playersQueue';
import { calculateWinner } from '../../helpers/calculateWinner';
import styles from './GameGrid.module.css';

export const GameGrid = ({
  qtySymbols,
  endGame,
  activePlayer,
  setActivePlayer,
  setWinner,
  grid,
  setGrid,
  isFirstPlayer,
  setIsFirstPlayer,
}) => {
  const players = useContext(PlayersContext);

  const handleClick = (rowIndex, cellIndex) => {
    if (grid[rowIndex][cellIndex]) {
      return;
    }

    const updatedGrid = [...grid];
    const row = [...grid[rowIndex]];

    const newSymbol = isFirstPlayer
      ? FIRST_PLAYER_SYMBOL
      : SECOND_PLAYER_SYMBOL;

    row[cellIndex] = newSymbol;
    updatedGrid[rowIndex] = row;

    setGrid(updatedGrid);

    const winner = calculateWinner(
      updatedGrid,
      rowIndex,
      cellIndex,
      newSymbol,
      qtySymbols
    );

    if (winner) {
      setWinner(players[activePlayer].name);
      endGame();
      return;
    }
    setIsFirstPlayer((value) => !value);

    setActivePlayer((value) => playersQueue[value].next);
  };

  return (
    <div className={styles.wrapper}>
      {grid.map((row, rowIndex) => (
        <div className={styles.row} key={`${rowIndex}`}>
          {row.map((_, cellIndex) => (
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
