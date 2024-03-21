// Exercise 5.2.
function makeObject(keys: string[]): { [key: string]: number } {
  const result: { [key: string]: number } = {};
  keys.forEach((key, index) => {
    result[key] = index + 1;
  });
  return result;
}

console.log(makeObject(["tes", "tes2"]));
