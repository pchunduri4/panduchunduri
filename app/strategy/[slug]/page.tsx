import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ProjectTemplate } from "@/components/project-template"
import { strategyProjects } from "@/lib/supplementary-pages"
import { absoluteUrl, clipMetaDescription } from "@/lib/site-seo"

export function generateStaticParams() {
  return Object.keys(strategyProjects).map((slug) => ({ slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const config = strategyProjects[slug]
  if (!config) return { title: "Strategy" }
  const desc = clipMetaDescription(`${config.tagline} ${config.problem}`)
  const path = `/strategy/${slug}`
  return {
    title: config.title,
    description: desc,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      title: `${config.title} | Pandu Chunduri`,
      description: desc,
      url: absoluteUrl(path),
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${config.title} | Pandu Chunduri`,
      description: desc,
    },
  }
}

export default async function StrategyProjectPage({ params }: Props) {
  const { slug } = await params
  const config = strategyProjects[slug]
  if (!config) notFound()

  return <ProjectTemplate {...config} />
}
