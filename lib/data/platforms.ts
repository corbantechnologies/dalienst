export interface PlatformItem {
  id: string;
  divisionTitle: string;
  shortTag: string;
  name: string;
  tagline: string;
  statusBadge: string;
  statusTone: "emerald" | "amber" | "blue";
  overview: string;
  businessImpact: string;
  realWorldClients: string[];
  techStack: string[];
  capabilities: string[];
  metrics: {
    label: string;
    value: string;
  }[];
}

export const PLATFORMS_DATA: PlatformItem[] = [
  {
    id: "sacco",
    divisionTitle: "SACCO & Cooperative Banking",
    shortTag: "SACCO Core",
    name: "Wananchi Mali SACCO Core Banking Platform",
    tagline: "Cloud-native core banking ERP with automated double-entry GL accounting, fraud-resistant credit, and M-Pesa rails",
    statusBadge: "3 Live Deployments",
    statusTone: "emerald",
    overview:
      "Enterprise core banking engine tailored for Kenyan SACCOs, chamas, and microfinance institutions. Replaces error-prone manual spreadsheets with an automated double-entry general ledger where every deposit, loan disbursement, fee deduction, and interest repayment automatically balances without manual journal intervention.",
    businessImpact:
      "Eliminates spreadsheet errors, guarantees Trial Balance equilibrium (Total DR == Total CR), automates member credit qualification, and delivers sub-5ms Redis caching for instantaneous multi-branch transactions.",
    realWorldClients: ["Tamarind Sacco", "Sprout Capital Sacco", "Wananchi Mali Cooperative"],
    techStack: ["Django REST Framework", "Next.js", "PostgreSQL", "Redis", "Safaricom Daraja M-Pesa", "Vercel"],
    capabilities: [
      "Automated Double-Entry General Ledger (GL) posting",
      "Savings-to-loan multiplier & automated guarantor commitment lock",
      "Dynamic loan amortization (reducing balance & flat rate)",
      "Automated M-Pesa C2B Paybill, STK Push & B2C Disbursements",
      "Non-blocking asynchronous JSON audit logging middleware",
      "Four-tier isolated deployment topology (Member, Staff, Auditor, API)"
    ],
    metrics: [
      { label: "Active Deployments", value: "3 SACCOs" },
      { label: "Ledger Balance Accuracy", value: "100%" },
      { label: "API Query Latency", value: "<5ms (Redis)" },
      { label: "Manual Entries", value: "0" }
    ]
  },
  {
    id: "finance",
    divisionTitle: "Finance Suite & Statutory Compliance",
    shortTag: "Accounting SaaS",
    name: "Manna Books & FedhaHub Financial Suite",
    tagline: "Zero-friction SME financial tracking, statutory KRA eTIMS CU engine, and real-time 20th monthly VAT ledger",
    statusBadge: "Flagship Production SaaS",
    statusTone: "emerald",
    overview:
      "Designed specifically for Kenyan SMEs to replace bulky legacy accounting software with a high-visibility, zero-friction financial compiler. Features seamless document lineage conversion (Quote → Invoice → Receipt → Credit Note) alongside native KRA eTIMS compliance.",
    businessImpact:
      "Eliminates floating-point mathematical rounding discrepancies via scaled integer arithmetic, automates KRA 20th monthly VAT return calculations, and provides clients with secure frictionless access.",
    realWorldClients: ["Growing Kenyan SMEs", "Corporate Suppliers", "Retail Vendors"],
    techStack: ["Next.js 15 (App Router/RSC)", "React 19", "Drizzle ORM", "PostgreSQL (Railway)", "Tailwind v4", "Resend API", "PWA"],
    capabilities: [
      "Frictionless 64-character tokenized 'no-login' client document portals",
      "Statutory KRA eTIMS Control Unit (CU) invoice serial tracking",
      "Live 20th monthly VAT return countdown ledger (16% VAT, Zero-Rated, Exempt)",
      "Universal document lineage conversion with parentDocumentId audit links",
      "Accounts Receivable (A/R) aging risk matrix (0–30, 31–60, 61–90, 90+ days)",
      "Server-side vector PDF generation & automated Resend email dispatch"
    ],
    metrics: [
      { label: "VAT Filing Readiness", value: "Real-time" },
      { label: "Client Access Friction", value: "Zero Login" },
      { label: "Rounding Drift", value: "0.00%" },
      { label: "PWA Offline Support", value: "Native" }
    ]
  },
  {
    id: "marketing",
    divisionTitle: "Marketing & WhatsApp Telecom",
    shortTag: "Telecom Gateway",
    name: "Omnichannel Messaging & Meta WhatsApp Cloud API Hub",
    tagline: "Official Meta Tech Provider telecom hub delivering high-throughput WhatsApp marketing with universal SMS fallback",
    statusBadge: "Verified Meta Tech Provider",
    statusTone: "emerald",
    overview:
      "Enterprise customer communication and messaging infrastructure operating as an official Meta Verified Tech Provider. Dispatches high-volume branded WhatsApp marketing campaigns with 98% open rates, automated Bulk SMS failover routing, live delivery webhooks, and M-Pesa credit billing.",
    businessImpact:
      "Enables Kenyan enterprises to achieve 98% message open rates, provides live blue-tick read telemetry, and allows clients to top up campaign credit balances instantly via automated M-Pesa STK Push.",
    realWorldClients: ["LJK Marketing Agency", "Commercial Enterprise Clients", "Retail Brands"],
    techStack: ["Meta WhatsApp Cloud API (Graph v19.0)", "Django REST", "Next.js", "Africa's Talking / Advanta SMS", "M-Pesa STK Push"],
    capabilities: [
      "Official Meta WhatsApp Cloud API integration with permanent system user tokens",
      "Multi-tenant WhatsApp Business Account (WABA) management",
      "Dual-channel broadcast console with live WhatsApp bubble preview",
      "Real-time blue tick telemetry webhooks (SENT → DELIVERED → READ ✓✓)",
      "Automated fallback to alphanumeric Bulk SMS for offline handsets",
      "Unified M-Pesa STK Push credit wallet (1 Credit = 1 SMS | 2 Credits = 1 WA)"
    ],
    metrics: [
      { label: "Campaign Open Rate", value: "98%" },
      { label: "Meta API Version", value: "Graph v19.0" },
      { label: "Read Telemetry", value: "Live Blue Ticks" },
      { label: "Billing Automation", value: "Instant M-Pesa" }
    ]
  },
  {
    id: "events",
    divisionTitle: "Event Ticketing & Passes",
    shortTag: "Event Commerce",
    name: "Sherehe Tickets Kenya",
    tagline: "High-speed event ticketing with frictionless M-Pesa mobile checkout, anti-counterfeit QR passes, and sub-0.4s gate scanning",
    statusBadge: "Live Production Platform",
    statusTone: "emerald",
    overview:
      "High-concurrency mobile commerce and event ticketing engine. Built for concerts, festivals, and venue organizers, providing instantaneous Safaricom Daraja STK Push checkouts, tamper-proof vector tickets, and mobile gate validator scanners.",
    businessImpact:
      "Successfully deployed as the primary ticketing and revenue gateway for high-profile events—including The L-Boogie Event by Tamarind—processing thousands of concurrent ticket purchases with zero payment drops.",
    realWorldClients: ["The L-Boogie Event (Tamarind)", "Regional Concert Organizers", "Corporate Conferences"],
    techStack: ["Next.js 16", "React 19", "TypeScript", "Django REST Framework", "PostgreSQL", "M-Pesa Daraja STK Push"],
    capabilities: [
      "Instantaneous mobile phone STK Push payment authorization",
      "Dynamic anti-counterfeit QR code generation",
      "Sub-0.4s mobile steward gate scanning & validation",
      "Real-time ticket tier inventory depletion and coupon code engine",
      "Live organizer sales velocity and settlement dashboards"
    ],
    metrics: [
      { label: "Gate Scan Latency", value: "<0.4s" },
      { label: "Checkout Drop Rate", value: "<1%" },
      { label: "Payment Verification", value: "Instant Webhook" },
      { label: "QR Validation", value: "Tamper-Proof" }
    ]
  },
  {
    id: "logistics",
    divisionTitle: "Logistics & Fleet OS",
    shortTag: "Transport Brokerage",
    name: "CT Logistics (Asset-Light Dispatch Core)",
    tagline: "Pure technology orchestration engine for vehicle rental, inter-county corridors, and multi-day tour manifests",
    statusBadge: "In Development · Private Beta",
    statusTone: "amber",
    overview:
      "Asset-light transport and dispatch orchestration platform bridging customer travel demand with vetted third-party fleet capacity without holding vehicle balance sheet risk. Features automated corridor pricing and digital mobile handover protocols.",
    businessImpact:
      "Locks in predictable 20–35% gross profit margins by decoupling partner wholesale buy rates from customer retail prices, while protecting operational integrity through photographic vehicle inspection handovers.",
    realWorldClients: ["Fleet Partners across Mombasa & Nairobi", "Corporate Dispatchers", "Safari Tour Operators"],
    techStack: ["Next.js App Router", "TypeScript", "Drizzle ORM", "PostgreSQL", "Meta WhatsApp Cloud API", "Pre-signed Uploads"],
    capabilities: [
      "Tokenized cryptographic Magic Links for guest booking & live journey tracking (/track/[token])",
      "Mandatory mobile digital inspection protocol (/handover/[token]) with 4-side photo scans",
      "Digital fuel gauge, odometer reading, and client on-screen signature capture",
      "Corridor pricing with deadhead empty-return and expressway toll buffers",
      "Automated WhatsApp driver dispatch alerts and passenger travel milestones"
    ],
    metrics: [
      { label: "Gross Profit Margin", value: "20%–35%" },
      { label: "Handover Inspection", value: "100% Digital" },
      { label: "Guest Access", value: "Magic Links" },
      { label: "Platform Status", value: "Active Development" }
    ]
  },
  {
    id: "retail",
    divisionTitle: "Omnichannel Retail & POS",
    shortTag: "Retail POS",
    name: "GearHouse Africa & Retail Commerce",
    tagline: "Unified commerce architecture connecting customer-facing storefronts with physical multi-till cashier POS registers",
    statusBadge: "Live Deployments",
    statusTone: "emerald",
    overview:
      "End-to-end retail commerce engine linking online customer web storefronts with on-premise physical store cashier point-of-sale registers, multi-till shift tracking, and automated mobile checkout.",
    businessImpact:
      "Synchronizes physical inventory across branches with online web orders, manages cashier cash-drawer shifts, and automates pickup station dispatching.",
    realWorldClients: ["GearHouse Africa (Hardware)", "Clate Cosmetics (Beauty)"],
    techStack: ["Next.js 16", "React 19", "Django REST Framework", "PostgreSQL", "Next-PWA", "M-Pesa Daraja"],
    capabilities: [
      "Cashier multi-till shift handover and cash-drawer balance reconciliation",
      "Barcode lookup, multi-variant inventory (size, color, wattage) indexing",
      "Seamless M-Pesa mobile checkout and physical receipt printing",
      "Branch-level pickup station routing and delivery order tracking"
    ],
    metrics: [
      { label: "Catalog Sync", value: "Real-time" },
      { label: "Till Reconciliation", value: "Automated" },
      { label: "PWA Offline Readiness", value: "Installed" },
      { label: "Live Brands", value: "GearHouse & Clate" }
    ]
  }
];
