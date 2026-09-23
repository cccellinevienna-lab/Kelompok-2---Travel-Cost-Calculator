Test Cases

Test Case 1: One-way Trip Calculation

Input: jarak = 100, efisiensi = 10, harga = 10000, jenisPerjalanan = 1, ulang = "n"

Expected Output:

Total Jarak Perjalanan: 100 Km
Estimasi Konsumsi BBM: 10.00 Liter
Total Biaya BBM: Rp 100000


Actual Output:

Total Jarak Perjalanan: 100 Km
Estimasi Konsumsi BBM: 10.00 Liter
Total Biaya BBM: Rp 100000


Status: PASS

Test Case 2: Round Trip Calculation

Input: jarak = 50, efisiensi = 12, harga = 15000, jenisPerjalanan = 2, ulang = "n"

Expected Output:

Total Jarak Perjalanan: 100 Km
Estimasi Konsumsi BBM: 8.33 Liter
Total Biaya BBM: Rp 125000


Actual Output:

Total Jarak Perjalanan: 100 Km
Estimasi Konsumsi BBM: 8.33 Liter
Total Biaya BBM: Rp 125000


Status: PASS

Test Case 3: Zero Efficiency Validation

Input: jarak = 100, efisiensi = 0, harga = 10000, jenisPerjalanan = 1, ulang = "n"

Expected Output:

Error! Efisiensi bahan bakar tidak boleh 0 atau kosong.


Actual Output:

Error! Efisiensi bahan bakar tidak boleh 0 atau kosong.


Status: PASS

Test Case 4: Invalid Trip Type Handling

Input: jenisPerjalanan (Input Pertama) = 3, jenisPerjalanan (Input Kedua) = 1, jarak = 50, efisiensi = 10, harga = 10000, ulang = "n"

Expected Output:

Pilihan tidak valid! Harus ketik angka [1] atau [2].
Total Jarak Perjalanan: 50 Km
Estimasi Konsumsi BBM: 5.00 Liter
Total Biaya BBM: Rp 50000


Actual Output:

Pilihan tidak valid! Harus ketik angka [1] atau [2].
Total Jarak Perjalanan: 50 Km
Estimasi Konsumsi BBM: 5.00 Liter
Total Biaya BBM: Rp 50000


Status: PASS

Test Case 5: Invalid Repeat Input Handling

Input: jarak = 50, efisiensi = 10, harga = 10000, jenisPerjalanan = 1, ulang (Input Pertama) = "x", ulang (Input Kedua) = "n"

Expected Output:

Pilihan tidak valid! Harus ketik huruf [y] atau [n].


Actual Output:

Pilihan tidak valid! Harus ketik huruf [y] atau [n].


Status: PASS
