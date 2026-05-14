"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Command, FileText, Brain, FlaskConical, ArrowRight } from "lucide-react"

const searchResults = [
  {
    category: "The Anvil",
    items: [
      { title: "Architecting $1B+ AI Platforms: Enterprise Agentic Adoption", href: "/ai-systems/walmart-scale" },
      { title: "Retail AI: Catalog & Product Intelligence", href: "/ai-systems/catalog-intelligence" },
      { title: "Marketplace AI Platform Architecture", href: "/ai-systems/marketplace-ai" },
    ],
  },
  {
    category: "The Edge",
    items: [
      { title: "Beyond SEO: Preparing for the Agentic Era", href: "/aeo-geo/agentic-era" },
      { title: "GEO & Agentic AEO Framework", href: "/aeo-geo/framework" },
      { title: "CDQ Scoring & Factual Fidelity Gates", href: "/aeo-geo/cdq-scoring" },
    ],
  },
  {
    category: "The Calculus",
    items: [
      { title: "From Zero-to-One: Scaling Intelligent Systems", href: "/strategy/ai-evolution" },
      { title: "Smart Mobility & IoT: $100M+ Product Lines", href: "/strategy/smart-mobility" },
      { title: "AI Platform Economics: Asymmetric ROI", href: "/strategy/platform-economics" },
    ],
  },
  {
    category: "The Forge",
    items: [
      { title: "Agentic Commerce: AI Agent Product Discovery", href: "/lab/agentic-commerce" },
      { title: "AI Startup Due Diligence: Asymmetric Acquisitions", href: "/lab/angel-investing" },
      { title: "Cloud GenAI Integration Patterns", href: "/lab/genai-cloud" },
    ],
  },
]

export function CommandSearch() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault()
      setIsOpen((prev) => !prev)
    }
    if (e.key === "Escape") {
      setIsOpen(false)
    }
  }, [])

  useEffect(() => {
    const onDashboardReset = () => {
      setQuery("")
      setIsOpen(false)
    }
    window.addEventListener("dashboard-reset", onDashboardReset)
    return () => window.removeEventListener("dashboard-reset", onDashboardReset)
  }, [])

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  const filteredResults = searchResults
    .map((category) => ({
      ...category,
      items: category.items.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      ),
    }))
    .filter((category) => category.items.length > 0)

  return (
    <>
      {/* Search Trigger */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-3 w-full max-w-md mx-auto px-4 py-2.5 bg-secondary border border-border rounded-lg hover:border-primary/30 transition-all duration-150 group"
      >
        <Search className="w-4 h-4 text-muted-foreground" />
        <span className="flex-1 text-left text-sm text-muted-foreground">
          Search knowledge base...
        </span>
        <kbd className="hidden sm:flex items-center gap-1 px-2 py-1 bg-background border border-border rounded text-xs text-muted-foreground">
          <Command className="w-3 h-3" />
          <span>K</span>
        </kbd>
      </button>

      {/* Command Palette Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[100]"
              onClick={() => setIsOpen(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.15 }}
              className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-xl bg-background border border-border rounded-xl shadow-2xl z-[101] overflow-hidden"
            >
              {/* Search Input */}
              <div className="flex items-center gap-3 px-4 py-4 border-b border-border">
                <Search className="w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for insights, projects, or research..."
                  className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none"
                  autoFocus
                />
                <kbd className="px-2 py-1 bg-secondary border border-border rounded text-xs text-muted-foreground">
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div className="max-h-[400px] overflow-y-auto p-2">
                {query === "" ? (
                  <div className="p-4 text-center text-sm text-muted-foreground">
                    Start typing to search across all content...
                  </div>
                ) : filteredResults.length === 0 ? (
                  <div className="p-4 text-center text-sm text-muted-foreground">
                    No results found for "{query}"
                  </div>
                ) : (
                  filteredResults.map((category) => (
                    <div key={category.category} className="mb-4 last:mb-0">
                      <div className="px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        {category.category}
                      </div>
                      <ul>
                        {category.items.map((item) => (
                          <li key={item.href}>
                            <a
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-accent group transition-colors"
                            >
                              {category.category === "The Anvil" && (
                                <Brain className="w-4 h-4 text-muted-foreground group-hover:text-accent-foreground" />
                              )}
                              {category.category === "The Edge" && (
                                <Search className="w-4 h-4 text-muted-foreground group-hover:text-accent-foreground" />
                              )}
                              {category.category === "The Calculus" && (
                                <FileText className="w-4 h-4 text-muted-foreground group-hover:text-accent-foreground" />
                              )}
                              {category.category === "The Forge" && (
                                <FlaskConical className="w-4 h-4 text-muted-foreground group-hover:text-accent-foreground" />
                              )}
                              <span className="flex-1 text-sm text-foreground group-hover:text-accent-foreground">
                                {item.title}
                              </span>
                              <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              <div className="px-4 py-3 border-t border-border bg-secondary/50">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Navigate with ↑↓ keys</span>
                  <span>Press Enter to select</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
