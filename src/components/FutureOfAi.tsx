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
    <section id="why-choose-us" className="bg-[#0F2B3C] text-white relative overflow-hidden flex flex-col items-center">
      
      {/* Decorative subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#8AE600]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl w-full px-6 pt-24 pb-20 relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
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
            className="text-[#8AE600] font-mono text-sm uppercase tracking-widest font-bold"
          >
            Train on real AI systems, not classroom theory.
          </motion.p>
        </div>

        {/* DESKTOP INTERACTIVE DOME/ARCH */}
        <div className="hidden lg:block relative w-[800px] h-[440px] mx-auto mt-12 mb-8 select-none">
          
          {/* Semicircular Glowing Arch Path */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 400" fill="none">
            <path
              d="M 100 340 A 300 275 0 0 1 700 340"
              stroke="#8AE600"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              className="opacity-60 filter drop-shadow-[0_0_8px_rgba(138,230,0,0.5)]"
            />
          </svg>

          {/* Central Hollow Logo & Tagline */}
          <div className="absolute left-[400px] top-[255px] -translate-x-1/2 -translate-y-1/2 text-center w-[300px] space-y-2">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-1"
            >
              <h3 className="text-4xl font-black tracking-[0.25em] text-[#8AE600] font-sans">
                ZELIX AI
              </h3>
              <p className="text-slate-400 text-[10px] uppercase tracking-wider font-mono font-medium max-w-[240px] mx-auto leading-relaxed">
                Orchestrating applied intelligence &amp; careers.
              </p>
            </motion.div>
          </div>

          {/* Feature Nodes Placement */}
          {nodes.map((node, index) => (
            <div
              key={node.title}
              className="absolute"
              style={{ left: `${node.x}px`, top: `${node.y}px` }}
            >
              {/* White badge with electric green border */}
              <motion.div
                whileHover={{ scale: 1.15, boxShadow: "0 0 20px rgba(138,230,0,0.6)" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="w-14 h-14 rounded-full bg-white border-2 border-[#8AE600] flex items-center justify-center cursor-pointer shadow-[0_4px_15px_rgba(0,0,0,0.15)] relative z-20 group"
              >
                {node.icon}
              </motion.div>

              {/* Connected Labels */}
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
              className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#8AE600]/30 transition-all duration-300"
            >
              {/* White Circle Badge */}
              <div className="w-12 h-12 rounded-full bg-white border border-[#8AE600] flex items-center justify-center shrink-0 shadow-md">
                {node.icon}
              </div>

              {/* Text service details */}
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
        {/* Pulsing indicator background */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />
        
        {/* Real official style clean WhatsApp icon representation */}
        <svg 
          className="w-6 h-6 fill-current relative z-10"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.528 2.017 14.077.99 11.5.99c-5.441 0-9.87 4.372-9.874 9.802-.001 1.73.469 3.414 1.36 4.916l-.993 3.629 3.734-.964zm13.757-7.74c-.298-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        </svg>

        {/* Hover speech bubble */}
        <span className="absolute right-14 bg-slate-900 text-white text-[10px] font-mono uppercase tracking-wider font-bold py-1 px-2.5 rounded shadow-md pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-800">
          Chat With Us
        </span>
      </motion.a>

    </section>
  );
}
