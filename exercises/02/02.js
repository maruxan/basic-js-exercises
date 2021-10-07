const str1 = 'origin';

/** 01 **/
const deleteVowels = (string) => string.replace(/[aeiou]/g, '');
console.log(deleteVowels(str1));

/** 02 **/
const vowelsTo1 = (string) => string.replace(/[aeiou]/g, '1');
console.log(vowelsTo1(str1));

/** 03 **/
const printUntilTen = (start) => {
  const list = [];
  for (let i = start; i <= 10; i++) list.push(i);
  return list.join(' ');
};

console.log(printUntilTen(1));

/** 04 **/
const arr1 = [10, '20', 30, '40', 50];

const parseToNumber = (el) => (typeof el === 'Number' ? el : Number(el));
const mapToNumbers = (array) => array.map(parseToNumber);

console.log(mapToNumbers(arr1));

/** 05 **/
const arr2 = [2, 4, 7, 1, 2, 'foo', 7, 'bar', 'qux', 3, 'foo'];

const deleteDuplicates = (array) =>
  array.filter((el, i, arr) => el === el && arr.indexOf(el) === i);

console.log(deleteDuplicates(arr2));

/** 06 **/
const arr3 = [1, 3, 4, 2, 6, 7, 9, 1, 8];

const isOdd = (num) => num % 2 !== 0;
const totalOdds = (array) =>
  array.reduce((sum, num) => (isOdd(num) ? sum + 1 : sum), 0);

console.log(totalOdds(arr3));

/** 07 **/
const str2 = 'hola mundo desde javascript';

/**
 * If separator in split is a regular expression that contains capturing parentheses (``), matched results are included in the array.
 * @param {*} string
 * @returns
 */
const kebabCaseArray = (string) => string.replace(/ /g, '-').split(/(-)/);

console.log(kebabCaseArray(str2));

module.exports = {
  deleteVowels,
  vowelsTo1,
  printUntilTen,
  mapToNumbers,
  deleteDuplicates,
  totalOdds,
  kebabCaseArray,
};
