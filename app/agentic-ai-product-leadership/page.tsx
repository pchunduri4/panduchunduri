import type { Metadata } from "next"
import Link from "next/link"
import { Sidebar } from "@/components/sidebar"
import { absoluteUrl, clipMetaDescription } from "@/lib/site-seo"
import { POWER_LEXICON } from "@/lib/power-lexicon"

const lede =
  "Pandu Chunduri is a Product Leader at Walmart Global Tech who ships agentic AI and autonomous systems at catalog scale: grounded LLM orchestration, retrieval and memory policies, and governance that keeps agents safe in production. His work spans the Agentic Retail Automation Framework—how retail platforms expose decision-grade attributes, citations, and policy truth so assistants can act, not just answer. He also advises on AI-driven M&A and private equity operations where diligence and value creation hinge on data, model economics, and defensible automation moats."

export const metadata: Metadata = {
  title: { absolute: "Agentic AI & Autonomous Systems | Pandu Chunduri" },
  description: clipMetaDescription(lede),
  alternates: { canonical: absoluteUrl("/agentic-ai-product-leadership") },
  openGraph: {
    title: "Agentic AI & Autonomous Systems | Pandu Chunduri",
    description: clipMetaDescription(lede),
    url: absoluteUrl("/agentic-ai-product-leadership"),
    type: "article",
  },
}

export default function AgenticAiProductLeadershipPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 lg:ml-[280px]">
        <main className="px-6 py-10 max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-primary mb-2">
            Vertical pillar · Product Leader Agentic AI
          </p>
          <h1 className="text-3xl font-bold text-foreground text-balance mb-6">
            Agentic AI & Autonomous Systems
          </h1>
          <p className="text-base leading-relaxed text-foreground border-l-4 border-primary pl-4 mb-10">
            {lede}
          </p>

          <section className="space-y-4 text-muted-foreground leading-relaxed">
            <h2 className="text-lg font-semibold text-foreground">How this maps to shipped work</h2>
            <p>
              The production frameworks on this site—{POWER_LEXICON.retailAutomation},
              catalog fidelity, and governance guardrails—are the same primitives that make{" "}
              <strong className="text-foreground">Product Leader agentic AI</strong> credible in
              interviews: not demos, but measurable abstention, scenario coverage, and economics.
            </p>
            <h2 className="text-lg font-semibold text-foreground pt-2">Related depth</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <Link href="/ai-systems/walmart-scale" className="text-primary hover:underline">
                  GenAI platform at hyperscale retail
                </Link>
              </li>
              <li>
                <Link href="/production-frameworks/agentic-commerce" className="text-primary hover:underline">
                  Agentic catalog orchestration (lab write-up)
                </Link>
              </li>
              <li>
                <Link href="/aeo-geo/agentic-era" className="text-primary hover:underline">
                  Beyond SEO: agentic-era product data
                </Link>
              </li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  )
}
