"use client"

import { Sidebar } from "@/components/sidebar"
import { motion } from "framer-motion"
import { FlaskConical, ArrowUpRight, Activity, CheckCircle2, Clock, AlertCircle } from "lucide-react"
import Link from "next/link"

type ExperimentStatus = "live" | "completed" | "pending" | "paused"

interface Experiment {
  title: string
  description: string
  status: ExperimentStatus
  hypothesis: string
  metric: string
  progress: number
  href: string
}

const experiments: Experiment[] = [
  {
    title: "Agentic Commerce: AI Agent Product Discovery",
    description: "Tracking how AI agents discover, evaluate, and recommend products. Building decision-grade product intelligence for machine decisions.",
    status: "live",
    hypothesis: "Structured product data increases agent selection rate by 40%+",
    metric: "+47% agent citations",
    progress: 72,
    href: "/lab/agentic-commerce",
  },
  {
    title: "CDQ Scoring System",
    description: "Catalog Data Quality scoring to measure product data readiness for AI consumption without invented claims.",
    status: "live",
    hypothesis: "CDQ scores predict AI agent eligibility with 90%+ accuracy",
    metric: "87% correlation",
    progress: 65,
    href: "/lab/cdq-scoring",
  },
  {
    title: "Wharton Angel Due Diligence Framework",
    description: "Systematic evaluation methodology for AI startup investments. Business plan analysis, market fit assessment, and risk scoring.",
    status: "completed",
    hypothesis: "Framework improves investment decision accuracy by 25%",
    metric: "32 deals analyzed",
    progress: 100,
    href: "/lab/angel-investing",
  },
  {
    title: "Google Cloud GenAI Integration",
    description: "Implementing business-driven AI strategy with Gemini and Vertex AI. Building scalable, outcome-focused AI products.",
    status: "completed",
    hypothesis: "Vertex AI reduces time-to-production for GenAI features by 60%",
    metric: "Certified",
    progress: 100,
    href: "/lab/genai-cloud",
  },
  {
    title: "Smart Home Privacy & Transparency",
    description: "Teep startup learnings: Increasing data privacy, safety, and transparency for smart home customers.",
    status: "paused",
    hypothesis: "Privacy-first approach increases user trust by 50%",
    metric: "Startup pivoted",
    progress: 45,
    href: "/lab/smart-home",
  },
  {
    title: "Responsible AI Trade-offs Framework",
    description: "Practical decision framework for balancing AI capability vs. responsible AI considerations in product development.",
    status: "live",
    hypothesis: "Framework reduces AI risk incidents by 35%",
    metric: "In validation",
    progress: 55,
    href: "/lab/responsible-ai",
  },
]

const statusConfig: Record<ExperimentStatus, { icon: typeof Activity; color: string; bg: string; label: string }> = {
  live: { icon: Activity, color: "text-green-600", bg: "bg-green-100", label: "Live" },
  completed: { icon: CheckCircle2, color: "text-primary", bg: "bg-accent", label: "Completed" },
  pending: { icon: Clock, color: "text-amber-600", bg: "bg-amber-100", label: "Pending" },
  paused: { icon: AlertCircle, color: "text-muted-foreground", bg: "bg-muted", label: "Paused" },
}

export default function LabPage() {
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
                <FlaskConical className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">5XEdge Lab</h1>
                <p className="text-sm text-muted-foreground">Experimental projects</p>
              </div>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              Active experiments in GenAI product development, agentic commerce, and angel investing. Testing hypotheses from hyperscale retail, Wharton Alumni Angels, and startup experience.
            </p>
          </motion.div>

          {/* Experiment Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {experiments.map((experiment, index) => {
              const status = statusConfig[experiment.status]
              const StatusIcon = status.icon

              return (
                <motion.div
                  key={experiment.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <Link
                    href={experiment.href}
                    className="block h-full p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-all duration-150 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full ${status.bg}`}>
                        <StatusIcon className={`w-3.5 h-3.5 ${status.color}`} />
                        <span className={`text-xs font-medium ${status.color}`}>{status.label}</span>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <h2 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors mb-2">
                      {experiment.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {experiment.description}
                    </p>

                    <div className="p-3 bg-secondary rounded-lg mb-4">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Hypothesis</p>
                      <p className="text-sm text-foreground">{experiment.hypothesis}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">{experiment.metric}</span>
                      <div className="w-24">
                        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${
                              experiment.status === "completed"
                                ? "bg-primary"
                                : experiment.status === "live"
                                ? "bg-green-500"
                                : "bg-muted-foreground"
                            }`}
                            style={{ width: `${experiment.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </main>
      </div>
    </div>
  )
}
