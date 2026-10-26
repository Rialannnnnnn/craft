# Toko Craft

Website toko kerajinan tangan (manik-manik, rajut, kawat bulu) dengan kreasi gabungan.
Tanpa framework dan tanpa instalasi: cukup HTML, CSS, dan JavaScript biasa.

## Struktur

```
index.html       halaman utama
css/style.css    warna dan tampilan
js/data.js       isi toko: nama, nomor WhatsApp, produk, harga
js/seni.js       ilustrasi produk (SVG)
js/app.js        logika: filter, pembuat kreasi, tombol pesan
img/favicon.svg  ikon tab
```

## Yang perlu kamu ganti

Buka `js/data.js`:

1. `nama`: nama tokomu.
2. `whatsapp`: nomor format internasional tanpa + (contoh `6281234567890`). Kalau kosong, tombol Pesan menyalin teks pesanan.
3. `instagram`: username tanpa @ (boleh kosong).
4. `PRODUK`: ubah nama, harga, dan deskripsi. Harga bawaan hanyalah contoh.

Warna ada di bagian `:root` pada `css/style.css`.

## Pasang di GitHub Pages

1. Buat repository baru, lalu unggah semua isi folder ini (bukan folder pembungkusnya).
2. Buka Settings, Pages, pilih branch `main` dan folder `/ (root)`, lalu Save.
3. Tunggu sekitar satu menit, alamat situsnya muncul di halaman yang sama.

## Memakai foto produk asli

Simpan foto di `img/`. Di `js/app.js`, pada bagian `tampilProduk`, ganti `buatSeni(p.seni)` dengan `<img src="img/${p.foto}" alt="${p.nama}">`, lalu tambahkan `foto: "nama-file.webp"` di tiap produk.
