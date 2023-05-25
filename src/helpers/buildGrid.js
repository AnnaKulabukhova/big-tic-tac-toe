export function buildGrid(sizeX, sizeY) {
  const result = [];
  for (let outerCount = 0; outerCount < sizeY; outerCount++) {
    result[outerCount] = [];
    for (let innerCount = 0; innerCount < sizeX; innerCount++) {
      result[outerCount][innerCount] = null;
    }
  }
  return result;
}
