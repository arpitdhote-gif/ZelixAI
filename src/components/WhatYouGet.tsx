import { Target, Users, BookOpen, Trophy, Sparkles, Briefcase } from "lucide-react";
import { motion } from "motion/react";
import { SectionWave } from "./SectionWave";

export function WhatYouGet() {
  const benefits = [
    {
      icon: <Target className="w-6 h-6 text-[#BA905E] transition-colors duration-500" />,
      title: "Practical Training",
      description: "Hands-on projects and real-world applications.",
    },
    {
      icon: <Users className="w-6 h-6 text-[#BA905E] transition-colors duration-500" />,
      title: "Expert Mentorship",
      description: "Learn from industry professionals with years of experience.",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-[#BA905E] transition-colors duration-500" />,
      title: "Placement Assistance",
      description: "Dedicated support to help you land top roles in AI.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-[#BA905E] transition-colors duration-500" />,
      title: "Comprehensive Curriculum",
      description: "Covering everything from basics to advanced GenAI.",
    },
    {
      icon: <Trophy className="w-6 h-6 text-[#BA905E] transition-colors duration-500" />,
      title: "Career Growth",
      description: "Get certified and land top AI jobs.",
    },
  ];

  return (
    <motion.section 
      id="what-you-get" 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="relative py-24 lg:py-32 bg-[#FFFAEE] overflow-hidden"
    >
      {/* Background Grid - Dark theme adapted to light theme */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(25,33,83,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(25,33,83,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Top and Bottom Waves */}
      <SectionWave position="top" waveHeight="md" opacity={0.06} />
      <SectionWave position="bottom" waveHeight="md" opacity={0.06} />

      {/* Dark Side Waves */}
      <div className="absolute top-0 bottom-0 left-0 w-[300px] opacity-[0.04] pointer-events-none text-[#192153]">
        <svg className="absolute w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M 0 0 C 150 30, -50 70, 0 100" />
          <path d="M 10 0 C 160 30, -40 70, 10 100" />
          <path d="M 20 0 C 170 30, -30 70, 20 100" />
          <path d="M 30 0 C 180 30, -20 70, 30 100" />
          <path d="M 40 0 C 190 30, -10 70, 40 100" />
          <path d="M 50 0 C 200 30, 0 70, 50 100" />
        </svg>
      </div>
      <div className="absolute top-0 bottom-0 right-0 w-[300px] opacity-[0.04] pointer-events-none text-[#192153]">
        <svg className="absolute w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M 100 0 C -50 30, 150 70, 100 100" />
          <path d="M 90 0 C -60 30, 140 70, 90 100" />
          <path d="M 80 0 C -70 30, 130 70, 80 100" />
          <path d="M 70 0 C -80 30, 120 70, 70 100" />
          <path d="M 60 0 C -90 30, 110 70, 60 100" />
          <path d="M 50 0 C -100 30, 100 70, 50 100" />
        </svg>
      </div>

      {/* Subtle Radial Gradient Behind Middle Cards */}
      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#BA905E]/[0.08] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center">
        
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#BA905E]/25 bg-[#BA905E]/10 px-4 py-2 text-[13px] font-semibold uppercase tracking-[0.3em] text-[#BA905E] sm:text-sm"
        >
          <Sparkles className="h-3.5 w-3.5" />
          The Zelix Advantage
        </motion.div>

        {/* Large Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-[#192153] mb-6 tracking-tight text-center"
        >
          What You Get at <span className="text-[#BA905E]">Zelix</span>
        </motion.h2>
        
        {/* Short Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-[#24304f] max-w-2xl mx-auto text-center"
        >
          Our comprehensive approach ensures you have everything needed to succeed in the AI ecosystem.
        </motion.p>

        {/* Journey Connector & Cards Container */}
        <div className="w-full relative mt-[100px]">
          
          {/* Decorative Journey Connector (Desktop Only) */}
          <div className="hidden lg:block absolute -top-[50px] left-[10%] right-[10%] h-[2px]">
             <motion.svg 
               className="w-full h-full overflow-visible" 
               preserveAspectRatio="none"
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-100px" }}
             >
                <motion.line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="#BA905E"
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                  className="opacity-40"
                  variants={{
                    hidden: { pathLength: 0 },
                    visible: { pathLength: 1, transition: { duration: 1.5, ease: "easeInOut", delay: 0.4 } }
                  }}
                />
             </motion.svg>
          </div>

          {/* Cards Grid: Now using grid-cols-5 for the 5 items */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-6 w-full">
             {benefits.map((benefit, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.6 + (idx * 0.2), ease: "easeOut" }}
                  className="group relative flex flex-col items-center text-center bg-white border border-[#192153]/10 rounded-[1.5rem] p-6 xl:p-8 hover:border-[#BA905E]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(186,144,94,0.15)] h-full"
                >
                    {/* Glowing Milestone Node (Desktop) */}
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.4, delay: 0.5 + (idx * 0.25) }}
                      className="hidden lg:flex absolute -top-[50px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full bg-[#BA905E] shadow-[0_0_12px_rgba(186,144,94,0.8)] z-10 ring-4 ring-[#FFFAEE]"
                    />

                    {/* Tablet/Mobile Milestone Node (Simplified) */}
                    <div className="lg:hidden absolute -top-[3px] left-8 w-[6px] h-[6px] rounded-full bg-[#BA905E] shadow-[0_0_8px_rgba(186,144,94,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Inner Icon */}
                    <div className="w-14 h-14 rounded-[1.1rem] bg-[#BA905E]/5 border border-[#BA905E]/20 flex items-center justify-center mb-6 group-hover:bg-[#BA905E] transition-all duration-500 [&>svg]:group-hover:text-white">
                      {benefit.icon}
                    </div>
                    
                    <h3 className="text-[1.1rem] font-bold text-[#192153] mb-3 tracking-tight group-hover:text-[#BA905E] transition-colors duration-500 leading-snug">
                      {benefit.title}
                    </h3>
                    <p className="text-[#24304f]/80 text-[14px] leading-relaxed flex-grow">
                      {benefit.description}
                    </p>
                </motion.div>
             ))}
          </div>

        </div>
      </div>
    </motion.section>
  )
}
