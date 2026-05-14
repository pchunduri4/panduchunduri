"use client"

import { motion } from "framer-motion"
import { Activity, CheckCircle2, Clock, AlertCircle, ArrowUpRight } from "lucide-react"
import Link from "next/link"

type ExperimentStatus = "live" | "completed" | "pending" | "paused" | "peerReview"

interface Experiment {
  id: string
  name: string
  status: ExperimentStatus
  metric: string
  progress: number
  href: string
}

const experiments: Experiment[] = [
  {
    id: "1",
    name: "Agentic Commerce Research",
    status: "peerReview",
    metric: "+47% agent citations",
    progress: 72,
    href: "/lab/agentic-commerce",
  },
  {
    id: "2",
    name: "CDQ Scoring System",
    status: "live",
    metric: "Factual fidelity gating for RAG-based retail agents.",
    progress: 65,
    href: "/lab/cdq-scoring",
  },
  {
    id: "3",
    name: "Angel Due Diligence Framework",
    status: "completed",
    metric: "32 deals analyzed",
    progress: 100,
    href: "/lab/angel-investing",
  },
  {
    id: "4",
    name: "Google Cloud GenAI",
    status: "completed",
    metric: "Certified",
    progress: 100,
    href: "/lab/genai-cloud",
  },
  {
    id: "5",
    name: "Responsible AI Framework",
    status: "live",
    metric: "In validation",
    progress: 55,
    href: "/lab/responsible-ai",
  },
]

const statusConfig: Record<
  ExperimentStatus,
  { icon: typeof Activity; color: string; bg: string; label: string }
> = {
  live: {
    icon: Activity,
    color: "text-green-700",
    bg: "bg-green-50",
    label: "Live",
  },
  completed: {
    icon: CheckCircle2,
    color: "text-primary",
    bg: "bg-accent",
    label: "Completed",
  },
  pending: {
    icon: Clock,
    color: "text-amber-600",
    bg: "bg-amber-100",
    label: "Pending",
  },
  paused: {
    icon: AlertCircle,
    color: "text-muted-foreground",
    bg: "bg-muted",
    label: "Paused",
  },
  peerReview: {
    icon: Clock,
    color: "text-amber-800",
    bg: "bg-amber-50",
    label: "In Peer Review",
  },
}

export function LiveExperiments() {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
      {/* Header */}
      <div className="px-6 py-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-accent">
            <Activity className="w-4 h-4 text-accent-foreground" />
          </div>
          <div>
            <h3 className="font-semibold text-card-foreground">Live Experiments</h3>
            <p className="text-xs text-muted-foreground">5XEdge Lab Status Board</p>
          </div>
        </div>
        <Link
          href="/lab"
          className="text-sm text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
        >
          View all
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Experiment List */}
      <ul className="divide-y divide-border">
        {experiments.map((experiment, index) => {
          const status = statusConfig[experiment.status]
          const StatusIcon = status.icon

          return (
            <motion.li
              key={experiment.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={experiment.href}
                className="flex items-center gap-4 px-6 py-4 hover:bg-muted/50 transition-colors group"
              >
                {/* Status Icon */}
                <div className={`p-2 rounded-lg ${status.bg}`}>
                  <StatusIcon className={`w-4 h-4 ${status.color}`} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm text-card-foreground truncate group-hover:text-primary transition-colors">
                      {experiment.name}
                    </span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${status.bg} ${status.color}`}
                    >
                      {status.label}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">{experiment.metric}</span>
                </div>

                {/* Progress Bar */}
                <div className="w-24 hidden sm:block">
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${experiment.progress}%` }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`h-full rounded-full ${
                        experiment.status === "completed"
                          ? "bg-primary"
                          : experiment.status === "live"
                          ? "bg-green-600"
                          : experiment.status === "peerReview"
                          ? "bg-amber-500"
                          : "bg-muted-foreground"
                      }`}
                    />
                  </div>
                </div>

                <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </motion.li>
          )
        })}
      </ul>
    </div>
  )
}
