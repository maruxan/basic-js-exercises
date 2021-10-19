const { executeArrayFnOnString } = require('./util');

/** 02 **/
const cadena = 'javascripts';

const lastToUpper = (array) =>
  array.map((l, i) => (i === array.length - 1 ? l.toUpperCase() : l));

const capitalizeLast = (string) => executeArrayFnOnString(string, lastToUpper);

module.exports = capitalizeLast;
