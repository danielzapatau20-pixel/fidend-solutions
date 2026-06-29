import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import CustomCursor from '@/components/CustomCursor'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://fidend.com'),
  title: {
    default: 'Fidend Solutions — Operational Staffing for Senior Living',
    template: '%s | Fidend Solutions',
  },
  description:
    'Fidend places housekeepers, dietary aides, laundry attendants, activities aides, and companion caregivers who adapt to how your senior living facility already operates, across Pennsylvania.',
  keywords: [
    'senior living staffing Pennsylvania',
    'housekeeping staffing senior care',
    'dietary aide staffing Pennsylvania',
    'companion caregiver staffing',
    'activities aide staffing',
    'laundry staffing senior living',
    'non-clinical staffing senior care',
    'senior care facility staffing',
    'assisted living staffing Pennsylvania',
    'operational staffing senior living',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fidend.com',
    siteName: 'Fidend Solutions',
    title: 'Fidend Solutions — Operational Staffing for Senior Living',
    description:
      'Flexible, operationally aligned staffing. Fidend staffs the roles that keep senior living homes running.',
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
    google: '3325be60005e41e3',
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
                'Operational staffing for senior living facilities in Pennsylvania. We place housekeepers, dietary aides, laundry attendants, activities aides, and companion caregivers.',
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
                'Housekeeping Staffing',
                'Dietary Aide Staffing',
                'Laundry Staffing',
                'Activities Aide Staffing',
                'Companion Care Staffing',
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
