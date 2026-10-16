import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  CheckCircle, 
  Sparkles, 
  User, 
  Phone, 
  Coffee, 
  Building, 
  Car, 
  FileText, 
  ShieldCheck,
  Send,
  Bot
} from 'lucide-react';
import { PROJECT_DETAILS } from '../data/apartments';
import { sendTelegramLead } from '../utils/crmWebhook';

export default function VisitBookingSection() {
  const [visitLocation, setVisitLocation] = useState('Savdo ofisi (Food City ro‘parasi)');
  const [selectedDay, setSelectedDay] = useState('Ertaga');
  const [customDate, setCustomDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('14:00 – 16:00');
  const [apartmentInterest, setApartmentInterest] = useState('2 xonali (54–55 m²)');
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+998 ');
  const [notes, setNotes] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const quickDays = ['Bugun', 'Ertaga', 'Dam olish kuni (Shanba/Yakshanba)'];
  const timeSlots = [
    '10:00 – 12:00',
    '12:00 – 14:00',
    '14:00 – 16:00',
    '16:00 – 17:00'
  ];

  const apartmentOptions = [
    { label: '2 xonali (54–55 m²) — Bo‘lib to‘lash 39 mln', val: '2 xonali (54–55 m²)' },
    { label: '1 xonali (41–49 m²) — Bo‘lib to‘lash 29 mln', val: '1 xonali (41–49 m²)' },
    { label: '3 xonali (70–77 m²) — Bo‘lib to‘lash 69 mln', val: '3 xonali (70–77 m²)' },
    { label: 'Ixcham (22, 25, 34, 39 m²) — Bosh to‘lov + Kadastr / 100% (33% chegirma)', val: 'Ixcham (22–39 m²) Kadastr/100%' }
  ];

  const handlePhoneChange = (e) => {
    let val = e.target.value;
    if (!val.startsWith('+998')) {
      val = '+998 ';
    }
    setPhone(val);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Iltimos, ismingizni kiriting.");
      return;
    }
    if (phone.trim().length < 13) {
      alert("Iltimos, to‘liq telefon raqamingizni kiriting (+998 90 123 45 67).");
      return;
    }

    setIsSubmitting(true);
    const finalDate = customDate ? customDate : selectedDay;

    try {
      await sendTelegramLead({
        name: name.trim(),
        phone: phone.trim(),
        project: "Yangi Qo‘yliq-2",
        rooms: apartmentInterest,
        area: apartmentInterest,
        budget: "Tashrif davomida hisob-kitob",
        purpose: notes ? `Tashrif: ${notes}` : `Tashrif buyurish va xonadon bilan tanishish`,
        source: "Sayt: Tashrifni bron qilish bo‘limi",
        isVisit: true,
        visitLocation,
        visitDate: finalDate,
        visitTime: selectedTime
      });
    } catch (err) {
      console.error("Tashrif yuborishda xatolik:", err);
    } finally {
      setIsSubmitting(false);
      setIsSuccess(true);
    }
  };

  return (
    <section id="visit" className="py-20 sm:py-24 bg-white relative overflow-hidden border-y border-sky-100">
      
      {/* Orqa fon bezaklari */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-sky-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Sarlavha qismi */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold shadow-xs mb-3">
            <Calendar className="w-4 h-4 text-sky-600" />
            <span>Mijozlar uchun maxsus bepul xizmat</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Savdo Ofisimizga yoki Obyektga <br className="hidden sm:inline" />
            <span className="sky-gradient-text">Tashrifni Oldindan Band Qiling</span>
          </h2>

          <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
            Kelajakdagi xonadoningizni o‘z ko‘zingiz bilan ko‘ring, qurilish jarayoni bilan tanishing va 
            bir piyola qahva ustida sizga mos individual to‘lov rejasini oling.
          </p>
        </div>

        {/* 2 Ustunli asosiy blok: Chapda afzalliklar va lokatsiya, O'ngda interaktiv forma */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Chap ustun (5 ustun): Nima uchun tashrif buyurish kerak? */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-3xl bg-gradient-to-br from-sky-50/90 to-white border border-sky-200 shadow-sm">
              <h3 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-sky-600" />
                <span>Tashrif buyuruvchilarga nimalar beriladi?</span>
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <Coffee className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Individual to‘lov jadvali</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Sizning byudjetingizga moslashtirilgan oylik to‘lovlar va 33% gacha maxsus chegirmalar hisoblab beriladi.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Qurilish maydonini jonli ko‘rish</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      13 gektarlik maydon, xonadonlar rejasi va qurilishda ishlatilayotgan mustahkam monolit va bloklar sifatini ko‘rasiz.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Qonuniy hujjatlar bilan tanishuv</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Litsenziyalar, loyiha arxitektura pasporti va shartnoma namunalari bilan to‘liq tanishasiz.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <Car className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Bepul qulay avtoturargoh</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Ofisimiz oldida tashrif buyuruvchilar uchun bepul va keng to‘xtash joyi mavjud.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ofis manzili va tezkor yo'nalish */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Manzilimiz:</p>
                  <p className="text-xs text-slate-600">Yangi Toshkent, Food City ro‘parasi</p>
                </div>
              </div>

              <a
                href={PROJECT_DETAILS.location.telegramBot}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-sky-50 text-sky-700 hover:bg-sky-100 text-xs font-bold flex items-center gap-1 transition-colors"
              >
                <Bot className="w-3.5 h-3.5" />
                <span>Lokatsiya olish</span>
              </a>
            </div>

          </div>

          {/* O'ng ustun (7 ustun): Interaktiv Tashrif Bron qilish Formasi */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border-2 border-sky-300 p-6 sm:p-8 shadow-xl shadow-sky-900/10">
              
              {isSuccess ? (
                <div className="text-center py-10 animate-fade-in">
                  <div className="w-20 h-20 rounded-full bg-emerald-100 border-2 border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto mb-5 shadow-lg">
                    <CheckCircle className="w-10 h-10" />
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 mb-2">
                    Tashrifingiz muvaffaqiyatli band qilindi!
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-md mx-auto leading-relaxed">
                    Hurmatli <strong>{name}</strong>, savdo bo‘limimiz arizangizni qabul qildi. 
                    Menejerimiz siz bilan bog‘lanib, ofisda kutib olish vaqtini tasdiqlaydi hamda telefoningizga qulay lokatsiyani yuboradi.
                  </p>

                  <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 text-left text-xs space-y-1.5 max-w-md mx-auto mb-6">
                    <p>📍 <strong>Tashrif joyi:</strong> {visitLocation}</p>
                    <p>📅 <strong>Sana:</strong> {customDate || selectedDay}</p>
                    <p>⏰ <strong>Vaqt:</strong> {selectedTime}</p>
                    <p>🏠 <strong>Xonadon:</strong> {apartmentInterest}</p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={PROJECT_DETAILS.location.telegramBot}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl sky-gradient-bg text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md hover:brightness-110"
                    >
                      <Bot className="w-4 h-4" />
                      <span>Telegram orqali kuzatish</span>
                    </a>
                    
                    <button
                      type="button"
                      onClick={() => {
                        setIsSuccess(false);
                        setName('');
                        setPhone('+998 ');
                      }}
                      className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm"
                    >
                      Boshqa tashrifni belgilash
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* 1. Tashrif joyini tanlash */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                      1. Tashrif joyini tanlang:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <button
                        type="button"
                        onClick={() => setVisitLocation('Savdo ofisi (Food City ro‘parasi)')}
                        className={`p-3 rounded-xl border text-xs sm:text-sm font-bold flex items-center gap-2.5 transition-all text-left cursor-pointer ${
                          visitLocation === 'Savdo ofisi (Food City ro‘parasi)'
                            ? 'bg-sky-50 border-sky-500 text-sky-900 shadow-xs'
                            : 'bg-white border-slate-200 text-slate-600 hover:border-sky-300'
                        }`}
                      >
                        <Building className="w-4 h-4 text-sky-600 shrink-0" />
                        <span>Savdo ofisi (Food City ro‘parasi)</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setVisitLocation('Qurilish maydoni (Jonli ko‘rish)')}
                        className={`p-3 rounded-xl border text-xs sm:text-sm font-bold flex items-center gap-2.5 transition-all text-left cursor-pointer ${
                          visitLocation === 'Qurilish maydoni (Jonli ko‘rish)'
                            ? 'bg-sky-50 border-sky-500 text-sky-900 shadow-xs'
                            : 'bg-white border-slate-200 text-slate-600 hover:border-sky-300'
                        }`}
                      >
                        <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Qurilish maydoni (Jonli ko‘rish)</span>
                      </button>
                    </div>
                  </div>

                  {/* 2. Sanani tanlash */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                      2. Sizga qulay kun:
                    </label>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {quickDays.map((day) => (
                        <button
                          key={day}
                          type="button"
                          onClick={() => {
                            setSelectedDay(day);
                            setCustomDate('');
                          }}
                          className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                            selectedDay === day && !customDate
                              ? 'sky-gradient-bg text-white shadow-xs'
                              : 'bg-slate-100 text-slate-700 hover:bg-sky-50 border border-slate-200'
                          }`}
                        >
                          {day}
                        </button>
                      ))}
                    </div>

                    <div className="mt-1">
                      <input
                        type="date"
                        value={customDate}
                        onChange={(e) => {
                          setCustomDate(e.target.value);
                          setSelectedDay('');
                        }}
                        className="w-full text-xs font-medium px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-sky-500 bg-slate-50 text-slate-800"
                        placeholder="Yoki aniq sanani tanlang"
                      />
                    </div>
                  </div>

                  {/* 3. Vaqt oralig'ini tanlash */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                      3. Qulay vaqt oralig‘i:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTime(slot)}
                          className={`p-2 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                            selectedTime === slot
                              ? 'bg-sky-600 text-white border-sky-600 shadow-xs'
                              : 'bg-white border-slate-200 text-slate-700 hover:border-sky-300'
                          }`}
                        >
                          <Clock className="w-3 h-3" />
                          <span>{slot}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 4. Qiziqtirayotgan xonadon */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                      4. Qaysi xonadon qiziqtirmoqda?
                    </label>
                    <select
                      value={apartmentInterest}
                      onChange={(e) => setApartmentInterest(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold bg-white text-slate-900 focus:outline-none focus:border-sky-500"
                    >
                      {apartmentOptions.map((opt, i) => (
                        <option key={i} value={opt.val}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* 5. Shaxsiy ma'lumotlar */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Ismingiz:
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Ismingizni kiriting"
                          className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-sky-500 bg-slate-50/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Telefon raqamingiz:
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={handlePhoneChange}
                          placeholder="+998 90 123 45 67"
                          className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold focus:outline-none focus:border-sky-500 bg-slate-50/50"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Maxfiylik va Submit tugmasi */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl sky-gradient-bg text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-sky-600/25 hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Band qilinmoqda...</span>
                        </>
                      ) : (
                        <>
                          <Calendar className="w-4 h-4" />
                          <span>Tashrifni bepul band qilish</span>
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-600 mt-2.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Hech qanday majburiyatsiz, 100% bepul konsultatsiya</span>
                    </div>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
