import type { Metadata } from 'next'
import HeroVideo from '@/components/HeroVideo'
import FadeIn from '@/components/FadeIn'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Fidend Solutions places operational staff for care facilities, residential communities, and hospitality properties in Pennsylvania. Learn who we are and how we work.',
}

const VALUES = [
  {
    title: 'Understanding',
    subtitle: 'Before We Recruit',
    body: 'We review the roles, the environment, the schedule, and the specific needs behind every opening before we begin the search.',
  },
  {
    title: 'Selection',
    subtitle: 'Not Just Availability',
    body: 'Every candidate is evaluated against the requirements of the role — not treated as an available body to be placed at speed.',
  },
  {
    title: 'Presence',
    subtitle: 'After Placement',
    body: 'Fidend remains a point of contact after placement. When adjustments are needed, we are available to address them directly.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <HeroVideo
        overlayOpacity={0.68}
        minHeight="60svh"
        poster="/poster-hero.jpg"
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 80px)',
          }}
        >
          <FadeIn delay={80}>
            <p
              className="eyebrow"
              style={{ color: 'rgba(184,153,104,0.85)', marginBottom: 16 }}
            >
              About
            </p>
            <div
              style={{
                height: 1,
                backgroundColor: '#B89968',
                maxWidth: 64,
                marginBottom: 28,
              }}
            />
          </FadeIn>
          <FadeIn delay={220}>
            <h1
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontVariationSettings: "'SOFT' 30, 'opsz' 72",
                fontWeight: 300,
                fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                lineHeight: 1.08,
                color: '#F4ECDC',
                maxWidth: '22ch',
                margin: '0 0 20px',
              }}
            >
              Built on the belief that faithful service is a profession.
            </h1>
          </FadeIn>
        </div>
      </HeroVideo>

      {/* ── NAME & ETYMOLOGY ──────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#F4ECDC',
          padding: 'clamp(64px, 10vw, 120px) clamp(24px, 6vw, 80px)',
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
          {/* Left */}
          <FadeIn direction="left">
            <p className="eyebrow" style={{ marginBottom: 16 }}>The Name</p>
            <div className="gold-rule" style={{ marginBottom: 28 }} />
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontVariationSettings: "'SOFT' 30, 'opsz' 48",
                fontWeight: 300,
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                color: '#16243A',
                lineHeight: 1.1,
                margin: '0 0 8px',
              }}
            >
              Fidend.
            </h2>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 11,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#B89968',
                margin: '0 0 24px',
              }}
            >
              From Latin <em>fidelis</em>: faithful, loyal, trustworthy.
            </p>
            {/* TODO: Brand copy needed — "The Name" opening paragraph. Current copy references "senior living" and "residents" exclusively. New copy should explain the Fidend name in the context of all three divisions (Care, Living, Hospitality). Product Lead to provide revised copy before this page is considered complete. */}
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 15,
                lineHeight: 1.75,
                color: 'rgba(22,36,58,0.65)',
                margin: 0,
              }}
            >
              Every worker we place is a representation of that commitment.
              Every invoice we issue is designed to honor it.
            </p>
          </FadeIn>

          {/* TODO: Pull quote needed — replace the removed "The faithful house of care." tagline with a quote that reflects the three-division brand. Product Lead to provide before this section is considered complete. */}
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#EDE3CF',
          padding: 'clamp(64px, 10vw, 120px) clamp(24px, 6vw, 80px)',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn style={{ maxWidth: 480, marginBottom: 'clamp(40px, 6vw, 72px)' }}>
            <p className="eyebrow" style={{ marginBottom: 16 }}>
              The Standard
            </p>
            <div className="gold-rule" style={{ marginBottom: 28 }} />
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontVariationSettings: "'SOFT' 30, 'opsz' 48",
                fontWeight: 300,
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                color: '#16243A',
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Three commitments. No exceptions.
            </h2>
          </FadeIn>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: 32,
            }}
          >
            {VALUES.map((val, i) => (
              <FadeIn key={val.title} delay={i * 100}>
                <div
                  style={{
                    backgroundColor: '#F4ECDC',
                    border: '1px solid rgba(22,36,58,0.08)',
                    padding: 32,
                    height: '100%',
                  }}
                >
                  <div
                    style={{
                      height: 1,
                      backgroundColor: '#B89968',
                      marginBottom: 24,
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontVariationSettings: "'SOFT' 30, 'opsz' 36",
                      fontWeight: 400,
                      fontSize: '1.5rem',
                      color: '#16243A',
                      margin: '0 0 4px',
                    }}
                  >
                    {val.title}
                  </p>
                  <p
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: 9,
                      fontWeight: 500,
                      letterSpacing: '0.3em',
                      textTransform: 'uppercase',
                      color: '#B89968',
                      margin: '0 0 20px',
                    }}
                  >
                    {val.subtitle}
                  </p>
                  <p
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: 14,
                      lineHeight: 1.65,
                      color: 'rgba(22,36,58,0.60)',
                      margin: 0,
                    }}
                  >
                    {val.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ───────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#16243A',
          padding: 'clamp(64px, 10vw, 120px) clamp(24px, 6vw, 80px)',
          textAlign: 'center',
        }}
      >
        <FadeIn style={{ maxWidth: 560, margin: '0 auto' }}>
          <div
            style={{
              height: 1,
              backgroundColor: '#B89968',
              maxWidth: 64,
              margin: '0 auto 32px',
            }}
          />
          <h2
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontVariationSettings: "'SOFT' 30, 'opsz' 48",
              fontWeight: 300,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              color: '#F4ECDC',
              lineHeight: 1.1,
              margin: '0 0 20px',
            }}
          >
            If the standard resonates, let's talk.
          </h2>
          <p
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: 15,
              lineHeight: 1.7,
              color: 'rgba(244,236,220,0.58)',
              margin: '0 0 36px',
            }}
          >
            We work with a limited number of clients at a time to maintain
            the quality our name requires.
          </p>
          <Link href="/contact" className="btn-primary">
            Request a Conversation
          </Link>
        </FadeIn>
      </section>
    </>
  )
}
