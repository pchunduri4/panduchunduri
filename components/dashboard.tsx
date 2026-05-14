"use client"

import { motion } from "framer-motion"
import { GraduationCap, Brain, Search, Sparkles, Mail, Linkedin } from "lucide-react"
import { InsightCard } from "./insight-card"
import { StrategicWorkstreams } from "./strategic-workstreams"
import { CommandSearch } from "./command-search"
import { StrategicDispatch } from "./strategic-dispatch"
import { SITE_CONTACT_EMAIL, SITE_LINKEDIN_URL } from "@/lib/site-contact"

/** Three pillar theses — concise one-liners; full depth lives on each route. */
const pillarTheses = [
  {
    title: "Beyond SEO: Preparing for the Agentic Era",
    thesis:
      "AEO / GEO: decision-grade product data, citations, and what breaks when humans stop being the only shopper.",
    readTime: "12 min",
    category: "AEO/GEO & Future of Search (The Edge)",
    icon: Search,
    href: "/aeo-geo/agentic-era",
  },
  {
    title: "Architecting $1B+ AI Platforms",
    thesis:
      "Agentic commerce at catalog scale: orchestration, grounding, and enterprise value when millions of SKUs meet real-time LLMs.",
    readTime: "18 min",
    category: "Deep-Tech AI Systems (The Anvil)",
    icon: Brain,
    href: "/ai-systems/walmart-scale",
  },
  {
    title: "The AI Evolution: A Playbook for Global-Scale Systems",
    thesis:
      "Scaling systems from analytics foundations to grounded agents—architecture, economics, and governance as one spine.",
    readTime: "20 min",
    category: "Scaling & Platform Strategy (The Calculus)",
    icon: GraduationCap,
    href: "/strategy/ai-evolution",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
}

export function Dashboard() {
  return (
    <div className="flex-1 min-h-screen bg-background">
      <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="px-6 py-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <div className="min-w-0 flex-1 max-w-2xl">
            <CommandSearch />
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 shrink-0">
            <a
              href={`mailto:${SITE_CONTACT_EMAIL}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary/40 bg-primary/8 px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-primary/12 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Mail className="size-4 shrink-0 text-primary" aria-hidden />
              <span className="truncate">{SITE_CONTACT_EMAIL}</span>
            </a>
            <a
              href={SITE_LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-muted/50 px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Linkedin className="size-4 shrink-0 text-[#0A66C2]" aria-hidden />
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      <main className="px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground font-medium">At a glance</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            {"Head of Product: Scalable AI & Agentic Systems"}
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Building high-conviction AI platforms for global-scale impact. Proven track record
            orchestrating $1B+ value through enterprise agentic adoption and market defensibility
            strategies.
          </p>
        </motion.div>

        {/* Pillar Theses — high-impact cards */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Pillar Theses</h2>
            <span className="text-sm text-muted-foreground">{pillarTheses.length} core articles</span>
          </div>
          <p className="text-sm text-muted-foreground mb-6 max-w-3xl">
            Long-form theses—each card links to a full write-up.
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {pillarTheses.map((insight) => (
              <motion.div key={insight.href} variants={itemVariants}>
                <InsightCard {...insight} emphasis="pillar" />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Strategic Dispatch — micro-insights */}
        <section className="mb-12">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-foreground">Strategic Dispatch</h2>
            <p className="text-sm text-muted-foreground mt-1 max-w-2xl">
              Thirty intelligence streams in three columns—click any row for the slide-over, or share a{" "}
              <span className="font-mono text-foreground/80">/dispatch/…</span> link directly.
            </p>
          </div>
          <div className="max-w-6xl">
            <StrategicDispatch />
          </div>
        </section>

        <section>
          <StrategicWorkstreams />
        </section>
      </main>
    </div>
  )
}
