import type { Metadata } from 'next'
import HeroVideo from '@/components/HeroVideo'
import FadeIn from '@/components/FadeIn'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Fidend Solutions was built on a belief that operational staffing in senior care should be faithful, transparent, and permanent. Learn who we are.',
}

const VALUES = [
  {
    latin: 'Claridad',
    english: 'Clarity',
    body: "Every rate disclosed. Every worker's credentials documented. No surprises on the invoice or the floor.",
  },
  {
    latin: 'Estrategia',
    english: 'Strategy',
    body: 'Staffing gaps are operational problems. We solve them with structure rather than patches: the right worker, on the right shift, sustained over time.',
  },
  {
    latin: 'Resultados',
    english: 'Results',
    body: 'We measure ourselves by whether your facility runs better. Survey readiness. Resident continuity. DON peace of mind.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <HeroVideo
        overlayOpacity={0.68}
        minHeight="60svh"
        poster="/poster-hero.png"
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
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 15,
                lineHeight: 1.75,
                color: 'rgba(22,36,58,0.65)',
                margin: '0 0 20px',
              }}
            >
              Senior living is not a commodity market. The residents who live in
              your facility have earned a standard of care that doesn't bend to
              staffing gaps, surprise callouts, or workers who arrive without
              context. We named ourselves Fidend because we believe the word
              should mean something in operational staffing, not only in the
              care professions.
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
              Every worker we place is a representation of that commitment.
              Every invoice we issue is designed to honor it.
            </p>
          </FadeIn>

          {/* Right — pull quote */}
          <FadeIn delay={160}>
            <div
              style={{
                borderLeft: '3px solid #B89968',
                paddingLeft: 32,
              }}
            >
              <p
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontVariationSettings: "'SOFT' 30, 'opsz' 36",
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: 'clamp(1.3rem, 2.8vw, 2rem)',
                  color: '#16243A',
                  lineHeight: 1.35,
                  margin: '0 0 24px',
                }}
              >
                "The faithful house of care."
              </p>
              <p
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: 12,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(22,36,58,0.40)',
                  margin: 0,
                }}
              >
                Fidend Solutions tagline
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FOUNDER / ORIGIN ──────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#16243A',
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
          <FadeIn direction="left">
            <div
              style={{
                aspectRatio: '3/4',
                maxWidth: 400,
                border: '1px solid rgba(184,153,104,0.15)',
                overflow: 'hidden',
              }}
            >
              <img
                src="/images/founder.png"
                alt="Founder of Fidend Solutions"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </FadeIn>

          {/* Founder copy */}
          <FadeIn delay={140}>
            <p className="eyebrow" style={{ marginBottom: 16 }}>
              The Founder
            </p>
            <div
              style={{
                height: 1,
                backgroundColor: '#B89968',
                marginBottom: 28,
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
                margin: '0 0 24px',
              }}
            >
              Fidend was not built to disrupt staffing. It was built to fix it.
            </h2>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 15,
                lineHeight: 1.75,
                color: 'rgba(244,236,220,0.60)',
                margin: '0 0 20px',
              }}
            >
              The senior care staffing industry has a structural problem: it
              treats facilities as clients to be billed and workers as
              commodities to be dispatched. The result is high turnover, poor
              orientation, and invoices that obscure the economics of the
              relationship.
            </p>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 15,
                lineHeight: 1.75,
                color: 'rgba(244,236,220,0.60)',
                margin: '0 0 32px',
              }}
            >
              Fidend was founded to offer an alternative: a small, focused
              operation in Pennsylvania that places the right workers, discloses
              every number, and stays accountable to outcomes, not only
              placements.
            </p>
            <div
              style={{
                borderTop: '1px solid rgba(184,153,104,0.25)',
                paddingTop: 28,
              }}
            >
              <p
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontVariationSettings: "'SOFT' 30, 'opsz' 24",
                  fontWeight: 400,
                  fontSize: '1.1rem',
                  color: '#F4ECDC',
                  margin: '0 0 4px',
                }}
              >
                [Founder Name]
              </p>
              <p
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: 11,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#B89968',
                  margin: 0,
                }}
              >
                Founder & Principal · Fidend Solutions
              </p>
            </div>
          </FadeIn>
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
              <FadeIn key={val.latin} delay={i * 100}>
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
                    {val.latin}
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
                    {val.english}
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
            We work with a limited number of facilities at a time to maintain
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
