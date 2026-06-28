import { testimonials } from "../data";
import { Quote, Star } from "lucide-react";
import { motion } from "motion/react";

export function Testimonials() {
  return (
    <section id="testimonials-section" className="py-24 bg-[#0F2B3C] text-white transition-colors duration-300 relative border-t border-white/5">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-[#8AE600]/3 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-[#8AE600]/3 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Loved By Students <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8AE600] to-teal-300">&amp; Teams</span>
          </h2>
          <p className="text-slate-300 font-normal text-sm md:text-base leading-relaxed">
            Discover how Zelix AI helps professionals cross critical technological thresholds.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {testimonials.map((test) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-4 md:p-5 border border-white/5 bg-[#0D2534] flex flex-col justify-between shadow-md relative group hover:border-[#8AE600]/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300 aspect-[5/4]"
            >
              {/* Quote marks background */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 group-hover:text-[#8AE600]/5 pointer-events-none group-hover:scale-110 transition-transform" />

              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Text quote */}
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-normal text-left italic">
                  "{test.text}"
                </p>
              </div>

              {/* Author Row */}
              <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-6 text-left">
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {test.name}
                  </h4>
                  <p className="text-[10px] font-mono text-slate-400">
                    {test.role}
                    {test.company && <span className="text-[#8AE600]"> @ {test.company}</span>}
                  </p>
                </div>

                {/* Metric sticker */}
                {test.metric && (
                  <span className="text-[9px] font-mono font-bold bg-[#8AE600]/10 text-[#8AE600] px-2 py-1 rounded-md border border-[#8AE600]/20 shadow-sm">
                    {test.metric}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
