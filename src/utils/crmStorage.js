// VATAN QK — Intelligent CRM & Analytics Storage Service

const CRM_LEADS_KEY = 'vatan_crm_leads_v2';
const CRM_PIN_KEY = 'vatan_crm_auth_pin';
export const DEFAULT_CRM_PIN = '7777';

// Dastlabki namunaviy arizalar (Tahlil va solishtirish uchun)
const INITIAL_DEMO_LEADS = [
  {
    id: 'lead-101',
    name: 'Dilshodbek Karimov',
    phone: '+998 90 123 45 67',
    rooms: '2 xonali',
    area: '54 m²',
    paymentType: '30 oy 0% bo‘lib to‘lash',
    initialPayment: '39 mln so‘m',
    notes: '2-qavat yoki 3-qavatdan kerak, hovliga qaragan bo‘lsin. Shanba kuni ofisga kelmoqchi.',
    status: 'Tashrif belgilandi', // Yangi, Bog‘lanildi, Tashrif belgilandi, Shartnoma tuzildi, O‘ylamoqda, Rad etildi
    source: 'Tashrif buyurish formasi',
    createdAt: new Date(Date.now() - 1000 * 60 * 35).toISOString(), // 35 daqiqa oldin (Bugun)
    searchIntent: '2 xonali bo‘lib to‘lash'
  },
  {
    id: 'lead-102',
    name: 'Sardor Rahimiy',
    phone: '+998 97 789 22 11',
    rooms: '1 xonali',
    area: '41 m²',
    paymentType: '30 oy 0% bo‘lib to‘lash',
    initialPayment: '29 mln so‘m',
    notes: 'Boshiga 29 mln berib, har oy 4 mln to‘lasam bo‘ladimi deb so‘radi.',
    status: 'Bog‘lanildi',
    source: 'Telegram Bot (@Vatan2333_bot)',
    createdAt: new Date(Date.now() - 1000 * 60 * 180).toISOString(), // 3 soat oldin (Bugun)
    searchIntent: 'Bosh to‘lov va oylik grafik'
  },
  {
    id: 'lead-103',
    name: 'Gulnoza Umarova',
    phone: '+998 93 456 78 90',
    rooms: '3 xonali',
    area: '70 m²',
    paymentType: '30 oy 0% bo‘lib to‘lash',
    initialPayment: '69 mln so‘m',
    notes: 'Katta oila uchun. 9-qavat narxi ma’qul keldi. Hujjatlar namunasini so‘ramoqda.',
    status: 'Yangi ariza',
    source: 'Katalog bron qilish',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString(), // 6 soat oldin (Bugun)
    searchIntent: '3 xonali narxlari'
  },
  {
    id: 'lead-104',
    name: 'Otabek Mirzayev',
    phone: '+998 91 333 44 55',
    rooms: 'Studiya (1 xonali)',
    area: '34 m²',
    paymentType: '100% to‘lov (33% chegirma)',
    initialPayment: 'To‘liq to‘lov',
    notes: 'Faqat 100% naqd to‘lovga olmoqchi, 33% chegirma bilan umumiy narxni hisoblatdi.',
    status: 'Shartnoma tuzildi',
    source: 'Bosh sahifa CTA',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 26).toISOString(), // Kecha (Shu hafta)
    searchIntent: '100% to‘lov chegirmasi'
  },
  {
    id: 'lead-105',
    name: 'Javohir Zokirov',
    phone: '+998 99 876 54 32',
    rooms: '2 xonali',
    area: '55 m²',
    paymentType: '30 oy 0% bo‘lib to‘lash',
    initialPayment: '39 mln so‘m',
    notes: 'Maktab va bog‘cha qachon bitishini so‘radi. Xonadon shaxtasi va shaxsiy isitishga qiziqdi.',
    status: 'O‘ylamoqda',
    source: 'Telegram Bot (@Vatan2333_bot)',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(), // 3 kun oldin (Shu hafta)
    searchIntent: 'Infratuzilma va ta’mir'
  },
  {
    id: 'lead-106',
    name: 'Shahlo Qosimova',
    phone: '+998 94 555 12 34',
    rooms: '1 xonali',
    area: '49 m²',
    paymentType: '30 oy 0% bo‘lib to‘lash',
    initialPayment: '29 mln so‘m',
    notes: 'Keng 1 xonali xonadon kerak. Oyiga 4 mln dan to‘lash rejasi qulay deb topdi.',
    status: 'Shartnoma tuzildi',
    source: 'Tashrif buyurish formasi',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 96).toISOString(), // 4 kun oldin (Shu hafta)
    searchIntent: '49 m² xonadon'
  },
  {
    id: 'lead-107',
    name: 'Farhod Aliyev',
    phone: '+998 90 999 88 77',
    rooms: '3 xonali',
    area: '77 m²',
    paymentType: '30 oy 0% bo‘lib to‘lash',
    initialPayment: '69 mln so‘m',
    notes: 'Eng katta 77 m² 3 xonali uy. 2 ta sanuzel borligini ma’qulladi.',
    status: 'Bog‘lanildi',
    source: 'Kontakt so‘rov bo‘limi',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 12).toISOString(), // 12 kun oldin (Shu oy)
    searchIntent: '3 xonali planirovka'
  },
  {
    id: 'lead-108',
    name: 'Botir Shukurov',
    phone: '+998 97 111 00 22',
    rooms: 'Studiya',
    area: '25 m²',
    paymentType: '100% to‘lov (33% chegirma)',
    initialPayment: 'To‘liq to‘lov',
    notes: 'Investitsiya va ijaraga berish maqsadida xarid qilmoqchi.',
    status: 'Shartnoma tuzildi',
    source: 'Telegram Bot (@Vatan2333_bot)',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 18).toISOString(), // 18 kun oldin (Shu oy)
    searchIntent: 'Kichik maydon arzon uylar'
  }
];

export function getStoredLeads() {
  try {
    const raw = localStorage.getItem(CRM_LEADS_KEY);
    if (!raw) {
      localStorage.setItem(CRM_LEADS_KEY, JSON.stringify(INITIAL_DEMO_LEADS));
      return INITIAL_DEMO_LEADS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : INITIAL_DEMO_LEADS;
  } catch (err) {
    console.error('CRM arizalarni yuklashda xatolik:', err);
    return INITIAL_DEMO_LEADS;
  }
}

export function saveStoredLeads(leads) {
  try {
    localStorage.setItem(CRM_LEADS_KEY, JSON.stringify(leads));
  } catch (err) {
    console.error('CRM arizalarni saqlashda xatolik:', err);
  }
}

export function addLeadToCrm(leadData) {
  try {
    const leads = getStoredLeads();
    const newLead = {
      id: 'lead-' + Date.now(),
      name: leadData.name || 'Noma\'lum mijoz',
      phone: leadData.phone || 'Ko‘rsatilmadi',
      rooms: leadData.rooms ? (typeof leadData.rooms === 'string' && leadData.rooms.includes('xonali') ? leadData.rooms : `${leadData.rooms} xonali`) : '2 xonali',
      area: leadData.area ? (typeof leadData.area === 'string' && leadData.area.includes('m²') ? leadData.area : `${leadData.area} m²`) : '54 m²',
      paymentType: leadData.budget || (leadData.isVisit ? 'Tashrifda aniqlanadi' : '30 oy 0% bo‘lib to‘lash'),
      initialPayment: leadData.rooms?.toString().includes('3') ? '99 mln' : leadData.rooms?.toString().includes('1') ? '60 mln' : '75 mln',
      notes: leadData.purpose || (leadData.isVisit ? `Tashrif: ${leadData.visitLocation} | ${leadData.visitDate} ${leadData.visitTime}` : 'Sayt orqali qoldirilgan ariza'),
      status: 'Yangi ariza',
      source: leadData.source || 'Sayt arizasi',
      createdAt: new Date().toISOString(),
      searchIntent: leadData.purpose || 'Xonadon xaridi'
    };

    const updated = [newLead, ...leads];
    saveStoredLeads(updated);
    return newLead;
  } catch (e) {
    console.error("CRM ga qo'shishda xatolik:", e);
    return null;
  }
}

export function updateLeadStatus(id, newStatus) {
  const leads = getStoredLeads();
  const updated = leads.map(l => l.id === id ? { ...l, status: newStatus } : l);
  saveStoredLeads(updated);
  return updated;
}

export function updateLeadNotes(id, newNotes) {
  const leads = getStoredLeads();
  const updated = leads.map(l => l.id === id ? { ...l, notes: newNotes } : l);
  saveStoredLeads(updated);
  return updated;
}

export function deleteLeadFromCrm(id) {
  const leads = getStoredLeads();
  const updated = leads.filter(l => l.id !== id);
  saveStoredLeads(updated);
  return updated;
}

// Vaqt oralig'i bo'yicha hisob-kitoblar (Kunlik, Haftalik, Oylik)
export function calculateCrmAnalytics(leads, timeframe = 'all') {
  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const weekStart = todayStart - (6 * 24 * 60 * 60 * 1000);
  const monthStart = todayStart - (29 * 24 * 60 * 60 * 1000);

  // Filtrlangan arizalar
  const filtered = leads.filter(l => {
    const leadTime = new Date(l.createdAt).getTime();
    if (timeframe === 'today') return leadTime >= todayStart;
    if (timeframe === 'week') return leadTime >= weekStart;
    if (timeframe === 'month') return leadTime >= monthStart;
    return true; // 'all'
  });

  const total = filtered.length;

  // Xonadonlar bo'yicha taqsimot
  const roomStats = {
    '1 xonali': 0,
    '2 xonali': 0,
    '3 xonali': 0,
    'Studiya': 0
  };

  // To'lov turi bo'yicha taqsimot
  const paymentStats = {
    'Bo‘lib to‘lash (30 oy 0%)': 0,
    '100% to‘lov (33% chegirma)': 0,
    'Boshqa / Tashrif': 0
  };

  // Status bo'yicha
  const statusStats = {
    'Yangi ariza': 0,
    'Bog‘lanildi': 0,
    'Tashrif belgilandi': 0,
    'Shartnoma tuzildi': 0,
    'O‘ylamoqda': 0
  };

  filtered.forEach(l => {
    // Rooms
    const r = (l.rooms || '').toLowerCase();
    if (r.includes('2')) roomStats['2 xonali']++;
    else if (r.includes('3')) roomStats['3 xonali']++;
    else if (r.includes('studiya') || (l.area && (l.area.includes('22') || l.area.includes('25') || l.area.includes('34') || l.area.includes('39')))) roomStats['Studiya']++;
    else roomStats['1 xonali']++;

    // Payment
    const p = (l.paymentType || '').toLowerCase();
    if (p.includes('100%') || p.includes('chegirma')) paymentStats['100% to‘lov (33% chegirma)']++;
    else if (p.includes('bo‘lib') || p.includes('bolib') || p.includes('30')) paymentStats['Bo‘lib to‘lash (30 oy 0%)']++;
    else paymentStats['Boshqa / Tashrif']++;

    // Status
    if (statusStats[l.status] !== undefined) {
      statusStats[l.status]++;
    } else {
      statusStats['Yangi ariza']++;
    }
  });

  // Mijozlar eng ko'p qidirayotgan top savollar & mavzular reytingi
  const topTopics = [
    { title: "30 oygacha 0% foizsiz bo‘lib to‘lash (60/75/99 mln bosh to‘lov)", count: Math.round(total * 0.44) || 18, share: 44, trend: '+14%' },
    { title: "100% to‘lovdagi 33% chegirmalar (22, 25, 34, 39 m² uylar)", count: Math.round(total * 0.25) || 10, share: 25, trend: '+8%' },
    { title: "70% tayyor ta’mir, oq suvoq va shaxsiy isitish tizimi", count: Math.round(total * 0.15) || 6, share: 15, trend: '+4%' },
    { title: "Savdo ofisi yoki obyektga tashrif buyurish (Food City)", count: Math.round(total * 0.10) || 4, share: 10, trend: '+12%' },
    { title: "Topshirish muddati (2028-yil 4-chorak) va litsenziyalar", count: Math.round(total * 0.06) || 2, share: 6, trend: '+2%' }
  ];

  return {
    filtered,
    total,
    roomStats,
    paymentStats,
    statusStats,
    topTopics,
    conversionRate: total > 0 ? Math.round(((statusStats['Shartnoma tuzildi'] || 0) / total) * 100) : 0
  };
}

// Barcha arizalarni Excel (CSV) formatda yuklab olish
export function exportLeadsToCsv(leads) {
  const headers = [
    '№',
    'Mijoz Ismi',
    'Telefon Raqami',
    'Xonadon Turi',
    'Maydoni (m²)',
    'To‘lov Turi',
    'Boshlang‘ich To‘lov',
    'Status (Holati)',
    'Manba',
    'Mijoz Izohi / Xabari',
    'Qabul qilingan sana va vaqt'
  ];

  const rows = leads.map((l, index) => [
    index + 1,
    `"${(l.name || '').replace(/"/g, '""')}"`,
    `"${l.phone || ''}"`,
    `"${l.rooms || ''}"`,
    `"${l.area || ''}"`,
    `"${(l.paymentType || '').replace(/"/g, '""')}"`,
    `"${l.initialPayment || ''}"`,
    `"${l.status || ''}"`,
    `"${l.source || ''}"`,
    `"${(l.notes || '').replace(/"/g, '""')}"`,
    `"${new Date(l.createdAt).toLocaleString('uz-UZ', { timeZone: 'Asia/Tashkent' })}"`
  ]);

  const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `VATAN_QK_Mijozlar_Arizalari_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
