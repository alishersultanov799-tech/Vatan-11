import React, { useState } from 'react';
import { Award, Building, CheckCircle2, Calendar, TrendingUp, ShieldCheck, ArrowRight, Sparkles, Maximize2, X } from 'lucide-react';
import { PROJECT_DETAILS } from '../data/apartments';

export default function CompanyTrust({ onOpenBooking }) {
  const [previewImage, setPreviewImage] = useState(null);

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          
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

        {/* Muvaffaqiyatli topshirilgan 6 ta loyiha galereyasi */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-xs font-bold text-sky-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Amaldagi portfelimiz</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Muvaffaqiyatli topshirilgan 6 ta yirik loyiha
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md">
              Har bir loyiha o‘z vaqtida, sifatli qurilish materiallari va to‘liq kadastr hujjatlari bilan topshirilgan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECT_DETAILS.completedProjects.map((project, idx) => (
              <div 
                key={idx}
                className="group rounded-3xl bg-white border border-sky-200 hover:border-sky-400 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Rasm qismi */}
                <div className="relative aspect-[16/10] overflow-hidden bg-sky-100">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-bold backdrop-blur-md flex items-center gap-1 shadow-md">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{project.status}</span>
                  </div>

                  {/* Yili */}
                  <div className="absolute bottom-3 left-4 px-2.5 py-0.5 rounded-lg bg-black/70 border border-white/20 text-white text-[11px] font-bold">
                    Topshirilgan yili: {project.year}
                  </div>
                </div>

                {/* Tavsif qismi */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700 block mb-1">
                      {project.category}
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors mb-2">
                      {project.name}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Davom etayotgan loyihalar grafigi (Roadmap timeline) */}
        <div className="bg-white/95 border border-sky-200 rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-sky-700 uppercase tracking-widest mb-1 block">
              Kelajak rejalari & Qurilish bosqichlari
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Davom etayotgan loyihalar grafigi (Roadmap)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Kompaniyaning bosqichma-bosqich qurilish va topshirish taqvimi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {PROJECT_DETAILS.ongoingRoadmap.map((item, idx) => (
              <div 
                key={idx}
                className={`rounded-3xl border transition-all relative flex flex-col justify-between overflow-hidden group shadow-md hover:shadow-xl ${
                  item.isCurrent
                    ? 'bg-gradient-to-b from-sky-50 to-white border-2 border-sky-400 shadow-xl shadow-sky-500/10'
                    : 'bg-white border-sky-200 hover:border-sky-300'
                }`}
              >
                {/* Asosiy sotuvlar ochiq nishoni */}
                {item.isCurrent && (
                  <div className="absolute top-3 right-3 z-20 px-3 py-1 rounded-full sky-gradient-bg text-white text-[10px] font-black uppercase tracking-wider shadow-lg whitespace-nowrap">
                    Asosiy sotuvlar ochiq
                  </div>
                )}

                {/* Qurilayotgan bino rasmi */}
                {item.image && (
                  <div 
                    onClick={() => setPreviewImage(item)}
                    className="relative aspect-[16/11] overflow-hidden bg-sky-100 cursor-pointer"
                    title="Rasmni kattalashtirib ko‘rish"
                  >
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15" />
                    
                    {/* Yili nishoni */}
                    <div className="absolute bottom-2.5 left-3 px-2.5 py-0.5 rounded-lg bg-black/70 backdrop-blur-md text-white text-[11px] font-bold border border-white/20">
                      {item.years}
                    </div>

                    {/* Kattalashtirish belgisi */}
                    <div className="absolute bottom-2.5 right-3 w-7 h-7 rounded-lg bg-black/70 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                )}

                {/* Matn va ma'lumotlar qismi */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold text-sky-800 px-2 py-0.5 rounded-md bg-sky-100 border border-sky-200">
                        {item.status}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors mb-2">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>

                  {/* Progress bar */}
                  <div className="pt-3 border-t border-sky-100">
                    <div className="flex justify-between text-[11px] font-semibold text-slate-500 mb-1.5">
                      <span>Tayyorgarlik darajasi</span>
                      <span className="text-slate-900 font-bold">{item.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-sky-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-1000 ${
                          item.isCurrent ? 'sky-gradient-bg' : 'bg-sky-500'
                        }`}
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* CTA Footer */}
          <div className="mt-10 pt-6 border-t border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="text-sm font-semibold text-slate-900">Yangi Qo‘yliq-2 loyihasida qulay shartlarda xonadon band qilishni xohlaysizmi?</p>
              <p className="text-xs text-slate-600">Eng qulay boshlang‘ich narxlar va 30 oylik foizsiz bo‘lib to‘lash imkoniyati</p>
            </div>
            <button
              onClick={() => onOpenBooking({ title: "Kompaniya loyihasi bo'yicha maslahat", source: "Ishonch bloki" })}
              className="px-6 py-3 rounded-xl sky-gradient-bg text-white font-extrabold text-xs sm:text-sm hover:brightness-110 shadow-lg shadow-sky-600/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Menejer bilan bog‘lanish</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>

        </div>

      </div>

      {/* Qurilayotgan bino rasmini kattalashtirib ko'rish modali (Lightbox) */}
      {previewImage && (
        <div 
          onClick={() => setPreviewImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center animate-fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[90vh] bg-white border border-sky-300 rounded-3xl p-4 sm:p-6 shadow-2xl flex flex-col items-center"
          >
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-sky-50 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer border border-sky-200"
            >
              <X className="w-6 h-6" />
            </button>

            <img 
              src={previewImage.image} 
              alt={previewImage.name} 
              className="max-h-[72vh] w-auto object-contain rounded-xl"
            />

            <div className="mt-4 text-center">
              <span className="text-xs font-bold text-sky-700 uppercase tracking-widest block mb-1">
                {previewImage.years} • {previewImage.status} ({previewImage.progress}% tayyorgarlik)
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                {previewImage.name}
              </h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto mt-1">
                {previewImage.desc}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
