/** 04 **/
const arr1 = [10, '20', 30, '40', 50];

const parseToNumber = (el) => (typeof el === 'Number' ? el : Number(el));
const mapToNumbers = (array) => array.map(parseToNumber);

// console.log(mapToNumbers(arr1));

module.exports = mapToNumbers;
