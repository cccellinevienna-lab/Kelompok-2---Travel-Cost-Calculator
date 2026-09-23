let ulang = "y";

do {
   
    let jarak = parseFloat(prompt("Masukkan jarak perjalanan (km):"));
    let efisiensi = parseFloat(prompt("Masukkan efisiensi bahan bakar (km/liter):"));
    let harga = parseFloat(prompt("Masukkan harga bahan bakar per liter:"));


    let jenisPerjalanan;
    do {
        jenisPerjalanan = parseInt(prompt("Pilih jenis perjalanan:\n1 = Sekali Jalan\n2 = Pulang-Pergi"));
        if (jenisPerjalanan !== 1 && jenisPerjalanan !== 2) {
            alert("Pilihan tidak valid! Harus ketik angka [1] atau [2].");
        }
    } while (jenisPerjalanan !== 1 && jenisPerjalanan !== 2);


    let totalJarak;
    if (jenisPerjalanan === 2) {
        totalJarak = jarak * 2;
    } else {
        totalJarak = jarak;
    }

    let konsumsiBBM = totalJarak / efisiensi;
    let totalBiaya = konsumsiBBM * harga;

    alert(
        "=== HASIL PERHITUNGAN ===\n" +
        "Total Jarak Perjalanan : " + totalJarak + " km\n" +
        "Estimasi Konsumsi BBM  : " + konsumsiBBM + " liter\n" +
        "Estimasi Total Biaya   : Rp " + totalBiaya
    );


    do {
        ulang = prompt("Apakah ingin menghitung lagi? (y/n):");
        if (ulang) ulang = ulang.toLowerCase();
        
        if (ulang !== "y" && ulang !== "n") {
            alert("Pilihan tidak valid! Harus ketik huruf [y] atau [n].");
        }
    } while (ulang !== "y" && ulang !== "n");

} while (ulang === "y");

alert("Program selesai. Terima kasih!");
