import type { Metadata } from "next"
import { SEO_DEFAULT_DESCRIPTION } from "@/lib/site-seo"

export const metadata: Metadata = {
  title: "AI evolution playbook — global-scale systems",
  description:
    "Pandu Chunduri — playbook for architecting global-scale AI systems: analytics foundations to grounded agents, economics, and governance as one spine.",
  openGraph: {
    description: SEO_DEFAULT_DESCRIPTION,
  },
}

export default function AiEvolutionLayout({ children }: { children: React.ReactNode }) {
  return children
}
