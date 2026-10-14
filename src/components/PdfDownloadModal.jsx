import React, { useState } from 'react';
import { 
  X, 
  Download, 
  FileText, 
  CheckCircle2, 
  Send, 
  Phone, 
  User, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  ExternalLink,
  Bot
} from 'lucide-react';
import { sendTelegramLead } from '../utils/crmWebhook';
import { PROJECT_DETAILS } from '../data/apartments';

export default function PdfDownloadModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+998 ');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [downloadStarted, setDownloadStarted] = useState(false);

  if (!isOpen) return null;

  // Telefon raqami formati
  const handlePhoneChange = (e) => {
    let val = e.target.value;
    if (!val.startsWith('+998 ')) {
      val = '+998 ';
    }
    setPhone(val);
  };

  // To'g'ridan-to'g'ri PDF ni yuklab olish
  const handleDirectDownload = () => {
    setDownloadStarted(true);
    const link = document.createElement('a');
    link.href = '/vatan-yangi-qoyliq-2-katalog.pdf';
    link.download = 'VATAN_Yangi_Qoyliq_2_Katalog.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // CRM va Telegramga anonim yuklab olish hodisasini yuborish
    try {
      sendTelegramLead({
        name: "Sayt mehmoni (To‘g‘ridan-to‘g‘ri yuklab oldi)",
        phone: "Ko‘rsatilmadi (Direct PDF)",
        rooms: "Barcha xonadonlar (1, 2, 3 xonali)",
        area: "22 — 77 m²",
        budget: "PDF taqdimot yuklab olindi",
        purpose: "Oilaviy ko‘rib chiqish uchun PDF katalog yuklab olindi",
        source: "PDF Katalog Yuklab Olish Modali"
      });
    } catch (e) {
      // ignore
    }
  };

  // Telegram/Menejer orqali telefon qoldirib yuklab olish
  const handleSubmitLead = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Iltimos, ismingizni kiriting!");
      return;
    }

    if (phone.trim().length < 13) {
      alert("Iltimos, to‘liq telefon raqamingizni kiriting!");
      return;
    }

    setIsSubmitting(true);

    try {
      await sendTelegramLead({
        name: name.trim(),
        phone: phone.trim(),
        rooms: "Barcha xonadonlar (PDF Katalog)",
        area: "22 — 77 m²",
        budget: "PDF Taqdimot so‘rovi",
        purpose: "Mijoz oilaviy maslahatlashish uchun to‘liq PDF narxlar katalogini yuklab oldi",
        source: "PDF Taqdimot Formasi"
      });

      // Avtomatik ravishda PDF faylni yuklash
      const link = document.createElement('a');
      link.href = '/vatan-yangi-qoyliq-2-katalog.pdf';
      link.download = 'VATAN_Yangi_Qoyliq_2_Katalog.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsSuccess(true);
      setDownloadStarted(true);
    } catch (err) {
      console.error("Xatolik:", err);
      // Xatolik bo'lsa ham PDF ni ochish
      window.open('/vatan-yangi-qoyliq-2-katalog.pdf', '_blank');
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-sky-200 text-slate-800 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Yopish tugmasi */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
          title="Yopish"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal sarlavhasi */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-500 to-blue-600 text-white flex items-center justify-center shadow-md shadow-sky-500/20 shrink-0">
            <Download className="w-6 h-6 animate-bounce" />
          </div>
          <div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 text-[11px] font-extrabold border border-sky-300">
              <Sparkles className="w-3 h-3 text-sky-600" />
              <span>Oilaviy ko‘rib chiqish uchun</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight mt-1">
              Barcha uylar va narxlar katalogini (PDF) yuklab olish
            </h3>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
          Ko‘pchilik xaridorlarimiz uyni oilasi (turmush o‘rtog‘i, ota-onasi) bilan maslahatlashib xarid qilishadi. 
          Loyiha reja-chizmalari, qavatlar bo‘yicha narxlar va 0% bo‘lib to‘lash shartlarini saqlab oling.
        </p>

        {/* PDF Ichidagi ma'lumotlar ro'yxati */}
        <div className="bg-[#f0f8ff] border border-sky-200 rounded-2xl p-4 mb-5 text-xs text-slate-700 space-y-2">
          <div className="font-bold text-sky-900 flex items-center gap-1.5 mb-1.5">
            <FileText className="w-4 h-4 text-sky-600" />
            <span>PDF Taqdimot ichida nimalar bor?</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span>Barcha 11 ta xonadon reja-chizmalari (22–77 m²)</span>
            </div>
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span>100% to‘lovdagi 33% chegirma narxlari</span>
            </div>
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span>30 oy 0% bo‘lib to‘lash oylik grafikasi</span>
            </div>
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span>70% tayyor ta’mir va infratuzilma faktlari</span>
            </div>
          </div>
        </div>

        {/* Muvaffaqiyatli xabar */}
        {isSuccess ? (
          <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-5 text-center space-y-3 animate-fade-in">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-base font-extrabold text-emerald-900">
              Rahmat! PDF Taqdimot yuklab olinmoqda...
            </h4>
            <p className="text-xs text-emerald-800 leading-relaxed">
              Agar yuklash avtomatik boshlanmagan bo‘lsa, quyidagi tugmani bosing:
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 pt-1">
              <a
                href="/vatan-yangi-qoyliq-2-katalog.pdf"
                download="VATAN_Yangi_Qoyliq_2_Katalog.pdf"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>PDF Faylni ochish / Yuklab olish</span>
              </a>
              <a
                href={PROJECT_DETAILS.location.telegramBot}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-sky-100 hover:bg-sky-200 text-sky-900 font-bold text-xs transition-all flex items-center justify-center gap-1.5"
              >
                <Bot className="w-4 h-4 text-sky-600" />
                <span>Telegram botga o‘tish</span>
              </a>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            
            {/* Tezkor yuklab olish tugmasi */}
            <button
              onClick={handleDirectDownload}
              className="w-full py-3.5 px-5 rounded-2xl sky-gradient-bg text-white font-black text-sm hover:brightness-110 shadow-lg shadow-sky-600/25 active:scale-98 transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
            >
              <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>PDF Taqdimotni to‘g‘ridan-to‘g‘ri yuklab olish (14 MB)</span>
            </button>

            {downloadStarted && (
              <p className="text-center text-[11px] text-emerald-700 font-bold">
                ✓ Yuklab olish boshlandi! Fayl yuklanmoqda...
              </p>
            )}

            {/* Yoki Telegram orqali olish */}
            <div className="relative py-2 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <span className="relative bg-white px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Yoki menejerdan qo‘shimcha maslahat olish:
              </span>
            </div>

            <form onSubmit={handleSubmitLead} className="space-y-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Ismingiz:
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Masalan: Sardor"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-sky-500 text-xs bg-slate-50 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Telefon raqamingiz (Telegram):
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={handlePhoneChange}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-sky-500 text-xs bg-slate-50 font-bold"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Send className="w-4 h-4 text-sky-400" />
                <span>{isSubmitting ? "Yuborilmoqda..." : "Telegramimga qabul qilish & Yuklab olish"}</span>
              </button>
            </form>

          </div>
        )}

        {/* Pastki eslatma */}
        <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Rasmiy PDF katalogi (2026)</span>
          </span>
          <span>100% bepul yuklab olish</span>
        </div>

      </div>
    </div>
  );
}
