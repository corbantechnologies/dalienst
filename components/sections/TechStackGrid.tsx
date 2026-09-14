import { STACK_TIERS } from "@/lib/data/skills";
import { Server, Radio, Layout, Cpu, CheckCircle2, Layers } from "lucide-react";

export default function TechStackGrid() {
  const iconMap: Record<string, any> = {
    "backend-core": Server,
    "telecom-payments": Radio,
    "frontend-apps": Layout,
    "applied-ai-cloud": Cpu,
  };

  return (
    <section id="stack" className="w-full bg-slate-50 py-16 sm:py-24 border-b border-slate-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-semibold text-corporate-primary shadow-2xs">
            <Layers className="w-3.5 h-3.5 text-corporate-primary" />
            Architectural Spectrum
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Production Tech Stack &amp; Systems Architecture
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Every layer of our software architecture is selected for deterministic performance, mathematical precision, carrier-grade reliability, and frictionless user adoption.
          </p>
        </div>

        {/* 4 Architectural Stack Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {STACK_TIERS.map((tier) => {
            const Icon = iconMap[tier.id] || Server;
            return (
              <div
                key={tier.id}
                className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-5">
                  {/* Tier Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-corporate-primary">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-corporate-primary block font-mono">
                          {tier.tierNumber}
                        </span>
                        <span className="text-xs font-semibold text-slate-500">
                          {tier.focusArea}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {tier.tagline}
                    </p>
                  </div>

                  {/* Tech Components with Roles */}
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Core Frameworks &amp; Runtimes
                    </p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {tier.technologies.map((tech, idx) => (
                        <div
                          key={idx}
                          className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/70 flex flex-col justify-between"
                        >
                          <div className="flex items-center justify-between gap-1">
                            <span className="text-xs font-bold text-slate-900 truncate">
                              {tech.name}
                            </span>
                            {tech.badge && (
                              <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-corporate-primary/10 text-corporate-primary shrink-0">
                                {tech.badge}
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] text-slate-500 leading-tight mt-1">
                            {tech.role}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Capabilities */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Engineered Capabilities
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {tier.capabilities.map((cap, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{cap}</span>
                        </li>
                      ))}
                    </ul>
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
