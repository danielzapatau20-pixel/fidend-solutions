import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import CustomCursor from '@/components/CustomCursor'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://fidend.com'),
  title: {
    default: 'Fidend | Operational Staffing for Care, Residential & Hospitality Properties',
    template: '%s | Fidend',
  },
  description:
    'Fidend provides reliable operational staffing for senior care facilities, residential communities, and hospitality properties. Support for housekeeping, cleaning, dietary aides, laundry, maintenance, and essential service roles across Pennsylvania.',
  keywords: [
    'operational staffing Pennsylvania',
    'senior care facility staffing',
    'hospitality staffing Pennsylvania',
    'property management staffing',
    'housekeeping staffing Pennsylvania',
    'dietary aide staffing senior care',
    'hotel staffing agency Pennsylvania',
    'residential property staffing',
    'companion caregiver staffing',
    'non-clinical staffing senior living',
    'multifamily property staffing',
    'hotel housekeeper staffing',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fidend.com',
    siteName: 'Fidend',
    title: 'Fidend | Operational Staffing for Care, Residential & Hospitality Properties',
    description:
      'Reliable operational staffing for care facilities, residential communities, and hospitality properties. Three divisions. One operating standard.',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://fidend.com',
  },
  verification: {
    google: 'yM8HZ-ZK-yA6roxxnJC0y2VBVZh__QHFaI6N0YtZnLU',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Fidend Solutions',
              description:
                'Fidend Solutions places operational staff for care facilities, residential communities, and hospitality properties across Pennsylvania. Three divisions — Fidend Care, Fidend Living, Fidend Hospitality — one operating standard.',
              url: 'https://fidend.com',
              telephone: '+12162589368',
              email: 'info@fidend.com',
              address: {
                '@type': 'PostalAddress',
                addressRegion: 'PA',
                addressCountry: 'US',
              },
              areaServed: {
                '@type': 'State',
                name: 'Pennsylvania',
              },
              serviceType: [
                'Senior Care Facility Staffing',
                'Housekeeping Staffing',
                'Dietary Aide Staffing',
                'Laundry Staffing',
                'Activities Aide Staffing',
                'Companion Care Staffing',
                'Property Management Staffing',
                'Residential Janitorial Staffing',
                'Hotel Housekeeping Staffing',
                'Hospitality Staffing',
                'Kitchen & Culinary Staffing',
              ],
              priceRange: 'Contact for quote',
              openingHours: 'Mo-Fr 09:00-18:00',
              sameAs: [],
            }),
          }}
        />
      </head>
      <body>
        <CustomCursor />
        <ScrollProgress />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
