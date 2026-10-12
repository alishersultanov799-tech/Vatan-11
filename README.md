# 🏢 VATAN Qurilish Kompaniyasi — "Yangi Qo‘yliq-2"

Zamonaviy va qulay turar-joy majmuasi uchun rasmiy veb-sayt platformasi. Loyiha xaridorlarga xonadonlar rejalari (planlari), narxlar, to‘lov shartlari hamda qurilish jarayonini to‘liq interaktiv tarzda taqdim etadi.

🌐 **Jonli sayt (Live Demo):** [https://luxury-choux-fb94d8.netlify.app](https://luxury-choux-fb94d8.netlify.app)

---

## ✨ Asosiy Imkoniyatlar

- **Xonadonlar katalogi & Filtrlar:** 1, 2 va 3 xonali xonadonlarni maydoni (22 m² dan 77 m² gacha) va xonalar soni bo‘yicha saralash.
- **Katta hajmdagi reja (plan) rasmlari:** Mijozlar uchun qulay tarzda kattalashtirib ko‘rish imkoniyati.
- **Dinamik to‘lov shartlari:** 
  - Kichik xonadonlar (22, 25, 34, 39 m²) uchun 100% to‘lov shartlari.
  - Boshqa xonadonlar uchun 30 oygacha foizsiz muddatli (bo‘lib) to‘lash kalkulyatori.
- **Qavatlar bo‘yicha narxlar:** Excel narxlar jadvali asosida ishlab chiqilgan qavatlar nisbati (4-qavatdan 12-qavatgacha).
- **Galereyalar:**
  - Ko‘p qavatli bino va arxitektura fotogalereyasi.
  - Qurilishi davom etayotgan bloklarning real fotohisoboti.
- **Loyihalar tarixi:** Kompaniyaning topshirilgan (Yakkasaroy, Madrid, O‘z loyihasi, IKAT, Qo‘yliq katta bozori va h.k.) hamda kelgusi loyihalari.
- **Interaktiv xarita va aloqa:** Google Maps lokatsiyasi, yuridik manzil va Telegram orqali bog‘lanish.

---

## 🛠 Texnologiyalar

- **Frontend:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Stillar:** [Tailwind CSS](https://tailwindcss.com/)
- **Ikonkalar:** [Lucide React](https://lucide.dev/)
- **Deploy:** [Netlify](https://www.netlify.com/) (SPA redirect konfiguratsiyasi bilan)

---

## 🚀 O‘rnatish va Ishga Tushirish

### Talablar:
- [Node.js](https://nodejs.org/) (v18 yoki undan yuqori)
- [Git](https://git-scm.com/)

### Qadamlar:

1. **Repozitoriyani yuklab oling (Clone):**
   ```bash
   git clone https://github.com/<username>/<repo-name>.git
   cd <repo-name>
   ```

2. **Kutubxonalarni o‘rnating:**
   ```bash
   npm install
   ```

3. **Ishlab chiqish rejimida ishga tushiring (Development):**
   ```bash
   npm run dev
   ```
   Brauzerda `http://localhost:3000` manzilini oching.

4. **Production uchun yig‘ish (Build):**
   ```bash
   npm run build
   ```
   Yig‘ilgan statik fayllar `dist/` papkasiga joylashtiriladi.

5. **Production versiyani tekshirish (Preview):**
   ```bash
   npm run preview
   ```

---

## 📂 Loyiha Tuzilmasi

```
├── public/                 # Statik resurslar (rasmlar, logolar, _redirects)
│   ├── complex/            # Majmua arxitekturasi rasmlari
│   ├── ongoing/            # Qurilish jarayoni suratlari
│   └── _redirects          # Netlify SPA yo‘naltirish qoidasi
├── src/
│   ├── components/         # React komponentlari (Navbar, Hero, Catalog, Gallery va h.k.)
│   ├── data/               # Xonadonlar va loyihalar ma'lumotlari (apartments.js)
│   ├── App.jsx             # Asosiy sahifa
│   ├── main.jsx            # React kirish nuqtasi
│   └── index.css           # Tailwind CSS stillari
├── netlify.toml            # Netlify build va redirect konfiguratsiyasi
├── package.json            # Loyiha sozlamalari va kutubxonalar
├── tailwind.config.js      # Tailwind mavzu va ranglar sozlamasi
└── vite.config.js          # Vite konfiguratsiyasi
```

---

## 📄 Litsenziya

Barcha huquqlar himoyalangan © VATAN Qurilish Kompaniyasi.
