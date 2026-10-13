/**
 * Telegram Webhook Setup Script for @Vatan2333_bot
 * 
 * Foydalanish:
 * 1. Webhook holatini ko'rish:
 *    node scripts/setup-webhook.js status
 * 
 * 2. Vercel URL bilan webhookni o'rnatish:
 *    node scripts/setup-webhook.js set https://sizning-domen.vercel.app/api/telegram-ai-bot
 * 
 * 3. Webhookni o'chirish:
 *    node scripts/setup-webhook.js delete
 */

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '8998702557:AAFTVRJ5dCy11whyAavAnUMdtL4R_fF6PkI';

async function main() {
  const args = process.argv.slice(2);
  const command = args[0] || 'status';
  const targetUrl = args[1];

  console.log(`🤖 Telegram Bot: @Vatan2333_bot`);
  console.log(`⚡️ Buyruq: ${command}\n`);

  if (command === 'status') {
    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getWebhookInfo`);
    const data = await res.json();
    console.log('📌 Hozirgi Webhook ma\'lumotlari:');
    console.dir(data, { depth: null });
    return;
  }

  if (command === 'set') {
    if (!targetUrl) {
      console.error('❌ Xato: Webhook URL ko\'rsatilmadi!');
      console.log('Misol: node scripts/setup-webhook.js set https://sizning-domen.vercel.app/api/telegram-ai-bot');
      return;
    }

    console.log(`🚀 Webhook o'rnatilmoqda: ${targetUrl}`);
    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/setWebhook?url=${encodeURIComponent(targetUrl)}`);
    const data = await res.json();
    console.log('Natija:');
    console.dir(data, { depth: null });
    return;
  }

  if (command === 'delete') {
    console.log(`🗑 Webhook o'chirilmoqda...`);
    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/deleteWebhook`);
    const data = await res.json();
    console.log('Natija:');
    console.dir(data, { depth: null });
    return;
  }

  console.log('Noma\'lum buyruq. Mumkin bo\'lgan buyruqlar: status, set <URL>, delete');
}

main().catch(console.error);
