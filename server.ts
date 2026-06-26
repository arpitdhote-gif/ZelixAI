import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini Client
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });

  // API Routes
  app.post("/api/career-consult", async (req, res) => {
    try {
      const { name, education, experience, targetOutcome, interests } = req.body;

      const prompt = `You are the Expert AI Career Advisor at Zelix Tech, Central India's Best AI Training Institute in Nagpur.
A candidate is seeking custom dynamic career counseling and upskilling recommendations.

User Details:
- Name: ${name || "Candidate"}
- Background/Education: ${education || "Not specified"}
- Work Experience: ${experience || "None"}
- Primary Interests: ${interests || "AI, Machine Learning, Automation"}
- Target Outcome: ${targetOutcome || "Career transition / Higher pay"}

Provide a highly personalized, professional, and detailed career roadmap recommending specific elite programs of Zelix Tech.
Choose appropriate courses from:
- AI & Machine Learning Mastery (Comprehensive Core program)
- Generative AI & Agentic AI (Advanced AI Agents, RAG & Automation workflows)
- Data Science & Data Analytics (Python, SQL, Power BI & predictive models)
- Python Foundations & AI Tooling (Fast-track absolute beginner)

You must respond in structured JSON format with this exact structure:
{
  "summary": "Short inspiring summary targeting their background",
  "recommendedCourses": ["Course Name 1", "Course Name 2"],
  "whyFit": "Clear explanation of why this fits their background and targets",
  "skillsToAcquire": ["Skill A", "Skill B", "Skill C"],
  "projectsToBuild": ["Specific project title with brief 1-line concept", "Second specific project with brief concept"],
  "careerOutcomes": "Concrete target job profiles and salary growth potential in India and globally"
}`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
        },
      });

      const resultText = response.text || "{}";
      res.json(JSON.parse(resultText));
    } catch (error: any) {
      console.error("Gemini consultation error:", error);
      res.status(500).json({ error: error.message || "Failed to generate recommendation" });
    }
  });

  // Admission Enquiries DB (in-memory mock for rich state)
  const enquiries: any[] = [];
  app.post("/api/admission-enquiry", async (req, res) => {
    const { name, email, phone, course, message } = req.body;
    if (!name || !email || !phone) {
      return res.status(400).json({ error: "Name, email, and phone number are required." });
    }
    const newEnquiry = {
      id: Date.now(),
      name,
      email,
      phone,
      course: course || "General Consultation",
      message: message || "",
      timestamp: new Date().toISOString(),
    };
    enquiries.push(newEnquiry);

    // Forward to Google Apps Script Web App API if configured
    const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
    if (scriptUrl) {
      try {
        console.log("Forwarding enquiry to Google Apps Script:", scriptUrl);
        const scriptResponse = await fetch(scriptUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            timestamp: newEnquiry.timestamp,
            name: newEnquiry.name,
            email: newEnquiry.email,
            phone: newEnquiry.phone,
            course: newEnquiry.course,
            message: newEnquiry.message,
          }),
        });

        if (!scriptResponse.ok) {
          console.error("Google Apps Script response error status:", scriptResponse.status);
        } else {
          const responseText = await scriptResponse.text();
          console.log("Google Apps Script response:", responseText);
        }
      } catch (err: any) {
        console.error("Failed to forward enquiry to Google Apps Script:", err.message || err);
      }
    } else {
      console.log("Google Apps Script URL not configured (GOOGLE_APPS_SCRIPT_URL). Saved in-memory only.");
    }

    res.json({ success: true, message: "Admission enquiry received successfully!", data: newEnquiry });
  });

  app.get("/api/enquiries", (req, res) => {
    res.json(enquiries);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Zelix Tech Express Server running on port ${PORT}`);
  });
}

startServer();
