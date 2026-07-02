import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

/**
 * Logo Component - References actual logo from public/1.jpg
 */
export function HeaderLogo({ className = "h-12" }: { className?: string }) {
  return (
    <motion.img
      src="/1.jpg"
      alt="ZelixAI Logo"
      className={`${className} object-contain`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    />
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navLinks = [
    { label: "Programs", id: "programs-section" },
    { label: "Tech Stack", id: "ecosystem-section" },
    { label: "Testimonials", id: "testimonials-section" },
    { label: "Contact", id: "contact-section" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "border-b border-[#192153]/10 bg-white/80 shadow-sm backdrop-blur"
          : "bg-[#192153]/50 backdrop-blur"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 sm:px-8 lg:px-10 flex items-center justify-between">
        {/* Logo with fade-in animation */}
        <motion.a
          href="#hero-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center shrink-0"
          aria-label="ZelixAI Home"
        >
          <HeaderLogo className={isScrolled ? "h-9" : "h-12 md:h-10"} />
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-sm font-semibold tracking-wide transition-colors duration-200 ${
                isScrolled
                  ? "text-[#192153] hover:text-[#BA905E]"
                  : "text-white hover:text-[#B1D2FA]"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <motion.a
          href="#contact-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
            isScrolled
              ? "bg-[#BA905E] text-[#192153] hover:shadow-lg"
              : "bg-[#B1D2FA]/20 border border-[#B1D2FA]/40 text-white hover:bg-[#B1D2FA]/30"
          }`}
        >
          Enroll Now
        </motion.a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-full transition-colors ${
            isScrolled
              ? "text-[#192153] hover:bg-[#192153]/10"
              : "text-white hover:bg-white/10"
          }`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-[#192153]/10 bg-white/90 backdrop-blur"
          >
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left px-4 py-2 text-sm font-semibold text-[#192153] hover:text-[#BA905E] hover:bg-[#BA905E]/5 rounded-lg transition-all"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="#contact-section"
                className="block w-full text-center mt-4 px-4 py-2.5 rounded-full bg-[#BA905E] text-[#192153] text-xs font-semibold hover:shadow-lg transition-all"
              >
                Enroll Now
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
