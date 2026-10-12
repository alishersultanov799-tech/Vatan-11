import React, { useState } from 'react';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Building2, CheckCircle2 } from 'lucide-react';

export default function ComplexGallery({ onScrollTo }) {
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const galleryImages = [
    {
      src: "/complex/building-1.jpg",
      fallback: "/photo_2026-05-09_09-00-52 (2).jpg",
      title: "12 qavatli zamonaviy monolit uylar",
      tag: "Fasad arxitekturasi",
      desc: "Seysmik 9 ballga bardoshli temir-beton monolit pishiq karkas va pishiq g‘isht devorlar."
    },
    {
      src: "/complex/building-2.jpg",
      fallback: "/photo_2026-05-09_09-00-52.jpg",
      title: "Zamonaviy 'Comfort class' dizayni",
      tag: "Tashqi qiyofa",
      desc: "Yevropa standartlari asosida loyihalashtirilgan nafis fasad, Akfa shovqinsiz premium romlar."
    },
    {
      src: "/complex/building-3.jpg",
      fallback: "/photo_2026-05-09_09-00-53 (2).jpg",
      title: "Keng obodonlashtirilgan hudud",
      tag: "Hovli va eko-zona",
      desc: "Avtomobillarsiz xavfsiz yashil hovli, zamonaviy bolalar o‘yingohi va oilaviy sayr yo‘laklari."
    },
    {
      src: "/complex/building-4.jpg",
      fallback: "/photo_2026-05-09_09-00-53.jpg",
      title: "13 gektarlik yirik majmua",
      tag: "Umumiy ko‘rinish",
      desc: "O‘zining maktabi, bog‘chasi, sun'iy ko‘li, ochiq amfiteatri va Korzinka supermarketi bilan to‘liq shahar ichida shahar."
    }
  ];

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="gallery" className="py-24 bg-[#eaf4fd] relative overflow-hidden border-b border-sky-100">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-sky-200/40 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-200/40 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold tracking-widest uppercase mb-3">
            <Building2 className="w-3.5 h-3.5 text-sky-600" />
            <span>Loyiha me'morchiligi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Ko‘p Qavatli Uylarimiz <span className="sky-gradient-text">Qiyofasi</span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            "Yangi Qo‘yliq-2" — 12 qavatli Comfort class turar-joy majmuasi. 
            Zamonaviy fasad, mustahkam monolit poydevor, keng yashil hovli va qulay eko-infratuzilma uyg‘unligi.
          </p>
        </div>

        {/* 4 ta Ko'p qavatli uy kartalari (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {galleryImages.map((item, idx) => (
            <div 
              key={idx}
              onClick={() => setActiveImageIndex(idx)}
              className="group relative rounded-3xl bg-white border border-sky-200 hover:border-sky-400 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Rasm konteyneri */}
              <div className="relative aspect-[16/10] overflow-hidden bg-sky-100">
                <img 
                  src={item.src} 
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = item.fallback;
                  }}
                  loading="lazy"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                {/* Tag nishoni */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-sky-950/80 backdrop-blur-md border border-white/20 text-white text-xs font-bold shadow-lg flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                  <span>{item.tag}</span>
                </div>

                {/* Zoom belgisi */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                  <Maximize2 className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Matn qismi */}
              <div className="p-6 flex flex-col justify-between flex-1 bg-white">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-sky-600 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-sky-100 flex items-center justify-between text-xs">
                  <span className="text-sky-700 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    12 qavatli monolit bino
                  </span>
                  <span className="text-slate-500 group-hover:text-sky-600 transition-colors font-medium underline">
                    Kattalashtirib ko‘rish →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tezkor harakat tugmasi */}
        <div className="text-center">
          <button
            onClick={() => onScrollTo && onScrollTo('catalog')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl sky-gradient-bg text-white font-extrabold text-sm sm:text-base hover:brightness-110 shadow-xl shadow-sky-600/25 transition-all cursor-pointer"
          >
            <span>Ushbu uylardan xonadon tanlash</span>
            <span>→</span>
          </button>
        </div>

      </div>

      {/* Lightbox Modal (Kattalashtirib ko'rish) */}
      {activeImageIndex !== null && (
        <div 
          onClick={() => setActiveImageIndex(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl p-4 sm:p-8 flex items-center justify-center animate-fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center"
          >
            {/* Yopish tugmasi */}
            <button
              onClick={() => setActiveImageIndex(null)}
              className="absolute -top-12 right-0 sm:top-4 sm:right-4 z-20 p-2.5 rounded-full bg-slate-900/90 border border-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Yopish"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Oldingi rasm */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/90 border border-white/20 text-white hover:bg-brand-500 hover:text-black transition-all cursor-pointer shadow-2xl"
              title="Oldingi rasm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Keyingi rasm */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/90 border border-white/20 text-white hover:bg-brand-500 hover:text-black transition-all cursor-pointer shadow-2xl"
              title="Keyingi rasm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Katta rasm */}
            <div className="w-full rounded-3xl overflow-hidden border border-brand-500/40 bg-slate-950 shadow-2xl max-h-[75vh] flex items-center justify-center p-2">
              <img 
                src={galleryImages[activeImageIndex].src} 
                alt={galleryImages[activeImageIndex].title}
                className="max-h-[72vh] w-auto max-w-full object-contain rounded-2xl"
              />
            </div>

            {/* Rasm tafsiloti */}
            <div className="mt-4 text-center">
              <span className="text-xs font-bold text-brand-300 uppercase tracking-widest block mb-1">
                {galleryImages[activeImageIndex].tag} ({activeImageIndex + 1} / {galleryImages.length})
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                {galleryImages[activeImageIndex].title}
              </h4>
              <p className="text-xs text-slate-300 max-w-lg mx-auto mt-1">
                {galleryImages[activeImageIndex].desc}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
