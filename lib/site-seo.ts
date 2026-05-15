import { SITE_LINKEDIN_URL } from "@/lib/site-contact"
import { HOME_META_DESCRIPTION } from "@/lib/hero-bio"

/** Canonical site origin (no trailing slash). Override with NEXT_PUBLIC_SITE_URL in production. */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? "https://panduchunduri.com"
  return raw.replace(/\/$/, "")
}

export const SEO_TITLE_BRAND = "Pandu Chunduri"

/** Site-wide default meta description (homepage snippet; Google ~160 chars). */
export const SEO_DEFAULT_DESCRIPTION = HOME_META_DESCRIPTION

/** Wellfound (formerly AngelList) profile — set NEXT_PUBLIC_WELLFOUND_URL if this default changes. */
export function getWellfoundProfileUrl(): string | undefined {
  const fromEnv = process.env.NEXT_PUBLIC_WELLFOUND_URL?.trim()
  if (fromEnv) return fromEnv
  return "https://wellfound.com/u/pandu-chunduri"
}

export function getPersonSameAs(): string[] {
  const wellfound = getWellfoundProfileUrl()
  return [SITE_LINKEDIN_URL, ...(wellfound ? [wellfound] : [])]
}

/** Clip text for meta description (search snippet length). */
export function clipMetaDescription(text: string, max = 158): string {
  const t = text.replace(/\s+/g, " ").trim()
  if (t.length <= max) return t
  return `${t.slice(0, max - 1).trimEnd()}…`
}

/** Absolute URL for canonical / OG `url` fields. */
export function absoluteUrl(path: string): string {
  const base = getSiteUrl()
  const p = path.startsWith("/") ? path : `/${path}`
  return `${base}${p}`
}
