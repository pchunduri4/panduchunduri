import type { Metadata } from "next"
import { Sidebar } from "@/components/sidebar"
import { Dashboard } from "@/components/dashboard"
import { PersonJsonLd } from "@/components/person-json-ld"
import { HOME_META_DESCRIPTION } from "@/lib/hero-bio"

export const metadata: Metadata = {
  title: "Home",
  description: HOME_META_DESCRIPTION,
}

export default function Home() {
  return (
    <>
      <PersonJsonLd />
      <div className="flex min-h-screen bg-background">
        <Sidebar />
        <div className="flex-1 lg:ml-[280px]">
          <Dashboard />
        </div>
      </div>
    </>
  )
}
