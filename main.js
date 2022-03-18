function volumeKubus(sisi) {
    const hasil = sisi ** 3;
    return hasil;
}

const hasilVolume = volumeKubus(8);
console.log(`Jika sisi kubus berukuran 8, maka volumenya adalah ${hasilVolume}`);

class Karyawan {
    constructor(idKaryawan, nama, tahunLahir, gaji) {
        this.id = idKaryawan;
        this.nama = nama;
        this.tahunLahir = tahunLahir;
        this.gaji = gaji;
    }
    
    hitungUsia() {
        const hariIni = new Date().getFullYear();
        const usia = hariIni - this.tahunLahir;
        return usia;
    }

    cekStatus() {
        console.log(`Status Karyawan
                     ID Karyawan    : ${this.id}
                     Nama Karyawan  : ${this.nama}
                     Usia           : ${this.hitungUsia()}
                     Gaji           : ${this.gaji}`);
    }

}

class Fasilitas extends Karyawan {
    constructor(idKaryawan, nama, tahunLahir, gaji, kendaraan) {
        super(idKaryawan, nama, tahunLahir, gaji);
        this.kendaraan = kendaraan;
    }

    cekStatus() {
        super.cekStatus();
        console.log(`Status Karyawan
                     ID Karyawan    : ${this.id}
                     Nama Karyawan  : ${this.nama}
                     Usia           : ${this.hitungUsia()}
                     Gaji           : ${this.gaji}
                     Fasilitas      : ${this.kendaraan}`);
    }

}

const doniSalmanan = new Karyawan("K01", "Doni Salmanan", 1998, 4000000);
const indraKenz = new Karyawan("K02", "Indra Kenz", 1996, 3000000); 

doniSalmanan.cekStatus();
indraKenz.cekStatus();

const bobonSantoso = new Fasilitas("K03", "Bobon Santoso", 1994, 5000000, "Mobil");
bobonSantoso.cekStatus();