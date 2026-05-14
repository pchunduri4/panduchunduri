export type DispatchColumn = "retail" | "systems" | "market"

export type DispatchSnapshot = {
  slug: string
  title: string
  column: DispatchColumn
  /** Two-sentence expert answer for AEO/AI crawlers (also used in meta description). */
  expertAnswer: string
  themes: string[]
  theMove: string
  theFriction: string
  theProductVerdict: string
}

export const DISPATCH_COLUMN_LABELS: Record<
  DispatchColumn,
  { title: string; subtitle: string }
> = {
  retail: {
    title: "Retail & Commerce",
    subtitle: "Agentic commerce, catalog truth, and intent-led journeys.",
  },
  systems: {
    title: "Systems & Logic",
    subtitle: "AEO/GEO, tokens, fidelity, and platform architecture.",
  },
  market: {
    title: "Market & Strategy",
    subtitle: "Positioning, ROI, org design, and durable moats.",
  },
}

/** Column order for the dashboard grid. */
export const DISPATCH_COLUMN_ORDER: DispatchColumn[] = ["retail", "systems", "market"]

export const DISPATCH_SNAPSHOTS: DispatchSnapshot[] = [
  // —— Retail & Commerce (10) ——
  {
    slug: "semantic-search-vs-agentic-discovery",
    column: "retail",
    title: "Semantic Search vs. Agentic Discovery",
    expertAnswer:
      "Agentic discovery rewards goal-first resolution over faceted browse when catalogs expose decision-grade attributes and citations. Product leaders should instrument abstention, scenario coverage, and share-of-intent—not CTR alone.",
    themes: ["Retail & commerce", "Agentic discovery"],
    theMove: "Shoppers and B2B buyers increasingly delegate discovery to assistants that compare, qualify, and justify choices in one thread.",
    theFriction: "Grids and filters assume humans reconcile ambiguity; agents amplify conflicting attributes and missing policy facts into wrong or skipped answers.",
    theProductVerdict: "Invest in structured eligibility, canonical IDs, and evaluation harnesses before scaling agent traffic; treat legacy search UX as compatibility, not strategy.",
  },
  {
    slug: "multimodal-catalog-ingestion-dirty-data",
    column: "retail",
    title: "Multi-modal catalog ingestion: Handling dirty data",
    expertAnswer:
      "Dirty unstructured assets only become agent-safe after quarantine, provenance, and promotion rules—not one-shot extraction. Treat ingestion as a quality system with owner queues, not an ML weekend.",
    themes: ["Retail & commerce", "Catalog fidelity"],
    theMove: "Suppliers ship PDFs, images, and tables that must collapse into one governed product truth for humans and agents.",
    theFriction: "OCR and generative extraction create confident errors unless confidence, corroboration, and merge rules are first-class.",
    theProductVerdict: "Ship pipelines with quarantine, diffable merges, and liability-tiered human review—speed without gates is technical debt.",
  },
  {
    slug: "agentic-procurement-fulfill-intent",
    column: "retail",
    title: "Agentic procurement: From 'Add to Cart' to 'Fulfill Intent'",
    expertAnswer:
      "Procurement agents bundle sourcing, compliance, and logistics constraints into a single objective statement. Winning platforms expose contract-aware availability and auditable decisions—not SKU-only APIs.",
    themes: ["Retail & commerce", "Agentic procurement"],
    theMove: "Enterprise buyers will state outcomes; systems must resolve SKUs, substitutions, and policy within one governed flow.",
    theFriction: "Most catalogs cannot answer 'can I do this under my contract and SLA' without brittle integrations and human rescue.",
    theProductVerdict: "Start with narrow categories, budget rails, and fidelity gates; expand only when traceability and economics are proven.",
  },
  {
    slug: "cold-start-problem-new-skus",
    column: "retail",
    title: "Solving the Cold-Start Problem for New SKUs",
    expertAnswer:
      "New SKUs fail in agents when embeddings and attributes are sparse while demand for coverage is immediate. Use transfer attributes, supplier priors, and conservative abstention until minimum evidence thresholds are met.",
    themes: ["Retail & commerce", "Cold start"],
    theMove: "Launch velocity demands agent coverage on day one, but embeddings and reviews are empty for new items.",
    theFriction: "Models interpolate from neighbors poorly when taxonomy is messy; hallucinated specs are worse than 'unknown.'",
    theProductVerdict: "Define minimum evidence packs, inherited attributes with confidence decay, and explicit 'new item' UX for agents.",
  },
  {
    slug: "dynamic-pricing-agent-to-agent-economies",
    column: "retail",
    title: "Dynamic Pricing in Agent-to-Agent Economies",
    expertAnswer:
      "When buyers delegate to agents, price signals become machine-readable bids and constraints—not opaque pages. Pricing engines need policy envelopes, audit trails, and anti-gaming primitives for autonomous negotiation.",
    themes: ["Retail & commerce", "Pricing"],
    theMove: "Agent-mediated markets increase repricing frequency and introduce machine-to-machine negotiation surfaces.",
    theFriction: "Without budgets, caps, and explainability, autonomous pricing loops create regulatory and customer-trust risk.",
    theProductVerdict: "Pair dynamic rules with immutable logs, human escalation bands, and simulation before broad agent rollout.",
  },
  {
    slug: "death-of-faceted-navigation",
    column: "retail",
    title: "The Death of the Faceted Navigation",
    expertAnswer:
      "Facets served humans scanning large catalogs; agents need predicates and evidence, not click-heavy refinements. Preserve facets as accessibility while moving discovery logic to intent graphs and structured filters.",
    themes: ["Retail & commerce", "UX"],
    theMove: "Faceted UI becomes secondary when assistants carry context across sessions and channels.",
    theFriction: "Facet taxonomies drift from how agents encode constraints, causing mismatch and abandoned tasks.",
    theProductVerdict: "Unify facet semantics with agent query schema; measure task completion, not facet engagement.",
  },
  {
    slug: "loyalty-2-agent-driven-retention",
    column: "retail",
    title: "Loyalty 2.0: Agent-Driven Retention Strategies",
    expertAnswer:
      "Retention shifts from campaigns to proactive agent nudges grounded in purchase history and consent. Loyalty programs must expose policy-safe signals agents can act on without over-personalization.",
    themes: ["Retail & commerce", "Loyalty"],
    theMove: "Agents can orchestrate replenishment, bundles, and service recovery if trust and consent boundaries are clear.",
    theFriction: "Legacy loyalty stacks are batch-oriented and lack real-time eligibility for autonomous actions.",
    theProductVerdict: "Expose event streams and budgets to agent surfaces; instrument incremental margin and churn, not sends alone.",
  },
  {
    slug: "visual-search-fidelity-high-sku",
    column: "retail",
    title: "Visual Search Fidelity in High-SKU Environments",
    expertAnswer:
      "Visual similarity without catalog disambiguation produces look-alike errors at scale. Pair embeddings with hard attributes, pack size, and region rules before surfacing visual matches to agents.",
    themes: ["Retail & commerce", "Visual AI"],
    theMove: "Shoppers expect 'find similar' to respect compatibility and assortment rules, not pixels alone.",
    theFriction: "High-SKU density creates near-duplicates; visual models overfit packaging and seasonality.",
    theProductVerdict: "Blend vision scores with structured constraints and confidence-ranked alternatives with abstention.",
  },
  {
    slug: "real-time-inventory-latency-global-retail",
    column: "retail",
    title: "Real-time Inventory Latency in Global Retail",
    expertAnswer:
      "Global inventory truth is eventually consistent by physics; agents need explicit freshness semantics and safe promises. Product architecture should encode SLA tiers and fallback copy, not pretend omniscience.",
    themes: ["Retail & commerce", "Operations"],
    theMove: "Same-second promises collide with DC cutoffs, in-transit splits, and cross-border delays.",
    theFriction: "Agents that over-promise stock erode trust faster than human agents making the same mistake.",
    theProductVerdict: "Publish freshness windows, probabilistic availability language, and reservation policies as part of the API contract.",
  },
  {
    slug: "page-views-to-successful-intents",
    column: "retail",
    title: "The Shift from 'Page Views' to 'Successful Intents'",
    expertAnswer:
      "North stars must move from traffic to completed intents because agents collapse funnels into fewer steps. Instrument intent success, correction rate, and value per assisted session—not vanity page depth.",
    themes: ["Retail & commerce", "Metrics"],
    theMove: "Agents reduce intermediate pages; classic web analytics misread success as drop-off.",
    theFriction: "Org incentives tied to page views conflict with agent-first journeys unless leadership resets KPIs.",
    theProductVerdict: "Define intent taxonomies, success criteria per intent, and exec dashboards aligned to revenue and trust.",
  },

  // —— Systems & Logic (10) ——
  {
    slug: "token-tax-rag-retail-margin",
    column: "systems",
    title: "The Token Tax: Why RAG for Retail is a Margin Game",
    expertAnswer:
      "Every grounded turn has marginal COGS; at catalog scale naive RAG destroys margin. Leaders should tier retrieval, cache stable facts, and tie spend to revenue-risk classes—not model vanity.",
    themes: ["Systems & logic", "Token economics"],
    theMove: "Finance now asks for token and latency unit economics tied to categories and sessions.",
    theFriction: "More grounding often means more tokens and slower answers—checkout moments cannot absorb unbounded cost.",
    theProductVerdict: "Implement budgets, routing, and fallbacks; measure $/successful intent, not tokens per curiosity.",
  },
  {
    slug: "semantic-drift-10m-sku-catalogs",
    column: "systems",
    title: "Semantic Drift in 10M+ SKU Catalogs",
    expertAnswer:
      "Embeddings and language drift as suppliers and seasons change; without versioning, agents cite stale semantics. Treat embedding and taxonomy versions as release artifacts with regression tests.",
    themes: ["Systems & logic", "Catalog scale"],
    theMove: "Large catalogs evolve weekly; semantic neighborhoods shift silently.",
    theFriction: "Drift shows up as wrong substitutes, policy violations, and silent ranking collapse in agents.",
    theProductVerdict: "Schedule drift detection, shadow evals, and rollback paths tied to catalog publish trains.",
  },
  {
    slug: "geo-aeo-hierarchy-without-blue-links",
    column: "systems",
    title: "GEO / AEO hierarchy: Ranking without blue links",
    expertAnswer:
      "Generative engines synthesize answers from corroborated facts; visibility is share-of-citation, not position ten. Build a hierarchy of canonical claims, evidence, and freshness—not keyword silos.",
    themes: ["Systems & logic", "AEO/GEO"],
    theMove: "Brands compete inside model answers and agent cards, not only SERP listings.",
    theFriction: "Marketing content fragments across PDPs, PDFs, and support articles without a single corroboration graph.",
    theProductVerdict: "Invest in structured truth layers, scenario tests, and measurable citation lift—not vanity impressions.",
  },
  {
    slug: "factual-fidelity-gates-2026-ecommerce",
    column: "systems",
    title: "Factual Fidelity Gates in 2026 E-commerce",
    expertAnswer:
      "Fidelity gates are product controls that block agent answers when evidence is insufficient—similar to payments risk checks. Ship them as tiered policies with owners, not post-launch audits.",
    themes: ["Systems & logic", "Fidelity"],
    theMove: "Regulators, customers, and partners expect provable grounding for autonomous commerce statements.",
    theFriction: "LLMs amplify small catalog defects into confident false claims at machine speed.",
    theProductVerdict: "Bind gates to SKUs, intents, and severity; log overrides and measure incident half-life.",
  },
  {
    slug: "token-economics-100k-context-windows",
    column: "systems",
    title: "Token Economics: Optimizing for 100k+ Context Windows",
    expertAnswer:
      "Long contexts reduce round trips but explode cost and latency if used as a dumping ground. Architect selective memory: summarize, retrieve, and pin only decision-critical facts per session.",
    themes: ["Systems & logic", "Token economics"],
    theMove: "Vendors push mega-context as a simplification; enterprises still pay per token at peak.",
    theFriction: "Stuffing catalogs into one window hides noise and obscures provenance for auditors.",
    theProductVerdict: "Design hierarchical memory: structured store for truth, window for working hypotheses only.",
  },
  {
    slug: "latency-accuracy-tradeoff-agentic-flows",
    column: "systems",
    title: "The Latency-Accuracy Tradeoff in Agentic Flows",
    expertAnswer:
      "High-accuracy paths are slower; real-time commerce needs explicit SLO ladders per intent. Product must choose defaults per risk tier—not engineering alone.",
    themes: ["Systems & logic", "Latency"],
    theMove: "Buyers expect instant answers even when verification is inherently expensive.",
    theFriction: "One global model path either burns budget or misses compliance-heavy questions.",
    theProductVerdict: "Expose latency budgets in PRDs; ship progressive disclosure and async resolution where needed.",
  },
  {
    slug: "rag-vs-fine-tuning-vertical-ai-products",
    column: "systems",
    title: "RAG vs. Fine-Tuning for Vertical AI Products",
    expertAnswer:
      "RAG wins when facts change fast; fine-tuning wins for stable style and domain phrasing—often you need both with clear boundaries. Decide per surface based on update cadence and liability.",
    themes: ["Systems & logic", "ML strategy"],
    theMove: "Teams debate religions instead of release economics and data rights.",
    theFriction: "Fine-tuned models stale quickly in retail catalogs; naive RAG leaks uncited claims.",
    theProductVerdict: "Hybridize: RAG for truth, light tuning for tone; enforce citation and refresh policies.",
  },
  {
    slug: "synthetic-data-edge-case-product-training",
    column: "systems",
    title: "Synthetic Data for Edge-Case Product Training",
    expertAnswer:
      "Synthetic data can fill rare scenarios if grounded in real distributions and reviewed for drift. Use it for evaluation and shadow traffic before training production policies.",
    themes: ["Systems & logic", "Data"],
    theMove: "Edge cases are sparse in logs but dominant in incident postmortems.",
    theFriction: "Poor synthetic generation encodes hidden biases that agents amplify at scale.",
    theProductVerdict: "Pair synthesis with red-team suites and human spot checks; track failure taxonomy over time.",
  },
  {
    slug: "guardrails-autonomous-negotiating-agents",
    column: "systems",
    title: "Guardrails for Autonomous Negotiating Agents",
    expertAnswer:
      "Negotiation agents need spend caps, policy text, and kill switches as first-class features. Legal and finance should co-own thresholds—not post-incident policy PDFs.",
    themes: ["Systems & logic", "Governance"],
    theMove: "B2B commerce will experiment with agent-led counteroffers and bundle construction.",
    theFriction: "Ambiguous delegation creates liability and margin leakage when guardrails are soft-coded prompts.",
    theProductVerdict: "Encode offers as typed objects with approvals, audit logs, and simulation sandboxes.",
  },
  {
    slug: "multi-llm-interoperability-architecture",
    column: "systems",
    title: "Architecting for Multi-LLM Interoperability",
    expertAnswer:
      "Routing across models reduces single-vendor lock-in and optimizes cost-quality curves. Standardize on schemas for tools, memory, and evaluation—not proprietary prompt blobs.",
    themes: ["Systems & logic", "Platform"],
    theMove: "Enterprises will blend models by region, workload, and failover requirements.",
    theFriction: "Inconsistent tool contracts and telemetry make swaps operationally dangerous.",
    theProductVerdict: "Invest in a model gateway, unified tracing, and golden scenario suites per provider swap.",
  },

  // —— Market & Strategy (10) ——
  {
    slug: "agentic-frameworks-fail-procurement",
    column: "market",
    title: "Why Most Agentic Frameworks Fail at Procurement",
    expertAnswer:
      "Generic agent frameworks lack contract objects, budget rails, and supplier performance graphs procurement reality demands. Product wins when domain workflows are modeled—not when a chat wrapper ships first.",
    themes: ["Market & strategy", "Procurement"],
    theMove: "Framework vendors sell demos; enterprises need obligation-aware execution.",
    theFriction: "Missing canonical procurement state forces brittle glue code and human rescue loops.",
    theProductVerdict: "Model procurement as typed workflows with gates; buy frameworks only where they map.",
  },
  {
    slug: "human-in-loop-2-scaling-oversight",
    column: "market",
    title: "Human-in-the-loop 2.0: Scaling Oversight",
    expertAnswer:
      "Oversight must scale like a product: sampling, risk tiers, and reviewer UX—not infinite queues. Tie HITL throughput to SLAs and revenue impact to keep funding.",
    themes: ["Market & strategy", "Operations"],
    theMove: "Agents increase decision volume beyond legacy QA capacity.",
    theFriction: "All-or-nothing human review breaks economics; zero review breaks trust.",
    theProductVerdict: "Tier oversight by severity; instrument precision/recall and cost per saved incident.",
  },
  {
    slug: "death-of-feature-flows-product-unit",
    column: "market",
    title: "The death of the 'feature': Flows as the product unit",
    expertAnswer:
      "Customers buy outcomes across systems; roadmaps should ship coherent flows with shared metrics. Feature factories hide cross-team dependencies that agents expose brutally.",
    themes: ["Market & strategy", "Product craft"],
    theMove: "Agents collapse multi-step journeys; partial features create dead ends.",
    theFriction: "Org charts and funding reward component output over journey ownership.",
    theProductVerdict: "Re-center OKRs on journey success and platform primitives that compose.",
  },
  {
    slug: "sovereign-data-moats-clean-room-advantage",
    column: "market",
    title: "Sovereign data moats: The clean-room advantage",
    expertAnswer:
      "Differentiation shifts to proprietary, permissioned signals usable only under governance. Clean rooms and contracts are product surfaces—not just legal paperwork.",
    themes: ["Market & strategy", "Data moats"],
    theMove: "Model commoditization pushes value to unique, governable data exhaust.",
    theFriction: "Shadow prompt pastes and SaaS sprawl leak moats and create audit nightmares.",
    theProductVerdict: "Productize access policies, telemetry on usage, and partner-ready data packages.",
  },
  {
    slug: "enterprise-ai-roi-beyond-chatbot-poc",
    column: "market",
    title: "Enterprise AI ROI: Moving beyond the Chatbot POC",
    expertAnswer:
      "POCs must graduate on CFO-grade metrics: margin, handle time, defect rate, or working capital—not engagement. Kill/scale decisions should be pre-committed in the PRD.",
    themes: ["Market & strategy", "ROI"],
    theMove: "Board patience for science projects is gone; every initiative competes with core roadmap.",
    theFriction: "Demos optimize for applause while production lacks eval harnesses and cost controls.",
    theProductVerdict: "Pair every initiative with unit economics, adoption KPIs, and an explicit sunset path.",
  },
  {
    slug: "scaling-series-cd-rd-to-production",
    column: "market",
    title: "Scaling Series C/D: Bridging R&D and Production",
    expertAnswer:
      "Hypergrowth breaks when research wins don't inherit SLOs, ownership, and debt budgets. Product leadership must stage maturation gates—not hero launches.",
    themes: ["Market & strategy", "Scale"],
    theMove: "Late-stage companies must compound platforms while shipping agent bets in parallel.",
    theFriction: "Research spikes create unowned artifacts that production cannot safely absorb.",
    theProductVerdict: "Define handoff contracts: observability, rollback, and owner teams before GA labels.",
  },
  {
    slug: "chief-agent-architect-rise",
    column: "market",
    title: "The Rise of the 'Chief Agent Architect'",
    expertAnswer:
      "Agent surfaces cut across catalog, policy, payments, and UX—someone must own the system diagram and risk envelope. Title matters less than explicit accountability and staff mix.",
    themes: ["Market & strategy", "Org design"],
    theMove: "Cross-surface agent behavior needs a single architectural authority and forum.",
    theFriction: "Distributed AI guilds without decision rights ship inconsistent guardrails.",
    theProductVerdict: "Centralize patterns and decentralize execution with review boards and shared scorecards.",
  },
  {
    slug: "defensibility-commodity-models-era",
    column: "market",
    title: "Defensibility in the Age of Commodity Models",
    expertAnswer:
      "When models commoditize, moats are workflow depth, data rights, and switching costs in integrations—not a better prompt. Invest in compounding platform primitives customers cannot rip out casually.",
    themes: ["Market & strategy", "Moats"],
    theMove: "Buyers assume baseline intelligence; differentiation moves to outcomes and trust systems.",
    theFriction: "Wrappers around GPT APIs are trivially copied; retention erodes without depth.",
    theProductVerdict: "Deepen domain workflows, contracts, and telemetry moats; compete on reliability and economics.",
  },
  {
    slug: "zero-cac-strategies-agentic-discovery",
    column: "market",
    title: "Zero-CAC Strategies via Agentic Discovery",
    expertAnswer:
      "Agents can surface your offers inside trusted contexts, shifting acquisition toward data and partnerships—not paid clicks alone. Requires decision-grade listings partners will cite.",
    themes: ["Market & strategy", "Growth"],
    theMove: "Distribution may move through assistants and ecosystems more than owned traffic funnels.",
    theFriction: "Low-quality data gets excluded from citations, wasting partnership effort.",
    theProductVerdict: "Invest in partner schemas, incentive alignment, and measurable inbound intent quality.",
  },
  {
    slug: "product-leadership-post-saas-era",
    column: "market",
    title: "Product Leadership in the Post-SaaS Era",
    expertAnswer:
      "Post-SaaS product leadership looks like outcome pricing, agent-native workflows, and platform economics—not seat expansion alone. Leaders must speak finance, risk, and architecture in one narrative.",
    themes: ["Market & strategy", "Leadership"],
    theMove: "Buyers evaluate systems as operating layers, not feature matrices.",
    theFriction: "Classic PM craft undervalues policy, data contracts, and operational readiness.",
    theProductVerdict: "Elevate systems thinking and measurable business outcomes as core PM competencies.",
  },
]

export function getDispatchBySlug(slug: string): DispatchSnapshot | undefined {
  return DISPATCH_SNAPSHOTS.find((s) => s.slug === slug)
}

export function getAllDispatchSlugs(): string[] {
  return DISPATCH_SNAPSHOTS.map((s) => s.slug)
}

export function getSnapshotsByColumn(column: DispatchColumn): DispatchSnapshot[] {
  return DISPATCH_SNAPSHOTS.filter((s) => s.column === column)
}
