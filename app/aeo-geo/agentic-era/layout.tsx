import type { Metadata } from "next"
import { SEO_DEFAULT_DESCRIPTION } from "@/lib/site-seo"

export const metadata: Metadata = {
  title: "Beyond SEO — agentic era product data",
  description:
    "Pandu Chunduri on AEO/GEO and agentic commerce: decision-grade product intelligence, CDQ, and what breaks when humans are no longer the only shopper.",
  openGraph: {
    description: SEO_DEFAULT_DESCRIPTION,
  },
}

export default function AgenticEraLayout({ children }: { children: React.ReactNode }) {
  return children
}
