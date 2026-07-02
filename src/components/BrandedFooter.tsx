import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

export function BrandedFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-[#192153]/10 bg-[#192153] px-6 py-16 text-[#eef4ff] sm:px-8 lg:px-10">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#B1D2FA]/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#BA905E]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Main footer content grid */}
        <div className="grid gap-12 md:grid-cols-4 mb-12">
          {/* Brand section */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <img src="/1.jpg" alt="ZelixAI" className="h-8 object-contain" />
              <span className="font-black text-lg tracking-wider">ZELIX AI</span>
            </div>
            <p className="text-sm leading-7 text-[#dfe8f7]">
              Premium AI training and consultancy for ambitious learners and enterprise teams.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#B1D2FA]">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Programs", href: "#programs-section" },
                { label: "Tech Stack", href: "#ecosystem-section" },
                { label: "Testimonials", href: "#testimonials-section" },
                { label: "Contact", href: "#contact-section" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#dfe8f7] hover:text-[#BA905E] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#B1D2FA]">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-[#dfe8f7]">
                <Phone className="w-4 h-4 text-[#BA905E]" />
                <a href="tel:+919168432121" className="hover:text-[#BA905E] transition-colors">
                  +91 9168 432 121
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-[#dfe8f7]">
                <Mail className="w-4 h-4 text-[#BA905E]" />
                <a href="mailto:hello@zelixai.in" className="hover:text-[#BA905E] transition-colors">
                  hello@zelixai.in
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-[#dfe8f7]">
                <MapPin className="w-4 h-4 text-[#BA905E] mt-0.5 shrink-0" />
                <span>
                  1st Floor, Plot 74<br />
                  Somalvada Layout, Nagpur<br />
                  Maharashtra 440025
                </span>
              </li>
            </ul>
          </div>

          {/* Social links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#B1D2FA]">Follow</h4>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/company/zelixai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#B1D2FA]/10 text-[#B1D2FA] hover:bg-[#BA905E] hover:text-[#192153] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/zelixai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#B1D2FA]/10 text-[#B1D2FA] hover:bg-[#BA905E] hover:text-[#192153] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          {/* Copyright */}
          <div className="text-center text-sm text-[#dfe8f7]">
            <p>
              © {currentYear} ZelixAI. All rights reserved. | Made for ambitious learners & enterprises.
            </p>
            <p className="mt-2 text-xs text-[#b1c7e6]">
              Building the future of AI education in Central India.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
