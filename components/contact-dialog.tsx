"use client"

import { useCallback, useState } from "react"
import { Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { SITE_CONTACT_EMAIL, SITE_LINKEDIN_URL } from "@/lib/site-contact"
import { cn } from "@/lib/utils"

type ContactDialogProps = {
  /** Visual treatment for where the trigger sits. */
  variant?: "sidebar" | "header"
  triggerClassName?: string
}

export function ContactDialog({ variant = "sidebar", triggerClassName }: ContactDialogProps) {
  const [open, setOpen] = useState(false)

  const sendEmail = useCallback(() => {
    window.location.href = `mailto:${SITE_CONTACT_EMAIL}`
    setOpen(false)
  }, [])

  return (
    <>
      <Button
        type="button"
        variant="outline"
        onClick={() => setOpen(true)}
        className={cn(
          variant === "sidebar" &&
            "w-full justify-center border-sidebar-border bg-sidebar text-sm font-medium text-sidebar-foreground shadow-none hover:bg-sidebar-accent",
          variant === "header" &&
            "border-border bg-background shadow-none font-medium text-foreground hover:bg-muted/80",
          triggerClassName
        )}
      >
        Contact
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="gap-6 sm:max-w-md">
          <DialogHeader className="space-y-2 text-left">
            <DialogTitle className="text-base font-semibold">Connect</DialogTitle>
            <DialogDescription className="text-sm leading-relaxed">
              Prefer a short thread on LinkedIn, or reach the inbox directly.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3">
            <Button asChild className="w-full gap-2" size="lg">
              <a href={SITE_LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                <Linkedin className="size-4 shrink-0" aria-hidden />
                Message via LinkedIn
              </a>
            </Button>
            <Button
              type="button"
              variant="outline"
              size="lg"
              className="w-full gap-2 border-border bg-transparent shadow-none font-medium"
              onClick={sendEmail}
            >
              <Mail className="size-4 shrink-0" aria-hidden />
              Send email
            </Button>
            <p className="text-[11px] text-muted-foreground text-center leading-snug">
              Email opens in your default client. Address is applied in-app to reduce static scraping.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
