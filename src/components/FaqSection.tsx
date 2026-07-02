import { HelpCircle } from "lucide-react";
import { courses } from "../data";

export function FaqSection() {
  return (
    <section id="faq-section" className="bg-[#fffdf7] px-6 py-24 text-[#192153] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center space-y-5">
          <div className="section-pill mx-auto">Frequently asked questions</div>
          <h2 className="section-heading">Course FAQs for every ZelixAI program</h2>
          <p className="section-copy">
            Clear answers for each path, designed to help learners and teams choose with confidence.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {courses.map((course) => (
            <article key={course.id} className="rounded-[1.75rem] border border-white/10 bg-[#192153] p-7 shadow-[0_24px_70px_-36px_rgba(0,0,0,0.55)]">
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-[#BA905E]/10 text-[#BA905E]">
                  <HelpCircle className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-white">{course.title} FAQ</h3>
              </div>

              <div className="space-y-3 text-[#dfe8f7]">
                <details className="group rounded-[1.25rem] border border-white/10 bg-[#11243d] p-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-white">
                    <span>What will I learn in the {course.title} course?</span>
                    <span className="text-[#BA905E] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-[#dfe8f7]">
                    {course.description} This course covers practical skills such as {course.skills.slice(0, 3).join(", ")}, making it ideal for learners and teams building real AI capability.
                  </p>
                </details>

                <details className="group rounded-[1.25rem] border border-white/10 bg-[#11243d] p-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-white">
                    <span>Who should join this AI program?</span>
                    <span className="text-[#BA905E] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-[#dfe8f7]">
                    Professionals, graduates, and business teams seeking AI training, corporate workshops, or consultancy skills will benefit most from this path.
                  </p>
                </details>

                <details className="group rounded-[1.25rem] border border-white/10 bg-[#11243d] p-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-white">
                    <span>What outcomes can I expect after completion?</span>
                    <span className="text-[#BA905E] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-[#dfe8f7]">
                    Graduates can expect outcomes like {course.outcomes.slice(0, 2).join(", ")}, plus stronger confidence for AI roles, enterprise projects, and consultancy engagements.
                  </p>
                </details>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
