// Practice 1 Array in Object
function makeArraySiswa(
  parameter: { name: string; score: number; class: string }[]
): { [nameKelas: string]: { name: string; score: number }[] } {
  const result: { [nameKelas: string]: { name: string; score: number }[] } = {};
  parameter.forEach((siswa) => {
    const { name, score, class: className } = siswa;
    if (!result[className]) {
      result[className] = [];
    }
    result[className].push({ name, score });
  });
  return result;
}

const students = [
  { name: "Alice", score: 90, class: "A" },
  { name: "Bob", score: 85, class: "B" },
  { name: "Charlie", score: 88, class: "A" },
  { name: "David", score: 32, class: "B" },
];

console.log(makeArraySiswa(students));

// Practice 2 Array in Object
function makeArrayNilai(
  parameter: { name: string; score: number; class: string }[]
): { [nameKelas: string]: { name: string; score: number }[] } {
  const result: { [nameKelas: string]: { name: string; score: number }[] } = {};
  parameter.forEach((siswa) => {
    const { name, score, class: className } = siswa;
    let status: string;
    if (score > 75) {
      status = "lulus";
    } else {
      status = "gagal";
    }
    if (!result[status]) {
      result[status] = [];
    }
    result[status].push({ name, score });
  });
  return result;
}

console.log(makeArrayNilai(students));
