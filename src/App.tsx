import { useState, useEffect } from "react";
import { Hero } from "./components/Hero";
import { Programs } from "./components/Programs";
import { FutureOfAi } from "./components/FutureOfAi";
import { ProjectShowcase } from "./components/ProjectShowcase";
import { TechEcosystem } from "./components/TechEcosystem";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { FaqSection } from "./components/FaqSection";
import { StructuredContent } from "./components/StructuredContent";
import { LogoIcon } from "./components/LogoIcon";
import { LeadCaptureModal } from "./components/LeadCaptureModal";
import { KnowledgeBase } from "./components/KnowledgeBase";
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
    { label: "Knowledge", href: "#knowledge-section" },
    { label: "Projects", href: "#projects-section" },
    { label: "Ecosystem", href: "#ecosystem-section" },
    { label: "Testimonials", href: "#testimonials-section" },
    { label: "Contact", href: "#contact-section" }
  ];

  const sectionMeta = [
    {
      id: "hero-section",
      title: "ZelixAI – AI Training Nagpur | Generative AI Course Nagpur | Corporate AI Training India",
      description: "ZelixAI provides AI training, generative AI courses, AI agents development, data science programs, corporate AI upskilling, and AI consulting services from Nagpur, Maharashtra.[...]"
    },
    {
      id: "why-choose-us",
      title: "AI Training Nagpur | ZelixAI",
      description: "ZelixAI delivers practical AI training in Nagpur with live projects, local campus support, and industry-ready consulting services."
    },
    {
      id: "programs-section",
      title: "AI Programs & Courses | ZelixAI Nagpur",
      description: "Explore ZelixAI programs including Generative AI, AI Agents, Data Science and Machine Learning training for students and professionals in Central India."
    },
    {
      id: "knowledge-section",
      title: "AI Knowledge Base | ZelixAI",
      description: "Read answer-engine optimized AI glossary, career guides, and Nagpur-focused resources from ZelixAI."
    },
    {
      id: "faq-section",
      title: "ZelixAI FAQs | AI Training Nagpur",
      description: "Find answers on ZelixAI course structure, placement support, corporate training, and local AI upskilling in Nagpur."
    },
    {
      id: "contact-section",
      title: "Contact ZelixAI Nagpur | AI Consultancy India",
      description: "Contact ZelixAI for AI training, corporate AI consulting, and data science programs in Nagpur, Maharashtra."
    }
  ];

  useEffect(() => {
    const updateMetadata = () => {
      const offset = window.innerHeight * 0.25;
      const activeSection = sectionMeta.find((section) => {
        const el = document.getElementById(section.id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= offset && rect.bottom > 0;
      }) || sectionMeta[0];

      document.title = activeSection.title;
      const descriptionMeta = document.querySelector('meta[name="description"]');
      if (descriptionMeta) {
        descriptionMeta.setAttribute("content", activeSection.description);
      }
    };

    updateMetadata();
    window.addEventListener("scroll", updateMetadata, { passive: true });
    return () => window.removeEventListener("scroll", updateMetadata);
  }, []);

  return (
    <div className="min-h-screen bg-[#192153] text-white transition-colors duration-300 relative font-sans antialiased selection:bg-[#BA905E]/10 selection:text-[#BA905E]">
      
      {/* Floating Premium Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#192153]/90 backdrop-filter backdrop-blur-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#hero-section" className="flex items-center gap-2.5 group" aria-label="Go to top of page">
            <div className="w-12 h-12 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <LogoIcon className="w-12 h-12" />
            </div>
            <div className="text-left">
              <span className="font-sans font-bold text-lg tracking-wider text-white uppercase group-hover:text-[#BA905E] transition-colors">
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
                className="text-[11px] font-mono font-bold tracking-wider text-slate-300 hover:text-[#BA905E] transition-colors uppercase"
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
              className="px-5 py-2.5 rounded-md font-mono font-bold text-xs tracking-wider uppercase text-[#192153] bg-[#BA905E] hover:bg-[#c9a370] hover:scale-102 transition-all cursor-pointer f[...]"
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
              className="lg:hidden border-t border-white/10 bg-[#192153]/95 overflow-hidden"
            >
              <div className="p-6 space-y-4 text-left">
                {navLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-mono font-bold text-slate-300 hover:text-[#BA905E] transition-colors uppercase py-2 border-b border-white/5"
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
                  className="w-full py-3.5 rounded-md text-center font-mono font-bold text-xs tracking-wider uppercase text-[#192153] bg-[#BA905E] hover:bg-[#c9a370] cursor-pointer block"
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

        {/* Breadcrumb navigation for on-page structure */}
        <div className="max-w-7xl mx-auto px-6 pt-6">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-slate-400">
            <a href="#hero-section" className="hover:text-[#BA905E]">Home</a>
            <span aria-hidden="true">/</span>
            <a href="#why-choose-us" className="hover:text-[#BA905E]">Why Choose Us</a>
            <span aria-hidden="true">/</span>
            <a href="#programs-section" className="hover:text-[#BA905E]">Programs</a>
            <span aria-hidden="true">/</span>
            <a href="#knowledge-section" className="hover:text-[#BA905E]">Knowledge Base</a>
            <span aria-hidden="true">/</span>
            <a href="#contact-section" className="hover:text-[#BA905E]">Contact</a>
          </nav>
        </div>

        {/* What You Get Section */}
        <FutureOfAi />

        {/* Programs Section */}
        <Programs onEnrollClick={handleEnrollRedirect} />

        {/* Structured Content Section */}
        <StructuredContent />

        {/* Course FAQ Section */}
        <FaqSection />

        {/* Tech Ecosystem Section */}
        <TechEcosystem />

        {/* Project Showcase Section */}
        <ProjectShowcase />

        {/* Knowledge Base Section */}
        <KnowledgeBase />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Contact Admissions Section */}
        <Contact preselectedCourse={preselectedCourse} />

      </main>

      {/* Premium Footer with detailed Sitemaps */}
      <footer className="bg-[#0F1B2E] border-t border-white/5 text-slate-300 py-16 text-left relative z-10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <LogoIcon className="w-10 h-10" />
              <span className="font-sans font-bold text-base text-white tracking-wider uppercase">ZELIX AI</span>
            </div>
            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm">
              Practical AI education and consultancy for students, professionals, startups, and organizations looking to build real-world AI skills and solutions.
            </p>
            <div className="text-[10px] font-mono text-slate-500">
              Approved corporate training provider • Nagpur Tech Hub • ISO 9001 Alignment
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest">Elite Core Programs</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#programs-section" className="hover:text-[#BA905E] transition-colors">Generative AI Specialization</a></li>
              <li><a href="#programs-section" className="hover:text-[#BA905E] transition-colors">Agentic AI &amp; LLM Workflows</a></li>
              <li><a href="#programs-section" className="hover:text-[#BA905E] transition-colors">Machine Learning</a></li>
              <li><a href="#programs-section" className="hover:text-[#BA905E] transition-colors">Data Science &amp; Business BI</a></li>
            </ul>
          </div>

          {/* Contact coordinates quick shortcuts */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest">Campus Inquiries</h4>
            <ul className="space-y-2 text-xs font-light">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BA905E] mt-1.5 shrink-0" />
                <span>Nagpur: 1st floor, Plot no. 74, Somalvada Layout, Jai Prakash Nagar, Somalwada, Nagpur, Maharashtra 440025</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BA905E] shrink-0" />
                <span>WhatsApp line: +91 98236 12171</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BA905E] shrink-0" />
                <span>Email: info@zelixai.in</span>
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
            <a href="#" className="hover:text-[#BA905E] transition-colors">Terms of Operations</a>
            <a href="#" className="hover:text-[#BA905E] transition-colors">Admissions Privacy</a>
          </div>
        </div>
      </footer>
      <LeadCaptureModal />
    </div>
  );
}