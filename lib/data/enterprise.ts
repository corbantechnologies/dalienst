export interface EnterpriseCaseStudy {
  id: string;
  title: string;
  systemName: string;
  unit: string;
  challenge: string;
  solution: string;
  impact: string;
  badge: string;
  technologies: string[];
  keyOutcomes: string[];
}

export const ENTERPRISE_CASE_STUDIES: EnterpriseCaseStudy[] = [
  {
    id: "ai-analyst",
    title: "Executive AI Analyst & Guest Intelligence Engine",
    systemName: "Tamarind AI Analyst",
    unit: "Tamarind Mombasa (Dhow, Village, Restaurant)",
    challenge:
      "Guest feedback across multiple luxury hospitality units was trapped in paper forms and static monthly spreadsheets, creating significant reporting lag and obscuring emerging service complaints or staff praise from executive leadership.",
    solution:
      "Architected and deployed a conversational AI analyst grounded in live SQL database metrics and dynamic context injection. Executives and General Managers can ask plain-English operational queries and receive instant, data-backed qualitative summaries. Built an automated cron email service delivering visual performance digests to GMs on the 1st of every month.",
    impact:
      "Reduced guest issue escalation from weeks to under 24 hours and completely eliminated hours of manual spreadsheet compilation every month.",
    badge: "Applied Generative AI",
    technologies: ["Google Generative AI (Gemini)", "Next.js", "Django REST", "PostgreSQL", "Resend API", "Recharts"],
    keyOutcomes: [
      "Natural language ad-hoc business intelligence",
      "Dynamic 50-comment slice context injection avoiding latency hangs",
      "Automated monthly visual email reports delivered on Railway cron",
      "Actionable sentiment breakdown across dining, dhow sailings, and suites"
    ]
  },
  {
    id: "finance-portal",
    title: "Credit Note Governance & Anomaly Detection Ledger",
    systemName: "Finance Integrity Portal",
    unit: "Group Finance & Internal Audit",
    challenge:
      "Credit note requests moved across desks on physical paper routing slips, resulting in severe processing bottlenecks, audit gaps, and the ongoing risk of undetected duplicate or triplicate entries in the accounting system.",
    solution:
      "Engineered a centralized digital ledger equipped with an automated anomaly-detection algorithm that flags duplicate and triplicate postings. Replaced manual paperwork with an auditable four-tier digital approval workflow: Initiator → Internal Audit → Financial Controller → General Manager, complete with instant notification dispatches and one-click PDF reconciliation summaries.",
    impact:
      "Accelerated credit note approval turnaround times by 75% and established a complete, unalterable digital audit trail across all commercial adjustments.",
    badge: "Fraud Prevention & Ledger",
    technologies: ["Next.js 15", "Django REST Framework", "PostgreSQL", "TanStack Query", "PDF Ledger Engine"],
    keyOutcomes: [
      "Automated algorithmic detection of duplicate/triplicate postings",
      "4-tier digital approval pipeline with role-based sign-offs",
      "Immutable audit logs with timestamped approval histories",
      "75% reduction in authorization cycle latency"
    ]
  },
  {
    id: "dhow-cruise",
    title: "Dhow Cruise Operations & Digital QR Boarding Scanner",
    systemName: "Tamarind Dhow Cruise Core",
    unit: "Tamarind Dhow (Mombasa Harbour)",
    challenge:
      "Boarding luxury dinner and lunch cruise passengers on the jetty relied on manual clipboard paper manifests, creating boarding queues during high-density sailings and delaying crucial kitchen visibility into passenger counts and food costs.",
    solution:
      "Built a mobile-first digital operations system featuring high-speed smartphone camera QR code scanning for seamless passenger check-in at the jetty. Engineered real-time supervisor dashboards tracking seating allocations, beverage addon packages, sailing revenues, and food cost percentages versus wastage.",
    impact:
      "Cut jetty boarding times, eliminated unverified boardings, and gave culinary supervisors daily margin control over food and beverage expenditure.",
    badge: "Operations & Cost Control",
    technologies: ["Next.js 16", "React 19", "TypeScript", "Django REST", "Camera QR Scanner", "Radix UI"],
    keyOutcomes: [
      "Sub-second digital guest check-in via smartphone camera QR scanning",
      "Per-sailing passenger capacity and table allocation tracking",
      "Daily visibility into food cost percentages vs. galley wastage",
      "Integrated beverage addon scheduling and rescheduling workflows"
    ]
  },
  {
    id: "elimu-sops",
    title: "Group SOP Knowledge Repository & AI Assistant",
    systemName: "Tamarind Elimu LMS",
    unit: "Group HR & Operations",
    challenge:
      "Standard Operating Procedures (SOPs) across hospitality divisions were locked in bulky physical binders, making procedure lookup tedious for line staff and preventing management from verifying whether mandatory standards were completed.",
    solution:
      "Developed a centralized digital learning and SOP portal featuring an embedded AI assistant. Built strict department-level access security into the context layer, ensuring employees query procedures relevant to their role and receive immediate, grounded answers. Added manager dashboards to monitor team reading progress.",
    impact:
      "Eliminated out-of-date physical manuals, accelerated onboarding for new staff, and provided managers with verifiable compliance audit trails.",
    badge: "Knowledge AI & Compliance",
    technologies: ["Next.js 16", "React 19", "Django REST Framework", "Google Generative AI", "In-Browser PDF Viewer"],
    keyOutcomes: [
      "Conversational SOP Q&A assistant grounded in verified procedures",
      "Department-level Role-Based Access Control (RBAC) data isolation",
      "Managerial oversight dashboard tracking employee reading compliance",
      "Accelerated hospitality onboarding for new team members"
    ]
  },
  {
    id: "kaizen-tracker",
    title: "Kaizen Continuous Improvement & Zero-Login Intake Portal",
    systemName: "Kaizen Innovation Engine",
    unit: "General Management & Human Resources",
    challenge:
      "Collecting employee operational improvement ideas across multiple branches was difficult because many frontline kitchen and service staff do not have company email logins or office computers.",
    solution:
      "Created a frictionless, zero-login submission portal where staff enter only their Staff ID and Email, validated in real time against the internal HR roster. Employees attach smartphone photos directly before submitting ideas. Built role-based dashboards: Department Managers track initiatives on Kanban boards while General Managers view branch-wide performance rollups.",
    impact:
      "Removed credential barriers to drive widespread staff participation across all units while maintaining complete HR verification.",
    badge: "Frictionless Zero-Login UX",
    technologies: ["Next.js App Router", "Drizzle ORM", "PostgreSQL", "Cloud Image Streaming", "Multi-Tier RBAC"],
    keyOutcomes: [
      "Zero-login public intake flow secured via real-time HR roster lookup",
      "Direct mobile photo upload pipeline for visual before/after proofs",
      "Departmental Kanban status boards (Proposed → In Progress → Completed)",
      "Location-level aggregate analytics for General Management"
    ]
  },
  {
    id: "village-booking",
    title: "Direct Booking Engine Integration & Automated Lead Routing",
    systemName: "Tamarind Village Web Architecture",
    unit: "Tamarind Village & Reservations",
    challenge:
      "Heavy reliance on third-party Online Travel Agencies (OTAs) resulted in high commission deductions on apartment suites, alongside manual routing delays for banquet and dining inquiries.",
    solution:
      "Architected the technical revamp of the Tamarind Village website and integrated the ProfitRoom API booking engine, allowing guests to view live suite availability and complete direct reservations. Built an automated inquiry engine that categorizes and dispatches dining and event requests to departmental inboxes with zero manual delay.",
    impact:
      "Significantly reduced third-party OTA commission leakage and improved direct guest reservation conversion rates.",
    badge: "Revenue Optimization",
    technologies: ["React 19", "Vite / Node Runtime", "Drizzle ORM", "PostgreSQL", "ProfitRoom API", "Resend"],
    keyOutcomes: [
      "Direct booking engine integration with live suite rates and availability",
      "Significant reduction in 15%–25% third-party OTA commission fees",
      "Automated routing of event and dining inquiries to specific inboxes",
      "Fast, fluid luxury UI with high mobile conversion"
    ]
  }
];
