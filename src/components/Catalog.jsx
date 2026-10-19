import React, { useState, useMemo } from 'react';
import { 
  Maximize2, 
  Sparkles, 
  CreditCard, 
  Bot, 
  Eye, 
  X, 
  ShieldCheck, 
  FileText, 
  Layers, 
  Building, 
  TrendingDown, 
  CheckCircle2, 
  ArrowRight, 
  Home,
  Download 
} from 'lucide-react';
import { APARTMENT_MODELS } from '../data/apartments';
import PdfCatalogBanner from './PdfCatalogBanner';

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
  const [selectedPlanId, setSelectedPlanId] = useState(() => model.isCadastreSplit ? 'plan_kadastr' : 'plan_fixed');

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
    <div className="bg-white border border-sky-200 hover:border-sky-400 rounded-3xl p-5 sm:p-7 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full">
      
      {/* 1. Karta sarlavhasi va teglari */}
      <div className="pb-4 mb-4 border-b border-sky-100">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 text-[11px] font-extrabold border border-sky-200">
              {model.rooms} xonali
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 text-[11px] font-bold border border-slate-200">
              {model.area} m²
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold border border-emerald-200">
              Comfort Class
            </span>
            {model.onlyFullPayment ? (
              <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[11px] font-black border border-amber-300">
                Faqat 100% to‘lov
              </span>
            ) : model.isCadastreSplit ? (
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold border border-emerald-300">
                Bosh to‘lov + Kadastr (33% chegirma)
              </span>
            ) : (
              <span className="px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-700 text-[11px] font-bold border border-sky-200">
                30 oy 0% muddatli to‘lov
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5 bg-sky-50 px-2.5 py-1 rounded-xl border border-sky-200 shrink-0">
            <Layers className="w-3.5 h-3.5 text-sky-600" />
            <span className="text-[11px] text-slate-600">
              Topshirilish: <strong className="text-slate-900">2028-yil 4-chorak</strong>
            </span>
          </div>
        </div>

        <h3 className="text-lg sm:text-xl font-black text-slate-900">
          {model.title}
        </h3>
      </div>

      {/* 2. Arxitektura chizmasi rasmi */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-sky-600" />
              <span>Arxitektura chizmasi (3D & 2D)</span>
            </span>
            <span className="px-2 py-0.5 rounded-md bg-sky-100 text-sky-800 text-[10px] font-extrabold border border-sky-200">
              {model.area} m² aniq planirovka
            </span>
          </div>
          <button
            onClick={() => setPreviewImage(model.image)}
            className="text-[11px] text-sky-700 hover:text-sky-900 flex items-center gap-1 bg-sky-50 hover:bg-sky-100 px-2.5 py-1 rounded-lg border border-sky-200 transition-all cursor-pointer shadow-xs"
          >
            <Maximize2 className="w-3 h-3 text-sky-600" />
            <span className="font-semibold">Zoom (HD)</span>
          </button>
        </div>

        {/* Rasm konteyneri (1800x2367 nisbatida maydonni 100% sifatli va to'liq to'ldirish) */}
        <div 
          onClick={() => setPreviewImage(model.image)}
          className="relative w-full max-w-[560px] mx-auto aspect-[1800/2367] rounded-2xl bg-[#281d17] border-2 border-sky-200 hover:border-sky-400 overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all flex items-center justify-center"
        >
          <img 
            src={model.image} 
            alt={`${model.title} planirovka chizmasi`}
            className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-300"
            loading="lazy"
          />
          
          {/* Zoom hint overlay */}
          <div className="absolute inset-0 bg-sky-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-slate-900 text-xs sm:text-sm font-bold backdrop-blur-[1px]">
            <div className="px-4 py-2 rounded-xl bg-white/95 border border-sky-300 flex items-center gap-2 shadow-2xl text-sky-900 font-bold">
              <Maximize2 className="w-3.5 h-3.5 text-sky-600" />
              <span>To‘liq ekranda ko‘rish (HD Zoom)</span>
            </div>
          </div>
        </div>

        <p className="text-[11px] text-slate-500 mt-2 line-clamp-2">
          {model.description}
        </p>
      </div>

      {/* 3. Interaktiv Qavatlar va To'lov kalkulyatori */}
      <div className="bg-[#f4f9ff] border border-sky-100 rounded-2xl p-4 sm:p-5 flex-1 flex flex-col justify-between">
        
        <div>
          {/* Qavat tanlash */}
          <div className="mb-4 pb-3 border-b border-sky-200/60">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-slate-900 flex items-center gap-1.5 uppercase tracking-wide">
                <Building className="w-3.5 h-3.5 text-sky-600" />
                <span>Qavatni tanlang:</span>
              </span>
              {floorSavings > 0 ? (
                <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200">
                  <TrendingDown className="w-3 h-3" />
                  <span>{formatShortMln(floorSavings)} arzonroq!</span>
                </span>
              ) : (
                <span className="text-[10px] text-slate-500 font-semibold">
                  Standart talabgir qavatlar
                </span>
              )}
            </div>

            <div className="grid grid-cols-3 gap-1.5">
              {[
                { key: '2-4', label: '2-3-4-qavat', note: 'Talabgir' },
                { key: '5-8', label: '5-6-7-8-qavat', note: 'Arzonroq' },
                { key: '9-12', label: '9-10-11-12', note: 'Hamyonbop' }
              ].map((fl) => (
                <button
                  key={fl.key}
                  onClick={() => setSelectedFloor(fl.key)}
                  className={`py-1.5 px-1.5 rounded-xl text-center border transition-all cursor-pointer ${
                    selectedFloor === fl.key
                      ? 'sky-gradient-bg text-white font-extrabold shadow-sm scale-[1.02] border-transparent'
                      : 'bg-white text-slate-700 border-sky-200 hover:border-sky-400 hover:text-sky-700'
                  }`}
                >
                  <span className="text-[11px] font-black block leading-tight">{fl.label}</span>
                  <span className={`text-[9px] block mt-0.5 ${selectedFloor === fl.key ? 'text-sky-100 font-semibold' : 'text-slate-500'}`}>
                    {fl.note}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Bosh to'lov shakli */}
          {!model.onlyFullPayment && currentFloorData?.paymentPlans && (
            <div className="mb-4 pb-3 border-b border-sky-200/60">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-slate-900 flex items-center gap-1.5 uppercase tracking-wide">
                  <CreditCard className="w-3.5 h-3.5 text-sky-600" />
                  <span>Bosh to‘lov shakli:</span>
                </span>
                <span className="text-[10px] font-extrabold text-amber-800 bg-amber-100 px-2 py-0.5 rounded border border-amber-200">
                  {currentPlan?.discountBadge}
                </span>
              </div>

              <div className={`grid gap-1.5 ${model.isCadastreSplit ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-4'}`}>
                {currentFloorData.paymentPlans.map((pl) => (
                  <button
                    key={pl.id}
                    onClick={() => setSelectedPlanId(pl.id)}
                    className={`p-1.5 rounded-xl text-center border transition-all cursor-pointer ${
                      selectedPlanId === pl.id
                        ? 'bg-sky-100 border-2 border-sky-500 text-sky-950 font-bold shadow-xs'
                        : 'bg-white text-slate-600 border-sky-200 hover:text-slate-900 hover:border-sky-300'
                    }`}
                  >
                    <span className="text-[10px] font-extrabold block text-slate-800 leading-tight">
                      {pl.name}
                    </span>
                    <span className="text-[9px] text-amber-700 font-black block mt-0.5">
                      {pl.discountBadge}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Aniq narx bloki */}
          {currentPlan && (
            <div className="space-y-3">
              
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-sky-50 via-sky-50 to-white border border-sky-200">
                <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                  <span className="font-bold text-slate-900 flex items-center gap-1.5 text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                    <span>
                      {model.onlyFullPayment 
                        ? "100% To‘lov narxi" 
                        : `${currentPlan.name} (${currentPlan.discountBadge})`}
                    </span>
                  </span>
                  <span className="text-slate-500 text-[10px]">
                    {currentFloorData?.floorLabel}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="text-xl sm:text-2xl font-black text-sky-900">
                    {formatPrice(currentPlan.totalPrice)}
                  </div>
                  <div className="text-[11px] font-bold text-slate-600">
                    1 m²: <span className="text-slate-900 font-extrabold">{formatPrice(currentPlan.pricePerM2)}</span>
                  </div>
                </div>

                {model.onlyFullPayment && (
                  <div className="mt-2 pt-2 border-t border-sky-200 text-[11px] text-amber-800 flex items-center gap-1.5">
                    <span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-[9px] uppercase shrink-0 border border-amber-200">
                      100% to‘lov
                    </span>
                    <span>Faqat 100% to‘liq to‘lov bilan sotiladi.</span>
                  </div>
                )}
              </div>

              {/* 2 bosqichli Kadastrda qoldiq to'lash taqsimoti (22, 25, 34, 39 m²) */}
              {!model.onlyFullPayment && currentPlan.isCadastreSplit && (
                <div className="p-3.5 rounded-xl bg-gradient-to-br from-emerald-50/70 via-white to-sky-50/60 border-2 border-emerald-300/80 shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-black text-emerald-950 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>2 bosqichli to‘lov (33% chegirma to‘liq saqlanadi):</span>
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black border border-emerald-300">
                      Oylik to‘lov 0 so‘m
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-center">
                    <div className="bg-white p-2.5 rounded-xl border border-emerald-200 shadow-xs">
                      <span className="text-[9px] text-slate-500 uppercase font-bold block">1-bosqich: Bosh to‘lov</span>
                      <span className="text-sm font-black text-emerald-800 block mt-0.5">
                        {formatShortMln(currentPlan.initialPayment)}
                      </span>
                      <span className="text-[9px] text-slate-500 block mt-0.5">Shartnoma tuzilganda</span>
                    </div>

                    <div className="bg-white p-2.5 rounded-xl border border-sky-200 shadow-xs">
                      <span className="text-[9px] text-slate-500 uppercase font-bold block">2-bosqich: Kadastr chiqqanda</span>
                      <span className="text-sm font-black text-sky-800 block mt-0.5">
                        {currentPlan.remainingBalance === 0 ? "0 so‘m (To‘liq yopiladi)" : formatShortMln(currentPlan.remainingBalance)}
                      </span>
                      <span className="text-[9px] text-slate-500 block mt-0.5">2028-yil 4-chorak</span>
                    </div>
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-emerald-200/60 flex items-center justify-between text-[10px] text-slate-600">
                    <span className="font-semibold text-emerald-900">
                      ✨ Qurilish davrida hech qanday oylik to‘lov talab qilinmaydi!
                    </span>
                    <span className="font-bold text-slate-700">
                      Kadastr: <strong className="text-slate-900">2028 IV-chorak</strong>
                    </span>
                  </div>
                </div>
              )}

              {/* 30 oylik taqsimot (41-77 m² xonadonlar uchun) */}
              {!model.onlyFullPayment && currentPlan.isInstallment && !currentPlan.isCadastreSplit && (
                <div className="p-3 rounded-xl bg-white border border-sky-200">
                  <span className="text-[11px] font-bold text-slate-900 block mb-2">
                    30 Oygacha Bo‘lib To‘lash (0% ustama):
                  </span>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                    <div className="bg-sky-50 p-2 rounded-lg border border-sky-100">
                      <span className="text-[9px] text-slate-500 uppercase block">Bosh to‘lov</span>
                      <span className="text-xs font-black text-slate-900">
                        {formatShortMln(currentPlan.initialPayment)}
                      </span>
                    </div>

                    <div className="bg-sky-50 p-2 rounded-lg border border-sky-100">
                      <span className="text-[9px] text-slate-500 uppercase block">Oylik (30 oy)</span>
                      <span className="text-xs font-black text-emerald-700">
                        {formatShortMln(currentPlan.monthlyPayment)}
                      </span>
                    </div>

                    <div className="bg-sky-50 p-2 rounded-lg border border-sky-100">
                      <span className="text-[9px] text-slate-500 uppercase block">30 oyda jami</span>
                      <span className="text-xs font-black text-slate-800">
                        {formatShortMln(currentPlan.paid30m)}
                      </span>
                    </div>

                    <div className="bg-sky-50 p-2 rounded-lg border border-sky-100">
                      <span className="text-[9px] text-slate-500 uppercase block">31-oy qoldiq</span>
                      <span className="text-xs font-black text-amber-700">
                        {formatShortMln(currentPlan.remainingBalance)}
                      </span>
                    </div>
                  </div>

                  <div className="mt-2 pt-2 border-t border-sky-100 flex flex-wrap items-center justify-between text-[10px] text-slate-500 gap-1.5">
                    <span>Qoldiq summa variantlari:</span>
                    <div className="flex items-center gap-1 font-bold text-slate-700">
                      <span className="px-1.5 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-700">💵 Naqd</span>
                      <span className="px-1.5 py-0.5 rounded bg-sky-50 border border-sky-200 text-sky-700">🏦 Ipoteka</span>
                      <span className="px-1.5 py-0.5 rounded bg-amber-50 border border-amber-200 text-amber-700">📑 Subsidiya</span>
                    </div>
                  </div>
                </div>
              )}

            </div>
          )}
        </div>

        {/* 4. HARAKAT TUGMALARI */}
        <div className="flex flex-col gap-2.5 pt-4 mt-4 border-t border-sky-200/60">
          
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
            className="w-full py-3 px-4 rounded-xl sky-gradient-bg text-white font-extrabold text-xs hover:brightness-110 shadow-md shadow-sky-600/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-white" />
            <span>Bron qilish (24 soat)</span>
          </button>

          {/* AI Maslahatchi Telegram Bot havolasi (2-rasmdagi ko'rinish) */}
          <a
            href="https://t.me/Vatan2333_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-sky-50 to-sky-100/70 hover:from-sky-100 hover:to-sky-200/70 border-2 border-sky-300 hover:border-sky-500 flex items-center justify-between group transition-all shadow-xs cursor-pointer"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-7 h-7 rounded-lg bg-sky-500 flex items-center justify-center text-white shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                <Bot className="w-4 h-4" />
              </div>
              <div className="text-left truncate">
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] font-black text-sky-950 truncate">AI Maslahatchi (@Vatan2333_bot)</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                </div>
                <span className="text-[10px] text-slate-500 block truncate font-medium">Kutmasdan 24/7 savollaringizga javob oling</span>
              </div>
            </div>
            <div className="text-sky-600 font-extrabold text-[11px] flex items-center gap-0.5 shrink-0 ml-1.5 group-hover:translate-x-0.5 transition-transform">
              <span>Kirish</span>
              <span>→</span>
            </div>
          </a>
        </div>

      </div>

    </div>
  );
}


export default function Catalog({ onBookApartment, onOpenPdfModal }) {
  const [selectedRooms, setSelectedRooms] = useState('all'); // 'all', '1', '2', '3'
  const [previewImage, setPreviewImage] = useState(null); // Lightbox zoom modal
  const [sortBy, setSortBy] = useState('area-asc'); // 'area-asc', 'price-asc', 'price-desc'

  // 1-xonali, 2-xonali va 3-xonali toifalar
  const roomCategories = useMemo(() => [
    {
      rooms: 1,
      id: 'cat-1-room',
      title: "1-Xonali Xonadonlar",
      badge: "1 Xonali Planirovkalar To‘plami",
      subtitle: "Ixcham studio va keng 1 xonali xonadonlar — yakka yashash yoki yosh oilalar uchun ideal qulaylik va eng hamyonbop narxlar.",
      areaRange: "22 m² — 49 m²",
      countText: "7 xil planirovka varianti",
      initialPayment: "29 mln so‘mdan (yoki kadastr to‘lovi)",
      monthlyPayment: "4 mln so‘m (yoki 0 so‘m oylik)",
      models: APARTMENT_MODELS.filter(m => m.rooms === 1)
    },
    {
      rooms: 2,
      id: 'cat-2-room',
      title: "2-Xonali Oilaviy Xonadonlar",
      badge: "2 Xonali Planirovkalar To‘plami",
      subtitle: "Oilaviy qulaylik va shinamlik uchun eng ommabop va talabgir, yorug‘ xonalar va keng dahlizli xonadonlar.",
      areaRange: "54 m² va 55 m²",
      countText: "2 xil planirovka varianti",
      initialPayment: "39 mln so‘mdan",
      monthlyPayment: "5 mln so‘m (30 oy)",
      models: APARTMENT_MODELS.filter(m => m.rooms === 2)
    },
    {
      rooms: 3,
      id: 'cat-3-room',
      title: "3-Xonali Keng & Shohona Xonadonlar",
      badge: "3 Xonali Planirovkalar To‘plami",
      subtitle: "Katta oilalar uchun maksimal kenglik, alohida yotoqxonalar, keng mehmonxona va yuqori darajadagi qulaylik.",
      areaRange: "70 m² va 77 m²",
      countText: "2 xil planirovka varianti",
      initialPayment: "69 mln so‘mdan",
      monthlyPayment: "6 mln so‘m (30 oy)",
      models: APARTMENT_MODELS.filter(m => m.rooms === 3)
    }
  ], []);

  // Filter va saralangan toifalar
  const displayedCategories = useMemo(() => {
    return roomCategories
      .filter((cat) => selectedRooms === 'all' || cat.rooms === parseInt(selectedRooms))
      .map((cat) => {
        const sorted = [...cat.models].sort((a, b) => {
          if (sortBy === 'area-asc') return a.area - b.area;
          if (sortBy === 'price-asc') return a.prices.fullPayDiscount - b.prices.fullPayDiscount;
          if (sortBy === 'price-desc') return b.prices.fullPayDiscount - a.prices.fullPayDiscount;
          return 0;
        });
        return { ...cat, models: sorted };
      });
  }, [roomCategories, selectedRooms, sortBy]);

  return (
    <section id="catalog" className="py-24 bg-[#f0f7ff] relative border-b border-sky-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
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
            Quyida har bir xonadon toifasi — <strong className="text-slate-900">1-xonali, 2-xonali va 3-xonali</strong> xonadonlar alohida bo‘limlarga ajratib ko‘rsatilgan. 
            <strong className="text-slate-900"> Qavatlar (2–4, 5–8, 9–12)</strong> va <strong className="text-slate-900">boshlang‘ich to‘lov (100%, 50%, 30%, standart hamda 22–39 m² uchun bosh to‘lov + kadastr)</strong>ga qarab narxlar tejamkorligi va bo‘lib to‘lash jadvali avtomatik hisoblanadi.
          </p>
        </div>

        {/* 3 ta toifa tezkor tanlash ko'rsatkichlari */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          
          {/* 1 xonali */}
          <div 
            onClick={() => setSelectedRooms(selectedRooms === '1' ? 'all' : '1')}
            className={`p-5 rounded-2xl border cursor-pointer transition-all ${
              selectedRooms === '1'
                ? 'bg-sky-50 border-2 border-sky-500 shadow-xl shadow-sky-500/10 scale-[1.01]'
                : 'bg-white border-sky-200 hover:border-sky-400 shadow-md'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-500"></span>
                <span>1 xonali xonadonlar</span>
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 font-extrabold border border-sky-200">
                22 — 49 m² (7 ta)
              </span>
            </div>
            <div className="text-xs text-slate-600 space-y-1">
              <p>Boshlang‘ich to‘lov: <strong className="text-slate-900 text-sm">29 mln so‘m</strong> (yoki 22–39 m² ga bosh to‘lov + kadastr)</p>
              <p>Oylik to‘lov: <strong className="text-emerald-700 text-sm">4 mln so‘m</strong> (30 oy) / 22–39 m² da 0 so‘m</p>
            </div>
            <div className="mt-3 pt-2.5 border-t border-sky-100 flex items-center justify-between text-[11px] font-bold text-sky-700">
              <span>{selectedRooms === '1' ? '✓ Tanlangan (Barchasini ko‘rish)' : 'Faqat 1-xonalilarni ko‘rish'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* 2 xonali */}
          <div 
            onClick={() => setSelectedRooms(selectedRooms === '2' ? 'all' : '2')}
            className={`p-5 rounded-2xl border cursor-pointer transition-all ${
              selectedRooms === '2'
                ? 'bg-sky-50 border-2 border-sky-500 shadow-xl shadow-sky-500/10 scale-[1.01]'
                : 'bg-white border-sky-200 hover:border-sky-400 shadow-md'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-500"></span>
                <span>2 xonali xonadonlar</span>
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 font-extrabold border border-sky-200">
                54, 55 m² (2 ta)
              </span>
            </div>
            <div className="text-xs text-slate-600 space-y-1">
              <p>Boshlang‘ich to‘lov: <strong className="text-slate-900 text-sm">39 mln so‘m</strong></p>
              <p>Oylik to‘lov: <strong className="text-emerald-700 text-sm">5 mln so‘m</strong> (30 oy)</p>
            </div>
            <div className="mt-3 pt-2.5 border-t border-sky-100 flex items-center justify-between text-[11px] font-bold text-sky-700">
              <span>{selectedRooms === '2' ? '✓ Tanlangan (Barchasini ko‘rish)' : 'Faqat 2-xonalilarni ko‘rish'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* 3 xonali */}
          <div 
            onClick={() => setSelectedRooms(selectedRooms === '3' ? 'all' : '3')}
            className={`p-5 rounded-2xl border cursor-pointer transition-all ${
              selectedRooms === '3'
                ? 'bg-sky-50 border-2 border-sky-500 shadow-xl shadow-sky-500/10 scale-[1.01]'
                : 'bg-white border-sky-200 hover:border-sky-400 shadow-md'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span>3 xonali xonadonlar</span>
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold border border-emerald-200">
                70, 77 m² (2 ta)
              </span>
            </div>
            <div className="text-xs text-slate-600 space-y-1">
              <p>Boshlang‘ich to‘lov: <strong className="text-slate-900 text-sm">69 mln so‘m</strong></p>
              <p>Oylik to‘lov: <strong className="text-emerald-700 text-sm">6 mln so‘m</strong> (30 oy)</p>
            </div>
            <div className="mt-3 pt-2.5 border-t border-sky-100 flex items-center justify-between text-[11px] font-bold text-sky-700">
              <span>{selectedRooms === '3' ? '✓ Tanlangan (Barchasini ko‘rish)' : 'Faqat 3-xonalilarni ko‘rish'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

        </div>

        {/* 5. 📥 PDF Taqdimotni (Prezentatsiya) yuklab olish bloki */}
        <PdfCatalogBanner onOpenPdfModal={onOpenPdfModal} />

        {/* Filtr paneli */}
        <div className="bg-white border border-sky-200 rounded-3xl p-4 sm:p-5 shadow-md mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Xona tanlash tabs */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider hidden sm:inline">Kategoriya:</span>
            <div className="grid grid-cols-4 gap-1.5 bg-sky-50 p-1.5 rounded-2xl border border-sky-200 w-full md:w-auto">
              {[
                { val: 'all', label: 'Barchasi (11 ta)' },
                { val: '1', label: '1 xonali (7 ta)' },
                { val: '2', label: '2 xonali (2 ta)' },
                { val: '3', label: '3 xonali (2 ta)' },
              ].map((item) => (
                <button
                  key={item.val}
                  onClick={() => setSelectedRooms(item.val)}
                  className={`px-3 sm:px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer text-center ${
                    selectedRooms === item.val
                      ? 'sky-gradient-bg text-white shadow-md font-extrabold'
                      : 'text-slate-600 hover:text-sky-800 hover:bg-sky-100/50'
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
              className="bg-sky-50 border border-sky-200 text-xs text-slate-800 rounded-xl px-3 py-2 outline-none focus:border-sky-500 cursor-pointer shadow-xs font-medium"
            >
              <option value="area-asc">Maydon: kichikdan kattaga</option>
              <option value="price-asc">Narx: arzondan qimmatga</option>
              <option value="price-desc">Narx: qimmatdan arzonga</option>
            </select>
          </div>

        </div>

        {/* Alohida-alohida toifalar bo'yicha xonadonlar (2 ta yonma-yon) */}
        <div className="space-y-16">
          {displayedCategories.map((category) => (
            <div key={category.rooms} id={category.id} className="scroll-mt-24">
              
              {/* Har bir toifaning alohida sarlavhasi va ko'rsatkichlari */}
              <div className="bg-gradient-to-r from-sky-100/90 via-white to-sky-50 border-2 border-sky-300 rounded-3xl p-5 sm:p-7 shadow-lg mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-full bg-gradient-to-l from-sky-200/40 to-transparent pointer-events-none" />
                
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 relative z-10">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-200/80 border border-sky-300 text-sky-900 text-xs font-black uppercase tracking-wider mb-2">
                      <span className="w-2 h-2 rounded-full bg-sky-600 animate-pulse"></span>
                      <span>{category.badge}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1.5 max-w-2xl leading-relaxed">
                      {category.subtitle}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs shrink-0">
                    <div className="bg-white px-3.5 py-2 rounded-2xl border border-sky-200 shadow-xs">
                      <span className="text-[10px] text-slate-500 uppercase font-bold block">Variantlar & Maydon</span>
                      <span className="text-xs sm:text-sm font-black text-slate-900">{category.areaRange} ({category.models.length} ta)</span>
                    </div>
                    <div className="bg-white px-3.5 py-2 rounded-2xl border border-emerald-200 shadow-xs">
                      <span className="text-[10px] text-emerald-700 uppercase font-bold block">Boshlang‘ich to‘lov</span>
                      <span className="text-xs sm:text-sm font-black text-emerald-800">{category.initialPayment}</span>
                    </div>
                    <div className="bg-white px-3.5 py-2 rounded-2xl border border-sky-200 shadow-xs">
                      <span className="text-[10px] text-sky-700 uppercase font-bold block">Oylik (30 oy)</span>
                      <span className="text-xs sm:text-sm font-black text-sky-900">{category.monthlyPayment}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2 ta yonma-yon kartalar seti */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
                {category.models.map((model) => (
                  <ApartmentCard 
                    key={model.typeCode}
                    model={model}
                    onBookApartment={onBookApartment}
                    setPreviewImage={setPreviewImage}
                  />
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Pastki PDF yuklab olish CTA qatori */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border-2 border-sky-200 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 border border-sky-300">
              <Download className="w-6 h-6 text-sky-600 animate-pulse" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-black text-slate-900">
                Oilaviy maslahatlashuv uchun to‘liq PDF taqdimotni saqlab oling
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Barcha 11 ta xonadon chizmalari, 30 oy 0% to‘lov grafiki va 33% chegirmalar jadvali bitta faylda.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenPdfModal}
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl sky-gradient-bg text-white font-extrabold text-xs shadow-lg shadow-sky-600/25 hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2.5 shrink-0 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>PDF Katalogini yuklab olish (14 MB)</span>
          </button>
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
