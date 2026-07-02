import { useEffect, useState } from "react";
import { Hero } from "./components/Hero";
import { Programs } from "./components/Programs";
import { TechEcosystem } from "./components/TechEcosystem";
import { FaqSection } from "./components/FaqSection";
import { Testimonials } from "./components/Testimonials";
import { KnowledgeBase } from "./components/KnowledgeBase";
import { ContactEnhanced } from "./components/ContactEnhanced";
import { LeadCaptureModal } from "./components/LeadCaptureModal";
import { WhatYouGet } from "./components/WhatYouGet";

export default function App() {
  const [preselectedCourse, setPreselectedCourse] = useState("");
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLeadModalOpen(true), 10000);
    return () => window.clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleConsultationClick = () => {
    setIsLeadModalOpen(true);
  };

  const handleExploreProgramsClick = () => {
    scrollToSection("programs-section");
  };

  const handleEnrollClick = (courseName: string) => {
    setPreselectedCourse(courseName);
    setIsLeadModalOpen(true);
    scrollToSection("contact-section");
  };

  return (
    <main className="min-h-screen bg-[#FFFAEE] text-[#192153]">
      <Hero
        onConsultationClick={handleConsultationClick}
        onExploreProgramsClick={handleExploreProgramsClick}
      />
      <WhatYouGet />
      <Programs onEnrollClick={handleEnrollClick} />
      <TechEcosystem />
      <FaqSection />
      <Testimonials />
      <KnowledgeBase />
      <ContactEnhanced preselectedCourse={preselectedCourse} />
      <LeadCaptureModal isOpen={isLeadModalOpen} onClose={() => setIsLeadModalOpen(false)} initialCourse={preselectedCourse} />
      <footer className="relative overflow-hidden border-t border-white/10 bg-[#192153] px-6 py-14 text-center text-sm text-[#eef4ff] sm:px-8 lg:px-10">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#B1D2FA]/20 blur-3xl" />
          <div className="absolute right-0 top-16 h-96 w-96 rounded-full bg-[#BA905E]/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[#B1D2FA]/10 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl">
          <p>© 2026 ZelixAI. Premium AI training and consultancy for ambitious learners and teams.</p>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/917522915151"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex cursor-pointer items-center justify-center rounded-full bg-[#25D366] p-3.5 text-white shadow-[0_8px_24px_rgba(37,211,102,0.4)] group hover:scale-105 active:scale-95 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <div className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />
        <svg className="relative z-10 h-6 w-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.528 2.017 14.077.99 11.5.99c-5.441 0-9.87 4.372-9.874 9.802-.001 1.73.469 3.414 1.36 4.916l-.993 3.629 3.734-.964zm13.757-7.74c-.298-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        </svg>
        <span className="pointer-events-none absolute right-14 whitespace-nowrap rounded border border-slate-800 bg-slate-900 px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-white opacity-0 transition-opacity group-hover:opacity-100">
          Chat With Us
        </span>
      </a>
    </main>
  );
}
