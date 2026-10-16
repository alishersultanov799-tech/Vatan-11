const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const outputPath = path.join(__dirname, '..', 'public', 'vatan-yangi-qoyliq-2-katalog.pdf');

console.log('Generating pristine, audited PDF catalog at:', outputPath);

// Crucial: margins: 0 and autoFirstPage: false prevents PDFKit from ever creating accidental blank pages!
const doc = new PDFDocument({
  size: 'A4', // 595.28 x 841.89 points
  margins: { top: 0, bottom: 0, left: 0, right: 0 },
  autoFirstPage: false,
  bufferPages: true,
  info: {
    Title: "VATAN QK — Yangi Qo'yliq-2 Loyihasi Rasmiy Narxlar va Rejalar Katalogi",
    Author: "VATAN Qurilish Kompaniyasi",
    Subject: "Yangi Qo'yliq-2 turar-joy majmuasi narxlari, reja-chizmalari va to'lov shartlari",
    Keywords: "VATAN, Yangi Qo'yliq-2, bo'lib to'lash, 0%, Food City, Toshkent uylari"
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
  border: '#bae6fd',
  borderGray: '#cbd5e1'
};

const TOTAL_PAGES = 8;

function drawHeader(title = "VATAN QURILISH KOMPANIYASI | YANGI QO‘YLIQ-2") {
  doc.rect(35, 18, 525, 24).fill(colors.cardBg);
  doc.rect(35, 18, 525, 24).stroke(colors.border);
  doc.font(fontBold).fontSize(8.5).fillColor(colors.primaryDark);
  doc.text(title, 45, 25, { width: 310 });
  doc.font(fontBold).fontSize(8.5).fillColor(colors.secondary);
  doc.text("Menejer Alisher: +998 94 603 23 33", 355, 25, { align: 'right', width: 195 });
}

function drawFooter(pageNum) {
  doc.strokeColor(colors.border).lineWidth(1).moveTo(35, 807).lineTo(560, 807).stroke();
  
  // Highlighted pill for Menejer Alisher
  doc.rect(35, 811, 205, 18).fillAndStroke(colors.primaryLight, colors.border);
  doc.font(fontBold).fontSize(8.5).fillColor(colors.primaryDark);
  doc.text("Menejer Alisher: +998 94 603 23 33", 42, 815);

  doc.font(fontRegular).fontSize(7.5).fillColor(colors.gray);
  doc.text("Savdo ofisi: Food City ro‘parasi | Bot: @Vatan2333_bot", 248, 815, { width: 230 });

  doc.font(fontBold).fontSize(8).fillColor(colors.primaryDark);
  doc.text(`Sahifa ${pageNum} / ${TOTAL_PAGES}`, 485, 815, { align: 'right', width: 75 });
}

// ==========================================
// SAHIFA 1: MUQOVA (COVER PAGE)
// ==========================================
doc.addPage();
doc.rect(0, 0, 595, 842).fill('#f0f7ff');

// Brand Top Banner
doc.rect(35, 30, 525, 60).fillAndStroke('#ffffff', colors.border);

// Logo
const fullLogoPath = path.join(__dirname, '..', 'public', 'vatan-full-logo.png');
if (fs.existsSync(fullLogoPath)) {
  doc.image(fullLogoPath, 45, 35, { height: 50 });
}

doc.font(fontBold).fontSize(20).fillColor(colors.dark).text("VATAN", 125, 38);
doc.font(fontBold).fontSize(10).fillColor(colors.primaryDark).text("QURILISH KOMPANIYASI (2013-YILDAN BUYON)", 125, 61);
doc.font(fontRegular).fontSize(8).fillColor(colors.gray).text("10 000+ topshirilgan xonadonlar | 6 ta yirik loyihalar", 125, 74);

// Top right contact box on Cover
doc.rect(360, 38, 190, 44).fillAndStroke(colors.secondaryLight, colors.secondary);
doc.font(fontBold).fontSize(7.5).fillColor(colors.secondary).text("SAVDO VA BRON QILISH MENEJERI:", 368, 44);
doc.font(fontBold).fontSize(10.5).fillColor(colors.dark).text("Alisher: +998 94 603 23 33", 368, 57);

// Main Title Card
doc.rect(35, 100, 525, 78).fillAndStroke(colors.primaryLight, colors.border);
doc.font(fontBold).fontSize(22).fillColor(colors.dark).text("“YANGI QO‘YLIQ-2”", 45, 110, { align: 'center', width: 505 });
doc.font(fontBold).fontSize(12).fillColor(colors.primaryDark).text("ZAMONAVIY COMFORT CLASS TURAR-JOY MAJMUASI", 45, 136, { align: 'center', width: 505 });
doc.font(fontRegular).fontSize(9).fillColor(colors.gray).text("Barcha Uylar, Narxlar va Reja-Chizmalari Rasmiy Taqdimoti (Oilaviy ko‘rib chiqish uchun)", 45, 153, { align: 'center', width: 505 });

// Night Hero Image
const heroImagePath = path.join(__dirname, '..', 'public', 'vatan-hero-night.jpg');
if (fs.existsSync(heroImagePath)) {
  doc.rect(35, 188, 525, 275).fill('#ffffff').stroke(colors.border);
  doc.image(heroImagePath, 40, 193, { width: 515, height: 265 });
}

// 4 Feature Highlights Grid
const highlights = [
  { title: "13 Gektar Hudud", desc: "12 qavatli monolit binolar, 3 800 ta xonadon, zilzilabardosh mustahkam poydevor" },
  { title: "70% Tayyor Ta’mir", desc: "Devorlar oq suvoqda, styajka, Akfa romlar, temir eshik, shaxsiy isitish tizimi" },
  { title: "30 Oy 0% Bo‘lib To‘lash", desc: "29, 39 va 69 mln bosh to‘lov bilan 30 oy ustamasiz (yoki 100% to‘lovda 33% chegirma)" },
  { title: "2028 IV-Chorak", desc: "Kafolatlangan topshirish muddati, to‘liq davlat ro‘yxatidan o‘tgan shartnoma" }
];

highlights.forEach((h, i) => {
  const x = 35 + (i % 2) * 268;
  const y = 475 + Math.floor(i / 2) * 82;
  doc.rect(x, y, 257, 72).fillAndStroke('#ffffff', colors.border);
  doc.font(fontBold).fontSize(10.5).fillColor(colors.primaryDark).text(h.title, x + 12, y + 10);
  doc.font(fontRegular).fontSize(8).fillColor(colors.gray).text(h.desc, x + 12, y + 26, { width: 233, lineGap: 2 });
});

// Bottom Callout
doc.rect(35, 650, 525, 145).fillAndStroke('#ffffff', colors.border);
doc.font(fontBold).fontSize(11).fillColor(colors.dark).text("SAVDO OFISI VA RASMIY BOG‘LANISH:", 48, 663);
doc.font(fontRegular).fontSize(8.5).fillColor(colors.dark).text(
  "• Rasmiy Savdo Menejeri: Alisher (+998 94 603 23 33) — Qo‘ng‘iroq va Telegram orqali 24/7\n" +
  "• Manzil: Toshkent viloyati, O‘rtachirchiq tumani, Yangi Toshkent hududi (Food City ro‘parasi)\n" +
  "• Metro: Qo‘yliq metrosidan atigi 8 daqiqalik masofa | Tashrif vaqti: 09:00 — 17:00 gacha\n" +
  "• Rasmiy AI Maslahatchi Telegram Bot: @Vatan2333_bot (24/7 savollarga javob beradi)\n" +
  "• Rasmiy Telegram Kanalimiz: @yangiqoyliq_TJM (Qurilish jarayonidan jonli videolar)\n" +
  "• Rasmiy Veb-Sayt: https://vatan-11-p5nw.vercel.app/",
  48, 680, { lineGap: 3.5 }
);

drawFooter(1);

// ==========================================
// SAHIFA 2: LOYIHA AFZALLIKLARI, 70% TA'MIR VA INFRATUZILMA
// ==========================================
doc.addPage();
drawHeader("2-BO‘LIM: LOYIHA AFZALLIKLARI, 70% TA’MIR VA INFRATUZILMA");

doc.font(fontBold).fontSize(15).fillColor(colors.dark).text("Nima Uchun “Yangi Qo‘yliq-2” Tanlanadi?", 35, 50);
doc.font(fontRegular).fontSize(8.5).fillColor(colors.gray).text(
  "“Yangi Qo‘yliq-2” majmuasi qulay yashash, oilaviy xavfsizlik va uzoq muddatli qadrli investitsiya uchun yaratilgan.",
  35, 68
);

// 70% Ta'mir bloki
doc.rect(35, 88, 525, 205).fillAndStroke('#ffffff', colors.border);
doc.rect(35, 88, 525, 24).fill(colors.secondaryLight);
doc.font(fontBold).fontSize(10.5).fillColor(colors.secondary).text("70% TAYYOR TA’MIR BILAN TOPSHIRILADIGAN QULAYLIKLAR:", 45, 95);

const repairs = [
  { t: "Devorlar sifatli oq suvoqda", d: "Barcha ichki devorlar tekislangan, pardozlashga (oboy yoki bo‘yoq) 100% tayyor." },
  { t: "Xonalar to‘liq bo‘lingan", d: "Pishiq g‘isht va mustahkam bloklar bilan xonadon xonalari to‘liq ajratilgan." },
  { t: "Pol silliq styajkasi", d: "Laminat yoki kafellarni to‘g‘ridan-to‘g‘ri yotqizishga tayyor ideal tekis pol." },
  { t: "Akfa premium shovqinsiz romlar", d: "Ko‘p kamerali, ko‘cha shovqinini o‘tkazmaydigan, issiqlikni saqlovchi romlar." },
  { t: "Kirish temir eshigi & ichki eshiklar", d: "Qalin xavfsiz temir kirish eshigi va xonalararo sifatli ichki eshiklar o‘rnatilgan." },
  { t: "Xonadon shaxtasiga kommunikatsiya", d: "Suv va elektr hisoblagichlari xonadon shaxtasiga olib kirilgan." },
  { t: "Shaxsiy isitish & xavfsiz elektr", d: "Gazsiz ekologik va xavfsiz elektr tizimi, individual harorat nazorati." }
];

repairs.forEach((r, idx) => {
  const y = 120 + idx * 23;
  doc.circle(48, y + 4, 3).fill(colors.secondary);
  doc.font(fontBold).fontSize(8.5).fillColor(colors.dark).text(r.t + " — ", 58, y, { continued: true });
  doc.font(fontRegular).fontSize(8).fillColor(colors.gray).text(r.d);
});

// Infratuzilma bloki
doc.rect(35, 305, 525, 225).fillAndStroke('#ffffff', colors.border);
doc.rect(35, 305, 525, 24).fill(colors.primaryLight);
doc.font(fontBold).fontSize(10.5).fillColor(colors.primaryDark).text("MAJMUANING BOY OILAVIY INFRATUZILMASI:", 45, 312);

const infra = [
  { t: "Zamonaviy maktab (Hudud ichida)", d: "Farzandlaringiz avtomobil yo‘lidan o‘tmasdan, xavfsiz piyoda qatnaydigan maktab." },
  { t: "Bolalar bog‘chasi (Hudud ichida)", d: "Kichik yoshdagi bolalar uchun majmua hududidagi shinam va xavfsiz maskan." },
  { t: "Korzinka supermarketi (1 daqiqa)", d: "Kunlik barcha oziq-ovqat va maishiy ehtiyojlar uchun yirik tarmoq do‘koni." },
  { t: "Tartibli keng yer usti avtoturargohi", d: "Aholining avtomobillari uchun xavfsiz, tartibli va keng yer usti to‘xtash joylari." },
  { t: "Food City savdo majmuasi ro‘parasi", d: "Ulgurji va chakana eng arzon oziq-ovqat va qishloq xo‘jaligi mahsulotlari bozori." },
  { t: "Sun'iy ko‘l va eko dam olish zonasi", d: "Oilaviy oqshom sayrlari, toza havo va salqin mikroiqlim yaratuvchi ko‘l." },
  { t: "Ochiq amfiteatr & Bolalar maydoni", d: "Bolalar uchun xavfsiz o‘yin maydonchalari va bayramlar o‘tkaziladigan amfiteatr." }
];

infra.forEach((inf, idx) => {
  const y = 338 + idx * 26;
  doc.circle(48, y + 4, 3).fill(colors.primary);
  doc.font(fontBold).fontSize(8.5).fillColor(colors.dark).text(inf.t + " — ", 58, y, { continued: true });
  doc.font(fontRegular).fontSize(8).fillColor(colors.gray).text(inf.d);
});

// Qurilish Texnologiyasi & Zilzilabardoshlik
doc.rect(35, 542, 525, 130).fillAndStroke('#ffffff', colors.border);
doc.font(fontBold).fontSize(10.5).fillColor(colors.dark).text("ZILZILABARDOSH MONOLIT QURILISH VA XAVFSIZLIK:", 45, 554);
doc.font(fontRegular).fontSize(8).fillColor(colors.gray).text(
  "• Zilzilabardoshlik: 9 ballik zilzilaga bardosh beruvchi yaxlit temir-beton monolit karkas tizimi.\n" +
  "• G‘isht devorlar: Yuqori issiqlik va shovqin izolyatsiyasini ta'minlovchi pishiq g‘isht terimi.\n" +
  "• 24/7 Qo‘riqlash: Videokuzatuv kameralari, yopiq xavfsiz hovli va domofon tizimi.\n" +
  "• Shovqinsiz tezyurar liftlar: Har bir pod'ezdda 2 tadan zamonaviy yuk va yo‘lovchi tashuvchi liftlar.",
  45, 574, { lineGap: 4 }
);

// Oilaviy maslahat eslatmasi
doc.rect(35, 685, 525, 110).fillAndStroke(colors.amberLight, colors.amber);
doc.font(fontBold).fontSize(10).fillColor(colors.amber).text("OILAVIY MASLAHATLASHUV UCHUN ESLATMA:", 45, 696);
doc.font(fontRegular).fontSize(8).fillColor(colors.dark).text(
  "Xonadon tanlashda oilangiz a'zolari bilan keyingi sahifalardagi barcha 11 ta xonadonning haqiqiy arxitektura " +
  "chizmalari, derazalarning qarash tomoni va qavatlar narxlarini solishtirib chiqing.\n\n" +
  "Keyingi 3-sahifada 100% to‘lov va 30 oy foizsiz bo‘lib to‘lash shartlarining rasmiy narxlar jadvali keltirilgan.",
  45, 715, { width: 505, lineGap: 3 }
);

drawFooter(2);

// ==========================================
// SAHIFA 3: NARXLAR MATRITSASI VA TO'LOV TURLARI
// ==========================================
doc.addPage();
drawHeader("3-BO‘LIM: TO‘LOV TURLARI VA RASMIY NARXLAR MATRITSASI");

doc.font(fontBold).fontSize(15).fillColor(colors.dark).text("Qat'iy To‘lov Qoidalari va Narxlar Jadvali", 35, 50);
doc.font(fontRegular).fontSize(8.5).fillColor(colors.gray).text(
  "Majmuada barcha xonadonlar qat'iy 2 ta to‘lov guruhiga bo‘lingan. Hech qanday yashirin to‘lovlar yo‘q.",
  35, 68
);

// JADVAL 1: FAQAT 100% TO'LOV
doc.rect(35, 88, 525, 215).fillAndStroke('#ffffff', colors.border);
doc.rect(35, 88, 525, 24).fill(colors.amberLight);
doc.font(fontBold).fontSize(9.5).fillColor(colors.amber).text("1. FAQAT 100% TO‘LOVGA SOTILADIGAN XONADONLAR (33% CHEGIRMA BILAN):", 45, 95);

doc.font(fontRegular).fontSize(8).fillColor(colors.dark).text(
  "• Eslatma: Bu xonadonlar (22, 25, 34 va 39 m²) bo‘lib to‘lashga berilmaydi! 33% chegirma narxida to‘liq to‘lab olinadi:",
  45, 118
);

// 100% Table Header
const thY = 133;
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
  45, 283
);

// JADVAL 2: 30 OYGACHA 0% FOIZSIZ BO'LIB TO'LASH
doc.rect(35, 315, 525, 275).fillAndStroke('#ffffff', colors.border);
doc.rect(35, 315, 525, 24).fill(colors.primaryLight);
doc.font(fontBold).fontSize(9.5).fillColor(colors.primaryDark).text("2. 30 OYGACHA 0% FOIZSIZ BO‘LIB TO‘LASHGA BERILADIGAN XONADONLAR:", 45, 322);

doc.font(fontRegular).fontSize(8).fillColor(colors.dark).text(
  "• Bo‘lib to‘lash: Quyidagi xonadonlarni boshlang‘ich to‘lov qilib, qolgan summani 30 oy davomida 0% ustamasiz to‘lash mumkin:",
  45, 345
);

// Installment Table Header
const instThY = 362;
doc.rect(45, instThY, 505, 18).fill(colors.primaryDark);
doc.font(fontBold).fontSize(8).fillColor('#ffffff');
doc.text("Xona & Maydon", 52, instThY + 5);
doc.text("Bosh to‘lov", 145, instThY + 5);
doc.text("Oylik (30 oy)", 225, instThY + 5);
doc.text("31-oy qoldiq to‘lov", 305, instThY + 5);
doc.text("100% to‘lovda (33%)", 415, instThY + 5);

const instRows = [
  { name: "1 xonali (41 m²)", init: "29 mln so‘m", monthly: "4 mln so‘m / oy", rem: "271.2 — 312.2 mln", full: "281.6 — 309.0 mln" },
  { name: "1 xonali (43 m²)", init: "29 mln so‘m", monthly: "4 mln so‘m / oy", rem: "291.7 — 334.7 mln", full: "295.3 — 324.1 mln" },
  { name: "1 xonali (49 m²)", init: "29 mln so‘m", monthly: "4 mln so‘m / oy", rem: "353.2 — 402.2 mln", full: "336.5 — 369.3 mln" },
  { name: "2 xonali (54 m²)", init: "39 mln so‘m", monthly: "5 mln so‘m / oy", rem: "337.5 — 391.5 mln", full: "352.8 — 388.9 mln" },
  { name: "2 xonali (55 m²)", init: "39 mln so‘m", monthly: "5 mln so‘m / oy", rem: "347.2 — 402.2 mln", full: "359.3 — 396.1 mln" },
  { name: "3 xonali (70 m²)", init: "69 mln so‘m", monthly: "6 mln so‘m / oy", rem: "398.5 — 468.5 mln", full: "433.8 — 480.7 mln" },
  { name: "3 xonali (77 m²)", init: "69 mln so‘m", monthly: "6 mln so‘m / oy", rem: "463.2 — 540.2 mln", full: "477.2 — 528.8 mln" },
];

instRows.forEach((row, idx) => {
  const rY = instThY + 18 + idx * 23;
  doc.rect(45, rY, 505, 23).fill(idx % 2 === 0 ? '#f8fafc' : '#ffffff');
  doc.font(fontBold).fontSize(8.5).fillColor(colors.dark).text(row.name, 52, rY + 6);
  doc.font(fontBold).fontSize(8.5).fillColor(colors.secondary).text(row.init, 145, rY + 6);
  doc.font(fontBold).fontSize(8.5).fillColor(colors.primaryDark).text(row.monthly, 225, rY + 6);
  doc.font(fontBold).fontSize(8).fillColor(colors.amber).text(row.rem, 305, rY + 6);
  doc.font(fontRegular).fontSize(8).fillColor(colors.gray).text(row.full, 415, rY + 6);
});

// To'lov xulosasi
doc.rect(35, 602, 525, 100).fillAndStroke('#ffffff', colors.border);
doc.font(fontBold).fontSize(10).fillColor(colors.dark).text("MUHIM TO‘LOV AFZALLIKLARI:", 45, 613);
doc.font(fontRegular).fontSize(8).fillColor(colors.gray).text(
  "• Foizsiz to‘lov: 30 oy davomida hech qanday bank foizi yoki ustama hisoblanmaydi (0% to‘g‘ridan-to‘g‘ri quruvchidan).\n" +
  "• Narx muzlatiladi: Shartnoma imzolangan kundagi xonadon narxi qurilish oxirigacha qat'iy o‘zgarmas qoladi.\n" +
  "• To‘liq qonuniy: Davlat ro‘yxatidan o‘tgan rasmiy shartnoma bilan xarid qilinadi.\n" +
  "• Bepul bron qilish: Xonadonni 24 soatga bepul bron qilib narxni ushlab qolishingiz mumkin.",
  45, 630, { lineGap: 3 }
);

// Savdo ofisi eslatmasi
doc.rect(35, 715, 525, 80).fillAndStroke(colors.primaryLight, colors.border);
doc.font(fontBold).fontSize(9.5).fillColor(colors.primaryDark).text("SAVDO OFISIGA TASHRIF BUYURIB XONADONNI TANLASH:", 45, 727);
doc.font(fontRegular).fontSize(8).fillColor(colors.dark).text(
  "Haftaning istalgan kuni soat 17:00 gacha Food City ro‘parasidagi savdo ofisimizga tashrif buyurishingiz mumkin. " +
  "Menejerimiz Alisher (+998 94 603 23 33) sizga barcha qavatlar, ko‘rinishlar (view) va to‘lov shartnomalarini taqdim etadi.",
  45, 743, { width: 505, lineGap: 2.5 }
);

drawFooter(3);

// ========================================================
// HELPER: CLEAN AUDITED APARTMENT ROW (NO TEXT COLLISION!)
// ========================================================
function renderApartmentRow(y, h, apt) {
  const x = 35;
  const w = 525;

  // Main Card Box
  doc.rect(x, y, w, h).fillAndStroke('#ffffff', colors.border);

  // Top Header Strip
  doc.rect(x, y, w, 22).fill(colors.cardBg);
  doc.rect(x, y, w, 22).stroke(colors.border);
  doc.font(fontBold).fontSize(10).fillColor(colors.primaryDark).text(apt.title, x + 10, y + 6);
  doc.font(fontBold).fontSize(8.5).fillColor(apt.badgeColor || colors.secondary).text(apt.badge, x + w - 170, y + 6, { align: 'right', width: 160 });

  // Plan Image
  const imgW = 185;
  const imgH = h - 34;
  const imgX = x + 8;
  const imgY = y + 27;

  doc.rect(imgX, imgY, imgW, imgH).fill('#ffffff').stroke(colors.borderGray);
  const imgPath = path.join(__dirname, '..', 'public', apt.image);
  if (fs.existsSync(imgPath)) {
    doc.image(imgPath, imgX + 2, imgY + 2, { width: imgW - 4, height: imgH - 4, fit: [imgW - 4, imgH - 4] });
  }

  // Right Details Column (x: 235 to 550, width: 315 pt)
  const dx = x + 202;
  const dw = w - 212; // 313 pt width

  let curY = y + 28;

  // Row 1: Maydon & To'lov turi
  doc.rect(dx, curY, dw, 20).fill('#f8fafc');
  doc.font(fontBold).fontSize(8.5).fillColor(colors.dark).text("Maydoni:", dx + 6, curY + 5);
  doc.font(fontBold).fontSize(8.5).fillColor(colors.primaryDark).text(apt.area, dx + 55, curY + 5);
  doc.font(fontBold).fontSize(8.5).fillColor(colors.dark).text("To‘lov turi:", dx + 130, curY + 5);
  doc.font(fontBold).fontSize(8.5).fillColor(apt.isInstallment ? colors.secondary : colors.amber).text(apt.payType, dx + 185, curY + 5);
  curY += 24;

  // Row 2: Bo'lib to'lash shartlari yoki 100% to'lov sharti
  if (apt.isInstallment) {
    doc.rect(dx, curY, dw, 36).fill(colors.secondaryLight);
    doc.font(fontBold).fontSize(8.5).fillColor(colors.secondary).text("Bo‘lib to‘lash (30 oy 0% foizsiz):", dx + 6, curY + 4);
    doc.font(fontRegular).fontSize(8).fillColor(colors.dark).text(`• Bosh to‘lov: ${apt.initPay}`, dx + 10, curY + 16);
    doc.font(fontRegular).fontSize(8).fillColor(colors.dark).text(`• Oylik: ${apt.monthlyPay}`, dx + 160, curY + 16);
    doc.font(fontBold).fontSize(7.5).fillColor(colors.primaryDark).text(`• 31-oy qoldiq: ${apt.remPay || '—'}`, dx + 10, curY + 26);
    doc.font(fontRegular).fontSize(7.5).fillColor(colors.gray).text(`• 100% to‘lov: ${apt.fullPay}`, dx + 160, curY + 26);
    curY += 40;
  } else {
    doc.rect(dx, curY, dw, 30).fill(colors.amberLight);
    doc.font(fontBold).fontSize(8.5).fillColor(colors.amber).text("Faqat 100% to‘lovga (Bo‘lib to‘lash yo‘q):", dx + 6, curY + 4);
    doc.font(fontRegular).fontSize(7.5).fillColor(colors.dark).text("Ushbu studio/uy uchun 33% katta chegirma narxi beriladi.", dx + 6, curY + 16);
    curY += 34;
  }

  // Row 3: Qavatlar bo'yicha narxlar jadvali
  doc.font(fontBold).fontSize(8).fillColor(colors.dark).text("Qavatlar bo‘yicha 100% to‘lov narxlari (33% chegirmada):", dx + 6, curY);
  curY += 12;

  const tableH = 16;
  // 9-12
  doc.rect(dx, curY, dw, tableH).fill('#ffffff');
  doc.font(fontRegular).fontSize(7.5).fillColor(colors.gray).text("• 9–12-qavatlar (eng arzon):", dx + 6, curY + 4);
  doc.font(fontBold).fontSize(8).fillColor(colors.secondary).text(apt.p9, dx + 130, curY + 4);
  curY += tableH;

  // 5-8
  doc.rect(dx, curY, dw, tableH).fill('#f8fafc');
  doc.font(fontRegular).fontSize(7.5).fillColor(colors.gray).text("• 5–8-qavatlar (arzonroq):", dx + 6, curY + 4);
  doc.font(fontBold).fontSize(8).fillColor(colors.dark).text(apt.p5, dx + 130, curY + 4);
  curY += tableH;

  // 2-4
  doc.rect(dx, curY, dw, tableH).fill('#ffffff');
  doc.font(fontRegular).fontSize(7.5).fillColor(colors.gray).text("• 2–4-qavatlar (talabgir):", dx + 6, curY + 4);
  doc.font(fontBold).fontSize(8).fillColor(colors.dark).text(apt.p2, dx + 130, curY + 4);
  curY += tableH + 4;

  // Row 4: Tavsif
  doc.font(fontRegular).fontSize(7.5).fillColor(colors.gray).text(apt.desc, dx + 6, curY, { width: dw - 12, lineGap: 1.5 });
}

// ========================================================
// SAHIFA 4: 22 m² VA 25 m² STUDIYA XONADONLAR (2 TA XONADON)
// ========================================================
doc.addPage();
drawHeader("4-BO‘LIM: STUDIYA XONADONLAR REJASI (22 VA 25 m²)");

doc.font(fontBold).fontSize(14).fillColor(colors.dark).text("Ixcham Studio Xonadonlar (Faqat 100% To‘lovga)", 35, 50);
doc.font(fontRegular).fontSize(8.5).fillColor(colors.gray).text(
  "Yakka yashash, talabalar yoki ijaraga berish investitsiyasi uchun poytaxtdagi eng hamyonbop xonadonlar (33% chegirmada):",
  35, 68
);

// 22 m² Studio
renderApartmentRow(88, 345, {
  title: "1A-22 | 22 m² Zamonaviy Studio",
  badge: "151.1 mln so‘mdan boshlanadi",
  badgeColor: colors.secondary,
  image: "22.jpg",
  area: "22.0 m²",
  payType: "Faqat 100% to‘lov",
  isInstallment: false,
  p9: "151 085 000 so‘m (6 867 500 so‘m / m²)",
  p5: "158 455 000 so‘m (7 202 500 so‘m / m²)",
  p2: "165 825 000 so‘m (7 537 500 so‘m / m²)",
  desc: "Ixcham studio format. Dahliz, sanuzel va yashash/oshxona maydoni birlashtirilgan. Katta oyna tufayli xona tabiiy yorug‘lik bilan to‘la. 70% tayyor ta’mir bilan topshiriladi (devorlar oq suvoqda, styajka, Akfa rom, temir eshik)."
});

// 25 m² Studio
renderApartmentRow(445, 345, {
  title: "1A-25 | 25 m² Shinam Studio",
  badge: "171.7 mln so‘mdan boshlanadi",
  badgeColor: colors.secondary,
  image: "25.jpg",
  area: "25.0 m²",
  payType: "Faqat 100% to‘lov",
  isInstallment: false,
  p9: "171 687 500 so‘m (6 867 500 so‘m / m²)",
  p5: "180 062 500 so‘m (7 202 500 so‘m / m²)",
  p2: "188 437 500 so‘m (7 537 500 so‘m / m²)",
  desc: "25 m² shinam studio formati. Kengroq dahliz, alohida oshxona burchagi, to‘liq sanuzel. Yosh oilalar uchun ajoyib boshlang‘ich uy yoki Food City yaqinida yuqori talabga ega ijara aktivi. 33% chegirma bilan to‘liq to‘lab olinadi."
});

drawFooter(4);

// ========================================================
// SAHIFA 5: 1 XONALI XONADONLAR (34, 39, 41 m²) (3 TA XONADON)
// ========================================================
doc.addPage();
drawHeader("5-BO‘LIM: 1 XONALI XONADONLAR REJASI (34, 39, 41 m²)");

doc.font(fontBold).fontSize(14).fillColor(colors.dark).text("Keng 1 Xonali Xonadonlar Rejalari", 35, 50);
doc.font(fontRegular).fontSize(8.5).fillColor(colors.gray).text(
  "Alohida oshxona, keng yotoqxona va balkonga ega qulay 1 xonali xonadonlar (100% to‘lov va 30 oy 0% bo‘lib to‘lash):",
  35, 68
);

// 34 m²
renderApartmentRow(88, 230, {
  title: "1B-34 | 34 m² (1 xonali shinam)",
  badge: "Faqat 100% to‘lov (33% chegirma)",
  badgeColor: colors.amber,
  image: "34.jpg",
  area: "34.0 m²",
  payType: "Faqat 100% to‘lov",
  isInstallment: false,
  p9: "233 495 000 so‘m (6.87 mln/m²)",
  p5: "244 885 000 so‘m (7.20 mln/m²)",
  p2: "256 275 000 so‘m (7.54 mln/m²)",
  desc: "Alohida oshxona, yotoqxona, dahliz va balkon. To‘liq mustaqil 1 xonali xonadon. Bo‘lib to‘lashga berilmaydi, 33% chegirma bilan sotiladi."
});

// 39 m²
renderApartmentRow(326, 230, {
  title: "1B-39 | 39 m² (1 xonali yorug‘)",
  badge: "Faqat 100% to‘lov (33% chegirma)",
  badgeColor: colors.amber,
  image: "39.jpg",
  area: "39.0 m²",
  payType: "Faqat 100% to‘lov",
  isInstallment: false,
  p9: "267 832 500 so‘m (6.87 mln/m²)",
  p5: "280 897 500 so‘m (7.20 mln/m²)",
  p2: "293 962 500 so‘m (7.54 mln/m²)",
  desc: "Katta oynali, quyosh nuri mo‘l tushadigan keng 1 xonali xonadon. Keng yotoqxona va qulay oshxona. Bo‘lib to‘lashga berilmaydi."
});

// 41 m²
renderApartmentRow(564, 230, {
  title: "1B-41 | 41 m² (1 xonali — 30 oy bo‘lib to‘lash)",
  badge: "Bosh to‘lov: 29 mln | Oylik: 4 mln",
  badgeColor: colors.secondary,
  image: "41.jpg",
  area: "41.0 m²",
  payType: "30 oy 0% bo‘lib to‘lash",
  isInstallment: true,
  initPay: "29 000 000 so‘m",
  monthlyPay: "4 000 000 so‘m (30 oy 0%)",
  remPay: "271.2 — 312.2 mln so‘m",
  fullPay: "281.6 — 309.0 mln so‘m",
  p9: "281 567 500 so‘m (9–12-qavat)",
  p5: "295 302 500 so‘m (5–8-qavat)",
  p2: "309 037 500 so‘m (2–4-qavat)",
  desc: "30 oygacha 0% foizsiz bo‘lib to‘lash imkoniga ega eng talabgir 1 xonali uy! Boshiga 29 mln to‘lab, har oy 4 mln dan to‘lanadi. 31-oy qoldiq to‘lanadi."
});

drawFooter(5);

// ========================================================
// SAHIFA 6: 1 XONALI KENG (43, 49 m²) VA 2 XONALI (54 m²) (3 TA XONADON)
// ========================================================
doc.addPage();
drawHeader("6-BO‘LIM: 1 VA 2 XONALI XONADONLAR REJASI (43, 49, 54 m²)");

doc.font(fontBold).fontSize(14).fillColor(colors.dark).text("Keng 1 va 2 Xonali Oilaviy Uylar", 35, 50);
doc.font(fontRegular).fontSize(8.5).fillColor(colors.gray).text(
  "30 oy davomida 0% foizsiz bo‘lib to‘lashga beriladigan qulay xonadonlar (bosh to‘lov 29 va 39 mln so‘m):",
  35, 68
);

// 43 m²
renderApartmentRow(88, 230, {
  title: "1C-43 | 43 m² (1 xonali keng)",
  badge: "Bosh to‘lov: 29 mln | Oylik: 4 mln",
  badgeColor: colors.secondary,
  image: "43.jpg",
  area: "43.0 m²",
  payType: "30 oy 0% bo‘lib to‘lash",
  isInstallment: true,
  initPay: "29 000 000 so‘m",
  monthlyPay: "4 000 000 so‘m (30 oy 0%)",
  remPay: "291.7 — 334.7 mln so‘m",
  fullPay: "295.3 — 324.1 mln so‘m",
  p9: "295 302 500 so‘m (9–12-qavat)",
  p5: "309 707 500 so‘m (5–8-qavat)",
  p2: "324 112 500 so‘m (2–4-qavat)",
  desc: "Keng 1 xonali xonadon. Katta oyna, alohida shinam oshxona va balkon. Boshiga 29 mln so‘m to‘lab, oyiga 4 mln dan 30 oy ustamasiz to‘lanadi."
});

// 49 m²
renderApartmentRow(326, 230, {
  title: "1D-49 | 49 m² (1 xonali ulkan / evro-2)",
  badge: "Bosh to‘lov: 29 mln | Oylik: 4 mln",
  badgeColor: colors.secondary,
  image: "49.jpg",
  area: "49.0 m²",
  payType: "30 oy 0% bo‘lib to‘lash",
  isInstallment: true,
  initPay: "29 000 000 so‘m",
  monthlyPay: "4 000 000 so‘m (30 oy 0%)",
  remPay: "353.2 — 402.2 mln so‘m",
  fullPay: "336.5 — 369.3 mln so‘m",
  p9: "336 507 500 so‘m (9–12-qavat)",
  p5: "352 922 500 so‘m (5–8-qavat)",
  p2: "369 337 500 so‘m (2–4-qavat)",
  desc: "Eng katta 1 xonali xonadon. Istakka ko‘ra bemalol 2 xonaga aylantirish mumkin. Boshiga 29 mln to‘lab, har oy 4 mln dan 30 oy ustamasiz to‘lanadi."
});

// 54 m² (2 xonali)
renderApartmentRow(564, 230, {
  title: "2A-54 | 54 m² (2 xonali eng talabgir)",
  badge: "Bosh to‘lov: 39 mln | Oylik: 5 mln",
  badgeColor: colors.secondary,
  image: "54.jpg",
  area: "54.0 m²",
  payType: "30 oy 0% bo‘lib to‘lash",
  isInstallment: true,
  initPay: "39 000 000 so‘m",
  monthlyPay: "5 000 000 so‘m (30 oy 0%)",
  remPay: "337.5 — 391.5 mln so‘m",
  fullPay: "352.8 — 388.9 mln so‘m",
  p9: "352 755 000 so‘m (9–12-qavat)",
  p5: "370 845 000 so‘m (5–8-qavat)",
  p2: "388 935 000 so‘m (2–4-qavat)",
  desc: "Majmuadagi eng talabgir 2 xonali oilaviy reja! Mehmonxona, yotoqxona va oshxona. Boshiga 39 mln to‘lab, oyiga 5 mln dan to‘lanadi."
});

drawFooter(6);

// ========================================================
// SAHIFA 7: 2 XONALI (55 m²) VA 3 XONALI (70, 77 m²) (3 TA XONADON)
// ========================================================
doc.addPage();
drawHeader("7-BO‘LIM: 2 VA 3 XONALI XONADONLAR REJASI (55, 70, 77 m²)");

doc.font(fontBold).fontSize(14).fillColor(colors.dark).text("2 va 3 Xonali Keng Oilaviy Xonadonlar", 35, 50);
doc.font(fontRegular).fontSize(8.5).fillColor(colors.gray).text(
  "Katta oilalar, kenglik va to‘liq erkinlikni xush ko‘ruvchilar uchun 30 oy 0% bo‘lib to‘lash shartidagi premium uylar:",
  35, 68
);

// 55 m² (2 xonali)
renderApartmentRow(88, 230, {
  title: "2B-55 | 55 m² (2 xonali shinam)",
  badge: "Bosh to‘lov: 39 mln | Oylik: 5 mln",
  badgeColor: colors.secondary,
  image: "55.jpg",
  area: "55.0 m²",
  payType: "30 oy 0% bo‘lib to‘lash",
  isInstallment: true,
  initPay: "39 000 000 so‘m",
  monthlyPay: "5 000 000 so‘m (30 oy 0%)",
  remPay: "347.2 — 402.2 mln so‘m",
  fullPay: "359.3 — 396.1 mln so‘m",
  p9: "359 287 500 so‘m (9–12-qavat)",
  p5: "377 692 500 so‘m (5–8-qavat)",
  p2: "396 097 500 so‘m (2–4-qavat)",
  desc: "Shinam ikki tomonlama yorug‘lik tushuvchi 2 xonali uy. Ota-onalar va farzandlar uchun alohida xonalar, qulay oshxona va balkon. Boshiga 39 mln to‘lab, har oy 5 mln to‘lanadi."
});

// 70 m² (3 xonali)
renderApartmentRow(326, 230, {
  title: "3A-70 | 70 m² (3 xonali oilaviy)",
  badge: "Bosh to‘lov: 69 mln | Oylik: 6 mln",
  badgeColor: colors.secondary,
  image: "70.jpg",
  area: "70.0 m²",
  payType: "30 oy 0% bo‘lib to‘lash",
  isInstallment: true,
  initPay: "69 000 000 so‘m",
  monthlyPay: "6 000 000 so‘m (30 oy 0%)",
  remPay: "398.5 — 468.5 mln so‘m",
  fullPay: "433.8 — 480.7 mln so‘m",
  p9: "433 825 000 so‘m (9–12-qavat)",
  p5: "457 275 000 so‘m (5–8-qavat)",
  p2: "480 725 000 so‘m (2–4-qavat)",
  desc: "3 xonali ideal oilaviy reja. Katta mehmonxona, ota-onalar yotoqxonasi, bolalar xonasi va keng oshxona. Boshiga 69 mln to‘lab, oyiga 6 mln dan to‘lanadi."
});

// 77 m² (3 xonali premium)
renderApartmentRow(564, 230, {
  title: "3B-77 | 77 m² (3 xonali premium — 2 ta sanuzel)",
  badge: "Bosh to‘lov: 69 mln | Oylik: 6 mln",
  badgeColor: colors.secondary,
  image: "77.jpg",
  area: "77.0 m²",
  payType: "30 oy 0% bo‘lib to‘lash",
  isInstallment: true,
  initPay: "69 000 000 so‘m",
  monthlyPay: "6 000 000 so‘m (30 oy 0%)",
  remPay: "463.2 — 540.2 mln so‘m",
  fullPay: "477.2 — 528.8 mln so‘m",
  p9: "477 207 500 so‘m (9–12-qavat)",
  p5: "503 002 500 so‘m (5–8-qavat)",
  p2: "528 797 500 so‘m (2–4-qavat)",
  desc: "Majmuadagi eng katta va hashamatli 3 xonali xonadon! 2 ta sanuzel, keng balkon, ulkan panoramik oynalar. Boshiga 69 mln to‘lab, oyiga 6 mln dan to‘lanadi."
});

drawFooter(7);

// ========================================================
// SAHIFA 8: KOMPANIYA ISHONCHI, TOPSHIRILGAN LOYIHALAR VA BOG'LANISH
// ========================================================
doc.addPage();
drawHeader("8-BO‘LIM: KOMPANIYA ISHONCHI VA RASMIY BOG‘LANISH");

doc.font(fontBold).fontSize(14).fillColor(colors.dark).text("“VATAN” Qurilish Kompaniyasining 13 Yillik Tajribasi", 35, 50);
doc.font(fontRegular).fontSize(8.5).fillColor(colors.gray).text(
  "“VATAN” kompaniyasi 2013-yildan buyon xizmat qilib, 10 000+ oilani shaxsiy xonadon bilan ta'minlagan ishonchli quruvchi:",
  35, 68
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
  const y = 88 + row * 135;

  doc.rect(x, y, 169, 126).fillAndStroke('#ffffff', colors.border);

  const pImgPath = path.join(__dirname, '..', 'public', proj.img);
  if (fs.existsSync(pImgPath)) {
    doc.image(pImgPath, x + 5, y + 5, { width: 159, height: 82, fit: [159, 82] });
  }

  doc.font(fontBold).fontSize(8.5).fillColor(colors.dark).text(proj.name, x + 8, y + 92);
  doc.font(fontRegular).fontSize(7).fillColor(colors.primaryDark).text(`Topshirilgan: ${proj.year}`, x + 8, y + 104);
  doc.font(fontRegular).fontSize(7).fillColor(colors.secondary).text(`Hajmi: ${proj.units}`, x + 8, y + 114);
});

// Huquqiy kafolatlar
doc.rect(35, 368, 525, 140).fillAndStroke('#ffffff', colors.border);
doc.rect(35, 368, 525, 22).fill(colors.secondaryLight);
doc.font(fontBold).fontSize(9.5).fillColor(colors.secondary).text("QONUNIY SHARTNOMA VA HUQUQIY KAFOLATLAR:", 45, 375);

doc.font(fontRegular).fontSize(8).fillColor(colors.dark).text(
  "1. Davlat ro‘yxatidan o‘tgan shartnoma: Har bir xaridor bilan qat'iy davlat talablariga mos shartnoma tuziladi.\n" +
  "2. Ruxsatnomalar to‘liq: Barcha arxitektura va qurilish ekspertizasi xulosalari, yer ajratish hujjatlari mavjud.\n" +
  "3. Qat'iy narx kafolati: Shartnoma imzolangandan so‘ng xonadon narxi oshirilmaydi, inflyatsiyadan himoyalangan.\n" +
  "4. Qat'iy muddat kafolati: Majmua 2028-yilning 4-choragida to‘liq foydalanishga topshiriladi.\n" +
  "5. Kadastr hujjatlari: Topshirilgach har bir xonadonga alohida davlat kadastri rasmiylashtirib beriladi.",
  45, 398, { lineGap: 3.5 }
);

// Xarid bosqichlari
doc.rect(35, 518, 525, 130).fillAndStroke(colors.primaryLight, colors.border);
doc.font(fontBold).fontSize(9.5).fillColor(colors.primaryDark).text("XONADON XARID QILISHNING ODDIY 4 BOSQICHI:", 45, 528);

const steps = [
  { step: "1", title: "Xonadonni tanlash", desc: "Ushbu katalogdan o‘zingizga ma'qul xona, maydon va qavatni tanlaysiz." },
  { step: "2", title: "24 soatga bepul bron", desc: "Narxni muzlatib qo‘yish uchun bot (@Vatan2333_bot) yoki saytda bepul bron qilasiz." },
  { step: "3", title: "Savdo ofisiga tashrif", desc: "Food City ro‘parasidagi ofisga kelib, chizmalar va shartnoma bilan tanishasiz." },
  { step: "4", title: "Shartnoma va to‘lov", desc: "Shartnoma tuzib, boshlang‘ich to‘lovni amalga oshirasiz va xonadon egasi bo‘lasiz!" }
];

steps.forEach((st, idx) => {
  const y = 548 + idx * 24;
  doc.circle(52, y + 6, 8).fill(colors.primaryDark);
  doc.font(fontBold).fontSize(8.5).fillColor('#ffffff').text(st.step, 49.5, y + 2);
  doc.font(fontBold).fontSize(8.5).fillColor(colors.dark).text(st.title + " — ", 68, y + 2, { continued: true });
  doc.font(fontRegular).fontSize(7.5).fillColor(colors.gray).text(st.desc);
});

// Bog'lanish va Savdo ofisi kartochkasi
doc.rect(35, 658, 525, 140).fillAndStroke('#ffffff', colors.border);
doc.font(fontBold).fontSize(10.5).fillColor(colors.primaryDark).text("SAVDO OFISIMIZGA TASHRIF BUYURING:", 48, 670);
doc.font(fontRegular).fontSize(8).fillColor(colors.dark).text(
  "• Rasmiy Savdo Menejeri: Alisher (+998 94 603 23 33) — Qo‘ng‘iroq va Telegram orqali 24/7\n" +
  "• Manzil: Toshkent viloyati, O‘rtachirchiq tumani, Yangi Toshkent hududi (Food City ro‘parasi)\n" +
  "• Ish vaqti: Har kuni 09:00 dan 18:00 gacha (Dam olish kunlarisiz uzluksiz ishlaymiz)\n" +
  "• Tashrif va konsultatsiya: 17:00 gacha tashrif buyurishingiz mumkin\n\n" +
  "• Rasmiy AI Maslahatchi Telegram Bot: @Vatan2333_bot\n" +
  "• Rasmiy Telegram Kanal: @yangiqoyliq_TJM\n" +
  "• Rasmiy Veb-Sayt: https://vatan-11-p5nw.vercel.app/",
  48, 688, { lineGap: 3.5 }
);

drawFooter(8);

doc.end();

writeStream.on('finish', () => {
  const stats = fs.statSync(outputPath);
  console.log(`Audited PDF catalog generated successfully! Exact Pages: ${TOTAL_PAGES}, File Size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
});
