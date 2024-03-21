// Exercise 2.2
function countLetter(text: string): void {
  let letterCount = text.split("").filter((char) => char != " ").length;
  console.log(`Jumlah huruf adalah ${letterCount} karakter`);
}
countLetter("Hello Word");
