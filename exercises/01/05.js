/** 05 **/
const array = ['foo', 'bar', 'baz', 'qux', 'origin'];

const emptyArr = (array) => array.filter((el) => el !== el);

// console.log(emptyArr(array));

module.exports = emptyArr;
