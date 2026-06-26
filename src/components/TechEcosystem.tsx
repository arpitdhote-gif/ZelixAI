import React from "react";
import { motion } from "motion/react";
import { 
  Terminal, 
  Cpu, 
  Sparkles, 
  Layers, 
  Link as LinkIcon, 
  Database, 
  GitFork, 
  Users, 
  MessageSquare, 
  Zap, 
  Flame, 
  Activity, 
  Cloud, 
  CloudLightning,
  Binary,
  Workflow
} from "lucide-react";

// --- High-Fidelity Custom Technology Logos (Vector-perfect SVGs) ---

const PythonLogo = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 110 110" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M52.3 2C32.1 2 33.6 10.7 33.6 10.7l.1 8.9h18.9v2.7H26.3S14.8 21 14.8 37.1s9.9 15.6 9.9 15.6h5.9v-8.3c0-10.2 8.3-17.2 18.4-17.2h17.8s8.9 0 8.9-8.9V20.5S75.7 2 52.3 2z" fill="#3776AB"/>
    <path d="M57.7 108c20.2 0 18.7-8.7 18.7-8.7l-.1-8.9H57.4v-2.7h26.3s11.5 1.3 11.5-14.8-9.9-15.6-9.9-15.6h-5.9v8.3c0 10.2-8.3 17.2-18.4 17.2H43.2s-8.9 0-8.9 8.9v17.8s0 9.6 23.4 9.6z" fill="#FFE873"/>
    <circle cx="41" cy="11.5" r="3" fill="#FFF"/>
    <circle cx="69" cy="98.5" r="3" fill="#3776AB"/>
  </svg>
);

const OpenAILogo = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.7 11.1c-.2-.6-.5-1.1-.9-1.5-.2-.2-.5-.4-.8-.5.1-.4.2-.9.2-1.3 0-1-.3-2-1-2.8-.7-.8-1.7-1.3-2.8-1.4-.4 0-.8.1-1.2.2-.3-.3-.7-.6-1.1-.8-.9-.4-1.9-.5-2.9-.2-.4.1-.8.3-1.1.5-.4-.3-.9-.5-1.4-.6-1.1-.2-2.1.1-3 .8C4.9 4.3 4.4 5.2 4.3 6.3c-.3.1-.7.3-1 .5-.8.5-1.4 1.4-1.7 2.3-.3 1-.2 2 .2 2.9.2.4.5.7.8.9-.1.4-.2.8-.2 1.3 0 1 .3 2 1 2.8.7.8 1.7 1.3 2.8 1.4.4 0 .8-.1 1.2-.2.3.3.7.6 1.1.8.9.4 1.9.5 2.9.2.4-.1.8-.3 1.1-.5.4.3.9.5 1.4.6 1.1.2 2.1-.1 3-.8.8-.7 1.3-1.6 1.4-2.7.3-.1.7-.3 1-.5.8-.5 1.4-1.4 1.7-2.3.3-.9.2-1.9-.3-2.8zm-11.2 8.7c-.5 0-.9-.1-1.3-.3l3.7-2.1c.3-.2.5-.5.5-.9v-5.2l2.2 1.3c.1.1.2.2.2.3v4.6c0 1.2-1 2.3-2.3 2.3zm-6.1-4c-.3-.4-.4-.9-.4-1.4V9.8l4.5 2.6c.3.2.7.2.9 0l4.5-2.6v2.6c0 .1.1.3.2.4l-4 2.3c-1 .6-2.3.3-2.9-.7L4.4 15.8zm.5-8.2c.1-.5.4-.9.8-1.2l4.5 2.6c.3.2.5.5.5.9v5.2l-2.2-1.3c-.1-.1-.2-.2-.2-.3V9.1c.1-1.2 1.1-2.2 2.4-2.2 0 0-.8.7-.8.7l-5 2.9zm11.4 1.7L11.8 7.9c-.3-.2-.7-.2-.9 0L6.4 10.5V7.9c0-.1-.1-.3-.2-.4l4-2.3c1-.6 2.3-.3 2.9.7l3.2 5.4zm1.5 5.9c-.1.5-.4.9-.8 1.2l-4.5-2.6c-.3-.2-.5-.5-.5-.9V9.1l2.2 1.3c.1.1.2.2.2.3v4.6c0 1.2-1 2.2-2.3 2.2l4.7-2.7zm-2.4-4.8l-4.5 2.6c-.3.2-.7.2-.9 0l-4.5-2.6v-2.6c0-.1-.1-.3-.2-.4l4-2.3c1-.6 2.3-.3 2.9.7l3.2 5.4v1.9z" fill="#10A37F"/>
  </svg>
);

const GeminiLogo = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C12 2 13.5 8.5 18 10C13.5 11.5 12 18 12 18C12 18 10.5 11.5 6 10C10.5 8.5 12 2 12 2Z" fill="url(#bentoGeminiGrad)"/>
    <path d="M17 14C17 14 17.75 17.25 20 18C17.75 18.75 17 22 17 22C17 22 16.25 18.75 14 18C16.25 17.25 17 14 17 14Z" fill="url(#bentoGeminiGrad)" opacity="0.8"/>
    <defs>
      <linearGradient id="bentoGeminiGrad" x1="6" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#4285F4" />
        <stop offset="50%" stopColor="#9b51e0" />
        <stop offset="100%" stopColor="#ff4081" />
      </linearGradient>
    </defs>
  </svg>
);

const HuggingFaceLogo = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="20" fill="#FFD21E"/>
    <circle cx="17" cy="20" r="3" fill="#000"/>
    <circle cx="31" cy="20" r="3" fill="#000"/>
    <path d="M16 28C16 28 20 32 24 32C28 32 32 28 32 28" stroke="#000" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <circle cx="12" cy="25" r="2.5" fill="#FF5C5C" opacity="0.6"/>
    <circle cx="36" cy="25" r="2.5" fill="#FF5C5C" opacity="0.6"/>
    <path d="M6 32C6 32 10 32 12 28C13 26 14 24 15 25C16 26 15 28 13 32C11 35 7 38 7 38" stroke="#000" strokeWidth="2" fill="#FFD21E" strokeLinejoin="round"/>
    <path d="M42 32C42 32 38 32 36 28C35 26 34 24 33 25C32 26 33 28 35 32C37 35 41 38 41 38" stroke="#000" strokeWidth="2" fill="#FFD21E" strokeLinejoin="round"/>
  </svg>
);

const LangChainLogo = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C10.5 2 9 3 8.5 4.5C8 6 8.5 7.5 9 8.5L5 12.5C4 13.5 4 15 5 16L7 18C8 19 9.5 19 10.5 18L14.5 14C15.5 14.5 17 14 18.5 13.5C20 13 21 11.5 21 10C21 7 17 2 12 2Z" fill="#14B8A6"/>
    <path d="M12 2C13.5 3.5 14 5.5 13.5 7C13 8.5 11.5 9.5 10 9.5C8.5 9.5 7 8.5 6.5 7C6 5.5 6.5 3.5 8 2" fill="#F15A24"/>
    <rect x="7" y="11" width="5" height="10" rx="2.5" stroke="#FFF" strokeWidth="1.5" transform="rotate(-45 7 11)" />
    <rect x="11" y="7" width="5" height="10" rx="2.5" stroke="#FFF" strokeWidth="1.5" transform="rotate(-45 11 7)" />
  </svg>
);

const LlamaIndexLogo = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 22H9V12H13V15H16V22H19V8L13 2H9V8H6V22Z" fill="#3B0764"/>
    <path d="M9 8H13V12H9V8Z" fill="#701A75"/>
    <path d="M13 2H16V8H13V2Z" fill="#A21CAF"/>
    <path d="M13 2L15 0H14L12 2H13Z" fill="#F472B6"/>
    <circle cx="11.5" cy="5" r="1" fill="#FFF" />
  </svg>
);

const LangGraphLogo = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="6" r="3" stroke="#8AE600" strokeWidth="2" fill="#0B1E2B" />
    <circle cx="6" cy="16" r="3" stroke="#8AE600" strokeWidth="2" fill="#0B1E2B" />
    <circle cx="18" cy="16" r="3" stroke="#8AE600" strokeWidth="2" fill="#0B1E2B" />
    <path d="M10 8L8 14" stroke="#FFF" strokeWidth="1.5" strokeDasharray="2,2" />
    <path d="M14 8L16 14" stroke="#FFF" strokeWidth="1.5" />
    <path d="M9 16H15" stroke="#8AE600" strokeWidth="1.5" />
    <path d="M12 9C12 9 10 12 12 15" stroke="#FFF" strokeWidth="1.5" fill="none" />
  </svg>
);

const CrewAILogo = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="7" r="3" fill="#FF3366"/>
    <circle cx="6" cy="11" r="2.5" fill="#FF6B6B" opacity="0.8"/>
    <circle cx="18" cy="11" r="2.5" fill="#FF6B6B" opacity="0.8"/>
    <path d="M6 14C6 14 6 18 12 18C18 18 18 14 18 14" stroke="#FF3366" strokeWidth="2" strokeLinecap="round"/>
    <path d="M3 18C3 18 3 21 8 21C13 21 13 18 13 18" stroke="#FF6B6B" strokeWidth="1.5" opacity="0.8"/>
    <path d="M11 18C11 18 11 21 16 21C21 21 21 18 21 18" stroke="#FF6B6B" strokeWidth="1.5" opacity="0.8"/>
  </svg>
);

const AutoGenLogo = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L20 6.5V15.5L12 20L4 15.5V6.5L12 2Z" stroke="#0078D4" strokeWidth="1.5" fill="none" />
    <circle cx="12" cy="11" r="2.5" fill="#0078D4" />
    <circle cx="12" cy="4.5" r="1.5" fill="#FFF" />
    <circle cx="17.5" cy="14" r="1.5" fill="#FFF" />
    <circle cx="6.5" cy="14" r="1.5" fill="#FFF" />
    <path d="M12 6V8.5" stroke="#FFF" strokeWidth="1" />
    <path d="M12 13.5V18" stroke="#FFF" strokeWidth="1" />
    <path d="M11 11L7.5 13.5" stroke="#FFF" strokeWidth="1" />
    <path d="M13 11L16.5 13.5" stroke="#FFF" strokeWidth="1" />
  </svg>
);

const FastAPILogo = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#009688"/>
    <path d="M13 2L4 13H11V22L20 11H13V2Z" fill="#FFF"/>
  </svg>
);

const PyTorchLogo = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C12 2 13 6 11 10C9 14 5 16 5 19C5 21.5 7 23 10 23C14 23 19 19 19 12C19 5 12 2 12 2Z" fill="url(#bentoTorchGrad)" />
    <ellipse cx="10" cy="16" rx="2" ry="4" fill="#0F2B3C" transform="rotate(-20 10 16)" />
    <defs>
      <linearGradient id="bentoTorchGrad" x1="5" y1="2" x2="19" y2="23" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#EE4C2C" />
        <stop offset="50%" stopColor="#FF6200" />
        <stop offset="100%" stopColor="#FFC500" />
      </linearGradient>
    </defs>
  </svg>
);

const TensorFlowLogo = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L4 6.5V15.5L12 20L20 15.5V6.5L12 2Z" fill="#FF6F00" opacity="0.9" />
    <path d="M12 2L20 6.5V15.5L12 20V2Z" fill="#FFA000" />
    <path d="M12 2L4 6.5L12 11L20 6.5L12 2Z" fill="#FFE082" />
    <path d="M10 8H14V11H12V17H10V8Z" fill="#FFF" />
  </svg>
);

const AWSLogo = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#1A202C" />
    <path d="M5 14C5 14 7.5 17 12 17C16.5 17 19 14 19 14" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" />
    <path d="M17 12.5L19 14L20.5 11" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <text x="12" y="10" fill="#FFF" fontSize="6" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">aws</text>
  </svg>
);

const GCPLogo = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L20 6.5V15.5L12 20L4 15.5V6.5L12 2Z" fill="#ECEFF1" />
    <path d="M12 2L20 6.5V11L12 8V2Z" fill="#4285F4" />
    <path d="M12 8L20 11V15.5L12 13V8Z" fill="#34A853" />
    <path d="M4 6.5L12 2V8L4 11V6.5Z" fill="#EA4335" />
    <path d="M4 11L12 8V13L4 15.5V11Z" fill="#FBBC05" />
  </svg>
);

// --- Logo lookup component ---
const TechLogo = ({ id, className = "w-10 h-10" }: { id: string; className?: string }) => {
  switch (id) {
    case "python":
      return <PythonLogo className={className} />;
    case "openai":
      return <OpenAILogo className={className} />;
    case "gemini":
      return <GeminiLogo className={className} />;
    case "huggingface":
      return <HuggingFaceLogo className={className} />;
    case "langchain":
      return <LangChainLogo className={className} />;
    case "llamaindex":
      return <LlamaIndexLogo className={className} />;
    case "langgraph":
      return <LangGraphLogo className={className} />;
    case "crewai":
      return <CrewAILogo className={className} />;
    case "autogen":
      return <AutoGenLogo className={className} />;
    case "fastapi":
      return <FastAPILogo className={className} />;
    case "pytorch":
      return <PyTorchLogo className={className} />;
    case "tensorflow":
      return <TensorFlowLogo className={className} />;
    case "aws":
      return <AWSLogo className={className} />;
    case "gcp":
      return <GCPLogo className={className} />;
    default:
      return null;
  }
};

// Types for our ecosystem nodes
interface TechNode {
  id: string;
  name: string;
  category: "Core Foundation" | "Agent Orchestration" | "Deep Learning & Cloud";
  oneLiner: string;
  description: string;
  useCase: string;
  gridSpan: string;
}

const technologies: TechNode[] = [
  {
    id: "python",
    name: "Python",
    category: "Core Foundation",
    oneLiner: "The undisputed foundation of modern machine learning, data science, and agentic workflows.",
    description: "Serves as the execution engine for all neural computations, pipeline management, data serialization, and runtime environments.",
    useCase: "Orchestrating numerical math layers, model training algorithms, and production script orchestration.",
    gridSpan: "col-span-1 md:col-span-2 lg:col-span-6",
  },
  {
    id: "gemini",
    name: "Gemini 1.5",
    category: "Core Foundation",
    oneLiner: "Google's flagship multimodal model featuring an industry-leading 2 Million token contextual window.",
    description: "Unlocks breakthrough capabilities in repository-wide ingestion, raw high-fidelity video understanding, and multi-modal synthesis.",
    useCase: "Analyzing massive source repositories and gigabytes of complex visual schemas without chunk loss.",
    gridSpan: "col-span-1 md:col-span-2 lg:col-span-6",
  },
  {
    id: "langgraph",
    name: "LangGraph",
    category: "Agent Orchestration",
    oneLiner: "The absolute standard for building stateful, cyclical, multi-agent conversational pipelines.",
    description: "Allows engineers to define execution loops, state variables, and conditional edge routings that bypass traditional linear limits.",
    useCase: "Designing error-correcting development agents that execute bash tests, self-debug, and repeat recursively.",
    gridSpan: "col-span-1 md:col-span-1 lg:col-span-4",
  },
  {
    id: "openai",
    name: "OpenAI API",
    category: "Core Foundation",
    oneLiner: "Closed-source reasoning models offering highly reliable system-prompt structure.",
    description: "Industry benchmark for high-speed function calling, structural tool schema matching, and semantic query classification.",
    useCase: "Driving high-volume customer logic routes and strictly typed JSON schema generation runs.",
    gridSpan: "col-span-1 md:col-span-1 lg:col-span-4",
  },
  {
    id: "langchain",
    name: "LangChain",
    category: "Agent Orchestration",
    oneLiner: "The most robust modular framework to link memory, vectors, and chains to LLM nodes.",
    description: "Enables rapid assembly of enterprise-grade compound AI pipelines with pre-built adapters for hundreds of standard tools.",
    useCase: "Powering semantic RAG workflows on hybrid text/image database warehouses.",
    gridSpan: "col-span-1 md:col-span-1 lg:col-span-4",
  },
  {
    id: "llamaindex",
    name: "LlamaIndex",
    category: "Agent Orchestration",
    oneLiner: "The specialized data framework designed specifically to connect private documents with LLMs.",
    description: "Features elite vector query transformations, advanced hierarchical node parsing, and ingestion indexers.",
    useCase: "Transforming internal databases, Slack logs, and dynamic wikis into clean RAG pipelines.",
    gridSpan: "col-span-1 md:col-span-1 lg:col-span-4",
  },
  {
    id: "crewai",
    name: "CrewAI",
    category: "Agent Orchestration",
    oneLiner: "Pragmatic multi-agent framework designed to assemble virtual agent teams with role-play personas.",
    description: "Allows natural execution loops where individual agents with strict boundaries delegate sub-tasks to teammate modules.",
    useCase: "Orchestrating autonomous market research, copy drafting, and editing loops without human intervention.",
    gridSpan: "col-span-1 md:col-span-1 lg:col-span-4",
  },
  {
    id: "huggingface",
    name: "Hugging Face",
    category: "Core Foundation",
    oneLiner: "The global home of open-source models, datasets, tokenizers, and active community architectures.",
    description: "Enables teams to pull, fine-tune, download, and evaluate the latest Mistral, Llama, and Stable Diffusion networks.",
    useCase: "Hosting local, isolated model checkpoints for maximum privacy compliance.",
    gridSpan: "col-span-1 md:col-span-1 lg:col-span-4",
  },
  {
    id: "autogen",
    name: "AutoGen",
    category: "Agent Orchestration",
    oneLiner: "Microsoft's multi-agent framework designed for customizable dialogue-driven systems.",
    description: "Specializes in complex multi-agent conversations, supporting nested chats, human-in-the-loop overrides, and code executors.",
    useCase: "Simulating workspace interactions where a QA bot, designer bot, and dev bot collaboratively code.",
    gridSpan: "col-span-1 md:col-span-1 lg:col-span-4",
  },
  {
    id: "pytorch",
    name: "PyTorch",
    category: "Deep Learning & Cloud",
    oneLiner: "The world's leading tensor library and deep learning backend.",
    description: "Offers extreme flexibility, clean debug loops, dynamic computational graph creation, and absolute community adoption.",
    useCase: "Writing custom multi-head attention blocks and training deep neural backbones.",
    gridSpan: "col-span-1 md:col-span-1 lg:col-span-4",
  },
  {
    id: "fastapi",
    name: "FastAPI",
    category: "Agent Orchestration",
    oneLiner: "An asynchronous micro-framework built for exposing machine learning pipelines.",
    description: "Utilizes Python typing to generate automatic Swagger specifications, supporting extremely rapid data streaming and high async throughput.",
    useCase: "Wrapping fine-tuned model weights into a lightning-fast cloud API endpoint.",
    gridSpan: "col-span-1 md:col-span-1 lg:col-span-4",
  },
  {
    id: "tensorflow",
    name: "TensorFlow",
    category: "Deep Learning & Cloud",
    oneLiner: "Google's production-proven mathematical framework built for scale.",
    description: "Features high-performance execution utilities, mobile-friendly tf.lite pipelines, and extreme distributed cluster reliability.",
    useCase: "Deploying high-frequency vision models on embedded camera setups and massive server arrays.",
    gridSpan: "col-span-1 md:col-span-1 lg:col-span-4",
  },
  {
    id: "aws",
    name: "AWS Cloud",
    category: "Deep Learning & Cloud",
    oneLiner: "Amazon Web Services, powering massive GPU scaling on SageMaker clusters.",
    description: "Provides absolute redundancy, scalable S3 vector buckets, and cloud computation power to manage giant workloads.",
    useCase: "Scaling distributed training pipelines across redundant, top-tier H100 clusters.",
    gridSpan: "col-span-1 md:col-span-1 lg:col-span-4",
  },
  {
    id: "gcp",
    name: "Google Cloud",
    category: "Deep Learning & Cloud",
    oneLiner: "Google Cloud Platform, home of the legendary custom Tensor Processing Unit (TPU).",
    description: "Guarantees rapid multi-host model deployment with Vertex AI registries and specialized Google networking backbones.",
    useCase: "Accelerating transformer model training loops using specialized TPU pod matrix engines.",
    gridSpan: "col-span-1 md:col-span-1 lg:col-span-4",
  },
];

export function TechEcosystem() {
  return (
    <section id="ecosystem-section" className="py-24 bg-[#0B1E2B] text-white relative overflow-hidden border-t border-white/5">
      
      {/* Background ambient decorative elements - Stripe / Vercel style grids */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8AE60005_1px,transparent_1px),linear-gradient(to_bottom,#8AE60005_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#8AE600]/10 to-transparent blur-[120px] rounded-full" />
        <div className="absolute top-[60%] right-0 w-[500px] h-[500px] bg-gradient-to-l from-teal-500/5 to-transparent blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-left mb-20 space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8AE600]/10 border border-[#8AE600]/20 text-[11px] font-mono font-bold uppercase tracking-widest text-[#8AE600]">
            <Binary className="w-3.5 h-3.5 text-[#8AE600] animate-pulse" />
            Vetted Production Architecture
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-none">
            Ecosystem <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8AE600] via-teal-300 to-emerald-400">
              &amp; Tech Stack Pipeline
            </span>
          </h2>
          <p className="text-slate-400 font-normal text-sm md:text-base max-w-2xl leading-relaxed">
            We bypass historical simulations. Our engineers build and deploy real-world stateful agents, scalable RAG clusters, and production pipeline topologies.
          </p>
        </div>

        {/* Premium Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          
          {technologies.map((node, idx) => {
            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.03 }}
                className={`${node.gridSpan} group relative rounded-2xl border border-white/5 bg-white/[0.02] p-6 md:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-[#8AE600]/30 hover:bg-white/[0.04]`}
                style={{
                  boxShadow: "0 10px 30px -15px rgba(0,0,0,0.7)"
                }}
              >
                {/* Micro tech grid line background (visible on hover) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.05] bg-[linear-gradient(to_right,#8AE600_1px,transparent_1px),linear-gradient(to_bottom,#8AE600_1px,transparent_1px)] bg-[size:16px_16px] transition-all duration-500 pointer-events-none" />
                
                {/* Premium Glow effect behind logo */}
                <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-gradient-to-br from-[#8AE600]/10 to-transparent blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="space-y-6">
                  {/* Top row: Official Logo always visible & Category */}
                  <div className="flex items-start justify-between">
                    {/* SVG Logo Container (Strictly 64px x 64px) */}
                    <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center shadow-lg group-hover:border-[#8AE600]/40 transition-all duration-300 shrink-0 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(138,230,0,0.15)]">
                      <TechLogo id={node.id} className="w-10 h-10 object-contain" />
                    </div>
                    
                    <span className="text-[10px] font-mono font-bold text-slate-500 tracking-widest uppercase bg-white/5 px-2.5 py-1 rounded-md border border-white/5 group-hover:border-[#8AE600]/10 group-hover:text-slate-400 transition-all duration-300">
                      {node.category}
                    </span>
                  </div>

                  {/* Text Details */}
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-[#8AE600] transition-colors duration-300 flex items-center gap-1.5">
                      {node.name}
                    </h3>
                    <p className="text-sm font-semibold text-slate-300 leading-normal">
                      {node.oneLiner}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed font-normal">
                      {node.description}
                    </p>
                  </div>
                </div>

                {/* Real-World Use Case at the bottom - fully integrated and styled */}
                <div className="mt-8 pt-4 border-t border-white/5 group-hover:border-[#8AE600]/10 transition-colors duration-300">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Workflow className="w-3.5 h-3.5 text-[#8AE600]" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-300">Production Use Case</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-normal italic">
                    "{node.useCase}"
                  </p>
                </div>

                {/* Modern subtle Vercel-style corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-transparent group-hover:border-[#8AE600]/20 rounded-tr-2xl transition-all duration-300 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-transparent group-hover:border-[#8AE600]/20 rounded-bl-2xl transition-all duration-300 pointer-events-none" />
              </motion.div>
            );
          })}

        </div>

        {/* Dynamic callout banner at the bottom of the grid */}
        <div className="mt-16 p-8 rounded-2xl border border-white/5 bg-[#0D2534] relative overflow-hidden text-left flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#8AE600]/5 rounded-full blur-[60px] pointer-events-none" />
          <div className="space-y-2 relative z-10">
            <h4 className="text-lg font-bold text-white">Looking for complete syllabus and pipeline integration guides?</h4>
            <p className="text-sm text-slate-400">Download syllabus pipelines or get live admissions consulting on our RAG &amp; multi-agent systems modules.</p>
          </div>
          <a
            href="#contact-section"
            className="px-6 py-3 rounded-xl bg-[#8AE600] hover:bg-[#9cf01a] text-[#0B1E2B] text-xs font-mono font-extrabold uppercase tracking-widest transition-all shadow-lg hover:shadow-[0_0_20px_rgba(138,230,0,0.25)] shrink-0 cursor-pointer"
          >
            Request Syllabus Pack
          </a>
        </div>

      </div>
    </section>
  );
}
