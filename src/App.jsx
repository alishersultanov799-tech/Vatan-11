import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CompanyTrust from './components/CompanyTrust';
import ProjectAdvantages from './components/ProjectAdvantages';
import ComplexGallery from './components/ComplexGallery';
import Catalog from './components/Catalog';
import ProjectRoadmap from './components/ProjectRoadmap';
import LocationMap from './components/LocationMap';
import VisitBookingSection from './components/VisitBookingSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import LeadCaptureModal from './components/LeadCaptureModal';
import CrmDashboard from './components/CrmDashboard';
import PdfDownloadModal from './components/PdfDownloadModal';
import { Bot, Send, ArrowUp } from 'lucide-react';
import { PROJECT_DETAILS } from './data/apartments';

export default function App() {
  const [viewMode, setViewMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      const path = window.location.pathname;
      return (hash === '#crm' || path === '/crm' || path === '/admin') ? 'crm' : 'site';
    }
    return 'site';
  });
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [modalContext, setModalContext] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // URL Hash orqali CRM yoki PDF ga o'tishni kuzatish
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#crm') {
        setViewMode('crm');
      } else if (window.location.hash === '#pdf') {
        setIsPdfModalOpen(true);
      }
    };
    if (typeof window !== 'undefined' && window.location.hash === '#pdf') {
      setIsPdfModalOpen(true);
    }
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Smooth scroll handler
  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Open lead modal with custom payload context
  const handleOpenBooking = (context = null) => {
    setModalContext(context || { title: "24 soatga bepul bron qilish" });
    setIsBookingModalOpen(true);
  };

  // Track window scroll for scroll-to-top button
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenCrm = () => {
    setViewMode('crm');
    window.location.hash = 'crm';
  };

  if (viewMode === 'crm') {
    return (
      <CrmDashboard 
        onClose={() => {
          setViewMode('site');
          if (window.location.hash === '#crm') {
            window.location.hash = '';
          }
        }}
        onOpenSite={() => {
          setViewMode('site');
          if (window.location.hash === '#crm') {
            window.location.hash = '';
          }
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#f0f7ff] text-slate-800 font-sans selection:bg-sky-500 selection:text-white pb-16 sm:pb-0">
      
      {/* 1. Yuqori navigatsiya paneli (Logo va bo‘limlar) */}
      <Navbar 
        onOpenBooking={() => handleOpenBooking({ title: "24 soatga bepul bron qilish" })} 
        onScrollTo={scrollToSection} 
        onOpenCrm={handleOpenCrm}
        onOpenPdfModal={() => setIsPdfModalOpen(true)}
      />

      {/* 2. Asosiy taklif (Hero bloki) */}
      <Hero 
        onOpenBooking={() => handleOpenBooking({ title: "Yangi Qo‘yliq-2 bo‘yicha maslahat" })} 
        onScrollTo={scrollToSection} 
        onOpenPdfModal={() => setIsPdfModalOpen(true)}
      />

      {/* 3. Kompaniya haqida va Ishonch bloki (13 yillik tajriba, 6 ta loyiha) */}
      <CompanyTrust 
        onOpenBooking={() => handleOpenBooking({ title: "Qurilish kompaniyasi bo‘yicha konsultatsiya" })} 
      />

      {/* 4. Loyiha afzalliklari (Comfort class, 70% tayyor, infratuzilma) */}
      <ProjectAdvantages 
        onOpenBooking={() => handleOpenBooking({ title: "Loyiha afzalliklari va xarid qilish" })} 
        onScrollTo={scrollToSection} 
      />

      {/* 5. Ko‘p qavatli uylarimiz qiyofasi (Uy rasmlari galereyasi) */}
      <ComplexGallery 
        onScrollTo={scrollToSection}
      />

      {/* 6. Xonadonlar rejasi va narxlar katalogi (1, 2, 3 xonali arxitektura chizmalari) */}
      <Catalog 
        onBookApartment={(apt) => handleOpenBooking({
          type: 'apartment_booking',
          apartment: apt,
          title: apt.title || `${apt.name} (${apt.area} m²) — 24 soatga bepul bron qilish`
        })}
        onOpenPdfModal={() => setIsPdfModalOpen(true)}
      />

      {/* 7. Davom etayotgan loyihalar grafigi (Roadmap timeline) */}
      <ProjectRoadmap 
        onOpenBooking={handleOpenBooking}
      />

      {/* 8. Savdo ofisiga yoki Qurilish maydoniga Tashrifni bron qilish */}
      <VisitBookingSection />

      {/* 9. Joylashuv va Interaktiv xarita */}
      <LocationMap />

      {/* 10. Ko‘p beriladigan savollar (FAQ / Savol-Javob) */}
      <FAQSection 
        onOpenBooking={handleOpenBooking}
      />

      {/* 11. Rasmiy konsultatsiya va narxlar ro‘yxatini olish */}
      <ContactSection />

      {/* 12. Futer (Kompaniya ma’lumotlari, rekvizitlar) */}
      <Footer 
        onScrollTo={scrollToSection}
        onOpenBooking={() => handleOpenBooking({ title: "Menejerdan konsultatsiya va ariza" })}
        onOpenCrm={handleOpenCrm}
      />

      {/* Desktop Suzuvchi Tezkor Tugmalar (Telegram & AI Bot) */}
      <div className="hidden sm:flex fixed bottom-8 right-8 z-40 flex-col gap-3">
        {/* Telegram kanal tugmasi */}
        <a 
          href={PROJECT_DETAILS.location.telegramChannel}
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 rounded-2xl bg-[#229ED9] text-white p-3.5 shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group relative border border-white/20"
          title="Telegram kanalimizga a'zo bo'ling"
        >
          <Send className="w-6 h-6" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-slate-900/95 text-white text-xs font-semibold whitespace-nowrap shadow-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Telegram kanal (@yangiqoyliq_TJM)
          </span>
        </a>

        {/* Instagram sahifa tugmasi */}
        <a 
          href={PROJECT_DETAILS.location.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white p-3.5 shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group relative border border-white/20"
          title="Instagram sahifamiz: @yangi_qoyliqkotta_bozori"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
          </svg>
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-slate-900/95 text-white text-xs font-semibold whitespace-nowrap shadow-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Instagram (@yangi_qoyliqkotta_bozori • 83.5K)
          </span>
        </a>

        {/* AI Maslahatchi Telegram Bot tugmasi */}
        <a 
          href={PROJECT_DETAILS.location.telegramBot}
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-sky-600 to-blue-500 text-white p-3.5 shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group relative border border-white/20 animate-pulse"
          title="AI Maslahatchi bot (@Vatan2333_bot)"
        >
          <Bot className="w-6 h-6" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-slate-900/95 text-white text-xs font-semibold whitespace-nowrap shadow-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            AI Maslahatchi (@Vatan2333_bot)
          </span>
        </a>

        {/* Yuqoriga qaytish tugmasi */}
        {showScrollTop && (
          <button 
            onClick={() => scrollToSection('hero')}
            className="w-11 h-11 rounded-2xl bg-white text-slate-700 hover:text-sky-600 hover:bg-sky-50 p-2.5 shadow-xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center border border-sky-200 self-center"
            title="Yuqoriga chiqish"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Mobil Qotirilgan Pastki Panel (Mobile Sticky CTA) */}
      <MobileStickyBar 
        onScrollTo={scrollToSection}
        onOpenBooking={() => handleOpenBooking({ title: "24 soatga bepul bron qilish" })}
      />

      {/* 24 Soatga Bepul Bron qilish Modali */}
      <LeadCaptureModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        contextData={modalContext}
      />

      {/* 5. 📥 PDF Taqdimotni (Prezentatsiya) yuklab olish modali */}
      <PdfDownloadModal 
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
      />
    </div>
  );
}
