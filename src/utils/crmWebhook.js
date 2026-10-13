// Lead generation and Telegram lead notification helper

export const TELEGRAM_BOT_TOKEN = '8998702557:AAFTVRJ5dCy11whyAavAnUMdtL4R_fF6PkI';
// Can be customized via VITE_TELEGRAM_CHAT_ID in .env or defaults to channel/group
export const DEFAULT_TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID || '-1002058933924';

export function buildCrmLeadPayload({
  name,
  phone,
  project = 'Yangi Qo‘yliq-2',
  rooms = 2,
  area = '54',
  budget = '39 mln boshlang‘ich',
  purpose = 'Yashash uchun',
  source = 'Vatan rasmiy sayti'
}) {
  const timestamp = new Date().toISOString();
  const formattedDate = new Date().toLocaleString('uz-UZ', { timeZone: 'Asia/Tashkent' });

  return {
    client: {
      name: name || 'Noma\'lum mijoz',
      phone: phone || '+998 94 603 23 33'
    },
    property: {
      project,
      rooms: Number(rooms) || rooms,
      area: typeof area === 'string' && area.includes('m²') ? area : `${area} m²`
    },
    financial: {
      budget,
      purpose
    },
    meta: {
      createdAt: timestamp,
      localDateTime: formattedDate,
      assignedManager: 'Alisher (+998 94 603 23 33)',
      source
    }
  };
}

export function formatTelegramLeadMessage(payload) {
  const { client, property, financial, meta } = payload;

  return `🔔 <b>YANGI ARIZA — VATAN SAYTI</b>\n` +
         `━━━━━━━━━━━━━━━━━━━━\n` +
         `👤 <b>Mijoz:</b> ${client.name}\n` +
         `📞 <b>Telefon:</b> <code>${client.phone}</code>\n` +
         `🏢 <b>Loyiha:</b> ${property.project}\n` +
         `🏠 <b>Xonadon:</b> ${property.rooms} xonali (${property.area})\n` +
         `💰 <b>So‘rov / Shart:</b> ${financial.budget}\n` +
         `🎯 <b>Maqsad:</b> ${financial.purpose}\n` +
         `🌐 <b>Manba:</b> ${meta.source}\n` +
         `👨‍💼 <b>Menejer:</b> ${meta.assignedManager}\n` +
         `⏰ <b>Vaqt:</b> ${meta.localDateTime}`;
}

export async function sendTelegramLead(leadData) {
  try {
    const payload = buildCrmLeadPayload(leadData);
    const text = formatTelegramLeadMessage(payload);
    const chatId = leadData.chatId || DEFAULT_TELEGRAM_CHAT_ID;

    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'HTML',
      }),
    });

    const data = await response.json();
    if (!data.ok) {
      console.warn('Telegram API javobi:', data);
    }
    return data;
  } catch (error) {
    console.error('Arizani Telegramga yuborishda xatolik:', error);
    return { ok: false, error: error.message };
  }
}
