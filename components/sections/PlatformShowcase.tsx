"use client";

import { useState } from "react";
import { PLATFORMS_DATA, PlatformItem } from "@/lib/data/platforms";
import {
  Layers,
  CheckCircle2,
  ArrowRight,
  Server,
  ExternalLink,
  ShieldCheck,
  Cpu,
  Building2,
  BookOpen,
  Send,
  Ticket,
  Truck,
  ShoppingBag,
  Terminal
} from "lucide-react";

export default function PlatformShowcase() {
  const [activeTab, setActiveTab] = useState<string>("sacco");
  const currentPlatform: PlatformItem =
    PLATFORMS_DATA.find((p) => p.id === activeTab) || PLATFORMS_DATA[0];

  const iconMap: Record<string, any> = {
    sacco: Building2,
    finance: BookOpen,
    marketing: Send,
    events: Ticket,
    logistics: Truck,
    retail: ShoppingBag,
  };

  return (
    <section id="platforms" className="w-full bg-white py-16 sm:py-24 border-b border-slate-200">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 pb-4 border-b border-slate-200 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-semibold text-corporate-primary mb-2">
              <Layers className="w-3.5 h-3.5" />
              Corban Technologies LTD Portfolio
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Commercial Platforms &amp; Systems Architecture
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
              Engineered and cloud-hosted under Corban Technologies LTD. Explore the 6 commercial platforms powering enterprises and cooperatives across Kenya.
            </p>
          </div>
        </div>

        {/* 6 Tab Switcher */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
          {PLATFORMS_DATA.map((platform) => {
            const isActive = activeTab === platform.id;
            const Icon = iconMap[platform.id] || Layers;
            return (
              <button
                key={platform.id}
                onClick={() => setActiveTab(platform.id)}
                className={`p-3.5 rounded-lg text-left transition-all border flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <Icon className={`w-4 h-4 ${isActive ? "text-corporate-primary" : "text-slate-500"}`} />
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "bg-slate-200/70 text-slate-600"
                    }`}
                  >
                    {platform.shortTag}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold leading-tight truncate">
                    {platform.divisionTitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Platform Detail Showcase */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50/50 overflow-hidden shadow-xs">
          <div className="p-6 sm:p-8 lg:p-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Platform Specs & Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-corporate-primary">
                    {currentPlatform.divisionTitle}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                      currentPlatform.statusTone === "emerald"
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    <CheckCircle2 className="w-3 h-3" />
                    {currentPlatform.statusBadge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {currentPlatform.name}
                </h3>

                <p className="text-sm font-medium text-slate-700 leading-snug">
                  {currentPlatform.tagline}
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>{currentPlatform.overview}</p>
                <div className="p-3.5 rounded-lg bg-white border border-slate-200">
                  <span className="font-semibold text-slate-900 block mb-1">Business Impact &amp; Architecture:</span>
                  {currentPlatform.businessImpact}
                </div>
              </div>

              {/* Real World Client Deployments */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Live Enterprise Deployments &amp; Use Cases:
                </p>
                <div className="flex flex-wrap gap-2">
                  {currentPlatform.realWorldClients.map((client, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs"
                    >
                      {client}
                    </span>
                  ))}
                </div>
              </div>

              {/* Core Capabilities */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Core Engineering Capabilities:
                </p>
                <ul className="grid sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {currentPlatform.capabilities.map((cap, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-corporate-emerald shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Underlying Tech Stack:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {currentPlatform.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded bg-slate-200/80 text-slate-800 text-[11px] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Simulated Live Console / Mockup */}
            <div className="lg:col-span-5 w-full">
              <div className="rounded-xl bg-slate-900 border border-slate-800 overflow-hidden shadow-md text-white font-mono text-xs">
                {/* Simulated Window Header */}
                <div className="px-4 py-2.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">
                    ctltd-core // {currentPlatform.id}.platform
                  </span>
                  <Terminal className="w-3.5 h-3.5 text-slate-500" />
                </div>

                {/* Console Metrics Body */}
                <div className="p-5 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-slate-400">STATUS</span>
                    <span className="text-emerald-400 font-bold uppercase flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      ONLINE · PRODUCTION
                    </span>
                  </div>

                  {/* Metrics 2x2 */}
                  <div className="grid grid-cols-2 gap-3">
                    {currentPlatform.metrics.map((metric, idx) => (
                      <div key={idx} className="p-3 rounded bg-slate-800/60 border border-slate-800 space-y-0.5">
                        <p className="text-[10px] text-slate-400 uppercase tracking-wider">{metric.label}</p>
                        <p className="text-sm font-bold text-white tracking-tight">{metric.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Architecture Log Stream */}
                  <div className="p-3 rounded bg-black/40 border border-slate-800/80 space-y-1.5 text-[11px] text-slate-300">
                    <p className="text-slate-500 text-[10px] uppercase font-bold">TELEMETRY &amp; ARCHITECTURE LOGS</p>
                    <p className="text-emerald-400">✓ Database: PostgreSQL with high-precision decimals</p>
                    <p className="text-cyan-400">✓ Auth: Zero-lag non-blocking audit pipeline</p>
                    <p className="text-amber-400">✓ Gateway: Safaricom Daraja &amp; Meta Cloud API</p>
                    <p className="text-slate-400">✓ SLA: Dedicated Cloud Infrastructure (99.9%)</p>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Engineered by Corban Technologies</span>
                    <span className="text-corporate-primary font-semibold">East Africa Core</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
