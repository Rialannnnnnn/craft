/* app.js: menampilkan produk, saringan kategori, pembuat kreasi, dan tombol pesan. */
(function () {
  const rupiah = (n) => "Rp" + n.toLocaleString("id-ID");
  const $ = (s) => document.querySelector(s);

  /* Nama toko */
  document.title = TOKO.nama + " | Manik-manik, Rajut, Kawat Bulu";
  $("#logo-nama").textContent = TOKO.nama;

  /* Tali manik dan seni hero */
  buatTali($("#tali"));
  $("#pahlawan-seni").innerHTML = ["kunciGabung", "bucketCampur", "boneka"]
    .map((s, i) => `<div class="hero-kotak h${i}">${buatSeni(s)}</div>`).join("");

  /* Pesan ke WhatsApp, atau salin teks bila nomor belum diisi */
  function linkWA(teks) {
    return "https://wa.me/" + TOKO.whatsapp + "?text=" + encodeURIComponent(teks);
  }
  function toast(teks) {
    const t = $("#toast");
    t.textContent = teks;
    t.classList.add("tampil");
    clearTimeout(toast.j);
    toast.j = setTimeout(() => t.classList.remove("tampil"), 3200);
  }
  function pasangPesan(el, teks) {
    el.dataset.pesan = teks;
    if (TOKO.whatsapp) {
      el.href = linkWA(teks);
      el.target = "_blank";
      el.rel = "noopener";
    }
  }
  document.addEventListener("click", function (e) {
    const a = e.target.closest("[data-pesan]");
    if (!a || TOKO.whatsapp) return;
    e.preventDefault();
    const teks = a.dataset.pesan;
    if (!teks) return;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(teks).then(
        () => toast("Pesan disalin. Tempel di chat penjual."),
        () => toast("Salin pesan ini: " + teks)
      );
    } else {
      toast("Salin pesan ini: " + teks);
    }
  });

  /* Produk */
  const kisi = $("#kisi");
  const saring = $("#saring");
  let aktif = "Semua";

  function tampilProduk() {
    kisi.innerHTML = "";
    PRODUK.filter((p) => aktif === "Semua" || p.kategori === aktif).forEach((p) => {
      const kartu = document.createElement("article");
      kartu.className = "kartu";
      kartu.innerHTML =
        `<div class="foto ${p.latar}">${buatSeni(p.seni)}${p.lencana ? `<span class="lencana">${p.lencana}</span>` : ""}</div>` +
        `<div class="kartu-isi"><p class="kat">${p.kategori}</p><h3>${p.nama}</h3><p class="desk">${p.deskripsi}</p>` +
        `<div class="kartu-bawah"><strong>${rupiah(p.harga)}</strong><a class="tombol kecil" href="#kreasi" data-pesan="">Pesan</a></div></div>`;
      const btn = kartu.querySelector("a");
      pasangPesan(btn, `Halo ${TOKO.nama}, saya mau pesan: ${p.nama} (${rupiah(p.harga)}). Jumlah: 1.`);
      kisi.appendChild(kartu);
    });
  }

  ["Semua"].concat(KATEGORI).forEach((k) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "saring-btn";
    b.textContent = k;
    b.setAttribute("aria-pressed", k === aktif ? "true" : "false");
    b.addEventListener("click", () => {
      aktif = k;
      saring.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", x === b ? "true" : "false"));
      tampilProduk();
    });
    saring.appendChild(b);
  });
  tampilProduk();

  /* Pembuat kreasi */
  const wadahWarna = $("#k-warna");
  WARNA.forEach((w, i) => {
    const l = document.createElement("label");
    l.className = "warna";
    l.innerHTML = `<input type="radio" name="warna" value="${w.nama}" ${i === 0 ? "checked" : ""}><span style="background:${w.hex}" title="${w.nama}"></span><em>${w.nama}</em>`;
    wadahWarna.appendChild(l);
  });

  const form = $("#kreasi-form");
  function perbarui() {
    const jenis = $("#k-jenis").value;
    const bahan = [...form.querySelectorAll('input[name="bahan"]:checked')].map((x) => x.value);
    const warna = form.querySelector('input[name="warna"]:checked').value;
    const catatan = $("#k-catatan").value.trim();
    const kirim = $("#k-kirim");
    if (!bahan.length) {
      $("#k-ringkas").innerHTML = "Pilih minimal satu bahan.";
      kirim.classList.add("mati");
      kirim.dataset.pesan = "";
      kirim.removeAttribute("href");
      return;
    }
    kirim.classList.remove("mati");
    $("#k-ringkas").innerHTML =
      `<strong>${jenis}</strong> dari ${bahan.join(" + ").toLowerCase()}, warna ${warna.toLowerCase()}` + (catatan ? `. Catatan: ${catatan}` : "");
    const teks = `Halo ${TOKO.nama}, saya mau pesan kreasi custom:\n- Jenis: ${jenis}\n- Bahan: ${bahan.join(", ")}\n- Warna: ${warna}` + (catatan ? `\n- Catatan: ${catatan}` : "");
    pasangPesan(kirim, teks);
    if (!TOKO.whatsapp) kirim.setAttribute("href", "#kreasi");
  }
  form.addEventListener("input", perbarui);
  form.addEventListener("submit", (e) => e.preventDefault());
  perbarui();

  /* Kaki */
  const kontak = [];
  if (TOKO.whatsapp) kontak.push(`<a href="${linkWA("Halo " + TOKO.nama)}" target="_blank" rel="noopener">WhatsApp</a>`);
  if (TOKO.instagram) kontak.push(`<a href="https://instagram.com/${TOKO.instagram}" target="_blank" rel="noopener">Instagram</a>`);
  $("#kaki-kontak").innerHTML = kontak.join(" &middot; ");
})();
