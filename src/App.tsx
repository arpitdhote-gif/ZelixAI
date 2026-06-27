import { useState } from "react";
import { Hero } from "./components/Hero";
import { Programs } from "./components/Programs";
import { FutureOfAi } from "./components/FutureOfAi";
import { ProjectShowcase } from "./components/ProjectShowcase";
import { TechEcosystem } from "./components/TechEcosystem";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { LogoIcon } from "./components/LogoIcon";
import { LeadCaptureModal } from "./components/LeadCaptureModal";
import { Bot, Menu, X, ArrowUpRight, Compass, HelpCircle, Briefcase, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [preselectedCourse, setPreselectedCourse] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleEnrollRedirect = (courseName: string) => {
    setPreselectedCourse(courseName);
    const element = document.getElementById("contact-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleConsultationOpen = () => {
    const element = document.getElementById("contact-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "What You Get", href: "#why-choose-us" },
    { label: "Programs", href: "#programs-section" },
    { label: "Projects", href: "#projects-section" },
    { label: "Ecosystem", href: "#ecosystem-section" },
    { label: "Testimonials", href: "#testimonials-section" },
    { label: "Contact", href: "#contact-section" }
  ];

  return (
    <div className="min-h-screen bg-[#0F2B3C] text-white transition-colors duration-300 relative font-sans antialiased selection:bg-[#8AE600]/10 selection:text-[#8AE600]">
      
      {/* Floating Premium Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0F2B3C]/90 backdrop-filter backdrop-blur-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-12 h-12 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <LogoIcon className="w-12 h-12" />
            </div>
            <div className="text-left">
              <span className="font-sans font-bold text-lg tracking-wider text-white uppercase group-hover:text-[#8AE600] transition-colors">
                ZELIX AI
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-[11px] font-mono font-bold tracking-wider text-slate-300 hover:text-[#8AE600] transition-colors uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action button */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              id="header-apply-cta"
              onClick={() => handleEnrollRedirect("")}
              className="px-5 py-2.5 rounded-md font-mono font-bold text-xs tracking-wider uppercase text-[#0F2B3C] bg-[#8AE600] hover:bg-[#9cf01a] hover:scale-102 transition-all cursor-pointer flex items-center gap-1 shadow-md hover:shadow-[0_0_15px_rgba(138,230,0,0.3)]"
            >
              Apply Batch Spot
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-3.5 lg:hidden">
            <button
              id="mobile-hamburger-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md border border-white/10 bg-white/5 text-slate-300 hover:text-white cursor-pointer shadow-sm"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile slide-down menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-white/10 bg-[#0F2B3C]/95 overflow-hidden"
            >
              <div className="p-6 space-y-4 text-left">
                {navLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-mono font-bold text-slate-300 hover:text-[#8AE600] transition-colors uppercase py-2 border-b border-white/5"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  id="mobile-menu-apply-cta"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleEnrollRedirect("");
                  }}
                  className="w-full py-3.5 rounded-md text-center font-mono font-bold text-xs tracking-wider uppercase text-[#0F2B3C] bg-[#8AE600] hover:bg-[#9cf01a] cursor-pointer block"
                >
                  Apply Batch Spot
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Sections */}
      <main className="relative z-10">
        
        {/* Hero Section */}
        <Hero 
          onConsultationClick={handleConsultationOpen} 
          onExploreProgramsClick={() => {
            const el = document.getElementById("programs-section");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }} 
        />

        {/* What You Get Section */}
        <FutureOfAi />

        {/* Programs Section */}
        <Programs onEnrollClick={handleEnrollRedirect} />

        {/* Project Showcase Section */}
        <ProjectShowcase />

        {/* Tech Ecosystem Section */}
        <TechEcosystem />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Contact Admissions Section */}
        <Contact preselectedCourse={preselectedCourse} />

      </main>

      {/* Premium Footer with detailed Sitemaps */}
      <footer className="bg-[#0B1E2B] border-t border-white/5 text-slate-300 py-16 text-left relative z-10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <LogoIcon className="w-10 h-10" />
              <span className="font-sans font-bold text-base text-white tracking-wider uppercase">ZELIX AI</span>
            </div>
            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm">
              Central India's leading education and training ecosystem specializing in state-of-the-art Applied Intelligence, Machine Learning pipelines, and Agentic AI workflow automation models. Dharampeth Nagpur HQ.
            </p>
            <div className="text-[10px] font-mono text-slate-500">
              Approved corporate training provider &bull; Nagpur Tech Hub &bull; ISO 9001 Alignment
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest">Elite Core Programs</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#programs-section" className="hover:text-[#8AE600] transition-colors">Generative AI Specialization</a></li>
              <li><a href="#programs-section" className="hover:text-[#8AE600] transition-colors">Agentic AI &amp; LLM Workflows</a></li>
              <li><a href="#programs-section" className="hover:text-[#8AE600] transition-colors">Machine Learning</a></li>
              <li><a href="#programs-section" className="hover:text-[#8AE600] transition-colors">Data Science &amp; Business BI</a></li>
            </ul>
          </div>

          {/* Contact coordinates quick shortcuts */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest">Campus Inquiries</h4>
            <ul className="space-y-2 text-xs font-light">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8AE600] mt-1.5 shrink-0" />
                <span>Nagpur: 1st floor, Plot no. 74, Somalvada Layout, Jai Prakash Nagar, Somalwada, Nagpur, Maharashtra 440025</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8AE600] shrink-0" />
                <span>WhatsApp line: +91 98236 12171</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8AE600] shrink-0" />
                <span>Email: info@zelixai.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copy lines */}
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-slate-500">
          <div>
            &copy; 2026 Zelix AI. All educational rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#8AE600] transition-colors">Terms of Operations</a>
            <a href="#" className="hover:text-[#8AE600] transition-colors">Admissions Privacy</a>
          </div>
        </div>
      </footer>
      <LeadCaptureModal />
    </div>
  );
}
