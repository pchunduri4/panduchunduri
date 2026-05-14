import { notFound } from "next/navigation"
import { ProjectTemplate } from "@/components/project-template"
import { aeoGeoProjects } from "@/lib/supplementary-pages"

export function generateStaticParams() {
  return Object.keys(aeoGeoProjects).map((slug) => ({ slug }))
}

export default async function AeoGeoProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const config = aeoGeoProjects[slug]
  if (!config) notFound()

  return <ProjectTemplate {...config} />
}
