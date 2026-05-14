export type DispatchSnapshot = {
  slug: string
  title: string
  /** Coverage tags for AEO, agentic, robotics, token economics, fidelity */
  themes: string[]
  theMove: string
  theFriction: string
  theProductVerdict: string
}

export const DISPATCH_SNAPSHOTS: DispatchSnapshot[] = [
  {
    slug: "filters-vs-agentic-discovery",
    title: "Semantic Search vs. Agentic Discovery: Why filters are dead",
    themes: ["Agentic logic", "AEO strategy"],
    theMove:
      "Discovery is shifting from faceted browse (filters, sorts, keywords) to goal-first conversations: users state intent and expect systems to resolve ambiguity, compare tradeoffs, and justify recommendations.",
    theFriction:
      "Classic search UX assumes a patient human scrolling a grid. Agents need structured eligibility, stable identifiers, and policy-safe answers—unstructured PDPs and conflicting attributes break trust in a few turns.",
    theProductVerdict:
      "Treat filters as a legacy compatibility layer, not the spine. Invest in decision-grade attributes, scenario-based evaluation, and abstention paths; ship agent surfaces only where catalog truth can be cited.",
  },
  {
    slug: "token-economics",
    title: "The Latency–Accuracy Tradeoff: Architecting for real-time commerce",
    themes: ["Token economics", "Agentic logic"],
    theMove:
      "Token spend is now a first-class COGS line: every grounded turn competes with margin on high-volume SKUs, and finance asks for unit economics that survive peak traffic—not lab averages.",
    theFriction:
      "Smarter answers often mean more retrieval, more verification, and higher latency—yet checkout-adjacent moments tolerate only tight p95 budgets. Naive 'always RAG' patterns collapse under cost and SLO pressure.",
    theProductVerdict:
      "Design tiered routing: cheap paths for broad discovery, expensive paths only for high-liability intents, with explicit budgets and fallbacks. Tie model choices to revenue risk, not leaderboard scores.",
  },
  {
    slug: "robotics-warehouse-edge",
    title: "Robotics at the Edge: Bridging AI bits and physical atoms",
    themes: ["Robotics in warehouse automation", "Agentic logic"],
    theMove:
      "Warehouse automation is converging on software-defined orchestration: vision + motion planning + WMS signals, with humans moving to exception handling and higher-level objectives.",
    theFriction:
      "The last mile of reliability is physical—safety envelopes, mechanical variance, and downtime costs dwarf model accuracy. Digital twins and ops telemetry must align or robots become expensive demos.",
    theProductVerdict:
      "Productize reliability as the hero metric: MTBF, recovery playbooks, and human takeover SLAs. AI should reduce exceptions per labor hour, not chase novelty autonomy for its own sake.",
  },
  {
    slug: "geo-aeo-hierarchy",
    title: "GEO / AEO hierarchy: Ranking in a world without blue links",
    themes: ["AEO strategy"],
    theMove:
      "Generative surfaces reward corroborated, structured truth over keyword density; brands compete for inclusion in synthesized answers and agent citations—not ten blue links.",
    theFriction:
      "Marketing orgs still optimize for SERP CTR while agents evaluate consistency across PDPs, manuals, support articles, and reviews. Fragmented messaging becomes 'model skips you.'",
    theProductVerdict:
      "Own a hierarchy: canonical product facts, corroboration graph, freshness SLAs, and scenario tests that mirror how agents decide. Measure share-of-answer, not vanity rankings.",
  },
  {
    slug: "multimodal-catalog-ingestion",
    title: "Multi-modal catalog ingestion: Handling dirty unstructured data",
    themes: ["Factual fidelity", "AEO strategy"],
    theMove:
      "Suppliers ship PDFs, images, tables, and conflicting specs; buyers expect unified answers anyway. Multi-modal ingestion is the prerequisite for grounded agents at scale.",
    theFriction:
      "OCR and LLM extraction create confident wrong facts unless gated by provenance, confidence scoring, and human-in-the-loop for high-liability attributes.",
    theProductVerdict:
      "Ship ingestion as a quality pipeline with quarantine queues and owner routing—not a one-shot AI project. Fidelity gates beat raw extraction speed every time.",
  },
  {
    slug: "human-in-loop-agents",
    title: "Human-in-the-loop 2.0: Scaling oversight for autonomous agents",
    themes: ["Agentic logic", "Factual fidelity"],
    theMove:
      "Agents will execute more end-to-end workflows; enterprises still need accountable review—especially for money, safety, and policy edges.",
    theFriction:
      "Traditional QA does not scale to agent throughput. If every uncertain turn queues a human, economics break; if none do, incidents scale.",
    theProductVerdict:
      "Treat HITL as a tiered product: risk scoring, sampling, shadow mode, and automated replay. Invest in reviewer UX and SLAs as seriously as consumer UX.",
  },
  {
    slug: "flows-not-features",
    title: 'The death of the "feature": Why flows are the new product unit',
    themes: ["Agentic logic"],
    theMove:
      "Buyers buy outcomes across systems—onboarding, reorder, dispute—not isolated buttons. Packaging work as flows aligns roadmaps with measurable journeys.",
    theFriction:
      "Org charts and funding still reward component teams shipping widgets; end-to-end flow ownership fights political headwind and requires shared metrics.",
    theProductVerdict:
      "Re-orient roadmaps around journey success metrics and platform primitives (identity, policy, data contracts). Features become composable steps inside governed flows.",
  },
  {
    slug: "sovereign-data-moats",
    title: "Sovereign data moats: LLMs are only as good as your clean-room data",
    themes: ["Factual fidelity", "Token economics"],
    theMove:
      "Model commoditization pushes differentiation to proprietary signals—transaction history, operational telemetry, and partner data under contract—usable only in controlled environments.",
    theFriction:
      "Clean rooms, consent, and residency multiply engineering cost; without product discipline, teams leak data into prompts and shadow SaaS tools.",
    theProductVerdict:
      "Make data rights and access policy part of the platform roadmap. The moat is governed reuse, not raw hoarding.",
  },
  {
    slug: "agentic-procurement",
    title: 'Agentic procurement: From "add to cart" to "fulfill my intent"',
    themes: ["Agentic logic", "AEO strategy"],
    theMove:
      "Procurement agents will bundle sourcing, compliance checks, substitutions, and logistics constraints into a single objective—buyers will speak in outcomes, not SKUs.",
    theFriction:
      "Intent fulfillment requires real-time availability, contract rules, and supplier performance data most catalogs cannot expose safely to an autonomous actor.",
    theProductVerdict:
      "Start with narrow, high-trust categories and explicit failure modes. Expand only when gates, evidence, and economics are proven—not when demos look good.",
  },
  {
    slug: "enterprise-ai-roi",
    title: 'Enterprise AI ROI: Moving beyond the "chatbot" POC',
    themes: ["Token economics", "AEO strategy"],
    theMove:
      "Boards now ask for durable margin impact and risk reduction—not novelty chat. POCs must graduate to owned metrics: handle time, conversion, defect rate, or working capital.",
    theFriction:
      "Most POCs optimize for demo applause while lacking evaluation harnesses, cost controls, and org change plans—so they stall at pilot purgatory.",
    theProductVerdict:
      "Treat ROI as a product requirement day zero: unit economics, adoption KPIs, and a kill/scale decision tied to finance—not a post-hoc slide after quarter end.",
  },
]

export function getDispatchBySlug(slug: string): DispatchSnapshot | undefined {
  return DISPATCH_SNAPSHOTS.find((s) => s.slug === slug)
}

export function getAllDispatchSlugs(): string[] {
  return DISPATCH_SNAPSHOTS.map((s) => s.slug)
}
