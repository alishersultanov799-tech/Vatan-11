import React from 'react';
import { 
  Download, 
  FileText, 
  Sparkles, 
  Users, 
  CheckCircle2, 
  Send, 
  ExternalLink,
  ShieldCheck,
  Bot
} from 'lucide-react';
import { PROJECT_DETAILS } from '../data/apartments';

export default function PdfCatalogBanner({ onOpenPdfModal }) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0284c7] via-[#0369a1] to-[#0f172a] text-white p-6 sm:p-8 lg:p-10 shadow-2xl border-2 border-sky-300/40 my-10">
      
      {/* Orqa fon bezaklari */}
      <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        
        {/* Chap qism: Matn va Tavsif */}
        <div className="max-w-2xl">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-sky-200 text-xs font-black uppercase tracking-wider mb-4 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>📥 PDF Taqdimot (Prezentatsiya)</span>
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight">
            Barcha uylar va narxlar katalogini (PDF) yuklab olish
          </h3>

          <p className="text-sm sm:text-base text-sky-100/90 font-medium leading-relaxed mt-3">
            Ko‘pchilik xaridorlar uyni oilasi (turmush o‘rtog‘i, ota-onasi) bilan maslahatlashib oladi. 
            Telefoningizga yoki Telegramingizga loyihaning to‘liq reja-chizmalari, 30 oy 0% bo‘lib to‘lash 
            va 100% to‘lov narxlarini saqlab oling va oilaviy birgalikda ko‘rib chiqing.
          </p>

          {/* Afzalliklar teglari */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-5 text-xs text-sky-100 font-semibold">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>11 ta xonadonning 2D/3D reja-chizmalari</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% to‘lovda 33% chegirma narxlari</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>30 oy 0% foizsiz bo‘lib to‘lash shartlari</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>70% tayyor ta’mir va infratuzilma xaritasi</span>
            </div>
          </div>

        </div>

        {/* O'ng qism: Amallar va Yuklab olish tugmalari */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 shrink-0 w-full sm:w-auto">
          
          <button
            onClick={onOpenPdfModal}
            className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white hover:bg-sky-50 text-sky-950 font-black text-sm shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-98 transition-all flex items-center justify-center gap-3 cursor-pointer group"
          >
            <Download className="w-5 h-5 text-sky-600 group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <span className="block leading-tight">PDF Katalogini yuklab olish</span>
              <span className="text-[10px] text-slate-500 font-bold block">Bepul • 14.4 MB • Rasmiy nashr</span>
            </div>
          </button>

          <a
            href={PROJECT_DETAILS.location.telegramBot}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-extrabold text-xs border border-white/20 transition-all flex items-center justify-center gap-2.5 text-center shadow-md"
          >
            <Bot className="w-4 h-4 text-sky-300" />
            <span>Telegram botda ko‘rish (@Vatan2333_bot)</span>
          </a>

          <div className="flex items-center justify-center gap-2 text-[11px] text-sky-200/80">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Davlat litsenziyasi va kafolatli shartnomalar</span>
          </div>

        </div>

      </div>

    </div>
  );
}
