import { ArrowRight, BookOpen, Compass, Layers, ShieldCheck, Sparkles } from "lucide-react";

export function KnowledgeBase() {
  return (
    <section id="knowledge-section" className="py-24 bg-[#0B2636] text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Knowledge Base for AI Training, Consulting & Local Search
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            High-value answer-engine content for students, professionals and corporate teams looking for AI training in Nagpur, Maharashtra and Central India.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <article className="rounded-3xl border border-white/10 bg-[#0D2534] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
            <div className="flex items-center gap-3 mb-5 text-[#8AE600]">
              <BookOpen className="w-6 h-6" />
              <h3 className="text-xl font-bold text-white">About ZelixAI</h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-5">
              ZelixAI is a Nagpur-based AI training and consultancy firm helping students, graduates, professionals, startups and enterprises build modern AI solutions.
            </p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-[#8AE600] mt-1" /> Local AI training in Nagpur, Maharashtra and Central India.</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-[#8AE600] mt-1" /> Generative AI, AI Agents, Data Science and corporate AI upskilling.</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-[#8AE600] mt-1" /> Practical project-based learning plus consultancy for business outcomes.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-white/10 bg-[#0D2534] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
            <div className="flex items-center gap-3 mb-5 text-[#8AE600]">
              <Layers className="w-6 h-6" />
              <h3 className="text-xl font-bold text-white">AI Glossary</h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-5">
              Clear definitions that make AI concepts easy for assistants to cite and for visitors to trust.
            </p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-[#8AE600] mt-1" /> Generative AI: AI systems that create text, images, audio, code and workflows from prompts.</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-[#8AE600] mt-1" /> AI Agents: autonomous workflows that use multiple tools and task automation for real-world outcomes.</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-[#8AE600] mt-1" /> RAG: Retrieval-Augmented Generation that combines search, embeddings, and LLM answers.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-white/10 bg-[#0D2534] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
            <div className="flex items-center gap-3 mb-5 text-[#8AE600]">
              <Compass className="w-6 h-6" />
              <h3 className="text-xl font-bold text-white">Career Guides</h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-5">
              Career advice tailored for engineering students, graduates, working professionals and business teams seeking AI expertise.
            </p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-[#8AE600] mt-1" /> Become an AI engineer with practical LLM, data science and deployment skills.</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-[#8AE600] mt-1" /> Learn AI in 2026 with a focus on generative workflows, automation and enterprise adoption.</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-[#8AE600] mt-1" /> Build business-ready AI portfolios and placement-ready projects.</li>
            </ul>
          </article>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-[#0D2534] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
            <h3 className="text-xl font-bold text-white mb-4">What is ZelixAI?</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              ZelixAI is a Nagpur-based AI training and consultancy provider delivering generative AI, AI agent development, data science and corporate AI upskilling for Central India and businesses across India.
            </p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-[#0D2534] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
            <h3 className="text-xl font-bold text-white mb-4">Who should join ZelixAI?</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Engineering students, recent graduates, working professionals, business owners and corporate teams seeking AI skills, automation strategy or data-driven transformation should join ZelixAI.
            </p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-[#0D2534] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
            <h3 className="text-xl font-bold text-white mb-4">What are AI Agents?</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              AI Agents are automated systems that combine language models, tools and memory to execute business workflows, automate decisions, and deliver intelligent outcomes with minimal human handoff.
            </p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-[#0D2534] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
            <h3 className="text-xl font-bold text-white mb-4">What is RAG?</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              RAG stands for Retrieval-Augmented Generation, a technique that combines search or knowledge retrieval with generative AI to create more accurate, up-to-date answers and domain-specific solutions.
            </p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-[#0D2534] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
            <h3 className="text-xl font-bold text-white mb-4">What is Prompt Engineering?</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Prompt engineering is the process of designing, testing and refining instructions so AI models deliver reliable, actionable, and business-ready responses.
            </p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-[#0D2534] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
            <h3 className="text-xl font-bold text-white mb-4">Why learn AI in 2026?</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Because AI is now essential for product innovation, automation, business strategy and career growth—especially in Central India where AI skills are in high demand.</p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-[#0D2534] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
            <h3 className="text-xl font-bold text-white mb-4">How to become an AI Engineer?</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Start with strong foundations in Python and data science, learn generative AI and agents, build project portfolios, and practice deploying real solutions for businesses.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
