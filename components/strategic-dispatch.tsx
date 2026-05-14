"use client"

import { useState, useCallback, useEffect } from "react"
import { motion } from "framer-motion"
import { FileText, ChevronRight } from "lucide-react"
import Link from "next/link"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { DispatchExecutiveSnapshot } from "@/components/dispatch-executive-snapshot"
import { DISPATCH_SNAPSHOTS, getDispatchBySlug, type DispatchSnapshot } from "@/lib/dispatch-snapshots"
import { cn } from "@/lib/utils"

export function StrategicDispatch() {
  const [open, setOpen] = useState(false)
  const [activeSlug, setActiveSlug] = useState<string | null>(null)

  const active = activeSlug ? getDispatchBySlug(activeSlug) : undefined

  const openSnapshot = useCallback((slug: string) => {
    setActiveSlug(slug)
    setOpen(true)
  }, [])

  const onOpenChange = useCallback((next: boolean) => {
    setOpen(next)
    if (!next) setActiveSlug(null)
  }, [])

  useEffect(() => {
    const onReset = () => {
      setOpen(false)
      setActiveSlug(null)
    }
    window.addEventListener("dashboard-reset", onReset)
    return () => window.removeEventListener("dashboard-reset", onReset)
  }, [])

  return (
    <>
      <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-border bg-muted/30 sm:px-5">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Micro-insights
            </span>
            <span className="text-[11px] font-medium text-muted-foreground">Field notes</span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Click a row for an executive snapshot—stay on the dashboard, or use the shareable link.
          </p>
        </div>
        <ul className="divide-y divide-border">
          {DISPATCH_SNAPSHOTS.map((item: DispatchSnapshot, index) => (
            <motion.li
              key={item.slug}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.03 }}
            >
              <button
                type="button"
                onClick={() => openSnapshot(item.slug)}
                className={cn(
                  "group flex w-full items-start gap-3 px-4 py-3.5 text-left sm:px-5 sm:py-3",
                  "hover:bg-muted/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
                )}
              >
                <div className="mt-0.5 rounded-md bg-accent p-1.5 shrink-0">
                  <FileText className="size-3.5 text-accent-foreground" aria-hidden />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-foreground leading-snug group-hover:text-primary transition-colors">
                    {item.title}
                  </p>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    <Link
                      href={`/dispatch/${item.slug}`}
                      className="font-mono text-primary/90 hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      /dispatch/{item.slug}
                    </Link>
                  </p>
                </div>
                <ChevronRight
                  className="size-4 text-muted-foreground shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-hidden
                />
              </button>
            </motion.li>
          ))}
        </ul>
      </div>

      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent
          side="right"
          className="w-full gap-0 border-l p-0 sm:max-w-xl md:max-w-2xl flex flex-col overflow-hidden"
        >
          {active && (
            <>
              <SheetHeader className="border-b border-border px-6 py-3 text-left space-y-0 shrink-0">
                <SheetTitle className="text-left text-sm font-semibold text-foreground">
                  Strategic dispatch
                </SheetTitle>
                <SheetDescription className="text-left text-xs text-muted-foreground">
                  Executive snapshot · field note
                </SheetDescription>
              </SheetHeader>
              <div className="flex-1 overflow-y-auto px-6 py-5">
                <DispatchExecutiveSnapshot snapshot={active} variant="sheet" />
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </>
  )
}
