// Exercise 2.3
function pembulatan(angka: number): void {
  const angka_sebelum_koma = Math.floor(angka);
  const angka_setelah_koma = Math.round((angka - angka_sebelum_koma) * 100);
  let angka_return;
  if (angka_setelah_koma <= 30) {
    angka_return = angka_sebelum_koma;
  } else if (angka_setelah_koma > 30 && angka_setelah_koma < 70) {
    angka_return = angka_sebelum_koma + 0.5;
  } else {
    angka_return = angka_sebelum_koma + 1;
  }
  console.log(`Hasil pembulatan ${angka} adalah ${angka_return}`);
}

pembulatan(3.5);
pembulatan(3.8);
pembulatan(3.2);
