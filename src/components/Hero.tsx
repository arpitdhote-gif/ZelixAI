import { motion } from "motion/react";
import { ArrowRight, Bot, Sparkles } from "lucide-react";

interface HeroProps {
  onConsultationClick: () => void;
  onExploreProgramsClick: () => void;
}

export function Hero({ onConsultationClick, onExploreProgramsClick }: HeroProps) {
  return (
    <section id="hero-section" className="relative overflow-hidden bg-[#192153] px-6 py-24 text-white sm:px-8 lg:px-10 lg:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#B1D2FA]/20 blur-3xl" />
        <div className="absolute right-0 top-16 h-96 w-96 rounded-full bg-[#BA905E]/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[#B1D2FA]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#B1D2FA]/25 bg-white/10 px-4 py-2 text-[13px] font-semibold uppercase tracking-[0.35em] text-[#B1D2FA] sm:text-sm"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Central India’s Premier AI Hub
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl space-y-6"
        >
          <h1 className="text-4xl font-black leading-tight tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Transform your career with <span className="text-[#B1D2FA]">artificial intelligence</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-[#eef4ff] sm:text-xl">
            Master Generative AI, RAG, and Agentic Systems with premium training from seasoned practitioners and mentors.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <button
            id="hero-enroll-btn"
            onClick={onExploreProgramsClick}
            className="brand-button group gap-2 px-8 py-4 text-sm uppercase tracking-[0.2em]"
          >
            Explore Programs
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            id="hero-consult-btn"
            onClick={onConsultationClick}
            className="brand-outline gap-2 border-white/15 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.2em] text-white hover:bg-white/15"
          >
            <Bot className="h-4 w-4 text-[#BA905E]" />
            Book Consultation
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14 grid w-full max-w-3xl gap-4 rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-[0_20px_60px_-35px_rgba(0,0,0,0.6)] backdrop-blur md:grid-cols-3"
        >
          {[
            { value: "500+", label: "Students Trained" },
            { value: "10+", label: "Live Projects" },
            { value: "100%", label: "Placement + Interview Prep" },
          ].map((item) => (
            <div key={item.label} className="rounded-[1.25rem] border border-white/10 bg-[#192153]/70 p-4">
              <div className="text-3xl font-black text-white">{item.value}</div>
              <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#B1D2FA]">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
