/**
 * Telegram Bot Helper & Diagnostic Tool
 * Bot: @Vatan2333_bot
 */

import fs from 'fs';
import path from 'path';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// .env o'qish
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
const VERCEL_WEBHOOK_URL = 'https://vatan-11-p5nw.vercel.app/api/telegram-ai-bot';

const command = process.argv[2] || 'status';

async function run() {
  if (command === 'status') {
    console.log('🔍 Telegram bot holati tekshirilmoqda...\n');
    try {
      const meRes = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getMe`);
      const me = await meRes.json();
      if (!me.ok) {
        console.log('❌ Xatolik: Bot tokeni yaroqsiz!');
        return;
      }
      console.log(`✅ Bot: ${me.result.first_name} (@${me.result.username})`);
      console.log(`🆔 ID: ${me.result.id}`);

      const hookRes = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getWebhookInfo`);
      const hook = await hookRes.json();
      console.log('\n📡 Webhook holati:');
      if (hook.result?.url) {
        console.log(`🟢 Faol Webhook (24/7 Bulut): ${hook.result.url}`);
        console.log(`📬 Kutilayotgan xabarlar soni: ${hook.result.pending_update_count}`);
        if (hook.result.last_error_message) {
          console.log(`⚠️ Oxirgi xatolik: ${hook.result.last_error_message}`);
        } else {
          console.log(`✨ Barcha tizimlar a'lo darajada ishlamoqda!`);
        }
      } else {
        console.log(`🟡 Webhook hozirda o'chiq (Bot mahalliy rejimda yoki to'xtatilgan).`);
        console.log(`👉 24/7 bulutli rejimni yoqish uchun 1-bandni tanlang.`);
      }
    } catch (e) {
      console.error('Tarmoq xatosi:', e.message);
    }
  } else if (command === 'set-webhook') {
    console.log(`🚀 24/7 Bulutli rejim yoqilmoqda...`);
    try {
      const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/setWebhook?url=${encodeURIComponent(VERCEL_WEBHOOK_URL)}`);
      const data = await res.json();
      if (data.ok) {
        console.log(`\n✅ Muvaffaqiyatli! Webhook Vercel bulutiga ulandi:`);
        console.log(`🔗 ${VERCEL_WEBHOOK_URL}`);
        console.log(`\n🎉 Bot endi kompyuteringiz o'chiq bo'lsa ham 24/7 Telegramda mijozlarga javob beradi!`);
      } else {
        console.log('❌ Webhook o\'rnatishda xatolik:', data);
      }
    } catch (e) {
      console.error('Xatolik:', e.message);
    }
  } else if (command === 'test-message') {
    console.log(`📨 Menejerga (@alisher_yangiqoyliq / ${MANAGER_CHAT_ID}) test xabar yuborilmoqda...`);
    try {
      const now = new Date().toLocaleString('uz-UZ', { timeZone: 'Asia/Tashkent' });
      const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: MANAGER_CHAT_ID,
          text: `🤖 <b>VATAN Bot — Aloqa tekshiruvi!</b>\n\n✅ Hurmatli Alisher, botingiz muvaffaqiyatli faollashtirildi va 100% ishlamoqda!\n\n⏰ <b>Vaqt:</b> ${now}\n🌐 <b>Rejim:</b> 24/7 Vercel Cloud Webhook`,
          parse_mode: 'HTML'
        })
      });
      const data = await res.json();
      if (data.ok) {
        console.log(`✅ Test xabari Telegramingizga yetkazildi! Telegramni tekshirib ko'ring.`);
      } else {
        console.log('❌ Telegramga xabar yetkazilmadi:', data);
      }
    } catch (e) {
      console.error('Xatolik:', e.message);
    }
  } else if (command === 'auto-heal') {
    try {
      const hookRes = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getWebhookInfo`);
      const hook = await hookRes.json();
      if (!hook.result?.url || hook.result.url !== VERCEL_WEBHOOK_URL) {
        console.log("⚠️ Webhook o'chiq yoki ulanmagan ekan. 24/7 bulutli rejim avtomatik yoqilmoqda...");
        const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/setWebhook?url=${encodeURIComponent(VERCEL_WEBHOOK_URL)}`);
        const data = await res.json();
        if (data.ok) {
          console.log("✅ Webhook muvaffaqiyatli tiklandi! Bot 24/7 bulutli rejimda ishlamoqda.");
        } else {
          console.log("❌ Webhookni tiklashda xatolik:", data);
        }
      } else {
        console.log("🟢 Webhook faol holatda. Bot 24/7 bulutli rejimda uzluksiz ishlamoqda.");
      }
    } catch (e) {
      console.error('Auto-heal xatosi:', e.message);
    }
  }
}

run();
