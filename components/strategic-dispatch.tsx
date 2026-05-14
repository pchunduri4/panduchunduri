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
  type DispatchColumn,
  type DispatchSnapshot,
} from "@/lib/dispatch-snapshots"
import { cn } from "@/lib/utils"

export function StrategicDispatch() {
  const [tab, setTab] = useState<DispatchColumn>("retail")
  const [open, setOpen] = useState(false)
  const [activeSlug, setActiveSlug] = useState<string | null>(null)
  const [lastUpdate, setLastUpdate] = useState("")

  const active = activeSlug ? getDispatchBySlug(activeSlug) : undefined
  const rows = getSnapshotsByColumn(tab)
  const tabMeta = DISPATCH_COLUMN_LABELS[tab]

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
                Thirty field notes · three focus areas
              </p>
            </div>
            <span className="text-[11px] font-medium text-muted-foreground">Executive snapshots</span>
          </div>
          <p className="text-xs text-muted-foreground mt-2 max-w-4xl">
            Choose a category, then open any note for the slide-over. Each topic has a shareable{" "}
            <span className="font-mono text-foreground/80">/dispatch/…</span> URL.
          </p>
        </div>

        <div className="border-b border-border bg-muted/20 px-3 py-3 sm:px-5">
          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Strategic dispatch categories"
          >
            {DISPATCH_COLUMN_ORDER.map((col) => {
              const meta = DISPATCH_COLUMN_LABELS[col]
              const selected = tab === col
              return (
                <button
                  key={col}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setTab(col)}
                  className={cn(
                    "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    selected
                      ? "border-primary bg-primary text-primary-foreground shadow-sm"
                      : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  )}
                >
                  {meta.title}
                </button>
              )
            })}
          </div>
          <p className="text-[11px] text-muted-foreground mt-3 leading-snug max-w-3xl">
            {tabMeta.subtitle}
          </p>
        </div>

        <ul className="flex flex-col divide-y divide-border">
          {rows.map((item: DispatchSnapshot) => (
            <li key={item.slug}>
              <button
                type="button"
                onClick={() => openSnapshot(item.slug)}
                className={cn(
                  "group flex w-full items-start gap-3 px-4 sm:px-6 py-4 text-left",
                  "hover:bg-muted/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
                )}
              >
                <span className="mt-0.5 shrink-0 rounded border border-primary/25 bg-accent/80 p-1.5 text-primary">
                  <ListTree className="size-3.5" aria-hidden />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm leading-snug text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </span>
                  <Link
                    href={`/dispatch/${item.slug}`}
                    className="mt-1 inline-block font-mono text-[10px] text-primary/80 hover:underline truncate max-w-full"
                    onClick={(e) => e.stopPropagation()}
                  >
                    /{item.slug}
                  </Link>
                </span>
                <ChevronRight
                  className="size-4 shrink-0 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-1"
                  aria-hidden
                />
              </button>
            </li>
          ))}
        </ul>

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
