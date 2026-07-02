import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Check, Compass } from "lucide-react";
import { courses } from "../data";

interface ContactProps {
  preselectedCourse: string;
}

export function ContactEnhanced({ preselectedCourse }: ContactProps) {
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
    <section id="contact-section" className="relative overflow-hidden bg-[#192153] px-6 py-24 text-[#eef4ff] sm:px-8 lg:px-10">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#B1D2FA]/20 blur-3xl" />
        <div className="absolute right-0 top-16 h-96 w-96 rounded-full bg-[#BA905E]/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[#B1D2FA]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center space-y-5">
          <div className="section-pill mx-auto border-white/15 bg-white/10 text-[#B1D2FA]">Admissions</div>
          <h2 className="section-heading text-white">Connect with admissions</h2>
          <p className="section-copy text-[#dfe8f7]">
            Enroll today or schedule an in-person tour of our Nagpur classroom facility. Seats remain intentionally limited to keep the experience focused.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-12 lg:items-start">
          <div className="space-y-8 text-left lg:col-span-5">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/10 p-7 shadow-[0_24px_70px_-36px_rgba(0,0,0,0.55)] backdrop-blur">
              <h3 className="text-2xl font-bold text-white">ZelixAI</h3>
              <p className="mt-3 text-sm leading-7 text-[#dfe8f7]">
                Walk in to tour our physical labs and discuss your technical pathway with our admissions team.
              </p>
            </div>

            <div className="space-y-4">
              {[{ icon: Phone, label: "Call admissions", value: "+91 9168432121", href: "tel:+919168432121" }, { icon: Phone, label: "WhatsApp", value: "+91 7522915151", href: "https://wa.me/917522915151" }, { icon: Mail, label: "General inquiries", value: "info@zelixai.in", href: "mailto:info@zelixai.in" }, { icon: MapPin, label: "Campus address", value: "1st floor, Plot no. 74, Somalvada Layout, Jai Prakash Nagar, Somalwada, Nagpur, Maharashtra 440025" }].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-white/10 p-5 shadow-[0_16px_40px_-30px_rgba(0,0,0,0.45)] backdrop-blur">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#BA905E]/10 text-[#BA905E]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B1D2FA]">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="mt-1 block text-sm font-semibold text-white hover:text-[#BA905E]">
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm font-semibold leading-7 text-white">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 p-5 text-center shadow-[0_24px_70px_-36px_rgba(0,0,0,0.55)] backdrop-blur lg:text-left">
              <div className="mb-3.5 flex items-center justify-between gap-3">
                <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#BA905E]">
                  <Compass className="h-3.5 w-3.5" />
                  Live location
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#dfe8f7]">Nagpur tech corridor</span>
              </div>
              <div className="relative flex h-28 items-center justify-center rounded-[1.25rem] border border-white/10 bg-[#10253b] p-4">
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:10px_10px]" />
                <div className="absolute inset-x-0 top-1/2 h-4 border-y border-white/10 bg-white/10" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#BA905E] bg-[#BA905E]/10 text-[#BA905E]">
                    <MapPin className="h-4 w-4 fill-[#BA905E]" />
                  </div>
                  <span className="mt-1 rounded-full border border-white/10 bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-white">ZelixAI Campus</span>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=1st+floor+Plot+no+74+Somalvada+Layout+Jai+Prakash+Nagar+Somalwada+Nagpur+Maharashtra+440025"
                target="_blank"
                rel="noreferrer"
                className="mt-4 block w-full rounded-full border border-white/10 bg-white/10 px-4 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-white transition-all hover:border-[#BA905E]/30 hover:bg-[#BA905E]/10"
              >
                Launch Google navigation
              </a>
            </div>
          </div>

          <div className="w-full lg:col-span-7">
            <div className="rounded-[1.75rem] border border-white/10 bg-[#0f2137]/80 p-6 shadow-[0_24px_70px_-36px_rgba(0,0,0,0.6)] backdrop-blur md:p-8">
              <h3 className="mb-6 text-xl font-bold text-white">Submit admission enquiry</h3>

              {success ? (
                <div className="space-y-4 py-12 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#BA905E]/10 text-[#BA905E]">
                    <Check className="h-8 w-8" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-[#192153]">Enquiry logged successfully!</h4>
                    <p className="mx-auto max-w-sm text-sm leading-7 text-[#31406b]">
                      Our coordinator will contact you within 2 business hours. Check your email or phone for confirmation.
                    </p>
                  </div>
                  <button
                    id="reset-enquiry-success"
                    onClick={() => setSuccess(false)}
                    className="rounded-full border border-[#192153]/10 bg-white px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#192153] transition-all hover:border-[#BA905E]/40"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  {error && (
                    <div className="rounded-[1rem] border border-rose-400/30 bg-rose-500/10 px-3.5 py-3 text-sm text-rose-200">
                      {error}
                    </div>
                  )}

                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B1D2FA]">Full Name</label>
                      <input
                        id="contact-form-name"
                        type="text"
                        required
                        placeholder="Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-[1rem] border border-white/10 bg-[#10253b] px-4 py-3 text-sm text-white shadow-sm outline-none transition-all placeholder:text-[#8da4c7] focus:border-[#BA905E]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B1D2FA]">Email Address</label>
                      <input
                        id="contact-form-email"
                        type="email"
                        required
                        placeholder="rahul@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-[1rem] border border-white/10 bg-[#10253b] px-4 py-3 text-sm text-white shadow-sm outline-none transition-all placeholder:text-[#8da4c7] focus:border-[#BA905E]"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B1D2FA]">Phone / WhatsApp</label>
                      <input
                        id="contact-form-phone"
                        type="tel"
                        required
                        placeholder="+91 9168432121"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-[1rem] border border-white/10 bg-[#10253b] px-4 py-3 text-sm text-white shadow-sm outline-none transition-all placeholder:text-[#8da4c7] focus:border-[#BA905E]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B1D2FA]">Interested Program</label>
                      <select
                        id="contact-form-course"
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="w-full cursor-pointer rounded-[1rem] border border-white/10 bg-[#10253b] px-4 py-3 text-sm text-white shadow-sm outline-none transition-all focus:border-[#BA905E]"
                      >
                        <option value="">Select a program</option>
                        {courses.map((course) => (
                          <option key={course.id} value={course.title}>
                            {course.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B1D2FA]">Message</label>
                    <textarea
                      id="contact-form-message"
                      rows={4}
                      placeholder="Tell us about your AI goals, experience level, and preferred batch timing..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full resize-none rounded-[1rem] border border-white/10 bg-[#10253b] px-4 py-3 text-sm text-white shadow-sm outline-none transition-all placeholder:text-[#8da4c7] focus:border-[#BA905E]"
                    />
                  </div>

                  <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                    <button
                      id="submit-admission-enquiry"
                      type="submit"
                      disabled={submitting}
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-[#BA905E] px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#192153] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_35px_-16px_rgba(186,144,94,0.55)] disabled:opacity-70 sm:flex-1"
                    >
                      {submitting ? "Processing enquiry..." : "Submit inquiry"}
                      <Send className="h-4 w-4" />
                    </button>

                    <a
                      href="https://wa.me/917522915151?text=Hello%20Zelix%20AI%2C%20I'm%20interested%20in%20enrolling%20for%20the%20AI%20and%20Machine%20Learning%20programs."
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/10 px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-white transition-all hover:border-[#BA905E]/40 hover:bg-[#BA905E]/10"
                    >
                      <MessageSquare className="h-5 w-5 text-[#BA905E]" />
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
