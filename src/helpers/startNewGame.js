import { FIRST_PLAYER } from '../constants/players';
import { buildGrid } from './buildGrid';

export const startNewGame = (
  setGrid,
  setIsFirstPlayer,
  setActivePlayer,
  sizeX,
  sizeY
) => {
  const newGrid = buildGrid(sizeX, sizeY);
  setGrid(newGrid);
  setIsFirstPlayer(true);
  setActivePlayer(FIRST_PLAYER);
};
