"use client"

import { ProjectTemplate } from "@/components/project-template"

const metrics = [
  { label: "Business Impact", value: "$B+", change: "Annual value generated", isPositive: true },
  { label: "Product Coverage", value: "400M+", change: "Products in catalog", isPositive: true },
  { label: "Global Scale", value: "28", change: "Countries served", isPositive: true },
  { label: "Team Experience", value: "4+ yrs", change: "Global retail tech", isPositive: true },
]

const techStack = [
  {
    category: "GenAI & LLM",
    items: ["Large Language Models", "Gemini", "Vertex AI", "RAG Architecture"],
  },
  {
    category: "Data Platform",
    items: ["Retail Data Lake", "Real-time Pipelines", "Product Catalog", "Customer Signals"],
  },
  {
    category: "Cloud & Scale",
    items: ["Google Cloud Platform", "Enterprise AI Gateway", "Global CDN", "Multi-region Deploy"],
  },
  {
    category: "Product Analytics",
    items: ["A/B Testing Platform", "Business Intelligence", "Predictive Analytics", "Impact Measurement"],
  },
]

export default function WalmartScalePage() {
  return (
    <ProjectTemplate
      title="GenAI Product Platform at Hyperscale Retail"
      tagline="Enterprise LLM infrastructure for one of the world's largest retailers—real-time personalization and AI-driven experiences at global catalog scale"
      status="live"
      problem="A global retailer serves millions of customers daily across 28 countries with a catalog of 400M+ products. The challenge: how do you build AI products that deliver personalized, contextually relevant experiences at this unprecedented scale while maintaining responsible AI practices and driving measurable business impact?"
      architecture="We built a multi-tier GenAI platform leveraging LLMs for product understanding, customer intent recognition, and intelligent recommendations. The architecture includes: (1) Enterprise AI Gateway for model orchestration and responsible AI guardrails, (2) Real-time product intelligence layer processing catalog updates and customer signals, (3) Personalization engine delivering context-aware experiences across channels."
      outcome="The platform generates $B+ in annual business value through improved customer experiences, operational efficiency, and new AI-powered capabilities. Key achievements include: Google Cloud GenAI Leader certification demonstrating enterprise-grade implementation, responsible AI framework balancing capability with ethical considerations, and scalable architecture serving global retail operations."
      metrics={metrics}
      techStack={techStack}
    >
      {/* Architecture Diagram */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-foreground mb-4">Platform Architecture</h2>
        <div className="p-8 bg-secondary rounded-xl border border-border">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-background rounded-lg border border-border">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Layer 1</p>
              <p className="font-semibold text-foreground">AI Gateway</p>
              <p className="text-sm text-muted-foreground mt-1">Model Orchestration</p>
              <p className="text-xs text-primary mt-2">Responsible AI</p>
            </div>
            <div className="p-4 bg-background rounded-lg border border-border">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Layer 2</p>
              <p className="font-semibold text-foreground">Product Intelligence</p>
              <p className="text-sm text-muted-foreground mt-1">Catalog + Signals</p>
              <p className="text-xs text-primary mt-2">400M+ products</p>
            </div>
            <div className="p-4 bg-background rounded-lg border border-border">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Layer 3</p>
              <p className="font-semibold text-foreground">Personalization</p>
              <p className="text-sm text-muted-foreground mt-1">Context-aware</p>
              <p className="text-xs text-primary mt-2">Global scale</p>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-8 h-0.5 bg-border" />
              <span>Enterprise Data Flow</span>
              <span className="w-8 h-0.5 bg-border" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section>
        <h2 className="text-lg font-semibold text-foreground mb-4">Key Learnings</h2>
        <div className="space-y-4">
          <div className="p-4 bg-card border border-border rounded-xl">
            <h3 className="font-medium text-card-foreground mb-2">The real challenge isn't technology</h3>
            <p className="text-sm text-muted-foreground">
              Having led multiple GenAI product launches, I've seen the real challenge isn't tech—it's bridging AI hype with business value. Focus on business-driven AI strategy, not technology for its own sake.
            </p>
          </div>
          <div className="p-4 bg-card border border-border rounded-xl">
            <h3 className="font-medium text-card-foreground mb-2">Responsible AI is a product feature</h3>
            <p className="text-sm text-muted-foreground">
              At hyperscale retail, responsible AI trade-offs aren't optional—they're core product requirements. Building practical frameworks for balancing AI capability with ethical considerations is essential for enterprise adoption.
            </p>
          </div>
          <div className="p-4 bg-card border border-border rounded-xl">
            <h3 className="font-medium text-card-foreground mb-2">Scale requires platform thinking</h3>
            <p className="text-sm text-muted-foreground">
              Building AI products for global-scale retail means thinking in platforms, not features. Every AI capability must scale globally while maintaining local relevance across 28 countries.
            </p>
          </div>
        </div>
      </section>
    </ProjectTemplate>
  )
}
