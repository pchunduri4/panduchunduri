"use client"

import { motion } from "framer-motion"
import { FileText, ChevronRight } from "lucide-react"

const microInsights = [
  { id: "mi-1", title: "The Token Tax: Why RAG for Retail is a Margin Game" },
  { id: "mi-2", title: "Semantic Drift in 10M+ SKU Catalogs" },
  { id: "mi-3", title: "Why Most Agentic Frameworks Fail at Procurement" },
  { id: "mi-4", title: "The Role of Factual Fidelity Gates in 2026 E-commerce" },
]

export function StrategicDispatch() {
  return (
    <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b border-border bg-muted/30 sm:px-5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Micro-insights
          </span>
          <span className="text-[11px] font-medium text-muted-foreground">Field notes</span>
        </div>
      </div>
      <ul className="divide-y divide-border">
        {microInsights.map((item, index) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.04 }}
            className="group"
          >
            <div className="flex items-start gap-3 px-4 py-3.5 sm:px-5 sm:py-3 hover:bg-muted/40 transition-colors">
              <div className="mt-0.5 rounded-md bg-accent p-1.5 shrink-0">
                <FileText className="size-3.5 text-accent-foreground" aria-hidden />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-foreground leading-snug group-hover:text-primary transition-colors">
                  {item.title}
                </p>
              </div>
              <ChevronRight
                className="size-4 text-muted-foreground shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                aria-hidden
              />
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
