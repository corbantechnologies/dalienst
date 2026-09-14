import { SKILL_CATEGORIES, EDUCATION_DATA, CERTIFICATIONS_DATA } from "@/lib/data/skills";
import { GraduationCap, Award, CheckCircle2, Terminal, Code2 } from "lucide-react";

export default function TechStackGrid() {
  return (
    <section id="stack" className="w-full bg-slate-50 py-16 sm:py-24 border-b border-slate-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-semibold text-corporate-primary shadow-2xs">
            <Code2 className="w-3.5 h-3.5 text-corporate-primary" />
            Capabilities &amp; Qualifications
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Technical Stack, Education &amp; Credentials
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            A comprehensive overview of the modern tools, runtime frameworks, and academic qualifications underpinning my systems architecture execution.
          </p>
        </div>

        {/* 4 Tech Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
                  {cat.category}
                </h3>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {cat.description}
                </p>

                <ul className="space-y-2 pt-2">
                  {cat.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center justify-between text-xs">
                      <span className="font-medium text-slate-800">{skill.name}</span>
                      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                        {skill.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Education & Certifications Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Education Card */}
          <div className="p-6 sm:p-8 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-corporate-navy text-white flex items-center justify-center shrink-0 shadow-xs">
              <GraduationCap className="w-6 h-6 text-corporate-gold" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-corporate-primary">
                Formal Degree Education
              </span>
              <h4 className="text-base sm:text-lg font-bold text-slate-900">
                {EDUCATION_DATA.degree}
              </h4>
              <p className="text-xs font-semibold text-slate-700">
                {EDUCATION_DATA.institution}
              </p>
              <p className="text-xs text-slate-500 font-mono pt-1">
                {EDUCATION_DATA.period}
              </p>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="p-6 sm:p-8 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-corporate-navy text-white flex items-center justify-center shrink-0 shadow-xs">
              <Award className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="space-y-2.5 w-full">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                Professional Training &amp; Certifications
              </span>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {CERTIFICATIONS_DATA.map((cert, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
