"use client"

import { Sidebar } from "@/components/sidebar"
import { motion } from "framer-motion"
import { Brain, ArrowUpRight, Activity } from "lucide-react"
import Link from "next/link"

const systems = [
  {
    title: "GenAI Product Platform at Hyperscale Retail",
    description: "Enterprise LLM infrastructure for global retail with real-time personalization",
    status: "live" as const,
    metrics: { impact: "$B+", scale: "Global" },
    href: "/ai-systems/walmart-scale",
  },
  {
    title: "Retail AI: Catalog & Product Intelligence",
    description: "Production ML for product data quality, compatibility matching, and policy compliance",
    status: "live" as const,
    metrics: { products: "400M+", accuracy: "96%" },
    href: "/ai-systems/catalog-intelligence",
  },
  {
    title: "Marketplace AI Platform at Avetta",
    description: "AI and Analytics division products for supply chain risk management and marketplace optimization",
    status: "completed" as const,
    metrics: { revenue: "$100M", growth: "+18%" },
    href: "/ai-systems/marketplace-ai",
  },
  {
    title: "Predictive Analytics & Business Intelligence",
    description: "Enterprise research platforms enabling Salesforce lead gen and 10+ years of data search",
    status: "completed" as const,
    metrics: { savings: "$2M+", latency: "<1s" },
    href: "/ai-systems/predictive-analytics",
  },
]

const statusColors = {
  live: "bg-green-100 text-green-700",
  completed: "bg-accent text-accent-foreground",
  "in-progress": "bg-amber-100 text-amber-700",
}

export default function AISystemsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 lg:ml-[280px]">
        <main className="px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-accent">
                <Brain className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">AI Systems</h1>
                <p className="text-sm text-muted-foreground">Retail catalog & production ML</p>
              </div>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              Enterprise AI systems built across global retail, Avetta, Parsons, and Gartner. Documentation on architecture decisions, scaling patterns, and operational learnings from 23+ years of product leadership.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {systems.map((system, index) => (
              <motion.div
                key={system.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Link
                  href={system.href}
                  className="block h-full p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-all duration-150 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${statusColors[system.status]}`}>
                      {system.status === "live" && <Activity className="w-3 h-3 inline mr-1" />}
                      {system.status.charAt(0).toUpperCase() + system.status.slice(1)}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <h2 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors mb-2">
                    {system.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {system.description}
                  </p>
                  
                  <div className="flex items-center gap-4">
                    {Object.entries(system.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <p className="text-lg font-semibold text-foreground">{value}</p>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">{key}</p>
                      </div>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
