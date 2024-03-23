function letterConverter(letter: string): string {
  switch (letter) {
    case "a":
      return "b";
    case "i":
      return "j";
    case "u":
      return "v";
    case "V":
      return "U";
    case "v":
      return "u";
    case "e":
      return "f";
    case "o":
      return "p";
    default:
      return letter;
  }
}

function wordConverter(word: string): string {
  let newWord: string = "";

  for (let i = 0; i < word.length; i++) {
    newWord += letterConverter(word[i]);
  }

  return newWord;
}

function isLowerCase(str: string) {
  return str === str.toLowerCase() && str !== str.toUpperCase();
}

function passwordGenerator(password: string): string {
  let wordEncryptedReversed = wordConverter(password).split("").reverse();
  let newEncrypted = "";
  wordEncryptedReversed.map((letter) => {
    if (isLowerCase(letter)) {
      newEncrypted += letter.toUpperCase();
    } else {
      newEncrypted += letter.toLowerCase();
    }
  })
  return newEncrypted.concat().replace(" ", "");
}

console.log(passwordGenerator("Vika Vitaloka"));
// BKPLBTJuBKJu.