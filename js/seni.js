/* seni.js: ilustrasi produk dibuat dari bentuk SVG sederhana. */
const W = { pink: "#F6B3CE", pinkT: "#E98DB5", lav: "#CDBDF2", mint: "#BFE6D3", mintT: "#8FD0B3", peach: "#FFD3B5", kuning: "#FFE49C", biru: "#BCD7F7", krem: "#FFF3E6", tinta: "#5B4A66", logam: "#B9AEC4" };

const manik = (x, y, r, f) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="${f}"/><circle cx="${(x - r * 0.3).toFixed(1)}" cy="${(y - r * 0.3).toFixed(1)}" r="${(r * 0.28).toFixed(1)}" fill="#fff" opacity=".75"/>`;

const bunga = (x, y, r, p, c) => {
  let s = "";
  for (let i = 0; i < 5; i++) {
    const a = ((i * 72 - 90) * Math.PI) / 180;
    s += `<circle cx="${(x + Math.cos(a) * r * 1.1).toFixed(1)}" cy="${(y + Math.sin(a) * r * 1.1).toFixed(1)}" r="${r}" fill="${p}"/>`;
  }
  return s + `<circle cx="${x}" cy="${y}" r="${(r * 0.7).toFixed(1)}" fill="${c}"/>`;
};

const cincinKunci = (x, y) => `<circle cx="${x}" cy="${y}" r="9" fill="none" stroke="${W.logam}" stroke-width="3"/>`;
const garis = (d, c, w) => `<path d="${d}" stroke="${c}" stroke-width="${w}" fill="none" stroke-linecap="round"/>`;

const buket = (bungaList) =>
  bungaList.join("") +
  `<polygon points="30,64 90,64 67,112 53,112" fill="${W.pink}"/>` +
  `<path d="M36 78 Q60 88 84 78" stroke="#fff" stroke-width="3" fill="none" opacity=".8"/>` +
  `<circle cx="52" cy="78" r="6" fill="${W.lav}"/><circle cx="68" cy="78" r="6" fill="${W.lav}"/><circle cx="60" cy="79" r="4" fill="${W.pinkT}"/>`;

const SENI = {
  kunciManik: () =>
    cincinKunci(60, 16) + garis("M60 25v14", W.logam, 2.5) +
    [W.pink, W.lav, W.mint, W.kuning, W.pink].map((f, i) => manik(60, 47 + i * 15, 7, f)).join(""),

  gelang: () => {
    const w = [W.pink, W.lav, W.mint, W.kuning, W.biru];
    let s = `<circle cx="60" cy="60" r="38" fill="none" stroke="${W.logam}" stroke-width="2" opacity=".6"/>`;
    for (let i = 0; i < 14; i++) {
      const a = (i * 360 / 14) * Math.PI / 180;
      s += manik((60 + Math.cos(a) * 38).toFixed(1), (60 + Math.sin(a) * 38).toFixed(1), 7, w[i % w.length]);
    }
    return s;
  },

  cincin: () => {
    let s = "";
    for (let i = 0; i < 10; i++) {
      const a = (i * 36 + 18) * Math.PI / 180;
      s += manik((60 + Math.cos(a) * 24).toFixed(1), (72 + Math.sin(a) * 24).toFixed(1), 5.5, i % 2 ? W.lav : W.mint);
    }
    return s + bunga(60, 40, 6, W.pink, W.kuning);
  },

  boneka: () =>
    `<circle cx="38" cy="32" r="11" fill="${W.peach}"/><circle cx="82" cy="32" r="11" fill="${W.peach}"/>` +
    `<circle cx="38" cy="32" r="5" fill="${W.pink}"/><circle cx="82" cy="32" r="5" fill="${W.pink}"/>` +
    `<ellipse cx="60" cy="90" rx="24" ry="22" fill="${W.peach}"/>` +
    `<circle cx="60" cy="54" r="27" fill="${W.peach}"/>` +
    `<circle cx="51" cy="52" r="3" fill="${W.tinta}"/><circle cx="69" cy="52" r="3" fill="${W.tinta}"/>` +
    `<ellipse cx="60" cy="63" rx="9" ry="6" fill="${W.krem}"/><ellipse cx="60" cy="60.5" rx="3" ry="2" fill="${W.tinta}"/>` +
    `<circle cx="44" cy="62" r="4" fill="${W.pink}" opacity=".7"/><circle cx="76" cy="62" r="4" fill="${W.pink}" opacity=".7"/>` +
    `<path d="M40 88 H80" stroke="#fff" stroke-width="2.5" stroke-dasharray="4 5" stroke-linecap="round"/>`,

  syal: () =>
    `<rect x="16" y="34" width="88" height="22" rx="11" fill="${W.biru}"/>` +
    `<rect x="72" y="50" width="22" height="46" rx="8" fill="${W.biru}"/>` +
    `<path d="M34 34v22M52 34v22M72 34v22" stroke="${W.pink}" stroke-width="5"/>` +
    `<path d="M72 68h22M72 80h22" stroke="${W.pink}" stroke-width="5"/>` +
    [74, 80, 86, 92].map((x) => garis(`M${x} 96v12`, W.pink, 3)).join(""),

  kunciRajut: () =>
    cincinKunci(60, 16) + garis("M60 25v10", W.logam, 2.5) +
    `<path d="M60 104 C18 76 26 40 60 62 C94 40 102 76 60 104Z" fill="${W.pink}"/>` +
    `<path d="M60 94 C34 74 38 56 60 68" stroke="#fff" stroke-width="2.5" stroke-dasharray="4 5" fill="none" stroke-linecap="round"/>`,

  bungaRajut: () =>
    garis("M60 66V112", W.mintT, 5) + `<ellipse cx="74" cy="92" rx="12" ry="6" fill="${W.mint}" transform="rotate(-25 74 92)"/>` +
    bunga(60, 44, 13, W.kuning, W.pink) +
    `<circle cx="60" cy="44" r="21" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="3 5" opacity=".9"/>`,

  bucket: () =>
    buket([
      garis("M42 50 L55 70", W.mintT, 3), garis("M78 50 L65 70", W.mintT, 3), garis("M60 36 V70", W.mintT, 3),
      bunga(40, 42, 10, W.lav, W.kuning), bunga(80, 42, 10, W.kuning, W.pink), bunga(60, 28, 10, W.peach, W.pinkT)
    ]),

  bungaTangkai: () =>
    garis("M60 56V112", W.mintT, 5) +
    `<ellipse cx="45" cy="92" rx="12" ry="6" fill="${W.mint}" transform="rotate(25 45 92)"/><ellipse cx="75" cy="80" rx="12" ry="6" fill="${W.mint}" transform="rotate(-25 75 80)"/>` +
    bunga(60, 38, 15, W.pink, W.kuning),

  bando: () =>
    garis("M14 86 C18 22 102 22 106 86", W.lav, 9) +
    bunga(86, 40, 8, W.pink, W.kuning) + manik(68, 30, 4.5, W.mint) + manik(48, 28, 4.5, W.kuning) + manik(30, 40, 4.5, W.pink),

  kunciGabung: () =>
    cincinKunci(60, 16) + garis("M60 25v10", W.logam, 2.5) +
    `<circle cx="60" cy="54" r="20" fill="${W.pink}"/>` +
    `<circle cx="60" cy="54" r="14" fill="none" stroke="#fff" stroke-width="2.5" stroke-dasharray="3 5" stroke-linecap="round"/>` +
    garis("M50 74V88", W.logam, 2) + garis("M60 74V94", W.logam, 2) + garis("M70 74V84", W.logam, 2) +
    manik(50, 94, 6, W.lav) + manik(60, 100, 6, W.mint) + manik(70, 90, 6, W.kuning),

  bucketCampur: () =>
    buket([
      garis("M42 50 L55 70", W.mintT, 3), garis("M78 50 L65 70", W.mintT, 3), garis("M60 36 V70", W.mintT, 3),
      bunga(40, 42, 10, W.lav, W.kuning),
      bunga(80, 42, 10, W.kuning, W.pink) + `<circle cx="80" cy="42" r="19" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="3 5"/>`,
      bunga(60, 28, 10, W.peach, W.pinkT),
      manik(56, 48, 4, W.mint), manik(66, 52, 4, W.biru)
    ]),

  hadiah: () =>
    `<rect x="22" y="58" width="76" height="48" rx="8" fill="${W.peach}"/>` +
    `<rect x="18" y="46" width="84" height="18" rx="7" fill="${W.pink}"/>` +
    `<rect x="55" y="46" width="10" height="60" fill="${W.lav}"/>` +
    `<circle cx="48" cy="38" r="9" fill="${W.lav}"/><circle cx="72" cy="38" r="9" fill="${W.lav}"/><circle cx="60" cy="42" r="6" fill="${W.pinkT}"/>`
};

function buatSeni(nama) {
  const f = SENI[nama];
  return `<svg viewBox="0 0 120 120" aria-hidden="true" focusable="false">${f ? f() : ""}</svg>`;
}

/* Tali manik di atas hero: manik diletakkan sepanjang kurva. */
function buatTali(el) {
  const ns = "http://www.w3.org/2000/svg";
  const jalur = document.createElementNS(ns, "path");
  jalur.setAttribute("d", "M-20 8 Q 300 74 600 14 T 1220 8");
  jalur.setAttribute("fill", "none");
  jalur.setAttribute("stroke", "#E9D3DF");
  jalur.setAttribute("stroke-width", "2");
  el.appendChild(jalur);
  const total = jalur.getTotalLength();
  const w = [W.pink, W.lav, W.mint, W.kuning, W.biru];
  const n = Math.floor(total / 46);
  for (let i = 1; i < n; i++) {
    const p = jalur.getPointAtLength((total / n) * i);
    const g = document.createElementNS(ns, "g");
    g.innerHTML = manik(p.x.toFixed(1), (p.y + 6).toFixed(1), 8, w[i % w.length]);
    el.appendChild(g);
  }
}
