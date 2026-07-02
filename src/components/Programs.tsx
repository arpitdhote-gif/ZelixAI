import { useState } from "react";
import { Course } from "../types";
import { courses } from "../data";
import { Clock, BarChart, ChevronRight, X, Sparkles, Filter, Briefcase, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SectionWave } from "./SectionWave";

interface ProgramsProps {
  onEnrollClick: (courseName: string) => void;
}

export function Programs({ onEnrollClick }: ProgramsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeCourseDetails, setActiveCourseDetails] = useState<Course | null>(null);

  const categories = ["All", "Core AI", "Generative AI", "Data & Analytics", "Foundational"];

  const filteredCourses = selectedCategory === "All"
    ? courses
    : courses.filter(c => c.category === selectedCategory);

  return (
    <section id="programs-section" className="relative overflow-hidden bg-[#FFFAEE] px-6 py-24 text-[#192153] sm:px-8 lg:px-10">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-[#BA905E]/10 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 h-72 w-72 rounded-full bg-[#B1D2FA]/20 blur-3xl" />
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
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center space-y-5">
          <div className="section-pill mx-auto">Premium learning pathways</div>
          <h2 className="section-heading">
            Explore our <span className="text-[#BA905E]">elite AI programs</span>
          </h2>
          <p className="section-copy">
            Every program is designed for practical delivery, real-world outcomes, and the confidence to build immediately after training.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          <div className="mr-2 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#31406b]">
            <Filter className="h-3.5 w-3.5 text-[#BA905E]" />
            Filter by domain
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] transition-all duration-300 ${
                selectedCategory === cat
                  ? "border-[#BA905E] bg-[#BA905E] text-[#192153] shadow-[0_12px_25px_-16px_rgba(186,144,94,0.6)]"
                  : "border-[#192153]/10 bg-white/80 text-[#31406b] hover:border-[#BA905E]/40 hover:text-[#192153]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <motion.article
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="section-card relative flex flex-col justify-between overflow-hidden p-7 text-left"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#B1D2FA] via-[#BA905E] to-[#B1D2FA]" />
                <div className="pointer-events-none absolute right-3 top-3 h-16 w-16 rounded-[999px_0_0_999px] bg-[#BA905E] shadow-[0_12px_28px_-14px_rgba(186,144,94,0.8)]" />
                <div className="pointer-events-none absolute right-6 top-6 h-10 w-10 rounded-full border border-[#192153]/10 bg-[#fffdf7]/80" />
                <div className="relative z-10 pr-14">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <span className="rounded-full border border-[#BA905E]/20 bg-[#BA905E]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#BA905E]">
                      {course.category}
                    </span>
                    <span className="flex items-center gap-1 text-sm font-semibold text-[#31406b]">
                      <Sparkles className="h-3.5 w-3.5 text-[#BA905E]" />
                      {course.rating.toFixed(1)}
                    </span>
                  </div>

                  <h3 className="mb-3 text-[1.35rem] font-black leading-snug text-[#192153]">{course.title}</h3>
                  <p className="mb-5 text-[0.95rem] font-medium leading-7 text-[#24304f]">{course.description}</p>

                  <div className="mb-5 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#192153] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                      <Briefcase className="h-3.5 w-3.5" /> Placement assistance
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-[#192153]/10 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#24304f]">
                      <MessageSquare className="h-3.5 w-3.5 text-[#BA905E]" /> Interview prep
                    </span>
                  </div>

                  <div className="mb-6 flex items-center gap-2 rounded-[1rem] border border-[#192153]/10 bg-[#f7f1de] px-4 py-3 text-sm text-[#24304f]">
                    <Clock className="h-4 w-4 text-[#BA905E]" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#192153]/70">Duration</span>
                    <span className="ml-2 font-semibold text-[#192153]">{course.duration}</span>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#31406b]">Skills covered</p>
                    <div className="flex flex-wrap gap-2">
                      {course.skills.slice(0, 3).map((skill, sIdx) => (
                        <span key={sIdx} className="rounded-full border border-[#192153]/10 bg-white px-3 py-1 text-[11px] text-[#31406b]">
                          {skill}
                        </span>
                      ))}
                      {course.skills.length > 3 && (
                        <span className="rounded-full border border-[#192153]/10 bg-white px-3 py-1 text-[11px] font-medium text-[#24304f]">
                          +{course.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-7 flex gap-3">
                  <button
                    id={`prog-details-${course.id}`}
                    onClick={() => setActiveCourseDetails(course)}
                    className="flex-1 rounded-full border border-[#192153]/10 bg-white px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#192153] transition-all hover:border-[#BA905E]/40 hover:bg-[#B1D2FA]/20"
                  >
                    View Syllabus
                  </button>
                  <button
                    id={`prog-enroll-${course.id}`}
                    onClick={() => onEnrollClick(course.title)}
                    className="brand-button flex flex-1 items-center justify-center gap-1 px-4 py-3 text-[11px] uppercase tracking-[0.25em]"
                  >
                    Enroll Now
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 text-center">
          <p className="text-sm text-[#31406b]">
            Unsure which program matches your background? Connect with our{' '}
            <a href="#contact-section" className="font-semibold text-[#BA905E] underline-offset-4 hover:underline">
              admissions coordinator
            </a>{' '}
            for a tailored guidance session.
          </p>
        </div>
      </div>

      <AnimatePresence>
        {activeCourseDetails && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCourseDetails(null)}
              className="absolute inset-0 bg-[#192153]/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] border border-[#192153]/10 bg-[#fffdf7] p-6 text-left text-[#192153] shadow-[0_30px_80px_-30px_rgba(25,33,83,0.6)] md:p-8"
            >
              <button
                id="close-syllabus-modal"
                onClick={() => setActiveCourseDetails(null)}
                className="absolute right-6 top-6 rounded-full border border-[#192153]/10 bg-white p-2 text-[#31406b] transition-all hover:text-[#192153]"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full border border-[#BA905E]/20 bg-[#BA905E]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#BA905E]">
                  {activeCourseDetails.category}
                </span>
                <span className="text-sm text-[#31406b]">Syllabus deep-dive</span>
              </div>

              <h3 className="mb-4 text-2xl font-bold text-[#192153] md:text-3xl">{activeCourseDetails.title}</h3>
              <p className="mb-6 text-sm leading-7 text-[#31406b]">
                {activeCourseDetails.description} Our two-month professional framework is split into focused weekly sprints that culminate in live portfolio projects.
              </p>

              <div className="mb-8 grid gap-8 md:grid-cols-2">
                <div className="space-y-3">
                  <h4 className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#BA905E]">
                    <Sparkles className="h-4 w-4" />
                    Core skills covered
                  </h4>
                  <ul className="space-y-2 text-sm text-[#31406b]">
                    {activeCourseDetails.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#BA905E]" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#BA905E]">
                    <BarChart className="h-4 w-4" />
                    Career outcomes
                  </h4>
                  <ul className="space-y-2 text-sm text-[#31406b]">
                    {activeCourseDetails.outcomes.map((out, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#B1D2FA]" />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-[#192153]/10 pt-6">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#31406b]">Format</p>
                  <p className="text-sm font-semibold text-[#192153]">Instructor-led batches</p>
                </div>
                <button
                  id="modal-enroll-cta"
                  onClick={() => {
                    onEnrollClick(activeCourseDetails.title);
                    setActiveCourseDetails(null);
                  }}
                  className="brand-button gap-1 px-5 py-3 text-[11px] uppercase tracking-[0.25em]"
                >
                  Apply & reserve spot
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
