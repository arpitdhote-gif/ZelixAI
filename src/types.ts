export interface Course {
  id: string;
  title: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Beginner to Intermediate" | "Intermediate to Advanced";
  skills: string[];
  outcomes: string[];
  description: string;
  category: "Core AI" | "Generative AI" | "Data & Analytics" | "Foundational";
  rating: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  impact: string;
  demoSnippet?: string;
}

export interface Mentor {
  name: string;
  role: string;
  experience: string;
  expertise: string[];
  bio: string;
  avatar: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  text: string;
  metric?: string;
  type: "student" | "corporate";
}

export interface ConsultationResponse {
  summary: string;
  recommendedCourses: string[];
  whyFit: string;
  skillsToAcquire: string[];
  projectsToBuild: string[];
  careerOutcomes: string;
}

export interface AdmissionEnquiry {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
}
