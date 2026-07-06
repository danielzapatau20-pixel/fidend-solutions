import type { Metadata } from 'next'
import HeroVideo from '@/components/HeroVideo'
import FadeIn from '@/components/FadeIn'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fidend Living — Property Management & Residential Staffing',
  description:
    'Property operations staff for residential communities and multifamily properties. Fidend Living places janitorial staff, porters, maintenance helpers, and turnover crews for properties that need to stay clean, maintained, and resident-ready.',
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
      'Ongoing exterior and interior upkeep: trash handling, package management, entryway maintenance, and general property presence that keeps standards visible.',
  },
  {
    title: 'Common Area Cleaning',
    description:
      'Hallways, laundry rooms, amenity spaces, fitness areas, and shared facilities cleaned to the standards residents expect.',
  },
  {
    title: 'Maintenance Helpers',
    description:
      'Support for your maintenance team on routine tasks, unit turnovers, and general property upkeep. Not licensed trade work — operational support to keep your team moving.',
  },
  {
    title: 'Turnover Cleaning',
    description:
      'Unit turnover cleaning between residents, coordinated around your move-out and move-in schedule. Faster turnovers, fewer delays.',
  },
  {
    title: 'Grounds Support',
    description:
      'Exterior grounds maintenance, parking area upkeep, and outdoor common space support to keep the property presentable at every entry point.',
  },
]

const PILLARS = [
  'Resident-ready spaces maintained daily',
  'Faster unit turnovers between residents',
  'Cleaner common areas and lobbies',
  'Reliable maintenance support presence',
  'Scheduling aligned to your occupancy',
  'Coverage scaled as your property roster grows',
]

const HOW_IT_WORKS = [
  {
    number: '01',
    title: 'Understand the property',
    body: 'We learn the property type, unit count, occupancy patterns, current gaps, and the standards your residents expect.',
  },
  {
    number: '02',
    title: 'Match the right workers',
    body: 'We assign workers aligned to your shift structure, building type, and operational priorities.',
  },
  {
    number: '03',
    title: 'On-site start',
    body: 'Workers arrive ready to learn your property layout and procedures. Your property manager or lead sets the standard from day one.',
  },
  {
    number: '04',
    title: 'Ongoing coverage',
    body: 'We handle scheduling, HR, and payroll. You manage the property. Direct access to leadership if anything needs attention.',
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
              Property Management &amp; Residential Staffing
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
                margin: '0 0 32px',
              }}
            >
              Reliable support for properties that need to stay clean, maintained, and
              ready for residents. We place operational staff who show up, follow
              your standards, and keep the property moving.
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
              Six roles that keep residential properties running.
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
              Reliable operational support for residential communities and multifamily
              properties that cannot afford inconsistency.
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
              Residential properties that stay clean, staffed, and ready.
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
              Every property has its own rhythm: different turnover schedules, different
              resident expectations, different peak periods. We align to how your property
              operates — not the other way around.
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
              {PILLARS.map((item, i) => (
                <div
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
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
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: 14,
                      color: '#16243A',
                      lineHeight: 1.4,
                    }}
                  >
                    {item}
                  </span>
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
              From first call to first shift.
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
                margin: '0 0 36px',
              }}
            >
              One conversation. A written proposal within five business days.
              Every number disclosed before anything is agreed.
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
