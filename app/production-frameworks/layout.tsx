import type { Metadata } from "next"
import { SEO_DEFAULT_DESCRIPTION } from "@/lib/site-seo"

export const metadata: Metadata = {
  title: "Production frameworks — architecting for scale",
  description:
    "Pandu Chunduri — production frameworks for catalog orchestration, fidelity metrics (CFI), governance guardrails, and multi-modal ingestion at global retail scale.",
  openGraph: {
    description: SEO_DEFAULT_DESCRIPTION,
  },
}

export default function ProductionFrameworksLayout({ children }: { children: React.ReactNode }) {
  return children
}
