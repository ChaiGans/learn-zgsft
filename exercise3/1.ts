// Exercise 3.1.
function multiply(angka: number[]): void {
  let sum = 0;
  for (let i = 0; i < angka.length; i++) {
    sum += angka[i];
    angka[i] *= 2;
  }
  console.log(
    `Jumlah ${sum} dikali 2 = ${angka.reduce((prec, curr) => curr + prec)}`
  );
}

multiply([1, 23, 4, 5]);
