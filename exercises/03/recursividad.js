/**
 * Total de numeros pares e impares
 */
const pares = (arr) => {
  if (arr.length === 0) return 0;
  if (arr[0] % 2 === 0) return pares(arr.slice(1)) + 1;
  return pares(arr.slice(1));
};

const impares = (arr) => {
  if (arr.length === 0) return 0;
  if (arr[0] % 2 !== 0) return impares(arr.slice(1)) + 1;
  return impares(arr.slice(1));
};

/* Alternativa para contar ambos con contadores externos */
const logParesImpares = (arr) => {
  let cantPares = 0;
  let cantImpares = 0;

  const countParesImpares = (arr) => {
    if (arr.length === 0) return;
    arr[0] % 2 === 0 ? cantPares++ : cantImpares++;
    return countParesImpares(arr.slice(1));
  };

  countParesImpares(arr);
  return `Pares: ${cantPares} - Impares: ${cantImpares}`;
};

/**
 * Buscar si existe un numero n en el array
 */
const find = (arr, el) => {
  if (arr.length === 0) return null;
  if (arr[0] === el) return el;
  return find(arr.slice(1), el);
};

/**
 * Total de veces del numero 3
 */
const count = (arr, el) => {
  if (arr.length === 0) return 0;
  if (arr[0] === el) return count(arr.slice(1), el) + 1;
  return count(arr.slice(1), el);
};

module.exports = {
  impares,
  pares,
  logParesImpares,
  find,
  count,
};
