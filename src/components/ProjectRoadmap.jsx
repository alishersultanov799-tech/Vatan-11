import React, { useState } from 'react';
import { Maximize2, ArrowRight, X, Calendar } from 'lucide-react';
import { PROJECT_DETAILS } from '../data/apartments';

export default function ProjectRoadmap({ onOpenBooking }) {
  const [previewImage, setPreviewImage] = useState(null);

  return (
    <section id="roadmap" className="py-24 bg-[#edf6fd] relative overflow-hidden border-b border-sky-100">
      {/* Background ambient lights */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-sky-200/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-200/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Davom etayotgan loyihalar grafigi (Roadmap timeline) */}
        <div className="bg-white/95 border border-sky-200 rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-sky-700 uppercase tracking-widest mb-1 block">
              Kelajak rejalari & Qurilish bosqichlari
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">
              Davom etayotgan loyihalar grafigi (Roadmap)
            </h2>
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
              onClick={() => onOpenBooking ? onOpenBooking({ title: "Kompaniya loyihasi bo'yicha maslahat", source: "Roadmap bloki" }) : null}
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
