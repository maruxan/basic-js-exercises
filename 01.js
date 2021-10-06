/**********************
 * INPUTS
 **********************/
const array = ['foo', 'bar', 'baz', 'qux', 'origin'];
const cadena = 'javascripts';

/**********************
 * PIPELINES
 **********************/

/**
 * Compose functions
 * @param  {...any} fns
 * @returns
 */
const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), x);

/**
 * Converts a strign to array, executes the passed function, then converts back to string
 * @param {*} string
 * @param  {...any} fns
 * @returns processed string
 */
const executeArrayFnOnString = (string, ...fns) =>
  pipe(stringToArray, ...fns, joinArray)(string);

/**********************
 * UTILITY FNS
 **********************/

const stringToArray = (string) => Array.from(string);
const joinArray = (array) => array.join('');
const hasOddLetters = (string) => string.length % 2 !== 0;

/**********************
 * EXERCISES
 **********************/

/** 01 **/
const firstToUpper = (array) =>
  array.map((l, i) => (i === 0 ? l.toUpperCase() : l));

const capitalizeFirst = (string) =>
  executeArrayFnOnString(string, firstToUpper);

console.log(capitalizeFirst(cadena));

/** 02 **/
const lastToUpper = (array) =>
  array.map((l, i) => (i === array.length - 1 ? l.toUpperCase() : l));

const capitalizeLast = (string) => executeArrayFnOnString(string, lastToUpper);

console.log(capitalizeLast(cadena));

/** 03 **/
const middleToUpper = (array) =>
  array.map((l, i) =>
    i === Math.floor(array.length / 2) ? l.toUpperCase() : l
  );

const capitalizeMiddleIfOdd = (string) =>
  hasOddLetters(string)
    ? executeArrayFnOnString(string, middleToUpper)
    : string;

console.log(capitalizeMiddleIfOdd(cadena));

/** 04 **/
const findBaz = (array) => array.find((el) => el === 'baz');

console.log(findBaz(array));

/** 05 **/
const emptyArr = (array) => array.filter((el) => el !== el);

console.log(emptyArr(array));

/**********************
 * EXPORTS
 **********************/

module.exports = {
  capitalizeFirst,
  capitalizeLast,
  capitalizeMiddleIfOdd,
  findBaz,
  emptyArr,
  array,
};
