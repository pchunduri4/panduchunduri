"use client"

import { Sidebar } from "@/components/sidebar"
import { motion } from "framer-motion"
import { FlaskConical, ArrowUpRight, Activity, CheckCircle2, Clock, AlertCircle, ShieldCheck } from "lucide-react"
import Link from "next/link"

type ExperimentStatus = "live" | "completed" | "pending" | "paused" | "phase2" | "framework" | "rnd"

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
    title: "Agentic Catalog Orchestration",
    description:
      "Solving for token-limit bottlenecks and state-management in 10M+ SKU RAG environments.",
    status: "phase2",
    hypothesis: "Partitioned memory and token routing reduce abstention without sacrificing citation quality.",
    metric: "Phase 2 deployment",
    progress: 68,
    href: "/lab/agentic-commerce",
  },
  {
    title: "Catalog Fidelity Index (CFI)",
    description:
      "A proprietary scoring framework for measuring factual grounding and semantic relevance in multi-modal LLM outputs.",
    status: "live",
    hypothesis: "CFI thresholds predict safe agent eligibility better than legacy merchandising scores.",
    metric: "Operational",
    progress: 82,
    href: "/lab/catalog-fidelity-index",
  },
  {
    title: "Responsible AI & Governance",
    description:
      "Risk mitigation protocols for autonomous buying agents—budget guardrails and factual fidelity gates.",
    status: "framework",
    hypothesis: "Tiered controls reduce incident severity while keeping agent throughput economically viable.",
    metric: "Framework established",
    progress: 90,
    href: "/lab/responsible-ai",
  },
  {
    title: "Multi-Modal Ingestion Engine",
    description:
      "Transitioning unstructured catalog assets (images/PDFs) to decision-grade structured data for agents.",
    status: "rnd",
    hypothesis: "Quarantine-first promotion cuts silent factual errors at the graph boundary.",
    metric: "In R&D",
    progress: 42,
    href: "/lab/multimodal-ingestion",
  },
]

const statusConfig: Record<
  ExperimentStatus,
  { icon: typeof Activity; color: string; bg: string; label: string }
> = {
  live: { icon: Activity, color: "text-emerald-800", bg: "bg-emerald-50", label: "Operational" },
  phase2: { icon: Activity, color: "text-amber-900", bg: "bg-amber-50", label: "Phase 2 Deployment" },
  framework: { icon: ShieldCheck, color: "text-primary", bg: "bg-accent", label: "Framework Established" },
  rnd: { icon: FlaskConical, color: "text-muted-foreground", bg: "bg-muted", label: "In R&D" },
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
                <h1 className="text-2xl font-bold text-foreground">Platform Lab</h1>
                <p className="text-sm text-muted-foreground">Production frameworks in motion</p>
              </div>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              Product-led experiments grounded in catalog scale, agentic surfaces, and governance—aligned
              with what ships on the roadmap, not slide-only research.
            </p>
          </motion.div>

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
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{experiment.description}</p>

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
                              experiment.status === "live" || experiment.status === "framework"
                                ? "bg-primary"
                                : experiment.status === "phase2"
                                  ? "bg-amber-500"
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
