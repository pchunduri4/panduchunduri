"use client"

import { useState, useCallback, useEffect } from "react"
import { ListTree, ChevronRight } from "lucide-react"
import Link from "next/link"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { DispatchExecutiveSnapshot } from "@/components/dispatch-executive-snapshot"
import {
  DISPATCH_COLUMN_ORDER,
  DISPATCH_COLUMN_LABELS,
  getDispatchBySlug,
  getSnapshotsByColumn,
  type DispatchSnapshot,
} from "@/lib/dispatch-snapshots"
import { cn } from "@/lib/utils"

export function StrategicDispatch() {
  const [open, setOpen] = useState(false)
  const [activeSlug, setActiveSlug] = useState<string | null>(null)
  const [lastUpdate, setLastUpdate] = useState("")

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

  useEffect(() => {
    setLastUpdate(
      new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    )
  }, [])

  return (
    <>
      <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-border bg-muted/30 sm:px-5">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Strategic dispatch
              </span>
              <p className="text-[11px] text-muted-foreground mt-0.5">
                High-density field notes · 30 intelligence streams
              </p>
            </div>
            <span className="text-[11px] font-medium text-muted-foreground">Executive snapshots</span>
          </div>
          <p className="text-xs text-muted-foreground mt-2 max-w-4xl">
            Click any title for the slide-over snapshot. Each topic has a shareable{" "}
            <span className="font-mono text-foreground/80">/dispatch/…</span> URL for outbound and crawlers.
          </p>
        </div>

        <div className="grid grid-cols-1 border-b border-border lg:grid-cols-3 lg:divide-x lg:divide-border">
          {DISPATCH_COLUMN_ORDER.map((col) => {
            const meta = DISPATCH_COLUMN_LABELS[col]
            const rows = getSnapshotsByColumn(col)

            return (
              <div key={col} className="flex flex-col min-w-0 border-b border-border lg:border-b-0 last:border-b-0">
                <div className="sticky top-0 z-10 bg-muted/50 px-3 py-2.5 border-b border-border backdrop-blur-sm">
                  <h3 className="text-xs font-bold uppercase tracking-wide text-foreground leading-tight">
                    {meta.title}
                  </h3>
                  <p className="text-[10px] text-muted-foreground leading-snug mt-0.5 line-clamp-2">
                    {meta.subtitle}
                  </p>
                </div>
                <ul className="flex flex-col">
                  {rows.map((item: DispatchSnapshot) => (
                    <li key={item.slug} className="border-b border-border last:border-b-0">
                      <button
                        type="button"
                        onClick={() => openSnapshot(item.slug)}
                        className={cn(
                          "group flex w-full items-start gap-2 px-2.5 py-2 text-left",
                          "hover:bg-muted/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
                        )}
                      >
                        <span className="mt-0.5 shrink-0 rounded border border-primary/25 bg-accent/80 p-1 text-primary">
                          <ListTree className="size-3" aria-hidden />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-[11px] sm:text-xs leading-snug text-foreground group-hover:text-primary transition-colors line-clamp-3">
                            {item.title}
                          </span>
                          <Link
                            href={`/dispatch/${item.slug}`}
                            className="mt-0.5 block font-mono text-[9px] text-primary/80 hover:underline truncate"
                            onClick={(e) => e.stopPropagation()}
                          >
                            /{item.slug}
                          </Link>
                        </span>
                        <ChevronRight
                          className="size-3.5 shrink-0 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-0.5"
                          aria-hidden
                        />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="flex flex-col gap-1 px-4 py-3 sm:px-5 bg-muted/20 border-t border-border text-[10px] sm:text-[11px] text-muted-foreground">
          <p>
            <span className="font-medium text-foreground/90">Intelligence stream</span> active since 2023 ·
            Thinking consistent across the Project Infinity development cycle.
          </p>
          <p>
            <span className="font-medium text-foreground/90">Last update:</span>{" "}
            {lastUpdate || "…"}
          </p>
        </div>
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
