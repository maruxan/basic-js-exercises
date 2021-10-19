const { executeArrayFnOnString } = require('./util');

/** 01 **/
const cadena = 'javascripts';

const firstToUpper = (array) =>
  array.map((l, i) => (i === 0 ? l.toUpperCase() : l));

const capitalizeFirst = (string) =>
  executeArrayFnOnString(string, firstToUpper);

module.exports = capitalizeFirst;
