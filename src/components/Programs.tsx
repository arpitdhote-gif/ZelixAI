import { useState } from "react";
import { Course } from "../types";
import { courses } from "../data";
import { BookOpen, Clock, BarChart, ChevronRight, X, Sparkles, Filter } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

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
    <section id="programs-section" className="py-24 bg-[#0F2B3C] text-white transition-colors duration-300 relative border-t border-white/5">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-[#8AE600]/3 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-[#8AE600]/3 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8AE600] to-teal-300">Elite AI Programs</span>
          </h2>
          <p className="text-slate-300 font-normal text-sm md:text-base leading-relaxed">
            All programs are strictly 2 months long, featuring intense practical instruction, real-world deployment, and continuous career support.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 mr-2">
            <Filter className="w-3.5 h-3.5 text-[#8AE600]" />
            FILTER BY DOMAIN:
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-md text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer border ${
                selectedCategory === cat
                  ? "bg-[#8AE600] text-[#0F2B3C] border-[#8AE600] font-bold shadow-sm scale-102"
                  : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="rounded-lg border border-white/5 bg-[#0D2534] p-6 flex flex-col justify-between hover:border-[#8AE600]/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300 group relative overflow-hidden text-left"
              >
                {/* Accent line on top */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#8AE600]/0 via-[#8AE600]/50 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase bg-[#8AE600]/10 text-[#8AE600] border border-[#8AE600]/20">
                      {course.category}
                    </span>
                    <span className="text-xs font-mono font-medium text-slate-300 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                      ★ {course.rating.toFixed(1)}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold tracking-tight text-white mb-2 leading-snug group-hover:text-[#8AE600] transition-colors">
                    {course.title}
                  </h3>

                  {/* Short description */}
                  <p className="text-xs text-slate-300 font-normal mb-5 line-clamp-2 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Quick specs */}
                  <div className="flex items-center gap-2 py-3 border-t border-b border-white/5 mb-5">
                    <Clock className="w-4 h-4 text-[#8AE600] shrink-0" />
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Duration:</span>
                    <span className="text-xs font-bold text-white">{course.duration}</span>
                  </div>

                  {/* Preview Skills (First 3) */}
                  <div className="space-y-2 mb-6">
                    <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Skills Covered</p>
                    <div className="flex flex-wrap gap-1.5">
                      {course.skills.slice(0, 3).map((skill, sIdx) => (
                        <span key={sIdx} className="text-[10px] bg-white/5 text-slate-200 border border-white/10 px-2 py-0.5 rounded-sm">
                          {skill}
                        </span>
                      ))}
                      {course.skills.length > 3 && (
                        <span className="text-[10px] bg-white/5 text-slate-400 px-2 py-0.5 rounded-sm border border-white/10">
                          +{course.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2.5 pt-2">
                  <button
                    id={`prog-details-${course.id}`}
                    onClick={() => setActiveCourseDetails(course)}
                    className="flex-1 px-3 py-2.5 rounded-md text-xs font-mono uppercase tracking-wider text-white border border-white/10 hover:bg-white/5 bg-white/5 transition-colors flex items-center justify-center gap-1.5 cursor-pointer font-semibold"
                  >
                    View Syllabus
                  </button>
                  <button
                    id={`prog-enroll-${course.id}`}
                    onClick={() => onEnrollClick(course.title)}
                    className="flex-1 px-3 py-2.5 rounded-md text-xs font-mono uppercase font-bold text-[#0F2B3C] bg-[#8AE600] hover:bg-[#9cf01a] hover:scale-102 transition-all flex items-center justify-center gap-1 cursor-pointer shadow-sm group hover:shadow-[0_0_15px_rgba(138,230,0,0.3)]"
                  >
                    Enroll Now
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Syllabi Info Callout */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 font-mono">
            * Unsure which program matches your background? Connect with our{" "}
            <a href="#contact-section" className="text-[#8AE600] hover:underline font-bold">
              Admissions Coordinator
            </a>{" "}
            for a customized 1-on-1 counseling session.
          </p>
        </div>
      </div>

      {/* Course Details Dialog / Drawer (AnimatePresence) */}
      <AnimatePresence>
        {activeCourseDetails && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCourseDetails(null)}
              className="absolute inset-0 bg-black/75 backdrop-filter backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl rounded-lg border border-white/10 bg-[#0B212E] p-6 md:p-8 shadow-2xl z-10 overflow-y-auto max-h-[90vh] text-left text-white [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {/* Close Button */}
              <button
                id="close-syllabus-modal"
                onClick={() => setActiveCourseDetails(null)}
                className="absolute top-6 right-6 p-2 rounded-md border border-white/10 hover:bg-white/5 text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Category & Ratings */}
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-1 rounded-md bg-[#8AE600]/10 text-[#8AE600] text-xs font-mono font-bold tracking-wider uppercase border border-[#8AE600]/20">
                  {activeCourseDetails.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Syllabus Deep-Dive (Zelix Elite Tier)
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                {activeCourseDetails.title}
              </h3>

              {/* Full Description */}
              <p className="text-sm text-slate-300 font-normal mb-6 leading-relaxed">
                {activeCourseDetails.description} Our 2-month professional framework is split into structural weekly sprints culminating in active portfolio projects.
              </p>

              {/* Details Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Skills Section */}
                <div className="space-y-3 text-left">
                  <h4 className="text-xs font-mono font-bold text-[#8AE600] uppercase tracking-widest flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    Core Skills Covered
                  </h4>
                  <ul className="space-y-2">
                    {activeCourseDetails.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-300 font-normal text-left">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8AE600] shrink-0" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcomes Section */}
                <div className="space-y-3 text-left">
                  <h4 className="text-xs font-mono font-bold text-teal-300 uppercase tracking-widest flex items-center gap-1">
                    <BarChart className="w-4 h-4" />
                    Career Outcomes
                  </h4>
                  <ul className="space-y-2">
                    {activeCourseDetails.outcomes.map((out, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-300 font-normal text-left">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                        {out}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action */}
              <div className="flex items-center justify-between gap-4 pt-6 border-t border-white/5">
                <div className="text-left">
                  <p className="text-[10px] font-mono text-slate-400 uppercase">Format</p>
                  <p className="text-sm font-bold text-white">Instructor-Led Batches</p>
                </div>
                <button
                  id="modal-enroll-cta"
                  onClick={() => {
                    onEnrollClick(activeCourseDetails.title);
                    setActiveCourseDetails(null);
                  }}
                  className="px-6 py-3.5 rounded-md font-mono text-xs font-bold uppercase tracking-wider text-[#0F2B3C] bg-[#8AE600] hover:bg-[#9cf01a] hover:scale-102 transition-all flex items-center gap-1 cursor-pointer shadow-md hover:shadow-[0_0_15px_rgba(138,230,0,0.3)]"
                >
                  Apply &amp; Reserve Spot
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
