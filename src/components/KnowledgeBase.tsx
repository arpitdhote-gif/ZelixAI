import { ArrowRight, BookOpen, Compass, Layers, Sparkles } from "lucide-react";

const cards = [
  {
    title: "AI Training, Consulting & Career Growth",
    body: "Explore expert insights, practical guides, and industry-focused resources on Artificial Intelligence, Generative AI, Data Science, and AI Automation.",
    icon: BookOpen,
  },
  {
    title: "About ZelixAI",
    body: "ZelixAI is a leading AI Training & Consultancy firm based in Nagpur, helping students, professionals, startups, and organizations build future-ready AI skills and solutions.",
    icon: Sparkles,
  },
  {
    title: "AI Concepts Made Simple",
    body: "Learn the essentials of Generative AI, AI Agents, RAG, and Prompt Engineering in clear, practical language.",
    icon: Layers,
  },
  {
    title: "Career & Learning Guides",
    body: "Discover how to build a career in AI, why AI skills matter today, and how to grow through real projects and practical learning.",
    icon: Compass,
  },
];

export function KnowledgeBase() {
  return (
    <section id="knowledge-section" className="py-20 bg-[#0B2636] text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            AI Training, Consulting & Career Growth
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Explore practical AI resources, learning guides, and expert insights for students, professionals, and business teams.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="group rounded-2xl border border-white/10 bg-[#0D2534] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-[#8AE600]/30"
              >
                <div className="flex items-center gap-3 mb-4 text-[#8AE600]">
                  <Icon className="w-5 h-5" />
                  <h3 className="text-lg font-bold text-white">{card.title}</h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {card.body}
                </p>
                <div className="mt-5 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 group-hover:text-[#8AE600] transition-colors">
                  Explore <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4 text-sm text-slate-300">
          <div className="rounded-2xl border border-white/10 bg-[#0D2534] p-6">
            <h4 className="text-white font-semibold mb-2">What is Generative AI?</h4>
            <p>Systems that create text, images, code, and workflows from prompts.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#0D2534] p-6">
            <h4 className="text-white font-semibold mb-2">What are AI Agents?</h4>
            <p>Intelligent systems that automate tasks, interact with tools, and execute workflows with minimal human input.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#0D2534] p-6">
            <h4 className="text-white font-semibold mb-2">What is RAG?</h4>
            <p>A method that combines retrieval with generative AI for more accurate and contextual responses.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#0D2534] p-6">
            <h4 className="text-white font-semibold mb-2">What is Prompt Engineering?</h4>
            <p>The practice of designing instructions that help AI generate useful and reliable outputs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
