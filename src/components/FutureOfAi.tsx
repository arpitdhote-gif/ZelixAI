import React from "react";
import { motion } from "motion/react";
import { 
  BookOpen, 
  Video, 
  Briefcase, 
  FolderGit, 
  Award, 
  Users, 
  Code,
  MessageSquare
} from "lucide-react";

interface FeatureNode {
  icon: React.ReactNode;
  title: string;
  description: string;
  // Position coordinates for the 800x400 desktop container
  x: number;
  y: number;
  // Custom alignment for desktop labels to prevent overlap
  labelClass: string;
}

export function FutureOfAi() {
  const nodes: FeatureNode[] = [
    {
      icon: <BookOpen className="w-6 h-6 text-[#0F2B3C]" />,
      title: "Self Learning Hub",
      description: "Access our elite sandbox playgrounds and self-paced interactive modules.",
      x: 100,
      y: 340,
      labelClass: "absolute right-[80px] top-[-10px] text-right w-[180px]",
    },
    {
      icon: <Video className="w-6 h-6 text-[#0F2B3C]" />,
      title: "Live Tech Sessions",
      description: "Debug code in real-time during live daily workspace streams.",
      x: 150,
      y: 210,
      labelClass: "absolute right-[80px] top-[-10px] text-right w-[180px]",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-[#0F2B3C]" />,
      title: "Consultancy Hub",
      description: "Partner with top enterprises for hands-on production system workflows.",
      x: 260,
      y: 110,
      labelClass: "absolute right-[80px] top-[-15px] text-right w-[180px]",
    },
    {
      icon: <FolderGit className="w-6 h-6 text-[#0F2B3C]" />,
      title: "Enterprise Projects",
      description: "Deploy real-world RAG agents and production pipelines to cloud.",
      x: 400,
      y: 65,
      labelClass: "absolute left-1/2 -translate-x-1/2 bottom-[80px] text-center w-[220px]",
    },
    {
      icon: <Award className="w-6 h-6 text-[#0F2B3C]" />,
      title: "Direct Placements",
      description: "Gain fast-track access to regional and national corporate networks.",
      x: 540,
      y: 110,
      labelClass: "absolute left-[80px] top-[-15px] text-left w-[180px]",
    },
    {
      icon: <Users className="w-6 h-6 text-[#0F2B3C]" />,
      title: "1-on-1 Mentorship",
      description: "Receive personal technical guidance and weekly milestone reviews.",
      x: 650,
      y: 210,
      labelClass: "absolute left-[80px] top-[-10px] text-left w-[180px]",
    },
    {
      icon: <Code className="w-6 h-6 text-[#0F2B3C]" />,
      title: "AI Code Reviews",
      description: "Get direct feedback on your pipeline pull requests from masters.",
      x: 700,
      y: 340,
      labelClass: "absolute left-[80px] top-[-10px] text-left w-[180px]",
    },
  ];

  return (
    <section id="why-choose-us" className="relative flex flex-col items-center overflow-hidden bg-[#FFFAEE] px-6 py-24 text-[#192153] sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/4 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-[#B1D2FA]/30 blur-3xl" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#BA905E]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#B1D2FA]/20 blur-3xl" />
      </div>

      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center pb-20 pt-0">
        <div className="mx-auto mb-16 max-w-3xl text-center space-y-5">
          <div className="section-pill mx-auto">Why learners choose ZelixAI</div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-heading"
          >
            What all you get at Zelix
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-copy"
          >
            Train on real AI systems, not classroom theory.
          </motion.p>
        </div>

        <div className="relative mx-auto mt-4 hidden w-full max-w-6xl lg:block">
          <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 800 420" fill="none">
            <path
              d="M 95 330 A 320 275 0 0 1 705 330"
              stroke="#BA905E"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              className="opacity-70"
            />
          </svg>

          <div className="absolute right-[-0.5rem] top-[-3.25rem] z-20 hidden xl:block">
            <div className="rounded-[2.5rem] border border-[#192153]/10 bg-white/80 p-5 shadow-[0_20px_45px_-30px_rgba(25,33,83,0.28)] backdrop-blur">
              <div className="relative flex h-56 w-72 items-center justify-center">
                <svg viewBox="0 0 320 220" className="h-56 w-72">
                  <path
                    d="M 28 174 A 132 132 0 0 1 292 174"
                    fill="none"
                    stroke="#192153"
                    strokeWidth="16"
                    strokeLinecap="round"
                    opacity="0.14"
                  />
                  <path
                    d="M 28 174 A 132 132 0 0 1 292 174"
                    fill="none"
                    stroke="#BA905E"
                    strokeWidth="16"
                    strokeLinecap="round"
                    strokeDasharray="420"
                    strokeDashoffset="92"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#31406b]">Rated</span>
                  <span className="mt-2 text-4xl font-black tracking-tight text-[#192153]">4.9/5</span>
                  <span className="mt-2 text-[10px] uppercase tracking-[0.25em] text-[#BA905E]">By 500+ learners</span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute left-[400px] top-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 space-y-2 text-center">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-1"
            >
              <h3 className="text-4xl font-black tracking-[0.25em] text-[#192153]">ZELIX AI</h3>
              <p className="mx-auto max-w-[240px] text-[10px] font-medium uppercase tracking-wider leading-relaxed text-[#31406b]">
                Orchestrating applied intelligence &amp; careers.
              </p>
            </motion.div>
          </div>

          {nodes.map((node) => (
            <div
              key={node.title}
              className="absolute"
              style={{ left: `${node.x}px`, top: `${node.y}px` }}
            >
              <motion.div
                whileHover={{ scale: 1.15, boxShadow: "0 0 20px rgba(186,144,94,0.25)" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="group relative z-20 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border-2 border-[#BA905E] bg-[#FFFAEE] shadow-[0_4px_15px_rgba(25,33,83,0.12)]"
              >
                {node.icon}
              </motion.div>

              <div className={`${node.labelClass} pointer-events-none transition-all duration-300`}>
                <h4 className="mb-1 text-sm font-black uppercase tracking-wider text-[#192153]">
                  {node.title}
                </h4>
                <p className="mx-auto max-w-[190px] text-[13px] leading-relaxed text-[#31406b] lg:mx-0">
                  {node.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto w-full max-w-md space-y-6 lg:hidden">
          {nodes.map((node, index) => (
            <motion.div
              key={node.title}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-start gap-4 rounded-[1.25rem] border border-[#192153]/10 bg-white/80 p-5 shadow-[0_20px_45px_-30px_rgba(25,33,83,0.28)] transition-all duration-300"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#BA905E] bg-[#FFFAEE] shadow-md">
                {node.icon}
              </div>

              <div className="space-y-1 text-left">
                <h4 className="text-[0.95rem] font-black uppercase tracking-tight text-[#192153]">
                  {node.title}
                </h4>
                <p className="text-sm font-medium leading-relaxed text-[#31406b]">
                  {node.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.a
        href="https://wa.me/917522915151"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 flex cursor-pointer items-center justify-center rounded-full bg-[#25D366] p-3.5 text-white shadow-[0_8px_24px_rgba(37,211,102,0.4)] group"
        aria-label="Chat on WhatsApp"
      >
        <div className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />

        <svg
          className="relative z-10 h-6 w-6 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.528 2.017 14.077.99 11.5.99c-5.441 0-9.87 4.372-9.874 9.802-.001 1.73.469 3.414 1.36 4.916l-.993 3.629 3.734-.964zm13.757-7.74c-.298-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        </svg>

        <span className="pointer-events-none absolute right-14 whitespace-nowrap rounded border border-slate-800 bg-slate-900 px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-white opacity-0 transition-opacity group-hover:opacity-100">
          Chat With Us
        </span>
      </motion.a>
    </section>
  );
}
