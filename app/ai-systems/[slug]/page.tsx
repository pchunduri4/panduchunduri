import { notFound } from "next/navigation"
import { ProjectTemplate } from "@/components/project-template"
import { aiSystemsProjects } from "@/lib/supplementary-pages"

export function generateStaticParams() {
  return Object.keys(aiSystemsProjects).map((slug) => ({ slug }))
}

export default async function AiSystemsProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const config = aiSystemsProjects[slug]
  if (!config) notFound()

  return <ProjectTemplate {...config} />
}
