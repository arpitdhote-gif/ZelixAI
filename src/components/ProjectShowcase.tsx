import { useState } from "react";
import { Project } from "../types";
import { projects } from "../data";
import { Code, Terminal, Eye, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function ProjectShowcase() {
  const [activeProjectId, setActiveProjectId] = useState<string>("proj-1");
  const [showCodeTab, setShowCodeTab] = useState<boolean>(false);

  const activeProject = projects.find(p => p.id === activeProjectId) || projects[0];

  return (
    <section id="projects-section" className="py-24 bg-[#0F2B3C] text-white relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] rounded-full bg-[#8AE600]/3 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#8AE600]/3 blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Projects You'll Build
          </h2>
          <p className="text-slate-300 font-normal text-sm md:text-base leading-relaxed">
            These are actual production-grade models, pipelines, and autonomous agents engineered by our candidates during their 2-month core evaluations.
          </p>
        </div>

        {/* Dynamic Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Project Selector List */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-2">
              Select a project archetype:
            </p>
            <div className="space-y-3.5 max-h-[500px] overflow-y-auto pr-2 no-scrollbar">
              {projects.map((proj) => (
                <button
                  key={proj.id}
                  id={`project-sel-${proj.id}`}
                  onClick={() => {
                    setActiveProjectId(proj.id);
                    setShowCodeTab(false);
                  }}
                  className={`w-full p-4 rounded-md border text-left transition-all duration-300 cursor-pointer flex items-start gap-3.5 relative overflow-hidden group ${
                    activeProjectId === proj.id
                      ? "bg-white/5 border-[#8AE600]/30 shadow-md shadow-[#8AE600]/5"
                      : "bg-[#0D2534] border-white/5 hover:border-white/10"
                  }`}
                >
                  {/* Active highlight side line */}
                  {activeProjectId === proj.id && (
                    <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#8AE600]" />
                  )}

                  <div className={`p-2 rounded-md shrink-0 ${
                    activeProjectId === proj.id
                      ? "bg-[#8AE600]/10 text-[#8AE600]"
                      : "bg-white/5 text-slate-400 group-hover:text-white"
                  }`}>
                    <Terminal className="w-4 h-4" />
                  </div>

                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#8AE600]">
                      {proj.category}
                    </span>
                    <h4 className="text-sm font-bold text-white mt-1 leading-snug">
                      {proj.title}
                    </h4>
                    <span className={`text-[9px] px-2 py-0.5 rounded-sm font-mono font-bold border inline-block mt-2 ${
                      proj.difficulty === "Advanced"
                        ? "bg-rose-500/10 text-rose-400 border-rose-500/20"
                        : "bg-[#8AE600]/10 text-[#8AE600] border-[#8AE600]/20"
                    }`}>
                      {proj.difficulty}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Immersive Terminal & Playground */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Tab Controls */}
            <div className="flex justify-between items-center bg-[#0D2534] border border-white/5 rounded-t-lg p-4">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>

              <div className="flex gap-2">
                <button
                  id="tab-visual"
                  onClick={() => setShowCodeTab(false)}
                  className={`px-3 py-1.5 rounded-md text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer transition-colors ${
                    !showCodeTab
                      ? "bg-[#8AE600] text-[#0F2B3C] border border-[#8AE600] font-black"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  Visual Output
                </button>
                <button
                  id="tab-code"
                  onClick={() => setShowCodeTab(true)}
                  className={`px-3 py-1.5 rounded-md text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer transition-colors ${
                    showCodeTab
                      ? "bg-[#8AE600] text-[#0F2B3C] border border-[#8AE600] font-black"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Code className="w-3.5 h-3.5" />
                  Python Blueprint
                </button>
              </div>
            </div>

            {/* Playground Content Area */}
            <div className="flex-1 bg-[#0B1E2B] border border-t-0 border-white/5 rounded-b-lg p-6 md:p-8 min-h-[360px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {showCodeTab ? (
                  /* Code Blueprint */
                  <motion.div
                    key="code"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="flex-1 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                          <Terminal className="w-3.5 h-3.5 text-[#8AE600]" />
                          main.py
                        </p>
                        <span className="text-[10px] font-mono text-[#8AE600] bg-[#8AE600]/10 border border-[#8AE600]/20 px-2 py-0.5 rounded-md">
                          Production Ready
                        </span>
                      </div>
                      <pre className="p-4 rounded-md bg-slate-950 border border-white/5 font-mono text-xs text-slate-200 overflow-x-auto text-left leading-relaxed max-h-[250px]">
                        <code>{activeProject.demoSnippet || `# Sample pipeline code`}</code>
                      </pre>
                    </div>
                    <p className="text-[10px] font-mono text-slate-400 mt-4 leading-relaxed text-left">
                      * This blueprint is utilized inside the live evaluation pipeline. Students construct and deploy these algorithms on secure containers.
                    </p>
                  </motion.div>
                ) : (
                  /* Visual Output Dashboard */
                  <motion.div
                    key="visual"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="space-y-6 text-left"
                  >
                    <div>
                      <span className="text-xs font-mono text-[#8AE600] font-bold uppercase tracking-wider">
                        {activeProject.category} Archetype
                      </span>
                      <h3 className="text-2xl font-bold text-white mt-1">
                        {activeProject.title}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 rounded-md bg-[#0D2534] border border-white/5">
                        <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1.5">Project Scope &amp; Operation</p>
                        <p className="text-sm text-slate-200 font-normal leading-relaxed">
                          {activeProject.description}
                        </p>
                      </div>

                      <div className="p-4 rounded-md bg-[#8AE600]/10 border border-[#8AE600]/20 flex items-start gap-3">
                        <Sparkles className="w-5 h-5 text-[#8AE600] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-mono text-[#8AE600] font-bold uppercase tracking-wider">Validated Real-World Impact</p>
                          <p className="text-xs text-slate-200 mt-1 leading-relaxed">
                            {activeProject.impact}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Technologies tags */}
                    <div className="space-y-2 pt-2">
                      <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Core Technical Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-slate-200 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
