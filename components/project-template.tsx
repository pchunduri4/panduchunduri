"use client"

import { motion } from "framer-motion"
import {
  ArrowLeft,
  ExternalLink,
  Github,
  AlertTriangle,
  Cpu,
  TrendingUp,
  CheckCircle2,
} from "lucide-react"
import Link from "next/link"

interface Metric {
  label: string
  value: string
  change?: string
  isPositive?: boolean
}

interface TechStack {
  category: string
  items: string[]
}

interface ProjectTemplateProps {
  title: string
  tagline: string
  status: "live" | "completed" | "in-progress"
  problem: string
  architecture: string
  outcome: string
  metrics: Metric[]
  techStack: TechStack[]
  githubUrl?: string
  liveUrl?: string
  children?: React.ReactNode
}

const statusConfig = {
  live: { label: "Live", color: "bg-green-100 text-green-700" },
  completed: { label: "Completed", color: "bg-accent text-accent-foreground" },
  "in-progress": { label: "In Progress", color: "bg-amber-100 text-amber-700" },
}

export function ProjectTemplate({
  title,
  tagline,
  status,
  problem,
  architecture,
  outcome,
  metrics,
  techStack,
  githubUrl,
  liveUrl,
  children,
}: ProjectTemplateProps) {
  const statusInfo = statusConfig[status]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Strategic Dispatch
          </Link>
          <div className="flex items-center gap-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-lg transition-colors"
              >
                <Github className="w-4 h-4" />
                View Code
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <span
            className={`inline-flex px-3 py-1 text-xs font-medium rounded-full mb-4 ${statusInfo.color}`}
          >
            {statusInfo.label}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 text-balance">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground">{tagline}</p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
        >
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="p-4 bg-card border border-border rounded-xl"
            >
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                {metric.label}
              </p>
              <p className="text-2xl font-semibold text-card-foreground">
                {metric.value}
              </p>
              {metric.change && (
                <p
                  className={`text-xs mt-1 ${
                    metric.isPositive ? "text-green-600" : "text-destructive"
                  }`}
                >
                  {metric.change}
                </p>
              )}
            </div>
          ))}
        </motion.div>

        {/* Main Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* The Problem */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-6 bg-card border border-border rounded-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-destructive/10">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
              <h2 className="font-semibold text-card-foreground">The Problem</h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {problem}
            </p>
          </motion.section>

          {/* The AI Architecture */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="p-6 bg-card border border-border rounded-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-accent">
                <Cpu className="w-5 h-5 text-accent-foreground" />
              </div>
              <h2 className="font-semibold text-card-foreground">
                The AI Architecture
              </h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {architecture}
            </p>
          </motion.section>

          {/* The ROI/Outcome */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="p-6 bg-card border border-border rounded-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-green-100">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <h2 className="font-semibold text-card-foreground">
                The ROI/Outcome
              </h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {outcome}
            </p>
          </motion.section>
        </div>

        {/* Tech Stack */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Tech Stack
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {techStack.map((stack, index) => (
              <div
                key={index}
                className="p-4 bg-secondary rounded-xl border border-border"
              >
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                  {stack.category}
                </p>
                <ul className="space-y-1.5">
                  {stack.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Additional Content */}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </div>
  )
}
