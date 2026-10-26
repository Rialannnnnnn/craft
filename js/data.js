/* data.js: ubah isi toko di file ini saja. */
const TOKO = {
  nama: "Toko Craft",
  // Nomor WhatsApp format internasional tanpa + dan tanpa spasi, contoh: "6281234567890".
  // Kalau dikosongkan, tombol Pesan akan menyalin teks pesanan ke clipboard.
  whatsapp: "",
  instagram: "" // contoh: "namatokomu" (tanpa @)
};

const KATEGORI = ["Manik-manik", "Rajut", "Kawat Bulu", "Kreasi Gabungan"];

// Harga di bawah adalah contoh. Ganti dengan harga aslimu.
// seni = nama ilustrasi di seni.js, latar = warna latar kartu (pink, mint, lav, peach, kuning, biru)
const PRODUK = [
  { nama: "Gantungan Kunci Manik", kategori: "Manik-manik", harga: 15000, seni: "kunciManik", latar: "lav", deskripsi: "Manik warna-warni dirangkai tangan, bisa ditambah inisial." },
  { nama: "Gelang Manik", kategori: "Manik-manik", harga: 20000, seni: "gelang", latar: "pink", deskripsi: "Gelang manik elastis, pilih warna dan ukuran pergelangan." },
  { nama: "Cincin Manik", kategori: "Manik-manik", harga: 12000, seni: "cincin", latar: "mint", deskripsi: "Cincin mungil dari manik kecil, cocok untuk hadiah." },

  { nama: "Boneka Rajut", kategori: "Rajut", harga: 55000, seni: "boneka", latar: "peach", deskripsi: "Boneka kecil dari benang rajut, warna dan karakter bisa dipilih." },
  { nama: "Syal Rajut", kategori: "Rajut", harga: 85000, seni: "syal", latar: "biru", deskripsi: "Syal hangat dengan rumbai, pilih warna benang favoritmu." },
  { nama: "Gantungan Kunci Rajut", kategori: "Rajut", harga: 18000, seni: "kunciRajut", latar: "pink", deskripsi: "Bentuk mungil dari benang rajut, ringan untuk tas dan kunci." },
  { nama: "Bunga Rajut", kategori: "Rajut", harga: 10000, seni: "bungaRajut", latar: "kuning", deskripsi: "Bunga rajut tangkai satuan yang tidak layu." },

  { nama: "Bucket Bunga Kawat Bulu", kategori: "Kawat Bulu", harga: 75000, seni: "bucket", latar: "pink", deskripsi: "Rangkaian bunga kawat bulu dalam bucket, warna sesuai pesanan." },
  { nama: "Bunga Tangkai Kawat Bulu", kategori: "Kawat Bulu", harga: 8000, seni: "bungaTangkai", latar: "mint", deskripsi: "Bunga tangkai satuan, jenis dan warnanya bisa dipilih." },
  { nama: "Bando Kawat Bulu", kategori: "Kawat Bulu", harga: 20000, seni: "bando", latar: "lav", deskripsi: "Kreasi lain dari kawat bulu, bentuk dan warna bisa request." },

  { nama: "Gantungan Kunci Rajut + Manik", kategori: "Kreasi Gabungan", harga: 25000, seni: "kunciGabung", latar: "kuning", lencana: "Gabungan", deskripsi: "Badan rajut dengan hiasan manik-manik, satu gantungan dua gaya." },
  { nama: "Bucket Bunga Campur", kategori: "Kreasi Gabungan", harga: 95000, seni: "bucketCampur", latar: "peach", lencana: "Gabungan", deskripsi: "Bunga kawat bulu dipadukan bunga rajut dalam satu bucket." },
  { nama: "Paket Hadiah Craft", kategori: "Kreasi Gabungan", harga: 120000, seni: "hadiah", latar: "biru", lencana: "Gabungan", deskripsi: "Pilih beberapa kreasi untuk satu paket hadiah." }
];

const WARNA = [
  { nama: "Pink", hex: "#F6B3CE" },
  { nama: "Lavender", hex: "#CDBDF2" },
  { nama: "Mint", hex: "#BFE6D3" },
  { nama: "Peach", hex: "#FFD3B5" },
  { nama: "Biru muda", hex: "#BCD7F7" },
  { nama: "Kuning", hex: "#FFE49C" }
];
