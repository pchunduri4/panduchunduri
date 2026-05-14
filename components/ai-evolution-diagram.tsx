"use client"

import { Fragment } from "react"
import { ArrowDown, ArrowRight, Database, LineChart, Boxes, Sparkles } from "lucide-react"

const stages = [
  {
    icon: Database,
    title: "Analytics & research systems",
    caption: "Signals, archives, and monetizable insight pipelines.",
  },
  {
    icon: LineChart,
    title: "Predictive & connected products",
    caption: "Forecasting, IoT mesh, and outcome-linked roadmaps.",
  },
  {
    icon: Boxes,
    title: "Platform & marketplace AI",
    caption: "Risk, compliance, and multi-sided optimization.",
  },
  {
    icon: Sparkles,
    title: "GenAI & agentic surfaces",
    caption: "Grounded assistants, gates, and global-scale rollout.",
  },
] as const

export function AIEvolutionDiagram() {
  return (
    <div
      className="not-prose my-10 rounded-2xl border border-primary/25 bg-gradient-to-b from-accent/50 via-background to-muted/30 p-6 sm:p-8 shadow-sm"
      aria-label="Diagram: evolution from analytics to agentic systems"
    >
      <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">
        Evolution thesis
      </p>
      <h3 className="text-center text-lg sm:text-xl font-semibold text-foreground mb-8 text-balance">
        From analytics foundations to agentic systems—one architectural spine
      </h3>

      <div className="flex flex-col md:flex-row md:items-stretch md:justify-center gap-3 md:gap-2">
        {stages.map((stage, i) => {
          const Icon = stage.icon
          return (
          <Fragment key={stage.title}>
            <div className="flex-1 min-w-0 rounded-xl border border-border bg-card px-4 py-4 shadow-xs text-center md:text-left">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary md:mx-0">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <p className="text-sm font-semibold text-foreground leading-snug">{stage.title}</p>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{stage.caption}</p>
            </div>
            {i < stages.length - 1 && (
              <div
                className="flex shrink-0 items-center justify-center py-0.5 md:py-0 md:px-0.5"
                aria-hidden
              >
                <ArrowDown className="h-5 w-5 text-primary/50 md:hidden" />
                <ArrowRight className="hidden h-5 w-5 text-primary/50 md:block self-center" />
              </div>
            )}
          </Fragment>
          )
        })}
      </div>

      <p className="mt-8 text-center text-xs text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        Each stage compounds: data discipline and platform economics from earlier phases become
        non-negotiable prerequisites for safe agent rollouts at the edge of the business.
      </p>
    </div>
  )
}
