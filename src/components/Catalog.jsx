import React, { useState, useMemo } from 'react';
import { 
  Maximize2, 
  Sparkles, 
  CreditCard, 
  PhoneCall, 
  Eye, 
  X, 
  ShieldCheck,
  FileText,
  Layers,
  Building,
  TrendingDown,
  CheckCircle2
} from 'lucide-react';
import { APARTMENT_MODELS } from '../data/apartments';

// Helper formatters
const formatPrice = (amount) => {
  return Number(amount).toLocaleString('uz-UZ') + " so'm";
};

const formatShortMln = (amount) => {
  if (!amount || amount === 0) return "0 so'm";
  return (amount / 1000000).toFixed(1).replace('.0', '') + " mln so'm";
};

// Individual Apartment Card Component with Dynamic Floor & Payment Tier Matrix
function ApartmentCard({ model, onBookApartment, setPreviewImage }) {
  // Floor tier state: '2-4' (2-3-4 qavatlar), '5-8' (5-6-7-8 qavatlar), '9-12' (9-10-11-12 qavatlar)
  const [selectedFloor, setSelectedFloor] = useState('2-4');
  
  // Payment plan state for standard apartments
  const [selectedPlanId, setSelectedPlanId] = useState('plan_fixed');

  const currentFloorData = model.floorsData ? model.floorsData[selectedFloor] : null;

  // Active payment plan
  const currentPlan = useMemo(() => {
    if (!currentFloorData) return null;
    if (model.onlyFullPayment) {
      return {
        ...currentFloorData.fullPayment,
        isInstallment: false,
        name: "100% to‘lov",
        discountBadge: "33% chegirma"
      };
    }
    const plans = currentFloorData.paymentPlans || [];
    return plans.find(p => p.id === selectedPlanId) || plans[0] || null;
  }, [currentFloorData, model.onlyFullPayment, selectedPlanId]);

  // Standard 2-4 floor reference price for comparison
  const ref2_4Price = model.floorsData ? model.floorsData['2-4']?.fullPayment?.totalPrice : model.prices.fullPayDiscount;
  const currentFullPrice = currentFloorData ? currentFloorData.fullPayment?.totalPrice : model.prices.fullPayDiscount;
  const floorSavings = ref2_4Price && currentFullPrice ? ref2_4Price - currentFullPrice : 0;

  return (
    <div className="bg-white border border-sky-200 hover:border-sky-400 rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
      
      {/* 1. Karta sarlavhasi va teglari */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-sky-100 gap-3">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className="px-3 py-0.5 rounded-full bg-sky-100 text-sky-800 text-xs font-extrabold border border-sky-200">
              {model.rooms} xonali
            </span>
            <span className="px-3 py-0.5 rounded-full bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200">
              {model.area} m²
            </span>
            <span className="px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200">
              Comfort Class
            </span>
            {model.onlyFullPayment ? (
              <span className="px-3 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-black border border-amber-300">
                Faqat 100% to‘lov
              </span>
            ) : (
              <span className="px-3 py-0.5 rounded-full bg-sky-100 text-sky-700 text-xs font-bold border border-sky-200">
                30 oy 0% muddatli to‘lov
              </span>
            )}
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            {model.title}
          </h3>
        </div>

        <div className="flex items-center gap-2 bg-sky-50 px-4 py-2 rounded-2xl border border-sky-200 self-start sm:self-auto">
          <Layers className="w-4 h-4 text-sky-600" />
          <span className="text-xs text-slate-600">
            Topshirilish muddati: <strong className="text-slate-900">2028-yil 4-chorak</strong>
          </span>
        </div>
      </div>

      {/* 2. Asosiy blok: Chapda Katta Arxitektura Chizmasi (6 Ustun), O'ngda Interaktiv Qavat & To'lov Paneli (6 Ustun) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Chap blok (6 Ustun): KATTALASHTIRILGAN ARXITEKTURA CHIZMASI RASMI */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-sky-600" />
                <span>Haqiqiy arxitektura chizmasi (3D & 2D reja)</span>
              </span>
              <button
                onClick={() => setPreviewImage(model.image)}
                className="text-xs text-sky-700 hover:text-sky-900 flex items-center gap-1.5 bg-sky-50 hover:bg-sky-100 px-3 py-1 rounded-xl border border-sky-200 transition-all cursor-pointer shadow-xs"
              >
                <Maximize2 className="w-3.5 h-3.5 text-sky-600" />
                <span className="font-semibold">Kattalashtirish (Zoom)</span>
              </button>
            </div>

            {/* Rasm konteyneri - Katta, baland va 1800x2367 nisbatga to'liq mos */}
            <div 
              onClick={() => setPreviewImage(model.image)}
              className="relative w-full min-h-[480px] sm:min-h-[580px] lg:min-h-[660px] xl:min-h-[700px] rounded-2xl bg-[#f8fbff] border-2 border-sky-200 hover:border-sky-400 p-2 sm:p-4 flex items-center justify-center overflow-hidden group cursor-pointer shadow-md transition-all"
            >
              <img 
                src={model.image} 
                alt={`${model.title} planirovka chizmasi`}
                className="w-full h-full max-h-[720px] object-contain group-hover:scale-[1.03] transition-transform duration-300 drop-shadow-[0_10px_20px_rgba(2,132,199,0.15)]"
                loading="lazy"
              />
              
              {/* Zoom hint overlay */}
              <div className="absolute inset-0 bg-sky-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-slate-900 text-xs sm:text-sm font-bold backdrop-blur-[1px]">
                <div className="px-5 py-2.5 rounded-xl bg-white/95 border border-sky-300 flex items-center gap-2 shadow-2xl text-sky-900 font-bold">
                  <Maximize2 className="w-4 h-4 text-sky-600" />
                  <span>To‘liq ekranda ko‘rish (HD Zoom)</span>
                </div>
              </div>

              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 px-3 py-1.5 rounded-xl bg-white/90 border border-sky-200 text-sky-900 text-xs font-bold shadow-md flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
                <span>{model.area} m² aniq planirovka</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-600 mt-3 leading-relaxed">
            {model.description}
          </p>
        </div>

        {/* O'ng blok (6 Ustun): Qavatlar va To'lov Matrixi */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full bg-[#f4f9ff] border border-sky-100 rounded-2xl p-5 sm:p-7">
          
          <div>
            {/* 1. QAVATNI TANLASH TUGMALARI (Qavatga qarab narx arzonlashadi) */}
            <div className="mb-5 pb-4 border-b border-sky-200/60">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5 uppercase tracking-wide">
                  <Building className="w-3.5 h-3.5 text-sky-600" />
                  <span>Qavatni tanlang:</span>
                </span>
                {floorSavings > 0 ? (
                  <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200">
                    <TrendingDown className="w-3 h-3" />
                    <span>{formatShortMln(floorSavings)} arzonroq!</span>
                  </span>
                ) : (
                  <span className="text-[11px] text-slate-500 font-semibold">
                    Standart talabgir qavatlar
                  </span>
                )}
              </div>

              <div className="grid grid-cols-3 gap-2">
                {[
                  { key: '2-4', label: '2-3-4-qavatlar', note: 'Talabgir' },
                  { key: '5-8', label: '5-6-7-8-qavatlar', note: 'Arzonroq' },
                  { key: '9-12', label: '9-10-11-12-qavatlar', note: 'Eng hamyonbop' }
                ].map((fl) => (
                  <button
                    key={fl.key}
                    onClick={() => setSelectedFloor(fl.key)}
                    className={`py-2 px-2 rounded-xl text-center border transition-all cursor-pointer ${
                      selectedFloor === fl.key
                        ? 'sky-gradient-bg text-white font-extrabold shadow-md shadow-sky-600/20 scale-[1.02] border-transparent'
                        : 'bg-white text-slate-700 border-sky-200 hover:border-sky-400 hover:text-sky-700'
                    }`}
                  >
                    <span className="text-xs font-black block leading-tight">{fl.label}</span>
                    <span className={`text-[10px] block mt-0.5 ${selectedFloor === fl.key ? 'text-sky-100 font-semibold' : 'text-slate-500'}`}>
                      {fl.note}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. BOSH TO'LOV TURINI TANLASH (Faqat standart bo'lib to'lashli uylar uchun) */}
            {!model.onlyFullPayment && currentFloorData?.paymentPlans && (
              <div className="mb-5 pb-4 border-b border-sky-200/60">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5 uppercase tracking-wide">
                    <CreditCard className="w-3.5 h-3.5 text-sky-600" />
                    <span>Bosh to‘lov shakli:</span>
                  </span>
                  <span className="text-[11px] font-extrabold text-amber-800 bg-amber-100 px-2 py-0.5 rounded border border-amber-200">
                    {currentPlan?.discountBadge}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {currentFloorData.paymentPlans.map((pl) => (
                    <button
                      key={pl.id}
                      onClick={() => setSelectedPlanId(pl.id)}
                      className={`p-2 rounded-xl text-center border transition-all cursor-pointer ${
                        selectedPlanId === pl.id
                          ? 'bg-sky-100 border-2 border-sky-500 text-sky-950 font-bold shadow-sm'
                          : 'bg-white text-slate-600 border-sky-200 hover:text-slate-900 hover:border-sky-300'
                      }`}
                    >
                      <span className="text-[11px] font-extrabold block text-slate-800 leading-tight">
                        {pl.name}
                      </span>
                      <span className="text-[10px] text-amber-700 font-black block mt-0.5">
                        {pl.discountBadge}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 3. ANIQ NARXLAR VA HISOBLASH BLOKI */}
            {currentPlan && (
              <div className="space-y-4">
                
                {/* Asosiy narx kartasi */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-sky-50 via-sky-50 to-white border border-sky-200">
                  <div className="flex items-center justify-between text-xs text-slate-600 mb-1.5">
                    <span className="font-bold text-slate-900 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-sky-500"></span>
                      <span>
                        {model.onlyFullPayment 
                          ? "100% To‘lov narxi" 
                          : `${currentPlan.name} (${currentPlan.discountBadge})`}
                      </span>
                    </span>
                    <span className="text-slate-500 text-[11px]">
                      {currentFloorData?.floorLabel}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div className="text-2xl sm:text-3xl font-black text-sky-900">
                      {formatPrice(currentPlan.totalPrice)}
                    </div>
                    <div className="text-xs font-bold text-slate-600">
                      1 m² narxi: <span className="text-slate-900 font-extrabold">{formatPrice(currentPlan.pricePerM2)}</span>
                    </div>
                  </div>

                  {model.onlyFullPayment && (
                    <div className="mt-3 pt-2.5 border-t border-sky-200 text-xs text-amber-800 flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-[10px] uppercase shrink-0 border border-amber-200">
                        Faqat 100% to‘lov
                      </span>
                      <span>Ushbu studio xonadon faqat 100% to‘liq to‘lov bilan sotiladi (bo‘lib to‘lash mavjud emas).</span>
                    </div>
                  )}
                </div>

                {/* Bo'lib to'lash rejasi (Faqat bo'lib to'lash tanlanganda chiqadi) */}
                {!model.onlyFullPayment && currentPlan.isInstallment && (
                  <div className="p-4 rounded-xl bg-white border border-sky-200">
                    <span className="text-xs font-bold text-slate-900 block mb-2.5">
                      30 Oygacha Bo‘lib To‘lash Taqsimoti (0% ustama):
                    </span>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
                      <div className="bg-sky-50 p-2.5 rounded-lg border border-sky-100">
                        <span className="text-[10px] text-slate-500 uppercase block">Boshlang‘ich to‘lov</span>
                        <span className="text-sm font-black text-slate-900">
                          {formatShortMln(currentPlan.initialPayment)}
                        </span>
                      </div>

                      <div className="bg-sky-50 p-2.5 rounded-lg border border-sky-100">
                        <span className="text-[10px] text-slate-500 uppercase block">Oylik to‘lov (30 oy)</span>
                        <span className="text-sm font-black text-emerald-700">
                          {formatShortMln(currentPlan.monthlyPayment)}
                        </span>
                      </div>

                      <div className="bg-sky-50 p-2.5 rounded-lg border border-sky-100">
                        <span className="text-[10px] text-slate-500 uppercase block">30 oyda jami</span>
                        <span className="text-sm font-black text-slate-800">
                          {formatShortMln(currentPlan.paid30m)}
                        </span>
                      </div>

                      <div className="bg-sky-50 p-2.5 rounded-lg border border-sky-100">
                        <span className="text-[10px] text-slate-500 uppercase block">31-oydagi qoldiq</span>
                        <span className="text-sm font-black text-amber-700">
                          {formatShortMln(currentPlan.remainingBalance)}
                        </span>
                      </div>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-sky-100 flex flex-wrap items-center justify-between text-[11px] text-slate-500 gap-2">
                      <span>31-oydagi qoldiq summa uchun variantlar:</span>
                      <div className="flex items-center gap-1.5 font-bold text-slate-700">
                        <span className="px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-700">💵 Naqd</span>
                        <span className="px-2 py-0.5 rounded bg-sky-50 border border-sky-200 text-sky-700">🏦 Ipoteka</span>
                        <span className="px-2 py-0.5 rounded bg-amber-50 border border-amber-200 text-amber-700">📑 Subsidiya</span>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            )}
          </div>

          {/* 4. HARAKAT TUGMALARI (Bron qilish va Maslahat) */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-5 mt-4 border-t border-sky-200/60">
            
            <button
              onClick={() => onBookApartment({
                title: `${model.title} (${currentFloorData?.floorLabel})`,
                area: model.area,
                rooms: model.rooms,
                floorTier: currentFloorData?.floorLabel,
                price: currentPlan?.totalPrice || model.prices.fullPayDiscount,
                paymentPlan: currentPlan?.name || "100% to‘lov",
                source: "Katalog kartasi"
              })}
              className="w-full sm:flex-1 py-3.5 px-5 rounded-xl sky-gradient-bg text-white font-extrabold text-xs sm:text-sm hover:brightness-110 shadow-md shadow-sky-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-white" />
              <span>Bron qilish (24 soat bepul)</span>
            </button>

            <button
              onClick={() => onBookApartment({
                title: `${model.title} (${currentFloorData?.floorLabel}) — Maslahat olish`,
                area: model.area,
                rooms: model.rooms,
                floorTier: currentFloorData?.floorLabel,
                price: currentPlan?.totalPrice || model.prices.fullPayDiscount,
                paymentPlan: currentPlan?.name || "Konsultatsiya",
                source: "Katalog maslahat"
              })}
              className="w-full sm:flex-1 py-3.5 px-5 rounded-xl bg-white hover:bg-sky-50 border border-sky-300 text-sky-800 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <FileText className="w-4 h-4 text-sky-600" />
              <span>Maslahat olish</span>
            </button>

            <a
              href="tel:+998946032333"
              className="w-full sm:w-auto py-3.5 px-4 rounded-xl bg-sky-50 hover:bg-sky-100 border border-sky-200 text-sky-700 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5"
              title="Tezkor qo'ng'iroq"
            >
              <PhoneCall className="w-4 h-4 text-sky-600" />
              <span className="hidden xl:inline">+998 94 603 23 33</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}

export default function Catalog({ onBookApartment }) {
  const [selectedRooms, setSelectedRooms] = useState('all'); // 'all', '1', '2', '3'
  const [previewImage, setPreviewImage] = useState(null); // Lightbox zoom modal
  const [sortBy, setSortBy] = useState('area-asc'); // 'area-asc', 'price-asc', 'price-desc'

  const filteredModels = useMemo(() => {
    return APARTMENT_MODELS.filter((model) => {
      if (selectedRooms !== 'all' && model.rooms !== parseInt(selectedRooms)) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'area-asc') return a.area - b.area;
      if (sortBy === 'price-asc') return a.prices.fullPayDiscount - b.prices.fullPayDiscount;
      if (sortBy === 'price-desc') return b.prices.fullPayDiscount - a.prices.fullPayDiscount;
      return 0;
    });
  }, [selectedRooms, sortBy]);

  return (
    <section id="catalog" className="py-24 bg-[#f0f7ff] relative border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Rasmiy Excel narxlar jadvali asosida</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Xonadonlar Rejalari va <span className="sky-gradient-text">Narxlar Katalogi</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-base mt-3 leading-relaxed">
            Quyida har bir xonadonning haqiqiy arxitektura planirovkasi keltirilgan. 
            <strong className="text-slate-900"> Qavatlar (2–4, 5–8, 9–12)</strong> va <strong className="text-slate-900">boshlang‘ich to‘lov (100%, 50%, 30%, standart)</strong>ga qarab narxlar tejamkorligi va bo‘lib to‘lash jadvali avtomatik hisoblanadi.
          </p>
        </div>

        {/* 3 ta toifa tezkor ko'rsatkichlari */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          
          {/* 1 xonali */}
          <div 
            onClick={() => setSelectedRooms('1')}
            className={`p-5 rounded-2xl border cursor-pointer transition-all ${
              selectedRooms === '1'
                ? 'bg-sky-50 border-2 border-sky-500 shadow-xl shadow-sky-500/10'
                : 'bg-white border-sky-200 hover:border-sky-400 shadow-md'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-slate-900">1 xonali xonadonlar</span>
              <span className="text-xs px-2 py-0.5 rounded bg-sky-100 text-sky-800 font-bold border border-sky-200">41, 43, 49 m²</span>
            </div>
            <div className="text-xs text-slate-600 space-y-1">
              <p>Boshlang‘ich to‘lov: <strong className="text-slate-900 text-sm">60 mln so‘m</strong></p>
              <p>Oylik to‘lov: <strong className="text-emerald-700 text-sm">4 mln so‘m</strong> (30 oy)</p>
            </div>
          </div>

          {/* 2 xonali */}
          <div 
            onClick={() => setSelectedRooms('2')}
            className={`p-5 rounded-2xl border cursor-pointer transition-all ${
              selectedRooms === '2'
                ? 'bg-sky-50 border-2 border-sky-500 shadow-xl shadow-sky-500/10'
                : 'bg-white border-sky-200 hover:border-sky-400 shadow-md'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-slate-900">2 xonali xonadonlar</span>
              <span className="text-xs px-2 py-0.5 rounded bg-sky-100 text-sky-800 font-bold border border-sky-200">54, 55 m²</span>
            </div>
            <div className="text-xs text-slate-600 space-y-1">
              <p>Boshlang‘ich to‘lov: <strong className="text-slate-900 text-sm">75 mln so‘m</strong></p>
              <p>Oylik to‘lov: <strong className="text-emerald-700 text-sm">5 mln so‘m</strong> (30 oy)</p>
            </div>
          </div>

          {/* 3 xonali */}
          <div 
            onClick={() => setSelectedRooms('3')}
            className={`p-5 rounded-2xl border cursor-pointer transition-all ${
              selectedRooms === '3'
                ? 'bg-sky-50 border-2 border-sky-500 shadow-xl shadow-sky-500/10'
                : 'bg-white border-sky-200 hover:border-sky-400 shadow-md'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-slate-900">3 xonali xonadonlar</span>
              <span className="text-xs px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold border border-emerald-200">70 m² (va 77 m²)</span>
            </div>
            <div className="text-xs text-slate-600 space-y-1">
              <p>Boshlang‘ich to‘lov: <strong className="text-slate-900 text-sm">99 mln so‘m</strong></p>
              <p>Oylik to‘lov: <strong className="text-emerald-700 text-sm">6 mln so‘m</strong> (30 oy)</p>
            </div>
          </div>

        </div>

        {/* Filtr paneli */}
        <div className="bg-white border border-sky-200 rounded-3xl p-5 sm:p-6 shadow-md mb-12 flex flex-col md:flex-row items-center justify-between gap-5">
          
          {/* Xona tanlash tabs */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider hidden sm:inline">Toifa:</span>
            <div className="grid grid-cols-4 gap-1.5 bg-sky-50 p-1 rounded-xl border border-sky-200 w-full md:w-auto">
              {[
                { val: 'all', label: 'Barchasi' },
                { val: '1', label: '1 xona' },
                { val: '2', label: '2 xona' },
                { val: '3', label: '3 xona' },
              ].map((item) => (
                <button
                  key={item.val}
                  onClick={() => setSelectedRooms(item.val)}
                  className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    selectedRooms === item.val
                      ? 'sky-gradient-bg text-white shadow-md'
                      : 'text-slate-600 hover:text-sky-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Saralash */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <span className="text-xs text-slate-500 font-medium">Saralash:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-sky-50 border border-sky-200 text-xs text-slate-800 rounded-xl px-3 py-2 outline-none focus:border-sky-500 cursor-pointer shadow-xs"
            >
              <option value="area-asc">Maydon: kichikdan kattaga</option>
              <option value="price-asc">Narx: arzondan qimmatga</option>
              <option value="price-desc">Narx: qimmatdan arzonga</option>
            </select>
          </div>

        </div>

        {/* Xonadonlar ro'yxati */}
        <div className="space-y-12">
          {filteredModels.map((model) => (
            <ApartmentCard 
              key={model.typeCode}
              model={model}
              onBookApartment={onBookApartment}
              setPreviewImage={setPreviewImage}
            />
          ))}
        </div>

      </div>

      {/* Lightbox Zoom Modal (Arxitektura chizmasini to'liq ko'rish) */}
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
              src={previewImage} 
              alt="Kattalashtirilgan planirovka chizmasi" 
              className="max-h-[75vh] w-auto object-contain rounded-xl"
            />

            <div className="mt-4 flex items-center gap-3">
              <span className="text-xs text-slate-600 font-medium">
                Arxitektura chizmasi (Haqiqiy o‘lchamlar va eksplikatsiya)
              </span>
              <button
                onClick={() => setPreviewImage(null)}
                className="px-4 py-1.5 rounded-lg sky-gradient-bg text-white font-extrabold text-xs cursor-pointer shadow-md"
              >
                Yopish
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
