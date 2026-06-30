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
  x: number;
  y: number;
  labelClass: string;
}

export function FutureOfAi() {
  const nodes: FeatureNode[] = [
    {
      icon: <BookOpen className="w-6 h-6 text-[#192153]" />,
      title: "Self Learning Hub",
      description: "Access our elite sandbox playgrounds and self-paced interactive modules.",
      x: 100,
      y: 340,
      labelClass: "absolute right-[80px] top-[-10px] text-right w-[180px]",
    },
    {
      icon: <Video className="w-6 h-6 text-[#192153]" />,
      title: "Live Tech Sessions",
      description: "Debug code in real-time during live daily workspace streams.",
      x: 150,
      y: 210,
      labelClass: "absolute right-[80px] top-[-10px] text-right w-[180px]",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-[#192153]" />,
      title: "Consultancy Hub",
      description: "Partner with top enterprises for hands-on production system workflows.",
      x: 260,
      y: 110,
      labelClass: "absolute right-[80px] top-[-15px] text-right w-[180px]",
    },
    {
      icon: <FolderGit className="w-6 h-6 text-[#192153]" />,
      title: "Enterprise Projects",
      description: "Deploy real-world RAG agents and production pipelines to cloud.",
      x: 400,
      y: 65,
      labelClass: "absolute left-1/2 -translate-x-1/2 bottom-[80px] text-center w-[220px]",
    },
    {
      icon: <Award className="w-6 h-6 text-[#192153]" />,
      title: "Direct Placements",
      description: "Gain fast-track access to regional and national corporate networks.",
      x: 540,
      y: 110,
      labelClass: "absolute left-[80px] top-[-15px] text-left w-[180px]",
    },
    {
      icon: <Users className="w-6 h-6 text-[#192153]" />,
      title: "1-on-1 Mentorship",
      description: "Receive personal technical guidance and weekly milestone reviews.",
      x: 650,
      y: 210,
      labelClass: "absolute left-[80px] top-[-10px] text-left w-[180px]",
    },
    {
      icon: <Code className="w-6 h-6 text-[#192153]" />,
      title: "AI Code Reviews",
      description: "Get direct feedback on your pipeline pull requests from masters.",
      x: 700,
      y: 340,
      labelClass: "absolute left-[80px] top-[-10px] text-left w-[180px]",
    },
  ];

  return (
    <section id="why-choose-us" className="bg-[#192153] text-white relative overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none[...]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#BA905E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl w-full px-6 pt-24 pb-20 relative z-10 flex flex-col items-center">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans"
          >
            What All You Get at Zelix
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#BA905E] font-mono text-sm uppercase tracking-widest font-bold"
          >
            Train on real AI systems, not classroom theory.
          </motion.p>
        </div>

        {/* DESKTOP INTERACTIVE DOME/ARCH */}
        <div className="hidden lg:block relative w-[800px] h-[440px] mx-auto mt-12 mb-8 select-none">
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 400" fill="none">
            <path
              d="M 100 340 A 300 275 0 0 1 700 340"
              stroke="#BA905E"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              className="opacity-60 filter drop-shadow-[0_0_8px_rgba(186,144,94,0.5)]"
            />
          </svg>

          <div className="absolute left-[400px] top-[255px] -translate-x-1/2 -translate-y-1/2 text-center w-[300px] space-y-2">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-1"
            >
              <h3 className="text-4xl font-black tracking-[0.25em] text-[#BA905E] font-sans">
                ZELIX AI
              </h3>
              <p className="text-slate-400 text-[10px] uppercase tracking-wider font-mono font-medium max-w-[240px] mx-auto leading-relaxed">
                Orchestrating applied intelligence &amp; careers.
              </p>
            </motion.div>
          </div>

          {nodes.map((node, index) => (
            <div
              key={node.title}
              className="absolute"
              style={{ left: `${node.x}px`, top: `${node.y}px` }}
            >
              <motion.div
                whileHover={{ scale: 1.15, boxShadow: "0 0 20px rgba(186,144,94,0.6)" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="w-14 h-14 rounded-full bg-white border-2 border-[#BA905E] flex items-center justify-center cursor-pointer shadow-[0_4px_15px_rgba(0,0,0,0.15)] relative z-20 group"
              >
                {node.icon}
              </motion.div>

              <div className={`${node.labelClass} pointer-events-none transition-all duration-300`}>
                <h4 className="text-xs font-black text-white uppercase tracking-wider mb-1">
                  {node.title}
                </h4>
                <p className="text-slate-400 text-[10px] leading-relaxed max-w-[170px] mx-auto lg:mx-0">
                  {node.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE GRACEFUL COLLAPSIBLE LIST */}
        <div className="lg:hidden w-full max-w-md mx-auto space-y-6">
          {nodes.map((node, index) => (
            <motion.div
              key={node.title}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#BA905E]/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-white border border-[#BA905E] flex items-center justify-center shrink-0 shadow-md">
                {node.icon}
              </div>

              <div className="space-y-1 text-left">
                <h4 className="text-sm font-bold text-white tracking-tight uppercase">
                  {node.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {node.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating CTA WhatsApp Widget */}
      <motion.a
        href="https://wa.me/919823612171"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3.5 rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.4)] flex items-center justify-center cursor-pointer group"
        aria-label="Chat on WhatsApp"
      >
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />
        
        <svg 
          className="w-6 h-6 fill-current relative z-10"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.9[...]" />
        </svg>

        <span className="absolute right-14 bg-slate-900 text-white text-[10px] font-mono uppercase tracking-wider font-bold py-1 px-2.5 rounded shadow-md pointer-events-none opacity-0 group-hover[...]"
        >
          Chat With Us
        </span>
      </motion.a>
    </section>
  );
}