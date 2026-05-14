"use client"

import { StrategyTemplate } from "@/components/strategy-template"
import { AIEvolutionDiagram } from "@/components/ai-evolution-diagram"

function KeyTechStack({ items }: { items: string[] }) {
  return (
    <div className="not-prose mt-6 border-t border-dashed border-border pt-5 flex flex-wrap items-center gap-2">
      <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
        Key tech stack
      </span>
      {items.map((t) => (
        <span
          key={t}
          className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border font-medium"
        >
          {t}
        </span>
      ))}
    </div>
  )
}

const tableOfContents = [
  { id: "introduction", title: "Introduction", level: 2 },
  { id: "evolution-diagram", title: "Evolution thesis", level: 2 },
  {
    id: "phase-foundation",
    title: "Strategic Phase I — Insight infrastructure at research scale",
    level: 2,
  },
  {
    id: "phase-predictive-scale",
    title: "Strategic Phase II — Predictive velocity & connected portfolios",
    level: 2,
  },
  {
    id: "phase-greenfield-trust",
    title: "Strategic Phase III — Greenfield AI & trust under constraint",
    level: 2,
  },
  {
    id: "phase-marketplace-platform",
    title: "Strategic Phase IV — Marketplace risk & platform economics",
    level: 2,
  },
  {
    id: "phase-agentic-hyperscale",
    title: "Strategic Phase V — GenAI & agentic surfaces at hyperscale",
    level: 2,
  },
  { id: "implications", title: "Strategic implications", level: 2 },
  { id: "conclusion", title: "Conclusion", level: 2 },
]

export default function AIEvolutionPage() {
  return (
    <StrategyTemplate
      title="The AI Evolution: A Playbook for Architecting Global-Scale Systems."
      description="How to scale systems from analytics foundations to agentic experiences—without mistaking models for strategy. Patterns from research-scale data platforms, predictive portfolios, marketplace AI, and governed GenAI at global retail scale."
      readTime="20 min"
      publishDate="2024"
      category="Strategic Thesis"
      tableOfContents={tableOfContents}
    >
      <section id="introduction" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="mb-4">
          The hardest product work in AI is not picking a model—it is scaling systems that move
          cleanly from <strong>analytics</strong> (what happened, what is trending) to{" "}
          <strong>agents</strong> (what should happen next, with accountability). That transition
          breaks teams when data discipline, economics, and governance are treated as late-stage
          add-ons instead of architectural prerequisites.
        </p>
        <p className="mb-4">
          This playbook frames the evolution as a sequence of compounding phases: monetizing
          insight infrastructure, shipping predictive and connected products under real P&L
          pressure, incubating AI inside multi-sided platforms, and only then pushing{" "}
          <strong>grounded, agentic surfaces</strong> where factual fidelity and kill-switches are
          part of the product spec—not a post-launch audit.
        </p>
        <p>
          What follows is written for product and platform leaders who own outcomes, not slide
          decks: the business challenge at each phase, the technical bar that had to clear, and the
          implications for how you staff, fund, and sequence work on the way to global scale.
        </p>
      </section>

      <section id="evolution-diagram" className="mb-12">
        <AIEvolutionDiagram />
      </section>

      <section id="phase-foundation" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Strategic Phase I — Insight infrastructure at research scale
        </h2>
        <p className="mb-4">
          <strong>Business challenge:</strong> Turn massive archival depth from a storage cost into
          a revenue-grade discovery surface—without drowning buyers in noise.
        </p>
        <p className="mb-4">
          <strong>Technical challenge:</strong> Unify search, entitlement, and CRM-adjacent
          workflows so analysts and clients could trust “one search” across years of heterogeneous
          research—not a patchwork of siloed exports.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Product spine:</strong> Requirements driven by observed workflows, not
            feature parity lists—A/B learning loops where the product itself teaches you what
            “good” looks like.
          </li>
          <li>
            <strong>Data as product:</strong> Archival assets packaged as measurable pipeline
            contributors (e.g., lead acceleration), not passive libraries.
          </li>
          <li>
            <strong>Platform leverage:</strong> One ingestion and indexing spine serving multiple
            revenue motions instead of one-off report factories.
          </li>
        </ul>
        <p>
          The enduring lesson:{" "}
          <strong>
            adoption and change management dominate “model moments” when the buyer is an enterprise
            team under quota pressure.
          </strong>
        </p>
        <KeyTechStack
          items={[
            "Enterprise search",
            "Research archives",
            "Salesforce integrations",
            "A/B experimentation",
            "Data warehousing",
          ]}
        />
      </section>

      <section id="phase-predictive-scale" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          {"Strategic Phase II — Predictive velocity & connected portfolios"}
        </h2>
        <p className="mb-4">
          <strong>Business challenge:</strong> Convert engineering-adjacent analytics into
          product lines with defensible margins—while competing for roadmap against consulting
          gravity.
        </p>
        <p className="mb-4">
          <strong>Technical challenge:</strong> Operationalize forecasting and IoT-scale telemetry
          so outcomes are tied to SLAs customers pay for—not bespoke science projects per account.
        </p>
        <ol className="list-decimal pl-6 space-y-3 mb-4">
          <li>
            <strong>Portfolio GTM:</strong> Launch connected offers where hardware, software, and
            services reinforce the same narrative—not three P&L lines pretending to be one.
          </li>
          <li>
            <strong>Incubation discipline:</strong> Run parallel business cases with external
            innovation ecosystems while keeping a single internal bar for “what ships.”
          </li>
          <li>
            <strong>Global execution:</strong> Build operating cadences across regions without
            fragmenting the product architecture.
          </li>
        </ol>
        <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-6">
          “The companies that win in AI will look less like model providers and more like
          domain-specific operating systems.”
        </blockquote>
        <KeyTechStack
          items={[
            "Predictive analytics",
            "IoT mesh & telemetry",
            "Smart mobility stacks",
            "Portfolio P&L modeling",
            "Global program management",
          ]}
        />
      </section>

      <section id="phase-greenfield-trust" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          {"Strategic Phase III — Greenfield AI & trust under constraint"}
        </h2>
        <p className="mb-4">
          <strong>Business challenge:</strong> Differentiate in consumer smart-home without
          defaulting to the surveillance playbook—especially when capital and time are scarce.
        </p>
        <p className="mb-4">
          <strong>Technical challenge:</strong> Prove value with thin teams while keeping privacy,
          safety, and transparency legible to non-expert buyers.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Moat realism:</strong> Differentiation comes from durable data rights and
            experiences—not a slightly better offline model score.
          </li>
          <li>
            <strong>Trust UX:</strong> Progressive disclosure beats “trust us” copy when sensors
            are in someone’s living room.
          </li>
          <li>
            <strong>Operating tempo:</strong> Startup speed only helps if you instrument churn,
            incidents, and support load early enough to steer.
          </li>
        </ul>
        <KeyTechStack
          items={[
            "Consumer IoT",
            "Privacy-by-design UX",
            "Telemetry minimization",
            "Incident response",
            "Rapid prototyping",
          ]}
        />
      </section>

      <section id="phase-marketplace-platform" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          {"Strategic Phase IV — Marketplace risk & platform economics"}
        </h2>
        <p className="mb-4">
          <strong>Business challenge:</strong> Incubate AI inside a marketplace where trust,
          compliance, and throughput are the product—growth cannot outrun risk controls.
        </p>
        <p className="mb-4">
          <strong>Technical challenge:</strong> Ship recommendations and risk automation that are
          auditable to enterprise buyers and tolerable to suppliers on the other side of the
          network.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Compliance as throughput:</strong> Monitoring signals have to reduce operational
            drag, not add opaque black boxes.
          </li>
          <li>
            <strong>Two-sided optimization:</strong> Models that improve buyer experience while
            preserving supplier viability—otherwise the marketplace hollows out.
          </li>
          <li>
            <strong>Platform economics:</strong> AI features must show up in retention, take rate,
            or unit economics—not only in innovation slide counts.
          </li>
        </ul>
        <KeyTechStack
          items={[
            "Marketplace ML",
            "Supply chain risk scoring",
            "Compliance automation",
            "Recommendation systems",
            "Predictive analytics",
          ]}
        />
      </section>

      <section id="phase-agentic-hyperscale" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          {"Strategic Phase V — GenAI & agentic surfaces at hyperscale"}
        </h2>
        <p className="mb-4">
          <strong>Business challenge:</strong> Convert GenAI from a capability demo into measured
          business impact at catalog and traffic volumes where a single defect class can become a
          headline.
        </p>
        <p className="mb-4">
          <strong>Technical challenge:</strong> Operate grounded assistants with routing, cost
          controls, evaluation harnesses, and explicit abstention paths—while keeping latency and
          reliability inside customer-tolerable envelopes.
        </p>
        <ol className="list-decimal pl-6 space-y-3 mb-4">
          <li>
            <strong>Outcome-linked AI strategy:</strong> Every major bet ties to a business metric
            the CFO recognizes—not “engagement with the bot.”
          </li>
          <li>
            <strong>Responsible trade-offs:</strong> Capability, latency, and harm surface are
            negotiated in the PRD, not discovered in production.
          </li>
          <li>
            <strong>Hyperscale architecture:</strong> Multi-country operations and extreme catalog
            cardinality force platform thinking: reuse, gates, and observability first.
          </li>
        </ol>
        <p className="mt-4">
          Cloud GenAI certification work reinforced the same product lesson:{" "}
          <strong>
            the durable edge is operational excellence—routing, fallbacks, and governance—not a
            leaderboard score.
          </strong>
        </p>
        <KeyTechStack
          items={["Vertex AI", "Gemini", "LLM orchestration", "RAG & grounding", "Enterprise SLOs"]}
        />
      </section>

      <section id="implications" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Strategic implications</h2>
        <p className="mb-6 text-muted-foreground">
          Tactical takeaways for leaders shipping under real scrutiny—high stakes, few second
          chances.
        </p>
        <div className="not-prose space-y-4">
          <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
            <p className="font-bold text-foreground">ROI-First Architecture</p>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              If the business case does not survive a finance review, you are building research,
              not product. Sequence investments so each layer funds the next.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
            <p className="font-bold text-foreground">Governed Agent Rollouts</p>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              Agents amplify catalog defects and policy ambiguity. Ship gates, evidence trails, and
              kill switches as part of v1—not “Phase 2 hardening.”
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
            <p className="font-bold text-foreground">Platform Compounding</p>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              Features that do not reuse data contracts, evaluation harnesses, and routing
              primitives become expensive one-offs that starve the roadmap.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
            <p className="font-bold text-foreground">Change Velocity as Moat</p>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              Organizational resistance kills more AI programs than tokenizer limits. Staff
              enablement like a product surface—with metrics.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
            <p className="font-bold text-foreground">Data Rights Before Model Rights</p>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              If you cannot explain provenance and policy boundaries, you do not have enterprise
              AI—you have a demo with liability.
            </p>
          </div>
        </div>
      </section>

      <section id="conclusion" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
        <p>
          Scaling from analytics to agents is not a hype cycle—it is an architectural progression.
          The teams that win treat each phase as a forcing function: monetizable insight
          infrastructure, predictive products with P&L discipline, marketplace-safe automation,
          and only then agentic surfaces with grounded behavior and operational guardrails. In the
          agentic era,{" "}
          <strong>
            the differentiator is whether your systems compound—or whether your demos decay.
          </strong>
        </p>
      </section>
    </StrategyTemplate>
  )
}
