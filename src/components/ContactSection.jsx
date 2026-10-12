import React, { useState } from 'react';
import { PhoneCall, CheckCircle2, ShieldCheck, Download, Sparkles, User, Phone, Send } from 'lucide-react';
import { PROJECT_DETAILS } from '../data/apartments';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+998 ');
  const [roomType, setRoomType] = useState('2');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePhoneChange = (e) => {
    let val = e.target.value;
    if (!val.startsWith('+998')) {
      val = '+998 ';
    }
    setPhone(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Iltimos, ismingizni kiriting.");
      return;
    }
    if (phone.trim().length < 13) {
      alert("Iltimos, to‘liq telefon raqamingizni kiriting (+998 90 123 45 67).");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-[#f0f7ff] relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-sky-200/40 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-white border border-sky-200 rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Chap tomon: Ma'lumot va afzalliklar */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                <span>Tezkor qayta aloqa</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Narxlar Ro‘yxatini Oling yoki <span className="sky-gradient-text">Menejer Bilan Bog‘laning</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                So‘rov qoldiring — sotuv menejeri {PROJECT_DETAILS.location.managerName} sizga 5 daqiqa ichida barcha planirovkalar, 
                narxlar ro‘yxati va 30 oylik to‘lov grafiklarini taqdim etadi.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>30 oygacha 0% foizsiz bo‘lib to‘lash shartlari</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% to‘lovda 33% gacha chegirma kafolati</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Tanlangan xonadonni 24 soatga bepul bron qilish</span>
                </div>
              </div>

              {/* To'g'ridan-to'g'ri telefon */}
              <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl sky-gradient-bg flex items-center justify-center text-white shrink-0 shadow-sm">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block">Sotuv bo‘limi menejeri: {PROJECT_DETAILS.location.managerName}</span>
                  <a href={`tel:${PROJECT_DETAILS.location.salesPhone}`} className="text-base font-extrabold text-slate-900 hover:text-sky-600 transition-colors">
                    {PROJECT_DETAILS.location.salesPhoneFormatted}
                  </a>
                </div>
              </div>
            </div>

            {/* O'ng tomon: Forma */}
            <div className="lg:col-span-7 bg-[#f8fcff] border border-sky-100 rounded-2xl p-6 sm:p-8">
              
              {submitted ? (
                <div className="text-center py-10 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    So‘rovingiz qabul qilindi!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-sm mx-auto">
                    Menejerimiz Alisher ({PROJECT_DETAILS.location.salesPhoneFormatted}) tez orada siz bilan bog‘lanadi va to‘liq narxlar katalogini taqdim etadi.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setPhone('+998 ');
                    }}
                    className="px-6 py-2.5 rounded-xl bg-white border border-sky-200 text-xs text-slate-700 hover:bg-sky-50 transition-colors cursor-pointer shadow-xs"
                  >
                    Yangi so‘rov yuborish
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div>
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1">
                      Konsultatsiya va Narxlar ro‘yxatini olish
                    </span>
                    <p className="text-[11px] text-slate-500">
                      Ma'lumotlaringizni qoldiring, biz darhol aloqaga chiqamiz
                    </p>
                  </div>

                  {/* 1. Ism */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Ismingiz:
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Masalan: Anvar"
                        className="w-full pl-10 pr-4 py-3 bg-white border border-sky-200 rounded-xl text-slate-900 text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 transition-colors shadow-xs"
                      />
                    </div>
                  </div>

                  {/* 2. Telefon raqami */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Telefon raqamingiz:
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder="+998 90 123 45 67"
                        className="w-full pl-10 pr-4 py-3 bg-white border border-sky-200 rounded-xl text-slate-900 text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 transition-colors shadow-xs"
                      />
                    </div>
                  </div>

                  {/* 3. Xonadon turi */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Qiziqtirgan xonadon turi:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { val: '1', label: '1 xonali (41–49 m²)' },
                        { val: '2', label: '2 xonali (54–55 m²)' },
                        { val: '3', label: '3 xonali (70–77 m²)' },
                      ].map((type) => (
                        <button
                          type="button"
                          key={type.val}
                          onClick={() => setRoomType(type.val)}
                          className={`py-2.5 px-2 rounded-xl text-xs font-bold border transition-all text-center cursor-pointer ${
                            roomType === type.val
                              ? 'sky-gradient-bg text-white border-transparent shadow-xs'
                              : 'bg-white border-sky-200 text-slate-700 hover:text-sky-700'
                          }`}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-4 px-6 rounded-xl sky-gradient-bg text-white font-extrabold text-sm hover:brightness-110 shadow-lg shadow-sky-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {isLoading ? (
                        <span>Yuborilmoqda...</span>
                      ) : (
                        <>
                          <Download className="w-4 h-4 text-white" />
                          <span>Narxlar ro‘yxatini olish & Maslahat</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-500 text-center">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Ma'lumotlaringiz xavfsiz va 3-shaxslarga berilmaydi</span>
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
