import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  Sparkles, 
  Bot, 
  Building2, 
  ShieldCheck, 
  Coins, 
  FileCheck2, 
  Clock, 
  MapPin,
  Flame,
  CheckCircle2
} from 'lucide-react';
import { PROJECT_DETAILS } from '../data/apartments';

export default function FAQSection({ onOpenBooking }) {
  const [openIndex, setOpenIndex] = useState(0); // Birinchi savol ochiq holda turadi
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Barcha savollar' },
    { id: 'payment', label: 'To‘lov va Chegirmalar' },
    { id: 'condition', label: 'Xonadonlar holati' },
    { id: 'infrastructure', label: 'Infratuzilma va Joylashuv' },
  ];

  const faqs = [
    {
      category: 'condition',
      question: "Xonadonlar qanday holatda topshiriladi?",
      answer: "Xonadonlar 70% tayyor holda topshiriladi: barcha devorlar sifatli oq suvoq (shpaklyovka) qilingan, sifatli temir kirish eshigi o‘rnatilgan, zamonaviy ikki qavatli deraza romlari qo‘yilgan, elektr toki, ichimlik suvi va kanalizatsiya quvurlari xonadon shaxtasiga olib kirilgan. Siz faqat o‘zingizga yoqqan uslubda kosmetik ta’mirlash (oboy, pol, kafel) qilsangiz kifoya.",
      icon: Building2,
      badge: "70% Tayyor ta'mir"
    },
    {
      category: 'payment',
      question: "Bo‘lib to‘lash shartlari qanday va ustama (foiz) bormi?",
      answer: "Bizda mutlaqo 0% ustamasiz, 30 oygacha foizsiz bo‘lib to‘lash imkoniyati mavjud. Bo‘lib to‘lash 41 m² dan 77 m² gacha bo‘lgan uylar uchun amal qiladi:\n• 41, 43, 49 m² uylar uchun: bosh to‘lov 60 mln so‘m;\n• 54, 55 m² uylar uchun: bosh to‘lov 75 mln so‘m;\n• 70, 77 m² uylar uchun: bosh to‘lov 99 mln so‘m to‘lab xarid qilishingiz mumkin.",
      icon: Coins,
      badge: "0% Foizsiz muddat"
    },
    {
      category: 'payment',
      question: "Qaysi xonadonlar faqat 100% to‘lovda sotiladi?",
      answer: "Kichik va ixcham 22 m², 25 m², 34 m² va 39 m² xonadonlar faqat 100% to‘liq to‘lov bilan sotiladi. Ushbu xonadonlar uchun kompaniya tomonidan 33% maxsus chegirma beriladi, bu esa 1 m² narxini bozor narxlaridan sezilarli darajada hamyonbop qiladi.",
      icon: Sparkles,
      badge: "33% Chegirma"
    },
    {
      category: 'condition',
      question: "Uylar qachon to‘liq topshiriladi va kalit qachon beriladi?",
      answer: "\"Yangi Qo‘yliq-2\" loyihasining rasmiy topshirilish muddati — 2028-yil 4-chorak. Qurilish ishlari belgilangan reja va xalqaro sifat standartlari asosida jadal sur'atlarda olib borilmoqda.",
      icon: Clock,
      badge: "2028 4-chorak"
    },
    {
      category: 'infrastructure',
      question: "Oshxona va isitish tizimi qanday bo‘ladi, gaz bo‘ladimi?",
      answer: "Xavfsizlik va zamonaviy shaharsozlik talablariga asosan ko‘p qavatli bino ichida xonadonlarda gaz bo‘lmaydi. Xonadonlar zamonaviy, ekologik xavfsiz va elektr quvvatini tejovchi induksion/elektr plitalar uchun to‘liq quvvatli elektr tarmog‘i, uzluksiz elektr ta’minoti hamda shaxsiy isitish tizimi va issiq suv infratuzilmasi bilan ta’minlanadi.",
      icon: ShieldCheck,
      badge: "Xavfsiz va zamonaviy"
    },
    {
      category: 'infrastructure',
      question: "Hududda (13 gektarda) qanday qulayliklar bo‘ladi?",
      answer: "13 gektarlik yirik zamonaviy loyiha ichida: zamonaviy davlat maktabi, bolalar bog‘chasi, poliklinika, masjid, ochiq amfiteatr, bolalar o‘yingohlari, sport trenajyor maydonchalari, avtomobillar uchun keng yerosti avtoturargohi hamda 24/7 rejimda ishlovchi professional qo‘riqlash va videokuzatuv tizimi joylashadi.",
      icon: MapPin,
      badge: "13 Gektar infratuzilma"
    },
    {
      category: 'payment',
      question: "Xarid qilishda qanday hujjatlar imzolanadi?",
      answer: "Barcha xaridlar to‘liq qonuniy kuchga ega shartnoma asosida amalga oshiriladi. Shartnomada xonadonning topshirilish muddati, maydoni, qavati va narxi qat’iy kafolatlanadi. Hech qanday yashirin yoki qo‘shimcha to‘lovlar yo‘q.",
      icon: FileCheck2,
      badge: "Qonuniy kafolat"
    },
    {
      category: 'infrastructure',
      question: "Loyiha qayerda joylashgan va savdo ofisiga qanday boriladi?",
      answer: "Majmua Yangi Toshkent yo‘nalishida, Food City yirik savdo majmuasining to‘g‘ri ro‘parasida joylashgan. Qo‘yliq metro bekatidan avtomobilda 10 daqiqalik masofada. Sayt orqali tashrif buyurish uchun vaqt belgilasangiz, menejerimiz sizni ofisda kutib oladi.",
      icon: MapPin,
      badge: "Food City ro‘parasi"
    }
  ];

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(f => f.category === activeCategory);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-24 bg-[#f8fbff] relative overflow-hidden">
      
      {/* Orqa fon bezaklari */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Sarlavha qismi */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sky-200 text-sky-800 text-xs font-bold shadow-sm mb-4">
            <HelpCircle className="w-4 h-4 text-sky-600" />
            <span>Mijozlarimiz ko‘p so‘raydigan savollar</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Yangi Qo‘yliq-2 Bo‘yicha <span className="sky-gradient-text">Barcha Savollarga Javoblar</span>
          </h2>

          <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
            Qurilish muddatlari, to‘lov imtiyozlari va xonadonlar holati haqida barcha ochiq va shaffof ma’lumotlar bilan tanishing.
          </p>

          {/* Kategoriya filtrlari */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setOpenIndex(0); // Yangi filtr ochilganda birinchisi ochiq tursin
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'sky-gradient-bg text-white shadow-md shadow-sky-600/20 scale-105'
                    : 'bg-white text-slate-700 hover:bg-sky-50 border border-sky-100 hover:border-sky-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Akordeon Savol-Javoblar ro'yxati */}
        <div className="space-y-3.5 mb-12">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const Icon = faq.icon;

            return (
              <div
                key={index}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-white border-sky-300 shadow-lg shadow-sky-900/5' 
                    : 'bg-white/80 hover:bg-white border-slate-200/80 hover:border-sky-200 shadow-xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-5 sm:px-6 py-4.5 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-sky-600 text-white' : 'bg-sky-50 text-sky-700'
                    }`}>
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>

                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {faq.question}
                      </h3>
                      {faq.badge && (
                        <span className="inline-block mt-1 text-[11px] font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-100">
                          {faq.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-sky-100 text-sky-700' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-sky-50 animate-fade-in whitespace-pre-line bg-sky-50/20">
                    <p className="mt-2 text-slate-700 font-medium">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Qo'shimcha savol bormi bloki */}
        <div className="bg-gradient-to-r from-sky-600 to-sky-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-sky-600/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-sky-100 text-xs font-bold mb-2">
              <Bot className="w-3.5 h-3.5" />
              <span>24/7 Onlayn maslahatchi</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold mb-1">
              Boshqa savollaringiz bormi yoki individual hisob-kitob kerakmi?
            </h4>
            <p className="text-xs sm:text-sm text-sky-100">
              Telegram bot orqali AI maslahatchimizdan darhol javob oling yoki ofisga tashrif buyuring.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={PROJECT_DETAILS.location.telegramBot}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white text-sky-900 font-extrabold text-xs sm:text-sm hover:bg-sky-50 shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Bot className="w-4 h-4 text-sky-600" />
              <span>AI Botga savol berish</span>
            </a>

            <button
              onClick={() => onOpenBooking ? onOpenBooking({ title: "FAQ bo‘limidan konsultatsiya" }) : null}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-sky-800/80 hover:bg-sky-800 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Menejerga ariza</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
