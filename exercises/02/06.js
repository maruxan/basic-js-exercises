/** 06 **/
const arr3 = [1, 3, 4, 2, 6, 7, 9, 1, 8];

const isOdd = (num) => num % 2 !== 0;
const totalOdds = (array) =>
  array.reduce((sum, num) => (isOdd(num) ? sum + 1 : sum), 0);

module.exports = totalOdds;
