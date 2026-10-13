import React from 'react';
import { Phone, Bot, Home } from 'lucide-react';
import { PROJECT_DETAILS } from '../data/apartments';

export default function MobileStickyBar({ onScrollTo, onOpenBooking }) {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-2xl border-t border-sky-200 px-3 py-2.5 shadow-[0_-5px_20px_rgba(2,132,199,0.15)]">
      <div className="grid grid-cols-3 gap-2 text-center">
        
        {/* 1. Qo‘ng‘iroq qilish */}
        <a
          href={`tel:${PROJECT_DETAILS.location.salesPhone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-sky-50 border border-sky-200 text-slate-800 active:scale-95 transition-transform"
        >
          <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-1">
            <Phone className="w-3.5 h-3.5" />
          </div>
          <span className="text-[11px] font-black tracking-tight text-slate-800">
            Qo‘ng‘iroq
          </span>
        </a>

        {/* 2. AI Maslahatchi Telegram Bot (@Vatan2333_bot) */}
        <a
          href={PROJECT_DETAILS.location.telegramBot}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-b from-sky-50 to-sky-100/80 border-2 border-sky-400 text-slate-900 active:scale-95 transition-transform relative group shadow-xs"
          title="AI Maslahatchi bot (@Vatan2333_bot)"
        >
          <span className="absolute top-1 right-2 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>

          <div className="w-7 h-7 rounded-full bg-sky-500 text-white flex items-center justify-center mb-1 shadow-xs">
            <Bot className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-black tracking-tight text-sky-950">
            AI Maslahat
          </span>
        </a>

        {/* 3. Xonadon tanlash */}
        <button
          onClick={() => onScrollTo('catalog')}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl sky-gradient-bg text-white font-extrabold active:scale-95 transition-transform shadow-md shadow-sky-600/20"
        >
          <div className="w-7 h-7 rounded-full bg-white/20 text-white flex items-center justify-center mb-1">
            <Home className="w-3.5 h-3.5" />
          </div>
          <span className="text-[11px] font-black tracking-tight text-white">
            Xonadon tanlash
          </span>
        </button>

      </div>
    </div>
  );
}
