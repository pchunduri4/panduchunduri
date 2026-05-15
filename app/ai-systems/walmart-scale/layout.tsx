import type { Metadata } from "next"
import { SEO_DEFAULT_DESCRIPTION } from "@/lib/site-seo"

export const metadata: Metadata = {
  title: "GenAI platform at hyperscale retail",
  description:
    "Pandu Chunduri — GenAI product platform at global retail scale: $B+ impact, catalog intelligence, and responsible AI at Walmart-class deployment.",
  openGraph: {
    description: SEO_DEFAULT_DESCRIPTION,
  },
}

export default function WalmartScaleLayout({ children }: { children: React.ReactNode }) {
  return children
}
