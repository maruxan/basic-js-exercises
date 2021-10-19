/** 05 **/
const arr2 = [2, 4, 7, 1, 2, 'foo', 7, 'bar', 'qux', 3, 'foo'];

const deleteDuplicates = (array) =>
  array.filter((el, i, arr) => el === el && arr.indexOf(el) === i);

module.exports = deleteDuplicates;
