import type { Metadata } from "next"
import { SEO_DEFAULT_DESCRIPTION } from "@/lib/site-seo"

export const metadata: Metadata = {
  title: "Platform strategy & economics",
  description:
    "Pandu Chunduri — scaling AI platforms, $B+ economics, mobility portfolios, and PE-grade product strategy. Wharton-trained Walmart product leader.",
  openGraph: {
    description: SEO_DEFAULT_DESCRIPTION,
  },
}

export default function StrategyLayout({ children }: { children: React.ReactNode }) {
  return children
}
