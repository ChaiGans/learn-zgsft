// Exercise 4.1.
function findMedian(array: number[]): number {
  if (array.length == 1) {
    return array[0];
  } else {
    array.sort((a, b) => a - b);
    if (array.length % 2 != 0) {
      return array[Math.floor(array.length / 2)];
    } else {
      return (array[array.length / 2] + array[array.length / 2 - 1]) / 2;
    }
  }
}

console.log(findMedian([3, 2, 1, 4, 10]));
console.log(findMedian([3, 2, 1, 4]));
console.log(findMedian([3]));
console.log(findMedian([]));
