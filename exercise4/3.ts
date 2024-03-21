// Exercise 4.3.
function findModus(array: number[]): number {
  const maxElement = Math.max(...array);

  let newArray: number[] = new Array(maxElement + 1).fill(0);

  for (let x of array) {
    newArray[x] += 1;
  }

  let index_max = 0;
  for (let i = 1; i < newArray.length; i++) {
    if (newArray[index_max] < newArray[i]) {
      index_max = i;
    }
  }
  return index_max;
}

console.log(findModus([1, 1, 2, 3, 4, 4]));
