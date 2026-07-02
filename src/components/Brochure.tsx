import { courses, projects } from "../data";
import { ArrowRight, BookOpen, Code2, Layers, MapPin, ShieldCheck, Sparkles, Terminal, Users, CheckCircle2 } from "lucide-react";
import { LogoIcon } from "./LogoIcon";

const curriculumModules = [
  {
    title: "MODULE 1 Prompt Engineering and API Integration",
    summary: "Build high-performance GenAI systems with production-grade prompts, guardrails, and API workflows.",
    topics: [
      "AI vs ML vs Deep Learning",
      "Introduction to Generative AI (GenAI)",
      "Open-source vs Closed-source AI Models",
      "GenAI Platforms Overview (OpenAI, Anthropic, Mistral, Stable Diffusion, Midjourney)",
      "Ethics & Responsible AI Usage",
      "Prompt Anatomy (Role, Instruction, Input, Output)",
      "Prompting Techniques (Zero-shot, Few-shot, Role-based Prompting)",
      "Advanced Prompting (CoT, ToT, ReAct, Self-Consistency)",
      "Handling AI Responses (JSON parsing, streaming, batch outputs, error handling)",
      "AI Guardrails & Output Validation",
      "Conversation Memory & Context Management",
      "Working with OpenAI/Gemini APIs (Chat, Embeddings, Function Calling)",
      "API Security, Rate Limits & Key Management",
      "Debugging & Evaluating GenAI Outputs (Accuracy, Performance, Reliability)",
    ],
    tools: ["Python", "Hugging Face", "Hugging Face API", "LLM API", "Postman"],
  },
  {
    title: "MODULE 2 Basics of NLP and Retrieval-Augmented Generation (RAG)",
    summary: "Master retrieval workflows, semantic search, vector databases, and advanced NLP for enterprise-ready applications.",
    topics: [
      "Text Preprocessing & Tokenization",
      "Text Representation & Feature Engineering",
      "Named Entity Recognition (NER) & POS Tagging",
      "Embeddings, Vectorization & Semantic Search",
      "Chunking Strategies for LLM Applications",
      "RAG Fundamentals & Retrieval Architecture",
      "Retrieval + Generation Workflow in RAG",
      "Data Handling, Chunking & Context Optimization",
      "Vector Databases & Vector Stores",
      "Dense vs Sparse Retrieval & Hybrid Search",
      "Working with Text/Image Embeddings in Vector DBs",
      "Building a Simple RAG Pipeline with LangChain",
      "Query Rewriting, Multi-hop & Multi-query Retrieval",
      "Reducing Hallucinations & Context Validation",
      "Advanced RAG Techniques (Self-RAG, Corrective RAG, Adaptive RAG, Contextual Retrieval, LoTR)",
      "Why Basic RAG Fails & Advanced Improvement Strategies",
      "RAG Evaluation & Fallback Mechanisms",
      "RAGas Metrics (Faithfulness, Relevance, Context Recall & Precision)",
    ],
    tools: ["LangChain", "LlamaIndex", "Hugging Face", "Embeddings", "FAISS", "VectorDB", "Pinecone"],
  },
];

const brochureHighlights = [
  "A4 portrait brochure optimized for browser print and PDF export",
  "Page-safe margin support and stable print page breaks",
  "Dedicated web sections for every brochure page",
  "Professional ZelixAI branding with high-contrast print-safe palettes",
  "Designed for responsive desktop and print-ready PDF output",
];

export function Brochure() {
  return (
    <main className="brochure-root min-h-screen bg-[#0F2B3C] text-white px-4 py-6 sm:px-6 lg:px-8">
      <section className="brochure-page page-cover mx-auto mb-10 w-full max-w-[920px] overflow-hidden rounded-[28px] border border-[#8AE600]/20 bg-[#0F2B3C] p-8 text-white shadow-[0_30px_90px_rgba(0,0,0,0.35)] print:shadow-none print:border-0 print:rounded-none print:m-0 print:max-w-none print:p-0 print:bg-white">
        <div className="page-inner relative flex h-full min-h-[84vh] flex-col justify-between rounded-[24px] border border-[#8AE600]/10 bg-[radial-gradient(circle_at_top,left,#8ae60015_0%,#0f2b3c_38%)] p-8 print:bg-white print:border-none">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#8AE600]/30 bg-[#8AE600]/10 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-[#8AE600] print:text-[#0F2B3C]">
                <Sparkles className="h-4 w-4 text-[#8AE600]" />
                ZelixAI – Training & Consultancy
              </div>

              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.35em] text-[#8AE600] print:text-[#0F2B3C]">Professional AI Learning • Course Portfolio • Print Brochure</p>
                <h1 className="text-5xl font-extrabold leading-tight tracking-[-0.03em] text-white sm:text-6xl md:text-7xl print:text-[#0F2B3C]">
                  Learn. Build. Deploy.
                </h1>
                <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-xl print:text-slate-700">
                  A structured professional brochure for ZelixAI's training and consultancy programs, optimized for A4 print export and polished presentation.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[2fr_1fr]">
              <div className="rounded-[22px] border border-[#8AE600]/20 bg-[#081A26]/95 p-7 shadow-[inset_0_0_0_1px_rgba(138,230,0,0.08)] print:bg-[#f8fafc] print:border-[#0F2B3C]/10 print:text-[#0F2B3C]">
                <p className="text-xs uppercase tracking-[0.35em] text-[#8AE600] print:text-[#0F2B3C]">Brochure summary</p>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-200 print:text-slate-700">
                  {brochureHighlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 text-[#8AE600] print:text-[#0F2B3C]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[22px] border border-[#8AE600]/20 bg-white/5 p-7 text-slate-100 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] print:bg-[#ffffff] print:border-[#0F2B3C]/10 print:text-[#0F2B3C]">
                <h2 className="text-lg font-semibold uppercase tracking-[0.25em] text-[#8AE600] print:text-[#0F2B3C]">Core offerings</h2>
                <div className="mt-6 space-y-4 text-sm leading-7 text-slate-200 print:text-slate-700">
                  <div>
                    <p className="font-semibold text-white print:text-[#0F2B3C]">Generative AI & Responsible Deployment</p>
                    <p>Guided modules on prompt engineering, API orchestration, and model validation.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white print:text-[#0F2B3C]">Retrieval & Enterprise Search</p>
                    <p>RAG workflows, vector stores, indexing, and practical LLM retrieval strategies.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white print:text-[#0F2B3C]">AI Agents & Workflow Automation</p>
                    <p>Hands-on agent creation, multi-agent orchestration, and real automation projects.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 rounded-[24px] border border-[#8AE600]/15 bg-[#081A26]/95 p-6 text-sm leading-7 text-slate-200 shadow-[0_16px_40px_rgba(0,0,0,0.18)] print:bg-[#f8fafc] print:border-[#0F2B3C]/10 print:text-[#0F2B3C]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-[#8AE600] print:text-[#0F2B3C]">ZelixAI Brochure</p>
                <p className="mt-2 text-2xl font-bold text-white print:text-[#0F2B3C]">A4 | Portrait | Print Optimized</p>
              </div>
              <div className="rounded-full border border-[#8AE600]/25 bg-[#0F2B3C]/80 px-4 py-2 text-xs uppercase tracking-[0.35em] text-[#8AE600] print:text-[#0F2B3C]">
                4 PDF pages
              </div>
            </div>
            <p className="text-slate-300 print:text-slate-600">
              This brochure converts the original curriculum layout into a polished print-first webpage with dedicated page sections, stable breakpoints, and graphic-rich page styling.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#8AE600]/20 bg-[#0F2B3C]/60 p-4 print:bg-[#ffffff] print:border-[#0F2B3C]/10">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#8AE600] print:text-[#0F2B3C]">Primary palette</p>
                <div className="mt-3 grid grid-cols-3 gap-3">
                  <div className="h-10 rounded-lg bg-[#0F2B3C]" />
                  <div className="h-10 rounded-lg bg-[#8AE600]" />
                  <div className="h-10 rounded-lg bg-[#FFFFFF] border border-slate-300" />
                </div>
              </div>
              <div className="rounded-2xl border border-[#8AE600]/20 bg-[#0F2B3C]/60 p-4 print:bg-[#ffffff] print:border-[#0F2B3C]/10">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#8AE600] print:text-[#0F2B3C]">Brand voice</p>
                <p className="mt-3 text-sm text-slate-200 print:text-slate-700">Clear, modern, and corporate-focused copy with exact spacing and visual hierarchy for printed collateral.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="brochure-page mx-auto mb-10 w-full max-w-[920px] overflow-hidden rounded-[28px] border border-[#8AE600]/20 bg-white p-8 text-[#0F2B3C] shadow-[0_30px_90px_rgba(0,0,0,0.15)] print:shadow-none print:border-0 print:rounded-none print:m-0 print:p-0">
        <div className="page-inner rounded-[24px] border border-[#0F2B3C]/10 bg-[#F8FAFC] p-8 print:border-none print:bg-white">
          <div className="flex flex-col gap-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.35em] text-[#8AE600]">Detailed Curriculum</p>
              <h2 className="text-4xl font-extrabold leading-tight">Module-by-module course structure</h2>
              <p className="max-w-3xl text-sm leading-7 text-slate-600">
                The following pages preserve the original brochure's curriculum layout with exact section separation and print-safe spacing between topics, tables, and callouts.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
              <div className="space-y-6">
                {curriculumModules.map((module) => (
                  <article key={module.title} className="break-inside-avoid rounded-[22px] border border-[#0F2B3C]/10 bg-white p-6 shadow-[0_10px_30px_rgba(15,43,60,0.08)] print:shadow-none print:border-[#0F2B3C]/10">
                    <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-200">
                      <div>
                        <h3 className="text-2xl font-bold text-[#0F2B3C]">{module.title}</h3>
                        <p className="mt-2 text-sm text-slate-600">{module.summary}</p>
                      </div>
                      <div className="rounded-full bg-[#8AE600]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#0F2B3C]">
                        {module.tools.length} tools
                      </div>
                    </div>
                    <div className="grid gap-4 pt-6 sm:grid-cols-[0.9fr_0.5fr]">
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8AE600]">Course Topics</h4>
                        <ul className="grid gap-3 text-sm leading-7 text-slate-700">
                          {module.topics.map((topic) => (
                            <li key={topic} className="flex items-start gap-3">
                              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#8AE600]" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-[18px] border border-slate-200 bg-[#F8F9FA] p-5 text-sm text-slate-700 print:bg-white print:border-[#0F2B3C]/10">
                        <p className="text-xs uppercase tracking-[0.3em] text-[#0F2B3C]">Tools & technologies</p>
                        <div className="mt-4 space-y-3">
                          {module.tools.map((tool) => (
                            <div key={tool} className="rounded-2xl bg-white/90 px-3 py-2 text-sm font-medium text-[#0F2B3C] shadow-sm print:bg-[#f8fafc] print:text-[#0F2B3C]">
                              {tool}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <aside className="rounded-[22px] border border-[#0F2B3C]/10 bg-[#0F2B3C]/5 p-6 text-sm text-slate-700 print:border-[#0F2B3C]/10 print:bg-[#ffffff]">
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-[#8AE600]">Curriculum snapshot</p>
                  <h3 className="mt-3 text-2xl font-bold text-[#0F2B3C]">Focused outcomes per module</h3>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-2xl bg-white p-4 shadow-sm print:bg-[#f8fafc] print:shadow-none">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#0F2B3C]">Module 1</p>
                    <p className="mt-3 text-sm text-slate-600 leading-7">
                      Build production-grade prompt workflows and connect them to modern API ecosystems while enforcing AI safety and validation.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white p-4 shadow-sm print:bg-[#f8fafc] print:shadow-none">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#0F2B3C]">Module 2</p>
                    <p className="mt-3 text-sm text-slate-600 leading-7">
                      Master retrieval-augmented generation, vector search, and semantic RAG systems for enterprise-ready AI knowledge apps.
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="brochure-page mx-auto mb-10 w-full max-w-[920px] overflow-hidden rounded-[28px] border border-[#8AE600]/20 bg-[#0B2636] p-8 text-white shadow-[0_30px_90px_rgba(0,0,0,0.35)] print:shadow-none print:border-0 print:rounded-none print:m-0 print:p-0 print:bg-white print:text-[#0F2B3C]">
        <div className="page-inner rounded-[24px] border border-[#0F2B3C]/10 bg-[#081A26]/95 p-8 print:border-none print:bg-white">
          <div className="grid gap-10">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.35em] text-[#8AE600] print:text-[#0F2B3C]">Course Portfolio</p>
              <h2 className="text-4xl font-extrabold leading-tight">All ZelixAI programs in one brochure</h2>
              <p className="max-w-3xl text-sm leading-7 text-slate-300 print:text-slate-700">
                Each course includes defined duration, category, skills, and career outcomes so print readers can compare offerings easily.
              </p>
            </div>

            <div className="grid gap-6 xl:grid-cols-2">
              {courses.map((course) => (
                <article key={course.id} className="break-inside-avoid rounded-[22px] border border-[#8AE600]/15 bg-[#0F2B3C]/90 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.18)] print:bg-[#ffffff] print:border-[#0F2B3C]/10 print:text-[#0F2B3C] print:shadow-none">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-[#8AE600]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.35em] text-[#8AE600] print:text-[#0F2B3C]">
                        {course.category}
                      </span>
                      <span className="text-xs text-slate-400 uppercase tracking-[0.3em] print:text-slate-500">{course.level}</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-white print:text-[#0F2B3C]">{course.title}</h3>
                    <p className="text-sm leading-7 text-slate-300 print:text-slate-600">{course.description}</p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl bg-white/10 p-3 text-sm text-slate-200 print:bg-[#f8fafc] print:text-[#0F2B3C]">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-[#8AE600] print:text-[#0F2B3C]">Duration</p>
                        <p className="mt-2 font-semibold">{course.duration}</p>
                      </div>
                      <div className="rounded-2xl bg-white/10 p-3 text-sm text-slate-200 print:bg-[#f8fafc] print:text-[#0F2B3C]">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-[#8AE600] print:text-[#0F2B3C]">Outcome</p>
                        <p className="mt-2 font-semibold">{course.outcomes[0]}</p>
                      </div>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {course.skills.slice(0, 4).map((skill) => (
                        <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-slate-200 print:border-[#0F2B3C]/10 print:bg-[#f8fafc] print:text-[#0F2B3C]">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="brochure-page mx-auto mb-10 w-full max-w-[920px] overflow-hidden rounded-[28px] border border-[#8AE600]/20 bg-[#081A26] p-8 text-white shadow-[0_30px_90px_rgba(0,0,0,0.35)] print:shadow-none print:border-0 print:rounded-none print:m-0 print:p-0 print:bg-white print:text-[#0F2B3C]">
        <div className="page-inner rounded-[24px] border border-[#0F2B3C]/10 bg-[#0B2636]/95 p-8 print:border-none print:bg-white">
          <div className="grid gap-10">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.35em] text-[#8AE600] print:text-[#0F2B3C]">Projects & outcomes</p>
              <h2 className="text-4xl font-extrabold leading-tight text-white print:text-[#0F2B3C]">Real workflows, live delivery, and admissions details</h2>
              <p className="max-w-3xl text-sm leading-7 text-slate-300 print:text-slate-700">
                Showcase page for high-impact project work followed by contact details and a final printable enrollment call to action.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {projects.slice(0, 4).map((project) => (
                <article key={project.id} className="break-inside-avoid rounded-[22px] border border-[#8AE600]/10 bg-[#0F2B3C]/90 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.18)] print:bg-[#ffffff] print:border-[#0F2B3C]/10 print:text-[#0F2B3C] print:shadow-none">
                  <div className="flex items-center gap-3 text-[#8AE600]">
                    <Terminal className="h-5 w-5" />
                    <h3 className="text-xl font-semibold text-white print:text-[#0F2B3C]">{project.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-300 print:text-slate-700">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="rounded-full bg-white/5 px-3 py-1 text-[11px] text-slate-200 print:bg-[#f8fafc] print:text-[#0F2B3C]">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 rounded-2xl bg-[#0F2B3C]/80 p-4 text-sm leading-6 text-slate-200 print:bg-[#f8fafc] print:text-[#0F2B3C]">
                    <p className="text-[10px] uppercase tracking-[0.35em] text-[#8AE600] print:text-[#0F2B3C]">Impact</p>
                    <p className="mt-2 font-medium">{project.impact}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="rounded-[24px] border border-[#8AE600]/15 bg-[#0F2B3C]/90 p-8 text-white print:bg-[#ffffff] print:border-[#0F2B3C]/10 print:text-[#0F2B3C]">
              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#8AE600] print:text-[#0F2B3C]">Admissions</p>
                  <h3 className="mt-3 text-3xl font-semibold text-white print:text-[#0F2B3C]">Ready to save your seat?</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300 print:text-slate-700">
                    Contact ZelixAI to confirm availability, request a brochure PDF, or book a personalised training and consulting consultation.
                  </p>
                </div>
                <div className="space-y-5 rounded-[20px] border border-[#8AE600]/15 bg-[#081A26]/95 p-6 print:border-[#0F2B3C]/10 print:bg-[#f8fafc] print:text-[#0F2B3C]">
                  <div className="space-y-2">
                    <p className="text-[10px] uppercase tracking-[0.35em] text-[#8AE600] print:text-[#0F2B3C]">Headquarters</p>
                    <p className="text-sm font-semibold">ZelixAI Training & Consultancy</p>
                    <p className="text-sm leading-6 text-slate-300 print:text-slate-700">
                      1st floor, Plot no. 74, Somalvada Layout,<br />Jai Prakash Nagar, Somalwada, Nagpur, Maharashtra 440025
                    </p>
                  </div>
                  <div className="grid gap-3 text-sm text-slate-200 print:text-slate-700">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-[#8AE600] print:text-[#0F2B3C]" />
                      <span>Location map included with your printed brochure</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <BookOpen className="h-4 w-4 text-[#8AE600] print:text-[#0F2B3C]" />
                      <span>Courses: AI Mastery, ML, GenAI, Data Science, Python, AI Agents, Agentic AI, Cloud AI</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="h-4 w-4 text-[#8AE600] print:text-[#0F2B3C]" />
                      <span>Print-ready A4 export with exact page breaks and table-safe layout.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
