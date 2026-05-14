"use client"

import { Sidebar } from "@/components/sidebar"
import { motion } from "framer-motion"
import { Search, ArrowUpRight, TrendingUp, BarChart3 } from "lucide-react"
import Link from "next/link"

const research = [
  {
    title: "Beyond SEO: Preparing Product Data for the Agentic Era",
    description: "We're moving from human clicks to machine decisions. Product data isn't content anymore - it's decision-grade product intelligence for AI agents.",
    type: "Framework",
    readTime: "15 min",
    href: "/aeo-geo/agentic-era",
  },
  {
    title: "GEO & Agentic AEO: A Complete Framework",
    description: "Get accurately represented/cited in AI answers (GEO) and become eligible for agent actions (Agentic AEO). Practical implementation guide.",
    type: "Playbook",
    readTime: "20 min",
    href: "/aeo-geo/framework",
  },
  {
    title: "CDQ Scoring & Factual Fidelity Gates",
    description: "Catalog Data Quality scoring to improve clarity without invented claims. How to pass the Factual Fidelity Gate for AI agent eligibility.",
    type: "Research",
    readTime: "12 min",
    href: "/aeo-geo/cdq-scoring",
  },
  {
    title: "What Breaks AI Agent Trust: Variant, Compatibility, Policy",
    description: "If data is ambiguous - compatibility, what's included, policies - agents reduce risk the same way humans do: they skip you.",
    type: "Analysis",
    readTime: "10 min",
    href: "/aeo-geo/trust-factors",
  },
]

const stats = [
  { label: "LLM Platforms Tracked", value: "8", icon: BarChart3 },
  { label: "Citation Rate Improvement", value: "+47%", icon: TrendingUp },
  { label: "Research Papers Referenced", value: "120+", icon: Search },
]

export default function AEOGEOPage() {
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
                <Search className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">AEO/GEO Research</h1>
                <p className="text-sm text-muted-foreground">Answer Engine Optimization</p>
              </div>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              Original research on visibility optimization for AI commerce and agentic search. How to prepare product data for machine decisions and AI agent eligibility.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="grid grid-cols-3 gap-4 mb-8"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="p-4 bg-secondary rounded-xl border border-border text-center">
                <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Research List */}
          <div className="space-y-4">
            {research.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
              >
                <Link
                  href={item.href}
                  className="block p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-all duration-150 group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-accent text-accent-foreground">
                          {item.type}
                        </span>
                        <span className="text-xs text-muted-foreground">{item.readTime} read</span>
                      </div>
                      <h2 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors mb-2">
                        {item.title}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
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
