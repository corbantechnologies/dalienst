import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, ChevronRight, ExternalLink } from "lucide-react";

export default function Hero() {
  return (
    <section id="about" className="relative w-full bg-white border-b border-slate-200 pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden bg-grid-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl space-y-6">
          {/* Top Eyebrow Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-semibold text-corporate-primary">
              <Building2 className="w-3.5 h-3.5 text-corporate-primary" />
              Founder &amp; Managing Director · Corban Technologies LTD
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Lead Systems Architect &amp; Software Engineer
            </span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15]">
            Engineering Mission-Critical Cloud Platforms, Financial Ledgers &amp; Telecom Systems
          </h1>

          {/* Executive Narrative */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            I am <strong className="text-slate-900 font-semibold">Dalienst Owino Oduor</strong>, an executive software engineer and systems architect specializing in high-concurrency cloud software, automated double-entry accounting ledgers, and carrier-grade messaging infrastructure. 
            Through my corporate enterprise firm, <strong className="text-slate-900 font-semibold">Corban Technologies LTD</strong>, I architect, cloud-host, and scale mission-critical software solutions across East Africa—delivering custom multi-tenant banking, telecom marketing, and automated commerce engines with dedicated 99.9% uptime.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="#company"
              className="px-5 py-2.5 rounded-md bg-corporate-primary hover:bg-orange-600 text-white text-xs font-semibold transition-all shadow-xs inline-flex items-center gap-1.5"
            >
              Explore Corban Technologies <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href="https://www.corbantechnologies.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-md bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors inline-flex items-center gap-1.5 shadow-xs"
            >
              corbantechnologies.org <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
            <Link
              href="#platforms"
              className="px-5 py-2.5 rounded-md bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 text-xs font-semibold transition-colors inline-flex items-center gap-1.5"
            >
              View 6 Core Platforms <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </Link>
          </div>

          {/* Quick Proof Metrics Strip */}
          <div className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs max-w-3xl">
            <div className="space-y-1">
              <p className="text-2xl font-bold text-slate-900 tracking-tight">KES 700K+</p>
              <p className="text-[11px] font-semibold text-corporate-primary uppercase tracking-wider">Transaction Volume</p>
              <p className="text-[11px] text-slate-500">Automated mobile money rails</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-slate-900 tracking-tight">3 Live SACCOs</p>
              <p className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wider">Core Banking ERP</p>
              <p className="text-[11px] text-slate-500">Double-entry General Ledger</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-slate-900 tracking-tight">98% Open Rate</p>
              <p className="text-[11px] font-semibold text-corporate-primary uppercase tracking-wider">WhatsApp Cloud API</p>
              <p className="text-[11px] text-slate-500">Official Meta Tech Provider</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-slate-900 tracking-tight">99.9%</p>
              <p className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wider">Cloud Reliability</p>
              <p className="text-[11px] text-slate-500">Dedicated hosting architecture</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
