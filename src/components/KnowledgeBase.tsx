import { ArrowRight, BookOpen, Compass, Layers, Sparkles } from "lucide-react";
import { SectionWave } from "./SectionWave";

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
    <section id="knowledge-section" className="relative overflow-hidden bg-[#FFFAEE] px-6 py-24 text-[#192153] sm:px-8 lg:px-10">
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
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center space-y-5">
          <div className="section-pill mx-auto">Knowledge base</div>
          <h2 className="section-heading">AI training, consulting, and career growth</h2>
          <p className="section-copy">
            Explore practical resources, learning guides, and expert insights for students, professionals, and business teams.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <article key={card.title} className="section-card p-7 transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4 flex items-center gap-3 text-[#BA905E]">
                  <Icon className="h-5 w-5" />
                  <h3 className="text-lg font-bold text-[#192153]">{card.title}</h3>
                </div>
                <p className="text-sm leading-7 text-[#31406b]">{card.body}</p>
                <div className="mt-6 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#31406b]">
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["What is Generative AI?", "Systems that create text, images, code, and workflows from prompts."],
            ["What are AI Agents?", "Intelligent systems that automate tasks, interact with tools, and execute workflows with minimal human input."],
            ["What is RAG?", "A method that combines retrieval with generative AI for more accurate and contextual responses."],
            ["What is Prompt Engineering?", "The practice of designing instructions that help AI generate useful and reliable outputs."],
          ].map(([title, body]) => (
            <div key={title} className="section-card p-6">
              <h4 className="mb-2 font-semibold text-[#192153]">{title}</h4>
              <p className="text-sm leading-7 text-[#31406b]">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
