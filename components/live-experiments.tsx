"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Activity,
  CheckCircle2,
  Clock,
  AlertCircle,
  ArrowUpRight,
  Terminal,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

type ExperimentStatus = "live" | "completed" | "pending" | "paused" | "peerReview"

interface Experiment {
  id: string
  name: string
  status: ExperimentStatus
  metric: string
  progress: number
  href: string
  technicalNote: string
}

const experiments: Experiment[] = [
  {
    id: "1",
    name: "Agentic Commerce Research",
    status: "peerReview",
    metric: "+47% agent citations",
    progress: 72,
    href: "/lab/agentic-commerce",
    technicalNote: `// experiments/agentic-commerce/scenarios.ts
/**
 * Peer review: agent selection vs. catalog structure
 */
export const SCENARIO_SEED = [
  "compare_skus_same_brand",
  "bundle_compatibility_strict",
  "return_policy_window",
] as const;

// Retrieval budget per turn (USD-ish proxy)
const MAX_CONTEXT_TOKENS = 6_500;

function scoreAgentCitationLift(baseline: number, structured: number) {
  // internal notebook — not production code
  return (structured - baseline) / baseline;
}`,
  },
  {
    id: "2",
    name: "CDQ Scoring System",
    status: "live",
    metric:
      "Proprietary heuristic for measuring factual grounding in multi-modal retail catalogs.",
    progress: 65,
    href: "/lab/cdq-scoring",
    technicalNote: `// lib/cdq/heuristic.ts
/**
 * CDQ — factual grounding in multi-modal catalogs
 * Proprietary blend; weights versioned per category.
 */
type Subscore = "coverage" | "freshness" | "corroboration" | "conflict";

const WEIGHTS_V2: Record<Subscore, number> = {
  coverage: 0.28,
  freshness: 0.22,
  corroboration: 0.38,
  conflict: 0.12,
};

export function cdqGroundingHeuristic(
  attrs: NormalizedAttributes,
  evidence: EvidenceSpan[],
): CDQScore {
  const sub = computeSubscores(attrs, evidence);
  return weightedSum(sub, WEIGHTS_V2);
}`,
  },
  {
    id: "3",
    name: "Angel Due Diligence Framework",
    status: "completed",
    metric: "32 deals analyzed",
    progress: 100,
    href: "/lab/angel-investing",
    technicalNote: `// diligence/scorecard.ts
export type RiskFlag =
  | "DATA_RIGHTS_UNKNOWN"
  | "MODEL_LINEAGE_OPAQUE"
  | "CONCENTRATION_TOP3";

export function summarizeDeal(input: DealMemo): Scorecard {
  const flags = detectFlags(input);
  const memo = renderMemoTemplate(flags);
  return { flags, memo, version: "2025.09" };
}`,
  },
  {
    id: "4",
    name: "Google Cloud GenAI",
    status: "completed",
    metric: "Certified",
    progress: 100,
    href: "/lab/genai-cloud",
    technicalNote: `// infra/vertex-router.ts
// Canary + kill-switch pattern for GenAI endpoints
export const ROUTING = {
  primary: "gemini-1.5-pro",
  fallback: "gemini-1.5-flash",
  killSwitchEnv: "GENAI_ROUTING_DISABLED",
} as const;

async function routeRequest(req: GenAIRequest) {
  if (process.env[ROUTING.killSwitchEnv] === "1") {
    throw new ServiceUnavailableError("routing disabled");
  }
  // ...
}`,
  },
  {
    id: "5",
    name: "Responsible AI Framework",
    status: "live",
    metric: "In validation",
    progress: 55,
    href: "/lab/responsible-ai",
    technicalNote: `// governance/risk-matrix.ts
export type Severity = "low" | "med" | "high";

export interface Control {
  id: string;
  owner: "legal" | "product" | "ml_ops";
  slaHours: number;
}

// Workshop artifact → typed controls for agentic surfaces
export const DEFAULT_CONTROLS: Control[] = [
  { id: "HITL_CHECKOUT", owner: "product", slaHours: 4 },
  { id: "GROUNDING_REQUIRED", owner: "ml_ops", slaHours: 24 },
];`,
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
  const [noteForId, setNoteForId] = useState<string | null>(null)
  const active = experiments.find((e) => e.id === noteForId) ?? null

  return (
    <>
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
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
                className="flex flex-col sm:flex-row sm:items-stretch"
              >
                <Link
                  href={experiment.href}
                  className="flex flex-1 min-w-0 items-center gap-4 px-6 py-4 hover:bg-muted/50 transition-colors group"
                >
                  <div className={`p-2 rounded-lg shrink-0 ${status.bg}`}>
                    <StatusIcon className={`w-4 h-4 ${status.color}`} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-medium text-sm text-card-foreground group-hover:text-primary transition-colors">
                        {experiment.name}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${status.bg} ${status.color}`}
                      >
                        {status.label}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-snug">{experiment.metric}</p>
                  </div>

                  <div className="w-24 shrink-0 hidden sm:block">
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${experiment.progress}%` }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={cn(
                          "h-full rounded-full",
                          experiment.status === "completed"
                            ? "bg-primary"
                            : experiment.status === "live"
                              ? "bg-green-600"
                              : experiment.status === "peerReview"
                                ? "bg-amber-500"
                                : "bg-muted-foreground"
                        )}
                      />
                    </div>
                  </div>

                  <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </Link>

                <div className="flex items-center justify-end gap-2 px-6 pb-4 sm:pb-0 sm:flex-col sm:justify-center sm:border-l sm:border-border sm:bg-muted/20 sm:px-4 sm:min-w-[132px]">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="font-mono text-xs gap-1.5 h-8"
                    onClick={() => setNoteForId(experiment.id)}
                  >
                    <Terminal className="size-3.5" />
                    Technical Note
                  </Button>
                </div>
              </motion.li>
            )
          })}
        </ul>
      </div>

      <Dialog open={noteForId !== null} onOpenChange={(open) => !open && setNoteForId(null)}>
        <DialogContent
          showCloseButton
          className={cn(
            "max-h-[85vh] overflow-hidden gap-0 border-zinc-700 bg-[#1e1e1e] p-0 text-zinc-100 shadow-2xl sm:max-w-2xl",
            "[&_[data-slot=dialog-close]]:text-zinc-400 [&_[data-slot=dialog-close]]:hover:text-zinc-100 [&_[data-slot=dialog-close]]:top-3 [&_[data-slot=dialog-close]]:right-3"
          )}
        >
          {active && (
            <>
              <DialogHeader className="border-b border-zinc-700 bg-zinc-900/80 px-4 py-3 text-left">
                <DialogTitle className="flex items-center gap-2 font-mono text-sm font-medium text-zinc-100">
                  <Terminal className="size-4 text-emerald-400" />
                  <span className="truncate">{active.name}</span>
                  <span className="text-zinc-500 font-normal">· technical note</span>
                </DialogTitle>
                <DialogDescription className="sr-only">
                  Code-style technical note for {active.name}.
                </DialogDescription>
              </DialogHeader>
              <pre className="max-h-[min(60vh,520px)] overflow-auto p-4 text-[11px] leading-relaxed font-mono text-zinc-200">
                <code>{active.technicalNote}</code>
              </pre>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
