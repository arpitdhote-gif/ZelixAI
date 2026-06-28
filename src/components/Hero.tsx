import { motion } from "motion/react";
import { ArrowRight, Bot, Compass, Award, Sparkles, CheckCircle } from "lucide-react";
import { LogoIcon } from "./LogoIcon";

interface HeroProps {
  onConsultationClick: () => void;
  onExploreProgramsClick: () => void;
}

export function Hero({ onConsultationClick, onExploreProgramsClick }: HeroProps) {
  return (
    <section id="hero-section" className="relative pt-32 pb-20 md:pt-36 md:pb-24 lg:pt-44 lg:pb-32 overflow-hidden bg-[#0F2B3C] transition-colors duration-300">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#8AE600]/5 blur-3xl" />
        <div className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full bg-[#8AE600]/5 blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-1/3 w-80 h-80 rounded-full bg-[#8AE600]/5 blur-3xl" />
        {/* Abstract grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:20px_20px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center text-center space-y-8">
        {/* Centered Content */}
        <div className="w-full flex flex-col items-center space-y-8 text-center">
          {/* Tag */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#8AE600]/10 border border-[#8AE600]/20 text-[#8AE600] font-mono text-[10px] font-bold uppercase tracking-widest shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#8AE600] animate-spin" style={{ animationDuration: "3s" }} />
            Central India's Premier AI Hub
          </motion.div>

          {/* Heading */}
          <div className="space-y-4 w-full flex flex-col items-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight text-center"
            >
              AI Training Nagpur — <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8AE600] to-teal-300">
                Transform Your Career
              </span><br />
              With Artificial Intelligence
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-slate-300 max-w-xl font-normal leading-relaxed text-center mx-auto"
            >
              Master Generative AI, RAG, and Agentic Systems with industry-focused training from the region's top experts.
            </motion.p>
          </div>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-2 justify-center items-center w-full max-w-md mx-auto"
          >
            <button
              id="hero-enroll-btn"
              onClick={onExploreProgramsClick}
              className="px-8 py-4 bg-[#8AE600] text-[#0F2B3C] font-bold uppercase text-xs tracking-wider rounded-md hover:bg-[#9cf01a] transition-all shadow-md hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(138,230,0,0.4)] flex items-center justify-center gap-2 cursor-pointer group w-full sm:w-auto"
            >
              Explore Programs
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              id="hero-consult-btn"
              onClick={onConsultationClick}
              className="px-8 py-4 border border-white/10 rounded-md text-xs font-bold uppercase tracking-wider text-white hover:bg-white/5 bg-white/5 transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer shadow-sm w-full sm:w-auto"
            >
              <Bot className="w-4 h-4 text-[#8AE600] animate-bounce" />
              Book Consultation
            </button>
          </motion.div>

          {/* Quick stats centered */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 pt-12 border-t border-white/5 w-full max-w-2xl mx-auto text-center"
          >
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-white">500+</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-400 font-mono mt-1">Students Trained</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-[#8AE600]">10+</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-400 font-mono mt-1">Live Projects</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-white">100%</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-400 font-mono mt-1">Placement Assist</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
