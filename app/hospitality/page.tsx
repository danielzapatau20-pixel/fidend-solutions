import type { Metadata } from 'next'
import HeroVideo from '@/components/HeroVideo'
import FadeIn from '@/components/FadeIn'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fidend Hospitality — Hotel & Hospitality Property Staffing',
  description:
    'Full-time staffing for hotels and hospitality properties across housekeeping, public areas, laundry, kitchens, and maintenance support.',
}

const SERVICES = [
  {
    title: 'Housekeepers',
    description:
      'Room cleaning, resets, and turnover based on your property standards and room sequence.',
  },
  {
    title: 'Public Area Attendants',
    description:
      'Lobbies, corridors, restrooms, elevators, and other guest-facing areas that need attention throughout the day.',
  },
  {
    title: 'Laundry Attendants',
    description:
      "Linen sorting, washing, drying, folding, and distribution based on your property's laundry operation and volume.",
  },
  {
    title: 'Dishwashers & Stewards',
    description:
      'Dishwashing, sanitation, kitchen cleanup, and back-of-house support for your F&amp;B operation.',
  },
  {
    title: 'Cooks & Prep Cooks',
    description:
      'We recruit for the experience, schedule, and kitchen requirements of the opening.',
  },
  {
    title: 'Maintenance Helpers',
    description:
      "General maintenance support for routine property needs and projects that don't require licensed trade work.",
  },
]

const PILLARS = [
  {
    title: 'Full-Time Staffing',
    body: 'Ongoing staffing needs, not gig or day-labor coverage.',
  },
  {
    title: 'Your Property Standards',
    body: 'Your department leads the work and property-specific orientation.',
  },
  {
    title: 'Recruiting for the Opening',
    body: 'We interview candidates with the actual position and schedule in mind.',
  },
  {
    title: 'Open-Book Pricing',
    body: 'Worker rate and Fidend management fee are shown separately.',
  },
  {
    title: 'Your Process',
    body: 'If you already have systems for timekeeping, productivity, or reporting, we work with them when reasonable.',
  },
  {
    title: 'One Point of Contact',
    body: 'When something needs attention, you know who to call.',
  },
]

const HOW_IT_WORKS = [
  {
    number: '01',
    title: 'Tell us what you need',
    body: 'We start with the opening: the position, schedule, department expectations, and what the person will actually be doing.',
  },
  {
    number: '02',
    title: 'We recruit for that opening',
    body: 'We interview candidates with the position in mind and look at their experience, availability, and whether the opportunity makes sense for both sides.',
  },
  {
    number: '03',
    title: 'Your team sets the property standard',
    body: 'Once someone starts, your department leads property-specific orientation, procedures, and day-to-day direction.',
  },
  {
    number: '04',
    title: 'We handle our side',
    body: "Fidend handles HR, payroll, and staffing communication. If there's a question or something isn't working, you have a direct point of contact.",
  },
]

export default function HospitalityPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <HeroVideo overlayOpacity={0.65} minHeight="60svh" poster="/poster-hero.jpg">
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 80px)',
          }}
        >
          <FadeIn delay={60}>
            <p
              className="eyebrow"
              style={{ color: 'rgba(184,153,104,0.85)', marginBottom: 8 }}
            >
              Fidend Hospitality
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
          <FadeIn delay={160}>
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
              Hotel &amp; Hospitality Property Staffing
            </h1>
          </FadeIn>
          <FadeIn delay={280}>
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
              Full-time staffing for the departments hotels rely on every day, including
              housekeeping, public areas, laundry, kitchens, and maintenance support.
            </p>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 'clamp(14px, 1.6vw, 16px)',
                lineHeight: 1.65,
                color: 'rgba(244,236,220,0.68)',
                maxWidth: '48ch',
                margin: '0 0 32px',
              }}
            >
              Tell us what you're hiring for and how your property runs. We recruit for
              the actual job, not just the next available worker.
            </p>
            <Link href="/contact" className="btn-gold-fill" style={{ fontSize: 11, letterSpacing: '0.2em' }}>
              Request Staffing Support
            </Link>
          </FadeIn>
        </div>
      </HeroVideo>

      {/* ── SERVICE GRID ──────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#F4ECDC',
          padding: 'clamp(64px, 10vw, 120px) clamp(24px, 6vw, 80px)',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn style={{ marginBottom: 'clamp(40px, 6vw, 64px)' }}>
            <p className="eyebrow" style={{ color: 'rgba(22,36,58,0.5)', marginBottom: 14 }}>
              Hospitality Services
            </p>
            <div style={{ height: 1, backgroundColor: '#B89968', maxWidth: 56, marginBottom: 24 }} />
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontVariationSettings: "'SOFT' 30, 'opsz' 48",
                fontWeight: 300,
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                color: '#16243A',
                lineHeight: 1.1,
                margin: '0 0 16px',
              }}
            >
              The roles that keep a hotel running.
            </h2>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 15,
                lineHeight: 1.7,
                color: 'rgba(22,36,58,0.55)',
                maxWidth: '52ch',
                margin: 0,
              }}
            >
              From room attendants and laundry to stewards, cooks, and maintenance
              helpers, we staff the day-to-day work happening across the property.
            </p>
          </FadeIn>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 20,
            }}
          >
            {SERVICES.map((svc, i) => (
              <FadeIn key={svc.title} delay={i * 80} direction="up">
                <div
                  style={{
                    backgroundColor: '#fff',
                    border: '1px solid rgba(22,36,58,0.10)',
                    padding: 32,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                    height: '100%',
                  }}
                >
                  <div style={{ height: 1, backgroundColor: '#B89968', opacity: 0.55 }} />
                  <h3
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontVariationSettings: "'SOFT' 30, 'opsz' 36",
                      fontWeight: 400,
                      fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                      color: '#16243A',
                      lineHeight: 1.15,
                      margin: 0,
                    }}
                    dangerouslySetInnerHTML={{ __html: svc.title }}
                  />
                  <p
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: 14,
                      lineHeight: 1.65,
                      color: 'rgba(22,36,58,0.55)',
                      margin: 0,
                      flexGrow: 1,
                    }}
                    dangerouslySetInnerHTML={{ __html: svc.description }}
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PILLARS ───────────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#EDE3CF',
          padding: 'clamp(64px, 10vw, 120px) clamp(24px, 6vw, 80px)',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(40px, 8vw, 96px)',
            alignItems: 'start',
          }}
        >
          <FadeIn direction="left">
            <p className="eyebrow" style={{ marginBottom: 16 }}>How We Work With Your Property</p>
            <div className="gold-rule" style={{ marginBottom: 28 }} />
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontVariationSettings: "'SOFT' 30, 'opsz' 48",
                fontWeight: 300,
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                color: '#16243A',
                lineHeight: 1.1,
                margin: '0 0 20px',
              }}
            >
              Your property already has a way of running. We learn it.
            </h2>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 15,
                lineHeight: 1.7,
                color: 'rgba(22,36,58,0.65)',
                margin: '0 0 32px',
              }}
            >
              We want to understand how your team works before we start placing people
              into it. That includes room assignments, productivity expectations,
              schedules, timekeeping, and department procedures.
            </p>
            <Link href="/contact" className="btn-primary-navy">
              Request a Conversation
            </Link>
          </FadeIn>

          <FadeIn delay={120}>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'rgba(22,36,58,0.45)',
                marginBottom: 20,
              }}
            >
              Every Placement · Every Property
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {PILLARS.map((pillar, i) => (
                <div
                  key={pillar.title}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 16,
                    padding: '16px 0',
                    borderBottom:
                      i < PILLARS.length - 1 ? '1px solid rgba(22,36,58,0.12)' : 'none',
                  }}
                >
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      backgroundColor: '#B89968',
                      flexShrink: 0,
                      marginTop: 6,
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontFamily: 'Inter, system-ui, sans-serif',
                        fontSize: 14,
                        fontWeight: 600,
                        color: '#16243A',
                        lineHeight: 1.4,
                        margin: '0 0 3px',
                      }}
                    >
                      {pillar.title}
                    </p>
                    <p
                      style={{
                        fontFamily: 'Inter, system-ui, sans-serif',
                        fontSize: 13,
                        fontWeight: 400,
                        color: 'rgba(22,36,58,0.58)',
                        lineHeight: 1.5,
                        margin: 0,
                      }}
                    >
                      {pillar.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#16243A',
          padding: 'clamp(64px, 10vw, 120px) clamp(24px, 6vw, 80px)',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn style={{ maxWidth: 560, marginBottom: 'clamp(40px, 6vw, 72px)' }}>
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
              Here's how we get started.
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

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#F4ECDC',
          padding: 'clamp(64px, 10vw, 120px) clamp(24px, 6vw, 80px)',
        }}
      >
        <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
          <FadeIn>
            <p className="eyebrow" style={{ color: 'rgba(22,36,58,0.5)', marginBottom: 20 }}>
              Get Started
            </p>
            <div
              style={{
                height: 1,
                backgroundColor: '#B89968',
                maxWidth: 48,
                margin: '0 auto 32px',
                opacity: 0.6,
              }}
            />
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontVariationSettings: "'SOFT' 30, 'opsz' 48",
                fontWeight: 300,
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                color: '#16243A',
                lineHeight: 1.1,
                margin: '0 0 20px',
              }}
            >
              What are you hiring for?
            </h2>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 15,
                lineHeight: 1.72,
                color: 'rgba(22,36,58,0.55)',
                margin: '0 0 16px',
              }}
            >
              Tell us the department, the positions you need, and what the schedule
              looks like. We'll talk through the need and put together a clear proposal.
            </p>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 15,
                lineHeight: 1.72,
                color: 'rgba(22,36,58,0.55)',
                margin: '0 0 36px',
              }}
            >
              Written proposal within five business days. Open-book pricing before
              anything is agreed.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary-navy">
                Request Staffing Support
              </Link>
              <Link href="/contact#apply" className="btn-primary-navy">
                Apply to Work With Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
