"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Clock, ArrowUpRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface InsightCardProps {
  title: string
  thesis: string
  readTime: string
  category: string
  icon: LucideIcon
  href: string
  /** Larger typography for pillar thesis cards on the home dashboard. */
  emphasis?: "default" | "pillar"
}

export function InsightCard({
  title,
  thesis,
  readTime,
  category,
  icon: Icon,
  href,
  emphasis = "default",
}: InsightCardProps) {
  const pillar = emphasis === "pillar"
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.15 }}
      className="group"
    >
      <Link
        href={href}
        className={cn(
          "block h-full bg-card border border-border rounded-xl shadow-sm hover:border-primary/50 hover:shadow-md transition-all duration-150",
          pillar ? "p-7 min-h-[220px]" : "p-6"
        )}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-accent">
              <Icon className="w-4 h-4 text-accent-foreground" />
            </div>
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {category}
            </span>
          </div>
          <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Content */}
        <h3
          className={cn(
            "font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2 text-balance",
            pillar ? "text-xl sm:text-2xl" : "text-lg"
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "text-muted-foreground mb-4 leading-relaxed",
            pillar ? "text-sm line-clamp-4" : "text-sm line-clamp-5"
          )}
        >
          {thesis}
        </p>

        {/* Footer */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Clock className="w-3.5 h-3.5" />
          <span>{readTime} read</span>
        </div>
      </Link>
    </motion.div>
  )
}
