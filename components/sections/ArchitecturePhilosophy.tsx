import { ENGINEERING_PRINCIPLES } from "@/lib/data/skills";
import { Cpu, Lock, Calculator, Radio, Sparkles } from "lucide-react";

export default function ArchitecturePhilosophy() {
  const iconMap: Record<string, any> = {
    "01": Cpu,
    "02": Lock,
    "03": Calculator,
    "04": Radio,
  };

  return (
    <section id="architecture" className="w-full bg-white py-16 sm:py-24 border-b border-slate-200">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-5xl space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-semibold text-corporate-primary">
            <Cpu className="w-3.5 h-3.5 text-corporate-primary" />
            Engineering Philosophy &amp; Core Patterns
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Architectural Mastery: How I Solve Complex Systems Challenges
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Writing code is simple; designing robust, scalable, and audit-proof architectures is an art. 
            Here are the four foundational engineering principles that govern every software system I design and deploy.
          </p>
        </div>

        {/* 4 Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ENGINEERING_PRINCIPLES.map((principle) => {
            const Icon = iconMap[principle.number] || Sparkles;
            return (
              <div
                key={principle.number}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-corporate-primary/40 transition-all group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-slate-400 font-mono">
                      {principle.number}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-corporate-primary">
                      {principle.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-800 group-hover:scale-105 transition-transform shadow-2xs">
                      <Icon className="w-5 h-5 text-corporate-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {principle.title}
                    </h3>
                  </div>

                  <p className="text-xs font-semibold text-corporate-primary">
                    {principle.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
