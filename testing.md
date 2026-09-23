##Testing

### Test Case 1: One-way Trip Calculation

* **Input Data:**
  * `jarak`: `100`
  * `efisiensi`: `10`
  * `harga`: `10000`
  * `jenisPerjalanan`: `1`
  * `ulang`: `"n"`
* **Expected Output:**
  > Total Jarak Perjalanan: 100 Km  
  > Estimasi Konsumsi BBM: 10.00 Liter  
  > Total Biaya BBM: Rp 100000  
* **Actual Output:**
  > Total Jarak Perjalanan: 100 Km  
  > Estimasi Konsumsi BBM: 10.00 Liter  
  > Total Biaya BBM: Rp 100000  
* **Status:** `PASS`

![Image Alt](https://github.com/cccellinevienna-lab/Kelompok-2---Travel-Cost-Calculator/blob/5b10e4281f2f1fdda2b55db77b4ec52fb59ba12c/Test%20Case%201.png)

---

### Test Case 2: Round Trip Calculation

* **Input Data:**
  * `jarak`: `50`
  * `efisiensi`: `12`
  * `harga`: `15000`
  * `jenisPerjalanan`: `2`
  * `ulang`: `"n"`
* **Expected Output:**
  > Total Jarak Perjalanan: 100 Km  
  > Estimasi Konsumsi BBM: 8.33 Liter  
  > Total Biaya BBM: Rp 125000  
* **Actual Output:**
  > Total Jarak Perjalanan: 100 Km  
  > Estimasi Konsumsi BBM: 8.33 Liter  
  > Total Biaya BBM: Rp 125000  
* **Status:** `PASS`

![Image Alt](https://github.com/cccellinevienna-lab/Kelompok-2---Travel-Cost-Calculator/blob/5b10e4281f2f1fdda2b55db77b4ec52fb59ba12c/Test%20Case%202.png)

---

### 3. Zero Efficiency Validation

* **Input Data:**
  * `jarak`: `100`
  * `efisiensi`: `0`
  * `harga`: `10000`
  * `jenisPerjalanan`: `1`
  * `ulang`: `"n"`
* **Expected Output:**
  > Error! Efisiensi bahan bakar tidak boleh 0 atau kosong.
* **Actual Output:**
  > Error! Efisiensi bahan bakar tidak boleh 0 atau kosong.
* **Status:** `PASS`

![Image Alt](https://github.com/cccellinevienna-lab/Kelompok-2---Travel-Cost-Calculator/blob/5b10e4281f2f1fdda2b55db77b4ec52fb59ba12c/Test%20Case%203.png)

---

### 4. Invalid Trip Type Handling

* **Input Data:**
  * `jenisPerjalanan (Input 1)`: `3` *(invalid)*
  * `jenisPerjalanan (Input 2)`: `1` *(valid)*
  * `jarak`: `50`
  * `efisiensi`: `10`
  * `harga`: `10000`
  * `ulang`: `"n"`
* **Expected Output:**
  > Pilihan tidak valid! Harus ketik angka [1] atau [2].  
  > Total Jarak Perjalanan: 50 Km  
  > Estimasi Konsumsi BBM: 5.00 Liter  
  > Total Biaya BBM: Rp 50000  
* **Actual Output:**
  > Pilihan tidak valid! Harus ketik angka [1] atau [2].  
  > Total Jarak Perjalanan: 50 Km  
  > Estimasi Konsumsi BBM: 5.00 Liter  
  > Total Biaya BBM: Rp 50000  
* **Status:** `PASS`

![Image Alt](https://github.com/cccellinevienna-lab/Kelompok-2---Travel-Cost-Calculator/blob/5b10e4281f2f1fdda2b55db77b4ec52fb59ba12c/Test%20Case%204.png)

---

### 5. Invalid Repeat Input Handling

* **Input Data:**
  * `jarak`: `50`
  * `efisiensi`: `10`
  * `harga`: `10000`
  * `jenisPerjalanan`: `1`
  * `ulang (Input 1)`: `"x"` *(invalid)*
  * `ulang (Input 2)`: `"n"` *(valid)*
* **Expected Output:**
  > Pilihan tidak valid! Harus ketik huruf [y] atau [n].
* **Actual Output:**
  > Pilihan tidak valid! Harus ketik huruf [y] atau [n].
* **Status:** `PASS`

![Image Alt](https://github.com/cccellinevienna-lab/Kelompok-2---Travel-Cost-Calculator/blob/5b10e4281f2f1fdda2b55db77b4ec52fb59ba12c/Test%20Case%205.png)
