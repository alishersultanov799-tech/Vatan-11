import React from 'react';
import { Home, PhoneCall, Sparkles, MapPin, Building2, ChevronRight, KeyRound, Bot } from 'lucide-react';
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2 Ustunli asosiy Hero grid: Chapda ixcham matn & CTA, o'ngda KATTA 2-rasm */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-10 sm:mb-14">
          
          {/* Chap ustun (5 ustun): Ixcham va nafis sarlavha, ma'lumot va CTA tugmalari */}
          <div className="lg:col-span-5 text-center lg:text-left">
            
            {/* Floating Trust Badge with Brand Logo */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-sky-200 text-sky-800 text-[11px] sm:text-xs font-semibold mb-4 shadow-sm backdrop-blur-md">
              <div className="w-5 h-5 rounded-md bg-white p-0.5 flex items-center justify-center overflow-hidden shrink-0 shadow-xs border border-sky-100">
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
                <MapPin className="w-3 h-3 text-sky-600" />
                Food City ro‘parasi
              </span>
            </div>

            {/* 1. Kuchli, ixchamlashtirilgan sarlavha */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[34px] xl:text-[38px] font-black tracking-tight text-slate-900 leading-[1.2] mb-3.5">
              Yangi Qo‘yliq-2 — <br className="hidden sm:inline" />
              <span className="sky-gradient-text">Kelajakdagi shinam xonadoningiz</span>
            </h1>

            {/* Subtitr - ixcham matn */}
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
              Yangi Toshkent hududida joylashgan zamonaviy <span className="text-sky-700 font-bold">'Comfort class'</span> turar-joy majmuasi. 
              30 oygacha 0% foizsiz bo‘lib to‘lash, 70% tayyor ta’mirlash va 24 soatlik bepul bron qilish imkoniyati.
            </p>

            {/* CTA tugmalari */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-2.5">
              
              {/* CTA 1: Xonadon tanlash */}
              <button 
                onClick={() => onScrollTo('catalog')}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl sky-gradient-bg text-white font-extrabold text-xs sm:text-sm hover:brightness-110 shadow-lg shadow-sky-600/25 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
              >
                <Home className="w-4 h-4 text-white" />
                <span>Xonadon tanlash</span>
                <ChevronRight className="w-3.5 h-3.5 text-white/80 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* CTA 2: 🤖 AI Maslahatchi Telegram Bot */}
              <a 
                href={PROJECT_DETAILS.location.telegramBot}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-gradient-to-r from-sky-50 to-sky-100 border-2 border-sky-400 hover:border-sky-600 text-sky-950 font-extrabold text-xs sm:text-sm shadow-xs transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
                title="AI Maslahatchi Telegram bot (@Vatan2333_bot)"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <Bot className="w-4 h-4 text-sky-600 group-hover:rotate-12 transition-transform" />
                <span>🤖 AI Maslahat olish</span>
              </a>

              {/* CTA 3: Maslahat olish */}
              <button 
                onClick={() => onOpenBooking ? onOpenBooking({ title: "Bosh sahifadan konsultatsiya", source: "Hero CTA" }) : onScrollTo('contact')}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white border border-sky-300 hover:border-sky-500 text-sky-800 font-extrabold text-xs sm:text-sm hover:bg-sky-50 shadow-xs transition-all flex items-center justify-center gap-2 backdrop-blur-md transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
              >
                <PhoneCall className="w-4 h-4 text-sky-600 group-hover:scale-110 transition-transform" />
                <span>Maslahat olish</span>
              </button>

            </div>

          </div>

          {/* O'ng ustun (7 ustun): KATTALASHTIRILGAN 2-RASM */}
          <div className="lg:col-span-7">
            <div className="relative group rounded-3xl overflow-hidden border-2 border-sky-300/80 bg-white shadow-2xl shadow-sky-900/20 transform hover:scale-[1.01] transition-all duration-300">
              
              {/* Katta 2-Rasm (Tungi arxitektura chizmasi & VATAN brendi) */}
              <div className="aspect-[16/10] sm:aspect-[16/10] lg:aspect-[16/10] w-full overflow-hidden bg-slate-950">
                <img 
                  src="/vatan-hero-night.jpg" 
                  alt="Yangi Qo‘yliq-2 Turar-joy majmuasi tungi 3D ko‘rinishi — VATAN" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
              </div>

              {/* Rasm ustidagi zamonaviy badge / overlay */}
              <div className="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full flex items-center gap-2 text-white text-xs font-bold shadow-xl">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>13 gektar zamonaviy hudud</span>
              </div>

              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md border border-sky-200 px-3.5 py-1.5 rounded-xl shadow-xl text-slate-900 text-xs font-black flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Comfort Class majmuasi</span>
              </div>

            </div>
          </div>

        </div>

        {/* Asosiy ko‘rsatkichlar (Vizitka kartalari - to'liq kenglikda) */}
        <div className="bg-white/95 backdrop-blur-xl border border-sky-200/90 rounded-3xl p-5 sm:p-7 shadow-xl shadow-sky-900/5 max-w-6xl mx-auto">
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
              href={PROJECT_DETAILS.location.telegramBot}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-700 hover:text-sky-900 font-bold flex items-center gap-1.5 transition-colors"
            >
              <Bot className="w-4 h-4 text-sky-600" />
              <span>AI Maslahatchi: @Vatan2333_bot</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
