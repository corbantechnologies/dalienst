import { ENTERPRISE_CASE_STUDIES } from "@/lib/data/enterprise";
import {
  Sparkles,
  CheckCircle2,
  Building2,
  Bot,
  ShieldAlert,
  QrCode,
  BookOpen,
  Users,
  Hotel,
  ArrowRight
} from "lucide-react";

export default function EnterpriseCaseStudies() {
  const iconMap: Record<string, any> = {
    "ai-analyst": Bot,
    "finance-portal": ShieldAlert,
    "dhow-cruise": QrCode,
    "elimu-sops": BookOpen,
    "kaizen-tracker": Users,
    "village-booking": Hotel,
  };

  return (
    <section id="enterprise" className="w-full bg-slate-50 py-16 sm:py-24 border-b border-slate-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-semibold text-corporate-primary shadow-2xs">
            <Building2 className="w-3.5 h-3.5 text-corporate-primary" />
            Institutional Client Case Study
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Flagship Enterprise Engagement: Tamarind Management Limited
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Spearheaded full-stack application development, workflow digitalization, and applied AI initiatives across <strong className="text-slate-900 font-semibold">Tamarind Mombasa, Tamarind Dhow, Tamarind Village, and Group Operations</strong> as Digital Solutions Architect. 
            Partnering directly with General Management, Financial Controllers, and department heads to turn manual, paper-heavy operations into automated digital engines.
          </p>
        </div>

        {/* 6 Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ENTERPRISE_CASE_STUDIES.map((study) => {
            const Icon = iconMap[study.id] || Sparkles;
            return (
              <div
                key={study.id}
                className="rounded-xl bg-white border border-slate-200 p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800">
                      <Icon className="w-5 h-5 text-corporate-primary" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
                      {study.badge}
                    </span>
                  </div>

                  {/* System & Title */}
                  <div>
                    <span className="text-[11px] font-bold text-corporate-primary uppercase tracking-wider block">
                      {study.unit}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mt-1 leading-snug">
                      {study.title}
                    </h3>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-2.5 text-xs text-slate-600 leading-relaxed">
                    <p>
                      <strong className="text-slate-900 font-semibold">Challenge: </strong>
                      {study.challenge}
                    </p>
                    <p>
                      <strong className="text-slate-900 font-semibold">Engineered Solution: </strong>
                      {study.solution}
                    </p>
                  </div>

                  {/* Measurable Impact */}
                  <div className="p-3 rounded-lg bg-emerald-50/70 border border-emerald-200/80 text-xs text-emerald-900">
                    <strong className="font-semibold block mb-0.5">Measurable Impact:</strong>
                    {study.impact}
                  </div>
                </div>

                {/* Key Outcomes & Tech Stack */}
                <div className="mt-6 pt-4 border-t border-slate-100 space-y-3">
                  <div className="space-y-1.5">
                    {study.keyOutcomes.slice(0, 2).map((outcome, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {study.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
