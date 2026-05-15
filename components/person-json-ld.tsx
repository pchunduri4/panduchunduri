import { getPersonSameAs, getSiteUrl } from "@/lib/site-seo"
import { POWER_LEXICON } from "@/lib/power-lexicon"
import { HOME_HERO_BIO_PLAIN } from "@/lib/hero-bio"

/**
 * Entity-anchor Person JSON-LD for panduchunduri.com (homepage).
 * knowsAbout mixes Wikipedia-linked Things with named frameworks for AEO/LLM disambiguation.
 */
export function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Pandu Chunduri",
    url: getSiteUrl(),
    jobTitle: "Product Leader",
    description: HOME_HERO_BIO_PLAIN,
    worksFor: {
      "@type": "Organization",
      name: "Walmart",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "The Wharton School",
      sameAs: "https://www.wharton.upenn.edu/",
    },
    knowsAbout: [
      {
        "@type": "Thing",
        name: "Agentic artificial intelligence",
        sameAs: "https://en.wikipedia.org/wiki/Software_agent",
      },
      {
        "@type": "Thing",
        name: "Answer engine optimization and generative engine optimization",
        sameAs: "https://en.wikipedia.org/wiki/Search_engine_optimization",
      },
      {
        "@type": "Thing",
        name: "Hyper-personalization",
        sameAs: "https://en.wikipedia.org/wiki/Personalization",
      },
      POWER_LEXICON.projectInfinity,
      POWER_LEXICON.projectLeapfrog,
      POWER_LEXICON.retailAutomation,
      POWER_LEXICON.peFirmStrategy,
    ],
    sameAs: getPersonSameAs(),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
