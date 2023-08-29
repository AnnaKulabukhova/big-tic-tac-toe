import { lines } from '../../entities/gameSlice/constants/lines';
import { convertQtySymbols } from '../../features/convert/convertQtySymbols';

export const calculateWinner = (
  grid,
  rowIndex,
  cellIndex,
  symbol,
  qtySymbols
) => {
  const initialCount = 1;
  let count = initialCount;
  let currentY = rowIndex;
  let currentX = cellIndex;
  const qtySymbolsOfNumbers = convertQtySymbols(qtySymbols);

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

    if (count < qtySymbolsOfNumbers) {
      count = initialCount;
    }

    return count;
  });

  if (count === qtySymbolsOfNumbers) {
    return true;
  } else {
    return false;
  }
};
