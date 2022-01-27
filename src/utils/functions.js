export const getRandomeIndexFromArray = (array) => {
  let randomIndex = Math.floor(Math.random() * array.length);
  let index = array[randomIndex];
  array.splice(randomIndex, 1);
  return { index, array };
};
