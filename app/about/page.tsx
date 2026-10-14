import type { Metadata } from 'next'
import HeroVideo from '@/components/HeroVideo'
import FadeIn from '@/components/FadeIn'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Fidend — How We Approach Staffing',
  description:
    'Fidend Solutions provides full-time operational staffing for care communities, residential properties, and hospitality operations. Learn why we built Fidend and how we work.',
}

const VALUES = [
  {
    title: 'Understand the Opening',
    subtitle: 'Before we recruit',
    body: 'We want to know what the person will actually be doing, what the schedule looks like, and what your team expects from the role before we start looking for candidates.',
  },
  {
    title: 'Fit Before Speed',
    subtitle: "Not just who's available",
    body: "We don't want to send someone simply because they're available. We recruit for the opening. If we haven't found the right person yet, we'll tell you.",
  },
  {
    title: 'Stay Involved',
    subtitle: 'After placement',
    body: "Our responsibility doesn't end when someone starts. If there's a staffing question, a payroll issue, or something isn't working with a placement, you have someone at Fidend to call.",
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
              About Fidend
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
              We built Fidend around the problems we saw in staffing.
            </h1>
          </FadeIn>
          <FadeIn delay={340}>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 'clamp(14px, 1.6vw, 16px)',
                lineHeight: 1.65,
                color: 'rgba(244,236,220,0.68)',
                maxWidth: '48ch',
                margin: '0 0 16px',
              }}
            >
              A staffing company should do more than send someone when a position
              opens. It should understand the job, be clear about what it can
              deliver, and stay involved after someone starts.
            </p>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 'clamp(14px, 1.6vw, 16px)',
                lineHeight: 1.65,
                color: 'rgba(244,236,220,0.68)',
                maxWidth: '48ch',
                margin: 0,
              }}
            >
              That is the kind of staffing company we're building.
            </p>
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
              Inspired by the Latin <em>fidelis</em>: faithful, loyal, trustworthy.
            </p>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 15,
                lineHeight: 1.75,
                color: 'rgba(22,36,58,0.65)',
                margin: '0 0 16px',
              }}
            >
              For us, the name comes down to being dependable in the part
              of the relationship we own.
            </p>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 15,
                lineHeight: 1.75,
                color: 'rgba(22,36,58,0.65)',
                margin: '0 0 16px',
              }}
            >
              That means understanding the opening before we recruit, being
              straightforward when we haven't found the right person yet,
              keeping pricing clear, and being available when a staffing,
              payroll, or billing issue needs attention.
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
              The name only means something if the way we work backs it up.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── OPERATIONAL REASONING ─────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#16243A',
          padding: 'clamp(64px, 10vw, 120px) clamp(24px, 6vw, 80px)',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn style={{ maxWidth: 680 }}>
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
              Some of the biggest staffing problems happen after the contract is signed.
            </h2>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 15,
                lineHeight: 1.75,
                color: 'rgba(244,236,220,0.65)',
                margin: '0 0 16px',
              }}
            >
              A candidate gets sent because they're available, not because
              they fit the opening. A client has a payroll or billing
              question and doesn't know who owns it. The staffing company
              has its own process and expects the property to work around
              it. Or someone starts, and the communication that was strong
              during the sale suddenly gets harder.
            </p>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 15,
                lineHeight: 1.75,
                color: 'rgba(244,236,220,0.65)',
                margin: 0,
              }}
            >
              Those are the kinds of problems Fidend is being built to avoid.
            </p>
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
              What that looks like in practice.
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
            If that sounds like the kind of staffing relationship you're
            looking for, let's talk.
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
            We work with a limited number of clients at a time so we can
            stay involved in the relationships we take on.
          </p>
          <Link href="/contact" className="btn-primary">
            Request a Conversation
          </Link>
        </FadeIn>
      </section>
    </>
  )
}
