import { notFound } from "next/navigation"
import { ProjectTemplate } from "@/components/project-template"
import { strategyProjects } from "@/lib/supplementary-pages"

export function generateStaticParams() {
  return Object.keys(strategyProjects).map((slug) => ({ slug }))
}

export default async function StrategyProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const config = strategyProjects[slug]
  if (!config) notFound()

  return <ProjectTemplate {...config} />
}
