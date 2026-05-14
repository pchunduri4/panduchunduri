"use client"

import { Sidebar } from "@/components/sidebar"
import { Dashboard } from "@/components/dashboard"

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 lg:ml-[280px]">
        <Dashboard />
      </div>
    </div>
  )
}
