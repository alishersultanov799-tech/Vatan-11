// Lead generation and Telegram lead notification helper

export const TELEGRAM_BOT_TOKEN = '8998702557:AAFTVRJ5dCy11whyAavAnUMdtL4R_fF6PkI';
// Can be customized via VITE_TELEGRAM_CHAT_ID in .env or defaults to channel/group
export const DEFAULT_TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID || '5677180840';

export function buildCrmLeadPayload({
  name,
  phone,
  project = 'Yangi Qo‘yliq-2',
  rooms = 2,
  area = '54',
  budget = '39 mln boshlang‘ich',
  purpose = 'Yashash uchun',
  source = 'Vatan rasmiy sayti',
  isVisit = false,
  visitLocation = 'Savdo ofisi (Food City ro‘parasi)',
  visitDate = '',
  visitTime = ''
}) {
  const timestamp = new Date().toISOString();
  const formattedDate = new Date().toLocaleString('uz-UZ', { timeZone: 'Asia/Tashkent' });

  return {
    client: {
      name: name || 'Noma\'lum mijoz',
      phone: phone || 'Ko‘rsatilmadi'
    },
    property: {
      project,
      rooms: typeof rooms === 'number' ? `${rooms} xonali` : rooms,
      area: typeof area === 'string' && area.includes('m²') ? area : `${area} m²`
    },
    financial: {
      budget,
      purpose
    },
    meta: {
      createdAt: timestamp,
      localDateTime: formattedDate,
      assignedManager: 'Alisher',
      source,
      isVisit,
      visitLocation,
      visitDate,
      visitTime
    }
  };
}

export function formatTelegramLeadMessage(payload) {
  const { client, property, financial, meta } = payload;
  const crmFooter = `\n\n📊 <b>CRM Tizimida ko‘rish:</b>\n👉 <a href="https://vatan-11-p5nw.vercel.app/#crm">https://vatan-11-p5nw.vercel.app/#crm</a> (PIN: 7777)`;

  if (meta.isVisit) {
    return `📅 <b>YANGI TASHRIF BUYURISH ARIZASI</b>\n` +
           `━━━━━━━━━━━━━━━━━━━━\n` +
           `👤 <b>Mijoz:</b> ${client.name}\n` +
           `📞 <b>Telefon:</b> <code>${client.phone}</code>\n` +
           `📍 <b>Tashrif joyi:</b> ${meta.visitLocation}\n` +
           `📆 <b>Belgilangan sana:</b> ${meta.visitDate || 'Belgilanmagan'}\n` +
           `⏰ <b>Qulay vaqt:</b> ${meta.visitTime || 'Kun davomida'}\n` +
           `🏠 <b>Qiziqtirayotgan xonadon:</b> ${property.rooms} (${property.area})\n` +
           `🎯 <b>Izoh / Maqsad:</b> ${financial.purpose}\n` +
           `🌐 <b>Manba:</b> ${meta.source}\n` +
           `⏱ <b>Yuborildi:</b> ${meta.localDateTime}` +
           crmFooter;
  }

  return `🔔 <b>YANGI ARIZA — VATAN SAYTI</b>\n` +
         `━━━━━━━━━━━━━━━━━━━━\n` +
         `👤 <b>Mijoz:</b> ${client.name}\n` +
         `📞 <b>Telefon:</b> <code>${client.phone}</code>\n` +
         `🏢 <b>Loyiha:</b> ${property.project}\n` +
         `🏠 <b>Xonadon:</b> ${property.rooms} (${property.area})\n` +
         `💰 <b>So‘rov / Shart:</b> ${financial.budget}\n` +
         `🎯 <b>Maqsad:</b> ${financial.purpose}\n` +
         `🌐 <b>Manba:</b> ${meta.source}\n` +
         `👨‍💼 <b>Menejer:</b> ${meta.assignedManager}\n` +
         `⏰ <b>Vaqt:</b> ${meta.localDateTime}` +
         crmFooter;
}

import { addLeadToCrm } from './crmStorage';

export async function sendTelegramLead(leadData) {
  try {
    // 1. Saqlash (CRM ma'lumotlar omboriga)
    try {
      addLeadToCrm(leadData);
    } catch (storageErr) {
      console.warn("CRM saqlash xatosi:", storageErr);
    }

    // 2. Telegramga xabar yuborish
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
