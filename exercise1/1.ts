// Exercise 1.1
interface karyawan {
  nama: string;
  umur: number;
  nik: number;
  tanggal_lahir: string;
  departemen: string;
  divisi: string;
  jabatan: string;
  grade: string;
  no_npwp: number;
  no_rekening: number;
  pemegang_rekening: string;
}

var karyawan1 = <karyawan>{
  nama: "Elbert Chailes",
  umur: 19,
  nik: 1212121211221,
  tanggal_lahir: "28-01-2005",
  departemen: "informatika",
  divisi: "backend",
  jabatan: "internship",
  grade: "A",
  no_npwp: 12312312321312,
  no_rekening: 23141234214,
  pemegang_rekening: "Elbert Chailes",
};

console.log(karyawan1);
