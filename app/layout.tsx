import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Fidend Solutions — Operational Staffing for Senior Living',
    template: '%s | Fidend Solutions',
  },
  description:
    'Fidend places TB-cleared, background-checked housekeepers, dietary aides, laundry attendants, activities aides, and companion caregivers in senior living homes across Pennsylvania.',
  keywords: [
    'senior living staffing',
    'housekeeping staffing Pennsylvania',
    'dietary aide staffing',
    'senior care workers',
    'facility staffing solutions',
    'companion caregivers Pennsylvania',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Fidend Solutions',
    title: 'Fidend Solutions — Operational Staffing for Senior Living',
    description:
      'TB-cleared. Background checked. Senior care oriented. Fidend staffs the roles that keep senior living homes running.',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ScrollProgress />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
