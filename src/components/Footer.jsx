import React from 'react';
import { MapPin, Phone, Clock, ShieldCheck, Send, Navigation, ExternalLink, Bot } from 'lucide-react';
import { PROJECT_DETAILS } from '../data/apartments';

export default function Footer({ onScrollTo, onOpenBooking }) {
  return (
    <footer className="bg-[#e0f0fd] border-t border-sky-200 text-slate-600 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand & Logo */}
          <div>
            <div className="mb-4">
              <div className="flex items-center gap-1.5 leading-none">
                <span className="text-2xl font-black text-slate-900 tracking-wider">VATAN</span>
                <span className="text-xs font-black px-1.5 py-0.5 rounded-md bg-sky-100 text-sky-800 border border-sky-300 tracking-wider">QK</span>
              </div>
              <span className="block text-xs text-sky-800 font-extrabold mt-1">{PROJECT_DETAILS.brandSubtitle}</span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              "VATAN" qurilish kompaniyasi 2013-yildan buyon xizmat ko‘rsatib kelmoqda. 
              10 000+ topshirilgan xonadonlar va 7 000+ noturar do‘konlar bilan O‘zbekistondagi ishonchli quruvchi.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-emerald-800 font-bold bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Davlat litsenziyasi va kafolatli shartnoma</span>
            </div>
          </div>

          {/* Col 2: Loyiha ko'rsatkichlari */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Yangi Qo‘yliq-2 Ko‘rsatkichlari
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li className="flex items-center justify-between">
                <span className="text-slate-500">Umumiy maydon:</span>
                <strong className="text-slate-900">13 gektar</strong>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-slate-500">Qavatlar soni:</span>
                <strong className="text-slate-900">12 qavat (Monolit)</strong>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-slate-500">Xonadonlar soni:</span>
                <strong className="text-slate-900">3 800 ta</strong>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-slate-500">Ta’mirlash holati:</span>
                <strong className="text-emerald-700">70% tayyor</strong>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-slate-500">Topshirish vaqti:</span>
                <strong className="text-sky-800">2028-yil 4-chorak</strong>
              </li>
            </ul>
          </div>

          {/* Col 3: Bo'limlar */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Bo‘limlar
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onScrollTo('hero')} className="hover:text-sky-700 transition-colors cursor-pointer text-slate-600">
                  Bosh sahifa
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('company-trust')} className="hover:text-sky-700 transition-colors cursor-pointer text-slate-600">
                  Kompaniya haqida (6 ta loyiha)
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('advantages')} className="hover:text-sky-700 transition-colors cursor-pointer text-slate-600">
                  Loyihaning afzalliklari & Infratuzilma
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('catalog')} className="hover:text-sky-700 transition-colors cursor-pointer text-slate-600">
                  Xonadonlar rejalari va narxlar
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('location')} className="hover:text-sky-700 transition-colors cursor-pointer text-slate-600">
                  Joylashuv va Food City mo‘ljali
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Bog'lanish */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Sotuv ofisi bilan aloqa
            </h4>
            
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-600 space-y-0.5">
                  <span className="text-sky-800 font-bold block">Yuridik manzil:</span>
                  <p className="text-slate-900 leading-snug">
                    {PROJECT_DETAILS.location.legalAddress}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Mo‘ljal: {PROJECT_DETAILS.location.landmark} ({PROJECT_DETAILS.location.zone})
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-slate-600">
                <Clock className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Har kuni: 09:00 — 18:00 (Dam olish kunlarisiz)</span>
              </div>

              <div className="pt-1 flex flex-col gap-2">
                <a 
                  href={PROJECT_DETAILS.location.telegramBot} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-black text-sky-800 hover:text-sky-950 transition-colors"
                >
                  <Bot className="w-3.5 h-3.5 text-sky-600" />
                  <span>🤖 AI Maslahatchi: @Vatan2333_bot</span>
                </a>

                <a 
                  href={PROJECT_DETAILS.location.telegramChannel} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 hover:text-sky-900 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Telegram kanal: @yangiqoyliq_TJM</span>
                </a>

                <a 
                  href={PROJECT_DETAILS.location.yandexLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-900 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-sky-600" />
                  <span>Yandex Xarita (Ofis va Qurilish lokatsiyasi)</span>
                  <ExternalLink className="w-3 h-3 text-sky-500" />
                </a>
              </div>
            </div>

            <div className="mt-5">
              <button
                onClick={() => onOpenBooking({ title: "Menejer konsultatsiyasi", source: "Footer" })}
                className="w-full py-2.5 px-4 rounded-xl sky-gradient-bg text-white font-extrabold text-xs hover:brightness-110 shadow-md shadow-sky-600/20 transition-all cursor-pointer"
              >
                Konsultatsiyaga yozilish
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 border-t border-sky-200/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
          <p>© 2013 — 2026 "VATAN" qurilish kompaniyasi. Barcha huquqlar himoyalangan.</p>
          <div className="flex items-center gap-4">
            <span>Yangi Qo‘yliq-2 loyihasi</span>
            <span>•</span>
            <a 
              href={PROJECT_DETAILS.location.telegramChannel} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-sky-700 font-bold text-sky-800"
            >
              @yangiqoyliq_TJM
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
