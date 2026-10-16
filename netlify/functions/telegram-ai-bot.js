/**
 * Netlify Function: Telegram AI Bot Webhook
 * Supports both Netlify Function v2 (Request/Response) and v1 (handler)
 * 
 * Bot: @Vatan2333_bot
 * Manager: Alisher (5677180840)
 */

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '8998702557:AAFTVRJ5dCy11whyAavAnUMdtL4R_fF6PkI';
const MANAGER_CHAT_ID = process.env.MANAGER_CHAT_ID || '5677180840';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';

const SYSTEM_KNOWLEDGE_BASE = `
Sen — "VATAN" qurilish kompaniyasining "Yangi Qo‘yliq-2" zamonaviy turar-joy majmuasi rasmiy professional AI-maslahatchisisan.

LOYIHA VA KOMPANIYA HAQIDA ASOSIY FAKTLAR:
1. Kompaniya: "VATAN" qurilish kompaniyasi (2013-yildan buyon faoliyat yuritadi, 10 000+ topshirilgan xonadonlar, to‘liq qonuniy shartnomalar).
2. Majmua: "Yangi Qo‘yliq-2" (Comfort class).
3. Hududi: 13 gektar, 12 qavatli zilzilabardosh monolit binolar (3 800 ta xonadon). Har bir pod'ezdda 2 tadan zamonaviy, shovqinsiz va tezyurar liftlar (yo‘lovchi hamda yuk tashish uchun) o‘rnatiladi.
4. Ta'mirlash holati: 70% tayyor ta'mirlash bilan topshiriladi (kirish temir eshigi, sifatli plastik derazalar, suv, elektr tarmoqlari ulanadi, pol silliq styajkasi, devorlar oq suvoqda). Majmuada gaz bo‘lmaydi (xavfsiz va zamonaviy elektr tizimi)!
5. Topshirish muddati: 2028-yil 4-chorak.
6. Joylashuv: Toshkent viloyati, O‘rtachirchiq tumani, O‘choqli MFY, Yashnobod ko‘chasi, 44a-uy (Yangi Toshkent hududi, Food City bozori ro‘parasi, Qo‘yliq metrosidan 8 daqiqa).
   Yandex Maps: https://yandex.com/maps/org/93362741697?si=paavuny8ar13tb74cnyu5e4ny8
7. Infratuzilma: Maktab, bolalar bog‘chasi, Korzinka supermarketi, sun'iy ko‘l, ochiq amfiteatr, bolalar maydonchalari, yer usti avtoturargohi.

QAT'IY VA MUHIM TO'LOV QOIDALARI (HECH QACHON ADASHTIRMA!):

1. 22 m², 25 m², 34 m², 39 m² XONADONLAR UCHUN TO'LOV SHARTLARI (33% CHEGIRMA BILAN):
   Ushbu xonadonlar uchun 33% maxsus chegirmada 2 xil to'lov varianti mavjud:
   A) 100% to'liq to'lov (33% chegirma bilan).
   B) Bosh to'lov + Kadastrda qoldiq to'lov (33% chegirma to'liq saqlanadi!):
      - 22 m² va 25 m² uylar uchun: Bosh to'lov — 146 575 000 so'm (146.6 mln). Qoldiq summa 2028-yil 4-chorakda (kadastr chiqqanda) to'lanadi. Qurilish davrida oylik to'lov 0 so'm (talab etilmaydi)!
      - 34 m² va 39 m² uylar uchun: Bosh to'lov — 177 000 000 so'm (177.0 mln). Qoldiq summa 2028-yil 4-chorakda (kadastr chiqqanda) to'lanadi. Qurilish davrida oylik to'lov 0 so'm (talab etilmaydi)!
   
   Aniq narxlari (33% chegirmada):
   • 22 m² (Studio):
     - 2–4-qavatlar: 1 m² = 7 537 500 so'm | Jami: 165 825 000 so'm (~165.8 mln) | Kadastrda qoldiq: 19 250 000 so'm
     - 5–8-qavatlar: 1 m² = 7 202 500 so'm | Jami: 158 455 000 so'm (~158.5 mln) | Kadastrda qoldiq: 11 880 000 so'm
     - 9–12-qavatlar: 1 m² = 6 662 500 so'm | Jami: 146 575 000 so'm (~146.6 mln) | Kadastrda qoldiq: 0 so'm (bosh to'lovda 100% yopiladi)
   • 25 m² (Studio):
     - 2–4-qavatlar: 1 m² = 7 537 500 so'm | Jami: 188 437 500 so'm (~188.4 mln) | Kadastrda qoldiq: 41 862 500 so'm
     - 5–8-qavatlar: 1 m² = 7 202 500 so'm | Jami: 180 062 500 so'm (~180.1 mln) | Kadastrda qoldiq: 33 487 500 so'm
     - 9–12-qavatlar: 1 m² = 6 867 500 so'm | Jami: 171 687 500 so'm (~171.7 mln) | Kadastrda qoldiq: 25 112 500 so'm
   • 34 m² (1 xonali):
     - 2–4-qavatlar: 1 m² = 7 537 500 so'm | Jami: 256 275 000 so'm (~256.3 mln) | Kadastrda qoldiq: 79 275 000 so'm
     - 5–8-qavatlar: 1 m² = 7 202 500 so'm | Jami: 244 885 000 so'm (~244.9 mln) | Kadastrda qoldiq: 67 885 000 so'm
     - 9–12-qavatlar: 1 m² = 6 867 500 so'm | Jami: 233 495 000 so'm (~233.5 mln) | Kadastrda qoldiq: 56 495 000 so'm
   • 39 m² (1 xonali):
     - 2–4-qavatlar: 1 m² = 7 537 500 so'm | Jami: 293 962 500 so'm (~294.0 mln) | Kadastrda qoldiq: 116 962 500 so'm
     - 5–8-qavatlar: 1 m² = 7 202 500 so'm | Jami: 280 897 500 so'm (~280.9 mln) | Kadastrda qoldiq: 103 897 500 so'm
     - 9–12-qavatlar: 1 m² = 6 867 500 so'm | Jami: 267 832 500 so'm (~267.8 mln) | Kadastrda qoldiq: 90 832 500 so'm

2. 30 OYGACHA 0% FOIZSIZ BO'LIB TO'LASHGA BERILADIGAN XONADONLAR:
   Faqat quyidagi xonadonlarni bo'lib to'lashga olish mumkin:
   
   A) 1 xonali (Faqat 41 m², 43 m², 49 m²):
      - Boshlang‘ich to‘lov: 29 000 000 so‘m (29 mln)
      - Oylik to‘lov: 4 000 000 so‘m (4 mln) — 30 oy 0% foizsiz!
      - 100% to‘lovda (33% chegirma bilan):
        * 41 m²: 1 m² = 6 867 500 – 7 537 500 so'm | Jami: 281.6 mln – 309.0 mln so'm
        * 43 m²: 1 m² = 6 867 500 – 7 537 500 so'm | Jami: 295.3 mln – 324.1 mln so'm
        * 49 m²: 1 m² = 6 867 500 – 7 537 500 so'm | Jami: 336.5 mln – 369.3 mln so'm

   B) 2 xonali (54 m² va 55 m²):
      - Boshlang‘ich to‘lov: 39 000 000 so‘m (39 mln)
      - Oylik to‘lov: 5 000 000 so‘m (5 mln) — 30 oy 0% foizsiz!
      - 100% to‘lovda (33% chegirma bilan):
        * 54 m²: 1 m² = 6 532 500 – 7 202 500 so'm | Jami: 352.8 mln – 388.9 mln so'm
        * 55 m²: 1 m² = 6 532 500 – 7 202 500 so'm | Jami: 359.3 mln – 396.1 mln so'm

   C) 3 xonali (70 m² va 77 m²):
      - Boshlang‘ich to‘lov: 69 000 000 so‘m (69 mln)
      - Oylik to‘lov: 6 000 000 so‘m (6 mln) — 30 oy 0% foizsiz!
      - 100% to‘lovda (33% chegirma bilan):
        * 70 m²: 1 m² = 6 197 500 – 6 867 500 so'm | Jami: 433.8 mln – 480.7 mln so'm
        * 77 m²: 1 m² = 6 197 500 – 6 867 500 so'm | Jami: 477.2 mln – 528.8 mln so'm

ALOQA VA ARIZA TARTIBI:
- Sotuv menejeri: Alisher (@alisher_yangiqoyliq)
- Menejer bilan to‘g‘ridan-to‘g‘ri Telegram havolasi: https://t.me/alisher_yangiqoyliq
- Rasmiy Telegram kanal: @yangiqoyliq_TJM
- Ish vaqti: Har kuni 09:00 — 18:00 (dam olish kunlarisiz).

SENING JAVOB BERISH QOIDALARING:
1. Menejer bilan bog‘lanish, telefon yoki aloqa so‘ralsa: Sotuv menejerimiz Alisher ekanligini, unga Telegram orqali to‘g‘ridan-to‘g‘ri @alisher_yangiqoyliq (https://t.me/alisher_yangiqoyliq) profiliga yozishlari mumkinligini yoki botdagi "✍️ Menejer Alisherga yozish" tugmasini bosishni ma'lum qil!
2. Mijozlar bot orqali barcha ma'lumotlarni oladilar, yangiliklarni @yangiqoyliq_TJM kanalida kuzatadilar yoki botda ariza (telefon raqam) qoldiradilar.
3. Mijoz telefon raqamini qoldirganda, sotuv menejeri o‘zi vaqti bo‘lganda mijoz bilan bog‘lanadi!
4. Gaz haqida so‘rashsa, gaz bo‘lmaydi deb aniq javob ber (ekologik toza va xavfsiz elektr tizimi).
5. Devorlar holati bo‘yicha so‘rashsa, devorlar oq suvoqda topshiriladi deb javob ber.
6. 22, 25, 34 va 39 m² uylar bo'yicha so'rashsa, ularni 33% chegirmada 100% to'lov yoki Bosh to'lov qilib qoldig'ini 2028 IV-chorakda (kadastrda) to'lash mumkinligini (oylik to'lov 0 so'm) tushuntir!
7. Liftlar haqida so‘rashsa: Har bir pod'ezdda (kirish yo‘lagida) 2 tadan zamonaviy, shovqinsiz va tezyurar liftlar (yo‘lovchi hamda yuk tashish uchun) o‘rnatilishini ma'lum qil!
`;

async function sendTelegramMessage(chatId, text, replyMarkup = null) {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  const body = {
    chat_id: chatId,
    text: text,
    parse_mode: 'HTML',
    disable_web_page_preview: false
  };

  if (replyMarkup) {
    body.reply_markup = replyMarkup;
  }

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    const data = await res.json();
    if (!data.ok && data.description && data.description.includes("can't parse entities")) {
      delete body.parse_mode;
      const retryRes = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      return await retryRes.json();
    }
    return data;
  } catch (err) {
    console.error('sendTelegramMessage xatosi:', err);
    return { ok: false, error: err.message };
  }
}

async function askGeminiAI(userMessage, userName = 'Mijoz') {
  if (!GEMINI_API_KEY) {
    return generateSmartFallback(userMessage);
  }

  const modelsToTry = ['gemini-3.5-flash', 'gemini-3.5-flash-lite', 'gemini-3.1-flash-lite'];

  for (const model of modelsToTry) {
    try {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 7000);

      const requestBody = {
        systemInstruction: {
          parts: [{ text: SYSTEM_KNOWLEDGE_BASE }]
        },
        contents: [
          {
            role: "user",
            parts: [
              { text: `Foydalanuvchi ismi: ${userName}\nFoydalanuvchi savoli: ${userMessage}` }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.6,
          maxOutputTokens: 800
        }
      };

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (response.ok) {
        const data = await response.json();
        const candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (candidateText && candidateText.trim().length > 0) {
          return candidateText;
        }
      }
    } catch (err) {
      // Keyingi modelga yoki fallbackga o'tish
    }
  }

  return generateSmartFallback(userMessage);
}

function generateSmartFallback(msg) {
  const text = (msg || '').toLowerCase();

  // 1. 22 m² Studio
  if (text.includes('22')) {
    return `💵 <b>22 m² Studio xonadon (33% CHEGIRMA BILAN):</b>\n\n` +
      `✅ <b>To‘lov variantlari:</b>\n` +
      `1️⃣ <b>100% to‘liq to‘lov:</b> 146.6 mln – 165.8 mln so‘m\n` +
      `2️⃣ <b>Bosh to‘lov + Kadastrda qoldiq (33% chegirma saqlanadi):</b>\n` +
      `  • Bosh to‘lov: <b>146 575 000 so‘m</b>\n` +
      `  • Oylik to‘lov: <b>0 so‘m</b> (qurilish davrida talab etilmaydi!)\n` +
      `  • Kadastr chiqqanda qoldiq: 9–12-qavatda <b>0 so‘m</b> (to‘liq yopiladi), 5–8-qavatda <b>11.9 mln so‘m</b>, 2–4-qavatda <b>19.3 mln so‘m</b> (2028-yil 4-chorakda to‘lanadi).\n\n` +
      `📊 <b>Qavatlar bo‘yicha 1 m² va xonadonning umumiy narxi:</b>\n` +
      `• 9–12-qavatlar (eng arzon): 1 m² = 6 662 500 so‘m | Jami: <b>146 575 000 so‘m</b>\n` +
      `• 5–8-qavatlar (arzonroq): 1 m² = 7 202 500 so‘m | Jami: <b>158 455 000 so‘m</b>\n` +
      `• 2–4-qavatlar (talabgir): 1 m² = 7 537 500 so‘m | Jami: <b>165 825 000 so‘m</b>\n\n` +
      `🏗 <b>Topshirish:</b> 2028-yil 4-chorak (70% tayyor ta'mirlangan).\n` +
      `Batafsil ma'lumot olish yoki xonadonni bepul bron qilish uchun telefon raqamingizni qoldiring!`;
  }

  // 2. 25 m² Studio
  if (text.includes('25')) {
    return `💵 <b>25 m² Studio xonadon (33% CHEGIRMA BILAN):</b>\n\n` +
      `✅ <b>To‘lov variantlari:</b>\n` +
      `1️⃣ <b>100% to‘liq to‘lov:</b> 171.7 mln – 188.4 mln so‘m\n` +
      `2️⃣ <b>Bosh to‘lov + Kadastrda qoldiq (33% chegirma saqlanadi):</b>\n` +
      `  • Bosh to‘lov: <b>146 575 000 so‘m</b>\n` +
      `  • Oylik to‘lov: <b>0 so‘m</b> (qurilish davrida talab etilmaydi!)\n` +
      `  • Kadastr chiqqanda qoldiq: 9–12-qavatda <b>25.1 mln so‘m</b>, 5–8-qavatda <b>33.5 mln so‘m</b>, 2–4-qavatda <b>41.9 mln so‘m</b> (2028-yil 4-chorakda to‘lanadi).\n\n` +
      `📊 <b>Qavatlar bo‘yicha 1 m² va xonadonning umumiy narxi:</b>\n` +
      `• 9–12-qavatlar: 1 m² = 6 867 500 so‘m | Jami: <b>171 687 500 so‘m</b>\n` +
      `• 5–8-qavatlar: 1 m² = 7 202 500 so‘m | Jami: <b>180 062 500 so‘m</b>\n` +
      `• 2–4-qavatlar: 1 m² = 7 537 500 so‘m | Jami: <b>188 437 500 so‘m</b>\n\n` +
      `🏗 <b>Topshirish:</b> 2028-yil 4-chorak (70% tayyor ta'mirlangan).\n` +
      `Qaysi qavat sizga qulayroq? Telefon raqamingizni yozsangiz, batafsil ma'lumot beramiz!`;
  }

  // 3. 34 m² (Bosh to'lov + Kadastr yoki 100% to'lov)
  if (text.includes('34')) {
    return `💵 <b>34 m² 1 xonali xonadon (33% CHEGIRMA BILAN):</b>\n\n` +
      `✅ <b>To‘lov variantlari:</b>\n` +
      `1️⃣ <b>100% to‘liq to‘lov:</b> 233.5 mln – 256.3 mln so‘m\n` +
      `2️⃣ <b>Bosh to‘lov + Kadastrda qoldiq (33% chegirma saqlanadi):</b>\n` +
      `  • Bosh to‘lov: <b>177 000 000 so‘m</b>\n` +
      `  • Oylik to‘lov: <b>0 so‘m</b> (qurilish davrida talab etilmaydi!)\n` +
      `  • Kadastr chiqqanda qoldiq: 9–12-qavatda <b>56.5 mln so‘m</b>, 5–8-qavatda <b>67.9 mln so‘m</b>, 2–4-qavatda <b>79.3 mln so‘m</b> (2028-yil 4-chorakda to‘lanadi).\n\n` +
      `📊 <b>Qavatlar bo‘yicha 1 m² va xonadonning umumiy narxi (33% chegirmada):</b>\n` +
      `• 9–12-qavatlar: 1 m² = 6 867 500 so‘m | Jami: <b>233 495 000 so‘m</b>\n` +
      `• 5–8-qavatlar: 1 m² = 7 202 500 so‘m | Jami: <b>244 885 000 so‘m</b>\n` +
      `• 2–4-qavatlar: 1 m² = 7 537 500 so‘m | Jami: <b>256 275 000 so‘m</b>\n\n` +
      `🏗 <b>Topshirish:</b> 2028-yil 4-chorak (70% ta'mirlangan).\n` +
      `Bron qilish yoki ofisga tashrif buyurish uchun telefon raqamingizni qoldiring!`;
  }

  // 4. 39 m² (Bosh to'lov + Kadastr yoki 100% to'lov)
  if (text.includes('39')) {
    return `💵 <b>39 m² 1 xonali xonadon (33% CHEGIRMA BILAN):</b>\n\n` +
      `✅ <b>To‘lov variantlari:</b>\n` +
      `1️⃣ <b>100% to‘liq to‘lov:</b> 267.8 mln – 294.0 mln so‘m\n` +
      `2️⃣ <b>Bosh to‘lov + Kadastrda qoldiq (33% chegirma saqlanadi):</b>\n` +
      `  • Bosh to‘lov: <b>177 000 000 so‘m</b>\n` +
      `  • Oylik to‘lov: <b>0 so‘m</b> (qurilish davrida talab etilmaydi!)\n` +
      `  • Kadastr chiqqanda qoldiq: 9–12-qavatda <b>90.8 mln so‘m</b>, 5–8-qavatda <b>103.9 mln so‘m</b>, 2–4-qavatda <b>117.0 mln so‘m</b> (2028-yil 4-chorakda to‘lanadi).\n\n` +
      `📊 <b>Qavatlar bo‘yicha 1 m² va xonadonning umumiy narxi (33% chegirmada):</b>\n` +
      `• 9–12-qavatlar: 1 m² = 6 867 500 so‘m | Jami: <b>267 832 500 so‘m</b>\n` +
      `• 5–8-qavatlar: 1 m² = 7 202 500 so‘m | Jami: <b>280 897 500 so‘m</b>\n` +
      `• 2–4-qavatlar: 1 m² = 7 537 500 so‘m | Jami: <b>293 962 500 so‘m</b>\n\n` +
      `🏗 <b>Topshirish:</b> 2028-yil 4-chorak (70% ta'mirlangan).\n` +
      `Menejerimiz Alisher bilan bog‘lanish uchun raqamingizni qoldiring!`;
  }

  // 5. 22, 25, 34, 39 guruhi
  if (text.includes('100') || text.includes('kadastr') || text.includes('bosh to‘lov +')) {
    return `💵 <b>22, 25, 34 VA 39 m² XONADONLAR TO‘LOV SHARTLARI (33% CHEGIRMA):</b>\n\n` +
      `Ushbu xonadonlar uchun 2 xil qulay to‘lov varianti amal qiladi:\n` +
      `1️⃣ <b>100% to‘liq to‘lov</b> (33% chegirma bilan);\n` +
      `2️⃣ <b>Bosh to‘lov + Kadastrda qoldiq to‘lov:</b>\n` +
      `  • <b>22 va 25 m² uylar:</b> Bosh to‘lov — <b>146.6 mln so‘m</b>. Oylik to‘lov <b>0 so‘m</b>! Qoldiq summa kadastr chiqqanda (2028 IV) to‘lanadi.\n` +
      `  • <b>34 va 39 m² uylar:</b> Bosh to‘lov — <b>177.0 mln so‘m</b>. Oylik to‘lov <b>0 so‘m</b>! Qoldiq summa kadastr chiqqanda (2028 IV) to‘lanadi.\n\n` +
      `• <b>22 m²:</b> Jami: 146.6 mln – 165.8 mln so‘m\n` +
      `• <b>25 m²:</b> Jami: 171.7 mln – 188.4 mln so‘m\n` +
      `• <b>34 m²:</b> Jami: 233.5 mln – 256.3 mln so‘m\n` +
      `• <b>39 m²:</b> Jami: 267.8 mln – 294.0 mln so‘m\n\n` +
      `Sizga qaysi maydon qiziq? Raqamingizni qoldirsangiz, batafsil hisob-kitob qilib beramiz!`;
  }

  // 6. 41 m² (Bo'lib to'lash bor)
  if (text.includes('41')) {
    return `🏢 <b>41 m² 1 xonali xonadon:</b>\n\n` +
      `✅ Bu xonadonni <b>30 oygacha 0% foizsiz bo‘lib to‘lash</b> imkoniyati mavjud!\n\n` +
      `💰 <b>Bo‘lib to‘lash shartlari (30 oy 0%):</b>\n` +
      `• <b>Boshlang‘ich to‘lov:</b> 29 000 000 so‘m (29 mln)\n` +
      `• <b>Oylik to‘lov:</b> 4 000 000 so‘m (4 mln) — 30 oy ustamasiz!\n\n` +
      `🎁 <b>Yoki 100% to‘lovda (33% katta chegirma):</b>\n` +
      `• 9–12-qavatlar: 1 m² = 6 867 500 so‘m | Jami: <b>281 567 500 so‘m</b> (~281.6 mln)\n` +
      `• 5–8-qavatlar: 1 m² = 7 202 500 so‘m | Jami: <b>295 302 500 so‘m</b> (~295.3 mln)\n` +
      `• 2–4-qavatlar: 1 m² = 7 537 500 so‘m | Jami: <b>309 037 500 so‘m</b> (~309.0 mln)\n\n` +
      `Xonadonni bron qilish uchun telefon raqamingizni qoldiring!`;
  }

  // 7. 43 m² (Bo'lib to'lash bor)
  if (text.includes('43')) {
    return `🏢 <b>43 m² 1 xonali xonadon:</b>\n\n` +
      `✅ Bu xonadonni <b>30 oygacha 0% foizsiz bo‘lib to‘lash</b> imkoniyati mavjud!\n\n` +
      `💰 <b>Bo‘lib to‘lash shartlari (30 oy 0%):</b>\n` +
      `• <b>Boshlang‘ich to‘lov:</b> 29 000 000 so‘m (29 mln)\n` +
      `• <b>Oylik to‘lov:</b> 4 000 000 so‘m (4 mln) — 30 oy ustamasiz!\n\n` +
      `🎁 <b>Yoki 100% to‘lovda (33% katta chegirma):</b>\n` +
      `• 9–12-qavatlar: 1 m² = 6 867 500 so‘m | Jami: <b>295 302 500 so‘m</b> (~295.3 mln)\n` +
      `• 5–8-qavatlar: 1 m² = 7 202 500 so‘m | Jami: <b>309 707 500 so‘m</b> (~309.7 mln)\n` +
      `• 2–4-qavatlar: 1 m² = 7 537 500 so‘m | Jami: <b>324 112 500 so‘m</b> (~324.1 mln)\n\n` +
      `Xonadonni bron qilish uchun telefon raqamingizni qoldiring!`;
  }

  // 8. 49 m² (Bo'lib to'lash bor)
  if (text.includes('49')) {
    return `🏢 <b>49 m² 1 xonali keng xonadon:</b>\n\n` +
      `✅ Bu xonadonni <b>30 oygacha 0% foizsiz bo‘lib to‘lash</b> imkoniyati mavjud!\n\n` +
      `💰 <b>Bo‘lib to‘lash shartlari (30 oy 0%):</b>\n` +
      `• <b>Boshlang‘ich to‘lov:</b> 29 000 000 so‘m (29 mln)\n` +
      `• <b>Oylik to‘lov:</b> 4 000 000 so‘m (4 mln) — 30 oy ustamasiz!\n\n` +
      `🎁 <b>Yoki 100% to‘lovda (33% katta chegirma):</b>\n` +
      `• 9–12-qavatlar: 1 m² = 6 867 500 so‘m | Jami: <b>336 507 500 so‘m</b> (~336.5 mln)\n` +
      `• 5–8-qavatlar: 1 m² = 7 202 500 so‘m | Jami: <b>352 922 500 so‘m</b> (~352.9 mln)\n` +
      `• 2–4-qavatlar: 1 m² = 7 537 500 so‘m | Jami: <b>369 337 500 so‘m</b> (~369.3 mln)\n\n` +
      `Xonadonni bron qilish uchun telefon raqamingizni qoldiring!`;
  }

  // 9. 1 xonali umumiy savol
  if (text.includes('1 xona') || text.includes('1-xona') || text.includes('studio') || text.includes('bir xona')) {
    return `🏢 <b>1 xonali xonadonlar 2 toifaga bo‘linadi:</b>\n\n` +
      `💵 <b>1. FAQAT 100% TO‘LOVGA (Bo‘lib to‘lash yo‘q, 33% chegirma bilan):</b>\n` +
      `• <b>22 m²:</b> 1 m²: 6.87 – 7.54 mln | Jami: <b>151.1 mln – 165.8 mln so‘m</b>\n` +
      `• <b>25 m²:</b> 1 m²: 6.87 – 7.54 mln | Jami: <b>171.7 mln – 188.4 mln so‘m</b>\n` +
      `• <b>34 m²:</b> 1 m²: 6.87 – 7.54 mln | Jami: <b>233.5 mln – 256.3 mln so‘m</b>\n` +
      `• <b>39 m²:</b> 1 m²: 6.87 – 7.54 mln | Jami: <b>267.8 mln – 294.0 mln so‘m</b>\n\n` +
      `💰 <b>2. 30 OYGACHA 0% FOIZSIZ BO‘LIB TO‘LASHGA:</b>\n` +
      `• <b>41, 43 va 49 m²</b> xonadonlar:\n` +
      `  - <b>Boshlang‘ich to‘lov:</b> 29 mln so‘m\n` +
      `  - <b>Oylik to‘lov:</b> 4 mln so‘m (30 oy davomida 0% ustama)\n` +
      `  - 100% to‘lovda (33% chegirma): 281.6 mln – 369.3 mln so‘m\n\n` +
      `Sizga qaysi to‘lov varianti ko‘proq ma'qul? Telefon raqamingizni qoldirsangiz, menejerimiz Alisher sizga barcha chizmalarni yuboradi!`;
  }

  // 10. 54 m², 55 m² yoki 2 xonali
  if (text.includes('54') || text.includes('55') || text.includes('2 xona') || text.includes('2-xona') || text.includes('ikki xona')) {
    return `🏢 <b>2 xonali oilaviy xonadonlar (54 m² va 55 m²):</b>\n\n` +
      `✅ Bu xonadonlarni <b>30 oygacha 0% foizsiz bo‘lib to‘lash</b> imkoniyati mavjud!\n\n` +
      `💰 <b>Bo‘lib to‘lash shartlari (30 oy 0% ustama):</b>\n` +
      `• <b>Boshlang‘ich to‘lov:</b> 39 000 000 so‘m (39 mln)\n` +
      `• <b>Oylik to‘lov:</b> 5 000 000 so‘m (5 mln) — 30 oy davomida!\n\n` +
      `🎁 <b>Yoki 100% to‘lovda (33% KATTA CHEGIRMA BILAN):</b>\n` +
      `• <b>54 m²:</b>\n` +
      `  - 9–12-qavatlar: 1 m² = 6 532 500 so‘m | Jami: <b>352 755 000 so‘m</b> (~352.8 mln)\n` +
      `  - 5–8-qavatlar: 1 m² = 6 867 500 so‘m | Jami: <b>370 845 000 so‘m</b> (~370.8 mln)\n` +
      `  - 2–4-qavatlar: 1 m² = 7 202 500 so‘m | Jami: <b>388 935 000 so‘m</b> (~388.9 mln)\n` +
      `• <b>55 m²:</b>\n` +
      `  - 9–12-qavatlar: 1 m² = 6 532 500 so‘m | Jami: <b>359 287 500 so‘m</b> (~359.3 mln)\n` +
      `  - 5–8-qavatlar: 1 m² = 6 867 500 so‘m | Jami: <b>377 712 500 so‘m</b> (~377.7 mln)\n` +
      `  - 2–4-qavatlar: 1 m² = 7 202 500 so‘m | Jami: <b>396 137 500 so‘m</b> (~396.1 mln)\n\n` +
      `Topshirish: 2028-yil 4-chorak (70% ta'mirlangan). Telefon raqamingizni qoldiring, menejerimiz bog‘lanadi!`;
  }

  // 11. 70 m², 77 m² yoki 3 xonali
  if (text.includes('70') || text.includes('77') || text.includes('3 xona') || text.includes('3-xona') || text.includes('uch xona')) {
    return `🏢 <b>3 xonali keng xonadonlar (70 m² va 77 m²):</b>\n\n` +
      `✅ Bu xonadonlarni <b>30 oygacha 0% foizsiz bo‘lib to‘lash</b> imkoniyati mavjud!\n\n` +
      `💰 <b>Bo‘lib to‘lash shartlari (30 oy 0% ustama):</b>\n` +
      `• <b>Boshlang‘ich to‘lov:</b> 69 000 000 so‘m (69 mln)\n` +
      `• <b>Oylik to‘lov:</b> 6 000 000 so‘m (6 mln) — 30 oy davomida!\n\n` +
      `🎁 <b>Yoki 100% to‘lovda (33% KATTA CHEGIRMA BILAN):</b>\n` +
      `• <b>70 m²:</b>\n` +
      `  - 9–12-qavatlar: 1 m² = 6 197 500 so‘m | Jami: <b>433 825 000 so‘m</b> (~433.8 mln)\n` +
      `  - 5–8-qavatlar: 1 m² = 6 532 500 so‘m | Jami: <b>457 275 000 so‘m</b> (~457.3 mln)\n` +
      `  - 2–4-qavatlar: 1 m² = 6 867 500 so‘m | Jami: <b>480 725 000 so‘m</b> (~480.7 mln)\n` +
      `• <b>77 m²:</b>\n` +
      `  - 9–12-qavatlar: 1 m² = 6 197 500 so‘m | Jami: <b>477 207 500 so‘m</b> (~477.2 mln)\n` +
      `  - 5–8-qavatlar: 1 m² = 6 532 500 so‘m | Jami: <b>503 002 500 so‘m</b> (~503.0 mln)\n` +
      `  - 2–4-qavatlar: 1 m² = 6 867 500 so‘m | Jami: <b>528 797 500 so‘m</b> (~528.8 mln)\n\n` +
      `Katta oilalar uchun ideal kenglik! Telefon raqamingizni qoldiring, menejerimiz Alisher sizga yordam beradi!`;
  }

  // 12. Barcha narxlar va 1 m² narxlari ("narx", "kvadrat", "1 m", "qancha", "prays", "katalog", "ro'yxat")
  if (text.includes('narx') || text.includes('kvadrat') || text.includes('1 m') || text.includes('1m') || text.includes('qancha') || text.includes('prays') || text.includes('katalog') || text.includes('ro‘yxat') || text.includes('royxat')) {
    return `📊 <b>"YANGI QO‘YLIQ-2" BARCHA XONADONLAR VA 1 M² NARXLARI:</b>\n\n` +
      `💵 <b>1. FAQAT 100% TO‘LOVGA (33% CHEGIRMA BILAN) — Bo‘lib to‘lashga berilmaydi:</b>\n` +
      `• <b>22 m² (Studio):</b> 1 m²: 6.87 – 7.54 mln | Jami: <b>151.1 mln – 165.8 mln so‘m</b>\n` +
      `• <b>25 m² (Studio):</b> 1 m²: 6.87 – 7.54 mln | Jami: <b>171.7 mln – 188.4 mln so‘m</b>\n` +
      `• <b>34 m² (1 xona):</b> 1 m²: 6.87 – 7.54 mln | Jami: <b>233.5 mln – 256.3 mln so‘m</b>\n` +
      `• <b>39 m² (1 xona):</b> 1 m²: 6.87 – 7.54 mln | Jami: <b>267.8 mln – 294.0 mln so‘m</b>\n\n` +
      `💰 <b>2. 30 OYGACHA 0% FOIZSIZ BO‘LIB TO‘LASHGA BERILADIGAN UYLAR:</b>\n` +
      `🔹 <b>1 xonali (41, 43, 49 m²):</b>\n` +
      `  • <b>Bosh to‘lov: 29 mln</b> | Oylik: 4 mln (30 oy)\n` +
      `  • 41 m²: 1 m²: 6.87 – 7.54 mln | 100% to‘lovda: 281.6 – 309.0 mln\n` +
      `  • 43 m²: 1 m²: 6.87 – 7.54 mln | 100% to‘lovda: 295.3 – 324.1 mln\n` +
      `  • 49 m²: 1 m²: 6.87 – 7.54 mln | 100% to‘lovda: 336.5 – 369.3 mln\n\n` +
      `🔹 <b>2 xonali (54, 55 m²):</b>\n` +
      `  • <b>Bosh to‘lov: 39 mln</b> | Oylik: 5 mln (30 oy)\n` +
      `  • 54 m²: 1 m²: 6.53 – 7.20 mln | 100% to‘lovda: 352.8 – 388.9 mln\n` +
      `  • 55 m²: 1 m²: 6.53 – 7.20 mln | 100% to‘lovda: 359.3 – 396.1 mln\n\n` +
      `🔹 <b>3 xonali (70, 77 m²):</b>\n` +
      `  • <b>Bosh to‘lov: 69 mln</b> | Oylik: 6 mln (30 oy)\n` +
      `  • 70 m²: 1 m²: 6.20 – 6.87 mln | 100% to‘lovda: 433.8 – 480.7 mln\n` +
      `  • 77 m²: 1 m²: 6.20 – 6.87 mln | 100% to‘lovda: 477.2 – 528.8 mln\n\n` +
      `Sizga aynan qaysi maydondagi xonadon qiziq? Telefon raqamingizni yozsangiz, xonadon chizmasini yuboramiz!`;
  }

  // 13. Bo'lib to'lash shartlari ("bo'lib", "bolib", "boshlang'ich", "oylik", "muddatli")
  if (text.includes('bo‘lib') || text.includes('bolib') || text.includes('boshlang') || text.includes('oylik') || text.includes('muddatli') || text.includes('kredit') || text.includes('ipoteka')) {
    return `💰 <b>"Yangi Qo‘yliq-2" bo‘lib to‘lash shartlari (30 oy 0% ustamasiz):</b>\n\n` +
      `⚠️ <b>Muhim eslatma:</b> 22, 25, 34 va 39 m² xonadonlar bo‘lib to‘lashga BERILMAYDI! Ular faqat 100% to‘lovda (33% chegirma bilan) to‘liq to‘lab olinadi.\n\n` +
      `✅ <b>30 oygacha 0% foizsiz bo‘lib to‘lashga beriladigan xonadonlar:</b>\n` +
      `1️⃣ <b>1 xonali (41, 43, 49 m²):</b> Bosh to‘lov — <b>29 mln so‘m</b> | Oylik — <b>4 mln so‘m</b>\n` +
      `2️⃣ <b>2 xonali (54, 55 m²):</b> Bosh to‘lov — <b>39 mln so‘m</b> | Oylik — <b>5 mln so‘m</b>\n` +
      `3️⃣ <b>3 xonali (70, 77 m²):</b> Bosh to‘lov — <b>69 mln so‘m</b> | Oylik — <b>6 mln so‘m</b>\n\n` +
      `🎁 100% to‘lovda esa <b>33% KATTA CHEGIRMA</b> beriladi!\n\n` +
      `Qaysi variant sizga ma'qul? Aniq hisob-kitob uchun telefon raqamingizni qoldiring!`;
  }

  // 14. Qavatlar haqida
  if (text.includes('qavat') || text.includes('etaj') || text.includes('baland')) {
    return `🏢 <b>Qavatlar bo‘yicha narxlar tasnifi (12 qavatli monolit):</b>\n\n` +
      `• <b>2–4-qavatlar:</b> Eng talabgir standart qavatlar (1 m² eng yuqori narxda)\n` +
      `• <b>5–8-qavatlar:</b> O‘rtacha arzonlashtirilgan qavatlar\n` +
      `• <b>9–12-qavatlar:</b> Eng hamyonbop va eng arzon narxlar!\n\n` +
      `Barcha qavatlarda zamonaviy tezyurar liftlar xizmat ko‘rsatadi. Sizga qaysi qavat ko‘proq ma'qul?`;
  }

  // 15. Manzil va Lokatsiya
  if (text.includes('manzil') || text.includes('qayerda') || text.includes('lokatsiya') || text.includes('qayer') || text.includes('ofis') || text.includes('mo‘ljal') || text.includes('moljal')) {
    return `📍 <b>Majmua va Sotuv ofisi manzili:</b>\n\n` +
      `Toshkent viloyati, O‘rtachirchiq tumani, O‘choqli MFY, Yashnobod ko‘chasi, 44a-uy (Yangi Toshkent hududi).\n` +
      `<b>Bosh mo‘ljal:</b> Food City ulgurji savdo majmuasi chorrahasi ro‘parasi (atigi 2 daqiqa).\n` +
      `Qo‘yliq metrosi va bozoridan — 8 daqiqa.\n\n` +
      `🗺 <a href="https://yandex.com/maps/org/93362741697?si=paavuny8ar13tb74cnyu5e4ny8">Yandex Xaritada ofis lokatsiyasini ochish</a>\n\n` +
      `• <b>Menejer:</b> Alisher\n` +
      `• <b>Rasmiy Telegram kanal:</b> @yangiqoyliq_TJM\n` +
      `⏰ Ish vaqti: Har kuni 09:00 — 18:00 (dam olish kunlarisiz)`;
  }

  // 16. Topshirish va ta'mir
  if (text.includes('topshirish') || text.includes('muddat') || text.includes('ta\'mir') || text.includes('tamir') || text.includes('qachon') || text.includes('holat')) {
    return `🏗 <b>Topshirish muddati va ta'mirlash holati:</b>\n\n` +
      `• <b>Topshirish vaqti:</b> 2028-yil 4-chorak\n` +
      `• <b>Ta'mirlash holati:</b> <b>70% tayyor</b> holatda topshiriladi!\n` +
      `• <b>Topshiriladigan narsalar:</b> Kirish mustahkam temir eshigi, sifatli plastik derazalar, suv, elektr tarmoqlari ulanadi, pol silliq styajka qilingan, <b>devorlar oq suvoqda</b> (majmuada gaz bo‘lmaydi, xavfsiz va zamonaviy elektr tizimi).\n\n` +
      `Siz faqat o‘zingizga yoqqan oboy va pol qoplamasini o‘rnatasiz!`;
  }

  // 17. Menejer bilan aloqa
  if (text.includes('menejer') || text.includes('alisher') || text.includes('telefon') || text.includes('aloqa') || text.includes('nomer')) {
    return `👨‍💼 <b>Sotuv ofisi va Sotuv menejeri bilan aloqa:</b>\n\n` +
      `• Sotuv menejeri: <b>Alisher</b>\n` +
      `• Telegram: @alisher_yangiqoyliq\n` +
      `• To‘g‘ridan-to‘g‘ri yozish: https://t.me/alisher_yangiqoyliq\n` +
      `• Rasmiy Telegram kanal: @yangiqoyliq_TJM\n` +
      `• Ish vaqti: Har kuni 09:00 — 18:00\n\n` +
      `<i>Menejerimiz Alisherga to‘g‘ridan-to‘g‘ri Telegram orqali yozib barcha savollaringizga tezkor javob olishingiz mumkin!</i>`;
  }

  // 18. Liftlar haqida ("lift", "liftlar", "podyezd", "pod'ezd")
  if (text.includes('lift') || text.includes('podyezd') || text.includes('pod\'ezd') || text.includes('podezd')) {
    return `🛗 <b>"YANGI QO‘YLIQ-2" MAJMUASIDA LIFTLAR:</b>\n\n` +
      `✅ <b>Har bir pod'ezdda (kirish yo‘lagida) 2 tadan</b> zamonaviy, shovqinsiz va tezyurar liftlar o‘rnatiladi!\n\n` +
      `• 1 ta qulay yo‘lovchi lifti\n` +
      `• 1 ta keng yuk tashish (yuk-yo‘lovchi) lifti\n` +
      `• 12 qavatli binolarda aholi va mehmonlarning kutib qolmasdan, tezkor va qulay harakatlanishi ta'minlanadi.\n\n` +
      `Savollaringiz bo‘lsa, yozib qoldiring yoki menejerimiz bilan bog‘lanish uchun telefon raqamingizni qoldiring! 👇`;
  }

  // 19. Ko'p beriladigan savollar (FAQ)
  if (text.includes('savol') || text.includes('faq')) {
    return `❓ <b>ENG KO‘P BERILADIGAN SAVOLLAR VA JAVOBLAR:</b>\n\n` +
      `1️⃣ <b>Xonadonlar qanday holatda topshiriladi?</b>\n` +
      `👉 <b>70% tayyor:</b> oq suvoq, kirish temir eshigi, sifatli deraza romlari, xonadon shaxtasiga olib kirilgan elektr va suv tizimlari.\n\n` +
      `2️⃣ <b>Topshirish muddati qachon?</b>\n` +
      `👉 <b>2028-yil 4-chorak</b>da to‘liq topshiriladi.\n\n` +
      `3️⃣ <b>Gaz bo‘ladimi?</b>\n` +
      `👉 Xavfsizlik talablariga asosan xonadonlarda gaz bo‘lmaydi. Zamonaviy xavfsiz elektr plitalar, uzluksiz elektr ta’minoti hamda shaxsiy isitish orqali honadonlar isitiladi.\n\n` +
      `4️⃣ <b>Bo‘lib to‘lashda ustama (foiz) bormi?</b>\n` +
      `👉 Mutlaqo 0% ustamasiz, 30 oygacha foizsiz (41–77 m² uylar uchun).\n\n` +
      `5️⃣ <b>Infratuzilma qanday?</b>\n` +
      `👉 13 gektarda maktab, bog‘cha, poliklinika, masjid, amfiteatr, yer usti parking va 24/7 qo‘riqlash mavjud.\n\n` +
      `6️⃣ <b>Har bir pod'ezdda nechtadan lift bo‘ladi?</b>\n` +
      `👉 Har bir pod'ezdda <b>2 tadan</b> zamonaviy shovqinsiz tezyurar liftlar (yo‘lovchi va yuk tashish uchun) xizmat ko‘rsatadi.\n\n` +
      `Qo‘shimcha savolingiz bo‘lsa, yozib yuboring yoki quyida telefon raqamingizni qoldiring! 👇`;
  }

  // 19. Ofisga yoki obyektga tashrif buyurish
  if (text.includes('tashrif') || text.includes('ofisga bor') || text.includes('kelmoqchiman') || text.includes('korsat') || text.includes('joyida')) {
    return `📅 <b>SAVDO OFISIMIZGA YOKI QURILISH MAYDONIGA TASHRIF BUYURING!</b>\n\n` +
      `Sizni Food City ro‘parasidagi zamonaviy savdo ofisimizda mamnuniyat bilan kutib olamiz:\n` +
      `☕ <b>Qahva ustida konsultatsiya:</b> byudjetingizga mos individual to‘lov rejasi va 33% gacha chegirmalar;\n` +
      `🏗 <b>Qurilish maydoni:</b> 13 gektarlik hudud va ish jarayonini jonli ko‘rish;\n` +
      `📄 <b>Hujjatlar:</b> Barcha rasmiy qonuniy litsenziya va shartnoma namunalari bilan tanishuv.\n\n` +
      `📍 <b>Manzil:</b> Yangi Toshkent, Food City ro‘parasi (Qo‘yliq metrosidan 10 daqiqa)\n` +
      `⏰ <b>Tashrif vaqti:</b> Har kuni 17:00 gacha\n\n` +
      `Sizni ofisda kutib olishimiz uchun telefon raqamingizni qoldiring yoki 'Raqamimni qoldirish' tugmasini bosing 👇`;
  }

  // Umumiy salomlashish
  return `Assalomu alaykum! "VATAN" qurilish kompaniyasining <b>"Yangi Qo‘yliq-2"</b> turar-joy majmuasi rasmiy AI maslahatchisi xizmatingizda! 🏢✨\n\n` +
    `📌 <b>ASOSIY TO‘LOV SHARTLARI:</b>\n` +
    `💵 <b>100% to‘lov yoki Bosh to‘lov + Kadastr (22, 25, 34, 39 m² — 33% chegirma):</b>\n` +
    `• 22, 25 m²: Bosh to‘lov 146.6 mln | Oylik 0 so‘m | Qoldiq kadastrda\n` +
    `• 34, 39 m²: Bosh to‘lov 177.0 mln | Oylik 0 so‘m | Qoldiq kadastrda\n\n` +
    `💰 <b>30 oygacha 0% foizsiz bo‘lib to‘lashga beriladigan uylar:</b>\n` +
    `• <b>1 xonali (41, 43, 49 m²):</b> Bosh to‘lov 29 mln | Oylik 4 mln\n` +
    `• <b>2 xonali (54, 55 m²):</b> Bosh to‘lov 39 mln | Oylik 5 mln\n` +
    `• <b>3 xonali (70, 77 m²):</b> Bosh to‘lov 69 mln | Oylik 6 mln\n\n` +
    `Quyidagi tugmalardan birini bosing yoki o‘zingizni qiziqtirgan savolni yozing 👇`;
}

function extractPhoneNumber(text) {
  if (!text) return null;
  const cleaned = text.replace(/[\s\-\(\)]/g, '');
  const match = cleaned.match(/(\+?998\d{9}|\b\d{9}\b)/);
  return match ? match[0] : null;
}

function getMainKeyboard() {
  return {
    keyboard: [
      [{ text: "💵 100% / Kadastr (22, 25, 34, 39 m²)" }, { text: "💰 Bo‘lib to‘lash (41, 43, 49 m²)" }],
      [{ text: "🏢 2 xonali (54, 55 m²)" }, { text: "🏢 3 xonali (70, 77 m²)" }],
      [{ text: "📊 Barcha uy va 1 m² narxlari" }, { text: "📍 Lokatsiya va Ofis" }],
      [{ text: "❓ Ko‘p beriladigan savollar" }, { text: "📅 Ofisga tashrif buyurish" }],
      [{ text: "✍️ Menejer Alisherga yozish" }],
      [{ text: "📱 Raqamimni qoldirish", request_contact: true }]
    ],
    resize_keyboard: true,
    one_time_keyboard: false
  };
}

async function handleTelegramUpdate(update) {
  if (!update || (!update.message && !update.callback_query)) {
    return { ok: true, note: "No message" };
  }

  const message = update.message;
  if (!message) return { ok: true };

  const chatId = message.chat.id;
  const userText = (message.text || '').trim();
  const userName = `${message.from?.first_name || ''} ${message.from?.last_name || ''}`.trim() || 'Hurmatli mijoz';
  const userUsername = message.from?.username ? `@${message.from.username}` : 'Mavjud emas';
  const lowerText = userText.toLowerCase();

  if (message.contact) {
    const contactPhone = message.contact.phone_number;
    const contactName = message.contact.first_name || userName;

    const leadNotice = 
      `🔥 <b>YANGI ARIZA (Telegram Bot Kontakt)!</b>\n\n` +
      `👤 <b>Mijoz:</b> ${contactName}\n` +
      `📞 <b>Telefon:</b> ${contactPhone}\n` +
      `💬 <b>Telegram:</b> ${userUsername}\n` +
      `📍 <b>Loyiha:</b> Yangi Qo‘yliq-2 (Comfort class)\n` +
      `⏰ <b>Vaqt:</b> ${new Date().toLocaleString('uz-UZ', { timeZone: 'Asia/Tashkent' })}\n\n` +
      `⚡️ <i>Mijoz botdagi 'Raqamimni qoldirish' tugmasini bosdi. Zudlik bilan bog‘laning!</i>`;

    await sendTelegramMessage(MANAGER_CHAT_ID, leadNotice);

    await sendTelegramMessage(
      chatId,
      `✅ <b>Rahmat, ${contactName}! Raqamingiz qabul qilindi.</b>\n\n` +
      `Sotuv menejerimiz <b>Alisher</b> tez orada siz bilan bog‘lanadi va siz uchun eng qulay qavat va arzon narxdagi xonadonni tanlab beradi! 🏢✨`,
      getMainKeyboard()
    );

    return { ok: true };
  }

  // Menejer Alisherga yozish
  if (
    userText === '✍️ Menejer Alisherga yozish' ||
    userText === 'Menejer Alisherga yozish' ||
    lowerText === '/alisher' ||
    lowerText === '/menejer' ||
    lowerText === 'menejer' ||
    lowerText.includes('alisherga yozish') ||
    lowerText.includes('menejerga yozish')
  ) {
    const managerMessage = 
      `👨‍💼 <b>SOTUV MENEJERI: ALISHER</b>\n` +
      `━━━━━━━━━━━━━━━━━━━━\n\n` +
      `Hurmatli <b>${userName}</b>!\n\n` +
      `Siz "Yangi Qo‘yliq-2" turar-joy majmuasi sotuv menejeri <b>Alisher</b> bilan to‘g‘ridan-to‘g‘ri Telegram orqali bog‘lanishingiz mumkin:\n\n` +
      `🏢 <b>Menejer sizga quyidagilarda yordam beradi:</b>\n` +
      `• Bo‘sh qolgan eng qulay qavat va arzon xonadonlarni tanlash;\n` +
      `• 100% to‘lovda 33% gacha maxsus chegirma hisob-kitobi;\n` +
      `• 30 oygacha 0% foizsiz bo‘lib to‘lash shartnomasi;\n` +
      `• Savdo ofisiga yoki qurilish maydoniga tashrif buyurish.\n\n` +
      `💬 <b>Telegram:</b> @alisher_yangiqoyliq\n` +
      `⏰ <b>Ish vaqti:</b> Har kuni 09:00 — 18:00\n\n` +
      `👇 <b>Menejerga to‘g‘ridan-to‘g‘ri yozish uchun quyidagi tugmani bosing:</b>`;

    const managerKeyboard = {
      inline_keyboard: [
        [
          { 
            text: "💬 Menejer Alisherga yozish (@alisher_yangiqoyliq) ↗️", 
            url: "https://t.me/alisher_yangiqoyliq" 
          }
        ],
        [
          { 
            text: "📢 Rasmiy Telegram kanalimiz", 
            url: "https://t.me/yangiqoyliq_TJM" 
          }
        ],
        [
          { 
            text: "🌐 Rasmiy veb-sayt", 
            url: "https://vatan-11-p5nw.vercel.app/" 
          }
        ]
      ]
    };

    try {
      const managerNotice = 
        `ℹ️ <b>Mijoz botda 'Menejer Alisherga yozish' tugmasini bosdi!</b>\n` +
        `━━━━━━━━━━━━━━━━━━━━\n` +
        `👤 <b>Mijoz:</b> ${userName}\n` +
        `💬 <b>Telegram:</b> ${userUsername}\n` +
        `⏰ <b>Vaqt:</b> ${new Date().toLocaleString('uz-UZ', { timeZone: 'Asia/Tashkent' })}`;
      await sendTelegramMessage(MANAGER_CHAT_ID, managerNotice);
    } catch (e) {}

    await sendTelegramMessage(chatId, managerMessage, managerKeyboard);
    return { ok: true };
  }

  if (userText === '/start') {
    const welcomeText = 
      `Assalomu alaykum, <b>${userName}</b>! 👋\n\n` +
      `Men — "VATAN" qurilish kompaniyasining <b>"Yangi Qo‘yliq-2"</b> turar-joy majmuasi rasmiy <b>AI maslahatchisiman</b>! 🏢✨\n\n` +
      `📌 <b>SHARTLARIMIZ BILAN TANISHING:</b>\n\n` +
      `💵 <b>1. FAQAT 100% TO‘LOVGA (33% chegirma bilan, bo‘lib to‘lash yo‘q):</b>\n` +
      `• 22, 25, 34 va 39 m² xonadonlar umumiy summasi to‘liq to‘lab sotiladi (151.1 mln dan boshlanadi).\n\n` +
      `💰 <b>2. 30 OYGACHA 0% FOIZSIZ BO‘LIB TO‘LASH:</b>\n` +
      `• <b>1 xonali (41, 43, 49 m²):</b> Bosh to‘lov 29 mln | Oylik 4 mln\n` +
      `• <b>2 xonali (54, 55 m²):</b> Bosh to‘lov 39 mln | Oylik 5 mln\n` +
      `• <b>3 xonali (70, 77 m²):</b> Bosh to‘lov 69 mln | Oylik 6 mln\n\n` +
      `👨‍💼 <b>Sotuv menejeri:</b> Alisher (@alisher_yangiqoyliq)\n\n` +
      `👇 Kerakli bo‘limni tanlang yoki savolingizni yozing:`;

    await sendTelegramMessage(chatId, welcomeText, getMainKeyboard());
    return { ok: true };
  }

  const detectedPhone = extractPhoneNumber(userText);
  if (detectedPhone) {
    const leadNotice = 
      `🔥 <b>YANGI MIJOZ TELEFONI (AI Bot Chatidan)!</b>\n\n` +
      `👤 <b>Mijoz:</b> ${userName}\n` +
      `📞 <b>Telefon:</b> ${detectedPhone}\n` +
      `💬 <b>Telegram:</b> ${userUsername}\n` +
      `📝 <b>Xabar matni:</b> "${userText}"\n` +
      `⏰ <b>Vaqt:</b> ${new Date().toLocaleString('uz-UZ', { timeZone: 'Asia/Tashkent' })}\n\n` +
      `⚡️ <i>Mijoz botda telefon raqamini qoldirdi. Zudlik bilan bog‘laning!</i>`;

    await sendTelegramMessage(MANAGER_CHAT_ID, leadNotice);
  }

  const aiReply = await askGeminiAI(userText, userName);

  let finalReply = aiReply;
  if (detectedPhone && !aiReply.toLowerCase().includes('qabul qilindi')) {
    finalReply += `\n\n✅ <i>Telefon raqamingiz qabul qilindi. Menejerimiz Alisher tez orada siz bilan bog‘lanadi!</i>`;
  }

  await sendTelegramMessage(chatId, finalReply, getMainKeyboard());
  return { ok: true };
}

// Netlify Functions v2 (Standard Web Request/Response)
export default async (req, context) => {
  const url = new URL(req.url);

  if (req.method === 'GET') {
    const action = url.searchParams.get('action');
    const targetUrl = url.searchParams.get('url');

    if (action === 'setWebhook') {
      const webhookUrl = targetUrl || `${url.origin}/.netlify/functions/telegram-ai-bot`;
      const tgRes = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/setWebhook?url=${encodeURIComponent(webhookUrl)}`);
      const tgData = await tgRes.json();
      return new Response(JSON.stringify({ success: true, webhookUrl, telegram: tgData }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (action === 'getWebhookInfo') {
      const tgRes = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getWebhookInfo`);
      const tgData = await tgRes.json();
      return new Response(JSON.stringify({ success: true, telegram: tgData }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({
      status: "online",
      project: "Yangi Qo‘yliq-2 AI Telegram Bot (Netlify Function)",
      bot: "@Vatan2333_bot",
      geminiConfigured: !!GEMINI_API_KEY
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  if (req.method === 'POST') {
    try {
      const update = await req.json();
      const result = await handleTelegramUpdate(update);
      return new Response(JSON.stringify(result), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (e) {
      return new Response(JSON.stringify({ ok: false, error: e.message }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }

  return new Response("Method not allowed", { status: 405 });
};

// Netlify Functions v1 / AWS Lambda Handler fallback
export const handler = async (event) => {
  if (event.httpMethod === 'GET') {
    const params = event.queryStringParameters || {};
    if (params.action === 'setWebhook') {
      const webhookUrl = params.url || `https://${event.headers.host}/.netlify/functions/telegram-ai-bot`;
      const tgRes = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/setWebhook?url=${encodeURIComponent(webhookUrl)}`);
      const tgData = await tgRes.json();
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ success: true, webhookUrl, telegram: tgData })
      };
    }
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: "online", bot: "@Vatan2333_bot" })
    };
  }

  if (event.httpMethod === 'POST') {
    try {
      const update = JSON.parse(event.body || '{}');
      const result = await handleTelegramUpdate(update);
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result)
      };
    } catch (e) {
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ok: false, error: e.message })
      };
    }
  }

  return { statusCode: 405, body: "Method not allowed" };
};
