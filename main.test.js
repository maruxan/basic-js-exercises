const { expect } = require('@jest/globals');

const {
  capitalizeFirst,
  capitalizeLast,
  capitalizeMiddleIfOdd,
  findBaz,
  emptyArr,
} = require('./exercises/01/index');
const {
  deleteVowels,
  vowelsTo1,
  printUntilTen,
  mapToNumbers,
  deleteDuplicates,
  totalOdds,
  kebabCaseArray,
} = require('./exercises/02/index');

describe('First Exercises', () => {
  /** 01 **/
  test('Upper the first letter', () => {
    expect(capitalizeFirst('str')).toBe('Str');
  });

  /** 02 **/
  test('Upper the last letter', () => {
    expect(capitalizeLast('str')).toBe('stR');
  });

  /** 03 **/
  test('Upper the middle letter', () => {
    expect(capitalizeMiddleIfOdd('javascripts')).toBe('javasCripts');
  });

  /** 04 **/
  test('Find the element baz', () => {
    expect(findBaz(['foo', 'bar', 'baz', 'qux', 'origin'])).toBe('baz');
  });

  /** 05 **/
  test('Empty array', () => {
    expect(emptyArr(['foo', 'bar', 'baz', 'qux', 'origin'])).toHaveLength(0);
  });
});

describe('Second Exercises', () => {
  /** 01 **/
  test('Delete the vowels', () => {
    expect(deleteVowels('origin')).toBe('rgn');
  });

  /** 02 **/
  test('Replace the vowels with 1', () => {
    expect(vowelsTo1('origin')).toBe('1r1g1n');
  });

  /** 03 **/
  test('Print from start to 10', () => {
    expect(printUntilTen(2)).toBe('2 3 4 5 6 7 8 9 10');
  });

  /** 04 **/
  test('Parse elements that are not numbers to Number', () => {
    expect(mapToNumbers([10, '20', 30, '40', 50])).toStrictEqual([
      10, 20, 30, 40, 50,
    ]);
  });

  /** 05 **/
  test('Delete duplicated elements', () => {
    expect(
      deleteDuplicates([2, 4, 7, 1, 2, 'foo', 7, 'bar', 'qux', 3, 'foo'])
    ).toStrictEqual([2, 4, 7, 1, 'foo', 'bar', 'qux', 3]);
  });

  /** 06 **/
  test('Print total amount of odd numbers', () => {
    expect(totalOdds([1, 3, 4, 2, 6, 7, 9, 1, 8])).toBe(5);
  });

  /** 07 **/
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
});
