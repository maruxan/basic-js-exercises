const { executeArrayFnOnString, hasOddLetters } = require('./util');

/** 03 **/
const cadena = 'javascripts';

const middleToUpper = (array) =>
  array.map((l, i) =>
    i === Math.floor(array.length / 2) ? l.toUpperCase() : l
  );

const capitalizeMiddleIfOdd = (string) =>
  hasOddLetters(string)
    ? executeArrayFnOnString(string, middleToUpper)
    : string;

// console.log(capitalizeMiddleIfOdd(cadena));

module.exports = capitalizeMiddleIfOdd;
