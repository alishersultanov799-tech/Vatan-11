import React from 'react';
import { 
  Building2, 
  Wrench, 
  Calendar, 
  GraduationCap, 
  Baby, 
  ShoppingCart, 
  Car, 
  Store, 
  Waves, 
  Sparkles, 
  CheckCircle, 
  ArrowRight,
  ArrowUpDown
} from 'lucide-react';
import { PROJECT_DETAILS } from '../data/apartments';

export default function ProjectAdvantages({ onOpenBooking, onScrollTo }) {
  const infraItems = [
    {
      name: "Har bir pod'ezdda 2 tadan lift",
      desc: "Har bir pod'ezdda (kirish yo‘lagida) 2 tadan zamonaviy shovqinsiz tezyurar yo‘lovchi va yuk liftlari",
      icon: ArrowUpDown,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/30"
    },
    {
      name: "Zamonaviy maktab",
      desc: "Bolalaringiz yo‘ldan o‘tmasdan qatnaydigan yaqin maktab (hudud ichida)",
      icon: GraduationCap,
      color: "text-amber-400",
      bg: "bg-amber-400/10",
      border: "border-amber-400/30"
    },
    {
      name: "Bolalar bog‘chasi",
      desc: "Xavfsiz va tarbiyaviy muhitdagi shinam bolalar bog‘chasi (hudud ichida)",
      icon: Baby,
      color: "text-sky-400",
      bg: "bg-sky-400/10",
      border: "border-sky-400/30"
    },
    {
      name: "Korzinka supermarketi",
      desc: "Uy tagidagi 24/7 keng assortimentli oziq-ovqat tarmog‘i (1 daqiqa)",
      icon: ShoppingCart,
      color: "text-rose-400",
      bg: "bg-rose-400/10",
      border: "border-rose-400/30"
    },
    {
      name: "Keng tartibli avtoturargoh",
      desc: "Avtomobillar uchun ajratilgan tartibli va xavfsiz to‘xtash joylari",
      icon: Car,
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
      border: "border-emerald-400/30"
    },
    {
      name: "Bozor majmuasi",
      desc: "Food City va yaqin savdo maydonlari (Food City chorrahasi)",
      icon: Store,
      color: "text-indigo-400",
      bg: "bg-indigo-400/10",
      border: "border-indigo-400/30"
    },
    {
      name: "Sun'iy ko‘l va eko-zona",
      desc: "Salqin havo, yashil xiyobon va oilaviy sokin dam olish hududi",
      icon: Waves,
      color: "text-cyan-400",
      bg: "bg-cyan-400/10",
      border: "border-cyan-400/30"
    },
    {
      name: "Ochiq amfiteatr",
      desc: "Ochiq osmon ostidagi madaniy tadbirlar va oilaviy bayramlar",
      icon: Sparkles,
      color: "text-brand-400",
      bg: "bg-brand-400/10",
      border: "border-brand-400/30"
    }
  ];

  return (
    <section id="advantages" className="py-24 bg-[#f4f9ff] relative overflow-hidden border-b border-sky-100">
      
      {/* Decorative glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-sky-200/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-200/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Afzalliklar & Infratuzilma</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            "Yangi Qo‘yliq-2" <span className="sky-gradient-text">Loyihasining Afzalliklari</span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Zamonaviy shahar hayoti uchun barcha qulayliklar: Comfort class standarti (12 qavat, 9 ball seysmik), 
            70% tayyor ta'mirlash va to‘liq rivojlangan ichki infratuzilma.
          </p>
        </div>

        {/* 3 ta asosiy ustun */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* 1. Toifasi: Comfort class */}
          <div className="p-7 rounded-3xl bg-white border border-sky-200 hover:border-sky-400 transition-all shadow-md group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 mb-5 group-hover:scale-110 transition-transform">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700 block mb-1">
                Bino toifasi
              </span>
              <h3 className="text-2xl font-black text-slate-900 mb-2">Comfort Class (12 qavat)</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                12 qavatli mustahkam monolit pishiq konstruksiya, pishiq g‘isht devorlar hamda har bir pod'ezdda 2 tadan zamonaviy shovqinsiz tezyurar liftlar.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-sky-100 flex items-center text-xs text-sky-700 font-semibold">
              <span>Seysmik chidamlilik: 9 ball • 2 ta lift / pod'ezd</span>
            </div>
          </div>

          {/* 2. Ta'mirlash holati: 70% tayyor */}
          <div className="p-7 rounded-3xl bg-gradient-to-b from-sky-50 to-white border-2 border-sky-400 transition-all shadow-lg shadow-sky-500/10 group flex flex-col justify-between relative">
            <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full sky-gradient-bg text-white text-[10px] font-black uppercase">
              Asosiy ustunlik
            </div>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-5 group-hover:scale-110 transition-transform">
                <Wrench className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                Ta'mirlash holati
              </span>
              <h3 className="text-2xl font-black text-slate-900 mb-2">70% Tayyor Ta'mirlangan</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Ortiqcha shovqin, loy va og‘ir ta'mir xarajatlarisiz! Barcha qora ishlar, devorlar, sifatli oq suvoq, romlar va eshiklar tayyor topshiriladi.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-sky-100 flex items-center text-xs text-emerald-700 font-semibold">
              <span>Tejov: 60 - 100 mln so‘m ta'mir xarajati</span>
            </div>
          </div>

          {/* 3. Topshirilish vaqti: 2028-yil 4-chorak */}
          <div className="p-7 rounded-3xl bg-white border border-sky-200 hover:border-sky-400 transition-all shadow-md group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 mb-5 group-hover:scale-110 transition-transform">
                <Calendar className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700 block mb-1">
                Kafolatlangan muddat
              </span>
              <h3 className="text-2xl font-black text-slate-900 mb-2">2028-yil 4-chorak</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Qurilish jadvali qat'iy reja asosida ketmoqda. Shartnomada topshirish muddati va kadastr kafolatlari to‘liq yozma belgilanadi.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-sky-100 flex items-center text-xs text-sky-700 font-semibold">
              <span>Bosqichma-bosqich kalit topshirish</span>
            </div>
          </div>

        </div>

        {/* 70% Tayyor ta'mirlash holati tarkibi */}
        <div className="bg-white border border-sky-200 rounded-3xl p-6 sm:p-10 mb-20 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-6 border-b border-sky-100 gap-4">
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                Xonadonni qabul qilib olganingizda nimalar tayyor bo‘ladi?
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                70% Tayyor ta'mir tarkibi
              </h3>
            </div>
            <div className="px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold self-start md:self-auto">
              ✓ Tayyor holda topshiriladi
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROJECT_DETAILS.repairFeatures.map((item, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-[#f8fcff] border border-sky-100 hover:border-emerald-300 transition-all flex items-start gap-4 group"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Qulay infratuzilma (Ikonkalar bilan) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-sky-700 uppercase tracking-widest block mb-1">
              Barcha qulayliklar piyoda masofada
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              Qulay Infratuzilma
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Siz va oilangiz uchun kundalik hayotda kerak bo‘ladigan barcha ijtimoiy va savdo ob'ektlari majmua atrofida
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {infraItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-sky-100 hover:border-sky-300 hover:bg-[#f8fcff] transition-all duration-300 shadow-md group flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-2xl ${item.bg} ${item.border} border flex items-center justify-center ${item.color} mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-sky-100 flex items-center text-[11px] font-semibold text-sky-700">
                    <span>Majmua hududida</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Catalog CTA */}
          <div className="mt-12 text-center">
            <button
              onClick={() => onScrollTo('catalog')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl sky-gradient-bg text-white font-extrabold text-sm sm:text-base hover:brightness-110 shadow-xl shadow-sky-600/20 transition-all cursor-pointer"
            >
              <span>Xonadonlar planirovkasi va narxlarini ko‘rish</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
