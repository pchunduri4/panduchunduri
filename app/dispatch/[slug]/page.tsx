import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Sidebar } from "@/components/sidebar"
import { DispatchExecutiveSnapshot } from "@/components/dispatch-executive-snapshot"
import { getDispatchBySlug, getAllDispatchSlugs } from "@/lib/dispatch-snapshots"

export function generateStaticParams() {
  return getAllDispatchSlugs().map((slug) => ({ slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const s = getDispatchBySlug(slug)
  if (!s) return { title: "Dispatch" }
  const desc = `${s.theMove.slice(0, 140)}…`
  return {
    title: `${s.title} | Strategic Dispatch`,
    description: desc,
    openGraph: {
      title: `${s.title} | Strategic Dispatch`,
      description: desc,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${s.title} | Strategic Dispatch`,
      description: desc,
    },
  }
}

export default async function DispatchPage({ params }: Props) {
  const { slug } = await params
  const snapshot = getDispatchBySlug(slug)
  if (!snapshot) notFound()

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 lg:ml-[280px]">
        <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur-sm px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="size-4" />
            Back to dashboard
          </Link>
        </header>
        <main className="px-6 py-8 max-w-3xl">
          <DispatchExecutiveSnapshot snapshot={snapshot} variant="page" />
        </main>
      </div>
    </div>
  )
}
