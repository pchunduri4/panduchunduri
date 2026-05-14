import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Pandu Chunduri',
  jobTitle: 'Head of Product, AI & Agentic Systems',
  description:
    'Pandu Chunduri | Head of Product, AI & Agentic Systems | Retail automation & AEO.',
  url: 'https://panduchunduri.com',
}

export const metadata: Metadata = {
  title: 'Pandu Chunduri | Head of Product, AI & Agentic Systems | Retail & AEO',
  description:
    'Pandu Chunduri | Head of Product, AI & Agentic Systems. Product leadership for enterprise agentic systems, catalog automation, and AEO/GEO at global retail scale.',
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
    <html lang="en" className={`${roboto.variable} bg-background`}>
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
