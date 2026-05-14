"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Clock, ArrowUpRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface InsightCardProps {
  title: string
  thesis: string
  readTime: string
  category: string
  icon: LucideIcon
  href: string
}

export function InsightCard({
  title,
  thesis,
  readTime,
  category,
  icon: Icon,
  href,
}: InsightCardProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.15 }}
      className="group"
    >
      <Link
        href={href}
        className="block h-full p-6 bg-card border border-zinc-800/50 rounded-xl hover:border-primary/40 transition-all duration-150"
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
        <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2 text-balance">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-5 leading-relaxed">
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
