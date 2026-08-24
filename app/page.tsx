'use client'
import HeroVideo from '@/components/HeroVideo'
import FadeIn from '@/components/FadeIn'
import Link from 'next/link'

/* ─── Brand SVG ─────────────────────────────────────────────────────────── */
const FMARK = (
  <g fill="currentColor">
    <path d="M 196.00 41.00 L 178.00 26.00 L 176.00 26.00 L 173.00 23.00 L 171.00 23.00 L 161.00 17.00 L 158.00 17.00 L 156.00 15.00 L 150.00 14.00 L 147.00 12.00 L 137.00 11.00 L 133.00 9.00 L 122.00 9.00 L 121.00 8.00 L 101.00 9.00 L 98.00 11.00 L 92.00 11.00 L 91.00 12.00 L 87.00 12.00 L 85.00 14.00 L 78.00 15.00 L 76.00 17.00 L 71.00 18.00 L 69.00 20.00 L 65.00 21.00 L 55.00 27.00 L 41.00 38.00 L 26.00 56.00 L 26.00 58.00 L 24.00 59.00 L 23.00 63.00 L 18.00 70.00 L 17.00 75.00 L 15.00 77.00 L 14.00 83.00 L 12.00 86.00 L 11.00 95.00 L 9.00 99.00 L 9.00 130.00 L 11.00 135.00 L 12.00 144.00 L 21.00 165.00 L 26.00 173.00 L 39.00 189.00 L 41.00 190.00 L 41.00 150.00 L 38.00 146.00 L 38.00 143.00 L 36.00 141.00 L 35.00 134.00 L 33.00 130.00 L 33.00 124.00 L 32.00 123.00 L 33.00 95.00 L 39.00 76.00 L 41.00 74.00 L 44.00 66.00 L 58.00 47.00 L 77.00 32.00 L 79.00 32.00 L 81.00 30.00 L 96.00 23.00 L 103.00 22.00 L 107.00 20.00 L 122.00 19.00 L 123.00 18.00 L 142.00 19.00 L 143.00 20.00 L 149.00 20.00 L 157.00 23.00 L 160.00 23.00 L 180.00 33.00 L 195.00 44.00 L 205.00 55.00 L 211.00 63.00 L 211.00 65.00 L 213.00 65.00 L 206.00 53.00 Z" />
    <path d="M 119.00 149.00 L 118.00 148.00 L 82.00 148.00 L 81.00 149.00 L 83.00 152.00 L 83.00 169.00 L 82.00 170.00 L 82.00 175.00 L 81.00 176.00 L 81.00 180.00 L 80.00 181.00 L 80.00 184.00 L 79.00 185.00 L 79.00 187.00 L 78.00 188.00 L 78.00 190.00 L 77.00 191.00 L 77.00 193.00 L 74.00 198.00 L 74.00 200.00 L 72.00 202.00 L 72.00 203.00 L 71.00 204.00 L 71.00 205.00 L 69.00 207.00 L 68.00 210.00 L 64.00 214.00 L 64.00 215.00 L 59.00 220.00 L 59.00 221.00 L 57.00 223.00 L 56.00 223.00 L 56.00 224.00 L 55.00 225.00 L 54.00 225.00 L 47.00 231.00 L 44.00 232.00 L 44.00 233.00 L 43.00 234.00 L 41.00 234.00 L 40.00 235.00 L 39.00 235.00 L 37.00 237.00 L 35.00 237.00 L 34.00 238.00 L 32.00 238.00 L 30.00 240.00 L 27.00 240.00 L 26.00 241.00 L 22.00 241.00 L 19.00 243.00 L 9.00 243.00 L 8.00 244.00 L 32.00 244.00 L 33.00 243.00 L 40.00 243.00 L 41.00 242.00 L 43.00 242.00 L 44.00 241.00 L 47.00 241.00 L 48.00 240.00 L 51.00 240.00 L 54.00 238.00 L 56.00 238.00 L 57.00 237.00 L 59.00 237.00 L 60.00 236.00 L 61.00 236.00 L 62.00 235.00 L 63.00 235.00 L 64.00 234.00 L 65.00 234.00 L 66.00 233.00 L 67.00 233.00 L 68.00 232.00 L 71.00 231.00 L 73.00 229.00 L 74.00 229.00 L 77.00 226.00 L 78.00 226.00 L 81.00 223.00 L 82.00 223.00 L 86.00 219.00 L 87.00 219.00 L 87.00 218.00 L 88.00 217.00 L 89.00 217.00 L 91.00 214.00 L 92.00 214.00 L 92.00 213.00 L 95.00 210.00 L 95.00 209.00 L 100.00 204.00 L 101.00 201.00 L 104.00 198.00 L 104.00 196.00 L 106.00 194.00 L 107.00 191.00 L 109.00 189.00 L 109.00 187.00 L 110.00 186.00 L 110.00 184.00 L 112.00 182.00 L 112.00 180.00 L 113.00 179.00 L 113.00 176.00 L 115.00 173.00 L 115.00 170.00 L 116.00 169.00 L 116.00 164.00 L 117.00 163.00 L 117.00 161.00 L 118.00 160.00 L 118.00 151.00 L 119.00 150.00 Z" />
    <path d="M 81.00 119.00 L 158.00 119.00 L 159.00 120.00 L 160.00 119.00 L 160.00 118.00 L 161.00 117.00 L 161.00 116.00 L 163.00 114.00 L 163.00 113.00 L 164.00 112.00 L 164.00 111.00 L 166.00 109.00 L 166.00 108.00 L 168.00 106.00 L 168.00 105.00 L 169.00 104.00 L 169.00 103.00 L 172.00 100.00 L 172.00 99.00 L 173.00 98.00 L 173.00 97.00 L 175.00 95.00 L 175.00 94.00 L 174.00 93.00 L 95.00 93.00 L 94.00 94.00 L 93.00 94.00 L 93.00 95.00 L 92.00 96.00 L 92.00 97.00 L 90.00 99.00 L 90.00 100.00 L 89.00 101.00 L 89.00 102.00 L 87.00 104.00 L 87.00 105.00 L 86.00 106.00 L 86.00 108.00 L 84.00 110.00 L 84.00 111.00 L 83.00 112.00 L 83.00 114.00 L 82.00 115.00 L 82.00 116.00 L 81.00 117.00 Z" />
  </g>
)

/* ─── Data ──────────────────────────────────────────────────────────────── */
const TRUST_PILLARS = [
  {
    title: 'Transparency',
    body: 'Clear communication around pricing, expectations, timelines, and challenges.',
  },
  {
    title: 'Adaptability',
    body: 'We learn how your operation works and adapt our process when reasonable — without losing the standards that define Fidend.',
  },
  {
    title: 'Presence',
    body: 'You know who to contact, who is responsible, and where to go when something needs attention.',
  },
]

const DIVISIONS = [
  {
    label: 'FIDEND CARE',
    sub: 'Senior Care Facilities',
    description:
      'Non-clinical operational staff for senior care environments where consistency, dignity, and dependable support matter every day.',
    href: '/care',
    cta: 'Explore Fidend Care',
  },
  {
    label: 'FIDEND LIVING',
    sub: 'Property Management & Residential Communities',
    description:
      'Full-time operational staff for residential communities that need to stay clean, maintained, and resident-ready.',
    href: '/living',
    cta: 'Explore Fidend Living',
  },
  {
    label: 'FIDEND HOSPITALITY',
    sub: 'Hotels, Resorts & Guest-Facing Properties',
    description:
      'Operational staff for hotels and hospitality properties where consistent service directly supports the guest experience.',
    href: '/hospitality',
    cta: 'Explore Fidend Hospitality',
  },
]

const MATRIX = [
  {
    division: 'Fidend Care',
    label: 'Care',
    href: '/care',
    services: ['Housekeeping', 'Cleaning Support', 'Dietary Aides', 'Laundry Attendants', 'Activities Assistants', 'Companion Support'],
  },
  {
    division: 'Fidend Living',
    label: 'Living',
    href: '/living',
    services: ['Janitorial Staff', 'Porter Services', 'Common Area Cleaning', 'Maintenance Helpers', 'Grounds Support'],
  },
  {
    division: 'Fidend Hospitality',
    label: 'Hospitality',
    href: '/hospitality',
    services: ['Housekeepers', 'Public Area Attendants', 'Laundry Attendants', 'Dishwashers & Stewards', 'Cooks & Prep Cooks', 'Maintenance Helpers'],
  },
]

const HOW_IT_WORKS = [
  {
    number: '01',
    title: 'Understand the need',
    body: 'We review the role, schedule, environment, expectations, and the specific needs behind the opening.',
  },
  {
    number: '02',
    title: 'Recruit with fit in mind',
    body: 'We evaluate candidates against the requirements of the role instead of treating every available worker as interchangeable.',
  },
  {
    number: '03',
    title: 'Make the placement',
    body: 'We connect the client with candidates whose experience, availability, and profile align with the opportunity.',
  },
  {
    number: '04',
    title: 'Stay connected',
    body: 'After placement, Fidend remains available for communication, adjustments, and issues that need attention.',
  },
]

const OPERATIONAL_GAPS = [
  {
    title: 'STAFFING GAPS',
    body: 'Open positions put additional pressure on the people already carrying the work.',
  },
  {
    title: 'TURNOVER',
    body: 'Constant replacement creates instability for teams and operations.',
  },
  {
    title: 'DISCONNECTED PROVIDERS',
    body: 'Staffing becomes harder when communication disappears after placement.',
  },
]

export default function HomePage() {
  return (
    <>

      {/* ═══════════════════════════════════════════════════════════════
          1. HERO — navy, cinematic, F-mark
      ═══════════════════════════════════════════════════════════════ */}
      <HeroVideo overlayOpacity={0.58} minHeight="100svh" id="top" poster="/poster-hero.jpg">
        {/* Decorative inner border */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 28,
            border: '1px solid rgba(184,153,104,0.18)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* Amber breathing glow */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '50%',
            top: '42%',
            transform: 'translate(-50%,-50%)',
            width: 520,
            height: 520,
            borderRadius: '50%',
            background: 'radial-gradient(ellipse at center, rgba(214,154,92,0.22) 0%, transparent 70%)',
            animation: 'breathe 8s ease-in-out infinite alternate',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        <div
          style={{
            maxWidth: 760,
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 48px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative',
            zIndex: 2,
          }}
        >
          {/* F-mark */}
          <FadeIn delay={0} direction="none">
            <svg
              width="88"
              height="100"
              viewBox="0 0 222 253"
              aria-hidden="true"
              style={{
                fill: '#B89968',
                display: 'block',
                margin: '0 auto',
                marginBottom: 36,
                animation: 'floatMark 8s ease-in-out infinite alternate',
              }}
            >
              {FMARK}
            </svg>
          </FadeIn>

          {/* FIDEND wordmark */}
          <FadeIn delay={80} direction="none">
            <div
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontVariationSettings: "'opsz' 72, 'SOFT' 30",
                fontWeight: 500,
                fontSize: 'clamp(3.2rem, 8vw, 6.5rem)',
                letterSpacing: '0.32em',
                marginLeft: '0.32em',
                color: '#F4ECDC',
                lineHeight: 1,
                textTransform: 'uppercase',
              }}
            >
              FIDEND
            </div>
          </FadeIn>

          {/* Gold rule */}
          <FadeIn delay={200} direction="none">
            <div
              style={{
                width: 130,
                height: 1,
                backgroundColor: '#B89968',
                margin: '28px auto',
              }}
            />
          </FadeIn>

          {/* Tagline — semantic H1 */}
          <FadeIn delay={280} direction="none">
            <h1
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontVariationSettings: "'SOFT' 80, 'opsz' 24",
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 'clamp(1rem, 2vw, 1.4rem)',
                color: '#D4B07A',
                margin: '0 0 28px',
                letterSpacing: '0.04em',
              }}
            >
              Operational staffing for distinguished places.
            </h1>
          </FadeIn>

          {/* Lede */}
          <FadeIn delay={360} direction="none">
            <p
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontVariationSettings: "'SOFT' 60, 'opsz' 24",
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 'clamp(1rem, 2vw, 1.35rem)',
                lineHeight: 1.6,
                color: 'rgba(244,236,220,0.68)',
                margin: '0 0 40px',
                maxWidth: '48ch',
              }}
            >
              Understanding your operation comes first.<br /><br />
              Then finding the right people.<br /><br />
              Then staying involved long after placement.
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={440} direction="none">
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href="/contact" className="btn-gold-fill" style={{ fontSize: 12, letterSpacing: '0.2em' }}>
                Request Staffing Support
              </Link>
              <Link href="#divisions" className="btn-primary" style={{ fontSize: 12, letterSpacing: '0.2em' }}>
                Explore Our Divisions
              </Link>
            </div>
          </FadeIn>

          {/* Division ticker */}
          <FadeIn delay={520} direction="none">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 12,
                marginTop: 40,
                flexWrap: 'wrap',
              }}
              aria-label="Our divisions"
            >
              {['Fidend Care', 'Fidend Living', 'Fidend Hospitality'].map((item, i, arr) => (
                <span key={item} style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
                  <span
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: 10,
                      fontWeight: 500,
                      letterSpacing: '0.32em',
                      textTransform: 'uppercase',
                      color: 'rgba(244,236,220,0.45)',
                    }}
                  >
                    {item}
                  </span>
                  {i < arr.length - 1 && (
                    <span style={{ color: 'rgba(184,153,104,0.35)', fontSize: 8 }}>·</span>
                  )}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* Meta */}
          <FadeIn delay={600} direction="none">
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 10,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'rgba(244,236,220,0.25)',
                marginTop: 28,
              }}
            >
              Pennsylvania · Est. MMXXVI
            </p>
          </FadeIn>
        </div>
      </HeroVideo>

      {/* ═══════════════════════════════════════════════════════════════
          2. OPERATIONAL UNDERSTANDING — dark cream, 3 problem items
      ═══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: '#EDE3CF',
          padding: 'clamp(80px, 12vw, 140px) clamp(24px, 6vw, 80px)',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <p className="eyebrow" style={{ color: 'rgba(22,36,58,0.5)', marginBottom: 14 }}>
              The Reality of Operations
            </p>
            <div style={{ height: 1, backgroundColor: '#B89968', maxWidth: 56, marginBottom: 28 }} />
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontVariationSettings: "'SOFT' 30, 'opsz' 48",
                fontWeight: 300,
                fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
                color: '#16243A',
                lineHeight: 1.08,
                margin: '0 0 24px',
              }}
            >
              When staffing falls short,<br />the operation feels it.
            </h2>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 15,
                lineHeight: 1.75,
                color: 'rgba(22,36,58,0.62)',
                maxWidth: '58ch',
                margin: '0 0 16px',
              }}
            >
              Vacancies don't stay isolated to a schedule. They create pressure on the people already carrying the work and affect the consistency of the operation.
            </p>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 15,
                lineHeight: 1.75,
                color: 'rgba(22,36,58,0.62)',
                maxWidth: '58ch',
                margin: '0 0 clamp(48px, 7vw, 72px)',
              }}
            >
              That's why Fidend starts by understanding the operation behind the opening — not just the position that needs to be filled.
            </p>
          </FadeIn>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'clamp(32px, 5vw, 56px)',
            }}
          >
            {OPERATIONAL_GAPS.map((item, i) => (
              <FadeIn key={item.title} delay={i * 100} direction="up">
                <div>
                  <div style={{ height: 1, backgroundColor: '#B89968', opacity: 0.5, marginBottom: 24 }} />
                  <p
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: '0.30em',
                      textTransform: 'uppercase',
                      color: '#B89968',
                      margin: '0 0 14px',
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: 15,
                      lineHeight: 1.75,
                      color: 'rgba(22,36,58,0.65)',
                      margin: 0,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          3. TRUST — parchment, 3 pillars
      ═══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: '#F4ECDC',
          padding: 'clamp(80px, 12vw, 140px) clamp(24px, 6vw, 80px)',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <p className="eyebrow" style={{ color: 'rgba(22,36,58,0.5)', marginBottom: 14 }}>
              Our Promise
            </p>
            <div style={{ height: 1, backgroundColor: '#B89968', maxWidth: 56, marginBottom: 28 }} />
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontVariationSettings: "'SOFT' 30, 'opsz' 48",
                fontWeight: 300,
                fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
                color: '#16243A',
                lineHeight: 1.08,
                margin: '0 0 20px',
              }}
            >
              Trust you can audit.
            </h2>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 15,
                lineHeight: 1.75,
                color: 'rgba(22,36,58,0.62)',
                maxWidth: '60ch',
                margin: '0 0 clamp(48px, 7vw, 72px)',
              }}
            >
              Good staffing is not only about filling a position. It is about understanding what the
              client needs, communicating clearly, and staying involved throughout the relationship.
            </p>
          </FadeIn>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 2,
            }}
          >
            {TRUST_PILLARS.map((pillar, i) => (
              <FadeIn key={pillar.title} delay={i * 100} direction="up">
                <div
                  style={{
                    padding: 'clamp(32px, 4vw, 48px)',
                    border: '1px solid rgba(22,36,58,0.10)',
                    backgroundColor: 'rgba(22,36,58,0.04)',
                    height: '100%',
                  }}
                >
                  <div
                    style={{
                      height: 1,
                      backgroundColor: '#B89968',
                      opacity: 0.5,
                      marginBottom: 28,
                    }}
                  />
                  <h3
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontVariationSettings: "'SOFT' 30, 'opsz' 24",
                      fontWeight: 400,
                      fontSize: '1.35rem',
                      color: '#16243A',
                      margin: '0 0 14px',
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: 'rgba(22,36,58,0.60)',
                      margin: 0,
                    }}
                  >
                    {pillar.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          4. DIVISIONS — navy, 3 premium cards
      ═══════════════════════════════════════════════════════════════ */}
      <section
        id="divisions"
        className="grain"
        style={{
          backgroundColor: '#16243A',
          padding: 'clamp(80px, 12vw, 140px) clamp(24px, 6vw, 80px)',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ marginBottom: 'clamp(48px, 7vw, 80px)' }}>
              <p className="eyebrow" style={{ marginBottom: 14 }}>Three Divisions</p>
              <div
                style={{
                  height: 1,
                  backgroundColor: '#B89968',
                  maxWidth: 56,
                  marginBottom: 24,
                }}
              />
              <h2
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontVariationSettings: "'SOFT' 30, 'opsz' 48",
                  fontWeight: 300,
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  color: '#F4ECDC',
                  lineHeight: 1.08,
                  margin: '0 0 16px',
                }}
              >
                Three divisions.<br />One operating standard.
              </h2>
              <p
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: 'rgba(244,236,220,0.50)',
                  maxWidth: '52ch',
                  margin: 0,
                }}
              >
                Dedicated staffing solutions for care, residential, and hospitality operations — each shaped around the needs of its environment.
              </p>
            </div>
          </FadeIn>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 2,
            }}
          >
            {DIVISIONS.map((div, i) => (
              <FadeIn key={div.label} delay={i * 100} direction="up">
                <Link
                  href={div.href}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 'clamp(32px, 4vw, 48px)',
                    border: '1px solid rgba(184,153,104,0.18)',
                    backgroundColor: 'rgba(244,236,220,0.04)',
                    textDecoration: 'none',
                    minHeight: 360,
                    transition: 'border-color 240ms ease-out, background-color 240ms ease-out',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'rgba(184,153,104,0.45)'
                    el.style.backgroundColor = 'rgba(244,236,220,0.07)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'rgba(184,153,104,0.18)'
                    el.style.backgroundColor = 'rgba(244,236,220,0.04)'
                  }}
                >
                  <div
                    style={{
                      height: 1,
                      backgroundColor: '#B89968',
                      opacity: 0.35,
                      marginBottom: 32,
                    }}
                  />

                  <p
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: '0.30em',
                      textTransform: 'uppercase',
                      color: '#B89968',
                      margin: '0 0 8px',
                    }}
                  >
                    {div.label}
                  </p>
                  <p
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: 12,
                      color: 'rgba(244,236,220,0.45)',
                      margin: '0 0 24px',
                      letterSpacing: '0.03em',
                    }}
                  >
                    {div.sub}
                  </p>

                  <h3
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontVariationSettings: "'SOFT' 30, 'opsz' 24",
                      fontWeight: 300,
                      fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                      color: '#F4ECDC',
                      lineHeight: 1.45,
                      margin: '0 0 28px',
                      flex: 1,
                    }}
                  >
                    {div.description}
                  </h3>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      color: '#B89968',
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: 11,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                    }}
                  >
                    <span>{div.cta}</span>
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path
                        d="M3 13L13 3M13 3H5M13 3v8"
                        stroke="#B89968"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          5. SERVICE MATRIX — cream, 3-column table
      ═══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: '#EDE3CF',
          padding: 'clamp(80px, 12vw, 140px) clamp(24px, 6vw, 80px)',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <p className="eyebrow" style={{ marginBottom: 14 }}>What We Staff</p>
            <div style={{ height: 1, backgroundColor: '#B89968', maxWidth: 56, marginBottom: 24 }} />
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontVariationSettings: "'SOFT' 30, 'opsz' 48",
                fontWeight: 300,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: '#16243A',
                lineHeight: 1.08,
                margin: '0 0 clamp(48px, 7vw, 72px)',
                maxWidth: '28ch',
              }}
            >
              The people behind the day-to-day operation.
            </h2>
          </FadeIn>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 2,
            }}
          >
            {MATRIX.map((col, i) => (
              <FadeIn key={col.label} delay={i * 100}>
                <div style={{ height: '100%' }}>
                  <Link
                    href={col.href}
                    style={{
                      display: 'block',
                      padding: '20px 24px',
                      backgroundColor: '#16243A',
                      marginBottom: 2,
                      textDecoration: 'none',
                      transition: 'background-color 200ms',
                    }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = '#1d2f4a')}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = '#16243A')}
                  >
                    <p
                      style={{
                        fontFamily: 'Inter, system-ui, sans-serif',
                        fontSize: 9,
                        fontWeight: 600,
                        letterSpacing: '0.30em',
                        textTransform: 'uppercase',
                        color: '#B89968',
                        margin: '0 0 4px',
                      }}
                    >
                      {col.division}
                    </p>
                    <p
                      style={{
                        fontFamily: 'Inter, system-ui, sans-serif',
                        fontSize: 12,
                        color: 'rgba(244,236,220,0.5)',
                        margin: 0,
                        letterSpacing: '0.05em',
                      }}
                    >
                      {col.label}
                    </p>
                  </Link>

                  <div
                    style={{
                      border: '1px solid rgba(22,36,58,0.10)',
                      backgroundColor: 'rgba(22,36,58,0.03)',
                    }}
                  >
                    {col.services.map((svc, j) => (
                      <div
                        key={svc}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 12,
                          padding: '13px 24px',
                          borderBottom:
                            j < col.services.length - 1
                              ? '1px solid rgba(22,36,58,0.08)'
                              : 'none',
                        }}
                      >
                        <div
                          style={{
                            width: 4,
                            height: 4,
                            borderRadius: '50%',
                            backgroundColor: '#B89968',
                            flexShrink: 0,
                            opacity: 0.7,
                          }}
                        />
                        <span
                          style={{
                            fontFamily: 'Inter, system-ui, sans-serif',
                            fontSize: 13,
                            color: 'rgba(22,36,58,0.70)',
                            lineHeight: 1.3,
                          }}
                        >
                          {svc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          6. HOW IT WORKS — navy, 4 steps
      ═══════════════════════════════════════════════════════════════ */}
      <section
        id="how-it-works"
        className="grain"
        style={{
          backgroundColor: '#16243A',
          padding: 'clamp(80px, 12vw, 140px) clamp(24px, 6vw, 80px)',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn style={{ maxWidth: 560, marginBottom: 'clamp(48px, 7vw, 80px)' }}>
            <p className="eyebrow" style={{ marginBottom: 16 }}>The Process</p>
            <div style={{ height: 1, backgroundColor: '#B89968', marginBottom: 28 }} />
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontVariationSettings: "'SOFT' 30, 'opsz' 48",
                fontWeight: 300,
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                color: '#F4ECDC',
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Staffing starts with understanding.
            </h2>
          </FadeIn>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: 40,
            }}
          >
            {HOW_IT_WORKS.map((step, i) => (
              <FadeIn key={step.number} delay={i * 90}>
                <p
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontVariationSettings: "'SOFT' 30, 'opsz' 72",
                    fontWeight: 300,
                    fontSize: '3rem',
                    color: '#B89968',
                    margin: '0 0 16px',
                    lineHeight: 1,
                  }}
                >
                  {step.number}
                </p>
                <div
                  style={{
                    height: 1,
                    backgroundColor: 'rgba(184,153,104,0.25)',
                    marginBottom: 20,
                  }}
                />
                <h3
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontVariationSettings: "'SOFT' 30, 'opsz' 24",
                    fontWeight: 400,
                    fontSize: '1.15rem',
                    color: '#F4ECDC',
                    margin: '0 0 12px',
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: 14,
                    lineHeight: 1.65,
                    color: 'rgba(244,236,220,0.55)',
                    margin: 0,
                  }}
                >
                  {step.body}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          7. CTA — navy, ornate border
      ═══════════════════════════════════════════════════════════════ */}
      <section
        id="contact"
        className="grain"
        style={{
          backgroundColor: '#16243A',
          padding: 'clamp(80px, 12vw, 160px) clamp(24px, 6vw, 80px)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative inner border */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 'clamp(16px, 3vw, 32px)',
            border: '1px solid rgba(184,153,104,0.12)',
            pointerEvents: 'none',
          }}
        />

        {/* Background F-mark */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: '-8%',
            bottom: '-12%',
            opacity: 0.025,
            pointerEvents: 'none',
          }}
        >
          <svg width="560" height="638" viewBox="0 0 222 253">
            {FMARK}
          </svg>
        </div>

        <FadeIn direction="scale">
          <div
            style={{
              maxWidth: 680,
              margin: '0 auto',
              textAlign: 'center',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <p className="eyebrow" style={{ marginBottom: 20 }}>Contact</p>
            <div
              style={{
                height: 1,
                backgroundColor: '#B89968',
                maxWidth: 48,
                margin: '0 auto 36px',
                opacity: 0.6,
              }}
            />
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontVariationSettings: "'SOFT' 30, 'opsz' 48",
                fontWeight: 300,
                fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                color: '#F4ECDC',
                lineHeight: 1.08,
                margin: '0 0 24px',
              }}
            >
              Let's discuss the roles<br />
              you need{' '}
              <em
                style={{
                  fontStyle: 'italic',
                  fontVariationSettings: "'SOFT' 60, 'opsz' 48",
                  color: '#B89968',
                }}
              >
                covered.
              </em>
            </h2>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 15,
                lineHeight: 1.72,
                color: 'rgba(244,236,220,0.52)',
                margin: '0 0 44px',
              }}
            >
              Whether you manage a care facility, residential property, or hospitality operation,
              Fidend helps you cover essential service roles with clarity, transparency, and
              direct support.
            </p>
            <div
              style={{
                display: 'flex',
                gap: 20,
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginBottom: 40,
              }}
            >
              <Link href="/contact" className="btn-primary">
                Request Staffing Support
              </Link>
              <Link href="/contact#apply" className="btn-primary">
                Apply to Work With Us
              </Link>
            </div>

            <div
              style={{
                borderTop: '1px solid rgba(184,153,104,0.15)',
                paddingTop: 32,
              }}
            >
              <p
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: 12,
                  color: 'rgba(244,236,220,0.40)',
                  letterSpacing: '0.08em',
                  marginBottom: 12,
                }}
              >
                Daniel Zapata · CEO
              </p>
              <div
                style={{
                  display: 'flex',
                  gap: 24,
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <a
                  href="tel:+12162589368"
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: 13,
                    color: 'rgba(244,236,220,0.60)',
                    textDecoration: 'none',
                    letterSpacing: '0.05em',
                  }}
                >
                  216-258-9368
                </a>
                <a
                  href="mailto:daniel@fidend.com"
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: 13,
                    color: 'rgba(244,236,220,0.60)',
                    textDecoration: 'none',
                    letterSpacing: '0.05em',
                  }}
                >
                  daniel@fidend.com
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

    </>
  )
}
