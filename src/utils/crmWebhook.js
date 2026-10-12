// Lead generation and Telegram lead notification helper

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
      rooms: Number(rooms),
      area: `${area} m²`
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

  return `🔔 <b>YANGI BUYURTMA — VATAN</b>\n` +
         `━━━━━━━━━━━━━━━━━━━━\n` +
         `👤 <b>Mijoz:</b> ${client.name}\n` +
         `📞 <b>Telefon:</b> <code>${client.phone}</code>\n` +
         `🏢 <b>Loyiha:</b> ${property.project}\n` +
         `🏠 <b>Xonadon:</b> ${property.rooms} xonali (${property.area})\n` +
         `💰 <b>Budjet:</b> ${financial.budget}\n` +
         `🎯 <b>Maqsad:</b> ${financial.purpose}\n` +
         `👨‍💼 <b>Menejer:</b> ${meta.assignedManager}\n` +
         `⏰ <b>Vaqt:</b> ${meta.localDateTime}`;
}
