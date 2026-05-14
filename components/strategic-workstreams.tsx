"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Activity,
  ArrowUpRight,
  ListTree,
  Workflow,
  BarChart3,
  ShieldCheck,
  FlaskConical,
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
import { MermaidArchitecture } from "@/components/mermaid-architecture"
import { cn } from "@/lib/utils"

type SpecType = "logic" | "metric" | "governance" | "flow"
type WorkstreamStatusKey = "phase2" | "operational" | "framework" | "rnd"

interface Workstream {
  id: string
  name: string
  statusKey: WorkstreamStatusKey
  description: string
  progress: number
  href: string
  specType: SpecType
  mermaid: string
  /** High-level architecture pseudo — not implementation. */
  pseudo: string
}

const workstreams: Workstream[] = [
  {
    id: "1",
    name: "Agentic Catalog Orchestration",
    statusKey: "phase2",
    description:
      "Solving for token-limit bottlenecks and state-management in 10M+ SKU RAG environments.",
    progress: 68,
    href: "/lab/agentic-commerce",
    specType: "logic",
    mermaid: `flowchart LR
  SKUs[SKU subgraphs] --> WM[Working memory]
  WM --> TR[Token budget router]
  TR --> GR[Grounded agent response]`,
    pseudo: `ARCHITECTURE (conceptual)
  PARTITION catalog into retrievable subgraphs per intent class
  PERSIST session state outside the raw context window
  ROUTE each turn through a token budget policy before RAG expansion
  OUTPUT only citation-backed bundles to the agent surface`,
  },
  {
    id: "2",
    name: "Catalog Fidelity Index (CFI)",
    statusKey: "operational",
    description:
      "A proprietary scoring framework for measuring factual grounding and semantic relevance in multi-modal LLM outputs.",
    progress: 82,
    href: "/lab/catalog-fidelity-index",
    specType: "metric",
    mermaid: `flowchart TB
  MM[Multi-modal evidence] --> CFI[CFI composite]
  POL[Policy golden facts] --> CFI
  CFI --> GATE{Release gate}
  GATE -->|above floor| SHIP[Agent-eligible surface]
  GATE -->|below floor| FIX[Owner remediation loop]`,
    pseudo: `METRIC ARCHITECTURE (conceptual)
  BLEND fidelity + semantic relevance + coverage freshness
  EXPOSE sub-drivers for merchants and auditors
  BIND thresholds to use-case severity, not one global number
  TREND weekly; regressions trigger automatic holds`,
  },
  {
    id: "3",
    name: "Responsible AI & Governance",
    statusKey: "framework",
    description:
      "Risk mitigation protocols for autonomous buying agents, focusing on budget guardrails and factual fidelity gates.",
    progress: 90,
    href: "/lab/responsible-ai",
    specType: "governance",
    mermaid: `flowchart LR
  AG[Autonomous buying agent] --> BG[Budget guardrails]
  AG --> FF[Factual fidelity gate]
  FF -->|fail| ES[Escalation and safe path]
  FF -->|pass| EX[Execute within policy envelope]`,
    pseudo: `GOVERNANCE ARCHITECTURE (conceptual)
  MAP agent intents to risk tiers and spend envelopes
  REQUIRE fidelity checks before irreversible procurement actions
  LOG every override with owner, policy version, and evidence pointer
  REVIEW monthly with product, legal, and finance jointly`,
  },
  {
    id: "4",
    name: "Multi-Modal Ingestion Engine",
    statusKey: "rnd",
    description:
      "Architecting the transition from unstructured catalog assets (images/PDFs) to decision-grade structured data for agents.",
    progress: 42,
    href: "/lab/multimodal-ingestion",
    specType: "flow",
    mermaid: `flowchart LR
  RAW[PDFs images tables] --> NORM[Normalize and extract]
  NORM --> SCHEMA[Decision-grade schema]
  SCHEMA --> GRAPH[Agent-ready catalog graph]`,
    pseudo: `PIPELINE ARCHITECTURE (conceptual)
  INGEST unstructured supplier artifacts with provenance stamps
  QUARANTINE low-confidence extractions before merge to golden records
  PROMOTE only validated fields into the agent-facing graph
  LOOP human review on liability-heavy attributes only`,
  },
]

const statusStyles: Record<
  WorkstreamStatusKey,
  { label: string; icon: typeof Activity; color: string; bg: string }
> = {
  phase2: {
    label: "Phase 2 Deployment",
    icon: Activity,
    color: "text-amber-900",
    bg: "bg-amber-50",
  },
  operational: {
    label: "Operational",
    icon: Activity,
    color: "text-emerald-800",
    bg: "bg-emerald-50",
  },
  framework: {
    label: "Framework Established",
    icon: ShieldCheck,
    color: "text-primary",
    bg: "bg-accent",
  },
  rnd: {
    label: "In R&D",
    icon: FlaskConical,
    color: "text-muted-foreground",
    bg: "bg-muted",
  },
}

function specLabel(t: SpecType) {
  switch (t) {
    case "logic":
      return "Logic Spec"
    case "metric":
      return "Metric Spec"
    case "governance":
      return "Governance Spec"
    case "flow":
      return "System Flow"
  }
}

function SpecButtonIcon({ type, className }: { type: SpecType; className?: string }) {
  switch (type) {
    case "logic":
      return <ListTree className={className} aria-hidden />
    case "metric":
      return <BarChart3 className={className} aria-hidden />
    case "governance":
      return <ShieldCheck className={className} aria-hidden />
    case "flow":
      return <Workflow className={className} aria-hidden />
  }
}

function specDialogSubtitle(t: SpecType) {
  switch (t) {
    case "logic":
      return "Architecture · Logic spec"
    case "metric":
      return "Architecture · Metric spec"
    case "governance":
      return "Architecture · Governance spec"
    case "flow":
      return "Architecture · System flow"
  }
}

export function StrategicWorkstreams() {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState<string | null>(null)
  const active = workstreams.find((w) => w.id === activeId) ?? null

  return (
    <>
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-accent">
              <FlaskConical className="w-4 h-4 text-accent-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground">Strategic Workstreams</h3>
              <p className="text-xs text-muted-foreground">Platform lab · product leadership reality</p>
            </div>
          </div>
          <Link
            href="/lab"
            className="text-sm text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
          >
            View lab
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <ul className="divide-y divide-border">
          {workstreams.map((ws, index) => {
            const st = statusStyles[ws.statusKey]
            const StatusIcon = st.icon

            return (
              <motion.li
                key={ws.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col sm:flex-row sm:items-stretch"
              >
                <Link
                  href={ws.href}
                  className="flex flex-1 min-w-0 items-center gap-4 px-6 py-4 hover:bg-muted/50 transition-colors group"
                >
                  <div className={`p-2 rounded-lg shrink-0 ${st.bg}`}>
                    <StatusIcon className={`w-4 h-4 ${st.color}`} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-medium text-sm text-card-foreground group-hover:text-primary transition-colors">
                        {ws.name}
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${st.bg} ${st.color}`}>
                        {st.label}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-snug">{ws.description}</p>
                  </div>

                  <div className="w-24 shrink-0 hidden sm:block">
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${ws.progress}%` }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={cn(
                          "h-full rounded-full",
                          ws.statusKey === "operational" || ws.statusKey === "framework"
                            ? "bg-primary"
                            : ws.statusKey === "phase2"
                              ? "bg-amber-500"
                              : "bg-muted-foreground"
                        )}
                      />
                    </div>
                  </div>

                  <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </Link>

                <div className="flex items-center justify-end gap-2 px-6 pb-4 sm:pb-0 sm:flex-col sm:justify-center sm:border-l sm:border-border sm:bg-muted/20 sm:px-4 sm:min-w-[148px]">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="text-xs gap-1.5 h-8"
                    onClick={() => {
                      setActiveId(ws.id)
                      setOpen(true)
                    }}
                  >
                    <SpecButtonIcon type={ws.specType} className="size-3.5 shrink-0" />
                    {specLabel(ws.specType)}
                  </Button>
                </div>
              </motion.li>
            )
          })}
        </ul>
      </div>

      <Dialog open={open} onOpenChange={(o) => { setOpen(o); if (!o) setActiveId(null) }}>
        <DialogContent className="max-h-[90vh] overflow-hidden gap-0 p-0 sm:max-w-3xl">
          {active && (
            <>
              <DialogHeader className="border-b border-border bg-muted/40 px-5 py-4 text-left space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {specDialogSubtitle(active.specType)}
                </p>
                <DialogTitle className="text-base font-semibold text-foreground sm:text-lg leading-snug pr-8">
                  {active.name}
                </DialogTitle>
                <DialogDescription className="text-sm text-muted-foreground leading-relaxed">
                  High-level architecture view—how components and gates relate—not code, stack, or
                  vendor-specific implementation.
                </DialogDescription>
              </DialogHeader>
              <div className="max-h-[min(70vh,640px)] overflow-y-auto px-5 py-4 space-y-6">
                <MermaidArchitecture key={active.id} chart={active.mermaid} />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                    Control logic (pseudo)
                  </h4>
                  <pre className="rounded-lg border border-border bg-muted/50 p-4 text-[11px] leading-relaxed font-mono text-foreground whitespace-pre-wrap">
                    <code>{active.pseudo}</code>
                  </pre>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
