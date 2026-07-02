import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  X, 
  Sparkles, 
  User, 
  Mail, 
  Phone, 
  BookOpen, 
  MessageSquare, 
  ArrowRight,
  Gift,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { LogoIcon } from "./LogoIcon";

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCourse?: string;
}

export function LeadCaptureModal({ isOpen, onClose, initialCourse = "" }: LeadCaptureModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState(initialCourse);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const courseOptions = [
    { value: "", label: "Select a Course of Interest" },
    { value: "Artificial Intelligence Mastery", label: "Artificial Intelligence Mastery (Core AI)" },
    { value: "Machine Learning", label: "Machine Learning (Core AI)" },
    { value: "Generative AI Specialization", label: "Generative AI Specialization (GenAI)" },
    { value: "Data Science", label: "Data Science (Data & Analytics)" },
    { value: "Python Programming for AI", label: "Python Programming for AI (Foundational)" },
    { value: "AI Agents Development", label: "AI Agents Development (GenAI)" },
    { value: "Agentic AI Architectures", label: "Agentic AI Architectures (GenAI)" },
    { value: "Workflow Automation with AI", label: "Workflow Automation with AI (GenAI)" },
    { value: "Cloud AI Solutions & MLOps", label: "Cloud AI Solutions & MLOps (Core AI)" },
    { value: "General Career Consultation", label: "General Career Consultation / Other" }
  ];

  useEffect(() => {
    setCourse(initialCourse);
  }, [initialCourse]);

  const handleClose = () => {
    onClose();
    // Even if closed without submitting, we set a temporary flag for this session to avoid annoying the user
    // but keep it openable again on next session if they didn't submit.
    // If they did submit, we permanently store it.
    sessionStorage.setItem("zelix_lead_modal_dismissed", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!name.trim()) {
      setSubmitError("Please enter your full name.");
      return;
    }
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setSubmitError("Please enter a valid email address.");
      return;
    }
    if (!phone.trim() || phone.replace(/\D/g, "").length < 10) {
      setSubmitError("Please enter a valid 10-digit phone number.");
      return;
    }
    if (!course) {
      setSubmitError("Please select a course of interest.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/admission-enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          course,
          message,
        }),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Failed to submit request.");
      }

      setSubmitSuccess(true);
      // Persist submission status so they never see the lead popup modal again
      localStorage.setItem("zelix_lead_captured_v1", "true");
    } catch (err: any) {
      console.error("Lead submission error:", err);
      setSubmitError(err.message || "An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Blur Dark Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md cursor-pointer"
          />

          {/* Premium Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
            className="relative w-full max-w-lg border border-[#BA905E]/20 bg-[#192153] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.45)] overflow-hidden z-10 flex flex-col max-h-[90vh]"
          >
            {/* Top gradient glow line */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-[#BA905E] to-[#B1D2FA]" />

            {/* Close Button Top Right */}
            <button
              onClick={handleClose}
              id="close-lead-modal"
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors z-30 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Scrollable Container */}
            <div className="overflow-y-auto no-scrollbar p-6 md:p-8 space-y-6">
              
              {!submitSuccess ? (
                <>
                  {/* Premium Branding & Offer Header */}
                  <div className="text-center space-y-3 pt-2">
                    <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-[#BA905E]/10 border border-[#BA905E]/20 text-xs font-mono font-bold tracking-wider text-[#BA905E]">
                      <Gift className="w-4 h-4 text-[#BA905E] animate-bounce" />
                      EXCLUSIVE COMPLIMENTARY OFFER
                    </div>
                    
                    <div className="flex items-center justify-center gap-3">
                      <LogoIcon className="w-8 h-8 shrink-0" />
                      <span className="text-lg font-mono font-black tracking-widest text-white">ZELIX AI</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-none mt-2">
                      Get a Free AI <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BA905E] to-[#B1D2FA]">
                        Career Roadmap + Consultation
                      </span>
                    </h3>
                    
                    <p className="text-xs text-slate-300 font-normal max-w-sm mx-auto leading-relaxed">
                      Transform your professional trajectory. Speak directly with Nagpur's elite AI mentors and build a tailored career progression plan.
                    </p>
                  </div>

                  {/* Submission Error Alert */}
                  {submitError && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-2.5 text-xs text-red-400 text-left animate-shake">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  {/* Lead Capture Form */}
                  <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    
                    {/* Full Name field */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                        Full Name
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500">
                          <User className="w-4 h-4" />
                        </span>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Arpit Dhote"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0f2137] border border-white/10 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#BA905E]/60 focus:ring-2 focus:ring-[#BA905E]/10 transition-all font-normal"
                        />
                      </div>
                    </div>

                    {/* Email & Phone side-by-side or stacked on mobile */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Email Address field */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                          Email Address
                        </label>
                        <div className="relative">
                          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500">
                            <Mail className="w-4 h-4" />
                          </span>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="name@example.com"
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0f2137] border border-white/10 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#BA905E]/60 focus:ring-2 focus:ring-[#BA905E]/10 transition-all font-normal"
                          />
                        </div>
                      </div>

                      {/* Phone Number field */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                          Phone Number
                        </label>
                        <div className="relative">
                          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500">
                            <Phone className="w-4 h-4" />
                          </span>
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="9876543210"
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0B1E2B] border border-white/5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#8AE600]/50 focus:ring-2 focus:ring-[#8AE600]/10 transition-all font-normal"
                          />
                        </div>
                      </div>

                    </div>

                    {/* Course select field */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                        Course Interested In
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">
                          <BookOpen className="w-4 h-4" />
                        </span>
                        <select
                          required
                          value={course}
                          onChange={(e) => setCourse(e.target.value)}
                          className="w-full pl-10 pr-10 py-3 rounded-xl bg-[#0f2137] border border-white/10 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#BA905E]/60 focus:ring-2 focus:ring-[#BA905E]/10 transition-all font-normal appearance-none cursor-pointer"
                        >
                          {courseOptions.map((opt) => (
                            <option key={opt.value} value={opt.value} className="bg-[#192153] text-white">
                              {opt.label}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 text-[10px] font-mono font-bold">
                          ▼
                        </div>
                      </div>
                    </div>

                    {/* Message textarea field */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                        Message / Professional Objectives
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-3.5 text-slate-500">
                          <MessageSquare className="w-4 h-4" />
                        </span>
                        <textarea
                          rows={2}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Let us know your current background and career aspirations..."
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0f2137] border border-white/10 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#BA905E]/60 focus:ring-2 focus:ring-[#BA905E]/10 transition-all font-normal resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-2 py-4 rounded-xl bg-[#BA905E] hover:bg-[#d1a66e] disabled:bg-slate-700 disabled:cursor-not-allowed text-[#192153] text-xs font-mono font-black uppercase tracking-widest transition-all shadow-lg hover:shadow-[0_0_20px_rgba(186,144,94,0.25)] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-[#0B1E2B] border-t-transparent rounded-full animate-spin" />
                          Scheduling Your consultation...
                        </>
                      ) : (
                        <>
                          Book Free AI Career Consultation
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    
                  </form>
                </>
              ) : (
                /* Success View */
                <div className="text-center py-8 px-4 space-y-6 flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-16 h-16 rounded-full bg-[#BA905E]/10 border-2 border-[#BA905E] flex items-center justify-center text-[#BA905E]"
                  >
                    <CheckCircle2 className="w-8 h-8" />
                  </motion.div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-white tracking-tight">Consultation Requested!</h3>
                    <p className="text-sm text-[#BA905E] font-mono font-bold uppercase tracking-wider">
                      Your Career Roadmap is Awaiting
                    </p>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal max-w-xs mx-auto">
                    Thank you. Our admissions team will contact you shortly.
                  </p>

                  <button
                    onClick={handleClose}
                    className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all text-xs font-mono font-bold uppercase tracking-wider cursor-pointer"
                  >
                    Explore Zelix Programs
                  </button>
                </div>
              )}

            </div>
          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}
