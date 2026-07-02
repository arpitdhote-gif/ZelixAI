import { testimonials } from "../data";
import { Quote, Star } from "lucide-react";
import { motion } from "motion/react";

export function Testimonials() {
  return (
    <section id="testimonials-section" className="relative overflow-hidden bg-[#192153] px-6 py-24 text-white sm:px-8 lg:px-10">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-[#B1D2FA]/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 h-72 w-72 rounded-full bg-[#BA905E]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center space-y-5">
          <div className="section-pill mx-auto border-[#B1D2FA]/20 bg-[#B1D2FA]/10 text-[#B1D2FA]">Loved by learners and teams</div>
          <h2 className="section-heading text-white">
            Trusted by students <span className="text-[#B1D2FA]">and teams</span>
          </h2>
          <p className="section-copy text-[#e5ebff]">
            Discover how ZelixAI helps professionals make confident shifts into applied AI work.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {testimonials.map((test) => (
            <motion.article
              key={test.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="relative flex aspect-[5/4] flex-col justify-between rounded-[1.75rem] border border-white/10 bg-white/10 p-6 shadow-[0_20px_60px_-35px_rgba(0,0,0,0.6)] backdrop-blur"
            >
              <Quote className="absolute right-6 top-6 h-12 w-12 text-white/10" />
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-[#BA905E] text-[#BA905E]" />
                  ))}
                </div>
                <p className="text-left text-sm leading-7 text-[#e5ebff] italic">“{test.text}”</p>
              </div>

              <div className="mt-6 border-t border-white/10 pt-5 text-left">
                <h4 className="text-sm font-bold text-white">{test.name}</h4>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B1D2FA]">
                  {test.role}
                  {test.company && <span className="ml-1 text-[#BA905E]">@ {test.company}</span>}
                </p>
                {test.metric && (
                  <span className="mt-3 inline-flex rounded-full border border-[#BA905E]/20 bg-[#BA905E]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#BA905E]">
                    {test.metric}
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
