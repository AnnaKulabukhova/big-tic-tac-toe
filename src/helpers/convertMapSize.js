export const convertMapSize = (size) => {
  const numberOfRow = Number(size.slice(0, 1));
  const sizeOfMap = {};
  sizeOfMap.sizeX = numberOfRow;

  const numberOfCol = Number(size.slice(-1));
  sizeOfMap.sizeY = numberOfCol;
  return sizeOfMap;
};
