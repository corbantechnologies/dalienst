export interface StackTier {
  id: string;
  tierNumber: string;
  name: string;
  tagline: string;
  focusArea: string;
  technologies: {
    name: string;
    role: string;
    badge?: string;
  }[];
  capabilities: string[];
}

export const STACK_TIERS: StackTier[] = [
  {
    id: "backend-core",
    tierNumber: "LAYER 01",
    name: "Core Banking, Distributed APIs & Ledgers",
    tagline: "High-concurrency business logic, transactional integrity & double-entry accounting",
    focusArea: "Core Banking & Enterprise Backends",
    technologies: [
      { name: "Python / Django", role: "Enterprise Business Logic", badge: "Primary Core" },
      { name: "Django REST Framework", role: "High-Throughput RESTful APIs" },
      { name: "PostgreSQL", role: "Relational Ledger & Complex Queries", badge: "Production DB" },
      { name: "Drizzle ORM", role: "Type-Safe SQL Compilation" },
      { name: "Redis", role: "Sub-5ms In-Memory Caching & Session Store" },
      { name: "Node.js / Express", role: "Asynchronous Microservices" }
    ],
    capabilities: [
      "Automated Double-Entry General Ledger balancing (Assets, Liabilities, Equity, P&L)",
      "Non-blocking asynchronous JSON audit logging middleware with zero API latency",
      "Strict decimal precision arithmetic eliminating floating-point drift",
      "Multi-tenant database isolation and role-based permissions (RBAC)"
    ]
  },
  {
    id: "telecom-payments",
    tierNumber: "LAYER 02",
    name: "Telecom Infrastructure & Mobile Money Rails",
    tagline: "Carrier-grade messaging pipelines, blue-tick telemetry & automated mobile settlements",
    focusArea: "FinTech & Carrier Integrations",
    technologies: [
      { name: "Meta WhatsApp Cloud API", role: "Enterprise Broadcast Hub (v19.0)", badge: "Meta Tech Provider" },
      { name: "Safaricom Daraja M-Pesa", role: "C2B, B2C & STK Push Settlement", badge: "Live Rails" },
      { name: "Alphanumeric Bulk SMS", role: "Automatic Offline Fallback Gateway" },
      { name: "Resend API", role: "Verified Domain Transactional Email" },
      { name: "Cloudinary CDN", role: "Direct Multipart Media Streaming" }
    ],
    capabilities: [
      "Official Meta WhatsApp Cloud API interconnect with permanent system user credentials",
      "Real-time blue tick telemetry webhooks (SENT → DELIVERED → READ ✓✓)",
      "Instantaneous Safaricom Daraja STK Push mobile checkout authorization",
      "Automated credit wallet accounting (1 SMS = 1 Credit | 1 WhatsApp = 2 Credits)"
    ]
  },
  {
    id: "frontend-apps",
    tierNumber: "LAYER 03",
    name: "Application & Interface Architecture",
    tagline: "High-performance responsive web applications, server components & progressive mobile apps",
    focusArea: "Modern Web & Mobile Interfaces",
    technologies: [
      { name: "Next.js 16 / 15", role: "App Router & Server Components (RSC)", badge: "Framework" },
      { name: "React 19", role: "Declarative Interface Runtime" },
      { name: "TypeScript", role: "End-to-End Strict Static Typing", badge: "Standard" },
      { name: "Tailwind CSS v4", role: "Modern Design Token Architecture" },
      { name: "TanStack Query v5", role: "Server State Synchronization & Caching" },
      { name: "Progressive Web Apps", role: "Offline-Resilient Service Worker Caching" }
    ],
    capabilities: [
      "Server-side data compilation with near-instant First Contentful Paint",
      "Frictionless 64-character tokenized 'no-login' client document portals",
      "Dynamic CSS Custom Property theme injection across tenant shells",
      "Installable mobile PWAs running without browser chrome on Android & iOS"
    ]
  },
  {
    id: "applied-ai-cloud",
    tierNumber: "LAYER 04",
    name: "Applied AI & Cloud Governance",
    tagline: "Targeted context injection, verified grounding & dedicated infrastructure reliability",
    focusArea: "AI Reasoning & Cloud Infrastructure",
    technologies: [
      { name: "Google Generative AI", role: "Gemini Context Reasoning Models", badge: "Applied AI" },
      { name: "Context Injection Engines", role: "SQL-Grounded Dynamic Slicing" },
      { name: "Railway Cloud", role: "Production PostgreSQL & API Hosting" },
      { name: "Vercel Edge Network", role: "Global Low-Latency Static & Serverless" },
      { name: "Docker", role: "Containerized Microservices & Reproducibility" }
    ],
    capabilities: [
      "Lightweight dynamic context injection passing SQL aggregates without multi-megabyte hangs",
      "Strict data isolation ensuring AI prompts only access authorized organizational data",
      "Automated database migrations and environment governance across white-label instances",
      "Dedicated production cloud hosting maintaining 99.9% operational availability"
    ]
  }
];

export interface EngineeringPrinciple {
  number: string;
  title: string;
  tagline: string;
  description: string;
  badge: string;
}

export const ENGINEERING_PRINCIPLES: EngineeringPrinciple[] = [
  {
    number: "01",
    title: "Applied AI in Production",
    tagline: "Lightweight context injection over brittle multi-megabyte payloads",
    description:
      "Instead of feeding massive unindexed datasets into LLMs, we engineer targeted SQL aggregation pipelines that pass synthesized metrics and recent slices. This eliminates latency hangs, prevents token wastage, and ensures AI answers are strictly grounded in verified database facts.",
    badge: "Reliable Intelligence"
  },
  {
    number: "02",
    title: "Frictionless Zero-Login Access",
    tagline: "Cryptographic magic links & roster validation over password friction",
    description:
      "Operational staff and external clients shouldn't be blocked by forgotten passwords. We architect secure, 64-character tokenized links and real-time internal HR roster verification, providing seamless one-tap access while maintaining complete audit integrity.",
    badge: "User Adoption"
  },
  {
    number: "03",
    title: "Financial Ledger Integrity",
    tagline: "Automated double-entry ledgers & exact integer scaling",
    description:
      "We replace manual spreadsheets with automated double-entry core accounting where every transaction balances. Furthermore, all financial calculations are processed using scaled integer math to permanently eliminate JavaScript floating-point rounding drift.",
    badge: "100% Audit-Ready"
  },
  {
    number: "04",
    title: "High-Throughput Telecom Rails",
    tagline: "Direct Meta Graph API interconnects with universal SMS failover",
    description:
      "As an official Meta Verified Tech Provider, we connect directly to the Meta WhatsApp Cloud API via permanent system user tokens. When mobile handsets are offline, our dispatch router automatically falls back to carrier-grade Bulk SMS routes.",
    badge: "98% Reach"
  }
];
