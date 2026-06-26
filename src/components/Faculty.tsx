import { mentors } from "../data";
import { Award, Compass, MessageSquare, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";

interface FacultyProps {
  onDirectConsultClick: (mentorName: string) => void;
}

export function Faculty({ onDirectConsultClick }: FacultyProps) {
  return (
    <section id="faculty-section" className="py-24 bg-[#0F2B3C] text-white transition-colors duration-300 relative border-t border-white/5">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-[#8AE600]/3 blur-3xl" />
        <div className="absolute bottom-1/3 right-10 w-96 h-96 rounded-full bg-[#8AE600]/3 blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Learn From <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8AE600] to-teal-300">Industry Architects</span>
          </h2>
          <p className="text-slate-300 font-normal text-sm md:text-base leading-relaxed">
            Our mentors are active deep tech practitioners who build algorithms for global enterprises, not traditional textbook teachers.
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {mentors.map((mentor, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 md:p-8 rounded-lg border border-white/5 bg-[#0D2534] flex flex-col justify-between hover:border-[#8AE600]/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300 relative group overflow-hidden shadow-sm"
            >
              <div>
                {/* Profile row */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6">
                  <div className="relative shrink-0">
                    <img
                      src={mentor.avatar}
                      alt={mentor.name}
                      referrerPolicy="no-referrer"
                      className="w-20 h-20 rounded-md object-cover border border-white/10 shadow-sm group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute -bottom-1.5 -right-1.5 bg-[#8AE600] text-[#0F2B3C] p-1 rounded-md border border-[#0D2534]">
                      <Award className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="text-center sm:text-left space-y-1">
                    <h3 className="text-lg font-bold text-white">
                      {mentor.name}
                    </h3>
                    <p className="text-[11px] font-mono text-[#8AE600] font-bold uppercase tracking-wider">
                      {mentor.role}
                    </p>
                    <p className="text-[10px] text-slate-400 font-medium font-mono">
                      {mentor.experience}
                    </p>
                  </div>
                </div>

                {/* Expertise tags */}
                <div className="space-y-2 mb-5">
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest text-left">Areas of Expertise</p>
                  <div className="flex flex-wrap gap-1.5">
                    {mentor.expertise.map((exp, eIdx) => (
                      <span
                        key={eIdx}
                        className="text-[10px] font-mono bg-white/5 text-slate-200 border border-white/10 px-2.5 py-1 rounded-md"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Biography */}
                <p className="text-xs text-slate-300 font-normal leading-relaxed mb-6 text-left italic">
                  "{mentor.bio}"
                </p>
              </div>

              {/* Action buttons inside card footer */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex gap-2">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-md bg-white/5 hover:bg-white/10 hover:text-white text-slate-400 border border-white/10 transition-colors cursor-pointer"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:admission@zelixtech.com"
                    className="p-2 rounded-md bg-white/5 hover:bg-white/10 hover:text-white text-slate-400 border border-white/10 transition-colors cursor-pointer"
                    title="Email Advisor"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>

                <button
                  id={`consult-mentor-${idx}`}
                  onClick={() => onDirectConsultClick(mentor.name)}
                  className="px-3.5 py-2 rounded-md text-xs font-mono uppercase tracking-wider font-extrabold text-[#0F2B3C] bg-[#8AE600] hover:bg-[#9cf01a] hover:shadow-[0_0_15px_rgba(138,230,0,0.3)] transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Ask a Question
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
