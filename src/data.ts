import { Course, Project, Mentor, Testimonial } from "./types";

export const courses: Course[] = [
  {
    id: "ai-core",
    title: "Artificial Intelligence Mastery",
    duration: "2 months",
    level: "Beginner to Intermediate",
    category: "Core AI",
    description: "Master the conceptual foundations and math of Artificial Intelligence. Dive into neural networks, search algorithms, and intelligent systems design from scratch.",
    skills: ["Deep Learning Foundations", "Neural Networks", "NLP Fundamentals", "Search Algorithms", "AI Ethics"],
    outcomes: ["Design search agents", "Construct artificial neural architectures", "Qualify for Entry AI Developer roles"],
    rating: 4.9
  },
  {
    id: "ml",
    title: "Machine Learning",
    duration: "2 months",
    level: "Beginner to Intermediate",
    category: "Core AI",
    description: "Learn practical regression, classification, clustering, and deep learning architectures with real datasets. Master deployment workflows.",
    skills: ["Supervised Learning", "Unsupervised Learning", "Scikit-Learn", "Model Optimization", "Feature Engineering"],
    outcomes: ["Deploy predictive microservices", "Fine-tune estimators", "Understand statistical models"],
    rating: 4.8
  },
  {
    id: "generative-ai",
    title: "Generative AI Specialization",
    duration: "2 months",
    level: "Beginner to Intermediate",
    category: "Generative AI",
    description: "Master LLMs, Stable Diffusion, and foundational models. Learn prompt engineering, embedding generation, and fine-tuning mechanics.",
    skills: ["LLM Fine-Tuning", "Stable Diffusion", "Embeddings", "Prompt Engineering", "Vector Databases"],
    outcomes: ["Build advanced Generative AI pipelines", "Engineer domain-specific LLM parameters", "Launch synthetic media applications"],
    rating: 4.9
  },
  {
    id: "data-science",
    title: "Data Science",
    duration: "2 months",
    level: "Beginner to Intermediate",
    category: "Data & Analytics",
    description: "Become a complete data scientist. Master exploratory data analysis, inferential statistics, and machine learning models on live business cases.",
    skills: ["Statistical Inference", "Pandas & NumPy", "Matplotlib & Seaborn", "Scikit-Learn", "Feature Selection"],
    outcomes: ["Predict consumer trends", "Deliver end-to-end data pipelines", "Accelerate product analytics metrics"],
    rating: 4.8
  },
  {
    id: "python",
    title: "Python Programming for AI",
    duration: "2 months",
    level: "Beginner to Intermediate",
    category: "Foundational",
    description: "The essential starting point. Master Python fundamentals, object-oriented concepts, and packages required for Data Science & AI.",
    skills: ["Python Syntax", "OOP Principles", "Data Structures", "NumPy Basics", "File Handling & APIs"],
    outcomes: ["Write clean standard script files", "Integrate external web APIs", "Solve core algorithm problems easily"],
    rating: 4.8
  },
  {
    id: "ai-agents",
    title: "AI Agents Development",
    duration: "2 months",
    level: "Beginner to Intermediate",
    category: "Generative AI",
    description: "Build autonomous software agents capable of thinking, planning, calling tools, and executing complex workflows without human intervention.",
    skills: ["LangChain", "CrewAI", "Agentic Decision Frameworks", "Tool Invocations", "Memory Architectures"],
    outcomes: ["Create collaborative multi-agent teams", "Automate customer support pipelines", "Build autonomous web researchers"],
    rating: 5.0
  },
  {
    id: "agentic-ai",
    title: "Agentic AI Architectures",
    duration: "2 months",
    level: "Beginner to Intermediate",
    category: "Generative AI",
    description: "Advance to complex multi-step reasoning models. Implement self-reflection, planning, self-correction, and tool routing.",
    skills: ["LangGraph", "Stateful Reasoning", "Graph Workflows", "Self-Correction loops", "Hierarchical Teams"],
    outcomes: ["Deploy robust production-ready agents", "Manage complex graph states", "Handle unpredictable user edges"],
    rating: 4.9
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation with AI",
    duration: "2 months",
    level: "Beginner to Intermediate",
    category: "Generative AI",
    description: "Integrate AI inside corporate workflows. Build automated business operations linking LLMs with Slack, Gmail, Sheets, and internal systems.",
    skills: ["Zapier AI", "n8n Workflows", "API Integration", "Webhooks", "Custom Action Triggers"],
    outcomes: ["Save thousands of hours of manual labor", "Connect custom LLMs to existing SaaS", "Design flawless triggers"],
    rating: 4.8
  },
  {
    id: "cloud-ai",
    title: "Cloud AI Solutions & MLOps",
    duration: "2 months",
    level: "Beginner to Intermediate",
    category: "Core AI",
    description: "Learn to host, scale, and monitor modern AI applications on AWS, Google Cloud, and Azure. Master CI/CD and serverless inference.",
    skills: ["Google Cloud Vertex AI", "AWS SageMaker", "Docker & Kubernetes", "Model Monitoring", "CI/CD for AI"],
    outcomes: ["Deploy high-availability APIs", "Handle massive scale model inference", "Configure continuous integration pipelines"],
    rating: 4.9
  }
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Autonomous Customer Support Agent Team",
    category: "AI Chatbots / Agents",
    difficulty: "Advanced",
    description: "A CrewAI & LangChain powered team of collaborative agents that read product docs, verify warranty details in a database, write polite responses, and draft follow-up support tickets.",
    technologies: ["CrewAI", "LangChain", "Gemini API", "PostgreSQL"],
    impact: "Reduces ticket response times by 85% and automates 60% of tier-1 inquiries completely.",
    demoSnippet: `from crewai import Agent, Crew, Process, Task\n\nsupport_agent = Agent(\n    role='Support Specialist',\n    goal='Resolve customer queries with empathy',\n    backstory='Expert in reading product manuals and troubleshooting issues.'\n)`
  },
  {
    id: "proj-2",
    title: "Enterprise Multi-Source RAG Pipeline",
    category: "RAG Applications",
    difficulty: "Intermediate",
    description: "A dynamic Retrieval-Augmented Generation system parsing PDFs, Word documents, websites, and database schemas with hybrid search and reranking models for contextual truth.",
    technologies: ["LlamaIndex", "ChromaDB", "Cohere Rerank", "FastAPI"],
    impact: "Answers employee legal & compliance queries with zero hallucinations and accurate citations.",
    demoSnippet: `from llama_index.core import VectorStoreIndex, SimpleDirectoryReader\n\ndocuments = SimpleDirectoryReader("./data").load_data()\nindex = VectorStoreIndex.from_documents(documents)\nquery_engine = index.as_query_engine(similarity_top_k=3)`
  },
  {
    id: "proj-3",
    title: "Intelligent Defect Detection System",
    category: "Computer Vision Projects",
    difficulty: "Advanced",
    description: "An automated quality assurance vision model running on factory camera feeds to classify, highlight, and alert staff about micro-fractures in automotive components in real-time.",
    technologies: ["PyTorch", "YOLOv8", "OpenCV", "GStreamer"],
    impact: "Drives defect tracking efficiency to 99.4% on fast-moving industrial conveyor belts.",
    demoSnippet: `import cv2\nfrom ultralytics import YOLO\n\nmodel = YOLO("custom_defect_weights.pt")\nresults = model.predict(source="conveyor_cam_01.mp4", show=True)`
  },
  {
    id: "proj-4",
    title: "Dynamic Customer Churn Predictor",
    category: "Predictive Analytics",
    difficulty: "Intermediate",
    description: "A predictive business model that analyzes consumer transaction volumes, customer care logs, and usage patterns to compute an active risk score and trigger retention offers.",
    technologies: ["Scikit-Learn", "XGBoost", "Pandas", "SHAP Explainability"],
    impact: "Helped a Nagpur-based retail client decrease customer churn rates by 22% in three months.",
    demoSnippet: `import xgboost as xgb\nfrom sklearn.model_selection import train_test_split\n\nX_train, X_test, y_train, y_test = train_test_split(X, y)\nclf = xgb.XGBClassifier().fit(X_train, y_train)`
  },
  {
    id: "proj-5",
    title: "AI Legal Assistant & Document Summarizer",
    category: "Legal AI Assistants",
    difficulty: "Advanced",
    description: "A specialized domain agent that parses 100+ page commercial contracts, checks for risky non-compete clauses or compliance liabilities, and translates legalese into simple summaries.",
    technologies: ["Gemini-3.5-flash", "LlamaIndex", "Streamlit", "PDFPlumber"],
    impact: "Reduces contract auditing times for local consultancies from 6 hours to less than 3 minutes.",
    demoSnippet: `const response = await ai.models.generateContent({\n  model: "gemini-3.5-flash",\n  contents: "Analyze this legal clause for hidden liabilities: " + clauseText\n});`
  },
  {
    id: "proj-6",
    title: "Diagnostic Assist & Healthcare OCR",
    category: "Healthcare AI Systems",
    difficulty: "Advanced",
    description: "An AI-powered document reader analyzing handwritten prescription slips and laboratory diagnostic reports, structuring them into FHIR-compliant medical records with drug interaction checks.",
    technologies: ["HuggingFace", "Tesseract OCR", "FastAPI", "Uvicorn"],
    impact: "Minimizes transcription errors for clinical data by 94% in regional community wellness setups.",
    demoSnippet: `import pytesseract\nfrom PIL import Image\n\ntext = pytesseract.image_to_string(Image.open("prescription_scan.png"))`
  },
  {
    id: "proj-7",
    title: "Algorithmic Fraud & Anomalous Charge Detector",
    category: "Finance AI Solutions",
    difficulty: "Intermediate",
    description: "An isolation forest anomalies detection model that monitors banking transaction ledgers to flag outlier charges and credit fraud spikes instantly.",
    technologies: ["Scikit-Learn", "Kafka", "InfluxDB", "Grafana"],
    impact: "Flags high-probability fraudulent actions with a 0.05% false alarm rate in secure testing environments.",
    demoSnippet: `from sklearn.ensemble import IsolationForest\n\nmodel = IsolationForest(contamination=0.01)\nmodel.fit(transaction_features)`
  }
];

export const mentors: Mentor[] = [
  {
    name: "Arpit Dhote",
    role: "Chief AI Mentor & Architect",
    experience: "10+ Years in Applied AI & Deep Tech",
    expertise: ["Deep Learning (DL)", "Generative AI (GenAI)", "Agentic AI Systems", "Large Language Models"],
    bio: "Arpit has built cutting-edge AI pipelines for enterprise clients globally. He is passionate about bridging the tech gap in Central India by creating industry-ready AI innovators and developers.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Jitendra Maind",
    role: "Senior Data Science Mentor",
    experience: "8+ Years in Enterprise Analytics & Machine Learning",
    expertise: ["Data Science", "Big Data Pipelines", "Statistical Inference"],
    bio: "Jitendra is a seasoned data science architect specializing in predictive algorithms and big data pipelines. He has led complex business intelligence migrations for national scale systems.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    name: "Pratik Deshmukh",
    role: "Software Engineer to AI Engineer",
    company: "TCS",
    text: "Zelix AI completely transformed my developer journey. Coming from a traditional web tech background, the Agentic AI and GenAI workshops taught by Arpit sir gave me hands-on confidence. I successfully transitioned to the core AI team at my company with a 65% salary hike!",
    metric: "65% Package Hike",
    type: "student"
  },
  {
    id: "t-2",
    name: "Nidhi Agrawal",
    role: "Engineering Graduate",
    company: "Placed at Cognizant",
    text: "The 100% placement support at Zelix AI is genuine! They didn't just teach me Python and Machine Learning; they guided my resume-building, conducted 5 mock interviews, and landed me my first high-paying job. Central India's absolute best training experience.",
    metric: "Cognizant Placement",
    type: "student"
  },
  {
    id: "t-3",
    name: "Rajesh Kulkarni",
    role: "VP Operations",
    company: "Deshmukh Logistics Nagpur",
    text: "We hired Zelix AI for a corporate workshop on AI Adoption and Workflow Automation. In just 2 weeks, our operations team was leveraging custom n8n and Zapier AI bots. This has automated about 30 hours of manual tracking sheets weekly.",
    metric: "30+ Weekly Hours Saved",
    type: "corporate"
  }
];
