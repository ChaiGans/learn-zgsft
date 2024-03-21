function filterLulus(
  arraySiswa: { nama: string; skor: number }[]
): { nama: string; skor: number }[] {
  return arraySiswa.filter((value) => value.skor > 75);
}

console.log(
  filterLulus([
    { nama: "Rojali", skor: 80 },
    { nama: "Robita", skor: 40 },
  ])
);
