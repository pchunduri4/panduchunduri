"use client"

import { useState, type MouseEvent } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  BookOpen,
  Brain,
  Search,
  FlaskConical,
  Linkedin,
  Github,
  Mail,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  GraduationCap,
} from "lucide-react"
import { cn } from "@/lib/utils"

const libraryItems = [
  {
    title: "The Anvil",
    icon: Brain,
    href: "/ai-systems",
    description: "Deep-Tech AI Systems",
  },
  {
    title: "The Edge",
    icon: Search,
    href: "/aeo-geo",
    description: "AEO/GEO & Future of Search",
  },
  {
    title: "The Calculus",
    icon: GraduationCap,
    href: "/strategy",
    description: "Scaling & Platform Strategy",
  },
  {
    title: "The Forge",
    icon: FlaskConical,
    href: "/lab",
    description: "Experimental Lab",
  },
]

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/panduchunduri/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/pchunduri4/panduchunduri", label: "GitHub" },
  { icon: Mail, href: "mailto:pandu@panduchunduri.com", label: "Email" },
]

export function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [isLibraryOpen, setIsLibraryOpen] = useState(true)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const navIsActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  const handleHomeNavigation = (e: MouseEvent<HTMLAnchorElement>) => {
    setIsMobileOpen(false)
    if (pathname === "/") {
      e.preventDefault()
      router.refresh()
      window.scrollTo({ top: 0, behavior: "smooth" })
      window.dispatchEvent(new CustomEvent("dashboard-reset"))
    }
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-background border border-border shadow-sm lg:hidden"
        aria-label="Toggle menu"
      >
        {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-foreground/10 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          x: isMobileOpen ? 0 : typeof window !== "undefined" && window.innerWidth < 1024 ? -280 : 0,
        }}
        className={cn(
          "fixed left-0 top-0 h-full w-[280px] bg-sidebar border-r border-sidebar-border z-50",
          "flex flex-col shadow-sm lg:shadow-none",
          "lg:translate-x-0"
        )}
      >
        {/* Profile Section — primary way back to home */}
        <Link
          href="/"
          onClick={handleHomeNavigation}
          aria-label="Home"
          className="block p-6 border-b border-sidebar-border hover:bg-sidebar-accent/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-secondary flex items-center justify-center shrink-0 ring-1 ring-border">
              <Image
                src="/pandu-chunduri.jpg"
                alt="Pandu Chunduri"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-semibold text-sidebar-foreground">Pandu Chunduri</h2>
              <p className="text-sm text-muted-foreground leading-snug">
                {"Head of Product: AI & Agentic Systems"}
              </p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Scalable AI & Agentic Systems
          </p>
          <p className="text-xs text-muted-foreground/90 leading-relaxed mt-2">
            Experience includes Walmart Global Tech, Avetta, Parsons, and Gartner.
          </p>
          <p className="text-xs text-muted-foreground/90 leading-relaxed mt-2">
            Wharton MBA
          </p>
        </Link>

        {/* Systems architecture */}
        <div className="flex-1 overflow-y-auto py-4">
          <div className="px-4 mb-2">
            <button
              onClick={() => setIsLibraryOpen(!isLibraryOpen)}
              className="flex items-center gap-2 w-full text-xs font-medium text-muted-foreground uppercase tracking-wider hover:text-foreground transition-colors"
            >
              {isLibraryOpen ? (
                <ChevronDown className="w-3.5 h-3.5" />
              ) : (
                <ChevronRight className="w-3.5 h-3.5" />
              )}
              Systems Architecture
            </button>
          </div>

          <motion.nav
            initial={false}
            animate={{ height: isLibraryOpen ? "auto" : 0, opacity: isLibraryOpen ? 1 : 0 }}
            className="overflow-hidden"
          >
            <ul className="space-y-1 px-2">
              {libraryItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={cn(
                      "flex items-start gap-3 px-3 py-2.5 rounded-lg border-l-[3px] border-transparent transition-all duration-150",
                      "hover:bg-sidebar-accent group",
                      navIsActive(item.href) && "bg-accent border-l-primary shadow-sm"
                    )}
                  >
                    <item.icon
                      className={cn(
                        "w-5 h-5 mt-0.5 text-muted-foreground transition-colors",
                        "group-hover:text-primary",
                        navIsActive(item.href) && "text-primary"
                      )}
                    />
                    <div>
                      <span
                        className={cn(
                          "text-sm font-medium text-sidebar-foreground transition-colors",
                          "group-hover:text-foreground",
                          navIsActive(item.href) && "text-foreground font-semibold"
                        )}
                      >
                        {item.title}
                      </span>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Quick Links */}
          <div className="px-4 mt-6 mb-2">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Quick Access
            </span>
          </div>
          <ul className="px-2 space-y-1">
            <li>
              <Link
                href="/"
                onClick={handleHomeNavigation}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg border-l-[3px] border-transparent transition-all duration-150",
                  "hover:bg-sidebar-accent group",
                  navIsActive("/") && "bg-accent border-l-primary shadow-sm"
                )}
              >
                <BookOpen
                  className={cn(
                    "w-5 h-5 text-muted-foreground transition-colors",
                    "group-hover:text-primary",
                    navIsActive("/") && "text-primary"
                  )}
                />
                <span
                  className={cn(
                    "text-sm font-medium text-sidebar-foreground transition-colors",
                    "group-hover:text-foreground",
                    navIsActive("/") && "text-foreground font-semibold"
                  )}
                >
                  Strategic Dispatch
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="p-4 border-t border-sidebar-border">
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors group"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-sidebar-accent-foreground transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </motion.aside>
    </>
  )
}
