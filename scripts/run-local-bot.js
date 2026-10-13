/**
 * Local Telegram AI Bot Polling Runner
 * Botni hoziroq kompyuteringizda sinab ko'rish uchun!
 * 
 * Bot: @Vatan2333_bot
 * Manager: 5677180840
 */

import fs from 'fs';
import path from 'path';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// .env faylini o'qish
const envPath = path.resolve(process.cwd(), '.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  for (const line of envContent.split('\n')) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const [key, ...rest] = trimmed.split('=');
      if (key && rest.length) {
        process.env[key.trim()] = rest.join('=').trim();
      }
    }
  }
}

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '8998702557:AAFTVRJ5dCy11whyAavAnUMdtL4R_fF6PkI';
const MANAGER_CHAT_ID = process.env.MANAGER_CHAT_ID || '5677180840';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';

const SYSTEM_KNOWLEDGE_BASE = `
Sen — "VATAN" qurilish kompaniyasining "Yangi Qo‘yliq-2" zamonaviy turar-joy majmuasi rasmiy professional AI-maslahatchisisan.

LOYIHA VA KOMPANIYA HAQIDA ANIQ FAKTLAR:
1. Kompaniya: "VATAN" qurilish kompaniyasi 2013-yildan buyon faoliyat yuritadi. 10 000+ topshirilgan xonadonlar, 7 000+ tijoriy noturar do‘konlar, davlat litsenziyasi va to‘liq qonuniy kafolatli shartnomalar.
2. Majmua: "Yangi Qo‘yliq-2" (Comfort class).
3. Hududi: 13 gektar katta yashil hudud, 12 qavatli zilzilabardosh monolit binolar (jami 3 800 ta xonadon).
4. Ta'mirlash holati: 70% tayyor ta'mirlash bilan topshiriladi (kirish temir eshiklari, zamonaviy derazalar, barcha kommunikatsiyalar — suv, elektr, gaz, pol styajkasi, devorlar gipslashgan).
5. Topshirish muddati: 2028-yil 4-chorak.
6. Joylashuv va lokatsiya:
   - Toshkent viloyati, O‘rtachirchiq tumani, O‘choqli MFY, Yashnobod ko‘chasi, 44a-uy (Yangi Toshkent hududi).
   - Bosh mo‘ljal: Food City yirik agro-savdo majmuasi chorrahasi ro‘parasi (atigi 2 daqiqa).
   - Qo‘yliq metrosi va dehqon bozoridan 8 daqiqa.
   - Yandex Maps rasmiy ofis lokatsiyasi: https://yandex.com/maps/org/93362741697?si=paavuny8ar13tb74cnyu5e4ny8
7. Infratuzilma: Hudud ichida zamonaviy maktab, bolalar bog‘chasi, Korzinka supermarketi, keng avtoturargoh, 13 gektar obodonlashtirilgan eko-zona, sun'iy ko‘l va ochiq amfiteatr.

XONADONLAR TURLARI VA BO'LIB TO'LASH SHARTLARI (30 OY 0% FOIZSIZ):
1) 1 xonali xonadonlar (7 xil planirovka):
   - Maydonlari: 22 m² (studio), 25 m², 34 m², 39 m², 41 m², 43 m², 49 m².
   - Boshlang‘ich to‘lov: 60 mln so‘mdan boshlanadi.
   - Oylik to‘lov: 4 mln so‘m (30 oy davomida 0% foizsiz).
   - 22 m² va 25 m² faqat 100% to‘lov bilan ham sotiladi (eng arzon variantlar).
2) 2 xonali xonadonlar (2 xil oilaviy planirovka):
   - Maydonlari: 54 m² va 55 m².
   - Boshlang‘ich to‘lov: 75 mln so‘mdan boshlanadi.
   - Oylik to‘lov: 5 mln so‘m (30 oy davomida 0% foizsiz).
3) 3 xonali xonadonlar (2 xil keng planirovka):
   - Maydonlari: 70 m² va 77 m².
   - Boshlang‘ich to‘lov: 99 mln so‘mdan boshlanadi.
   - Oylik to‘lov: 6 mln so‘m (30 oy davomida 0% foizsiz).

CHEGIRMALAR VA TO'LOV VARIANTLARI:
- 100% to‘liq to‘lov qilinganda: 33% KATTA CHEGIRMA beriladi!
- 50% boshlang‘ich to‘lovda: 15% chegirma.
- 30% boshlang‘ich to‘lovda: 10% chegirma.
- Qavatlar bo‘yicha farq: 2-3-4-qavatlar talabgir (standart), 5-6-7-8-qavatlar arzonroq, 9-10-11-12-qavatlar eng arzon narxlarda!
- 31-oydagi qoldiq summa uchun: Naqd, Bank ipotekasi yoki Davlat subsidiyasi variantlari mavjud.

ALOQA VA SOTUV OFISI:
- Sotuv menejeri: Alisher
- Telefon: +998 94 603 23 33
- Telegram: @alisher_yangiqoyliq
- Ish vaqti: Har kuni 09:00 — 18:00 (dam olish kunlarisiz).

SENING VAZIFANG VA XULQ-ATVORING:
- Mijoz qaysi tilda yozsa (o‘zbek lotin, o‘zbek kirill yoki ruscha), aynan o‘sha tilda muloyim, samimiy va professional javob ber.
- Javoblaring aniq, lo‘nda va tushunarli bo‘lsin. Keraksiz uzun jumlalar yozma, chiroyli emoji va punktlardan foydalan.
- Narxlar, oylik to‘lovlar yoki maydonlar haqida so‘rashsa, yuqoridagi aniq raqamlarni keltir.
- Har bir javobing oxirida mijozni harakatga unda: masalan, "Sizga aynan necha xonali xonadon ma'qulroq?", yoki "Aniq hisob-kitob qilishimiz uchun telefon raqamingizni qoldirasizmi, menejerimiz Alisher batafsil ma'lumot beradi".
- Agar mijoz telefon raqamini yozsa, albatta minnatdorchilik bildir va tez orada menejer Alisher bog‘lanishini ayt.
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

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  return await res.json();
}

async function askGeminiAI(userMessage, userName = 'Mijoz') {
  if (!GEMINI_API_KEY) {
    return generateSmartFallback(userMessage);
  }

  const modelsToTry = ['gemini-flash-latest', 'gemini-3.5-flash-lite', 'gemini-2.5-flash'];

  for (const model of modelsToTry) {
    try {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);

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
          temperature: 0.7,
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
      // Keyingi modelga
    }
  }

  return generateSmartFallback(userMessage);
}

function generateSmartFallback(msg) {
  const text = (msg || '').toLowerCase();

  if (text.includes('1 xona') || text.includes('1-xona') || text.includes('studio') || text.includes('bir xona')) {
    return `🏢 <b>1 xonali xonadonlar (22 m² dan 49 m² gacha):</b>\n\n` +
      `• <b>Maydonlar:</b> 22, 25, 34, 39, 41, 43, 49 m²\n` +
      `• <b>Boshlang‘ich to‘lov:</b> 60 mln so‘mdan\n` +
      `• <b>Oylik to‘lov:</b> 4 mln so‘m (30 oy 0% foizsiz)\n` +
      `• <b>100% to‘lovda:</b> 33% katta chegirma mavjud!\n\n` +
      `Sizga aynan qaysi maydon ma'qulroq? Telefon raqamingizni qoldirsangiz, menejerimiz Alisher sizga barcha chizmalarni yuboradi!`;
  }

  if (text.includes('2 xona') || text.includes('2-xona') || text.includes('ikki xona')) {
    return `🏢 <b>2 xonali oilaviy xonadonlar (54 m² va 55 m²):</b>\n\n` +
      `• <b>Maydonlar:</b> 54 m² va 55 m²\n` +
      `• <b>Boshlang‘ich to‘lov:</b> 75 mln so‘mdan\n` +
      `• <b>Oylik to‘lov:</b> 5 mln so‘m (30 oy 0% foizsiz)\n` +
      `• <b>Topshirish:</b> 2028-yil 4-chorak (70% ta'mirlangan)\n\n` +
      `Qaysi qavat sizga qulay: 2–4 (talabgir), 5–8 (arzonroq) yoki 9–12 (eng hamyonbop)?`;
  }

  if (text.includes('3 xona') || text.includes('3-xona') || text.includes('uch xona')) {
    return `🏢 <b>3 xonali keng xonadonlar (70 m² va 77 m²):</b>\n\n` +
      `• <b>Maydonlar:</b> 70 m² va 77 m²\n` +
      `• <b>Boshlang‘ich to‘lov:</b> 99 mln so‘mdan\n` +
      `• <b>Oylik to‘lov:</b> 6 mln so‘m (30 oy 0% foizsiz)\n` +
      `• Katta mehmonxona va alohida yotoqxonalar!\n\n` +
      `Batafsil ma'lumot va bron qilish uchun telefon raqamingizni qoldiring!`;
  }

  if (text.includes('narx') || text.includes('qancha') || text.includes('narxi') || text.includes('to‘lov') || text.includes('tolov') || text.includes('muddatli')) {
    return `💰 <b>"Yangi Qo‘yliq-2" bo‘lib to‘lash shartlari (30 oy 0% ustama):</b>\n\n` +
      `• <b>1 xonali:</b> Bosh to‘lov 60 mln so‘m / Oylik 4 mln so‘m\n` +
      `• <b>2 xonali:</b> Bosh to‘lov 75 mln so‘m / Oylik 5 mln so‘m\n` +
      `• <b>3 xonali:</b> Bosh to‘lov 99 mln so‘m / Oylik 6 mln so‘m\n\n` +
      `🎁 <b>Chegirmalar:</b>\n` +
      `• 100% to‘lovda — <b>33% chegirma!</b>\n` +
      `• 50% bosh to‘lovda — <b>15% chegirma!</b>\n` +
      `• 30% bosh to‘lovda — <b>10% chegirma!</b>\n\n` +
      `Sizga qaysi to‘lov varianti ko‘proq qiziq?`;
  }

  if (text.includes('manzil') || text.includes('qayerda') || text.includes('lokatsiya') || text.includes('qayer') || text.includes('ofis')) {
    return `📍 <b>Majmua va Sotuv ofisi manzili:</b>\n\n` +
      `Toshkent viloyati, O‘rtachirchiq tumani, O‘choqli MFY (Yangi Toshkent hududi).\n` +
      `<b>Bosh mo‘ljal:</b> Food City bozor chorrahasi ro‘parasi (atigi 2 daqiqa).\n\n` +
      `🗺 <a href="https://yandex.com/maps/org/93362741697?si=paavuny8ar13tb74cnyu5e4ny8">Yandex Xaritada ofisni ko‘rish</a>\n\n` +
      `📞 <b>Menejer:</b> Alisher (+998 94 603 23 33)\n` +
      `Ish vaqti: Har kuni 09:00 — 18:00`;
  }

  return `Assalomu alaykum! "VATAN" kompaniyasining "Yangi Qo‘yliq-2" majmuasi maslahatchisi xizmatingizda! 🏢\n\n` +
    `Bizda Yangi Toshkent hududida (Food City ro‘parasi) <b>30 oygacha 0% foizsiz</b> bo‘lib to‘lash imkoniyati mavjud:\n` +
    `• 1 xonali (22–49 m²) — Bosh to‘lov 60 mln / Oylik 4 mln\n` +
    `• 2 xonali (54–55 m²) — Bosh to‘lov 75 mln / Oylik 5 mln\n` +
    `• 3 xonali (70–77 m²) — Bosh to‘lov 99 mln / Oylik 6 mln\n\n` +
    `Quyidagi tugmalar orqali tanlashingiz yoki o‘zingizni qiziqtirgan savolingizni yozishingiz mumkin 👇`;
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
      [{ text: "🏢 1 xonali (22–49 m²)" }, { text: "🏢 2 xonali (54–55 m²)" }],
      [{ text: "🏢 3 xonali (70–77 m²)" }, { text: "💰 30 oy 0% bo‘lib to‘lash" }],
      [{ text: "📍 Lokatsiya va Ofis" }, { text: "📱 Raqamimni qoldirish", request_contact: true }]
    ],
    resize_keyboard: true,
    one_time_keyboard: false
  };
}

async function handleTelegramMessage(message) {
  const chatId = message.chat.id;
  const userText = (message.text || '').trim();
  const userName = `${message.from?.first_name || ''} ${message.from?.last_name || ''}`.trim() || 'Hurmatli mijoz';
  const userUsername = message.from?.username ? `@${message.from.username}` : 'Mavjud emas';

  console.log(`📩 Xabar keldi [${userName} / ${chatId}]: "${userText}"`);

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
      `Sotuv menejerimiz <b>Alisher</b> (+998 94 603 23 33) tez orada siz bilan bog‘lanadi va siz uchun eng qulay qavat va arzon narxdagi xonadonni tanlab beradi! 🏢✨`,
      getMainKeyboard()
    );

    console.log(`✅ Kontakt qabul qilindi va menejerga jo'natildi.`);
    return;
  }

  if (userText === '/start') {
    const welcomeText = 
      `Assalomu alaykum, <b>${userName}</b>! 👋\n\n` +
      `Men — "VATAN" qurilish kompaniyasining <b>"Yangi Qo‘yliq-2"</b> turar-joy majmuasi rasmiy <b>AI maslahatchisiman</b>! 🏢✨\n\n` +
      `Sizga xonadonlar narxlari, <b>30 oygacha 0% foizsiz</b> bo‘lib to‘lash shartlari va qulay lokatsiya bo‘yicha istalgan savolingizga javob berishga tayyorman.\n\n` +
      `👇 Quyidagi tugmalardan birini tanlang yoki o‘zingizni qiziqtirgan savolni yozing:`;

    await sendTelegramMessage(chatId, welcomeText, getMainKeyboard());
    console.log(`✅ /start javobi yuborildi.`);
    return;
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
    console.log(`🔥 Telefon raqami aniqlandi (${detectedPhone}) va menejerga yuborildi!`);
  }

  const aiReply = await askGeminiAI(userText, userName);

  let finalReply = aiReply;
  if (detectedPhone && !aiReply.toLowerCase().includes('qabul qilindi')) {
    finalReply += `\n\n✅ <i>Telefon raqamingiz qabul qilindi. Menejerimiz Alisher (+998 94 603 23 33) tez orada siz bilan bog‘lanadi!</i>`;
  }

  await sendTelegramMessage(chatId, finalReply, getMainKeyboard());
  console.log(`🤖 AI javob yubordi.`);
}

async function startPolling() {
  console.log('🤖 @Vatan2333_bot AI Polling ishga tushmoqda...');

  // Webhookni o'chiramiz (polling ishlashi uchun)
  await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/deleteWebhook`);
  console.log('✅ Webhook tozalandi, jonli polling boshlandi.');
  console.log('⚡️ Endi Telegramda @Vatan2333_bot ga xabar yuborib ko‘rishingiz mumkin!\n');

  let offset = 0;

  while (true) {
    try {
      const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getUpdates?offset=${offset}&timeout=20`);
      const data = await res.json();

      if (data.ok && Array.isArray(data.result)) {
        for (const update of data.result) {
          offset = update.update_id + 1;
          if (update.message) {
            await handleTelegramMessage(update.message);
          }
        }
      }
    } catch (e) {
      console.error('Polling xatosi:', e.message);
      await new Promise(r => setTimeout(r, 3000));
    }
  }
}

startPolling();
