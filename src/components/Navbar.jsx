import React, { useState } from 'react';
import { Phone, Menu, X, Send, Bot } from 'lucide-react';
import { PROJECT_DETAILS } from '../data/apartments';

export default function Navbar({ onOpenBooking, onScrollTo }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Bosh sahifa", target: "hero" },
    { label: "Kompaniya", target: "company-trust" },
    { label: "Afzalliklar", target: "advantages" },
    { label: "Uylar qiyofasi", target: "gallery" },
    { label: "Xonadonlar & Narxlar", target: "catalog" },
    { label: "Joylashuv", target: "location" },
    { label: "Bog‘lanish", target: "contact" },
  ];

  const handleNavClick = (target) => {
    onScrollTo(target);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/92 backdrop-blur-xl border-b border-sky-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Title */}
          <div 
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="h-12 w-12 rounded-2xl bg-white border border-sky-200 flex items-center justify-center p-1 shadow-md group-hover:scale-105 transition-transform overflow-hidden shrink-0">
              <img 
                src={PROJECT_DETAILS.brandLogo} 
                alt="VATAN Qurilish Kompaniyasi" 
                className="h-full w-full object-contain"
                onError={(e) => {
                  e.target.src = '/vatan.png';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-sky-950 flex items-center gap-1.5 leading-none">
                VATAN
                <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-sky-100 text-sky-700 border border-sky-200">
                  Comfort
                </span>
              </span>
              <span className="text-[11px] text-slate-500 font-medium tracking-wide mt-1">
                Yangi Qo‘yliq-2 majmuasi
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleNavClick(link.target)}
                className="text-xs font-semibold text-slate-600 hover:text-sky-600 transition-colors cursor-pointer py-1"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social, Call & CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* AI Bot Maslahatchi Button */}
            <a 
              href={PROJECT_DETAILS.location.telegramBot}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold text-sky-800 hover:text-sky-950 transition-all bg-sky-50 hover:bg-sky-100 border border-sky-300 px-3 py-2 rounded-xl shadow-xs"
              title="AI Maslahatchi Telegram Bot: @Vatan2333_bot"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <Bot className="w-3.5 h-3.5 text-sky-600" />
              <span>AI Maslahat</span>
            </a>

            {/* Consultation CTA */}
            <button
              onClick={() => onOpenBooking({ title: "Menejer bilan maslahat va ariza", source: "Navbar" })}
              className="px-4 py-2 rounded-xl sky-gradient-bg text-white font-extrabold text-xs hover:brightness-110 shadow-md shadow-sky-500/20 transition-all cursor-pointer"
            >
              Ariza qoldirish
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => onOpenBooking({ title: "Ariza qoldirish", source: "Mobile Navbar" })}
              className="px-3 py-1.5 rounded-xl sky-gradient-bg text-white text-xs font-bold shadow-xs cursor-pointer"
            >
              Ariza
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-white border border-sky-200 text-slate-700 hover:text-sky-600 shadow-xs cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/98 border-b border-sky-100 px-4 pt-3 pb-6 animate-fade-in shadow-xl">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleNavClick(link.target)}
                className="text-left text-sm font-semibold text-slate-700 hover:text-sky-600 hover:bg-sky-50 p-2.5 rounded-xl transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-sky-100 flex flex-col gap-2.5">
            <a 
              href={PROJECT_DETAILS.location.telegramBot}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-sky-50 to-sky-100 border-2 border-sky-300 text-center text-xs font-black text-sky-950 flex items-center justify-center gap-2 shadow-xs"
            >
              <Bot className="w-4 h-4 text-sky-600" />
              <span>🤖 AI Maslahatchi: @Vatan2333_bot</span>
            </a>

            <a 
              href={PROJECT_DETAILS.location.telegramChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-sky-50 border border-sky-200 text-center text-xs font-bold text-sky-600 flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Telegram rasmiy kanal: @yangiqoyliq_TJM</span>
            </a>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking({ title: "Ariza qoldirish", source: "Mobile Navbar" });
              }}
              className="w-full py-3 px-4 rounded-xl sky-gradient-bg text-white font-extrabold text-xs text-center shadow-md cursor-pointer"
            >
              Ariza qoldirish
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
