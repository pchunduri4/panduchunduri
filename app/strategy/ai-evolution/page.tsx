"use client"

import { StrategyTemplate } from "@/components/strategy-template"

const tableOfContents = [
  { id: "introduction", title: "Introduction", level: 2 },
  { id: "gartner-era", title: "The Gartner Era: Data Analytics Foundation", level: 2 },
  { id: "parsons-transformation", title: "Parsons: From Analytics to AI Products", level: 2 },
  { id: "startup-lessons", title: "Startup Lessons: Teep & Smart Home AI", level: 3 },
  { id: "avetta-scale", title: "Avetta: AI Platform Incubation", level: 2 },
  { id: "enterprise-retail-genai", title: "Enterprise retail: GenAI at scale", level: 2 },
  { id: "implications", title: "Strategic Implications", level: 2 },
  { id: "conclusion", title: "Conclusion", level: 2 },
]

export default function AIEvolutionPage() {
  return (
    <StrategyTemplate
      title="Product AI Strategy: From Analytics to Enterprise AI Platforms"
      description="The evolution from business intelligence and data analytics to AI-first product development. Lessons from 23+ years leading product at Gartner, Parsons, Avetta, and enterprise retail GenAI at global scale."
      readTime="20 min"
      publishDate="2024"
      category="Strategic Thesis"
      tableOfContents={tableOfContents}
    >
      <section id="introduction" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="mb-4">
          Over 23 years in product management, I've witnessed and led the transformation from traditional business intelligence to modern AI-first product development. This thesis documents the strategic patterns that enable successful AI product evolution at enterprise scale.
        </p>
        <p>
          The journey from Gartner's research platforms through Parsons' predictive systems, a smart home startup, Avetta's marketplace AI, and now enterprise GenAI infrastructure at global retail scale reveals a consistent pattern: <strong>successful AI product strategy isn't about technology adoption—it's about bridging AI hype with measurable business value.</strong>
        </p>
      </section>

      <section id="gartner-era" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">The Gartner Era: Data Analytics Foundation (2007-2013)</h2>
        <p className="mb-4">
          At Gartner, I launched the Master Research product platform—a system that enabled Salesforce lead generation and one-click search across 10+ years of archived data. This project eliminated $2M+ in annual manual labor costs and established foundational patterns I'd use throughout my career:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>User-centric product management:</strong> Prioritized requirements through direct user insights, A/B testing, and qualitative research</li>
          <li><strong>Data as product:</strong> Transformed archived research from cost center to revenue driver</li>
          <li><strong>Platform thinking:</strong> Built infrastructure that served multiple use cases rather than point solutions</li>
        </ul>
        <p>
          Managing 5 key client engagements for digital product development, including migrations that required direct management of 6 FTEs and 50+ indirect reports, taught me that <strong>AI product success depends more on change management than technical excellence.</strong>
        </p>
      </section>

      <section id="parsons-transformation" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Parsons: From Analytics to AI Products (2013-2020)</h2>
        <p className="mb-4">
          At Parsons, I led product strategy that generated $1B+ in value through predictive capabilities. The transformation from traditional consulting to AI-enabled products required fundamental shifts in how we thought about product development:
        </p>
        <ol className="list-decimal pl-6 space-y-3 mb-4">
          <li>
            <strong>GTM Strategy for IoT:</strong> Launched new product lines driving $100M+ revenue with 25%+ EBITDA margins
          </li>
          <li>
            <strong>Product-Market Fit at Scale:</strong> Assessed 5 business cases for incubation alongside startups from US and Israel
          </li>
          <li>
            <strong>Global Team Building:</strong> Established high-performing organizations spanning North America, Europe, and APAC
          </li>
        </ol>
        <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-6">
          "The companies that win in AI will look less like model providers and more like domain-specific operating systems."
        </blockquote>
      </section>

      <section id="startup-lessons" className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Startup Lessons: Teep & Smart Home AI (2019-2020)</h3>
        <p className="mb-4">
          Founding Teep—a smart home products and software startup focused on data privacy, safety, and transparency—provided crucial lessons about AI product development in greenfield environments:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Built a competent team from scratch, handling all aspects from market research to operations</li>
          <li>Learned that AI differentiation requires unique data access, not just better algorithms</li>
          <li>Discovered the importance of trust and transparency in consumer AI products</li>
        </ul>
      </section>

      <section id="avetta-scale" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Avetta: AI Platform Incubation (2020-2022)</h2>
        <p className="mb-4">
          As Head of Product for Avetta's AI and Analytics division, I led new product incubation for marketplace and platform AI products. This role bridged the gap between startup agility and enterprise requirements:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Supply chain risk management through AI-powered compliance monitoring</li>
          <li>Marketplace optimization using predictive analytics and recommendation systems</li>
          <li>Platform AI products serving $100M+ revenue business with 18%+ YoY growth</li>
        </ul>
      </section>

      <section id="enterprise-retail-genai" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Enterprise retail: GenAI at scale (2022–Present)</h2>
        <p className="mb-4">
          In my current chapter I scale GenAI and LLM platforms to $B+ impact at a top global retailer. The real challenge isn't technology—it's bridging AI hype with business value. Key insights from this experience:
        </p>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>Business-driven AI strategy:</strong> Every AI investment must tie to measurable business outcomes
          </li>
          <li>
            <strong>Responsible AI trade-offs:</strong> Practical frameworks for balancing capability vs. risk
          </li>
          <li>
            <strong>Platform scalability:</strong> Building infrastructure that serves a global multi-country retail operation at extreme catalog scale
          </li>
        </ol>
        <p className="mt-4">
          The Google Cloud Generative AI Leader certification reinforced these principles—focusing on scalable, outcome-focused AI products built with Gemini and Vertex AI.
        </p>
      </section>

      <section id="implications" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Strategic Implications</h2>
        <p className="mb-4">
          For AI product leaders, this 23-year journey suggests several actionable implications:
        </p>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>Start with business value, not technology.</strong> The most successful AI products solve clear business problems first.
          </li>
          <li>
            <strong>Build data moats early.</strong> Unique data access creates sustainable competitive advantage.
          </li>
          <li>
            <strong>Invest in change management.</strong> AI adoption fails more often from organizational resistance than technical limitations.
          </li>
          <li>
            <strong>Think platforms, not features.</strong> AI infrastructure that serves multiple use cases compounds value over time.
          </li>
        </ol>
      </section>

      <section id="conclusion" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
        <p>
          The evolution from analytics to AI-first product development follows predictable patterns. Success requires combining deep technical understanding with business acumen, building platforms that scale, and maintaining relentless focus on measurable outcomes. As we enter the agentic AI era, these principles become even more critical—the winners will be those who bridge AI capabilities with real business value.
        </p>
      </section>
    </StrategyTemplate>
  )
}
