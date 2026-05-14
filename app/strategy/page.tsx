"use client"

import { Sidebar } from "@/components/sidebar"
import { motion } from "framer-motion"
import { GraduationCap, ArrowUpRight, Clock } from "lucide-react"
import Link from "next/link"

const theses = [
  {
    title: "Product AI Strategy: From Analytics to Enterprise AI Platforms",
    thesis: "The evolution from business intelligence and data analytics to AI-first product development. Lessons from leading product at Gartner, Parsons, Avetta, and global-scale enterprise retail.",
    readTime: "20 min",
    href: "/strategy/ai-evolution",
  },
  {
    title: "Smart Mobility & IoT: Building $100M+ Product Lines",
    thesis: "Strategic product development in emerging tech verticals. How to drive 25%+ EBITDA margins through product-market fit and GTM excellence.",
    readTime: "14 min",
    href: "/strategy/smart-mobility",
  },
  {
    title: "Enterprise AI Adoption: Bridging Hype vs Business Value",
    thesis: "The real challenge in GenAI isn't technology - it's bridging AI hype with business value. Insights from Google Cloud GenAI certification and real-world deployments.",
    readTime: "12 min",
    href: "/strategy/enterprise-adoption",
  },
  {
    title: "Product Incubation at Scale: New Product Development Frameworks",
    thesis: "From founding a smart home startup to incubating AI products at enterprise scale. A systematic approach to identifying and launching new product lines.",
    readTime: "16 min",
    href: "/strategy/product-incubation",
  },
  {
    title: "AI Platform Economics: Scaling to $B+ Impact",
    thesis: "Business cases, pricing strategy, and roadmaps that generate $1B+ in value. Building partnerships that enable first-in-industry predictive capabilities.",
    readTime: "18 min",
    href: "/strategy/platform-economics",
  },
]

export default function StrategyPage() {
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
                <GraduationCap className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Strategic Theses</h1>
                <p className="text-sm text-muted-foreground">Wharton MBA-informed frameworks</p>
              </div>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              Long-form strategic analyses combining Wharton MBA frameworks with 23+ years of practical product experience across global retail, Parsons, Gartner, and as an angel investor.
            </p>
          </motion.div>

          <div className="space-y-4">
            {theses.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Link
                  href={item.href}
                  className="block p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-all duration-150 group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h2 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors mb-2">
                        {item.title}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {item.thesis}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{item.readTime} read</span>
                      </div>
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
