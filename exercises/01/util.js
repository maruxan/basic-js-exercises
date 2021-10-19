/**********************
 * FUNCTION HELPERS
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
 * @param {string} string
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
 * EXPORTS
 **********************/
module.exports = {
  pipe,
  executeArrayFnOnString,
  stringToArray,
  joinArray,
  hasOddLetters,
};
