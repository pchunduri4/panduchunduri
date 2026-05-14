"use client"

import { motion } from "framer-motion"
import { GraduationCap, Brain, Search, Sparkles } from "lucide-react"
import { InsightCard } from "./insight-card"
import { LiveExperiments } from "./live-experiments"
import { CommandSearch } from "./command-search"

const featuredInsights = [
  {
    title: "Architecting $1B+ AI Platforms",
    thesis:
      "Engineering the transition from static database architectures to Agentic Commerce. Specializing in the orchestration of multi-million SKU environments where factual fidelity and real-time LLM grounding are the primary drivers of enterprise value. Focus: Catalog automation and agentic procurement.",
    readTime: "18 min",
    category: "Deep-Tech AI Systems (The Anvil)",
    icon: Brain,
    href: "/ai-systems/walmart-scale",
  },
  {
    title: "From Zero-to-One to One-to-Infinity",
    thesis:
      "A framework for scaling intelligent systems through the 'Chaos Phase' of Series C/D growth. This thesis focuses on transitioning from experimental AI features to robust, production-grade ML platforms that support global retail operations without incurring unsustainable technical debt.",
    readTime: "20 min",
    category: "Scaling & Platform Strategy (The Calculus)",
    icon: GraduationCap,
    href: "/strategy/ai-evolution",
  },
  {
    title: "Beyond SEO: Preparing for the Agentic Era",
    thesis:
      "The search bar is dying. In the age of Answer Engine Optimization (AEO), product data must be 'decision-grade.' This research explores how brands can maintain visibility in agentic workflows and LLM-generated citations by prioritizing semantic relevance over keyword density.",
    readTime: "12 min",
    category: "AEO/GEO & Future of Search (The Edge)",
    icon: Search,
    href: "/aeo-geo/agentic-era",
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
      {/* Header */}
      <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="px-6 py-4">
          <CommandSearch />
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground font-medium">
              Strategic Dispatch
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Product Architect: Scalable AI & Agentic Systems
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Building high-conviction AI platforms for global-scale impact. Proven track record
            orchestrating $1B+ value through enterprise agentic adoption and market defensibility
            strategies.
          </p>
        </motion.div>

        {/* Featured Insights Grid */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-foreground">
              Featured Insights
            </h2>
            <span className="text-sm text-muted-foreground">
              {featuredInsights.length} theses
            </span>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {featuredInsights.map((insight) => (
              <motion.div key={insight.href} variants={itemVariants}>
                <InsightCard {...insight} />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Live Experiments Widget */}
        <section>
          <LiveExperiments />
        </section>
      </main>
    </div>
  )
}
