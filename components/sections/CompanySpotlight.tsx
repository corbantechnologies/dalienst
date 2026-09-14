import Link from "next/link";
import {
  Building2,
  ShieldCheck,
  Server,
  ArrowRight,
  CheckCircle2,
  Layers,
  Sparkles,
  ExternalLink,
  Cpu,
  BadgeCheck,
  Send,
  BookOpen,
  ShoppingBag,
  Ticket,
  Truck
} from "lucide-react";

export default function CompanySpotlight() {
  const divisions = [
    {
      icon: Building2,
      name: "SACCO & Cooperative Technology",
      description: "Core banking, double-entry GL accounting, and loan engines powering Kenyan cooperatives.",
      deployments: "Tamarind Sacco · Sprout Capital Sacco · Wananchi Mali",
      tag: "FinTech"
    },
    {
      icon: BookOpen,
      name: "Finance Suite & Intelligence",
      description: "Double-entry SME accounting, KRA eTIMS CU serial compliance, and real-time 20th VAT tracking.",
      deployments: "Manna Books SaaS · FedhaHub Financial Intelligence",
      tag: "Accounting"
    },
    {
      icon: Send,
      name: "Marketing & WhatsApp Telecom",
      description: "Official Meta WhatsApp Cloud API gateway with 98% open rates and automated SMS failover.",
      deployments: "LJK Marketing Agency · Meta Verified Tech Provider Hub",
      tag: "Telecom"
    },
    {
      icon: Ticket,
      name: "Event Ticketing & Passes",
      description: "Frictionless M-Pesa mobile ticketing, encrypted QR gate passes, and sub-0.4s scanning.",
      deployments: "Sherehe Tickets Kenya · The L-Boogie Event (Tamarind)",
      tag: "Ticketing"
    },
    {
      icon: Truck,
      name: "Logistics & Fleet OS",
      description: "Asset-light logistics coordination, digital 4-side vehicle inspection scans, and corridor pricing.",
      deployments: "CT Logistics · CT Drive Transport Platform (In Progress)",
      tag: "Logistics"
    },
    {
      icon: ShoppingBag,
      name: "Omnichannel Retail & POS",
      description: "Synchronized online storefronts with physical store multi-till cashier POS registers.",
      deployments: "GearHouse Africa (Hardware) · Clate Cosmetics",
      tag: "E-Commerce"
    }
  ];

  return (
    <section id="company" className="w-full bg-slate-900 text-white py-16 sm:py-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-30">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-corporate-primary/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-corporate-emerald/20 blur-3xl" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 border border-white/15 text-xs font-semibold text-corporate-gold backdrop-blur-sm">
            <Building2 className="w-3.5 h-3.5 text-corporate-gold" />
            Corporate Vehicle &amp; Engineering House
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            Corban Technologies LTD
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            As <strong className="text-white font-semibold">Founder, Managing Director &amp; Lead Software Engineer</strong>, 
            I operate Corban Technologies LTD as the parent engineering house behind all our commercial software builds. 
            We build, cloud-host, and scale mission-critical platforms across Kenya and East Africa—delivering custom architecture, carrier-grade telecom integrations, and automated double-entry accounting.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-medium text-slate-300">
            <div className="flex items-center gap-1.5">
              <BadgeCheck className="w-4 h-4 text-emerald-400" />
              <span>Official Meta Verified Tech Provider</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Safaricom Daraja M-Pesa Partner</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Server className="w-4 h-4 text-emerald-400" />
              <span>Dedicated Cloud Infrastructure</span>
            </div>
          </div>
        </div>

        {/* 6 Divisions Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {divisions.map((division, idx) => {
            const Icon = division.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-corporate-primary/50 transition-all group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-corporate-primary group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/10 text-slate-300 border border-white/5">
                      {division.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-white group-hover:text-corporate-primary transition-colors">
                    {division.name}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {division.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-700/60">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                    Live Deployments &amp; Flagships
                  </p>
                  <p className="text-xs font-medium text-emerald-400">
                    {division.deployments}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Strategic Note */}
        <div className="mt-10 p-5 rounded-xl bg-slate-800/40 border border-slate-700/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-corporate-primary shrink-0" />
            <span>
              All 6 software divisions are 100% architected, owned, and cloud-hosted under <strong>Corban Technologies LTD</strong>.
            </span>
          </div>
          <Link
            href="#platforms"
            className="text-corporate-primary hover:text-orange-400 font-semibold inline-flex items-center gap-1 shrink-0"
          >
            Explore Live Platforms <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
