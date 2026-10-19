import React from 'react';
import { Award, Building, CheckCircle2, Calendar, TrendingUp, ShieldCheck } from 'lucide-react';
import { PROJECT_DETAILS } from '../data/apartments';

export default function CompanyTrust({ onOpenBooking }) {

  return (
    <section id="company-trust" className="py-24 bg-[#edf6fd] relative overflow-hidden border-b border-sky-100">
      
      {/* Background ambient lights */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-sky-200/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-200/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold tracking-widest uppercase mb-3">
            <Award className="w-3.5 h-3.5 text-sky-600" />
            <span>2013-yildan buyon ishonchli quruvchi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Kompaniya haqida: <span className="sky-gradient-text">"VATAN" Qurilish</span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            "VATAN" qurilish kompaniyasi 2013-yildan buyon (13 yillik tajriba) ko‘p qavatli mustahkam xonadonlar va noturar savdo maydonlarini 
            o‘z vaqtida, yuqori sifat va davlat me'yorlariga qat'iy amal qilgan holda topshirib kelmoqda.
          </p>
        </div>

        {/* Natijalar (Ishonch statistikasi) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 rounded-3xl bg-white border border-sky-100 hover:border-sky-300 transition-all shadow-md group">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 mb-4 group-hover:scale-110 transition-transform">
              <Calendar className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-slate-900 mb-1 group-hover:text-sky-600 transition-colors">
              2013-yil
            </div>
            <p className="text-xs font-bold text-sky-700 uppercase tracking-wider mb-2">13 yillik tajriba</p>
            <p className="text-xs text-slate-500">Ko‘p qavatli mustahkam uylar qurish bo‘yicha barqaror faoliyat</p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-sky-100 hover:border-emerald-300 transition-all shadow-md group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-110 transition-transform">
              <Building className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-slate-900 mb-1 group-hover:text-emerald-600 transition-colors">
              10 000+
            </div>
            <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">Topshirilgan xonadonlar</p>
            <p className="text-xs text-slate-500">Minglab oilalar yangi va shinam uylarda baxtli istiqomat qilmoqda</p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-sky-100 hover:border-sky-400 transition-all shadow-md group">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 mb-4 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-slate-900 mb-1 group-hover:text-sky-600 transition-colors">
              7 000+
            </div>
            <p className="text-xs font-bold text-sky-700 uppercase tracking-wider mb-2">Noturar do‘konlar</p>
            <p className="text-xs text-slate-500">Muvaffaqiyatli savdo, xizmat ko‘rsatish va biznes ob'ektlari</p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-sky-100 hover:border-amber-400 transition-all shadow-md group">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-4 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-slate-900 mb-1 group-hover:text-amber-600 transition-colors">
              6 ta yirik
            </div>
            <p className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">Muvaffaqiyatli loyiha</p>
            <p className="text-xs text-slate-500">Toshkentning nufuzli nuqtalarida to‘liq foydalanishga topshirildi</p>
          </div>

        </div>

      </div>
    </section>
  );
}
