// Exercise 5.3.
function magicAlgo(parameter: {
  minus: number;
  times: number;
  modulus: number;
}): number {
  return ((28 - parameter.minus) * parameter.times) % parameter.modulus;
}

console.log(magicAlgo({ minus: 5, times: 3, modulus: 2 }));
