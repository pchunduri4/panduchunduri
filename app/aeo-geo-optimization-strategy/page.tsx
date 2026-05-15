import type { Metadata } from "next"
import Link from "next/link"
import { Sidebar } from "@/components/sidebar"
import { absoluteUrl, clipMetaDescription } from "@/lib/site-seo"
import { POWER_LEXICON } from "@/lib/power-lexicon"

const lede =
  "Pandu Chunduri leads enterprise strategy for Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO): how brands become eligible for citations and agent actions when search collapses into synthesized answers. The Generative Engine Optimization (GEO) & AEO Strategy work ties structured product truth, corroboration graphs, and scenario-based evaluation to outcomes LLMs can verify—not vanity rankings. At Walmart scale, this is the difference between being omitted in a shopping thread and being the SKU an assistant can justify."

export const metadata: Metadata = {
  title: { absolute: "AEO & GEO Strategy for Enterprise | Pandu Chunduri" },
  description: clipMetaDescription(lede),
  alternates: { canonical: absoluteUrl("/aeo-geo-optimization-strategy") },
  openGraph: {
    title: "AEO & GEO Strategy for Enterprise | Pandu Chunduri",
    description: clipMetaDescription(lede),
    url: absoluteUrl("/aeo-geo-optimization-strategy"),
    type: "article",
  },
}

export default function AeoGeoOptimizationStrategyPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 lg:ml-[280px]">
        <main className="px-6 py-10 max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-primary mb-2">
            Vertical pillar · AEO GEO enterprise
          </p>
          <h1 className="text-3xl font-bold text-foreground text-balance mb-6">
            AEO & GEO Strategy for Enterprise
          </h1>
          <p className="text-base leading-relaxed text-foreground border-l-4 border-primary pl-4 mb-10">
            {lede}
          </p>

          <section className="space-y-4 text-muted-foreground leading-relaxed">
            <h2 className="text-lg font-semibold text-foreground">Operating model</h2>
            <p>
              Enterprise GEO/AEO programs need owners, thresholds, and release gates—mirroring how{" "}
              {POWER_LEXICON.projectLeapfrog} is executed in product organizations, not as a content
              checklist.
            </p>
            <h2 className="text-lg font-semibold text-foreground pt-2">Related depth</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <Link href="/aeo-geo" className="text-primary hover:underline">
                  AEO/GEO hub
                </Link>
              </li>
              <li>
                <Link href="/aeo-geo/framework" className="text-primary hover:underline">
                  GEO & agentic AEO framework
                </Link>
              </li>
              <li>
                <Link href="/aeo-geo/cdq-scoring" className="text-primary hover:underline">
                  CDQ scoring & factual fidelity gates
                </Link>
              </li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  )
}
