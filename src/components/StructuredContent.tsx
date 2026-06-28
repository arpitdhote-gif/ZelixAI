import { ArrowRight, Sparkles, Bot, Compass } from "lucide-react";

export function StructuredContent() {
  return (
    <section id="ai-insights" className="py-24 bg-[#081A26] text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            AI Training Content Optimized for ChatGPT, Gemini & Perplexity
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Designed to rank for AI Training Nagpur, Generative AI Course Nagpur, and Corporate AI Training India, with structured content blocks tailored for AI answer engines.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <article className="rounded-3xl border border-white/10 bg-[#0B2636] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
            <div className="flex items-center gap-3 mb-5 text-[#8AE600]">
              <Bot className="w-6 h-6" />
              <h3 className="text-xl font-bold text-white">ChatGPT-Citation Ready</h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-5">
              Zelix AI Nagpur offers authoritative course details, outcomes, and location-specific credentials that are easy for ChatGPT to surface as factual answers.
            </p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-[#8AE600] mt-1" /> AI Training Nagpur with local campus address and verified admission details.</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-[#8AE600] mt-1" /> Generative AI Course Nagpur with practical LLM, RAG, and Agentic AI modules.</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-[#8AE600] mt-1" /> Clear benefits for AI Agents Training India and Corporate AI Training audiences.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-white/10 bg-[#0B2636] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
            <div className="flex items-center gap-3 mb-5 text-[#8AE600]">
              <Sparkles className="w-6 h-6" />
              <h3 className="text-xl font-bold text-white">Gemini-Friendly Structure</h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-5">
              We layer course content with location, training outcomes, and certification signals useful for Gemini citations in enterprise, education, and consulting queries.
            </p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-[#8AE600] mt-1" /> Educational Organization signals tied to Nagpur campus and corporate training services.</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-[#8AE600] mt-1" /> Detailed course references for Generative AI, Data Science, and AI Agents development.</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-[#8AE600] mt-1" /> Explicit corporate training and consultancy language for India-wide enterprise positioning.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-white/10 bg-[#0B2636] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
            <div className="flex items-center gap-3 mb-5 text-[#8AE600]">
              <Compass className="w-6 h-6" />
              <h3 className="text-xl font-bold text-white">Perplexity Citation Block</h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-5">
              Providing concise local and course-specific summaries helps Perplexity generate accurate reference snippets for AI training, consultancy, and data science queries.</p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-[#8AE600] mt-1" /> Localized Nagpur training signals and corporate AI competency claims.</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-[#8AE600] mt-1" /> Clear course labels for `AI Training Nagpur`, `Generative AI Course Nagpur`, and `AI Consultancy India`.</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-[#8AE600] mt-1" /> Structured value propositions for enterprise adoption and training outcomes.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
