import type { Metadata } from "next"
import Link from "next/link"
import { Sidebar } from "@/components/sidebar"
import { absoluteUrl, clipMetaDescription } from "@/lib/site-seo"
import { POWER_LEXICON } from "@/lib/power-lexicon"

const lede =
  "Pandu Chunduri is a Walmart Product Leader who has shipped AdTech-adjacent personalization at global scale: real-time signals, policy-safe targeting boundaries, and experiences that stay coherent when models—not just rules—mediate what a customer sees. Autonomous agentic commerce & hyper-personalization means treating identity, consent, latency, and measurement as one system: the assistant and the ad surface must agree on truth about availability, price, and eligibility. This page anchors how retail media and catalog intelligence converge when agents become shoppers."

export const metadata: Metadata = {
  title: { absolute: "AdTech & AI Personalization at Scale | Pandu Chunduri" },
  description: clipMetaDescription(lede),
  alternates: { canonical: absoluteUrl("/adtech-hyper-personalization") },
  openGraph: {
    title: "AdTech & AI Personalization at Scale | Pandu Chunduri",
    description: clipMetaDescription(lede),
    url: absoluteUrl("/adtech-hyper-personalization"),
    type: "article",
  },
}

export default function AdtechHyperPersonalizationPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 lg:ml-[280px]">
        <main className="px-6 py-10 max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-primary mb-2">
            Vertical pillar · AdTech AI personalization
          </p>
          <h1 className="text-3xl font-bold text-foreground text-balance mb-6">
            AdTech & AI Personalization at Scale
          </h1>
          <p className="text-base leading-relaxed text-foreground border-l-4 border-primary pl-4 mb-10">
            {lede}
          </p>

          <section className="space-y-4 text-muted-foreground leading-relaxed">
            <h2 className="text-lg font-semibold text-foreground">Why this shows up in diligence</h2>
            <p>
              Investors and acquirers ask whether personalization is a margin story or a liability
              story. The same framing powers {POWER_LEXICON.peFirmStrategy}: model cost, data
              rights, and proof of lift have to be legible together.
            </p>
            <h2 className="text-lg font-semibold text-foreground pt-2">Related depth</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <Link href="/ai-systems/walmart-scale" className="text-primary hover:underline">
                  GenAI platform at hyperscale retail
                </Link>
              </li>
              <li>
                <Link href="/strategy/platform-economics" className="text-primary hover:underline">
                  AI platform economics
                </Link>
              </li>
              <li>
                <Link href="/aeo-geo/agentic-era" className="text-primary hover:underline">
                  Agentic-era product intelligence
                </Link>
              </li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  )
}
