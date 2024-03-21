// Exercise 3.3.
function numberChecker(angka: number): string {
  if (angka < 0) {
    return "negative";
  } else if (angka > 0) {
    return "positive";
  } else {
    return "neutral";
  }
}

console.log(numberChecker(3));
console.log(numberChecker(-1));
console.log(numberChecker(0));
