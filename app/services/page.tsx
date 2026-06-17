import type { Metadata } from 'next'
import HeroVideo from '@/components/HeroVideo'
import ServiceCard from '@/components/ServiceCard'
import FadeIn from '@/components/FadeIn'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Housekeeping, dietary, laundry, activities, and companion care staffing for senior living facilities, built to adapt to how your facility already operates.',
}

const SERVICES = [
  {
    title: 'Housekeeping',
    image: '/images/services/housekeeping.jpg',
    description:
      'Daily room cleaning, common-area maintenance, and general upkeep, scheduled and run according to the standards your facility already has in place.',
  },
  {
    title: 'Dietary / Food Service',
    image: '/images/services/dietary.jpg',
    description:
      'Tray delivery, dining-room service, and kitchen support aligned with your dietary specifications and resident care plans, run the way your kitchen already operates.',
  },
  {
    title: 'Laundry',
    image: '/images/services/laundry.jpg',
    description:
      "Resident laundry, linen exchange, and dry-goods handling. Sorted, tracked, and returned on the schedule your facility sets.",
  },
  {
    title: 'Activities Assistance',
    image: '/images/services/activities.jpg',
    description:
      "Structured program support under your activities coordinator's direction. Engagement, facilitation, and logistical setup for recreational and therapeutic programming. Warm, patient, and resident-focused.",
  },
  {
    title: 'Companion Care',
    image: '/images/services/companion-care.jpg',
    description:
      'Attentive non-medical companionship: conversation, ambulation assistance, and presence that sustains resident dignity, guided by the preferences your care team sets.',
  },
]

const FLEXIBILITY_ITEMS = [
  'Shift patterns set by your facility, not by us',
  'Reporting line of your choice',
  'Scheduling adjusted as your census changes',
  'Paperwork in the format you already use',
  'Coverage scaled up or down as needs shift',
  'Changes handled with a phone call, not a contract revision',
]

const HOW_IT_WORKS = [
  {
    number: '01',
    title: 'Initial call',
    body: 'We learn your census, acuity level, current staffing gaps, and shift structure. Typically 20 minutes with your DON, administrator, or HR manager.',
  },
  {
    number: '02',
    title: 'Worker match',
    body: 'We assign workers matched to your service area, shift length, and facility type.',
  },
  {
    number: '03',
    title: 'On-site orientation',
    body: "Workers arrive ready to learn your facility's layout. Your DON or shift supervisor leads orientation to your specific procedures.",
  },
  {
    number: '04',
    title: 'Ongoing management',
    body: 'We handle scheduling, HR, payroll, and compliance documentation. You manage care quality. One point of contact, always.',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <HeroVideo
        overlayOpacity={0.65}
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
              Services
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
          <FadeIn delay={200}>
            <h1
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontVariationSettings: "'SOFT' 30, 'opsz' 72",
                fontWeight: 300,
                fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                lineHeight: 1.08,
                color: '#F4ECDC',
                maxWidth: '20ch',
                margin: '0 0 20px',
              }}
            >
              Five disciplines. One standard.
            </h1>
          </FadeIn>
          <FadeIn delay={320}>
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
              Every Fidend worker adapts to your facility's standards and shift
              structure from day one.
            </p>
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
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 20,
            }}
          >
            {SERVICES.map((svc, i) => (
              <FadeIn key={svc.title} delay={i * 80} direction="up">
                <ServiceCard
                  title={svc.title}
                  description={svc.description}
                  image={svc.image}
                />
              </FadeIn>
            ))}
          </div>
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
                margin: 0,
              }}
            >
              How we go from first call to first shift.
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

      {/* ── FLEXIBILITY ───────────────────────────────────────────────── */}
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
          {/* Left — copy */}
          <FadeIn direction="left">
            <p className="eyebrow" style={{ marginBottom: 16 }}>Flexibility</p>
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
              Built to fit the way your facility already runs.
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
              Every facility runs differently: different shift patterns,
              different reporting lines, different pace. We do not ask you to
              adapt to us. Our staffing adjusts to your existing standards and
              procedures, so the partnership works on your terms from day one.
            </p>
            <Link href="/contact" className="btn-primary-navy">
              Request a Conversation
            </Link>
          </FadeIn>

          {/* Right — checklist */}
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
              Every Placement · Every Facility
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {FLEXIBILITY_ITEMS.map((item, i) => (
                <div
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    padding: '16px 0',
                    borderBottom:
                      i < FLEXIBILITY_ITEMS.length - 1
                        ? '1px solid rgba(22,36,58,0.12)'
                        : 'none',
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

      {/* ── PRICING METHOD ───────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#16243A',
          padding: 'clamp(64px, 10vw, 120px) clamp(24px, 6vw, 80px)',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ maxWidth: 640, marginBottom: 'clamp(40px, 6vw, 64px)' }}>
              <p className="eyebrow" style={{ marginBottom: 16 }}>The Open Book Method</p>
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
                  margin: '0 0 20px',
                }}
              >
                You see the worker rate. You see our fee. That is the invoice.
              </h2>
              <p
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: 'rgba(244,236,220,0.60)',
                  margin: 0,
                }}
              >
                Most agencies quote one blended hourly number and keep the
                breakdown to themselves. We separate the two figures on every
                quote we send, so you know exactly what the worker is paid and
                what we charge to manage the placement.
              </p>
            </div>
          </FadeIn>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 2,
              marginBottom: 'clamp(40px, 6vw, 56px)',
            }}
          >
            {[
              {
                n: 'I',
                title: 'Worker rate',
                body: 'The hourly rate paid to the person working in your facility. Disclosed in writing before the placement begins.',
              },
              {
                n: 'II',
                title: 'Management fee',
                body: 'A flat fee per hour, the same for every shift and every renewal. It covers payroll, compliance, scheduling, and support.',
              },
              {
                n: 'III',
                title: 'Your invoice',
                body: 'Worker rate plus management fee. Nothing else is added, and nothing is bundled in to obscure the total.',
              },
            ].map((step) => (
              <div
                key={step.n}
                style={{
                  padding: 'clamp(28px, 4vw, 40px)',
                  border: '1px solid rgba(184,153,104,0.20)',
                  backgroundColor: 'rgba(244,236,220,0.06)',
                  height: '100%',
                }}
              >
                <p
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontVariationSettings: "'SOFT' 30, 'opsz' 72",
                    fontWeight: 300,
                    fontSize: '2rem',
                    color: '#B89968',
                    margin: '0 0 20px',
                    lineHeight: 1,
                    opacity: 0.6,
                  }}
                >
                  {step.n}
                </p>
                <div style={{ height: 1, backgroundColor: '#B89968', opacity: 0.3, marginBottom: 20 }} />
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
              </div>
            ))}
          </div>

          <Link href="/contact" className="btn-primary">
            Request a Rate Sheet
          </Link>
        </div>
      </section>
    </>
  )
}
