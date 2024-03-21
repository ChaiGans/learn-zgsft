// Exercise 3.2.
function generate_fibonacci(): number[] {
  let fib: number[] = [0, 1];
  while (true) {
    let next_number = fib[fib.length - 1] + fib[fib.length - 2];
    if (next_number > 55) {
      break;
    }
    fib.push(next_number);
  }
  return fib;
}

console.log(generate_fibonacci());
