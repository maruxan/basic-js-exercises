/** 05 **/
const array = ['foo', 'bar', 'baz', 'qux', 'origin'];

const emptyArr = (array) => array.filter((el) => el !== el);

module.exports = emptyArr;
