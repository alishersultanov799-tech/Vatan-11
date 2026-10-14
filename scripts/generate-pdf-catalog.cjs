const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const outputPath = path.join(__dirname, '..', 'public', 'vatan-yangi-qoyliq-2-katalog.pdf');

console.log('Generating PDF catalog at:', outputPath);

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 35, bottom: 35, left: 35, right: 35 },
  autoFirstPage: true,
  info: {
    Title: "VATAN QK — Yangi Qo'yliq-2 Loyihasi Rasmiy Katalogi va Narxlar Taqdimoti",
    Author: "VATAN Qurilish Kompaniyasi",
    Subject: "Yangi Qo'yliq-2 turar-joy majmuasi narxlari, reja-chizmalari va shartlari",
    Keywords: "VATAN, Yangi Qo'yliq-2, Toshkent uylari, bo'lib to'lash, 0%, Food City"
  }
});

const writeStream = fs.createWriteStream(outputPath);
doc.pipe(writeStream);

const fontRegular = 'C:/Windows/Fonts/arial.ttf';
const fontBold = 'C:/Windows/Fonts/arialbd.ttf';

const colors = {
  primary: '#0284c7', // sky-600
  primaryDark: '#0369a1', // sky-700
  primaryLight: '#e0f2fe', // sky-100
  secondary: '#059669', // emerald-600
  secondaryLight: '#d1fae5', // emerald-100
  dark: '#0f172a', // slate-900
  gray: '#475569', // slate-600
  lightGray: '#f8fafc',
  amber: '#d97706',
  amberLight: '#fef3c7',
  cardBg: '#f0f9ff',
  border: '#bae6fd'
};

function drawHeader(title = "VATAN QURILISH KOMPANIYASI | YANGI QO‘YLIQ-2") {
  doc.rect(35, 20, 525, 25).fill(colors.cardBg);
  doc.rect(35, 20, 525, 25).stroke(colors.border);
  doc.font(fontBold).fontSize(9).fillColor(colors.primaryDark);
  doc.text(title, 45, 27, { width: 400 });
  doc.font(fontRegular).fontSize(8).fillColor(colors.gray);
  doc.text("2028-yil 4-chorak", 450, 27, { align: 'right', width: 100 });
}

function drawFooter(pageNum, totalPages = 8) {
  doc.strokeColor(colors.border).lineWidth(1).moveTo(35, 805).lineTo(560, 805).stroke();
  doc.font(fontRegular).fontSize(8).fillColor(colors.gray);
  doc.text("Savdo ofisi: Food City ro‘parasi, Yangi Toshkent | Telegram: @yangiqoyliq_TJM | Bot: @Vatan2333_bot", 35, 812, { width: 440 });
  doc.font(fontBold).fontSize(8).fillColor(colors.primaryDark);
  doc.text(`Sahifa ${pageNum} / ${totalPages}`, 480, 812, { align: 'right', width: 80 });
}

// ==========================================
// SAHIFA 1: MUQOVA (COVER PAGE)
// ==========================================
doc.rect(0, 0, 595, 842).fill('#f0f7ff');

// Brand Top Banner
doc.rect(35, 40, 525, 60).fillAndStroke('#ffffff', colors.border);

// Logo
const fullLogoPath = path.join(__dirname, '..', 'public', 'vatan-full-logo.png');
if (fs.existsSync(fullLogoPath)) {
  doc.image(fullLogoPath, 45, 45, { height: 50 });
}

doc.font(fontBold).fontSize(20).fillColor(colors.dark).text("VATAN", 125, 48);
doc.font(fontBold).fontSize(10).fillColor(colors.primaryDark).text("QURILISH KOMPANIYASI (2013-YILDAN BUYON)", 125, 72);
doc.font(fontRegular).fontSize(8).fillColor(colors.gray).text("10 000+ topshirilgan xonadonlar | 6 ta yirik muvaffaqiyatli loyihalar", 125, 84);

// Main Title Card
doc.rect(35, 115, 525, 85).fillAndStroke(colors.primaryLight, colors.border);
doc.font(fontBold).fontSize(23).fillColor(colors.dark).text("“YANGI QO‘YLIQ-2”", 45, 126, { align: 'center', width: 505 });
doc.font(fontBold).fontSize(13).fillColor(colors.primaryDark).text("ZAMONAVIY COMFORT CLASS TURAR-JOY MAJMUASI", 45, 154, { align: 'center', width: 505 });
doc.font(fontRegular).fontSize(10).fillColor(colors.gray).text("Barcha Uylar, Narxlar va Reja-Chizmalari Rasmiy Taqdimoti (Oilaviy ko‘rib chiqish uchun)", 45, 173, { align: 'center', width: 505 });

// Night Hero Image
const heroImagePath = path.join(__dirname, '..', 'public', 'vatan-hero-night.jpg');
if (fs.existsSync(heroImagePath)) {
  doc.rect(35, 215, 525, 270).fill('#ffffff').stroke(colors.border);
  doc.image(heroImagePath, 40, 220, { width: 515, height: 260 });
}

// 4 Feature Highlights Grid
const highlights = [
  { title: "13 Gektar Hudud", desc: "12 qavatli monolit binolar, 3 800 ta xonadon, mustahkam poydevor" },
  { title: "70% Tayyor Ta’mir", desc: "Devorlar oq suvoqda, styajka, Akfa romlar, temir eshik, shaxsiy isitish" },
  { title: "30 Oy 0% Bo‘lib To‘lash", desc: "60, 75 va 99 mln bosh to‘lov bilan 30 oy ustamasiz (yoki 100% to‘lovda 33% chegirma)" },
  { title: "2028 IV-Chorak", desc: "Kafolatlangan muddat, to‘liq davlat shartnomasi va litsenziyalangan qurilish" }
];

highlights.forEach((h, i) => {
  const x = 35 + (i % 2) * 268;
  const y = 500 + Math.floor(i / 2) * 75;
  doc.rect(x, y, 257, 65).fillAndStroke('#ffffff', colors.border);
  doc.font(fontBold).fontSize(11).fillColor(colors.primaryDark).text(h.title, x + 12, y + 10);
  doc.font(fontRegular).fontSize(8.5).fillColor(colors.gray).text(h.desc, x + 12, y + 26, { width: 233, lineGap: 2 });
});

// Bottom Callout
doc.rect(35, 665, 525, 95).fillAndStroke('#ffffff', colors.border);
doc.font(fontBold).fontSize(11).fillColor(colors.dark).text("SAVDO OFISI VA ALOQA:", 48, 678);
doc.font(fontRegular).fontSize(9).fillColor(colors.gray).text(
  "• Manzil: Toshkent viloyati, O‘rtachirchiq tumani, Yangi Toshkent hududi (Food City ro‘parasi)\n" +
  "• Qo‘yliq metrosidan 8 daqiqa | Tashrif va konsultatsiya: 09:00 — 17:00 gacha\n" +
  "• Rasmiy Telegram kanal: @yangiqoyliq_TJM | AI Maslahatchi bot: @Vatan2333_bot\n" +
  "• Rasmiy veb-sayt: https://vatan-11-p5nw.vercel.app/",
  48, 696, { lineGap: 3 }
);

drawFooter(1);

// ==========================================
// SAHIFA 2: LOYIHA AFZALLIKLARI VA 70% TAYYOR TA'MIR
// ==========================================
doc.addPage();
drawHeader("2-BO‘LIM: LOYIHA AFZALLIKLARI, 70% TA’MIR VA INFRATUZILMA");

doc.font(fontBold).fontSize(16).fillColor(colors.dark).text("Nima Uchun “Yangi Qo‘yliq-2” Tanlanadi?", 35, 55);
doc.font(fontRegular).fontSize(9.5).fillColor(colors.gray).text(
  "“Yangi Qo‘yliq-2” majmuasi qulay yashash, oilaviy xavfsizlik va uzoq muddatli qadrli investitsiya uchun yaratilgan.",
  35, 75
);

// 70% Ta'mir bloki
doc.rect(35, 100, 525, 195).fillAndStroke('#ffffff', colors.border);
doc.rect(35, 100, 525, 26).fill(colors.secondaryLight);
doc.font(fontBold).fontSize(11).fillColor(colors.secondary).text("70% TAYYOR TA’MIR BILAN TOPSHIRILADIGAN QULAYLIKLAR:", 45, 107);

const repairs = [
  { t: "Devorlar sifatli oq suvoqda", d: "Barcha ichki devorlar tekislangan, pardozlashga (oboy yoki bo‘yoq) 100% tayyor." },
  { t: "Xonalar to‘liq bo‘lingan", d: "Pishiq g‘isht va mustahkam bloklar bilan xonadon xonalari to‘liq ajratilgan." },
  { t: "Pol silliq styajkasi", d: "Laminat yoki kafellarni to‘g‘ridan-to‘g‘ri yotqizishga tayyor ideal tekis pol." },
  { t: "Akfa premium shovqinsiz romlar", d: "Ko‘p kamerali, ko‘cha shovqinini o‘tkazmaydigan, issiqlikni saqlovchi romlar." },
  { t: "Kirish temir eshigi & ichki eshiklar", d: "Qalin xavfsiz temir kirish eshigi va xonalararo ichki eshiklar o‘rnatilgan." },
  { t: "Xonadon shaxtasiga kommunikatsiya", d: "Suv va elektr hisoblagichlari xonadon shaxtasiga olib kirilgan." },
  { t: "Shaxsiy isitish & xavfsiz elektr", d: "Gazsiz ekologik va xavfsiz elektr tizimi, individual harorat nazorati." }
];

repairs.forEach((r, idx) => {
  const y = 135 + idx * 22;
  doc.circle(48, y + 4, 3).fill(colors.secondary);
  doc.font(fontBold).fontSize(9).fillColor(colors.dark).text(r.t + " — ", 58, y, { continued: true });
  doc.font(fontRegular).fontSize(8.5).fillColor(colors.gray).text(r.d);
});

// Infratuzilma bloki
doc.rect(35, 310, 525, 235).fillAndStroke('#ffffff', colors.border);
doc.rect(35, 310, 525, 26).fill(colors.primaryLight);
doc.font(fontBold).fontSize(11).fillColor(colors.primaryDark).text("MAJMUANING BOY OILAVIY INFRATUZILMASI:", 45, 317);

const infra = [
  { t: "Zamonaviy maktab (Hudud ichida)", d: "Farzandlaringiz avtomobil yo‘lidan o‘tmasdan, xavfsiz piyoda qatnaydigan maktab." },
  { t: "Bolalar bog‘chasi (Hudud ichida)", d: "Kichik yoshdagi bolalar uchun majmua hududidagi shinam va xavfsiz maskan." },
  { t: "Korzinka supermarketi (1 daqiqa)", d: "Kunlik barcha oziq-ovqat va maishiy ehtiyojlar uchun yirik tarmoq do‘koni." },
  { t: "Tartibli keng yer usti avtoturargohi", d: "Aholining avtomobillari uchun xavfsiz, tartibli va keng yer usti to‘xtash joylari." },
  { t: "Food City savdo majmuasi ro‘parasi", d: "Ulgurji va chakana eng arzon oziq-ovqat va qishloq xo‘jaligi mahsulotlari bozori." },
  { t: "Sun'iy ko‘l va eko dam olish zonasi", d: "Oilaviy oqshom sayrlari, toza havo va salqin mikroiqlim yaratuvchi ko‘l." },
  { t: "Ochiq amfiteatr & Bolalar shaharchasi", d: "Bolalar uchun xavfsiz maydonchalar va madaniy tadbirlar o‘tkaziladigan amfiteatr." }
];

infra.forEach((inf, idx) => {
  const y = 345 + idx * 27;
  doc.circle(48, y + 4, 3).fill(colors.primary);
  doc.font(fontBold).fontSize(9).fillColor(colors.dark).text(inf.t + " — ", 58, y, { continued: true });
  doc.font(fontRegular).fontSize(8.5).fillColor(colors.gray).text(inf.d);
});

// Qurilish Texnologiyasi
doc.rect(35, 560, 525, 120).fillAndStroke('#ffffff', colors.border);
doc.font(fontBold).fontSize(11).fillColor(colors.dark).text("ZILZILABARDOSH MONOLIT QURILISH VA XAVFSIZLIK:", 45, 572);
doc.font(fontRegular).fontSize(8.5).fillColor(colors.gray).text(
  "• Zilzilabardoshlik: 9 ballik zilzilaga bardosh beruvchi yaxlit temir-beton monolit karkas tizimi.\n" +
  "• G‘isht devorlar: Yuqori issiqlik va shovqin izolyatsiyasini ta'minlovchi pishiq g‘isht terimi.\n" +
  "• 24/7 Qo‘riqlash: Videokuzatuv kameralari, yopiq xavfsiz hovli va domofon tizimi.\n" +
  "• Shovqinsiz tezyurar liftlar: Har bir podyezdda yuk va yo‘lovchi tashuvchi zamonaviy liftlar.",
  45, 592, { lineGap: 4 }
);

// Oilaviy maslahat eslatmasi
doc.rect(35, 695, 525, 95).fillAndStroke(colors.amberLight, colors.amber);
doc.font(fontBold).fontSize(10.5).fillColor(colors.amber).text("💡 OILAVIY MASLAHATLASHUV UCHUN ESLATMA:", 45, 706);
doc.font(fontRegular).fontSize(8.5).fillColor(colors.dark).text(
  "Xonadon tanlashda oilangiz a'zolari bilan quyidagi sahifalardagi arxitektura chizmalari, derazalarning qarash " +
  "tomoni va qavatlar narxlarini solishtirib chiqing. Quyidagi 3-sahifada 100% to‘lov va 30 oy foizsiz bo‘lib " +
  "to‘lash shartlarining rasmiy narxlar jadvali keltirilgan.",
  45, 723, { width: 505, lineGap: 3 }
);

drawFooter(2);

// ==========================================
// SAHIFA 3: NARXLAR MATRITSASI VA TO'LOV TURLARI
// ==========================================
doc.addPage();
drawHeader("3-BO‘LIM: TO‘LOV TURLARI VA RASMIY NARXLAR MATRITSASI");

doc.font(fontBold).fontSize(16).fillColor(colors.dark).text("Qat'iy To‘lov Qoidalari va Narxlar Jadvali", 35, 55);
doc.font(fontRegular).fontSize(9).fillColor(colors.gray).text(
  "Majmuada barcha xonadonlar qat'iy 2 ta to‘lov guruhiga bo‘lingan. Hech qanday yashirin to‘lovlar yo‘q.",
  35, 75
);

// JADVAL 1: FAQAT 100% TO'LOV
doc.rect(35, 95, 525, 230).fillAndStroke('#ffffff', colors.border);
doc.rect(35, 95, 525, 25).fill(colors.amberLight);
doc.font(fontBold).fontSize(10).fillColor(colors.amber).text("1. FAQAT 100% TO‘LOVGA SOTILADIGAN XONADONLAR (33% CHEGIRMA BILAN):", 45, 102);

doc.font(fontRegular).fontSize(8).fillColor(colors.dark).text(
  "⚠️ Bu xonadonlar (22, 25, 34 va 39 m²) bo‘lib to‘lashga berilmaydi! 33% chegirma narxida to‘liq to‘lab olinadi:",
  45, 126
);

// 100% Table Header
const thY = 142;
doc.rect(45, thY, 505, 18).fill(colors.primaryDark);
doc.font(fontBold).fontSize(8).fillColor('#ffffff');
doc.text("Maydon", 52, thY + 5);
doc.text("Xonalar", 105, thY + 5);
doc.text("9–12-qavatlar (Eng arzon)", 165, thY + 5);
doc.text("5–8-qavatlar (Arzonroq)", 300, thY + 5);
doc.text("2–4-qavatlar (Talabgir)", 430, thY + 5);

const fullPayRows = [
  { area: "22 m²", rooms: "Studio", f9: "151.1 mln (6.87 mln/m²)", f5: "158.5 mln (7.20 mln/m²)", f2: "165.8 mln (7.54 mln/m²)" },
  { area: "25 m²", rooms: "Studio", f9: "171.7 mln (6.87 mln/m²)", f5: "180.1 mln (7.20 mln/m²)", f2: "188.4 mln (7.54 mln/m²)" },
  { area: "34 m²", rooms: "1 xonali", f9: "233.5 mln (6.87 mln/m²)", f5: "244.9 mln (7.20 mln/m²)", f2: "256.3 mln (7.54 mln/m²)" },
  { area: "39 m²", rooms: "1 xonali", f9: "267.8 mln (6.87 mln/m²)", f5: "280.9 mln (7.20 mln/m²)", f2: "294.0 mln (7.54 mln/m²)" },
];

fullPayRows.forEach((row, idx) => {
  const rY = thY + 18 + idx * 24;
  doc.rect(45, rY, 505, 24).fill(idx % 2 === 0 ? '#f8fafc' : '#ffffff');
  doc.font(fontBold).fontSize(8.5).fillColor(colors.dark).text(row.area, 52, rY + 7);
  doc.font(fontRegular).fontSize(8).fillColor(colors.gray).text(row.rooms, 105, rY + 7);
  doc.font(fontBold).fontSize(8).fillColor(colors.secondary).text(row.f9, 165, rY + 7);
  doc.font(fontRegular).fontSize(8).fillColor(colors.dark).text(row.f5, 300, rY + 7);
  doc.font(fontRegular).fontSize(8).fillColor(colors.dark).text(row.f2, 430, rY + 7);
});

doc.font(fontRegular).fontSize(7.5).fillColor(colors.gray).text(
  "* Izoh: 9–12-qavatlar narxi eng arzon. Qavat qanchalik yuqorilasa, narx shunchalik hamyonbop bo‘ladi.",
  45, 298
);

// JADVAL 2: 30 OYGACHA 0% FOIZSIZ BO'LIB TO'LASH
doc.rect(35, 340, 525, 260).fillAndStroke('#ffffff', colors.border);
doc.rect(35, 340, 525, 25).fill(colors.primaryLight);
doc.font(fontBold).fontSize(10).fillColor(colors.primaryDark).text("2. 30 OYGACHA 0% FOIZSIZ BO‘LIB TO‘LASHGA BERILADIGAN XONADONLAR:", 45, 347);

doc.font(fontRegular).fontSize(8).fillColor(colors.dark).text(
  "✅ Quyidagi xonadonlarni boshlang‘ich to‘lov qilib, qolgan summani 30 oy davomida 0% ustamasiz to‘lash mumkin:",
  45, 372
);

// Installment Table Header
const instThY = 388;
doc.rect(45, instThY, 505, 18).fill(colors.primaryDark);
doc.font(fontBold).fontSize(8).fillColor('#ffffff');
doc.text("Xona & Maydon", 52, instThY + 5);
doc.text("Bosh to‘lov", 155, instThY + 5);
doc.text("Oylik to‘lov (30 oy)", 235, instThY + 5);
doc.text("100% to‘lovda (33% chegirma)", 360, instThY + 5);

const instRows = [
  { name: "1 xonali (41 m²)", init: "60 mln so‘m", monthly: "4 mln so‘m / oy", full: "281.6 — 309.0 mln" },
  { name: "1 xonali (43 m²)", init: "60 mln so‘m", monthly: "4 mln so‘m / oy", full: "295.3 — 324.1 mln" },
  { name: "1 xonali (49 m²)", init: "60 mln so‘m", monthly: "4 mln so‘m / oy", full: "336.5 — 369.3 mln" },
  { name: "2 xonali (54 m²)", init: "75 mln so‘m", monthly: "5 mln so‘m / oy", full: "352.8 — 388.9 mln" },
  { name: "2 xonali (55 m²)", init: "75 mln so‘m", monthly: "5 mln so‘m / oy", full: "359.3 — 396.1 mln" },
  { name: "3 xonali (70 m²)", init: "99 mln so‘m", monthly: "6 mln so‘m / oy", full: "433.8 — 480.7 mln" },
  { name: "3 xonali (77 m²)", init: "99 mln so‘m", monthly: "6 mln so‘m / oy", full: "477.2 — 528.8 mln" },
];

instRows.forEach((row, idx) => {
  const rY = instThY + 18 + idx * 22;
  doc.rect(45, rY, 505, 22).fill(idx % 2 === 0 ? '#f8fafc' : '#ffffff');
  doc.font(fontBold).fontSize(8.5).fillColor(colors.dark).text(row.name, 52, rY + 6);
  doc.font(fontBold).fontSize(8.5).fillColor(colors.secondary).text(row.init, 155, rY + 6);
  doc.font(fontBold).fontSize(8.5).fillColor(colors.primaryDark).text(row.monthly, 235, rY + 6);
  doc.font(fontRegular).fontSize(8).fillColor(colors.gray).text(row.full, 360, rY + 6);
});

// To'lov xulosasi
doc.rect(35, 615, 525, 95).fillAndStroke('#ffffff', colors.border);
doc.font(fontBold).fontSize(10).fillColor(colors.dark).text("MUHIM TO‘LOV AFZALLIKLARI:", 45, 626);
doc.font(fontRegular).fontSize(8.5).fillColor(colors.gray).text(
  "• Foizsiz to‘lov: 30 oy davomida hech qanday bank foizi yoki ustama hisoblanmaydi (0% to‘g‘ridan-to‘g‘ri quruvchidan).\n" +
  "• Narx muzlatiladi: Shartnoma imzolangan kundagi xonadon narxi qurilish oxirigacha qat'iy o‘zgarmas qoladi.\n" +
  "• To‘liq qonuniy: Davlat ro‘yxatidan o‘tgan rasmiy shartnoma bilan xarid qilinadi.\n" +
  "• Bepul bron qilish: Xonadonni 24 soatga bepul bron qilib narxni ushlab qolishingiz mumkin.",
  45, 642, { lineGap: 3 }
);

// Tashrif eslatmasi
doc.rect(35, 720, 525, 70).fillAndStroke(colors.primaryLight, colors.border);
doc.font(fontBold).fontSize(9.5).fillColor(colors.primaryDark).text("SAVDO OFISIGA TASHRIF BUYURIB XONADONNI TANLASH:", 45, 730);
doc.font(fontRegular).fontSize(8).fillColor(colors.dark).text(
  "Haftaning istalgan kuni soat 17:00 gacha Food City ro‘parasidagi savdo ofisimizga tashrif buyurishingiz mumkin. " +
  "Menejerimiz Alisher sizga barcha qavatlar, ko‘rinishlar (view) va to‘lov shartnomalarini taqdim etadi.",
  45, 746, { width: 505, lineGap: 2 }
);

drawFooter(3);

// ==========================================
// SAHIFA 4: 1 XONALI VA STUDIYA XONADONLAR (22, 25, 34, 39 m²)
// ==========================================
doc.addPage();
drawHeader("4-BO‘LIM: STUDIYA VA 1 XONALI XONADONLAR REJASI (22, 25, 34, 39 m²)");

doc.font(fontBold).fontSize(15).fillColor(colors.dark).text("Studiya va 1 Xonali Xonadonlar (Faqat 100% To‘lovga)", 35, 55);
doc.font(fontRegular).fontSize(8.5).fillColor(colors.gray).text(
  "Yosh oilalar, talabalar va ijaraga berish investitsiyasi uchun eng hamyonbop variantlar (33% chegirma bilan):",
  35, 73
);

function drawApartmentBox(x, y, w, h, apt) {
  doc.rect(x, y, w, h).fillAndStroke('#ffffff', colors.border);
  // Title Bar
  doc.rect(x, y, w, 22).fill(colors.cardBg);
  doc.font(fontBold).fontSize(9.5).fillColor(colors.primaryDark).text(apt.title, x + 8, y + 6);
  doc.font(fontBold).fontSize(8).fillColor(colors.secondary).text(apt.badge, x + w - 100, y + 6, { align: 'right', width: 92 });

  // Image
  const imgPath = path.join(__dirname, '..', 'public', apt.image);
  if (fs.existsSync(imgPath)) {
    doc.rect(x + 8, y + 28, 125, 120).stroke('#e2e8f0');
    doc.image(imgPath, x + 9, y + 29, { width: 123, height: 118, fit: [123, 118] });
  }

  // Info Details
  const infoX = x + 140;
  doc.font(fontBold).fontSize(8.5).fillColor(colors.dark).text("Maydon: ", infoX, y + 30, { continued: true });
  doc.font(fontRegular).fontSize(8.5).fillColor(colors.gray).text(apt.area);

  doc.font(fontBold).fontSize(8.5).fillColor(colors.dark).text("To‘lov turi: ", infoX, y + 43, { continued: true });
  doc.font(fontBold).fontSize(8.5).fillColor(colors.amber).text(apt.payType);

  doc.font(fontBold).fontSize(8).fillColor(colors.dark).text("Qavatlar bo‘yicha narxi (33% chegirma):", infoX, y + 58);
  doc.font(fontRegular).fontSize(7.5).fillColor(colors.gray).text("• 9–12-qavatlar: ", infoX, y + 70, { continued: true });
  doc.font(fontBold).fontSize(7.5).fillColor(colors.secondary).text(apt.p9);

  doc.font(fontRegular).fontSize(7.5).fillColor(colors.gray).text("• 5–8-qavatlar: ", infoX, y + 82, { continued: true });
  doc.font(fontBold).fontSize(7.5).fillColor(colors.dark).text(apt.p5);

  doc.font(fontRegular).fontSize(7.5).fillColor(colors.gray).text("• 2–4-qavatlar: ", infoX, y + 94, { continued: true });
  doc.font(fontBold).fontSize(7.5).fillColor(colors.dark).text(apt.p2);

  doc.font(fontRegular).fontSize(7).fillColor(colors.gray).text(apt.desc, infoX, y + 110, { width: w - 150, lineGap: 1.5 });
}

// 4 ta model 2x2 grid
const studioModels = [
  {
    title: "1A-22 | 22 m² Studio",
    badge: "151.1 mln dan",
    image: "22.jpg",
    area: "22.0 m²",
    payType: "Faqat 100% to‘lov",
    p9: "151 085 000 so‘m",
    p5: "158 455 000 so‘m",
    p2: "165 825 000 so‘m",
    desc: "Ixcham va barcha qulayliklari mujassamlashgan studio format. Oshxona va yashash zonasi birlashtirilgan."
  },
  {
    title: "1A-25 | 25 m² Studio",
    badge: "171.7 mln dan",
    image: "25.jpg",
    area: "25.0 m²",
    payType: "Faqat 100% to‘lov",
    p9: "171 687 500 so‘m",
    p5: "180 062 500 so‘m",
    p2: "188 437 500 so‘m",
    desc: "Keng dahliz, katta derazali yorug‘ studio. To‘liq sanuzel va ergonomik oshxona burchagi."
  },
  {
    title: "1B-34 | 34 m² (1 xonali)",
    badge: "233.5 mln dan",
    image: "34.jpg",
    area: "34.0 m²",
    payType: "Faqat 100% to‘lov",
    p9: "233 495 000 so‘m",
    p5: "244 885 000 so‘m",
    p2: "256 275 000 so‘m",
    desc: "Alohida oshxona, keng yotoqxona, dahliz va balkon. Shinam yakka tartibdagi 1 xonali uy."
  },
  {
    title: "1B-39 | 39 m² (1 xonali)",
    badge: "267.8 mln dan",
    image: "39.jpg",
    area: "39.0 m²",
    payType: "Faqat 100% to‘lov",
    p9: "267 832 500 so‘m",
    p5: "280 897 500 so‘m",
    p2: "293 962 500 so‘m",
    desc: "Katta oynali, quyosh nuri mo‘l tushadigan keng 1 xonali xonadon. Alohida oshxona va sanuzel."
  }
];

studioModels.forEach((apt, idx) => {
  const x = 35 + (idx % 2) * 268;
  const y = 92 + Math.floor(idx / 2) * 165;
  drawApartmentBox(x, y, 257, 155, apt);
});

// Xulosa va Maslahat
doc.rect(35, 435, 525, 60).fillAndStroke(colors.primaryLight, colors.border);
doc.font(fontBold).fontSize(9.5).fillColor(colors.primaryDark).text("YOSHLAR VA INVESTORLAR UCHUN MAXSUS TAKLIF:", 45, 444);
doc.font(fontRegular).fontSize(8).fillColor(colors.dark).text(
  "Ushbu toifadagi xonadonlar Food City va Yangi Toshkent loyihasi yaqinida joylashgani sababli " +
  "ijara daromadi juda yuqori bo‘ladi. 100% to‘lovda 33% katta chegirma berilishi sababli poytaxtdagi eng hamyonbop taklifdir.",
  45, 458, { width: 505, lineGap: 2 }
);

// 30 OYLIK 1-XONALILAR KELGUSI SAHIFADA
doc.rect(35, 510, 525, 275).fillAndStroke('#ffffff', colors.border);
doc.font(fontBold).fontSize(11).fillColor(colors.dark).text("30 OYGACHA BO‘LIB TO‘LASH IMKONI BO‘LGAN 1 XONALILAR (41, 43, 49 m²):", 45, 522);
doc.font(fontRegular).fontSize(8.5).fillColor(colors.gray).text(
  "Agar sizga 30 oygacha foizsiz bo‘lib to‘lash qulay bo‘lsa, 41 m², 43 m² va 49 m² xonadonlar eng to‘g‘ri tanlovdir:\n" +
  "• Boshlang‘ich to‘lov: 60 000 000 so‘m (60 mln)\n" +
  "• Oylik to‘lov: 4 000 000 so‘m (4 mln) — 30 oy davomida 0% ustama bilan!\n" +
  "Ushbu xonadonlarning batafsil rejalari keyingi 5-sahifada keltirilgan.",
  45, 540, { lineGap: 3 }
);

// Kichik vizual rasm 41 m²
const img41 = path.join(__dirname, '..', 'public', '41.jpg');
if (fs.existsSync(img41)) {
  doc.rect(45, 615, 245, 155).stroke(colors.border);
  doc.image(img41, 47, 617, { width: 241, height: 151, fit: [241, 151] });
}

doc.font(fontBold).fontSize(10).fillColor(colors.primaryDark).text("41 m² (Keng 1 xonali planirovka)", 305, 625);
doc.font(fontRegular).fontSize(8).fillColor(colors.gray).text(
  "• Katta yotoqxona: 18.2 m²\n" +
  "• Alohida oshxona: 11.5 m²\n" +
  "• Dahliz va sanuzel: 8.5 m²\n" +
  "• Bosh to‘lov: 60 mln so‘m\n" +
  "• Oylik: 4 mln so‘m (30 oy)\n" +
  "• 100% to‘lovda: 281.6 mln dan",
  305, 645, { lineGap: 4 }
);

drawFooter(4);

// ==========================================
// SAHIFA 5: 1 XONALI BO'LIB TO'LANADIGAN (41, 43, 49 m²) & 2 XONALI (54, 55 m²)
// ==========================================
doc.addPage();
drawHeader("5-BO‘LIM: 1 VA 2 XONALI BO‘LIB TO‘LASHGA BERILADIGAN UYLAR");

doc.font(fontBold).fontSize(15).fillColor(colors.dark).text("Bo‘lib To‘lanadigan 1 va 2 Xonali Xonadonlar", 35, 55);
doc.font(fontRegular).fontSize(8.5).fillColor(colors.gray).text(
  "30 oy davomida 0% ustamasiz oylik to‘lov grafikasi bilan oilaviy xarid qilish uchun eng qulay uylar:",
  35, 73
);

// 43 m² va 49 m²
const midModels = [
  {
    title: "1C-43 | 43 m² (1 xonali)",
    badge: "Bosh to‘lov: 60 mln",
    image: "43.jpg",
    area: "43.0 m²",
    payType: "30 oy 0% bo‘lib to‘lash (4 mln/oy)",
    p9: "295 302 500 so‘m (100% to‘lovda)",
    p5: "309 707 500 so‘m",
    p2: "324 112 500 so‘m",
    desc: "Keng 1 xonali xonadon. Katta oyna, alohida shinam oshxona va balkon. Oilaviy yashash uchun juda qulay."
  },
  {
    title: "1D-49 | 49 m² (1 xonali keng)",
    badge: "Bosh to‘lov: 60 mln",
    image: "49.jpg",
    area: "49.0 m²",
    payType: "30 oy 0% bo‘lib to‘lash (4 mln/oy)",
    p9: "336 507 500 so‘m (100% to‘lovda)",
    p5: "352 922 500 so‘m",
    p2: "369 337 500 so‘m",
    desc: "Eng katta 1 xonali xonadon. Istakka ko‘ra 2 xonaga bemalol ajratish (evro-ikki xona) imkoniyati mavjud."
  },
  {
    title: "2A-54 | 54 m² (2 xonali)",
    badge: "Bosh to‘lov: 75 mln",
    image: "54.jpg",
    area: "54.0 m²",
    payType: "30 oy 0% bo‘lib to‘lash (5 mln/oy)",
    p9: "352 755 000 so‘m (100% to‘lovda)",
    p5: "370 845 000 so‘m",
    p2: "388 935 000 so‘m",
    desc: "Eng talabgir 2 xonali oilaviy reja. Mehmonxona, yotoqxona, alohida oshxona va keng sanuzel."
  },
  {
    title: "2B-55 | 55 m² (2 xonali)",
    badge: "Bosh to‘lov: 75 mln",
    image: "55.jpg",
    area: "55.0 m²",
    payType: "30 oy 0% bo‘lib to‘lash (5 mln/oy)",
    p9: "359 287 500 so‘m (100% to‘lovda)",
    p5: "377 692 500 so‘m",
    p2: "396 097 500 so‘m",
    desc: "Shinam ikki tomonlama yorug‘lik tushuvchi 2 xonali uy. Ota-onalar va farzandlar uchun alohida xonalar."
  }
];

midModels.forEach((apt, idx) => {
  const x = 35 + (idx % 2) * 268;
  const y = 92 + Math.floor(idx / 2) * 165;
  drawApartmentBox(x, y, 257, 155, apt);
});

// 2 xonali afzalliklari bloki
doc.rect(35, 435, 525, 115).fillAndStroke('#ffffff', colors.border);
doc.font(fontBold).fontSize(11).fillColor(colors.primaryDark).text("NIMA UCHUN 54 VA 55 m² 2 XONALILAR ENG TALABGIR?", 45, 447);
doc.font(fontRegular).fontSize(8.5).fillColor(colors.gray).text(
  "1. Qulay boshlang‘ich to‘lov: 75 mln so‘m to‘lab xaridni boshlash mumkin.\n" +
  "2. Yengil oylik grafik: 30 oy davomida oyiga atigi 5 mln so‘m to‘lanadi.\n" +
  "3. To‘liq 70% tayyor: Oq suvoq, styajka, Akfa derazalar va eshiklar o‘rnatilgan bo‘ladi.\n" +
  "4. Yuqori likvidlik: Comfort class 2 xonali uylar ikkilamchi bozorda ham, ijarada ham eng tez sotiladigan mulk hisoblanadi.",
  45, 467, { lineGap: 3 }
);

// Katta 54 m² rasmi
const img54 = path.join(__dirname, '..', 'public', '54.jpg');
if (fs.existsSync(img54)) {
  doc.rect(35, 565, 525, 225).fillAndStroke('#ffffff', colors.border);
  doc.image(img54, 45, 575, { width: 300, height: 205, fit: [300, 205] });
  doc.font(fontBold).fontSize(11).fillColor(colors.dark).text("2 xonali 54 m² batafsil chizmasi:", 360, 580);
  doc.font(fontRegular).fontSize(8).fillColor(colors.gray).text(
    "• Mehmonxona: 19.4 m²\n" +
    "• Yotoqxona: 14.8 m²\n" +
    "• Oshxona: 10.6 m²\n" +
    "• Dahliz: 5.2 m²\n" +
    "• Sanuzel: 4.0 m²\n\n" +
    "Bosh to‘lov: 75 mln\n" +
    "Oylik: 5 mln (30 oy)\n\n" +
    "Bron qilish: @Vatan2333_bot",
    360, 605, { lineGap: 3.5 }
  );
}

drawFooter(5);

// ==========================================
// SAHIFA 6: 3 XONALI KENG XONADONLAR (70 VA 77 m²)
// ==========================================
doc.addPage();
drawHeader("6-BO‘LIM: 3 XONALI PREMIUM KENG XONADONLAR (70 VA 77 m²)");

doc.font(fontBold).fontSize(15).fillColor(colors.dark).text("3 Xonali Katta Oilaviy Xonadonlar (70 va 77 m²)", 35, 55);
doc.font(fontRegular).fontSize(8.5).fillColor(colors.gray).text(
  "Katta oilalar, kenglik va to‘liq erkinlikni xush ko‘ruvchilar uchun ideal darajadagi 3 xonali xonadonlar:",
  35, 73
);

// 70 m² va 77 m² taqqoslash
const largeModels = [
  {
    title: "3A-70 | 70 m² (3 xonali)",
    badge: "Bosh to‘lov: 99 mln",
    image: "70.jpg",
    area: "70.0 m²",
    payType: "30 oy 0% bo‘lib to‘lash (6 mln/oy)",
    p9: "433 825 000 so‘m (100% to‘lovda)",
    p5: "457 275 000 so‘m",
    p2: "480 725 000 so‘m",
    desc: "3 xonali qulay reja. Katta mehmonxona, ota-onalar yotoqxonasi, bolalar xonasi va keng oshxona."
  },
  {
    title: "3B-77 | 77 m² (3 xonali premium)",
    badge: "Bosh to‘lov: 99 mln",
    image: "77.jpg",
    area: "77.0 m²",
    payType: "30 oy 0% bo‘lib to‘lash (6 mln/oy)",
    p9: "477 207 500 so‘m (100% to‘lovda)",
    p5: "503 002 500 so‘m",
    p2: "528 797 500 so‘m",
    desc: "Majmuadagi eng katta va hashamatli xonadon. 2 ta sanuzel, keng balkon va ulkan panoramik derazalar."
  }
];

largeModels.forEach((apt, idx) => {
  const x = 35 + (idx % 2) * 268;
  const y = 92;
  drawApartmentBox(x, y, 257, 155, apt);
});

// Katta 70 va 77 rasmlari yonma-yon
const img70 = path.join(__dirname, '..', 'public', '70.jpg');
const img77 = path.join(__dirname, '..', 'public', '77.jpg');

if (fs.existsSync(img70)) {
  doc.rect(35, 260, 257, 230).fillAndStroke('#ffffff', colors.border);
  doc.image(img70, 42, 268, { width: 243, height: 180, fit: [243, 180] });
  doc.font(fontBold).fontSize(9).fillColor(colors.dark).text("70 m² — 3 xonali reja-chizmasi", 45, 458);
  doc.font(fontRegular).fontSize(7.5).fillColor(colors.gray).text("Bosh to‘lov: 99 mln | Oylik: 6 mln (30 oy)", 45, 472);
}

if (fs.existsSync(img77)) {
  doc.rect(303, 260, 257, 230).fillAndStroke('#ffffff', colors.border);
  doc.image(img77, 310, 268, { width: 243, height: 180, fit: [243, 180] });
  doc.font(fontBold).fontSize(9).fillColor(colors.dark).text("77 m² — 3 xonali reja-chizmasi (2 ta sanuzel)", 313, 458);
  doc.font(fontRegular).fontSize(7.5).fillColor(colors.gray).text("Bosh to‘lov: 99 mln | Oylik: 6 mln (30 oy)", 313, 472);
}

// 3 xonali uchun maxsus oilaviy qulayliklar
doc.rect(35, 505, 525, 120).fillAndStroke('#ffffff', colors.border);
doc.font(fontBold).fontSize(10.5).fillColor(colors.primaryDark).text("3 XONALI XONADONLARNING OILAVIY USTUNLIKLARI:", 45, 517);
doc.font(fontRegular).fontSize(8.5).fillColor(colors.gray).text(
  "• Har bir oila a'zosi uchun alohida shaxsiy makon (ota-onalar va farzandlar alohida xonalarda).\n" +
  "• Mehmon kutish uchun 20+ m² ulkan keng mehmonxona (zal).\n" +
  "• Katta oilalar uchun 2 ta hojatxona/sanuzel (ertalabki tirbandliklarsiz).\n" +
  "• Keng oshxona: Butun oila jam bo‘lib kechki ovqat tanavvul qilishi uchun yetarli maydon.\n" +
  "• 30 oy foizsiz grafik: Boshiga 99 mln so‘m to‘lab, oyma-oy 6 mln dan to‘lash imkoniyati.",
  45, 535, { lineGap: 3 }
);

// Ofisga kelib ko'rish chaqirig'i
doc.rect(35, 640, 525, 150).fillAndStroke(colors.cardBg, colors.border);
doc.font(fontBold).fontSize(11).fillColor(colors.primaryDark).text("OILA A'ZOLARINGIZ BILAN OFISIMIZGA KELING!", 45, 655);
doc.font(fontRegular).fontSize(8.5).fillColor(colors.dark).text(
  "Biz mijozlarimizga xonadon tanlashdan oldin albatta oilaviy tashrif buyurishni tavsiya qilamiz.\n\n" +
  "Savdo ofisimizda siz:\n" +
  "1. Katta arxitektura maketini jonli ko‘rishingiz;\n" +
  "2. Qurilish maydonini o‘z ko‘zingiz bilan ko‘zdan kechirishingiz;\n" +
  "3. Qavatlar va derazalarning quyoshga qarash burchaklarini aniqlashingiz;\n" +
  "4. Shartnoma nusxasi bilan to‘liq tanishib, bepul 24 soatga bron qilishingiz mumkin.",
  45, 675, { lineGap: 3 }
);

drawFooter(6);

// ==========================================
// SAHIFA 7: KOMPANIYA ISHONCHI VA TOPSHIRILGAN 6 TA LOYIHA
// ==========================================
doc.addPage();
drawHeader("7-BO‘LIM: “VATAN” QURILISH KOMPANIYASINING 13 YILLIK TAJRIBASI");

doc.font(fontBold).fontSize(15).fillColor(colors.dark).text("13 Yillik Ishonch va Topshirilgan Loyihalar", 35, 55);
doc.font(fontRegular).fontSize(8.5).fillColor(colors.gray).text(
  "“VATAN” qurilish kompaniyasi 2013-yildan buyon xizmat qilib, 10 000+ oilani shaxsiy xonadon bilan ta'minlagan.",
  35, 73
);

const pastProjects = [
  { name: "Yangi Qo‘yliq-1", year: "2024-yil", units: "800+ xonadon", img: "Yangi Qoyliq-1 loyixasi.jpg" },
  { name: "IKAT majmuasi", year: "2023-yil", units: "650+ xonadon", img: "IKAT loyixasi.jpg" },
  { name: "Madrid turar-joyi", year: "2022-yil", units: "520+ xonadon", img: "Madrid loyixasi.jpg" },
  { name: "O‘z loyihasi", year: "2021-yil", units: "480+ xonadon", img: "O'z loyixasi.jpg" },
  { name: "Yakkasaroy turar-joyi", year: "2019-yil", units: "700+ xonadon", img: "Yakkasroy loyixasi.jpg" },
  { name: "Qo‘yliq Katta Bozori", year: "2016-yil", units: "7000+ do‘konlar", img: "Qoyliq katta bozori loyixasi.jpg" },
];

pastProjects.forEach((proj, idx) => {
  const col = idx % 3;
  const row = Math.floor(idx / 3);
  const x = 35 + col * 179;
  const y = 95 + row * 155;

  doc.rect(x, y, 169, 145).fillAndStroke('#ffffff', colors.border);

  const pImgPath = path.join(__dirname, '..', 'public', proj.img);
  if (fs.existsSync(pImgPath)) {
    doc.image(pImgPath, x + 6, y + 6, { width: 157, height: 95, fit: [157, 95] });
  }

  doc.font(fontBold).fontSize(9).fillColor(colors.dark).text(proj.name, x + 8, y + 107);
  doc.font(fontRegular).fontSize(7.5).fillColor(colors.primaryDark).text(`Topshirilgan: ${proj.year}`, x + 8, y + 120);
  doc.font(fontRegular).fontSize(7.5).fillColor(colors.secondary).text(`Hajmi: ${proj.units}`, x + 8, y + 131);
});

// Huquqiy kafolatlar
doc.rect(35, 420, 525, 175).fillAndStroke('#ffffff', colors.border);
doc.rect(35, 420, 525, 25).fill(colors.secondaryLight);
doc.font(fontBold).fontSize(10.5).fillColor(colors.secondary).text("QONUNIY SHARTNOMA VA HUQUQIY KAFOLATLAR:", 45, 427);

doc.font(fontRegular).fontSize(8.5).fillColor(colors.dark).text(
  "1. Davlat ro‘yxatidan o‘tgan shartnoma: Har bir xaridor bilan qat'iy davlat talablariga mos shartnoma tuziladi.\n" +
  "2. Ruxsatnomalar to‘liq: Barcha arxitektura va qurilish ekspertizasi xulosalari, yer ajratish hujjatlari mavjud.\n" +
  "3. Qat'iy narx kafolati: Shartnoma imzolangandan so‘ng xonadon narxi oshirilmaydi, inflyatsiyadan himoyalangan.\n" +
  "4. Qat'iy muddat kafolati: Majmua 2028-yilning 4-choragida to‘liq foydalanishga topshiriladi.\n" +
  "5. Kadastr hujjatlari: Topshirilgach har bir xonadonga alohida davlat kadastri rasmiylashtirib beriladi.",
  45, 455, { lineGap: 5 }
);

// Bosqichlar (Roadmap)
doc.rect(35, 610, 525, 180).fillAndStroke(colors.primaryLight, colors.border);
doc.font(fontBold).fontSize(10.5).fillColor(colors.primaryDark).text("XONADON XARID QILISHNING ODDIY 4 BOSQICHI:", 45, 622);

const steps = [
  { step: "1", title: "Xonadonni tanlash", desc: "Ushbu katalogdan o‘zingizga ma'qul xona, maydon va qavatni tanlaysiz." },
  { step: "2", title: "24 soatga bepul bron", desc: "Narxni muzlatib qo‘yish uchun bot yoki saytda bepul bron qilasiz." },
  { step: "3", title: "Savdo ofisiga tashrif", desc: "Food City ro‘parasidagi ofisga kelib, chizmalar va shartnoma bilan tanishasiz." },
  { step: "4", title: "Shartnoma va to‘lov", desc: "Shartnoma tuzib, boshlang‘ich to‘lovni amalga oshirasiz va xonadon egasi bo‘lasiz!" }
];

steps.forEach((st, idx) => {
  const y = 645 + idx * 34;
  doc.circle(52, y + 8, 9).fill(colors.primaryDark);
  doc.font(fontBold).fontSize(9).fillColor('#ffffff').text(st.step, 49, y + 3);
  doc.font(fontBold).fontSize(9).fillColor(colors.dark).text(st.title + " — ", 68, y + 3, { continued: true });
  doc.font(fontRegular).fontSize(8).fillColor(colors.gray).text(st.desc);
});

drawFooter(7);

// ==========================================
// SAHIFA 8: ALOQA VA TASHRIFNI BRON QILISH
// ==========================================
doc.addPage();
drawHeader("8-BO‘LIM: SAVDO OFISI MANZILI VA BOG‘LANISH");

doc.font(fontBold).fontSize(16).fillColor(colors.dark).text("Savdo Ofisi va Qurilish Lokatsiyasi", 35, 55);
doc.font(fontRegular).fontSize(9).fillColor(colors.gray).text(
  "Sizni va oilangizni savdo ofisimizda kutib qolamiz. Tashrif buyurishdan oldin bepul konsultatsiya oling.",
  35, 75
);

// Manzil kartochkasi
doc.rect(35, 95, 525, 190).fillAndStroke('#ffffff', colors.border);
doc.font(fontBold).fontSize(12).fillColor(colors.primaryDark).text("SAVDO OFISIMIZ REKVIZITLARI:", 48, 110);

doc.font(fontRegular).fontSize(9).fillColor(colors.dark).text(
  "📍 Yuridik va amaliy manzil:\n" +
  "Toshkent viloyati, O‘rtachirchiq tumani, O‘choqli MFY, Yashnobod ko‘chasi, 44a-uy\n\n" +
  "🎯 Asosiy mo‘ljal: Yangi Toshkent hududi, Food City ulgurji savdo majmuasi ro‘parasi.\n\n" +
  "🚇 Metro: Qo‘yliq metrosidan atigi 8 daqiqalik masofada joylashgan.\n\n" +
  "⏰ Ish vaqti: Har kuni 09:00 dan 18:00 gacha (Dam olish kunlarisiz uzluksiz ishlaymiz).\n\n" +
  "📅 Tashrif va konsultatsiya: 17:00 gacha tashrif buyurishingiz mumkin.",
  48, 130, { lineGap: 3 }
);

// Raqamli aloqa kanallari
doc.rect(35, 300, 525, 230).fillAndStroke(colors.cardBg, colors.border);
doc.font(fontBold).fontSize(12).fillColor(colors.dark).text("RASMIY RAQAMLI KANALLARIMIZ:", 48, 315);

doc.rect(48, 340, 499, 45).fillAndStroke('#ffffff', colors.border);
doc.font(fontBold).fontSize(10).fillColor(colors.primaryDark).text("🤖 Rasmiy AI Maslahatchi Telegram Bot:", 60, 350);
doc.font(fontBold).fontSize(9).fillColor(colors.dark).text("👉 @Vatan2333_bot", 60, 365);
doc.font(fontRegular).fontSize(8).fillColor(colors.gray).text("24/7 rejimda barcha savollarga javob beradi va arizalarni qabul qiladi.", 200, 365);

doc.rect(48, 395, 499, 45).fillAndStroke('#ffffff', colors.border);
doc.font(fontBold).fontSize(10).fillColor(colors.primaryDark).text("📢 Rasmiy Telegram Kanalimiz:", 60, 405);
doc.font(fontBold).fontSize(9).fillColor(colors.dark).text("👉 @yangiqoyliq_TJM", 60, 420);
doc.font(fontRegular).fontSize(8).fillColor(colors.gray).text("Qurilish jarayonidan jonli video va fotosuratlar, yangiliklar.", 200, 420);

doc.rect(48, 450, 499, 45).fillAndStroke('#ffffff', colors.border);
doc.font(fontBold).fontSize(10).fillColor(colors.primaryDark).text("🌐 Rasmiy Veb-Saytimiz:", 60, 460);
doc.font(fontBold).fontSize(9).fillColor(colors.dark).text("👉 https://vatan-11-p5nw.vercel.app/", 60, 475);
doc.font(fontRegular).fontSize(8).fillColor(colors.gray).text("Interaktiv xonadonlar katalogi, 3D turlar va onlayn bron qilish.", 250, 475);

doc.rect(48, 505, 499, 45).fillAndStroke('#ffffff', colors.border);
doc.font(fontBold).fontSize(10).fillColor(colors.primaryDark).text("🗺 Yandex Xarita Lokatsiyasi:", 60, 515);
doc.font(fontBold).fontSize(9).fillColor(colors.dark).text("👉 Yangi Qo‘yliq-2 savdo ofisi", 60, 530);
doc.font(fontRegular).fontSize(8).fillColor(colors.gray).text("Telefoningizdagi Yandex Navigator orqali to‘g‘ri ofisimizga yetib keling.", 220, 530);

// Xulosa Quti
doc.rect(35, 570, 525, 140).fillAndStroke('#ffffff', colors.border);
doc.font(fontBold).fontSize(11).fillColor(colors.dark).text("OILAVIY XONADONINGIZNI BUGUN BRON QILING!", 48, 585);
doc.font(fontRegular).fontSize(8.5).fillColor(colors.gray).text(
  "Qurilish boshlang‘ich bosqichida bo‘lgani uchun xonadonlar eng qulay narxda taklif etilmoqda.\n" +
  "Har bir qavat va xona variantlari cheklangan. Narxlarni hozirdanoq muzlatib qo‘yish uchun " +
  "Telegram botimiz (@Vatan2333_bot) yoki saytimiz orqali telefon raqamingizni qoldiring.\n\n" +
  "Sotuv bo‘limi bosh menejeri Alisher siz bilan bog‘lanib, siz uchun eng maqbul qavat va narxni tanlab beradi!",
  48, 603, { lineGap: 3.5 }
);

// Bottom Signature Bar
doc.rect(35, 725, 525, 65).fillAndStroke(colors.primaryDark, colors.primaryDark);
doc.font(fontBold).fontSize(11).fillColor('#ffffff').text("“VATAN” QURILISH KOMPANIYASI — SIFAT VA ISHONCH TIMSOLI", 45, 738, { align: 'center', width: 505 });
doc.font(fontRegular).fontSize(8.5).fillColor(colors.primaryLight).text("10 000 dan ortiq oilalarning ishonchini qozongan xalqchil quruvchi", 45, 755, { align: 'center', width: 505 });

drawFooter(8);

doc.end();

writeStream.on('finish', () => {
  const stats = fs.statSync(outputPath);
  console.log(`PDF catalog successfully generated! Size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
});
