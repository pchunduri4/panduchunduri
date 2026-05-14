"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Activity,
  CheckCircle2,
  Clock,
  AlertCircle,
  ArrowUpRight,
  ListTree,
  Workflow,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

type ExperimentStatus = "live" | "completed" | "pending" | "paused" | "peerReview"
type SpecKind = "logic" | "flow"

interface Experiment {
  id: string
  name: string
  status: ExperimentStatus
  metric: string
  progress: number
  href: string
  specKind: SpecKind
  /** Product architecture spec: strategy + feasibility framing, high-level pseudo-logic (not implementation). */
  architectureSpec: string
}

const experiments: Experiment[] = [
  {
    id: "1",
    name: "Agentic Commerce Research",
    status: "peerReview",
    metric: "+47% agent citations",
    progress: 72,
    href: "/lab/agentic-commerce",
    specKind: "logic",
    architectureSpec: `PRODUCT STRATEGY
  Intent: Treat agent-led discovery as a revenue lever only when trust and
  citation quality move together—optimize for "selected in agent flows,"
  not raw token spend.

TECHNICAL FEASIBILITY
  Position: Gates must be enforceable in-product (not slide-deck only).
  Non-negotiables: abstention paths, evidence lineage, category-specific
  risk appetite signed by product + legal.

─── BUSINESS LOGIC (PSEUDO) ───

ON customer_intent (browse | compare | checkout_adjacent):
  resolve_catalog_entities(intent)

  // Factual fidelity gate (product-defined)
  IF any_claim LACKS corroborating_source IN policy_allowlist:
    RETURN abstain_or_human_handoff
    // Feasibility: model may not "fill in" attributes

  // Risk thresholds (policy tiers)
  IF use_case IN {checkout_assist, returns_eligibility, warranty}:
    REQUIRE confidence_band >= HIGH
    REQUIRE human_review_queue IF dispute_rate > RISK_THRESHOLD

  IF use_case IN {inspiration_discovery}:
    REQUIRE confidence_band >= MEDIUM
    ALLOW softer_abstention_copy

  // Scenario coverage (product strategy → release)
  IF core_commerce_scenarios NOT PASS evaluation_harness:
    HOLD general_traffic_promotion
    RUN iterative_catalog_fixes WITH owner_SLAs

  IF all_gates_pass:
    compose_agent_answer WITH mandatory_citations
    LOG decision_trace FOR post_incident_review`,
  },
  {
    id: "2",
    name: "CDQ Scoring System",
    status: "live",
    metric:
      "Proprietary heuristic for measuring factual grounding in multi-modal retail catalogs.",
    progress: 65,
    href: "/lab/cdq-scoring",
    specKind: "flow",
    architectureSpec: `PRODUCT STRATEGY
  Sell CDQ as a release criterion: "Is this SKU/agent surface safe to ship?"
  Buyers care about fewer incidents and faster remediation—not model weights.

TECHNICAL FEASIBILITY
  Heuristic must be explainable to merchants and auditors (sub-scores +
  drivers), and stable enough to trend week-over-week.

─── SYSTEM FLOW (PSEUDO) ───

INGEST normalized_attributes + evidence_spans

STEP coverage_scan:
  IF required_attributes MISSING OR stale_beyond_SLA:
    FLAG coverage_debt → owner_queue

STEP corroboration_alignment:
  FOR each high_liability_claim:
    REQUIRE >=1 independent_source IN trust_tier_allowlist
    ELSE FLAG fidelity_block

STEP conflict_detection:
  IF supplier_feed CONTRADICTS golden_record:
    ESCALATE merge_rule OR hold_publish

STEP roll_up_scores:
  CDQ_public = weighted_blend(coverage, corroboration, freshness, conflict)
  ATTACH explainability_payload FOR UI + API

RELEASE GATE (product policy):
  IF CDQ_public < floor_for_use_case:
    BLOCK agent_surface OR force_safe_mode`,
  },
  {
    id: "3",
    name: "Angel Due Diligence Framework",
    status: "completed",
    metric: "32 deals analyzed",
    progress: 100,
    href: "/lab/angel-investing",
    specKind: "logic",
    architectureSpec: `PRODUCT STRATEGY
  Standardize how the partnership reviews AI deals: speed without blind spots.
  Outcome is a comparable scorecard, not a novel each time.

TECHNICAL FEASIBILITY
  Artifacts must be lightweight enough for part-time reviewers; severity
  rubric must map to clear "proceed / probe / pass" actions.

─── LOGIC SPEC (PSEUDO) ───

INPUT deal_memo + data_room_index

SCORE product_pull, team_execution, market_structure

FOR each known_failure_mode IN {data_rights, model_lineage, concentration}:
  IF signal_present:
    ADD risk_flag WITH evidence_pointer

IF risk_flags INCLUDE "unresolved_data_rights":
  DEFAULT recommendation = NO_GO until_remediation_plan

IF concentration_top_customers > threshold:
  REQUIRE mitigation_narrative OR downgrade valuation_band

OUTPUT scorecard + partner_memo_template
  // Strategy: comparable; Feasibility: time-boxed review SLAs`,
  },
  {
    id: "4",
    name: "Google Cloud GenAI",
    status: "completed",
    metric: "Certified",
    progress: 100,
    href: "/lab/genai-cloud",
    specKind: "flow",
    architectureSpec: `PRODUCT STRATEGY
  GenAI features ship only with explicit operating envelopes: who can be
  impacted, what "off" looks like, and how cost scales with adoption.

TECHNICAL FEASIBILITY
  Routing, fallbacks, and kill switches must be owned by platform + SRE,
  with product-visible SLOs—not hidden in ML notebooks.

─── SYSTEM FLOW (PSEUDO) ───

REQUEST arrives WITH tenant + risk_tier

ROUTE model_tier:
  IF risk_tier == HIGH: prefer_high_fidelity_model
  ELSE: prefer_cost_efficient_model

IF error_rate OR latency_p95 EXCEEDS SLO:
  ACTIVATE fallback_model_path
  NOTIFY product_dashboard

IF executive_kill_switch OR policy_incident:
  DISABLE generative_path
  SERVE deterministic_experience

POST_CALL:
  EMIT usage + safety_signals FOR weekly_product_review`,
  },
  {
    id: "5",
    name: "Responsible AI Framework",
    status: "live",
    metric: "In validation",
    progress: 55,
    href: "/lab/responsible-ai",
    specKind: "logic",
    architectureSpec: `PRODUCT STRATEGY
  Make trade-offs explicit: capability vs. latency vs. cost vs. harm surface.
  Goal is defensible defaults per use-case tier, not one-off hero demos.

TECHNICAL FEASIBILITY
  Controls must bind to shipping artifacts (PRDs, flags, dashboards),
  with owners—otherwise "responsible AI" stays a workshop handout.

─── LOGIC SPEC (PSEUDO) ───

CLASSIFY use_case_severity AS {low, medium, high}

MAP severity → required_controls:
  high   → human_in_loop_for_financial_outcomes + grounding_required
  medium → grounding_required + escalation_path
  low    → standard_logging + rate_limits

FOR each planned_agent_surface:
  IF required_controls NOT implementable_by_target_date:
    RECLASSIFY scope OR push_date WITH exec_signoff

RUN cross_review (product, legal, trust, eng):
  IF disagreement ON residual_risk:
    RECORD decision AND revisit_trigger (volume, incident, regulation)

SHIP only WHEN control_matrix COMPLETE for severity_tier`,
  },
]

const statusConfig: Record<
  ExperimentStatus,
  { icon: typeof Activity; color: string; bg: string; label: string }
> = {
  live: {
    icon: Activity,
    color: "text-green-700",
    bg: "bg-green-50",
    label: "Live",
  },
  completed: {
    icon: CheckCircle2,
    color: "text-primary",
    bg: "bg-accent",
    label: "Completed",
  },
  pending: {
    icon: Clock,
    color: "text-amber-600",
    bg: "bg-amber-100",
    label: "Pending",
  },
  paused: {
    icon: AlertCircle,
    color: "text-muted-foreground",
    bg: "bg-muted",
    label: "Paused",
  },
  peerReview: {
    icon: Clock,
    color: "text-amber-800",
    bg: "bg-amber-50",
    label: "In Peer Review",
  },
}

function specButtonLabel(kind: SpecKind) {
  return kind === "logic" ? "Logic Spec" : "System Flow"
}

function SpecIcon({ kind, className }: { kind: SpecKind; className?: string }) {
  return kind === "logic" ? (
    <ListTree className={className} aria-hidden />
  ) : (
    <Workflow className={className} aria-hidden />
  )
}

export function LiveExperiments() {
  const [noteForId, setNoteForId] = useState<string | null>(null)
  const active = experiments.find((e) => e.id === noteForId) ?? null

  return (
    <>
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-accent">
              <Activity className="w-4 h-4 text-accent-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground">Live Experiments</h3>
              <p className="text-xs text-muted-foreground">5XEdge Lab Status Board</p>
            </div>
          </div>
          <Link
            href="/lab"
            className="text-sm text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
          >
            View all
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <ul className="divide-y divide-border">
          {experiments.map((experiment, index) => {
            const status = statusConfig[experiment.status]
            const StatusIcon = status.icon
            const btn = specButtonLabel(experiment.specKind)

            return (
              <motion.li
                key={experiment.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col sm:flex-row sm:items-stretch"
              >
                <Link
                  href={experiment.href}
                  className="flex flex-1 min-w-0 items-center gap-4 px-6 py-4 hover:bg-muted/50 transition-colors group"
                >
                  <div className={`p-2 rounded-lg shrink-0 ${status.bg}`}>
                    <StatusIcon className={`w-4 h-4 ${status.color}`} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-medium text-sm text-card-foreground group-hover:text-primary transition-colors">
                        {experiment.name}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${status.bg} ${status.color}`}
                      >
                        {status.label}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-snug">{experiment.metric}</p>
                  </div>

                  <div className="w-24 shrink-0 hidden sm:block">
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${experiment.progress}%` }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={cn(
                          "h-full rounded-full",
                          experiment.status === "completed"
                            ? "bg-primary"
                            : experiment.status === "live"
                              ? "bg-green-600"
                              : experiment.status === "peerReview"
                                ? "bg-amber-500"
                                : "bg-muted-foreground"
                        )}
                      />
                    </div>
                  </div>

                  <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </Link>

                <div className="flex items-center justify-end gap-2 px-6 pb-4 sm:pb-0 sm:flex-col sm:justify-center sm:border-l sm:border-border sm:bg-muted/20 sm:px-4 sm:min-w-[148px]">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="text-xs gap-1.5 h-8"
                    onClick={() => setNoteForId(experiment.id)}
                  >
                    <SpecIcon kind={experiment.specKind} className="size-3.5 shrink-0" />
                    {btn}
                  </Button>
                </div>
              </motion.li>
            )
          })}
        </ul>
      </div>

      <Dialog open={noteForId !== null} onOpenChange={(open) => !open && setNoteForId(null)}>
        <DialogContent className="max-h-[85vh] overflow-hidden gap-0 p-0 sm:max-w-2xl">
          {active && (
            <>
              <DialogHeader className="border-b border-border bg-muted/40 px-5 py-4 text-left space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Product strategy · Technical feasibility
                </p>
                <DialogTitle className="flex flex-wrap items-center gap-2 text-base font-semibold text-foreground sm:text-lg">
                  <SpecIcon kind={active.specKind} className="size-5 text-primary shrink-0" />
                  <span className="leading-snug">{active.name}</span>
                  <span className="text-muted-foreground font-normal text-sm">
                    · {active.specKind === "logic" ? "Logic spec" : "System flow"}
                  </span>
                </DialogTitle>
                <DialogDescription className="sr-only">
                  Product architecture spec for {active.name}, emphasizing strategy and feasibility.
                </DialogDescription>
              </DialogHeader>
              <div className="max-h-[min(60vh,520px)] overflow-auto px-5 py-4">
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Architecture-level view: what we optimize for commercially, what must be true in
                  platform for this to ship safely—not implementation or stack choices.
                </p>
                <pre className="rounded-lg border border-border bg-muted/60 p-4 text-[11px] leading-relaxed font-mono text-foreground whitespace-pre-wrap">
                  <code>{active.architectureSpec}</code>
                </pre>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
