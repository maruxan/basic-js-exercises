const lista = [4, 5, 1, 3, 6, 7, 9, 0, 3];

/**
 * Total de numeros pares e impares
 */
const pares = (arr) => {
  if (arr.length === 0) return 0;
  if (arr[0] % 2 === 0) return pares(arr.slice(1)) + 1;
  return pares(arr.slice(1));
};

// console.log(pares(lista));

const impares = (arr) => {
  if (arr.length === 0) return 0;
  if (arr[0] % 2 !== 0) return impares(arr.slice(1)) + 1;
  return impares(arr.slice(1));
};

// console.log(impares(lista));

// Alternativa para contar ambos con contadores externos
let par = 0;
let impar = 0;
const countParesImpares = (arr) => {
  if (arr.length === 0) return;
  arr[0] % 2 === 0 ? par++ : impar++;
  return countParesImpares(arr.slice(1));
};

// countParesImpares(lista);
// console.log('Pares: ', par);
// console.log('Impares: ', impar);

/**
 * Buscar si existe un numero n en el array
 */
const find = (arr, el) => {
  if (arr.length === 0) return null;
  if (arr[0] === el) return el;
  return find(arr.slice(1), el);
};

// console.log(find(lista, 3));

/**
 * Total de veces del numero 3
 */
const count = (arr, el) => {
  if (arr.length === 0) return 0;
  if (arr[0] === el) return count(arr.slice(1), el) + 1;
  return count(arr.slice(1), el);
};

// console.log(count(lista, 3));