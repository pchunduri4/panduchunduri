"use client"

import { useEffect, useId, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type Props = {
  chart: string
  className?: string
}

/**
 * Renders a Mermaid diagram client-side for architecture views (not code dumps).
 */
export function MermaidArchitecture({ chart, className }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const reactId = useId().replace(/:/g, "")
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el || !chart.trim()) return

    let cancelled = false
    setError(null)
    el.innerHTML = ""

    void import("mermaid").then(async (mod) => {
      if (cancelled || !containerRef.current) return
      const mermaid = mod.default
      try {
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "strict",
          theme: "base",
          themeVariables: {
            primaryColor: "#e8f0fe",
            primaryTextColor: "#202124",
            primaryBorderColor: "#dadce0",
            lineColor: "#5f6368",
            secondaryColor: "#f1f3f4",
            tertiaryColor: "#fff",
          },
        })
        const diagramId = `mmd-${reactId}-${Math.random().toString(36).slice(2, 9)}`
        const { svg } = await mermaid.render(diagramId, chart)
        if (!cancelled && containerRef.current) {
          containerRef.current.innerHTML = svg
        }
      } catch {
        if (!cancelled && containerRef.current) {
          setError("Diagram could not be rendered.")
        }
      }
    })

    return () => {
      cancelled = true
    }
  }, [chart, reactId])

  if (!chart.trim()) return null

  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-muted/30 px-2 py-4 overflow-x-auto",
        className
      )}
    >
      {error ? (
        <p className="text-center text-xs text-muted-foreground px-4">{error}</p>
      ) : (
        <div ref={containerRef} className="flex justify-center [&_svg]:max-w-full" />
      )}
    </div>
  )
}
