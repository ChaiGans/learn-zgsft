// Exercise 4.2.
function sumArray(array: number[]): number {
  return array.reduce((prec, curr) => prec + curr);
}

console.log(sumArray([0]));
console.log(sumArray([0, 1, 2, 3, 4]));
