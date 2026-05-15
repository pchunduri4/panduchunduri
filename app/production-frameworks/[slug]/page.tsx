import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ProjectTemplate } from "@/components/project-template"
import { Sidebar } from "@/components/sidebar"
import { labProjects } from "@/lib/supplementary-pages"
import { absoluteUrl, clipMetaDescription } from "@/lib/site-seo"

export function generateStaticParams() {
  return Object.keys(labProjects).map((slug) => ({ slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const config = labProjects[slug]
  if (!config) return { title: "Production frameworks" }
  const desc = clipMetaDescription(`${config.tagline} ${config.problem}`)
  const path = `/production-frameworks/${slug}`
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

export default async function ProductionFrameworksProjectPage({ params }: Props) {
  const { slug } = await params
  const config = labProjects[slug]
  if (!config) notFound()

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 lg:ml-[280px]">
        <ProjectTemplate {...config} />
      </div>
    </div>
  )
}
