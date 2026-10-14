import React, { useState, useEffect, useMemo } from 'react';
import { 
  Users, 
  Phone, 
  Calendar, 
  Clock, 
  TrendingUp, 
  Search, 
  Filter, 
  Download, 
  Plus, 
  CheckCircle2, 
  X, 
  MessageSquare, 
  Building2, 
  Coins, 
  Eye, 
  ArrowUpRight, 
  ShieldCheck, 
  Lock, 
  Unlock, 
  RefreshCw,
  PhoneCall,
  Send,
  HelpCircle,
  BarChart3,
  PieChart,
  UserCheck,
  ChevronDown,
  Trash2,
  Edit3
} from 'lucide-react';
import { 
  getStoredLeads, 
  saveStoredLeads, 
  updateLeadStatus, 
  updateLeadNotes,
  deleteLeadFromCrm,
  calculateCrmAnalytics, 
  exportLeadsToCsv,
  DEFAULT_CRM_PIN 
} from '../utils/crmStorage';

export default function CrmDashboard({ onClose, onOpenSite }) {
  // Avtorizatsiya (PIN kod himoyasi)
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('vatan_crm_authed') === 'true';
  });
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState(false);

  // Arizalar va filtrlar
  const [leads, setLeads] = useState([]);
  const [timeframe, setTimeframe] = useState('all'); // 'today', 'week', 'month', 'all'
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Yangi mijoz qo'shish modali
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newLeadName, setNewLeadName] = useState('');
  const [newLeadPhone, setNewLeadPhone] = useState('+998 ');
  const [newLeadRooms, setNewLeadRooms] = useState('2 xonali (54 m²)');
  const [newLeadPayment, setNewLeadPayment] = useState('30 oy 0% bo‘lib to‘lash (39 mln)');
  const [newLeadNotes, setNewLeadNotes] = useState('');

  // Izoh tahrirlash modali
  const [editingLead, setEditingLead] = useState(null);
  const [editNotesText, setEditNotesText] = useState('');

  // Arizalarni yuklash
  const loadLeads = () => {
    const data = getStoredLeads();
    setLeads(data);
  };

  useEffect(() => {
    loadLeads();
  }, []);

  // PIN tekshirish
  const handlePinSubmit = (e) => {
    e.preventDefault();
    if (pinInput.trim() === DEFAULT_CRM_PIN) {
      setIsAuthenticated(true);
      sessionStorage.setItem('vatan_crm_authed', 'true');
      setPinError(false);
      loadLeads();
    } else {
      setPinError(true);
    }
  };

  // Statusni o'zgartirish
  const handleStatusChange = (id, newStatus) => {
    const updated = updateLeadStatus(id, newStatus);
    setLeads(updated);
  };

  // Yangi mijoz qo'shish
  const handleCreateLead = (e) => {
    e.preventDefault();
    if (!newLeadName.trim() || newLeadPhone.trim().length < 13) {
      alert("Iltimos, ism va to‘liq telefon raqamini kiriting!");
      return;
    }

    const newEntry = {
      id: 'lead-' + Date.now(),
      name: newLeadName.trim(),
      phone: newLeadPhone.trim(),
      rooms: newLeadRooms.includes('(') ? newLeadRooms.split('(')[0].trim() : newLeadRooms,
      area: newLeadRooms.includes('(') ? newLeadRooms.split('(')[1].replace(')', '').trim() : '54 m²',
      paymentType: newLeadPayment,
      initialPayment: newLeadPayment.includes('39') ? '39 mln' : newLeadPayment.includes('29') ? '29 mln' : newLeadPayment.includes('69') ? '69 mln' : 'To‘liq to‘lov',
      notes: newLeadNotes.trim() || 'Ofisda kiritilgan mijoz',
      status: 'Yangi ariza',
      source: 'Menejer (CRM)',
      createdAt: new Date().toISOString(),
      searchIntent: 'Ofis suhbati'
    };

    const updated = [newEntry, ...leads];
    saveStoredLeads(updated);
    setLeads(updated);

    // Formani tozalash
    setNewLeadName('');
    setNewLeadPhone('+998 ');
    setNewLeadNotes('');
    setIsAddModalOpen(false);
  };

  // Izohni saqlash
  const handleSaveNotes = (e) => {
    e.preventDefault();
    if (!editingLead) return;
    const updated = updateLeadNotes(editingLead.id, editNotesText.trim());
    setLeads(updated);
    setEditingLead(null);
  };

  // Arizani o'chirish
  const handleDeleteLead = (id, name) => {
    if (confirm(`Haqiqatan ham ${name} arizasini o‘chirmoqchimisiz?`)) {
      const updated = deleteLeadFromCrm(id);
      setLeads(updated);
    }
  };

  // Analitika hisoblash
  const analytics = useMemo(() => {
    return calculateCrmAnalytics(leads, timeframe);
  }, [leads, timeframe]);

  // Jadval uchun filtrlangan ro'yxat
  const displayedLeads = useMemo(() => {
    return analytics.filtered.filter(lead => {
      const matchesSearch = 
        (lead.name || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (lead.phone || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (lead.notes || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (lead.rooms || '').toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [analytics.filtered, searchQuery, statusFilter]);

  // Agar PIN kiritilmagan bo'lsa - xavfsiz ekran
  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl border border-sky-200 text-center relative animate-fade-in">
          <div className="w-16 h-16 rounded-2xl bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center mx-auto mb-4 shadow-sm">
            <Lock className="w-8 h-8" />
          </div>

          <h3 className="text-2xl font-black text-slate-900 mb-1">
            VATAN QK — CRM Paneli
          </h3>
          <p className="text-xs text-slate-500 mb-6 font-medium">
            Faqat rahbariyat va savdo bo‘limi xodimlari uchun yopiq boshqaruv tizimi
          </p>

          <form onSubmit={handlePinSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Kirish PIN kodini kiriting:
              </label>
              <input
                type="password"
                maxLength={8}
                value={pinInput}
                onChange={(e) => {
                  setPinInput(e.target.value);
                  setPinError(false);
                }}
                placeholder="PIN kod (standart: 7777)"
                className="w-full text-center text-2xl font-mono tracking-widest px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-sky-500 bg-slate-50"
                autoFocus
              />
              {pinError && (
                <p className="text-xs text-rose-500 font-bold mt-1.5 animate-shake">
                  Xato PIN kod! Qaytadan urinib ko‘ring.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl sky-gradient-bg text-white font-extrabold text-sm shadow-lg shadow-sky-600/25 hover:brightness-110 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Unlock className="w-4 h-4" />
              <span>CRM Paneliga kirish</span>
            </button>

            <button
              type="button"
              onClick={onClose || onOpenSite}
              className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
            >
              Saytga qaytish
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f8fc] text-slate-800 pb-16 font-sans">
      
      {/* 1. Yuqori Navigatsiya / Boshqaruv Qatori */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-sky-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border border-sky-200 p-1 flex items-center justify-center shrink-0 shadow-xs">
              <img src="/vatan-full-logo.png" alt="VATAN" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-black text-slate-950 tracking-wider">VATAN CRM</span>
                <span className="text-[10px] sm:text-xs font-black px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-300">
                  Jonli Tahlil
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium truncate">
                Yangi Qo‘yliq-2 loyihasi — Mijozlar oqimi va Qidiruv statistikasi
              </p>
            </div>
          </div>

          {/* Tezkor amallar */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl sky-gradient-bg text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-sm hover:brightness-110 active:scale-95 transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Yangi mijoz kiritish</span>
              <span className="sm:hidden">Qo‘shish</span>
            </button>

            <button
              onClick={() => exportLeadsToCsv(leads)}
              className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white border border-slate-200 hover:border-sky-300 text-slate-700 hover:text-sky-700 text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
              title="Excel (CSV) formatida yuklab olish"
            >
              <Download className="w-4 h-4 text-emerald-600" />
              <span className="hidden md:inline">Excelga yuklash</span>
            </button>

            <button
              onClick={onClose || onOpenSite}
              className="px-3 py-2 sm:py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-bold transition-all cursor-pointer"
              title="Sayt ko‘rinishiga o‘tish"
            >
              Saytga o‘tish
            </button>
          </div>

        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 space-y-6 sm:space-y-8">
        
        {/* 2. Vaqt Oralig'i Tanlash Qatori (Kunlik, Haftalik, Oylik) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-2xl border border-sky-100 shadow-xs">
          <div>
            <h2 className="text-base sm:text-lg font-black text-slate-900">
              Mijozlar faolligi va so‘rovlar davri
            </h2>
            <p className="text-xs text-slate-500">
              Ko‘rsatkichlarni kunlik, haftalik va oylik kesimda solishtirib boring
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl w-full sm:w-auto">
            <button
              onClick={() => setTimeframe('today')}
              className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                timeframe === 'today' ? 'bg-white text-sky-800 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              📅 Bugun (Kunlik)
            </button>
            <button
              onClick={() => setTimeframe('week')}
              className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                timeframe === 'week' ? 'bg-white text-sky-800 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              📊 Shu hafta (Haftalik)
            </button>
            <button
              onClick={() => setTimeframe('month')}
              className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                timeframe === 'month' ? 'bg-white text-sky-800 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              📈 Shu oy (Oylik)
            </button>
            <button
              onClick={() => setTimeframe('all')}
              className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                timeframe === 'all' ? 'bg-white text-sky-800 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🌐 Barchasi
            </button>
          </div>
        </div>

        {/* 3. KPI / Metrikalar Kartalari */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
          
          {/* Karta 1: Jami arizalar */}
          <div className="bg-white p-5 rounded-3xl border border-sky-100 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Jami Murojaatlar</span>
              <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-black text-slate-900">{analytics.total}</span>
                <span className="text-xs font-bold text-emerald-600 flex items-center">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  +18%
                </span>
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                Tanlangan davrda qabul qilingan arizalar
              </p>
            </div>
          </div>

          {/* Karta 2: Eng talabgir xonadon */}
          <div className="bg-white p-5 rounded-3xl border border-sky-100 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Eng Ommabop Uy</span>
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <Building2 className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-black text-slate-900">2 xonali</span>
                <span className="text-xs font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-md">
                  46% ulush
                </span>
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                54–55 m² xonadonlarga eng ko‘p qiziqish
              </p>
            </div>
          </div>

          {/* Karta 3: Bo'lib to'lash ulushi */}
          <div className="bg-white p-5 rounded-3xl border border-sky-100 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">To‘lov Afzalligi</span>
              <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                <Coins className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-black text-slate-900">68%</span>
                <span className="text-xs font-bold text-slate-600">30 oy 0%</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                Bosh to‘lov bilan bo‘lib to‘lash talabi
              </p>
            </div>
          </div>

          {/* Karta 4: Konversiya / Shartnomalar */}
          <div className="bg-white p-5 rounded-3xl border border-sky-100 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Muvaffaqiyat (Bitim)</span>
              <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-black text-slate-900">
                  {analytics.statusStats['Shartnoma tuzildi'] || 0} ta
                </span>
                <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                  {analytics.conversionRate}% konversiya
                </span>
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                Shartnoma tuzilgan mijozlar soni
              </p>
            </div>
          </div>

        </div>

        {/* 4. Analitika: Mijozlar Eng Ko'p Nimani Qidirmoqda? & Xonadonlar Taqsimoti */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Chap ustun (7 ustun): Savollar va Qidiruv trendlari reytingi */}
          <div className="lg:col-span-7 bg-white p-6 rounded-3xl border border-sky-100 shadow-xs">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-sky-600" />
                  <span>Mijozlar eng ko‘p nimani qidirmoqda va so‘ramoqda?</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Telegram bot va saytdagi so‘rovlar asosida shakllangan qiziqishlar reytingi
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {analytics.topTopics.map((topic, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-sky-200 transition-colors">
                  <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                    <span className="text-slate-800 line-clamp-1">{i + 1}. {topic.title}</span>
                    <div className="flex items-center gap-2 shrink-0 ml-2">
                      <span className="text-sky-700 font-extrabold">{topic.share}%</span>
                      <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">
                        {topic.trend}
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                    <div 
                      className="h-full rounded-full sky-gradient-bg transition-all duration-700"
                      style={{ width: `${topic.share}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3.5 rounded-2xl bg-sky-50/70 border border-sky-200 flex items-center justify-between text-xs text-sky-900">
              <span className="font-medium">💡 <strong>Menejer uchun maslahat:</strong> Mijozlar bilan qo‘ng‘iroqda birinchi navbatda 30 oylik 0% muddat va bosh to‘lov qulayligini ta’kidlang.</span>
            </div>
          </div>

          {/* O'ng ustun (5 ustun): Xonadonlar va To'lov turlariga talab taqsimoti */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Xonadon turlariga talab */}
            <div className="bg-white p-6 rounded-3xl border border-sky-100 shadow-xs">
              <h3 className="text-base font-black text-slate-900 flex items-center gap-2 mb-4">
                <PieChart className="w-5 h-5 text-emerald-600" />
                <span>Xonadon turlari bo‘yicha talab</span>
              </h3>

              <div className="space-y-3">
                {Object.entries(analytics.roomStats).map(([room, count]) => {
                  const percent = analytics.total > 0 ? Math.round((count / analytics.total) * 100) : 0;
                  return (
                    <div key={room} className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-700">{room}</span>
                      <div className="flex items-center gap-3 w-1/2">
                        <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                          <div 
                            className="h-full rounded-full bg-emerald-500" 
                            style={{ width: `${percent}%` }}
                          />
                        </div>
                        <span className="w-8 text-right font-black text-slate-900">{percent}%</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* To'lov usullari bo'yicha taqsimot */}
            <div className="bg-white p-6 rounded-3xl border border-sky-100 shadow-xs">
              <h3 className="text-base font-black text-slate-900 flex items-center gap-2 mb-4">
                <Coins className="w-5 h-5 text-amber-600" />
                <span>To‘lov turlari bo‘yicha taqsimot</span>
              </h3>

              <div className="space-y-3">
                {Object.entries(analytics.paymentStats).map(([payment, count]) => {
                  const percent = analytics.total > 0 ? Math.round((count / analytics.total) * 100) : 0;
                  return (
                    <div key={payment} className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-700 truncate mr-2">{payment}</span>
                      <div className="flex items-center gap-3 w-1/2 shrink-0">
                        <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                          <div 
                            className="h-full rounded-full bg-amber-500" 
                            style={{ width: `${percent}%` }}
                          />
                        </div>
                        <span className="w-8 text-right font-black text-slate-900">{percent}%</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

        {/* 5. Mijozlar Jadvali (Smart CRM Table) */}
        <div className="bg-white rounded-3xl border border-sky-100 shadow-xs overflow-hidden">
          
          {/* Jadval bosh qismi: Qidiruv va Status filtrlari */}
          <div className="p-5 sm:p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-black text-slate-900">
                Mijozlar Ro‘yxati va Holati ({displayedLeads.length} ta)
              </h3>
              <p className="text-xs text-slate-500">
                Mijozlar bilan qayta aloqaga chiqing, taklifini ko‘ring va bitim bosqichini yangilang
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Qidiruv */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Ism, telefon yoki xonadon..."
                  className="w-full sm:w-64 pl-9 pr-3.5 py-2 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:border-sky-500 bg-slate-50"
                />
              </div>

              {/* Status filtri */}
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 bg-slate-50 focus:outline-none focus:border-sky-500"
              >
                <option value="all">Barcha statuslar</option>
                <option value="Yangi ariza">🟡 Yangi ariza</option>
                <option value="Bog‘lanildi">🔵 Bog‘lanildi</option>
                <option value="Tashrif belgilandi">🟣 Tashrif belgilandi</option>
                <option value="Shartnoma tuzildi">🟢 Shartnoma tuzildi</option>
                <option value="O‘ylamoqda">⚪️ O‘ylamoqda</option>
              </select>
            </div>
          </div>

          {/* Jadval */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/70 border-b border-slate-200/80 text-[11px] font-black text-slate-500 uppercase tracking-wider">
                  <th className="py-3.5 px-4 sm:px-6">Mijoz / Qabul vaqti</th>
                  <th className="py-3.5 px-4">Telefon raqami</th>
                  <th className="py-3.5 px-4">Qiziqqan xonadon</th>
                  <th className="py-3.5 px-4">To‘lov turi & Bosh to‘lov</th>
                  <th className="py-3.5 px-4">Mijoz taklifi / Izohi</th>
                  <th className="py-3.5 px-4">Bosqich (Status)</th>
                  <th className="py-3.5 px-4 text-right">Amallar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {displayedLeads.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-slate-400">
                      Hech qanday ariza topilmadi.
                    </td>
                  </tr>
                ) : (
                  displayedLeads.map((lead) => {
                    const statusColors = {
                      'Yangi ariza': 'bg-amber-50 text-amber-800 border-amber-200',
                      'Bog‘lanildi': 'bg-sky-50 text-sky-800 border-sky-200',
                      'Tashrif belgilandi': 'bg-purple-50 text-purple-800 border-purple-200',
                      'Shartnoma tuzildi': 'bg-emerald-50 text-emerald-800 border-emerald-200',
                      'O‘ylamoqda': 'bg-slate-100 text-slate-700 border-slate-200'
                    };

                    const phoneClean = lead.phone.replace(/[^0-9+]/g, '');

                    return (
                      <tr key={lead.id} className="hover:bg-sky-50/30 transition-colors">
                        
                        {/* 1. Mijoz nomi va manbasi */}
                        <td className="py-4 px-4 sm:px-6">
                          <div className="font-extrabold text-slate-900 text-sm">{lead.name}</div>
                          <div className="flex items-center gap-1.5 text-[10px] text-slate-400 mt-0.5">
                            <Clock className="w-3 h-3" />
                            <span>{new Date(lead.createdAt).toLocaleString('uz-UZ', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
                            <span>•</span>
                            <span className="text-sky-600 font-semibold">{lead.source}</span>
                          </div>
                        </td>

                        {/* 2. Telefon raqami va tezkor qo'ng'iroq */}
                        <td className="py-4 px-4">
                          <div className="font-mono font-bold text-slate-800">{lead.phone}</div>
                          <div className="flex items-center gap-2 mt-1">
                            <a 
                              href={`tel:${phoneClean}`}
                              className="text-[11px] font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-0.5"
                            >
                              <PhoneCall className="w-3 h-3" />
                              <span>Qo‘ng‘iroq</span>
                            </a>
                            <span className="text-slate-300">|</span>
                            <a 
                              href={`https://t.me/${phoneClean}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[11px] font-bold text-sky-700 hover:text-sky-900 flex items-center gap-0.5"
                            >
                              <Send className="w-3 h-3" />
                              <span>Telegram</span>
                            </a>
                          </div>
                        </td>

                        {/* 3. Xonadon */}
                        <td className="py-4 px-4">
                          <span className="font-extrabold text-slate-900">{lead.rooms}</span>
                          <span className="text-slate-500 block text-[11px] font-medium">{lead.area}</span>
                        </td>

                        {/* 4. To'lov turi */}
                        <td className="py-4 px-4">
                          <span className="font-bold text-slate-800 block text-[11px]">{lead.paymentType}</span>
                          {lead.initialPayment && (
                            <span className="inline-block mt-0.5 px-2 py-0.5 rounded text-[10px] font-bold bg-sky-50 text-sky-700 border border-sky-200">
                              Bosh to‘lov: {lead.initialPayment}
                            </span>
                          )}
                        </td>

                        {/* 5. Izohi / Taklifi */}
                        <td className="py-4 px-4 max-w-xs">
                          <p className="text-slate-600 text-[11px] leading-relaxed line-clamp-2" title={lead.notes}>
                            {lead.notes || 'Izoh yo‘q'}
                          </p>
                          <button
                            type="button"
                            onClick={() => {
                              setEditingLead(lead);
                              setEditNotesText(lead.notes || '');
                            }}
                            className="text-[10px] text-sky-600 hover:underline font-bold mt-0.5 flex items-center gap-1"
                          >
                            <Edit3 className="w-2.5 h-2.5" />
                            <span>Izohni to‘ldirish</span>
                          </button>
                        </td>

                        {/* 6. Status tanlash dropdown */}
                        <td className="py-4 px-4">
                          <select
                            value={lead.status}
                            onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                            className={`px-2.5 py-1 rounded-lg text-[11px] font-extrabold border cursor-pointer focus:outline-none ${statusColors[lead.status] || 'bg-slate-100 text-slate-700'}`}
                          >
                            <option value="Yangi ariza">🟡 Yangi ariza</option>
                            <option value="Bog‘lanildi">🔵 Bog‘lanildi</option>
                            <option value="Tashrif belgilandi">🟣 Tashrif belgilandi</option>
                            <option value="Shartnoma tuzildi">🟢 Shartnoma tuzildi</option>
                            <option value="O‘ylamoqda">⚪️ O‘ylamoqda</option>
                          </select>
                        </td>

                        {/* 7. Amallar */}
                        <td className="py-4 px-4 text-right">
                          <button
                            onClick={() => handleDeleteLead(lead.id, lead.name)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                            title="Arizani o‘chirish"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>

                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

        </div>

      </main>

      {/* 6. Yangi Mijoz Kiritish Modali */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-sky-200 relative animate-fade-in">
            <button
              onClick={() => setIsAddModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-xl font-black text-slate-900 mb-1">
              Yangi Mijozni CRM ga Kiritish
            </h3>
            <p className="text-xs text-slate-500 mb-5">
              Savdo ofisiga kelgan yoki qo‘ng‘iroq qilgan mijoz ma’lumotlarini qo‘shing
            </p>

            <form onSubmit={handleCreateLead} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Mijoz Ismi:</label>
                <input
                  type="text"
                  required
                  value={newLeadName}
                  onChange={(e) => setNewLeadName(e.target.value)}
                  placeholder="Masalan: Anvar Jo‘rayev"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-sky-500 bg-slate-50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Telefon raqami:</label>
                <input
                  type="tel"
                  required
                  value={newLeadPhone}
                  onChange={(e) => setNewLeadPhone(e.target.value)}
                  placeholder="+998 90 123 45 67"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold focus:outline-none focus:border-sky-500 bg-slate-50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Qiziqqan xonadon:</label>
                  <select
                    value={newLeadRooms}
                    onChange={(e) => setNewLeadRooms(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold bg-slate-50 focus:outline-none focus:border-sky-500"
                  >
                    <option value="2 xonali (54 m²)">2 xonali (54 m²)</option>
                    <option value="2 xonali (55 m²)">2 xonali (55 m²)</option>
                    <option value="1 xonali (41 m²)">1 xonali (41 m²)</option>
                    <option value="1 xonali (49 m²)">1 xonali (49 m²)</option>
                    <option value="3 xonali (70 m²)">3 xonali (70 m²)</option>
                    <option value="3 xonali (77 m²)">3 xonali (77 m²)</option>
                    <option value="Studiya (22 m²)">Studiya (22 m²)</option>
                    <option value="Studiya (34 m²)">Studiya (34 m²)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">To‘lov turi:</label>
                  <select
                    value={newLeadPayment}
                    onChange={(e) => setNewLeadPayment(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold bg-slate-50 focus:outline-none focus:border-sky-500"
                  >
                    <option value="30 oy 0% bo‘lib to‘lash (39 mln)">30 oy 0% (39 mln bosh)</option>
                    <option value="30 oy 0% bo‘lib to‘lash (29 mln)">30 oy 0% (29 mln bosh)</option>
                    <option value="30 oy 0% bo‘lib to‘lash (69 mln)">30 oy 0% (69 mln bosh)</option>
                    <option value="100% to‘lov (33% chegirma)">100% to‘lov (33% chegirma)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Mijoz taklifi / Izohi:</label>
                <textarea
                  rows={3}
                  value={newLeadNotes}
                  onChange={(e) => setNewLeadNotes(e.target.value)}
                  placeholder="Mijoz nimalarni so‘radi, qachon qayta qo‘ng‘iroq qilish kerak..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-sky-500 bg-slate-50"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200"
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl sky-gradient-bg text-white text-xs font-extrabold shadow-md hover:brightness-110 cursor-pointer"
                >
                  Mijozni saqlash
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 7. Izohni Tahrirlash Modali */}
      {editingLead && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-sky-200 relative animate-fade-in">
            <h3 className="text-base font-black text-slate-900 mb-1">
              Mijoz Izohini Yangilash
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              <strong>{editingLead.name}</strong> ({editingLead.phone})
            </p>

            <form onSubmit={handleSaveNotes} className="space-y-4">
              <textarea
                rows={4}
                value={editNotesText}
                onChange={(e) => setEditNotesText(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-sky-500 bg-slate-50 font-medium"
                placeholder="Mijoz bilan kelishuv, taklif yoki eslatmalar..."
              />

              <div className="flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setEditingLead(null)}
                  className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold"
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl sky-gradient-bg text-white text-xs font-bold shadow-xs hover:brightness-110"
                >
                  Saqlash
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
