"use client"

import { StrategyTemplate } from "@/components/strategy-template"

const tableOfContents = [
  { id: "introduction", title: "Introduction", level: 2 },
  { id: "shift", title: "The Shift: Human Clicks to Machine Decisions", level: 2 },
  { id: "product-intelligence", title: "Decision-Grade Product Intelligence", level: 2 },
  { id: "geo-framework", title: "GEO: Generative Engine Optimization", level: 3 },
  { id: "agentic-aeo", title: "Agentic AEO: Agent Eligibility", level: 3 },
  { id: "cdq-scoring", title: "CDQ Scoring & Factual Fidelity", level: 2 },
  { id: "trust-factors", title: "What Breaks AI Agent Trust", level: 2 },
  { id: "implementation", title: "Practical Implementation", level: 2 },
]

export default function AgenticEraPage() {
  return (
    <StrategyTemplate
      title="Beyond SEO: Preparing Product Data for the Agentic Era"
      description="The search bar isn't dying overnight, but it's no longer the center of commerce. We're moving from human clicks to machine decisions. A practical framework for the shift."
      readTime="15 min"
      publishDate="2024"
      category="AEO Research"
      tableOfContents={tableOfContents}
    >
      <section id="introduction" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="mb-4">
          The search bar isn't dying overnight—but it's no longer the center of commerce. We're moving from human clicks to machine decisions. In this new paradigm, product data isn't "content" anymore. It's <strong>decision-grade product intelligence</strong>.
        </p>
        <p>
          If your data is ambiguous—compatibility questions, what's included, policies—AI agents reduce risk the same way humans do: <strong>they skip you</strong>.
        </p>
      </section>

      <section id="shift" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">The Shift: Human Clicks to Machine Decisions</h2>
        <p className="mb-4">
          Traditional SEO optimized for human behavior: keywords, click-through rates, time on page. The agentic era inverts this model. AI agents don't browse—they execute. They need:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Unambiguous product specifications:</strong> Clear answers to compatibility, dimensions, requirements</li>
          <li><strong>Complete variant information:</strong> Every option, every combination, explicitly stated</li>
          <li><strong>Transparent policies:</strong> Return, warranty, shipping—in machine-readable format</li>
          <li><strong>Factual accuracy:</strong> No invented claims, no ambiguity that requires human judgment</li>
        </ul>
        <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-6">
          "AI agents don't have the patience for ambiguity. If they can't verify, they won't recommend."
        </blockquote>
      </section>

      <section id="product-intelligence" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Decision-Grade Product Intelligence</h2>
        <p className="mb-4">
          Product data must evolve from marketing content to decision-grade intelligence. This means:
        </p>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>Structured specifications:</strong> Every attribute in a consistent, queryable format
          </li>
          <li>
            <strong>Compatibility matrices:</strong> Explicit "works with" and "doesn't work with" relationships
          </li>
          <li>
            <strong>Complete inclusion lists:</strong> What's in the box, what's required, what's optional
          </li>
          <li>
            <strong>Policy transparency:</strong> Machine-readable terms that agents can verify
          </li>
        </ol>
      </section>

      <section id="geo-framework" className="mb-12">
        <h3 className="text-xl font-semibold mb-4">GEO: Generative Engine Optimization</h3>
        <p className="mb-4">
          GEO focuses on getting accurately represented and cited in AI-generated answers. Key tactics:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Structure content for LLM comprehension, not keyword density</li>
          <li>Provide clear, quotable statements that AI can cite with confidence</li>
          <li>Include authoritative signals: credentials, data sources, verification methods</li>
          <li>Update content regularly to maintain freshness signals</li>
        </ul>
      </section>

      <section id="agentic-aeo" className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Agentic AEO: Becoming Agent-Eligible</h3>
        <p className="mb-4">
          Beyond citations, Agentic AEO focuses on becoming eligible for agent actions—actual transactions, not just mentions:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>API readiness:</strong> Can agents programmatically access your inventory, pricing, availability?</li>
          <li><strong>Decision completeness:</strong> Can an agent make a purchase decision without human intervention?</li>
          <li><strong>Trust signals:</strong> Verified reviews, clear policies, established brand presence</li>
          <li><strong>Transaction capability:</strong> Seamless checkout flows that agents can navigate</li>
        </ul>
      </section>

      <section id="cdq-scoring" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">CDQ Scoring & Factual Fidelity</h2>
        <p className="mb-4">
          Catalog Data Quality (CDQ) scoring measures your product data's readiness for AI consumption:
        </p>
        <div className="p-6 bg-secondary rounded-xl mb-4">
          <h4 className="font-semibold mb-3">CDQ Scoring Dimensions</h4>
          <ul className="space-y-2 text-sm">
            <li><strong>Completeness:</strong> % of required attributes populated</li>
            <li><strong>Accuracy:</strong> Verified vs. claimed specifications</li>
            <li><strong>Consistency:</strong> Same product, same data across channels</li>
            <li><strong>Currency:</strong> How recently verified/updated</li>
            <li><strong>Clarity:</strong> Unambiguous, machine-interpretable format</li>
          </ul>
        </div>
        <p>
          The <strong>Factual Fidelity Gate</strong> ensures you improve clarity without inventing claims. Every statement must be verifiable—no hallucinated specifications, no optimistic rounding, no ambiguous language.
        </p>
      </section>

      <section id="trust-factors" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What Breaks AI Agent Trust</h2>
        <p className="mb-4">
          In my research, three categories consistently cause agents to skip products:
        </p>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>Variant mismatch:</strong> When size, color, or configuration options don't match actual availability
          </li>
          <li>
            <strong>Compatibility gaps:</strong> Unclear "works with" information that creates purchase risk
          </li>
          <li>
            <strong>Policy ambiguity:</strong> Vague return policies, unclear warranty terms, hidden fees
          </li>
        </ol>
        <p className="mt-4">
          Agents are risk-averse by design. When in doubt, they recommend the product with clearer data—not necessarily the better product.
        </p>
      </section>

      <section id="implementation" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Practical Implementation</h2>
        <p className="mb-4">
          To prepare your product data for the agentic era:
        </p>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>Audit your CDQ score:</strong> Measure completeness, accuracy, and clarity across your catalog
          </li>
          <li>
            <strong>Fix the trust breakers:</strong> Prioritize variant accuracy, compatibility data, and policy transparency
          </li>
          <li>
            <strong>Structure for machines:</strong> Implement schema.org markup, maintain clean APIs, use consistent formats
          </li>
          <li>
            <strong>Monitor agent citations:</strong> Track how AI systems represent your products and identify gaps
          </li>
        </ol>
      </section>
    </StrategyTemplate>
  )
}
