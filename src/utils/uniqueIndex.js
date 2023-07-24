const uniqueIndex = (min, max, count) => {
  const uniqueNumbers = new Set();
  while (uniqueNumbers.size < count) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    uniqueNumbers.add(randomNum);
  }
  return Array.from(uniqueNumbers);
};

export default uniqueIndex;
