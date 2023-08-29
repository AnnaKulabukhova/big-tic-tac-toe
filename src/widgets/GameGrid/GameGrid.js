import { useSelector } from 'react-redux';
import { Square } from '../../entities/ui/Square/Square';
import {
  FIRST_PLAYER_SYMBOL,
  SECOND_PLAYER_SYMBOL,
} from '../../entities/gameSlice/constants/game';
import { playersQueue } from '../../entities/gameSlice/constants/playersQueue';
import { calculateWinner } from '../../features/game/calculateWinner';
import styles from './GameGrid.module.css';

export const GameGrid = ({
  endGame,
  activePlayer,
  setActivePlayer,
  qtySymbols,
  setWinner,
  grid,
  setGrid,
  isFirstPlayer,
  setIsFirstPlayer,
}) => {
  const players = useSelector((state) => state.players);

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
