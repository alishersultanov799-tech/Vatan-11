import React from 'react';
import { Home, PhoneCall, Sparkles, MapPin, Building2, ChevronRight, KeyRound } from 'lucide-react';
import { PROJECT_DETAILS } from '../data/apartments';

export default function Hero({ onOpenBooking, onScrollTo }) {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#f0f7ff]">
      
      {/* Background Graphic & Luxury Render with Light Airy Sky Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/photo_2026-05-09_09-00-52.jpg" 
          alt="Yangi Qo'yliq-2 Turar-joy majmuasi" 
          className="w-full h-full object-cover object-center scale-105 opacity-25 mix-blend-multiply transition-transform duration-1000"
          fetchPriority="high"
        />
        {/* Gradients blending with light sky blue background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#e0f2fe]/80 via-[#f0f7ff]/90 to-[#f0f7ff]" />
      </div>

      {/* Decorative ambient sky lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-sky-300/30 blur-[130px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Floating Trust Badge with Brand Logo */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 border border-sky-200 text-sky-800 text-xs sm:text-sm font-semibold mb-6 shadow-md backdrop-blur-md">
          <div className="w-6 h-6 rounded-md bg-white p-0.5 flex items-center justify-center overflow-hidden shrink-0 shadow-xs border border-sky-100">
            <img 
              src={PROJECT_DETAILS.brandLogo} 
              alt="VATAN" 
              className="w-full h-full object-contain"
              onError={(e) => { e.target.src = '/vatan.png'; }}
            />
          </div>
          <span className="text-slate-800 font-bold">VATAN Qurilish Kompaniyasi</span>
          <span className="text-sky-300">|</span>
          <span className="text-sky-700 font-medium flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-sky-600" />
            Yangi Toshkent hududi (Food City)
          </span>
        </div>

        {/* 1. Kuchli sarlavha */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.15] mb-6">
          Yangi Qo‘yliq-2 — <br className="hidden sm:inline" />
          <span className="sky-gradient-text">Kelajakdagi shinam xonadoningiz</span>
        </h1>

        {/* Subtitr */}
        <p className="max-w-3xl mx-auto text-base sm:text-xl text-slate-700 font-normal leading-relaxed mb-10">
          Yangi Toshkent hududida joylashgan zamonaviy <span className="text-sky-700 font-bold">'Comfort class'</span> turar-joy majmuasi. 
          30 oygacha 0% foizsiz bo‘lib to‘lash, 70% tayyor ta’mirlash va 24 soatlik bepul bron qilish imkoniyati.
        </p>

        {/* CTA tugmalari: Xonadon tanlash va Maslahat olish */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto mb-12">
          
          {/* CTA 1: Xonadon tanlash */}
          <button 
            onClick={() => onScrollTo('catalog')}
            className="w-full sm:w-auto flex-1 group px-8 py-4 rounded-2xl sky-gradient-bg text-white font-black text-sm sm:text-base hover:brightness-110 shadow-xl shadow-sky-600/25 transition-all flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Home className="w-5 h-5 text-white" />
            <span>Xonadon tanlash</span>
            <ChevronRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* CTA 2: Maslahat olish */}
          <button 
            onClick={() => onOpenBooking ? onOpenBooking({ title: "Bosh sahifadan konsultatsiya", source: "Hero CTA" }) : onScrollTo('contact')}
            className="w-full sm:w-auto flex-1 group px-8 py-4 rounded-2xl bg-white border-2 border-sky-300 hover:border-sky-500 text-sky-800 font-extrabold text-sm sm:text-base hover:bg-sky-50 shadow-md transition-all flex items-center justify-center gap-2.5 backdrop-blur-md transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <PhoneCall className="w-5 h-5 text-sky-600 group-hover:scale-110 transition-transform" />
            <span>Maslahat olish</span>
            <ChevronRight className="w-4 h-4 text-sky-500 group-hover:translate-x-1 transition-transform" />
          </button>

        </div>

        {/* Asosiy ko‘rsatkichlar (Vizitka kartalari) */}
        <div className="bg-white/95 backdrop-blur-xl border border-sky-200/90 rounded-3xl p-5 sm:p-7 shadow-xl shadow-sky-900/5 max-w-5xl mx-auto">
          <div className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-4 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-sky-500" />
            <span>Loyiha ko‘rsatkichlari — Yangi Qo‘yliq-2</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-sky-100">
            
            {/* Vizitka 1: 13 gektar */}
            <div className="pt-3 sm:pt-0 sm:px-4 text-center group">
              <div className="flex items-center justify-center gap-2 text-sky-600 mb-1">
                <MapPin className="w-5 h-5" />
                <span className="text-2xl sm:text-4xl font-black text-slate-900 group-hover:text-sky-600 transition-colors">13 gektar</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">Umumiy hudud maydoni</p>
            </div>

            {/* Vizitka 2: 12 qavat */}
            <div className="pt-3 sm:pt-0 sm:px-4 text-center group">
              <div className="flex items-center justify-center gap-2 text-sky-600 mb-1">
                <Building2 className="w-5 h-5" />
                <span className="text-2xl sm:text-4xl font-black text-slate-900 group-hover:text-sky-600 transition-colors">12 qavat</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">Monolit pishiq konstruksiya</p>
            </div>

            {/* Vizitka 3: 3 800 ta xonadon */}
            <div className="pt-3 sm:pt-0 sm:px-4 text-center group">
              <div className="flex items-center justify-center gap-2 text-sky-600 mb-1">
                <Home className="w-5 h-5" />
                <span className="text-2xl sm:text-4xl font-black text-slate-900 group-hover:text-sky-600 transition-colors">3 800 ta</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">Shinam xonadonlar fondi</p>
            </div>

            {/* Vizitka 4: 70% tayyor */}
            <div className="pt-3 sm:pt-0 sm:px-4 text-center group">
              <div className="flex items-center justify-center gap-2 text-emerald-600 mb-1">
                <KeyRound className="w-5 h-5" />
                <span className="text-2xl sm:text-4xl font-black text-slate-900 group-hover:text-emerald-600 transition-colors">70% tayyor</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">Oq suvoq & eshiklar bilan</p>
            </div>

          </div>

          {/* Qo'shimcha tezkor havola */}
          <div className="mt-5 pt-4 border-t border-sky-100 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-3">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>Topshirilish muddati: <strong className="text-slate-900">2028-yil 4-chorak</strong></span>
            </div>
            <a 
              href={`tel:${PROJECT_DETAILS.location.salesPhone}`}
              className="text-sky-700 hover:text-sky-900 font-bold flex items-center gap-1.5 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-sky-600" />
              <span>Aloqa: {PROJECT_DETAILS.location.salesPhoneFormatted} (Alisher)</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
