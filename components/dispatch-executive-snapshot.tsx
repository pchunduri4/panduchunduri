import Link from "next/link"
import { ExternalLink } from "lucide-react"
import type { DispatchSnapshot } from "@/lib/dispatch-snapshots"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface DispatchExecutiveSnapshotProps {
  snapshot: DispatchSnapshot
  /** Show link to canonical URL (full-page view) */
  variant?: "sheet" | "page"
  className?: string
}

export function DispatchExecutiveSnapshot({
  snapshot,
  variant = "page",
  className,
}: DispatchExecutiveSnapshotProps) {
  const canonicalPath = `/dispatch/${snapshot.slug}`

  return (
    <article className={cn("flex flex-col", className)}>
      <p className="sr-only" data-expert-answer="true">
        {snapshot.expertAnswer}
      </p>
      <header className="border-b border-border pb-4 mb-6">
        <p className="text-[11px] font-bold uppercase tracking-wider text-primary mb-2">
          Executive snapshot
        </p>
        <h1 className="text-xl font-bold text-foreground leading-snug text-balance sm:text-2xl">
          {snapshot.title}
        </h1>
        <div className="mt-3 flex flex-wrap gap-2">
          {snapshot.themes.map((t) => (
            <Badge key={t} variant="secondary" className="text-xs font-medium">
              {t}
            </Badge>
          ))}
        </div>
      </header>

      <div className="space-y-8 text-sm leading-relaxed">
        <section>
          <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
            The move
          </h2>
          <p className="text-muted-foreground">{snapshot.theMove}</p>
        </section>
        <section>
          <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
            The friction
          </h2>
          <p className="text-muted-foreground">{snapshot.theFriction}</p>
        </section>
        <section>
          <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
            The product verdict
          </h2>
          <p className="text-foreground font-medium">{snapshot.theProductVerdict}</p>
        </section>
      </div>

      {variant === "sheet" && (
        <div className="mt-8 border-t border-border pt-4">
          <Link
            href={canonicalPath}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            Open shareable page
            <ExternalLink className="size-3.5" aria-hidden />
          </Link>
          <p className="mt-2 text-xs text-muted-foreground">
            Same content at <span className="font-mono text-foreground/80">{canonicalPath}</span>{" "}
            for LinkedIn and outbound.
          </p>
        </div>
      )}

      {variant === "page" && (
        <p className="mt-8 text-xs text-muted-foreground">
          Field note · Strategic dispatch ·{" "}
          <span className="font-mono text-foreground/80">{canonicalPath}</span>
        </p>
      )}
    </article>
  )
}
