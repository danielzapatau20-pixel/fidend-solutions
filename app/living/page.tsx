import type { Metadata } from 'next'
import HeroVideo from '@/components/HeroVideo'
import FadeIn from '@/components/FadeIn'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fidend Living — Residential Property Staffing',
  description:
    'Full-time staffing for apartment communities, multifamily properties, and residential portfolios across janitorial, porter, common area, maintenance support, and grounds roles.',
}

const SERVICES = [
  {
    title: 'Janitorial Staff',
    description:
      "Day-to-day interior cleaning scheduled around your property's occupancy and resident traffic. Clean common areas, lobbies, and shared amenity spaces.",
  },
  {
    title: 'Porter Services',
    description:
      'Ongoing exterior and interior upkeep, including trash handling, package management, and entryway maintenance.',
  },
  {
    title: 'Common Area Cleaning',
    description:
      'Hallways, laundry rooms, amenity spaces, fitness areas, and shared facilities cleaned to the standards residents expect.',
  },
  {
    title: 'Maintenance Helpers',
    description:
      'Support for your maintenance team on routine tasks and general property upkeep. Not licensed trade work. Operational support to keep your team moving.',
  },
  {
    title: 'Grounds Support',
    description:
      'Exterior grounds maintenance, parking area upkeep, and outdoor common space support to keep the property presentable at every entry point.',
  },
]

const PILLARS = [
  {
    title: 'Full-Time Staffing',
    body: 'Ongoing staffing needs, not temporary or gig coverage.',
  },
  {
    title: "Your Property's Procedures",
    body: 'Your team leads property-specific orientation, work priorities, and day-to-day direction.',
  },
  {
    title: 'Recruiting for the Opening',
    body: 'We look at the position, schedule, responsibilities, and relevant experience before deciding who may be a fit.',
  },
  {
    title: 'Maintenance Support, Not Licensed Trades',
    body: 'We staff maintenance helpers for general property support. Licensed trade work stays with the appropriate professionals.',
  },
  {
    title: 'Open-Book Pricing',
    body: 'Worker rate and Fidend management fee are shown separately.',
  },
  {
    title: 'One Point of Contact',
    body: "When there's a staffing, payroll, or billing question, you know who to call.",
  },
]

const HOW_IT_WORKS = [
  {
    number: '01',
    title: 'Tell us about the property',
    body: 'We learn the property type, unit count, occupancy patterns, current gaps, and the standards your residents expect.',
  },
  {
    number: '02',
    title: 'We recruit for the opening',
    body: "We recruit with the position, schedule, responsibilities, and property environment in mind. If we haven't found the right person yet, we'll tell you.",
  },
  {
    number: '03',
    title: 'Your team sets the property standard',
    body: 'Workers arrive ready to learn your property layout and procedures. Your property manager or lead sets the standard from day one.',
  },
  {
    number: '04',
    title: 'We handle our side',
    body: 'We handle scheduling, HR, and payroll. You manage the property. If something needs attention, you have a direct point of contact at Fidend.',
  },
]

export default function LivingPage() {
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
              Fidend Living
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
              Residential Property Staffing
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
              Full-time staffing for apartment communities, multifamily properties,
              and residential portfolios. We recruit for janitorial, porter, common
              area, maintenance support, and grounds roles.
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
              Your team manages the property and directs the work. We focus on
              finding people who fit the position, schedule, and property you
              need them for.
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
              Living Services
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
              The people behind the day-to-day property work.
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
              Common areas, trash, grounds, routine upkeep, and maintenance support
              all need people assigned to the work. These are the roles we recruit for.
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
                  >
                    {svc.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: 14,
                      lineHeight: 1.65,
                      color: 'rgba(22,36,58,0.55)',
                      margin: 0,
                      flexGrow: 1,
                    }}
                  >
                    {svc.description}
                  </p>
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
            <p className="eyebrow" style={{ marginBottom: 16 }}>What We Deliver</p>
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
              We recruit around the way your property actually operates.
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
              We start with the property, the position, and the schedule. We want
              to understand the building, the work that needs to get done, and what
              your team expects from the person filling the role.
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
              Here's how we staff your property.
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
              Ready to keep your property staffed?
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
              Tell us what you're hiring for and what the schedule looks like.
              We'll talk through the need and put together a clear proposal.
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
              Written proposal within five business days. Open-book pricing
              before anything is agreed.
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
