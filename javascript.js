const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const input = (pertanyaan) => {
    return new Promise((resolve) => rl.question(pertanyaan, resolve));
};

async function main() {
    let ulang = 'y';

    do {
        console.clear();
        console.log("========================================");
        console.log("       KALKULATOR BIAYA BBM             ");
        console.log("========================================\n");


        let jarak = parseFloat(await input("Masukkan jarak perjalanan (km): "));
        let efisiensi = parseFloat(await input("Masukkan efisiensi bahan bakar kendaraan (km/liter): "));
        let harga = parseFloat(await input("Masukkan harga bahan bakar per liter: "));

     
        let jenisPerjalanan;
        do {
            jenisPerjalanan = parseInt(await input("Pilih jenis perjalanan (1 = Sekali Jalan, 2 = Pulang-Pergi): "));
            if (jenisPerjalanan !== 1 && jenisPerjalanan !== 2) {
                console.log(">> Pilihan tidak valid! Harus ketik angka [1] atau [2].\n");
            }
        } while (jenisPerjalanan !== 1 && jenisPerjalanan !== 2);


        let totalJarak = (jenisPerjalanan === 2) ? (jarak * 2) : jarak;
        let konsumsiBBM = totalJarak / efisiensi;
        let totalBiaya = konsumsiBBM * harga;

     
        console.log("\n----------------------------------------");
        console.log("HASIL PERHITUNGAN:");
        console.log("Total Jarak Perjalanan  : " + totalJarak + " km");
        console.log("Estimasi Konsumsi BBM   : " + konsumsiBBM.toFixed(2) + " liter");
        console.log("Estimasi Total Biaya BBM: Rp" + totalBiaya.toLocaleString('id-ID'));
        console.log("----------------------------------------\n");

        
        do {
            ulang = (await input("Apakah ingin menghitung lagi? (y/n): ")).toLowerCase();
            if (ulang !== "y" && ulang !== "n") {
                console.log(">> Pilihan tidak valid! Harus ketik huruf [y] atau [n].\n");
            }
        } while (ulang !== "y" && ulang !== "n");

    } while (ulang === 'y');

    console.log("\nProgram selesai. Terima kasih!");
    rl.close();
}


main();
