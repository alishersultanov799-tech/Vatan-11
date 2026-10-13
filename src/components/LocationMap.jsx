import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  ExternalLink, 
  ShoppingCart, 
  Compass, 
  Building, 
  Car, 
  PhoneCall,
  Train,
  GraduationCap,
  Trees,
  Send,
  Bot
} from 'lucide-react';
import { PROJECT_DETAILS } from '../data/apartments';

export default function LocationMap() {
  const [activePoi, setActivePoi] = useState(1);
  const [mapProvider, setMapProvider] = useState('yandex');

  // Aniq yo‘nalish ko‘rsatkichlari (Prompt talablari bo'yicha):
  const routeIndicators = [
    {
      id: 1,
      name: '🛒 Food City bozor chorrahasi',
      category: 'Bosh mo‘ljal',
      timeDrive: '2 daqiqa',
      distance: '600 m',
      desc: 'Yirik zamonaviy savdo va agro-logistika markazi chorrahasi',
      icon: ShoppingCart,
      color: 'text-amber-400',
      badge: '2 daqiqa'
    },
    {
      id: 2,
      name: '🏙️ Yangi Toshkent markazi',
      category: 'Yangi poytaxt',
      timeDrive: '10 daqiqa',
      distance: '8.5 km',
      desc: 'Yangi poytaxt ma‘muriy markazi, xiyobonlar va istiqbolli infratuzilma',
      icon: Building,
      color: 'text-brand-400',
      badge: '10 daqiqa'
    },
    {
      id: 3,
      name: '🚇 Qo‘yliq metro bekati va Qo‘yliq bozori',
      category: 'Metro & Bozor',
      timeDrive: '8 daqiqa',
      distance: '4.8 km',
      desc: 'Halqa yer usti metro liniyasi va dehqon bozori transport tuguni',
      icon: Train,
      color: 'text-emerald-400',
      badge: '8 daqiqa'
    },
    {
      id: 4,
      name: '✈️ Toshkent Xalqaro Aeroporti',
      category: 'Aeroport',
      timeDrive: '15 daqiqa',
      distance: '13 km',
      desc: 'To‘g‘ridan-to‘g‘ri trassa orqali tirbandliksiz qulay yo‘l',
      icon: Navigation,
      color: 'text-sky-400',
      badge: '15 daqiqa'
    },
    {
      id: 5,
      name: '🏫 Zamonaviy Maktab & Bog‘cha',
      category: 'Ta‘lim',
      timeDrive: 'Hudud ichida',
      distance: '200 m',
      desc: 'Majmua ichida piyoda boriladigan zamonaviy ta‘lim maskanlari',
      icon: GraduationCap,
      color: 'text-indigo-400',
      badge: 'Hudud ichida'
    },
    {
      id: 6,
      name: '🌳 Sun‘iy Ko‘l va Eko-zona',
      category: 'Hordiq',
      timeDrive: 'Hudud ichida',
      distance: '100 m',
      desc: '13 gektarlik obodonlashtirilgan hudud, salqin havo va ochiq amfiteatr',
      icon: Trees,
      color: 'text-emerald-400',
      badge: 'Hudud ichida'
    }
  ];

  return (
    <section id="location" className="py-24 bg-[#eaf4fd] relative overflow-hidden border-b border-sky-100">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-200/40 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/40 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-sky-600" />
            <span>Strategik qulay joylashuv</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Joylashuv va <span className="sky-gradient-text">Yo‘nalish Xaritasi</span>
          </h2>
          <p className="mt-3 text-xs sm:text-base text-slate-600 leading-relaxed">
            Majmua Yangi Toshkent hududida, Food City bozor chorrahasida joylashgan.
          </p>
        </div>

        {/* Location Info Banner Card */}
        <div className="bg-white border border-sky-200 rounded-3xl p-6 sm:p-8 mb-10 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-sky-100">
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Yuridik Manzil:</span>
                <p className="text-sm sm:text-base font-bold text-slate-900 mt-1 leading-snug">
                  {PROJECT_DETAILS.location.legalAddress}
                </p>
                <p className="text-xs text-sky-700 mt-1 font-semibold">
                  ({PROJECT_DETAILS.location.zone})
                </p>
              </div>
            </div>

            <div className="pt-4 md:pt-0 md:px-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Bosh Mo‘ljal:</span>
                <p className="text-base font-bold text-slate-900 mt-1">
                  {PROJECT_DETAILS.location.landmark}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Katta chorrahadan atigi 2 daqiqa
                </p>
              </div>
            </div>

            <div className="pt-4 md:pt-0 md:px-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shrink-0">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">AI Maslahatchi:</span>
                <p className="text-base font-bold text-slate-900 mt-1">
                  @Vatan2333_bot
                </p>
                <a 
                  href={PROJECT_DETAILS.location.telegramBot}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-sky-700 hover:text-sky-900 font-bold block mt-0.5"
                >
                  Savol berish (24/7) →
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Map & Direction Indicators Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Yo'nalish ko'rsatkichlari (5 Ustun) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
              Yo‘nalish ko‘rsatkichlari:
            </span>

            {routeIndicators.map((poi) => {
              const Icon = poi.icon;
              const isSelected = activePoi === poi.id;

              return (
                <div
                  key={poi.id}
                  onClick={() => setActivePoi(poi.id)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-sky-50 border-2 border-sky-400 shadow-lg shadow-sky-500/10'
                      : 'bg-white border-sky-100 hover:border-sky-300 shadow-sm'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center ${poi.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900">
                        {poi.name}
                      </h4>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-sky-100 text-[11px] font-black text-sky-800 shrink-0 border border-sky-200">
                      {poi.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 mb-3 pl-12">
                    {poi.desc}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-bold pl-12 text-slate-600">
                    <div className="flex items-center gap-1.5 text-emerald-700">
                      <Car className="w-3.5 h-3.5" />
                      <span>Yo‘l vaqti: {poi.timeDrive}</span>
                    </div>
                    <span className="text-sky-800 text-[11px] font-semibold bg-sky-100 px-2 py-0.5 rounded border border-sky-200">
                      Masofa: {poi.distance}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Navigatsiya tugmalari: Yandex Navigator & Google Maps */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={PROJECT_DETAILS.location.yandexLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl sky-gradient-bg text-white font-extrabold text-xs sm:text-sm hover:brightness-110 shadow-md shadow-sky-600/20 transition-all flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4 text-white" />
                <span>Yandex Navigator & Xarita</span>
                <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
              </a>

              <a
                href={PROJECT_DETAILS.location.googleMapLink || PROJECT_DETAILS.location.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-white hover:bg-sky-50 border border-sky-300 text-sky-800 font-extrabold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <MapPin className="w-4 h-4 text-sky-600" />
                <span>Google Xarita</span>
                <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
              </a>
            </div>
          </div>

          {/* Interaktiv Xarita Iframe (7 Ustun) */}
          <div className="lg:col-span-7 bg-white border border-sky-200 rounded-3xl overflow-hidden shadow-xl">
            
            <div className="p-3 sm:p-4 bg-sky-50 border-b border-sky-100 flex flex-wrap items-center justify-between text-xs gap-2">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  onClick={() => setMapProvider('yandex')}
                  className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-all cursor-pointer flex items-center gap-1.5 ${
                    mapProvider === 'yandex'
                      ? 'sky-gradient-bg text-white shadow-sm'
                      : 'bg-white text-slate-700 border border-sky-200 hover:bg-sky-100'
                  }`}
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Yandex Xarita (Rasmiy lokatsiya)</span>
                </button>

                <button
                  onClick={() => setMapProvider('google')}
                  className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-all cursor-pointer flex items-center gap-1.5 ${
                    mapProvider === 'google'
                      ? 'sky-gradient-bg text-white shadow-sm'
                      : 'bg-white text-slate-700 border border-sky-200 hover:bg-sky-100'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Google Xarita</span>
                </button>
              </div>

              <a 
                href={PROJECT_DETAILS.location.yandexLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-sky-700 hover:text-sky-900 font-bold flex items-center gap-1 bg-white px-2.5 py-1 rounded-lg border border-sky-200 shadow-xs"
              >
                <span>Yandex'da ochish</span>
                <ExternalLink className="w-3 h-3 text-sky-600" />
              </a>
            </div>

            {/* Map Frame */}
            <div className="relative aspect-[16/11] bg-sky-100">
              {mapProvider === 'yandex' ? (
                <iframe
                  title="Yangi Qo'yliq-2 Ofis va Qurilish joyi (Yandex Xarita)"
                  src={PROJECT_DETAILS.location.yandexWidget}
                  className="w-full h-full border-0"
                  allowFullScreen={true}
                  loading="lazy"
                />
              ) : (
                <iframe
                  title="Yangi Qo'yliq-2 va Food City joylashuvi (Google Maps)"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12003.54116245248!2d69.3456789!3d41.2234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae6143c6b22eb1%3A0x8e83348123456789!2sFood%20City%20Tashkent!5e0!3m2!1suz!2s!4v1700000000000!5m2!1suz!2s"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              )}

              {/* Map Overlay Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-sky-200 p-3.5 rounded-2xl shadow-xl max-w-xs z-10">
                <div className="flex items-center gap-2 text-sky-800 font-bold text-xs mb-1">
                  <MapPin className="w-4 h-4 text-sky-600" />
                  <span>"Yangi Qo‘yliq-2" Majmuasi va Sotuv Ofisi</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-tight">
                  {PROJECT_DETAILS.location.legalAddress}
                </p>
                <span className="text-[10px] text-sky-600 font-semibold block mt-1">
                  Mo‘ljal: {PROJECT_DETAILS.location.landmark}
                </span>
                <a
                  href={PROJECT_DETAILS.location.yandexLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] font-bold text-sky-700 hover:text-sky-900 bg-sky-50 hover:bg-sky-100 px-2.5 py-1 rounded-lg border border-sky-200 transition-colors"
                >
                  <Navigation className="w-3 h-3 text-sky-600" />
                  <span>Yandex Xaritada ochish</span>
                  <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
                </a>
              </div>

              {/* AI Maslahatchi overlay */}
              <a 
                href={PROJECT_DETAILS.location.telegramBot}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md border border-sky-200 px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-2 z-10 hover:border-sky-400 transition-colors"
              >
                <Bot className="w-3.5 h-3.5 text-sky-600" />
                <span className="text-xs font-bold text-slate-900">
                  @Vatan2333_bot
                </span>
              </a>
            </div>

            <div className="p-4 bg-sky-50 border-t border-sky-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
              <span>Sotuv menejeri: <strong className="text-slate-800">Alisher</strong></span>
              <a 
                href={PROJECT_DETAILS.location.telegramChannel} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sky-600 hover:text-sky-800 font-bold flex items-center gap-1"
              >
                <Send className="w-3 h-3" />
                <span>Telegram: @yangiqoyliq_TJM</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
