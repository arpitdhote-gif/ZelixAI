import { HelpCircle } from "lucide-react";
import { courses } from "../data";

export function FaqSection() {
  return (
    <section id="faq-section" className="py-24 bg-[#081A26] text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Course FAQs for Every Zelix AI Program
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Clear answers for each program, designed to help AI learners in Nagpur and corporate teams across India choose the right path.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {courses.map((course) => (
            <article
              key={course.id}
              className="rounded-3xl border border-white/10 bg-[#0B2636] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.25)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#8AE600]/10 text-[#8AE600] grid place-items-center">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">{course.title} FAQ</h3>
              </div>

              <dl className="space-y-5 text-slate-300">
                <div>
                  <dt className="text-sm font-semibold text-white">
                    What will I learn in the {course.title} course?
                  </dt>
                  <dd className="mt-3 text-sm leading-relaxed">
                    {course.description} This course covers core skills such as {course.skills.slice(0, 3).join(", ")}, making it ideal for practical AI training in Nagpur and India.
                  </dd>
                </div>

                <div>
                  <dt className="text-sm font-semibold text-white">Who should join this Nagpur AI program?</dt>
                  <dd className="mt-3 text-sm leading-relaxed">
                    Professionals, graduates, and business learners seeking AI training, corporate AI workshops, or AI consultancy skills will benefit most from this program.
                  </dd>
                </div>

                <div>
                  <dt className="text-sm font-semibold text-white">What outcomes can I expect after completion?</dt>
                  <dd className="mt-3 text-sm leading-relaxed">
                    Graduates can expect outcomes like {course.outcomes.slice(0, 2).join(", ")}, plus increased confidence for AI roles, enterprise projects, and consultancy engagements.
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
