import type { ComponentProps } from "react"
import type { ProjectTemplate } from "@/components/project-template"

export type SupplementaryProject = Omit<
  ComponentProps<typeof ProjectTemplate>,
  "children"
> & { children?: React.ReactNode }

export const labProjects: Record<string, SupplementaryProject> = {
  "agentic-commerce": {
    title: "Agentic Catalog Orchestration",
    tagline:
      "Token-aware RAG and stateful orchestration across 10M+ SKUs—how catalog planes, memory, and budgets keep agent answers grounded.",
    status: "live",
    problem:
      "Traditional PDPs assume a human scrolls, reads, and compares. Agentic workflows collapse that path: agents need structured eligibility signals, compatibility truth, and citation-grade facts. Ambiguous data causes agents to deprioritize or skip offers entirely.",
    architecture:
      "A layered model: (1) canonical product graph with stable IDs and attribute normalization, (2) decision-grade copy blocks (what is included, exclusions, compatibility) separated from marketing prose, (3) retrieval policies that prefer verified facts over generative filler, and (4) evaluation harnesses that score agent success rates by scenario—not keyword rank.",
    outcome:
      "Early experiments correlate structured catalog upgrades with higher agent citation rates and fewer hallucinated claims in downstream assistants. The lab tracks scenario coverage, abstention rate, and post-edit correction cost as leading indicators.",
    metrics: [
      { label: "Scenario coverage", value: "72%", change: "Core commerce paths", isPositive: true },
      { label: "Agent citations", value: "+47%", change: "Vs. baseline catalog", isPositive: true },
      { label: "Abstention rate", value: "18%", change: "When data is incomplete", isPositive: false },
      { label: "Review cycle", value: "2 wks", change: "Peer review cadence", isPositive: true },
    ],
    techStack: [
      { category: "Data & Catalog", items: ["PIM integration", "Attribute normalization", "Golden records"] },
      { category: "Evaluation", items: ["Scenario suites", "LLM-as-judge (bounded)", "Human spot checks"] },
      { category: "Platform", items: ["Vector + keyword hybrid", "Feature flags", "Observability"] },
      { category: "Governance", items: ["Source-of-truth tags", "Change audit", "Responsible AI review"] },
    ],
  },
  "catalog-fidelity-index": {
    title: "Catalog Fidelity Index (CFI)",
    tagline:
      "A proprietary composite for factual grounding and semantic relevance in multi-modal LLM outputs—built for release gates, not vanity dashboards.",
    status: "live",
    problem:
      "Merchandising-grade quality scores do not predict whether an autonomous agent can safely cite a SKU. Teams need a defensible index that decomposes into explainable drivers auditors and merchants can act on.",
    architecture:
      "CFI blends corroboration-aligned fidelity, semantic relevance to intent classes, coverage and freshness, and explicit conflict detection across supplier feeds, golden records, and policy text. Thresholds vary by agent use-case severity.",
    outcome:
      "Operational as a gating signal for agent-eligible surfaces; regressions route to owners with driver-level explainability. Correlates with reduced hallucination incidents in pilot evaluations.",
    metrics: [
      { label: "Pilot coverage", value: "91%", change: "Categories instrumented", isPositive: true },
      { label: "Hallucination delta", value: "-34%", change: "Sampled agent evals", isPositive: true },
      { label: "Monthly checks", value: "12k+", change: "Fidelity samples", isPositive: true },
      { label: "Correlation", value: "0.87", change: "Internal gate model", isPositive: true },
    ],
    techStack: [
      { category: "Signals", items: ["Multi-modal evidence", "Policy packs", "Golden records"] },
      { category: "Scoring", items: ["Weighted composite", "Driver exports", "Versioned weights"] },
      { category: "Ops", items: ["Scorecards", "Owner queues", "SLA tracking"] },
      { category: "Safety", items: ["Hold paths", "Rollback", "Audit trails"] },
    ],
  },
  "multimodal-ingestion": {
    title: "Multi-Modal Ingestion Engine",
    tagline:
      "From unstructured catalog artifacts to decision-grade structured data agents can trust—without inventing facts at ingest.",
    status: "in-progress",
    problem:
      "Suppliers ship PDFs, imagery, and conflicting tables; agents need a single canonical truth. Classic OCR-plus-LLM pipelines hallucinate under pressure unless ingestion is treated as a quality system, not a one-shot extract.",
    architecture:
      "A staged pipeline: capture provenance, normalize representations, extract with confidence bounds, quarantine conflicts, and promote only validated fields into the agent-facing graph—with human review concentrated on liability-heavy attributes.",
    outcome:
      "R&D track: reducing time-to-promote for high-value attributes while holding abstention rates flat. Designed to pair with CFI gates at the boundary to agent surfaces.",
    metrics: [
      { label: "Quarantine rate", value: "18%", change: "Pre-promote", isPositive: false },
      { label: "Promote SLA", value: "36h", change: "Median path", isPositive: true },
      { label: "Conflict detect", value: "+41%", change: "Vs. baseline ingest", isPositive: true },
      { label: "R&D phase", value: "42%", change: "Readiness proxy", isPositive: true },
    ],
    techStack: [
      { category: "Ingest", items: ["OCR pipeline", "Layout models", "Provenance store"] },
      { category: "Quality", items: ["Confidence scoring", "Quarantine queues", "Human review"] },
      { category: "Graph", items: ["Canonical schema", "Merge rules", "Diff audit"] },
      { category: "Agents", items: ["CFI handoff", "Abstention hooks", "Feature flags"] },
    ],
  },
  "genai-cloud": {
    title: "Google Cloud GenAI Integration",
    tagline:
      "Patterns for shipping business-driven GenAI on Vertex AI and Gemini with production guardrails.",
    status: "completed",
    problem:
      "Teams prototype quickly in notebooks but stall when moving to governed enterprise environments—latency, cost, safety, and evaluation gaps appear late.",
    architecture:
      "Reference patterns for prompt routing, grounding with retrieval, evaluation datasets, canary releases, and cost controls. Emphasis on separating experimentation sandboxes from customer-facing serving paths.",
    outcome:
      "Certified implementation patterns reduced time-to-production for new GenAI features by standardizing the boring infrastructure: logging, redaction, quotas, and rollback.",
    metrics: [
      { label: "Certification", value: "GCP", change: "GenAI Leader", isPositive: true },
      { label: "Latency p95", value: "-28%", change: "After caching + routing", isPositive: true },
      { label: "Incidents", value: "0", change: "Major prod (window)", isPositive: true },
      { label: "Reuse", value: "6", change: "Teams adopted patterns", isPositive: true },
    ],
    techStack: [
      { category: "Cloud", items: ["Vertex AI", "Gemini", "Cloud Run", "IAM"] },
      { category: "Data", items: ["BigQuery", "Feature store", "Embeddings pipeline"] },
      { category: "Safety", items: ["Policy engines", "Output filters", "Human review queues"] },
      { category: "SRE", items: ["SLOs", "Dashboards", "Runbooks"] },
    ],
  },
  "smart-home": {
    title: "Smart Home Privacy & Transparency",
    tagline:
      "Startup-era work on making IoT data practices legible to customers without drowning them in legalese.",
    status: "in-progress",
    problem:
      "Consumers fear opaque data collection in connected devices. Product teams need UX patterns that increase trust without blocking activation funnels.",
    architecture:
      "Progressive disclosure of data use, plain-language consent moments, local-first options where feasible, and telemetry minimization tied to explicit product outcomes.",
    outcome:
      "Project paused after strategic pivot; learnings inform later responsible AI trade-off frameworks for agentic products.",
    metrics: [
      { label: "Trust score", value: "+12", change: "Self-reported survey", isPositive: true },
      { label: "Churn", value: "-4%", change: "Post-transparency UX", isPositive: true },
      { label: "Status", value: "Paused", change: "Startup pivot", isPositive: false },
      { label: "Lessons", value: "8", change: "Documented principles", isPositive: true },
    ],
    techStack: [
      { category: "UX", items: ["Progressive disclosure", "Consent flows", "In-product education"] },
      { category: "Platform", items: ["Telemetry budgets", "Data maps", "Deletion UX"] },
      { category: "Legal", items: ["Policy alignment", "Regional variants"] },
      { category: "Metrics", items: ["Qual + quant panels", "A/B hooks"] },
    ],
  },
  "responsible-ai": {
    title: "Responsible AI Trade-offs Framework",
    tagline:
      "Practical decisions for balancing capability, latency, cost, and risk when shipping agentic features.",
    status: "live",
    problem:
      "Responsible AI is often treated as a compliance checklist after the model is chosen. Product teams need an explicit trade-off space earlier—when architecture and data contracts are still flexible.",
    architecture:
      "A workshop-ready matrix linking use case severity to controls: human-in-the-loop defaults, grounding requirements, retention limits, geofencing, and escalation paths. Each control maps to owners and measurable operational metrics.",
    outcome:
      "In validation with product and legal partners; used to gate agentic experiments before broad rollout.",
    metrics: [
      { label: "Workshops", value: "11", change: "Cross-functional", isPositive: true },
      { label: "Controls mapped", value: "26", change: "To metrics", isPositive: true },
      { label: "Incidents avoided", value: "3", change: "Pre-launch reviews", isPositive: true },
      { label: "Adoption", value: "55%", change: "Pilot teams (internal)", isPositive: true },
    ],
    techStack: [
      { category: "Governance", items: ["Risk tiers", "Approval paths", "Documentation"] },
      { category: "Product", items: ["Feature flags", "Kill switches", "UX safeguards"] },
      { category: "ML Ops", items: ["Eval harnesses", "Drift monitors", "Versioning"] },
      { category: "Legal", items: ["Policy mapping", "Customer comms"] },
    ],
  },
}

export const aiSystemsProjects: Record<string, SupplementaryProject> = {
  "catalog-intelligence": {
    title: "Retail AI: Catalog & Product Intelligence",
    tagline:
      "Turning chaotic supplier feeds into a coherent product graph that humans and agents can reason over.",
    status: "live",
    problem:
      "Hyperscale catalogs ingest millions of updates daily from overlapping sources. Without strong identity resolution and normalization, personalization and agentic retrieval amplify errors instead of value.",
    architecture:
      "Entity resolution, attribute harmonization, taxonomy services, and enrichment pipelines with human-in-the-loop for edge cases. Downstream features consume stable IDs and versioned attributes rather than raw strings.",
    outcome:
      "Improved coverage and consistency unlock safer agent answers and faster merchant tooling. Metrics focus on defect rate, time-to-publish, and downstream retrieval precision—not vanity accuracy.",
    metrics: [
      { label: "SKU stability", value: "99.2%", change: "ID resolution", isPositive: true },
      { label: "Defect rate", value: "-41%", change: "Post-normalization", isPositive: true },
      { label: "Latency", value: "120ms", change: "p95 read path", isPositive: true },
      { label: "Sources", value: "180+", change: "Integrated feeds", isPositive: true },
    ],
    techStack: [
      { category: "Ingestion", items: ["Streaming ETL", "Schema contracts", "Quarantine queues"] },
      { category: "Graph", items: ["Entity resolution", "Hierarchy services", "Search indexes"] },
      { category: "Quality", items: ["Validators", "Sampling", "Owner workflows"] },
      { category: "AI", items: ["Embeddings", "NER assists", "RAG grounding"] },
    ],
  },
  "marketplace-ai": {
    title: "Marketplace AI Platform Architecture",
    tagline:
      "Balancing seller autonomy with buyer trust when third-party inventory scales past manual review.",
    status: "live",
    problem:
      "Marketplaces must scale listing quality and policy enforcement without crushing seller velocity. Traditional manual review does not keep pace with listing volume or agentic discovery.",
    architecture:
      "Risk-tiered automation: lightweight checks at submission, deeper ML and LLM-assisted review for sensitive categories, and appeals workflows with transparent reasons. Agents consume the same structured policy outcomes as humans.",
    outcome:
      "Reduced unsafe listings and buyer disputes while improving seller time-to-active. Architecture emphasizes auditability—every automated decision links to evidence and policy version.",
    metrics: [
      { label: "TTV", value: "-35%", change: "Time to visible listing", isPositive: true },
      { label: "Unsafe listings", value: "-52%", change: "Sampled audits", isPositive: true },
      { label: "Appeals SLA", value: "36h", change: "Median resolution", isPositive: true },
      { label: "Coverage", value: "62", change: "Auto policy packs", isPositive: true },
    ],
    techStack: [
      { category: "Policy", items: ["Rules engine", "Versioned policies", "Explainability"] },
      { category: "ML", items: ["Classifiers", "Duplicate detection", "Risk scoring"] },
      { category: "Workflow", items: ["Queues", "Human review", "Seller messaging"] },
      { category: "Platform", items: ["Eventing", "Feature flags", "Observability"] },
    ],
  },
}

export const aeoGeoProjects: Record<string, SupplementaryProject> = {
  framework: {
    title: "GEO & Agentic AEO Framework",
    tagline:
      "Generative Engine Optimization plus agent eligibility: how brands stay visible when answers are assembled, not ranked.",
    status: "live",
    problem:
      "Legacy SEO metrics misalign with LLM surfaces. Brands need a framework that connects structured product truth, third-party corroboration, and scenario-based evaluation—not keyword density.",
    architecture:
      "Three pillars: (1) decision-grade PDP facts, (2) corroboration graph across manuals, support, and trusted reviews, (3) continuous evaluation against agent scenarios and citation behavior.",
    outcome:
      "Teams use the framework to prioritize content work that moves agent outcomes, reducing wasted effort on legacy SEO tasks with no machine-decision impact.",
    metrics: [
      { label: "Scenarios", value: "140+", change: "Eval library", isPositive: true },
      { label: "Citation lift", value: "+19%", change: "Pilot brands", isPositive: true },
      { label: "Time to insight", value: "4 d", change: "Per vertical slice", isPositive: true },
      { label: "Coverage", value: "8", change: "Commerce categories", isPositive: true },
    ],
    techStack: [
      { category: "Content", items: ["Fact templates", "Structured data", "FAQ hygiene"] },
      { category: "Evidence", items: ["Corroboration map", "Source tiers", "Freshness SLAs"] },
      { category: "Eval", items: ["Scenario harness", "Citation tracking", "Regression tests"] },
      { category: "Analytics", items: ["Share of model answer", "Abstention tracking"] },
    ],
  },
  "cdq-scoring": {
    title: "CDQ Scoring & Factual Fidelity Gates",
    tagline:
      "AEO-specific view: using Catalog Data Quality as a gate for agent-grounded answers and citations.",
    status: "live",
    problem:
      "LLMs amplify catalog defects into confident-sounding false claims. Teams need explicit gates before agentic surfaces go live on a category.",
    architecture:
      "Fidelity gates combine automated checks, retrieval grounding constraints, and human spot checks for high-liability attributes. CDQ thresholds vary by use case severity.",
    outcome:
      "Fewer customer-impacting hallucinations and clearer ownership when scores regress. Complements the lab’s deeper CDQ scoring research with go-to-market playbooks.",
    metrics: [
      { label: "Gate coverage", value: "88%", change: "Agent SKUs", isPositive: true },
      { label: "Hallucination rate", value: "-61%", change: "Sampled evals", isPositive: true },
      { label: "Rollback time", value: "<15m", change: "Median", isPositive: true },
      { label: "Owners", value: "42", change: "Mapped SKUs→teams", isPositive: true },
    ],
    techStack: [
      { category: "Gates", items: ["Threshold policies", "Canary releases", "Kill switches"] },
      { category: "Data", items: ["CDQ feeds", "Source-of-truth", "Audit logs"] },
      { category: "RAG", items: ["Retrieval filters", "Citation prompts", "Abstention tuning"] },
      { category: "Ops", items: ["Dashboards", "Pager hooks", "RCA templates"] },
    ],
  },
}

export const strategyProjects: Record<string, SupplementaryProject> = {
  "smart-mobility": {
    title: "Smart Mobility & IoT: $100M+ Product Lines",
    tagline:
      "Scaling connected mobility products through platform phases—from SKU chaos to portfolio discipline.",
    status: "completed",
    problem:
      "IoT and mobility portfolios sprawl across firmware variants, regional regulations, and channel-specific bundles. Without platform thinking, each launch reinvents integration and dilutes margin.",
    architecture:
      "Modular hardware/software separation, shared cloud services, partner certification rails, and analytics that tie usage to reliability and revenue—not vanity connectivity stats.",
    outcome:
      "Portfolio rationalization and platform reuse supported nine-figure revenue lines with faster launches and lower service cost per device.",
    metrics: [
      { label: "Revenue", value: "$100M+", change: "Product lines (peak)", isPositive: true },
      { label: "SKU reduction", value: "-38%", change: "Rationalized portfolio", isPositive: true },
      { label: "Launch cycle", value: "-22%", change: "Time to market", isPositive: true },
      { label: "NPS", value: "+14", change: "Post-platform UX", isPositive: true },
    ],
    techStack: [
      { category: "Device", items: ["OTA", "Secure boot", "Telemetry"] },
      { category: "Cloud", items: ["MQTT / streaming", "Rules engine", "APIs"] },
      { category: "Partners", items: ["Cert programs", "SDKs", "Support tiers"] },
      { category: "Business", items: ["Subscription", "Attach analytics", "COGS modeling"] },
    ],
  },
  "platform-economics": {
    title: "AI Platform Economics: Asymmetric ROI",
    tagline:
      "How to fund platform bets when features look expensive but compound value across business units.",
    status: "live",
    problem:
      "Central AI platforms compete for capital with faster local wins. Finance sees cost; product sees optionality. Without a shared economic model, platforms starve or overbuild.",
    architecture:
      "Unit economics for reusable components (models, gateways, data contracts), attribution of downstream wins, and stage-gates tied to adoption—not science-fair accuracy leaderboards.",
    outcome:
      "Clearer funding narratives for agentic infrastructure and catalog intelligence, with explicit kill/scale criteria tied to measured adoption and risk reduction.",
    metrics: [
      { label: "Reuse factor", value: "4.2x", change: "Downstream features per core", isPositive: true },
      { label: "Payback", value: "14 mo", change: "Platform subset", isPositive: true },
      { label: "Cost per query", value: "-31%", change: "After routing+cache", isPositive: true },
      { label: "Adoption", value: "11", change: "Product lines on gateway", isPositive: true },
    ],
    techStack: [
      { category: "Finance", items: ["TCO models", "Chargeback", "Stage gates"] },
      { category: "Product", items: ["Roadmaps", "Adoption KPIs", "Sunset rules"] },
      { category: "Engineering", items: ["Shared services", "SLOs", "Capacity planning"] },
      { category: "Risk", items: ["Scenario stress", "Responsible AI costs"] },
    ],
  },
}
