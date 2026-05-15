import type { Metadata } from "next"
import { SEO_DEFAULT_DESCRIPTION } from "@/lib/site-seo"

export const metadata: Metadata = {
  title: "AEO & GEO — agentic search",
  description:
    "Pandu Chunduri on AEO/GEO: decision-grade product data, factual fidelity gates, and how retail catalogs win in the agentic era. Walmart Product Leader; AI-driven M&A & private equity operations lens.",
  openGraph: {
    description: SEO_DEFAULT_DESCRIPTION,
  },
}

export default function AeoGeoLayout({ children }: { children: React.ReactNode }) {
  return children
}
