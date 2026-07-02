import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Check, Compass } from "lucide-react";
import { courses } from "../data";

interface ContactProps {
  preselectedCourse: string;
}

export function Contact({ preselectedCourse }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedCourse) {
      setFormData((prev) => ({ ...prev, course: preselectedCourse }));
      // Scroll to contact form smoothly
      const section = document.getElementById("contact-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [preselectedCourse]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await fetch("/api/admission-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        throw new Error("Failed to process your request. Check your values and try again.");
      }

      setSuccess(true);
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        message: ""
      });
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact-section" className="py-24 bg-[#0F2B3C] text-white transition-colors duration-300 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Connect With <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8AE600] to-teal-300">Admissions</span>
          </h2>
          <p className="text-slate-300 font-normal text-sm md:text-base leading-relaxed">
            Enroll today or schedule an in-person tour of our Nagpur classroom facility. Seats are strictly limited to 25 per batch to maintain 1-on-1 focus.
          </p>
        </div>

        {/* Form and info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Left panel: Info & Coordinates map */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">
                Zelix AI
              </h3>
              <p className="text-xs text-slate-400 font-normal leading-relaxed">
                Walk in to tour our state-of-the-art physical labs and discuss your technical pathway.
              </p>
            </div>

            {/* Quick stats items */}
            <div className="space-y-4.5">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-[#8AE600]/10 border border-[#8AE600]/20 text-[#8AE600] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Call admissions</p>
                  <a href="tel:+919168432121" className="text-sm font-bold text-white hover:text-[#8AE600] transition-colors">
                    +91 9168432121
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-[#8AE600]/10 border border-[#8AE600]/20 text-[#8AE600] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">General Inquiries</p>
                  <a href="mailto:info@zelixai.in" className="text-sm font-bold text-white hover:text-[#8AE600] transition-colors">
                    info@zelixai.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-[#8AE600]/10 border border-[#8AE600]/20 text-[#8AE600] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Campus address</p>
                  <p className="text-sm font-bold text-slate-200 leading-snug">
                    1st floor, Plot no. 74, Somalvada Layout, <br />
                    Jai Prakash Nagar, Somalwada, Nagpur, Maharashtra 440025
                  </p>
                </div>
              </div>
            </div>

            {/* Dynamic Map Vector Widget */}
            <div className="rounded-lg border border-white/5 bg-[#0D2534] p-5 overflow-hidden shadow-sm relative group text-center lg:text-left">
              <div className="flex items-center justify-between mb-3.5">
                <span className="text-[10px] font-mono font-bold text-[#8AE600] uppercase tracking-wider flex items-center gap-1">
                  <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "12s" }} />
                  Live Location Coordinates
                </span>
                <span className="text-[9px] font-mono text-slate-400">Nagpur Tech Corridor</span>
              </div>
              
              {/* Custom mock vector representation of Somalwada block */}
              <div className="h-28 rounded-md bg-[#0B1E2B] border border-white/5 relative flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] bg-[size:10px_10px]" />
                {/* Horizontal road lines */}
                <div className="absolute left-0 right-0 top-1/2 h-4 bg-white/5 flex items-center justify-center border-t border-b border-white/5" />
                {/* Wardha Road/Jai Prakash Nagar road label */}
                <span className="absolute left-4 top-[52%] text-[8px] font-mono text-slate-500 tracking-widest uppercase">WARDHA ROAD AREA</span>
                {/* Map Pins */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-[#8AE600]/20 border border-[#8AE600] text-[#8AE600] flex items-center justify-center shadow-md animate-bounce">
                    <MapPin className="w-4 h-4 fill-[#8AE600]" />
                  </div>
                  <span className="mt-1 text-[10px] font-mono font-bold text-white bg-[#0D2534] px-2 py-0.5 rounded-md border border-white/10 shadow-sm">
                    Zelix AI Campus
                  </span>
                </div>
              </div>

              {/* Direct Location Link */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=1st+floor+Plot+no+74+Somalvada+Layout+Jai+Prakash+Nagar+Somalwada+Nagpur+Maharashtra+440025"
                target="_blank"
                rel="noreferrer"
                className="mt-4 w-full py-2 rounded-md text-center text-xs font-mono uppercase tracking-wider text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors block cursor-pointer shadow-sm"
              >
                Launch Google Navigation
              </a>
            </div>
          </div>

          {/* Right panel: Premium Contact form */}
          <div className="lg:col-span-7 w-full">
            <div className="rounded-lg border border-white/5 bg-[#0D2534] p-6 md:p-8 shadow-md">
              <h3 className="text-xl font-bold text-white mb-6 text-left">
                Submit Admission Enquiry
              </h3>

              {success ? (
                /* Success Prompt */
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-md bg-[#8AE600]/10 text-[#8AE600] border border-[#8AE600]/20 flex items-center justify-center mx-auto shadow-sm">
                    <Check className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-white">Enquiry Logged Successfully!</h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-normal max-w-sm mx-auto">
                      Our coordinator will contact you within 2 business hours. Check your email or phone for confirmation.
                    </p>
                  </div>
                  <button
                    id="reset-enquiry-success"
                    onClick={() => setSuccess(false)}
                    className="px-6 py-2.5 rounded-md text-xs font-mono uppercase tracking-wider border border-white/10 bg-white/5 hover:bg-white/10 text-white cursor-pointer transition-colors shadow-sm"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                /* Form Grid */
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  {error && (
                    <div className="p-3.5 rounded-md bg-rose-500/10 text-rose-400 text-xs font-normal border border-rose-500/20">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Full Name</label>
                      <input
                        id="contact-form-name"
                        type="text"
                        required
                        placeholder="Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-md bg-[#0B1E2B] border border-white/10 focus:border-[#8AE600] focus:bg-[#0F2B3C] text-sm focus:outline-none transition-all text-white shadow-sm placeholder:text-slate-600"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Email Address</label>
                      <input
                        id="contact-form-email"
                        type="email"
                        required
                        placeholder="rahul@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-md bg-[#0B1E2B] border border-white/10 focus:border-[#8AE600] focus:bg-[#0F2B3C] text-sm focus:outline-none transition-all text-white shadow-sm placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Phone / WhatsApp</label>
                      <input
                        id="contact-form-phone"
                        type="tel"
                        required
                        placeholder="+91 9168432121"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-md bg-[#0B1E2B] border border-white/10 focus:border-[#8AE600] focus:bg-[#0F2B3C] text-sm focus:outline-none transition-all text-white shadow-sm placeholder:text-slate-600"
                      />
                    </div>

                    {/* Course Selection */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Interested Program</label>
                      <select
                        id="contact-form-course"
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="w-full px-4 py-3 rounded-md bg-[#0B1E2B] border border-white/10 focus:border-[#8AE600] focus:bg-[#0F2B3C] text-sm focus:outline-none transition-all text-white shadow-sm cursor-pointer"
                      >
                        <option value="" className="bg-[#0D2534] text-white">-- General consultation --</option>
                        {courses.map((c) => (
                          <option key={c.id} value={c.title} className="bg-[#0D2534] text-white">
                            {c.title} (2 months)
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Admissions Message / Goals</label>
                    <textarea
                      id="contact-form-message"
                      rows={4}
                      placeholder="Share your upskilling expectations, or offline Nagpur classroom batch queries..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-md bg-[#0B1E2B] border border-white/10 focus:border-[#8AE600] focus:bg-[#0F2B3C] text-sm focus:outline-none transition-all text-white shadow-sm placeholder:text-slate-600"
                    />
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button
                      id="submit-admission-enquiry"
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:flex-1 py-4 rounded-md font-mono text-xs uppercase tracking-wider font-extrabold text-[#0F2B3C] bg-[#8AE600] hover:bg-[#9cf01a] hover:shadow-[0_0_15px_rgba(138,230,0,0.3)] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm"
                    >
                      {submitting ? "Processing Enquiry..." : "Submit Inquiry Spot"}
                      <Send className="w-4.5 h-4.5" />
                    </button>
                    
                     <a
                      href="https://wa.me/917522915151?text=Hello%20Zelix%20AI%2C%20I'm%20interested%20in%20enrolling%20for%20the%20AI%20and%20Machine%20Learning%20programs."
                      target="_blank"
                      rel="noreferrer"
                      className="py-4 px-6 rounded-md font-mono text-xs uppercase tracking-wider text-white border border-white/10 bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <MessageSquare className="w-5 h-5 text-[#8AE600] shrink-0" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
