'use client'
import HeroVideo from '@/components/HeroVideo'
import FadeIn from '@/components/FadeIn'
import CountUp from '@/components/CountUp'
import Marquee from '@/components/Marquee'
import PricingTable from '@/components/PricingTable'
import Link from 'next/link'

/* ─── Shared brand SVG paths ────────────────────────────────────────────────── */
const FMARK = (
  <g fill="currentColor">
    <path d="M 196.00 41.00 L 178.00 26.00 L 176.00 26.00 L 173.00 23.00 L 171.00 23.00 L 161.00 17.00 L 158.00 17.00 L 156.00 15.00 L 150.00 14.00 L 147.00 12.00 L 137.00 11.00 L 133.00 9.00 L 122.00 9.00 L 121.00 8.00 L 101.00 9.00 L 98.00 11.00 L 92.00 11.00 L 91.00 12.00 L 87.00 12.00 L 85.00 14.00 L 78.00 15.00 L 76.00 17.00 L 71.00 18.00 L 69.00 20.00 L 65.00 21.00 L 55.00 27.00 L 41.00 38.00 L 26.00 56.00 L 26.00 58.00 L 24.00 59.00 L 23.00 63.00 L 18.00 70.00 L 17.00 75.00 L 15.00 77.00 L 14.00 83.00 L 12.00 86.00 L 11.00 95.00 L 9.00 99.00 L 9.00 130.00 L 11.00 135.00 L 12.00 144.00 L 21.00 165.00 L 26.00 173.00 L 39.00 189.00 L 41.00 190.00 L 41.00 150.00 L 38.00 146.00 L 38.00 143.00 L 36.00 141.00 L 35.00 134.00 L 33.00 130.00 L 33.00 124.00 L 32.00 123.00 L 33.00 95.00 L 39.00 76.00 L 41.00 74.00 L 44.00 66.00 L 58.00 47.00 L 77.00 32.00 L 79.00 32.00 L 81.00 30.00 L 96.00 23.00 L 103.00 22.00 L 107.00 20.00 L 122.00 19.00 L 123.00 18.00 L 142.00 19.00 L 143.00 20.00 L 149.00 20.00 L 157.00 23.00 L 160.00 23.00 L 180.00 33.00 L 195.00 44.00 L 205.00 55.00 L 211.00 63.00 L 211.00 65.00 L 213.00 65.00 L 206.00 53.00 Z" />
    <path d="M 119.00 149.00 L 118.00 148.00 L 82.00 148.00 L 81.00 149.00 L 83.00 152.00 L 83.00 169.00 L 82.00 170.00 L 82.00 175.00 L 81.00 176.00 L 81.00 180.00 L 80.00 181.00 L 80.00 184.00 L 79.00 185.00 L 79.00 187.00 L 78.00 188.00 L 78.00 190.00 L 77.00 191.00 L 77.00 193.00 L 74.00 198.00 L 74.00 200.00 L 72.00 202.00 L 72.00 203.00 L 71.00 204.00 L 71.00 205.00 L 69.00 207.00 L 68.00 210.00 L 64.00 214.00 L 64.00 215.00 L 59.00 220.00 L 59.00 221.00 L 57.00 223.00 L 56.00 223.00 L 56.00 224.00 L 55.00 225.00 L 54.00 225.00 L 47.00 231.00 L 44.00 232.00 L 44.00 233.00 L 43.00 234.00 L 41.00 234.00 L 40.00 235.00 L 39.00 235.00 L 37.00 237.00 L 35.00 237.00 L 34.00 238.00 L 32.00 238.00 L 30.00 240.00 L 27.00 240.00 L 26.00 241.00 L 22.00 241.00 L 19.00 243.00 L 9.00 243.00 L 8.00 244.00 L 32.00 244.00 L 33.00 243.00 L 40.00 243.00 L 41.00 242.00 L 43.00 242.00 L 44.00 241.00 L 47.00 241.00 L 48.00 240.00 L 51.00 240.00 L 54.00 238.00 L 56.00 238.00 L 57.00 237.00 L 59.00 237.00 L 60.00 236.00 L 61.00 236.00 L 62.00 235.00 L 63.00 235.00 L 64.00 234.00 L 65.00 234.00 L 66.00 233.00 L 67.00 233.00 L 68.00 232.00 L 71.00 231.00 L 73.00 229.00 L 74.00 229.00 L 77.00 226.00 L 78.00 226.00 L 81.00 223.00 L 82.00 223.00 L 86.00 219.00 L 87.00 219.00 L 87.00 218.00 L 88.00 217.00 L 89.00 217.00 L 91.00 214.00 L 92.00 214.00 L 92.00 213.00 L 95.00 210.00 L 95.00 209.00 L 100.00 204.00 L 101.00 201.00 L 104.00 198.00 L 104.00 196.00 L 106.00 194.00 L 107.00 191.00 L 109.00 189.00 L 109.00 187.00 L 110.00 186.00 L 110.00 184.00 L 112.00 182.00 L 112.00 180.00 L 113.00 179.00 L 113.00 176.00 L 115.00 173.00 L 115.00 170.00 L 116.00 169.00 L 116.00 164.00 L 117.00 163.00 L 117.00 161.00 L 118.00 160.00 L 118.00 151.00 L 119.00 150.00 Z" />
    <path d="M 81.00 119.00 L 158.00 119.00 L 159.00 120.00 L 160.00 119.00 L 160.00 118.00 L 161.00 117.00 L 161.00 116.00 L 163.00 114.00 L 163.00 113.00 L 164.00 112.00 L 164.00 111.00 L 166.00 109.00 L 166.00 108.00 L 168.00 106.00 L 168.00 105.00 L 169.00 104.00 L 169.00 103.00 L 172.00 100.00 L 172.00 99.00 L 173.00 98.00 L 173.00 97.00 L 175.00 95.00 L 175.00 94.00 L 174.00 93.00 L 95.00 93.00 L 94.00 94.00 L 93.00 94.00 L 93.00 95.00 L 92.00 96.00 L 92.00 97.00 L 90.00 99.00 L 90.00 100.00 L 89.00 101.00 L 89.00 102.00 L 87.00 104.00 L 87.00 105.00 L 86.00 106.00 L 86.00 108.00 L 84.00 110.00 L 84.00 111.00 L 83.00 112.00 L 83.00 114.00 L 82.00 115.00 L 82.00 116.00 L 81.00 117.00 Z" />
  </g>
)

const SERVICES = [
  { num: '01', title: 'Housekeeping',        es: 'Limpieza' },
  { num: '02', title: 'Dietary',             es: 'Alimentación' },
  { num: '03', title: 'Laundry',             es: 'Lavandería' },
  { num: '04', title: 'Activities',          es: 'Actividades' },
  { num: '05', title: 'Companion Care',      es: 'Cuidado y compañía' },
]

const VOICES = [
  {
    quote: "They answer the phone. Not an account rep — the founder. Three years in, the invoice still shows me exactly what the worker earns and what the management costs. That alone is rare.",
    emph: 'answer the phone',
    name: 'Maria Reyes',
    role: 'Administrator',
    venue: 'Hillside Senior Living',
    state: 'PA',
    since: '2023',
    initials: 'MR',
  },
  {
    quote: "Every Fidend worker arrived fully prepared — TB clearance, background, dementia orientation. I have not filed a single compliance correction in eighteen months. That is the whole story.",
    emph: 'fully prepared',
    name: 'James Margolis',
    role: 'Director',
    venue: 'Cedar Brook Residences',
    state: 'NJ',
    since: '2024',
    initials: 'JM',
  },
  {
    quote: "We had three vendors before Fidend. Two of them I never met in person. The Fidend founder walked the building on day one and writes back the same afternoon. It is a different kind of business.",
    emph: 'walked the building',
    name: 'Patricia Liang',
    role: 'Owner',
    venue: 'Magnolia Court',
    state: 'PA',
    since: '2025',
    initials: 'PL',
  },
]

const VALUES = [
  {
    roman: 'I',
    title: 'Attention',
    es: 'Atención',
    body: 'Every placement begins with listening. We learn the house before we staff it. Attention is how we earn the right to be present.',
  },
  {
    roman: 'II',
    title: 'Availability',
    es: 'Disponibilidad',
    body: 'Leadership answers. Not a queue, not a form. The founder is the point of contact on every contract, at every hour that care requires.',
  },
  {
    roman: 'III',
    title: 'Honesty',
    es: 'Honestidad',
    body: 'The invoice shows every number. The proposal names every cost. Nothing is bundled into opacity. Honesty is the methodology, not a policy.',
  },
  {
    roman: 'IV',
    title: 'Diligence',
    es: 'Diligencia',
    body: 'Compliance is not an upsell. Preparation is not optional. Workers arrive ready because readiness is what care requires before it can receive.',
  },
]

const FIVE_TRUTHS = [
  {
    n: '01',
    title: 'We listen first.',
    quote: 'Every engagement begins by understanding what your facility actually needs. Then we build the operation around that brief — not around our roster.',
  },
  {
    n: '02',
    title: 'Pre-oriented personnel.',
    quote: 'Every Fidend worker arrives with a prior orientation in senior care communication and dignity protocols. The full handover to your house rules happens on day one, on the floor.',
  },
  {
    n: '03',
    title: 'Compliance handled.',
    quote: 'Background checks, TB tests, and state clearances are all managed by us, not by you.',
  },
  {
    n: '04',
    title: 'Direct leadership access.',
    quote: 'You work directly with leadership — not a rotating account rep. Questions answered fast. Problems handled before they grow.',
  },
  {
    n: '05',
    title: 'Markup methodology.',
    quote: 'A fixed dollar fee per hour over verifiable worker cost. You always know exactly what we add, and what we do not.',
  },
]

export default function HomePage() {
  return (
    <>

      {/* ═══════════════════════════════════════════════════════════════
          HERO — navy, centered, cinematic — F-mark with breathing glow
      ═══════════════════════════════════════════════════════════════ */}
      <HeroVideo overlayOpacity={0.58} minHeight="100svh" id="top">
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

        {/* Amber breathing glow behind F-mark */}
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

        {/* Centered content */}
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
          {/* F-mark in gold */}
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

          {/* Tagline */}
          <FadeIn delay={280} direction="none">
            <p
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
              the faithful house of care
            </p>
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
                maxWidth: '42ch',
              }}
            >
              Care of distinguished places. We staff and run the non-clinical
              operations of senior living homes, multifamily residences, and the
              institutions that depend on them.
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={440} direction="none">
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href="#what" className="btn-gold-fill" style={{ fontSize: 12, letterSpacing: '0.2em' }}>
                See what we do
              </Link>
              <Link href="/contact" className="btn-primary" style={{ fontSize: 12, letterSpacing: '0.2em' }}>
                Request a proposal
              </Link>
            </div>
          </FadeIn>

          {/* Service ticker */}
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
              aria-label="Our services"
            >
              {['Housekeeping', 'Dietary', 'Laundry', 'Activities', 'Companion care'].map((item, i, arr) => (
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
          FRONTISPIECE — editorial opening, cream, opens like a book
      ═══════════════════════════════════════════════════════════════ */}
      <section
        className="grain"
        style={{
          backgroundColor: '#FAF1DA',
          minHeight: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'clamp(56px, 8vw, 96px) clamp(24px, 6vw, 80px)',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
        }}
      >
        {/* Amber radial glow */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '-5%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 700,
            height: 420,
            background: 'radial-gradient(ellipse at center, rgba(214,154,92,0.18) 0%, transparent 68%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 640, margin: '0 auto' }}>

          {/* Top ornament */}
          <FadeIn direction="none" delay={0}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 16,
                marginBottom: 32,
              }}
            >
              <div style={{ height: 1, width: 48, backgroundColor: '#B89968', opacity: 0.6 }} />
              <span style={{ color: '#B89968', fontSize: 9 }}>◇</span>
              <div style={{ height: 1, width: 48, backgroundColor: '#B89968', opacity: 0.6 }} />
            </div>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 9,
                fontWeight: 500,
                letterSpacing: '0.42em',
                textTransform: 'uppercase',
                color: 'rgba(22,36,58,0.40)',
                marginBottom: 64,
              }}
            >
              Volume One
            </p>
          </FadeIn>

          {/* Verse */}
          <FadeIn delay={200} direction="none">
            <p
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontVariationSettings: "'SOFT' 60, 'opsz' 72",
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 'clamp(2rem, 5vw, 3.8rem)',
                color: '#16243A',
                lineHeight: 1.15,
                margin: '0 0 28px',
                letterSpacing: '-0.01em',
              }}
            >
              To tend
            </p>
          </FadeIn>

          <FadeIn delay={420} direction="none">
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 'clamp(9px, 1.2vw, 11px)',
                fontWeight: 500,
                letterSpacing: '0.42em',
                textTransform: 'uppercase',
                color: '#B89968',
                margin: '0 0 28px',
              }}
            >
              — is to keep faith —
            </p>
          </FadeIn>

          <FadeIn delay={620} direction="none">
            <p
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontVariationSettings: "'SOFT' 60, 'opsz' 72",
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 'clamp(2rem, 5vw, 3.8rem)',
                color: '#16243A',
                lineHeight: 1.15,
                margin: '0 0 64px',
                letterSpacing: '-0.01em',
              }}
            >
              with the small hours.
            </p>
          </FadeIn>

          {/* Author block */}
          <FadeIn delay={820} direction="none">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 16,
                marginBottom: 12,
              }}
            >
              <div style={{ height: 1, width: 24, backgroundColor: '#B89968', opacity: 0.4 }} />
              <p
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontVariationSettings: "'SOFT' 80, 'opsz' 18",
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: 14,
                  color: 'rgba(22,36,58,0.40)',
                  margin: 0,
                }}
              >
                a meditation kept at the door
              </p>
              <div style={{ height: 1, width: 24, backgroundColor: '#B89968', opacity: 0.4 }} />
            </div>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'rgba(22,36,58,0.30)',
                margin: 0,
              }}
            >
              Fidend · Pennsylvania
            </p>
          </FadeIn>
        </div>

        {/* Turn-the-page cue */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: 36,
            left: '50%',
            animation: 'turnPage 2.6s ease-in-out infinite',
            pointerEvents: 'none',
          }}
        >
          <svg width="18" height="24" viewBox="0 0 18 24" fill="none">
            <path d="M2 2l7 7 7-7"  stroke="#B89968" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.3"/>
            <path d="M2 10l7 7 7-7" stroke="#B89968" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.65"/>
            <path d="M2 18l7 7 7-7" stroke="#B89968" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          MARQUEE — gold on navy
      ═══════════════════════════════════════════════════════════════ */}
      <div
        style={{
          backgroundColor: '#16243A',
          borderTop: '1px solid rgba(184,153,104,0.15)',
          borderBottom: '1px solid rgba(184,153,104,0.15)',
          paddingTop: 18,
          paddingBottom: 18,
        }}
      >
        <Marquee speed={38} />
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          WHAT WE DO — 5 vertical service cards, navy
      ═══════════════════════════════════════════════════════════════ */}
      <section
        id="what"
        className="grain"
        style={{
          backgroundColor: '#16243A',
          padding: 'clamp(64px, 10vw, 120px) clamp(24px, 6vw, 80px)',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ marginBottom: 'clamp(40px, 6vw, 64px)' }}>
              <p className="eyebrow" style={{ marginBottom: 14 }}>What Fidend does</p>
              <div style={{ height: 1, backgroundColor: '#B89968', maxWidth: 56, marginBottom: 24 }} />
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
                Five fronts of<br />daily care.
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
                Five operational lines, one standard of preparation. Every worker
                arrives with a prior orientation in senior care protocols, ready to
                learn the house rules of your facility.
              </p>
            </div>
          </FadeIn>

          {/* 5 vertical cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: 2,
            }}
          >
            {SERVICES.map((svc, i) => (
              <FadeIn key={svc.num} delay={i * 80} direction="up">
                <Link
                  href="/services"
                  style={{
                    display: 'block',
                    textDecoration: 'none',
                    position: 'relative',
                    aspectRatio: '3 / 4',
                    backgroundColor: i % 2 === 0 ? 'rgba(244,236,220,0.04)' : 'rgba(244,236,220,0.07)',
                    border: '1px solid rgba(184,153,104,0.12)',
                    overflow: 'hidden',
                    transition: 'transform 240ms ease-out, border-color 240ms ease-out',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'scale(1.02)'
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(184,153,104,0.40)'
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'scale(1)'
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(184,153,104,0.12)'
                  }}
                >
                  {/* Gold number */}
                  <p
                    style={{
                      position: 'absolute',
                      top: 20,
                      left: 20,
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontVariationSettings: "'SOFT' 30, 'opsz' 72",
                      fontWeight: 300,
                      fontSize: '2rem',
                      color: 'rgba(184,153,104,0.40)',
                      margin: 0,
                      lineHeight: 1,
                    }}
                  >
                    {svc.num}
                  </p>

                  {/* Arrow reveal */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 20,
                      right: 20,
                      opacity: 0,
                      transition: 'opacity 240ms ease-out',
                    }}
                    className="card-arrow"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 13L13 3M13 3H5M13 3v8" stroke="#B89968" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  {/* Bottom content */}
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 20px 24px' }}>
                    <div style={{ height: 1, backgroundColor: 'rgba(184,153,104,0.20)', marginBottom: 16 }} />
                    <h3
                      style={{
                        fontFamily: "'Fraunces', Georgia, serif",
                        fontVariationSettings: "'SOFT' 30, 'opsz' 24",
                        fontWeight: 400,
                        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                        color: '#F4ECDC',
                        margin: '0 0 6px',
                      }}
                    >
                      {svc.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Fraunces', Georgia, serif",
                        fontVariationSettings: "'SOFT' 80, 'opsz' 18",
                        fontStyle: 'italic',
                        fontWeight: 300,
                        fontSize: 12,
                        color: '#B89968',
                        margin: 0,
                        letterSpacing: '0.03em',
                      }}
                    >
                      {svc.es}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SEAL / PROMISE — cream, centered pull
      ═══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: '#F4ECDC',
          padding: 'clamp(80px, 12vw, 140px) clamp(24px, 6vw, 80px)',
          textAlign: 'center',
        }}
      >
        <FadeIn direction="scale">
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 20,
                marginBottom: 36,
              }}
            >
              <div style={{ height: 1, flex: 1, maxWidth: 80, backgroundColor: '#B89968', opacity: 0.5 }} />
              <span style={{ color: '#B89968', fontSize: 9 }}>◇</span>
              <div style={{ height: 1, flex: 1, maxWidth: 80, backgroundColor: '#B89968', opacity: 0.5 }} />
            </div>
            <p
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontVariationSettings: "'SOFT' 60, 'opsz' 48",
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                color: '#16243A',
                lineHeight: 1.2,
                margin: '0 0 28px',
              }}
            >
              We listen first.<br />
              <em style={{ color: '#B89968' }}>Then we make it possible.</em>
            </p>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'rgba(22,36,58,0.35)',
                margin: 0,
              }}
            >
              The Fidend Promise
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          PROOF STRIP — 4 stats
      ═══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: '#E8D6AF',
          padding: 'clamp(40px, 6vw, 64px) clamp(24px, 6vw, 80px)',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: 0,
          }}
        >
          {[
            { n: null, countTo: 4, suffix: ' wk', label: 'Standard fulfillment', sub: 'workers ready for your house' },
            { n: null, countTo: 100, suffix: '%', label: 'Compliance handled', sub: 'background, TB, state' },
            { n: 'Fixed', countTo: null, suffix: '', label: 'Markup methodology', sub: 'same per hour, every role' },
            { n: '1 line', countTo: null, suffix: '', label: 'Direct to leadership', sub: 'no rotating account rep' },
          ].map((s, i) => (
            <FadeIn key={s.label} delay={i * 80} direction="up">
              <div
                style={{
                  textAlign: 'center',
                  padding: 'clamp(24px, 4vw, 40px) 16px',
                  borderRight: i < 3 ? '1px solid rgba(22,36,58,0.10)' : 'none',
                }}
              >
                <p
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontVariationSettings: "'SOFT' 30, 'opsz' 72",
                    fontWeight: 300,
                    fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                    color: '#16243A',
                    margin: '0 0 4px',
                    lineHeight: 1,
                  }}
                >
                  {s.countTo !== null
                    ? <CountUp to={s.countTo} suffix={s.suffix} />
                    : s.n}
                </p>
                <p
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: 11,
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'rgba(22,36,58,0.60)',
                    margin: '0 0 3px',
                  }}
                >
                  {s.label}
                </p>
                <p
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: 10,
                    color: 'rgba(22,36,58,0.40)',
                    margin: 0,
                    fontStyle: 'italic',
                  }}
                >
                  {s.sub}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          VOICES / TESTIMONIALS — paper, 3-column
      ═══════════════════════════════════════════════════════════════ */}
      <section
        id="voices"
        className="grain"
        style={{
          backgroundColor: '#FAF1DA',
          padding: 'clamp(80px, 12vw, 140px) clamp(24px, 6vw, 80px)',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                flexWrap: 'wrap',
                gap: 24,
                marginBottom: 'clamp(48px, 7vw, 80px)',
              }}
            >
              <div>
                <p className="eyebrow-navy" style={{ marginBottom: 14 }}>Voices</p>
                <div className="gold-rule" style={{ marginBottom: 24 }} />
                <h2
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontVariationSettings: "'SOFT' 30, 'opsz' 48",
                    fontWeight: 300,
                    fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)',
                    color: '#16243A',
                    lineHeight: 1.1,
                    margin: 0,
                  }}
                >
                  The people we work for,<br />in their own words.
                </h2>
              </div>
              <p
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: 'rgba(22,36,58,0.35)',
                  margin: 0,
                }}
              >
                Verified clients
              </p>
            </div>
          </FadeIn>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 24,
            }}
          >
            {VOICES.map((v, i) => (
              <FadeIn key={v.name} delay={i * 100} direction="up">
                <div
                  style={{
                    backgroundColor: '#F6ECD4',
                    border: '1px solid rgba(22,36,58,0.10)',
                    padding: 'clamp(28px, 4vw, 40px)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 28,
                    height: '100%',
                    transition: 'box-shadow 240ms ease-out, transform 240ms ease-out',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(22,36,58,0.09)'
                    ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none'
                    ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                  }}
                >
                  {/* Quote mark */}
                  <p
                    aria-hidden="true"
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontVariationSettings: "'SOFT' 30, 'opsz' 144",
                      fontWeight: 300,
                      fontSize: 80,
                      color: '#B89968',
                      lineHeight: 0.6,
                      margin: 0,
                      opacity: 0.7,
                    }}
                  >
                    &#8220;
                  </p>

                  {/* Quote */}
                  <p
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontVariationSettings: "'SOFT' 60, 'opsz' 18",
                      fontStyle: 'italic',
                      fontWeight: 300,
                      fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
                      lineHeight: 1.55,
                      color: '#16243A',
                      margin: 0,
                      flexGrow: 1,
                    }}
                    dangerouslySetInnerHTML={{
                      __html: v.quote.replace(
                        v.emph,
                        `<em style="font-variation-settings:'SOFT' 80,'opsz' 18;color:#A88A4B">${v.emph}</em>`
                      ),
                    }}
                  />

                  {/* Bottom */}
                  <div>
                    <div style={{ height: 1, backgroundColor: 'rgba(22,36,58,0.10)', marginBottom: 20 }} />

                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                      {/* Avatar */}
                      <div
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #B7714A 0%, #B89968 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: 'Inter, system-ui, sans-serif',
                            fontSize: 12,
                            fontWeight: 600,
                            color: '#FAF1DA',
                            letterSpacing: '0.04em',
                          }}
                        >
                          {v.initials}
                        </span>
                      </div>

                      <div>
                        <p
                          style={{
                            fontFamily: "'Fraunces', Georgia, serif",
                            fontVariationSettings: "'SOFT' 30, 'opsz' 18",
                            fontWeight: 400,
                            fontSize: 15,
                            color: '#16243A',
                            margin: '0 0 2px',
                          }}
                        >
                          {v.name}
                        </p>
                        <p
                          style={{
                            fontFamily: 'Inter, system-ui, sans-serif',
                            fontSize: 11,
                            color: 'rgba(22,36,58,0.50)',
                            margin: '0 0 4px',
                          }}
                        >
                          {v.role} · {v.venue} · {v.state}
                        </p>
                        <p
                          style={{
                            fontFamily: 'Inter, system-ui, sans-serif',
                            fontSize: 10,
                            fontWeight: 500,
                            letterSpacing: '0.15em',
                            color: '#B89968',
                            margin: 0,
                          }}
                        >
                          {'★★★★★'} &nbsp;·&nbsp; Since {v.since}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          METHODOLOGY / PROCESS — cream-2
      ═══════════════════════════════════════════════════════════════ */}
      <section
        id="method"
        style={{
          backgroundColor: '#F0E3C5',
          padding: 'clamp(72px, 11vw, 128px) clamp(24px, 6vw, 80px)',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ maxWidth: 520, marginBottom: 'clamp(48px, 7vw, 72px)' }}>
              <p className="eyebrow-navy" style={{ marginBottom: 14 }}>Methodology</p>
              <div className="gold-rule" style={{ marginBottom: 24 }} />
              <h2
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontVariationSettings: "'SOFT' 30, 'opsz' 48",
                  fontWeight: 300,
                  fontSize: 'clamp(1.9rem, 3.8vw, 3rem)',
                  color: '#16243A',
                  lineHeight: 1.08,
                  margin: '0 0 16px',
                }}
              >
                From inquiry to first shift,<br />in three to four weeks.
              </h2>
              <p
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: 'rgba(22,36,58,0.55)',
                  margin: '0 0 24px',
                }}
              >
                Predictable fulfillment, because we never pull workers off a temporary roster.
                Every placement is built with intention.
              </p>
              <p
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontVariationSettings: "'SOFT' 60, 'opsz' 18",
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: 15,
                  color: '#B89968',
                  borderLeft: '2px solid #B89968',
                  paddingLeft: 16,
                  margin: 0,
                }}
              >
                "We bill at the rate we promised, period."
              </p>
            </div>
          </FadeIn>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: 'clamp(32px, 5vw, 48px)',
            }}
          >
            {[
              { n: '01', title: 'Discovery', body: 'A working conversation with leadership. We listen for the real operational need — not the pitch we want to give.' },
              { n: '02', title: 'Written proposal', body: 'Within five business days. Roles, hours, worker rate, burden, and the Fidend markup. Every number in writing.' },
              { n: '03', title: 'Preparation', body: 'Background checks. TB clearance. State requirements. Prior orientation in senior care protocols. Nothing skipped.' },
              { n: '04', title: 'Placement & presence', body: "Workers arrive in uniform on day one. Leadership remains your direct line — never a rotating account rep." },
            ].map((step, i) => (
              <FadeIn key={step.n} delay={i * 90} direction="up">
                <div>
                  <p
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontVariationSettings: "'SOFT' 30, 'opsz' 72",
                      fontWeight: 300,
                      fontSize: '2.5rem',
                      color: '#B89968',
                      margin: '0 0 20px',
                      lineHeight: 1,
                      opacity: 0.5,
                    }}
                  >
                    {step.n}
                  </p>
                  <div style={{ height: 1, backgroundColor: 'rgba(22,36,58,0.12)', marginBottom: 20 }} />
                  <h3
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontVariationSettings: "'SOFT' 30, 'opsz' 24",
                      fontWeight: 400,
                      fontSize: '1.15rem',
                      color: '#16243A',
                      margin: '0 0 12px',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: 14,
                      lineHeight: 1.68,
                      color: 'rgba(22,36,58,0.55)',
                      margin: 0,
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          VALUES — cream, 4-column Roman numeral grid
      ═══════════════════════════════════════════════════════════════ */}
      <section
        id="values"
        style={{
          backgroundColor: '#F6ECD4',
          padding: 'clamp(72px, 11vw, 128px) clamp(24px, 6vw, 80px)',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ maxWidth: 560, marginBottom: 'clamp(48px, 7vw, 72px)' }}>
              <p className="eyebrow-navy" style={{ marginBottom: 14 }}>Values</p>
              <div className="gold-rule" style={{ marginBottom: 24 }} />
              <h2
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontVariationSettings: "'SOFT' 30, 'opsz' 48",
                  fontWeight: 300,
                  fontSize: 'clamp(1.9rem, 3.8vw, 3rem)',
                  color: '#16243A',
                  lineHeight: 1.08,
                  margin: '0 0 16px',
                }}
              >
                Not marketing words.<br />Operating rules.
              </h2>
              <p
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: 'rgba(22,36,58,0.55)',
                  margin: 0,
                }}
              >
                These are how the company runs every day, with every client and
                every worker. They show up in invoices, response times, and the
                people we place.
              </p>
            </div>
          </FadeIn>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: 2,
            }}
          >
            {VALUES.map((v, i) => (
              <FadeIn key={v.title} delay={i * 80} direction="up">
                <div
                  style={{
                    padding: 'clamp(28px, 4vw, 40px)',
                    border: '1px solid rgba(22,36,58,0.08)',
                    height: '100%',
                  }}
                >
                  {/* Roman numeral */}
                  <p
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontVariationSettings: "'SOFT' 30, 'opsz' 72",
                      fontWeight: 300,
                      fontSize: '2rem',
                      color: '#B89968',
                      margin: '0 0 20px',
                      lineHeight: 1,
                      opacity: 0.55,
                    }}
                  >
                    {v.roman}
                  </p>

                  <div style={{ height: 1, backgroundColor: '#B89968', opacity: 0.3, marginBottom: 20 }} />

                  <h3
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontVariationSettings: "'SOFT' 30, 'opsz' 24",
                      fontWeight: 400,
                      fontSize: '1.25rem',
                      color: '#16243A',
                      margin: '0 0 4px',
                    }}
                  >
                    {v.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontVariationSettings: "'SOFT' 80, 'opsz' 18",
                      fontStyle: 'italic',
                      fontWeight: 300,
                      fontSize: 12,
                      color: '#B89968',
                      margin: '0 0 16px',
                    }}
                  >
                    {v.es}
                  </p>
                  <p
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: 14,
                      lineHeight: 1.68,
                      color: 'rgba(22,36,58,0.55)',
                      margin: 0,
                    }}
                  >
                    {v.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FIVE TRUTHS — deep navy #101a2c
      ═══════════════════════════════════════════════════════════════ */}
      <section
        id="truths"
        className="grain"
        style={{
          backgroundColor: '#101a2c',
          padding: 'clamp(72px, 11vw, 128px) clamp(24px, 6vw, 80px)',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ maxWidth: 480, marginBottom: 'clamp(48px, 7vw, 72px)' }}>
              <p className="eyebrow" style={{ marginBottom: 14 }}>The five truths we repeat</p>
              <div style={{ height: 1, backgroundColor: '#B89968', marginBottom: 24 }} />
              <h2
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontVariationSettings: "'SOFT' 30, 'opsz' 48",
                  fontWeight: 300,
                  fontSize: 'clamp(1.9rem, 3.8vw, 3rem)',
                  color: '#F4ECDC',
                  lineHeight: 1.08,
                  margin: '0 0 16px',
                }}
              >
                What we say,<br />in every conversation.
              </h2>
              <p
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: 'rgba(244,236,220,0.42)',
                  margin: 0,
                }}
              >
                These five sentences appear, in some form, in every proposal,
                every conversation, every administrator email.
              </p>
            </div>
          </FadeIn>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {FIVE_TRUTHS.map((t, i) => (
              <FadeIn key={t.n} delay={i * 80} direction="up">
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '64px 1fr',
                    gap: 'clamp(20px, 4vw, 40px)',
                    padding: 'clamp(28px, 4vw, 40px) 0',
                    borderBottom: i < FIVE_TRUTHS.length - 1
                      ? '1px solid rgba(244,236,220,0.06)'
                      : 'none',
                    alignItems: 'start',
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontVariationSettings: "'SOFT' 30, 'opsz' 72",
                      fontWeight: 300,
                      fontSize: '2rem',
                      color: '#B89968',
                      margin: 0,
                      lineHeight: 1,
                      opacity: 0.4,
                    }}
                  >
                    {t.n}
                  </p>
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Fraunces', Georgia, serif",
                        fontVariationSettings: "'SOFT' 30, 'opsz' 24",
                        fontWeight: 400,
                        fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                        color: '#F4ECDC',
                        margin: '0 0 16px',
                      }}
                    >
                      {t.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'Inter, system-ui, sans-serif',
                        fontSize: 14,
                        lineHeight: 1.7,
                        color: 'rgba(244,236,220,0.50)',
                        margin: 0,
                        borderLeft: '2px solid rgba(184,153,104,0.35)',
                        paddingLeft: 16,
                        maxWidth: '60ch',
                      }}
                    >
                      &#8220;{t.quote}&#8221;
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          LITERARY INTERLUDE — navy, ornate borders, Jefferson quote
      ═══════════════════════════════════════════════════════════════ */}
      <section
        aria-label="Interlude"
        style={{
          backgroundColor: '#16243A',
          padding: 'clamp(80px, 12vw, 160px) clamp(24px, 6vw, 80px)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Amber wash */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            width: 800,
            height: 600,
            background: 'radial-gradient(ellipse at center, rgba(214,154,92,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Decorative inner border */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 'clamp(16px, 3vw, 32px)',
            border: '1px solid rgba(184,153,104,0.14)',
            pointerEvents: 'none',
          }}
        />

        <FadeIn direction="scale">
          <div
            style={{
              maxWidth: 800,
              margin: '0 auto',
              textAlign: 'center',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {/* Marker */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 16,
                marginBottom: 48,
              }}
            >
              <div style={{ height: 1, width: 40, backgroundColor: '#B89968', opacity: 0.4 }} />
              <span
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: 9,
                  fontWeight: 500,
                  letterSpacing: '0.42em',
                  textTransform: 'uppercase',
                  color: 'rgba(184,153,104,0.50)',
                }}
              >
                Interlude
              </span>
              <div style={{ height: 1, width: 40, backgroundColor: '#B89968', opacity: 0.4 }} />
            </div>

            <blockquote
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontVariationSettings: "'SOFT' 60, 'opsz' 72",
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)',
                lineHeight: 1.22,
                color: '#F4ECDC',
                margin: '0 0 40px',
                letterSpacing: '-0.01em',
              }}
            >
              &#8220;The care of human life and happiness{' '}
              <em
                style={{
                  fontVariationSettings: "'SOFT' 80, 'opsz' 72",
                  color: '#B89968',
                }}
              >
                is the first &amp; only legitimate object
              </em>{' '}
              of good government — and of every house that stands for something.&#8221;
            </blockquote>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 16,
              }}
            >
              <div style={{ width: 24, height: 1, backgroundColor: '#B89968', opacity: 0.4 }} />
              <p
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontVariationSettings: "'SOFT' 80, 'opsz' 18",
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: 13,
                  color: 'rgba(184,153,104,0.55)',
                  margin: 0,
                }}
              >
                after Thomas Jefferson, 1809
              </p>
              <div style={{ width: 24, height: 1, backgroundColor: '#B89968', opacity: 0.4 }} />
            </div>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 10,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'rgba(184,153,104,0.30)',
                margin: '12px 0 0',
              }}
            >
              Read aloud in the founder&#39;s office, every quarter
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          PRICING — cream, open book
      ═══════════════════════════════════════════════════════════════ */}
      <section
        id="pricing"
        style={{
          backgroundColor: '#F4ECDC',
          padding: 'clamp(72px, 11vw, 128px) clamp(24px, 6vw, 80px)',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(48px, 8vw, 96px)',
            alignItems: 'center',
          }}
        >
          <FadeIn direction="left">
            <PricingTable variant="cream" />
          </FadeIn>

          <FadeIn delay={140} direction="right">
            <p className="eyebrow-navy" style={{ marginBottom: 14 }}>Markup, not margin games.</p>
            <div className="gold-rule" style={{ marginBottom: 24 }} />
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontVariationSettings: "'SOFT' 30, 'opsz' 48",
                fontWeight: 300,
                fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)',
                color: '#16243A',
                lineHeight: 1.1,
                margin: '0 0 20px',
              }}
            >
              You see the worker rate.<br />You see our fee.<br />That is the invoice.
            </h2>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 15,
                lineHeight: 1.75,
                color: 'rgba(22,36,58,0.58)',
                margin: '0 0 32px',
              }}
            >
              Our pricing follows one rule across every role, every shift, and every
              renewal. A fixed dollar markup over the verifiable worker cost. You
              always know what we add, and what we do not.
            </p>
            <Link href="/contact" className="btn-primary-navy">
              Request a rate sheet
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FOUNDER'S LETTER — paper, wax seal, drop cap
      ═══════════════════════════════════════════════════════════════ */}
      <section
        id="letter"
        className="grain"
        style={{
          backgroundColor: '#FAF1DA',
          padding: 'clamp(72px, 11vw, 128px) clamp(24px, 6vw, 80px)',
          position: 'relative',
        }}
      >
        {/* Warm radial top-right */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '-5%',
            right: '-5%',
            width: 500,
            height: 400,
            background: 'radial-gradient(ellipse at center, rgba(214,154,92,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            maxWidth: 800,
            margin: '0 auto',
            position: 'relative',
          }}
        >
          {/* Wax seal — desktop only */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: -16,
              right: 0,
              zIndex: 2,
            }}
            className="hidden lg:block"
          >
            <div className="wax-seal">
              <span className="wax-seal-f">F</span>
            </div>
          </div>

          {/* Header ornament */}
          <FadeIn direction="none">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                marginBottom: 32,
              }}
            >
              <div style={{ height: 1, width: 32, backgroundColor: '#B89968', opacity: 0.5 }} />
              <span style={{ color: '#B89968', fontSize: 8 }}>◇</span>
              <p
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: 9,
                  fontWeight: 500,
                  letterSpacing: '0.42em',
                  textTransform: 'uppercase',
                  color: 'rgba(22,36,58,0.40)',
                  margin: 0,
                }}
              >
                A note from the founder
              </p>
            </div>

            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontVariationSettings: "'SOFT' 30, 'opsz' 48",
                fontWeight: 300,
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                color: '#16243A',
                lineHeight: 1.1,
                margin: '0 0 40px',
              }}
            >
              I built Fidend the way I would{' '}
              <em
                style={{
                  fontStyle: 'italic',
                  fontVariationSettings: "'SOFT' 80, 'opsz' 48",
                  color: '#B89968',
                }}
              >
                want a stranger
              </em>{' '}
              to care for my mother.
            </h2>
          </FadeIn>

          <FadeIn delay={120} direction="none">
            <div
              style={{ height: 1, backgroundColor: 'rgba(22,36,58,0.10)', marginBottom: 36 }}
            />

            {/* Paragraph 1 — drop cap */}
            <p
              className="drop-cap"
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 16,
                lineHeight: 1.8,
                color: 'rgba(22,36,58,0.72)',
                margin: '0 0 24px',
              }}
            >
              When my grandmother moved into senior living, the vendor who handled
              housekeeping never met our family. The invoice was opaque. The same
              person never came twice. I do not blame them — that is how the industry
              was built. But it is not how care should feel.
            </p>

            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 16,
                lineHeight: 1.8,
                color: 'rgba(22,36,58,0.72)',
                margin: '0 0 24px',
              }}
            >
              Fidend exists because administrators deserve a partner who answers the
              phone, sends one worker by name, and writes the cost on the invoice
              without hiding behind language. We are small on purpose. We will stay
              small until we cannot keep that promise at scale — and then we will
              grow only as fast as the promise holds.
            </p>

            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 16,
                lineHeight: 1.8,
                color: 'rgba(22,36,58,0.72)',
                margin: '0 0 48px',
              }}
            >
              If you run a building where people live with dignity, I want to hear
              from you. Not through a form — through a phone call.
            </p>

            {/* Signature row */}
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
              <div>
                <p
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontVariationSettings: "'SOFT' 80, 'opsz' 144",
                    fontStyle: 'italic',
                    fontWeight: 300,
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    color: '#16243A',
                    margin: '0 0 4px',
                    transform: 'rotate(-3deg)',
                    display: 'inline-block',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Fidend
                </p>
                <p
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: 10,
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: 'rgba(22,36,58,0.35)',
                    margin: 0,
                  }}
                >
                  Pennsylvania / Spring · MMXXVI
                </p>
              </div>
              <Link href="/contact" className="btn-primary-navy">
                Speak with us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CTA — navy, ornate border
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

        {/* Background F mark */}
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
          <svg width="560" height="638" viewBox="0 0 222 253">{FMARK}</svg>
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
              One call.<br />
              One proposal.{' '}
              <em
                style={{
                  fontStyle: 'italic',
                  fontVariationSettings: "'SOFT' 60, 'opsz' 48",
                  color: '#B89968',
                }}
              >
                One promise.
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
              One conversation. A written proposal within five business days.
              Every number on the page before anything is agreed.
            </p>
            <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary">
                Request a conversation
              </Link>
              <Link href="/contact#apply" className="btn-primary">
                Apply to work with us
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

    </>
  )
}
