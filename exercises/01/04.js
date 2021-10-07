/** 04 **/
const array = ['foo', 'bar', 'baz', 'qux', 'origin'];

const findBaz = (array) => array.find((el) => el === 'baz');

// console.log(findBaz(array));

module.exports = findBaz;
