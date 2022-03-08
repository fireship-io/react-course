// Combine and shuffle two arrays
const shuffleArray = (arr) => {
  return [...arr, ...arr]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }));
};

export default shuffleArray;
