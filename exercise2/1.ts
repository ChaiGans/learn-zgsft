// Exercise 2.1
function greetings(waktu: string): void {
  const [hours, _] = waktu.split(".").map(Number);
  if (hours > 0 && hours < 12) {
    console.log("Selamat Pagi");
  } else if (hours >= 12 && hours < 19) {
    console.log("Selamat Sore");
  } else {
    console.log("Selamat Malam");
  }
}
greetings("11.00");
