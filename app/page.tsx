'use client'
import HeroVideo from '@/components/HeroVideo'
import FadeIn from '@/components/FadeIn'
import CountUp from '@/components/CountUp'
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
  { num: '01', title: 'Housekeeping',   es: 'Limpieza',           image: '/images/services/housekeeping.jpg' },
  { num: '02', title: 'Dietary',        es: 'Alimentación',       image: '/images/services/dietary.jpg' },
  { num: '03', title: 'Laundry',        es: 'Lavandería',         image: '/images/services/laundry.jpg' },
  { num: '04', title: 'Activities',     es: 'Actividades',        image: '/images/services/activities.jpg' },
  { num: '05', title: 'Companion Care', es: 'Cuidado y compañía', image: '/images/services/companion-care.jpg' },
]

export default function HomePage() {
  return (
    <>

      {/* ═══════════════════════════════════════════════════════════════
          HERO — navy, centered, cinematic — F-mark with breathing glow
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
              Reliable staff for the places people live, stay, and receive care.
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
                Five operational lines, one standard of flexibility. Every worker
                adapts to the house rules and standards of your facility from
                day one.
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
                  {/* Photo */}
                  <img
                    src={svc.image}
                    alt={svc.title}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 240ms ease-out',
                    }}
                  />

                  {/* Navy gradient for legibility */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(22,36,58,0.45) 0%, rgba(22,36,58,0.30) 40%, rgba(22,36,58,0.92) 100%)',
                    }}
                  />

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
          PROOF STRIP — 4 key differentiators
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
            { n: '5',       suffix: ' lines', label: 'Service disciplines',   sub: 'housekeeping through companion care' },
            { n: 'Open',    suffix: ' book',  label: 'Pricing method',        sub: 'worker rate + management fee, disclosed' },
            { n: 'Fixed',   suffix: '',       label: 'Markup methodology',    sub: 'same per hour, every role' },
            { n: '1 line',  suffix: '',       label: 'Direct to leadership',  sub: 'no rotating account rep' },
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
                  {s.n}<span style={{ fontSize: '0.55em', fontWeight: 300 }}>{s.suffix}</span>
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
