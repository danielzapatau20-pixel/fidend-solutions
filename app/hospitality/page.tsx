import type { Metadata } from 'next'
import HeroVideo from '@/components/HeroVideo'
import FadeIn from '@/components/FadeIn'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fidend Hospitality — Hotel & Hospitality Property Staffing',
  description:
    'Hospitality support staff for hotels, resorts, and guest-facing properties. Fidend Hospitality places housekeepers, public area attendants, dishwashers, cooks, stewards, and maintenance helpers for operations that cannot afford missed shifts.',
}

const SERVICES = [
  {
    title: 'Housekeepers',
    description:
      'Room attendants who clean and prepare guest rooms to your brand standards and inspection checklist. Workers learn your room sequence and turnover pace on-site under your direction.',
  },
  {
    title: 'Public Area Attendants',
    description:
      'Front-of-house cleaning for lobbies, corridors, restrooms, and guest-facing common areas. Continuous presence during peak hours to keep public spaces guest-ready.',
  },
  {
    title: 'Laundry Attendants',
    description:
      'Linen processing, sorting, folding, and distribution. Supports your laundry operation at the volume and speed your property requires.',
  },
  {
    title: 'Dishwashers & Stewards',
    description:
      'Back-of-house dishwashing, pot washing, kitchen cleaning, and stewarding support. Keeps the kitchen moving and sanitation standards maintained.',
  },
  {
    title: 'Cooks & Prep Cooks',
    description:
      'Line support, prep work, and kitchen assistance for hotel F&amp;B operations, banquet service, and restaurant outlets. Experienced in high-volume kitchen environments.',
  },
  {
    title: 'Maintenance Helpers',
    description:
      'General property maintenance support for routine tasks, guest request follow-ups, and preventive maintenance assistance — so your licensed techs focus on what matters most.',
  },
]

const PILLARS = [
  'Guest-ready rooms on schedule',
  'Clean public areas throughout the day',
  'Back-of-house and kitchen support',
  'Reliable shift coverage — no missed gaps',
  'Hospitality-aware service standards',
  'Flexible scheduling around your occupancy',
]

const HOW_IT_WORKS = [
  {
    number: '01',
    title: 'Understand the operation',
    body: 'We learn your property type, room count, outlet structure, current staffing gaps, and the guest experience standards you hold.',
  },
  {
    number: '02',
    title: 'Match the right workers',
    body: 'We assign workers aligned to your department needs, shift patterns, and the pace of a guest-facing environment.',
  },
  {
    number: '03',
    title: 'On-property start',
    body: 'Workers arrive ready to learn your procedures and brand standards. Your department heads lead orientation.',
  },
  {
    number: '04',
    title: 'Ongoing coverage',
    body: 'We manage scheduling, HR, and payroll. You focus on the guest experience. Fidend remains available as a direct point of contact when the operation needs attention.',
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
                margin: '0 0 32px',
              }}
            >
              Operational staffing for hospitality teams that cannot afford missed shifts.
              We place workers who understand guest-facing standards and support your
              operation from first call to opening service.
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
              Every department. Every shift.
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
              Hospitality support staff for properties where every shift affects the guest
              experience. We staff the roles that keep your operation running.
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
              Hospitality operations that stay covered.
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
              Every hospitality operation has different departments, different shifts, and
              different guest expectations. We align to the way you run — not the other way
              around.
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
              Ready to keep your property covered?
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
