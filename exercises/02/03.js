/** 03 **/
const printUntilTen = (start) => {
  const list = [];
  for (let i = start; i <= 10; i++) list.push(i);
  return list.join(' ');
};

module.exports = printUntilTen;
