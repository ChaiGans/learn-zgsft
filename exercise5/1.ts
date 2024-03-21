// Exercise 5.1.
function acceptObject(object: {
  nama: string;
  umur: number;
  tanggal_lahir: string;
  alamat: string;
}) {
  console.log(
    `Nama saya ${object.nama}, berumur ${object.umur}, tanggal lahir saya ${object.tanggal_lahir}. Tempat tinggal saya ${object.alamat}, senang bertemu dengan Anda`
  );
}

const newObject = {
  nama: "Elbert Chailes",
  umur: 19,
  tanggal_lahir: "28 Januari 2005",
  alamat: "Tubis VII",
};

acceptObject(newObject);