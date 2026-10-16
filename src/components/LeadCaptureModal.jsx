import React, { useState, useEffect } from 'react';
import { 
  X, 
  CheckCircle, 
  User, 
  Phone, 
  Send, 
  ShieldCheck, 
  PhoneCall,
  Bot
} from 'lucide-react';
import { PROJECT_DETAILS } from '../data/apartments';
import { sendTelegramLead } from '../utils/crmWebhook';

export default function LeadCaptureModal({ isOpen, onClose, contextData }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+998 ');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsSuccess(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePhoneChange = (e) => {
    let val = e.target.value;
    if (!val.startsWith('+998')) {
      val = '+998 ';
    }
    setPhone(val);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Iltimos, ismingizni kiriting.");
      return;
    }
    if (phone.trim().length < 13) {
      alert("Iltimos, to‘liq telefon raqamingizni kiriting (+998 90 123 45 67).");
      return;
    }

    setIsSubmitting(true);
    try {
      await sendTelegramLead({
        name: name.trim(),
        phone: phone.trim(),
        project: "Yangi Qo‘yliq-2",
        rooms: contextData?.apartment?.rooms || 2,
        area: contextData?.apartment?.area || "54",
        budget: contextData?.title || "24 soatga bepul bron qilish",
        purpose: contextData?.apartment ? `${contextData.apartment.name} (${contextData.apartment.area} m²) bron qilish` : "Xonadon konsultatsiyasi",
        source: `Sayt modali (${contextData?.title || "Tezkor bron"})`
      });
    } catch (err) {
      console.error("Telegramga yuborishda xatolik:", err);
    } finally {
      setIsSubmitting(false);
      setIsSuccess(true);
    }
  };

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-white border border-sky-300 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-sky-50 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer border border-sky-200"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            
            <h3 className="text-2xl font-black text-slate-900 mb-2">
              So‘rovingiz qabul qilindi!
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-sm mx-auto leading-relaxed">
              Sotuv bo‘limi menejeri <strong>{PROJECT_DETAILS.location.managerName}</strong> 
              tez orada siz bilan bog‘lanadi va xonadonni 24 soatga bepul bron qilib beradi.
            </p>

            <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 mb-6 text-left text-xs space-y-1.5">
              <div className="flex justify-between text-slate-500">
                <span>So‘rov predmeti:</span>
                <span className="text-slate-900 font-bold">{contextData?.title || "Xonadon konsultatsiyasi"}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Mijoz:</span>
                <span className="text-emerald-700 font-bold">{name} ({phone})</span>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <a
                href={PROJECT_DETAILS.location.telegramBot}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl sky-gradient-bg text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md shadow-sky-600/20"
              >
                <Bot className="w-4 h-4 text-white" />
                <span>🤖 AI Maslahatchi botga o‘tish (@Vatan2333_bot)</span>
              </a>

              <a
                href={PROJECT_DETAILS.location.telegramChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-sky-50 hover:bg-sky-100 border border-sky-200 text-sky-700 font-bold text-xs flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Telegram rasmiy kanal: @yangiqoyliq_TJM</span>
              </a>

              <a
                href={PROJECT_DETAILS.location.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-pink-50 to-rose-50 hover:from-pink-100 hover:to-rose-100 border border-pink-200 text-pink-700 font-bold text-xs flex items-center justify-center gap-2"
              >
                <svg className="w-3.5 h-3.5 text-pink-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
                <span>Instagram: @yangi_qoyliqkotta_bozori (83.5K)</span>
              </a>

              <button
                onClick={onClose}
                className="w-full py-2.5 px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer mt-1"
              >
                Yopish
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-extrabold text-sky-700 uppercase tracking-widest block mb-1">
                24 soat bepul bron qilish
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                {contextData?.title ? contextData.title : "Xonadonni bron qilish yoki maslahat"}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Ma'lumotlaringizni qoldiring, menejerimiz narxlar va shartnoma shartlarini yuboradi.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Ism */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Ismingiz:
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Masalan: Sardor"
                    className="w-full pl-10 pr-4 py-3 bg-sky-50/50 border border-sky-200 rounded-xl text-slate-900 text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 transition-colors shadow-xs"
                  />
                </div>
              </div>

              {/* Telefon */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Telefon raqamingiz:
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="+998 90 123 45 67"
                    className="w-full pl-10 pr-4 py-3 bg-sky-50/50 border border-sky-200 rounded-xl text-slate-900 text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 transition-colors shadow-xs"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl sky-gradient-bg text-white font-extrabold text-sm hover:brightness-110 shadow-lg shadow-sky-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Yuborilmoqda...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-white" />
                      <span>24 soatga bepul bron qilish</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-500 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>To‘liq bepul. Hech qanday majburiyat yuklamaydi.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
