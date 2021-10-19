/** 07 **/
const str2 = 'hola mundo desde javascript';

/**
 * If separator in split is a regular expression that contains capturing parentheses (``), matched results are included in the array.
 * @param {string} string
 * @returns
 * --> 'hola mundo desde javascript'
 * <-- ['hola', '-', 'mundo', '-', 'desde', '-', 'javascript']
 */
const kebabCaseArray = (string) => string.replace(/ /g, '-').split(/(-)/);

module.exports = kebabCaseArray;
