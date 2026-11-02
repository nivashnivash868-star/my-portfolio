export const projects = [
  {
    id: "cybershield",
    name: "CYBERSHEILD",
    title: "Enterprise Cybersecurity Monitoring & Tiered SOC Platform",
    repoUrl: "https://github.com/nivashnivash868-star/Cybersheild-",
    category: "Cybersecurity & SOC",
    tagline: "Automated threat detection, tiered SOC triage & tamper-evident audit logging",
    description: "An integrated security operations platform that collects telemetry from distributed endpoints, investigates threats via a tiered SOC (levels 1 & 2 automated rule triage, level 3 human analyst verification), implements approval-gated firewall feeds, and records every incident in a tamper-evident audit trail.",
    techStack: [
      "Python",
      "FastAPI",
      "React.js",
      "Tailwind CSS",
      "Argon2",
      "PostgreSQL",
      "Uvicorn",
      "SQLAlchemy"
    ],
    features: [
      "Tiered Security Operations Center (Level 1/2 automated, Level 3 human)",
      "Approval-gated firewall rule feeds & dynamic blocklists",
      "Tamper-evident cryptographically signed audit logs",
      "Real-time endpoint telemetry monitoring & anomaly triage"
    ],
    image: "/images/projects/cybershield.png",
    colorScheme: {
      primary: "#2563EB",
      glow: "rgba(37, 99, 235, 0.25)",
      badgeBg: "bg-blue-50 text-blue-700 border-blue-200"
    },
    hasLiveDemo: false,
    visualType: "security"
  },
  {
    id: "dr-sos",
    name: "DR. SOS",
    title: "AI Road Safety & Emergency Medical Assistance Platform",
    repoUrl: "https://github.com/nivashnivash868-star/DR-SOS",
    category: "Safety & Emergency AI",
    tagline: "Instant emergency beacon, crash telemetry & hospital dispatch navigation",
    description: "An emergency response and rapid medical assistance platform designed to save critical minutes during accidents. Features one-tap SOS distress broadcasts, crash telemetry detection, real-time nearest hospital/ambulance routing with geolocation, and a high-visibility emergency guidance UI.",
    techStack: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "Geolocation API",
      "Web APIs",
      "Mobile Responsive"
    ],
    features: [
      "One-touch SOS emergency distress broadcasting with GPS coordinates",
      "Real-time nearest hospital and emergency service routing",
      "Crash telemetry indicators & automated safety protocols",
      "High-contrast HUD optimized for crisis navigation"
    ],
    image: null,
    colorScheme: {
      primary: "#EF4444",
      glow: "rgba(239, 68, 68, 0.25)",
      badgeBg: "bg-red-50 text-red-700 border-red-200"
    },
    hasLiveDemo: false,
    visualType: "emergency"
  },
  {
    id: "expense-tracker",
    name: "EXPENSE TRACKER",
    title: "Personal Financial Analytics & Relational Budgeting Engine",
    repoUrl: "https://github.com/nivashnivash868-star/expense-1",
    category: "FinTech & Analytics",
    tagline: "Full-stack personal finance tracker with PostgreSQL and interactive analytics",
    description: "A full-stack personal finance and expense analytics web application built with Python Flask and PostgreSQL. Enables users to record multi-category transactions, track monthly cash flow, monitor budget thresholds, and generate structured spending analytics with database persistence.",
    techStack: [
      "Python",
      "Flask",
      "PostgreSQL",
      "psycopg2-binary",
      "Gunicorn",
      "JavaScript",
      "Tailwind CSS"
    ],
    features: [
      "Interactive expense and revenue transaction categorization",
      "PostgreSQL relational database persistence via psycopg2",
      "Real-time budget threshold warnings and spend breakdown",
      "Clean financial analytics dashboard with responsive UX"
    ],
    image: null,
    colorScheme: {
      primary: "#10B981",
      glow: "rgba(16, 185, 129, 0.25)",
      badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200"
    },
    hasLiveDemo: false,
    visualType: "finance"
  },
  {
    id: "zero-plus",
    name: "ZERO PLUS",
    title: "ZeroPulse — Civic Infrastructure & Decision Intelligence Engine",
    repoUrl: "https://github.com/nivashnivash868-star/Zero--Plus",
    category: "Civic Decision Intelligence",
    tagline: "Full-stack civic dashboard with Leaflet geospatial maps & FastAPI backend",
    description: "A full-stack Decision Intelligence Engine and Civic Infrastructure Dashboard. Integrates an interactive React 19 frontend with Leaflet geospatial maps and Recharts telemetry, coupled to a FastAPI Python backend and SQLAlchemy ORM for unified urban infrastructure monitoring and incident tracking.",
    techStack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Leaflet Maps",
      "Recharts",
      "FastAPI",
      "SQLAlchemy"
    ],
    features: [
      "Interactive Leaflet geospatial mapping of civic infrastructure nodes",
      "Telemetry telemetry visualization with Recharts analytics",
      "FastAPI backend with SQLAlchemy ORM data modeling",
      "Unified single-service architecture for rapid deployment"
    ],
    image: null,
    colorScheme: {
      primary: "#06B6D4",
      glow: "rgba(6, 182, 212, 0.25)",
      badgeBg: "bg-cyan-50 text-cyan-700 border-cyan-200"
    },
    hasLiveDemo: false,
    visualType: "geospatial"
  },
  {
    id: "tech-forge",
    name: "TECH FORGE",
    title: "CSV Graph Assistant & Knowledge Graph Streaming Pipeline",
    repoUrl: "https://github.com/nivashnivash868-star/TECH-FORGE-",
    category: "Knowledge Graph & Streaming",
    tagline: "Apache Kafka + Neo4j full-stack pipeline with Cypher natural language grounding",
    description: "Developed with Team TECH FORGE for the Open Agent Hackathon 2026. A full-stack data pipeline and knowledge graph application that allows users to upload arbitrary CSV files, stream rows through Apache Kafka, ingest nodes into Neo4j using idempotent MERGE queries, and query the graph using natural language Cypher grounding.",
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "FastAPI",
      "Apache Kafka",
      "Neo4j",
      "Cypher",
      "Python"
    ],
    features: [
      "High-throughput CSV row streaming via Apache Kafka topics",
      "Idempotent MERGE operations into Neo4j graph database",
      "Natural-language question answering grounded in Cypher graphs",
      "Team collaboration project engineered for hackathon innovation"
    ],
    image: null,
    colorScheme: {
      primary: "#8B5CF6",
      glow: "rgba(139, 92, 246, 0.25)",
      badgeBg: "bg-purple-50 text-purple-700 border-purple-200"
    },
    hasLiveDemo: false,
    visualType: "knowledge-graph"
  }
];

