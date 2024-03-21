// Practice 1 Object
function makeObjectMahasiswa(parameter : [string, string, string][]) : {nama: string, gender: string, tanggal_lahir: string}[] {
    let newArray: { nama: string; gender: string; tanggal_lahir: string }[] = [];
    for (let i = 0; i < parameter.length; i++) {
        newArray.push({nama : parameter[i][0], gender: parameter[i][1], tanggal_lahir: parameter[i][2]});
    }
    return newArray;
}

console.log(
  makeObjectMahasiswa([
    ["Elbert Chailes", "Pria", "28 Jan"],
    ["Elbert Chailes", "Pria", "28 Jan"],
  ])
);

// Practice 2 Object
function makeObjectRute(parameter : [string, string, string][]) : {penumpang: string, naikDari: string, sampai: string, ongkos: number}[] {
    let newArray: {
      penumpang: string;
      naikDari: string;
      sampai: string;
      ongkos: number;
    }[] = [];
    const rute_valid: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    for (let i = 0; i < parameter.length; i++) {
        newArray.push({
            penumpang: parameter[i][0],
            naikDari: parameter[i][1],
            sampai: parameter[i][2],
            ongkos: (rute_valid.indexOf(parameter[i][2]) - rute_valid.indexOf(parameter[i][1]))*3000
        })
    }
    return newArray;
}
console.log(makeObjectRute([
  ["Elbert Chailes", "A", "B"],
  ["Elbert Chailes", "A", "J"],
]));