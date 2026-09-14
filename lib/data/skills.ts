export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string;
  }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Modern Web & Frontend",
    description: "Building responsive, high-speed, and accessible enterprise interfaces",
    skills: [
      { name: "Next.js 15 / 16 (App Router / RSC)", level: "Advanced" },
      { name: "React 19 & TypeScript", level: "Advanced" },
      { name: "Tailwind CSS v4 & Vanilla CSS", level: "Expert" },
      { name: "TanStack Query v5", level: "Advanced" },
      { name: "Radix UI & Shadcn", level: "Advanced" },
      { name: "Progressive Web Apps (PWA)", level: "Advanced" }
    ]
  },
  {
    category: "Backend Systems & APIs",
    description: "Designing resilient business logic, audit middleware, and high-throughput endpoints",
    skills: [
      { name: "Python (Django & Django REST Framework)", level: "Expert" },
      { name: "Node.js (Express & Server Actions)", level: "Advanced" },
      { name: "PostgreSQL Architecture & Indexing", level: "Advanced" },
      { name: "Drizzle ORM & Django ORM", level: "Expert" },
      { name: "Redis In-Memory Caching", level: "Intermediate" },
      { name: "RESTful API Design & Webhooks", level: "Expert" }
    ]
  },
  {
    category: "Telecom & FinTech Integrations",
    description: "Interfacing with carrier-grade messaging rails and automated payment gateways",
    skills: [
      { name: "Meta WhatsApp Business Cloud API", level: "Official Tech Provider" },
      { name: "Safaricom Daraja M-Pesa (C2B, B2C, STK)", level: "Expert" },
      { name: "Alphanumeric Bulk SMS Gateways", level: "Advanced" },
      { name: "ProfitRoom Booking API", level: "Advanced" },
      { name: "Resend Email & Cloudinary Media", level: "Advanced" }
    ]
  },
  {
    category: "Applied AI & Cloud Infrastructure",
    description: "Context injection, production LLMs, and automated deployment pipelines",
    skills: [
      { name: "Google Generative AI (Gemini Models)", level: "Advanced" },
      { name: "Context Injection & RAG Pipelines", level: "Advanced" },
      { name: "Railway, Vercel & Cloud Hosting", level: "Advanced" },
      { name: "Docker Containerization", level: "Intermediate" },
      { name: "Git Workflow & Automated Migrations", level: "Advanced" }
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

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export const EDUCATION_DATA: EducationItem = {
  degree: "Bachelor of Science in Computer Science",
  institution: "South Eastern Kenya University (SEKU)",
  period: "August 2020 – April 2024"
};

export const CERTIFICATIONS_DATA: string[] = [
  "Networking Essentials — Cisco NetAcad",
  "Python Programming — Kaggle",
  "Google Hustle Academy — HubSpot Academy",
  "Executive Diploma in Finance Management — Udemy",
  "Web Development (HTML, CSS, JavaScript) — Udemy"
];
