"use client"

import { motion } from "framer-motion"
import { Clock, Calendar, ArrowLeft, Bookmark, Share2 } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

interface TOCItem {
  id: string
  title: string
  level: number
}

interface StrategyTemplateProps {
  title: string
  description: string
  readTime: string
  publishDate: string
  category: string
  children: React.ReactNode
  tableOfContents: TOCItem[]
}

export function StrategyTemplate({
  title,
  description,
  readTime,
  publishDate,
  category,
  children,
  tableOfContents,
}: StrategyTemplateProps) {
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0px -80% 0px" }
    )

    tableOfContents.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [tableOfContents])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Strategic Dispatch
          </Link>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-muted transition-colors">
              <Bookmark className="w-4 h-4 text-muted-foreground" />
            </button>
            <button className="p-2 rounded-lg hover:bg-muted transition-colors">
              <Share2 className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
          {/* Main Content */}
          <main>
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Meta */}
              <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium uppercase tracking-wider">
                  {category}
                </span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{readTime}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{publishDate}</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance leading-tight">
                {title}
              </h1>

              {/* Description */}
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                {description}
              </p>

              {/* Divider */}
              <hr className="border-border mb-8" />

              {/* Content */}
              <div className="prose prose-slate max-w-none prose-headings:font-semibold prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none">
                {children}
              </div>
            </motion.article>
          </main>

          {/* Table of Contents - Sticky Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <nav className="p-4 bg-secondary rounded-xl border border-border">
                <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
                  On This Page
                </h4>
                <ul className="space-y-2">
                  {tableOfContents.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className={`block text-sm py-1 transition-colors ${
                          item.level === 2 ? "pl-0" : "pl-4"
                        } ${
                          activeSection === item.id
                            ? "text-primary font-medium"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
