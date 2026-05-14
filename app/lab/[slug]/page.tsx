import { notFound } from "next/navigation"
import { ProjectTemplate } from "@/components/project-template"
import { Sidebar } from "@/components/sidebar"
import { labProjects } from "@/lib/supplementary-pages"

export function generateStaticParams() {
  return Object.keys(labProjects).map((slug) => ({ slug }))
}

export default async function LabProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
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
