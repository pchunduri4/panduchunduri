import type { Metadata } from "next"
import { SEO_DEFAULT_DESCRIPTION } from "@/lib/site-seo"

export const metadata: Metadata = {
  title: "Strategic dispatch — field notes",
  description:
    "Strategic dispatch field notes from Pandu Chunduri: agentic commerce, AEO/logic, and strategic leadership at Walmart-scale retail and AI-driven M&A & private equity advisory contexts.",
  openGraph: {
    description: SEO_DEFAULT_DESCRIPTION,
  },
}

export default function DispatchLayout({ children }: { children: React.ReactNode }) {
  return children
}
