import { lines } from '../constants/lines';

export const calculateWinner = (grid, rowIndex, cellIndex, symbol) => {
  const initialCount = 1;
  let count = initialCount;
  let currentY = rowIndex;
  let currentX = cellIndex;

  lines.map((line) => {
    line.map((trajectory) => {
      currentX += trajectory.x;
      currentY += trajectory.y;
      while (
        currentY >= 0 &&
        currentX >= 0 &&
        currentY <= grid.length - 1 &&
        currentX <= grid[rowIndex].length - 1 &&
        symbol === grid[currentY][currentX]
      ) {
        count++;
        currentX += trajectory.x;
        currentY += trajectory.y;
      }
      currentY = rowIndex;
      currentX = cellIndex;
      return count;
    });

    if (count < 5) {
      count = initialCount;
    }

    return count;
  });

  if (count === 5) {
    return true;
  } else {
    return false;
  }
};
