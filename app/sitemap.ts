import type { MetadataRoute } from "next"
import { getAllDispatchSlugs } from "@/lib/dispatch-snapshots"
import {
  labProjects,
  aiSystemsProjects,
  aeoGeoProjects,
  strategyProjects,
} from "@/lib/supplementary-pages"
import { getSiteUrl } from "@/lib/site-seo"

type ChangeFreq = NonNullable<MetadataRoute.Sitemap[0]["changeFrequency"]>

function push(
  list: MetadataRoute.Sitemap,
  path: string,
  priority: number,
  changeFrequency: ChangeFreq,
  lastModified: Date
) {
  const base = getSiteUrl()
  const p = path.startsWith("/") ? path : `/${path}`
  list.push({
    url: `${base}${p}`,
    lastModified,
    changeFrequency,
    priority,
  })
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const out: MetadataRoute.Sitemap = []

  push(out, "/", 1, "weekly", now)

  const pillars: [string, number][] = [
    ["/agentic-ai-product-leadership", 0.95],
    ["/aeo-geo-optimization-strategy", 0.95],
    ["/adtech-hyper-personalization", 0.95],
  ]
  for (const [path, pr] of pillars) {
    push(out, path, pr, "weekly", now)
  }

  const hubs: [string, number][] = [
    ["/ai-systems", 0.9],
    ["/aeo-geo", 0.9],
    ["/strategy", 0.9],
    ["/production-frameworks", 0.9],
  ]
  for (const [path, pr] of hubs) {
    push(out, path, pr, "weekly", now)
  }

  push(out, "/ai-systems/walmart-scale", 0.92, "weekly", now)
  push(out, "/aeo-geo/agentic-era", 0.92, "weekly", now)
  push(out, "/strategy/ai-evolution", 0.92, "weekly", now)

  for (const slug of Object.keys(aiSystemsProjects)) {
    push(out, `/ai-systems/${slug}`, 0.82, "monthly", now)
  }
  for (const slug of Object.keys(aeoGeoProjects)) {
    push(out, `/aeo-geo/${slug}`, 0.82, "monthly", now)
  }
  for (const slug of Object.keys(strategyProjects)) {
    push(out, `/strategy/${slug}`, 0.82, "monthly", now)
  }
  for (const slug of Object.keys(labProjects)) {
    push(out, `/production-frameworks/${slug}`, 0.84, "monthly", now)
  }

  for (const slug of getAllDispatchSlugs()) {
    push(out, `/dispatch/${slug}`, 0.78, "weekly", now)
  }

  return out
}
