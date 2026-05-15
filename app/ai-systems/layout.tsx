import type { Metadata } from "next"
import { SEO_DEFAULT_DESCRIPTION } from "@/lib/site-seo"

export const metadata: Metadata = {
  title: "AI & agentic systems portfolio",
  description:
    "Pandu Chunduri — Walmart-scale GenAI platforms, catalog intelligence, and marketplace AI architecture. Product leadership notes for enterprise retail automation.",
  openGraph: {
    description: SEO_DEFAULT_DESCRIPTION,
  },
}

export default function AiSystemsLayout({ children }: { children: React.ReactNode }) {
  return children
}
