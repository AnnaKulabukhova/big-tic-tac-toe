export const convertMapSize = (size) => {
  const sizeOfString = String(size);
  const numberOfColAndRow = Number(sizeOfString.slice(-1));
  return numberOfColAndRow;
};
