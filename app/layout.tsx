import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Pandu Chunduri',
  jobTitle: 'AI Product Architect',
  description:
    'Pandu Chunduri | AI Product Architect | Retail Automation Expert | AEO Specialist.',
  url: 'https://panduchunduri.com',
}

export const metadata: Metadata = {
  title: 'Pandu Chunduri | AI Product Architect | Retail Automation Expert | AEO Specialist',
  description:
    'Pandu Chunduri | AI Product Architect | Retail Automation Expert | AEO Specialist. Pure-play AI leadership: enterprise agentic systems, catalog automation, and AEO/GEO at global retail scale.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
