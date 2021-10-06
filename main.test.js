const { expect } = require('@jest/globals');

const {
  capitalizeFirst,
  capitalizeLast,
  capitalizeMiddleIfOdd,
  findBaz,
  emptyArr,
  array,
} = require('./01');
const {
  deleteVowels,
  vowelsTo1,
  printUntilTen,
  mapToNumbers,
  deleteDuplicates,
  totalOdds,
  kebabCaseArray,
} = require('./02');

test('Upper the first letter', () => {
  expect(capitalizeFirst('str')).toBe('Str');
});

test('Upper the last letter', () => {
  expect(capitalizeLast('str')).toBe('stR');
});

test('Upper the middle letter', () => {
  expect(capitalizeMiddleIfOdd('javascripts')).toBe('javasCripts');
});

test('Find the element baz', () => {
  expect(findBaz(array)).toBe('baz');
});

test('Empty array', () => {
  expect(emptyArr(array)).toHaveLength(0);
});

test('Delete the vowels', () => {
  expect(deleteVowels('origin')).toBe('rgn');
});

test('Replace the vowels with 1', () => {
  expect(vowelsTo1('origin')).toBe('1r1g1n');
});

test('Print from start to 10', () => {
  expect(printUntilTen(2)).toBe('2 3 4 5 6 7 8 9 10');
});

test('Parse elements that are not numbers to Number', () => {
  expect(mapToNumbers([10, '20', 30, '40', 50])).toStrictEqual([
    10, 20, 30, 40, 50,
  ]);
});

test('Delete duplicated elements', () => {
  expect(
    deleteDuplicates([2, 4, 7, 1, 2, 'foo', 7, 'bar', 'qux', 3, 'foo'])
  ).toStrictEqual([2, 4, 7, 1, 'foo', 'bar', 'qux', 3]);
});

test('Print total amount of odd numbers', () => {
  expect(totalOdds([1, 3, 4, 2, 6, 7, 9, 1, 8])).toBe(5);
});

test('Replace spaces with "-" and split words into an array', () => {
  expect(kebabCaseArray('hola mundo desde javascript')).toStrictEqual([
    'hola',
    '-',
    'mundo',
    '-',
    'desde',
    '-',
    'javascript',
  ]);
});
