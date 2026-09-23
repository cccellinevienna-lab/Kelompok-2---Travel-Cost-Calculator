let ulang = "y";

do {
    alert("=== TRAVEL COST CALCULATOR ===");

    let jarak = parseFloat(prompt("Masukkan jarak perjalanan (Km):"));
    let efisiensi = parseFloat(prompt("Masukkan efisiensi bahan bakar (Km/Liter):"));
    let harga = parseFloat(prompt("Masukkan harga bahan bakar per liter:"));

    // Validasi pilihan jenis perjalanan
    let jenisPerjalanan;
    do {
        jenisPerjalanan = parseInt(prompt("Pilih jenis perjalanan (1 = Sekali Jalan, 2 = Pulang-Pergi):"));
        if (jenisPerjalanan !== 1 && jenisPerjalanan !== 2) {
            alert("Pilihan tidak valid! Harus ketik angka [1] atau [2].");
        }
    } while (jenisPerjalanan !== 1 && jenisPerjalanan !== 2);

    // Menentukan total jarak
    let totalJarak;
    if (jenisPerjalanan === 2) {
        totalJarak = jarak * 2;
    } else {
        totalJarak = jarak;
    }

    // Pengecekan efisiensi bahan bakar
    if (efisiensi <= 0) {
        alert("Error! Efisiensi bahan bakar tidak boleh 0 atau kosong.");
    } else {
        let konsumsiBBM = totalJarak / efisiensi;
        let totalBiaya = konsumsiBBM * harga;

        alert(
            "Total Jarak Perjalanan: " + totalJarak + " Km\n" +
            "Estimasi Konsumsi BBM: " + konsumsiBBM.toFixed(2) + " Liter\n" +
            "Total Biaya BBM: Rp " + Math.ceil(totalBiaya)
        );
    }

    // Validasi pengulangan program
    do {
        ulang = prompt("Apakah ingin menghitung lagi? (y/n):");
        if (ulang) ulang = ulang.toLowerCase();

        if (ulang !== "y" && ulang !== "n") {
            alert("Pilihan tidak valid! Harus ketik huruf [y] atau [n].");
        }
    } while (ulang !== "y" && ulang !== "n");

} while (ulang === "y");
