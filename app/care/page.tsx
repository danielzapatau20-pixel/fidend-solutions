import type { Metadata } from 'next'
import HeroVideo from '@/components/HeroVideo'
import ServiceCard from '@/components/ServiceCard'
import FadeIn from '@/components/FadeIn'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fidend Care — Senior Care Facility Staffing',
  description:
    'Full-time, non-clinical staffing for senior care communities across housekeeping, dietary, laundry, activities, and companion support.',
}

const SERVICES = [
  {
    title: 'Housekeeping',
    image: '/images/services/housekeeping.jpg',
    description:
      'Daily room cleaning, common-area maintenance, and general upkeep, scheduled and run according to the standards your facility already has in place.',
  },
  {
    title: 'Dietary Aides',
    image: '/images/services/dietary.jpg',
    description:
      'Tray delivery, dining-room service, and kitchen support aligned with your dietary specifications and resident care plans, run the way your kitchen already operates.',
  },
  {
    title: 'Laundry Attendants',
    image: '/images/services/laundry.jpg',
    description:
      "Resident laundry, linen exchange, and dry-goods handling. Sorted, tracked, and returned on the schedule your facility sets.",
  },
  {
    title: 'Activities Assistants',
    image: '/images/services/activities.jpg',
    description:
      "Structured program support under your activities coordinator's direction. Engagement, facilitation, and logistical setup for recreational and therapeutic programming. Warm, patient, and resident-focused.",
  },
  {
    title: 'Companion Support',
    image: '/images/services/companion-care.jpg',
    description:
      'Attentive non-medical companionship: conversation, ambulation assistance, and presence that sustains resident dignity, guided by the preferences your care team sets.',
  },
]

const PILLARS = [
  {
    title: 'Full-Time Staffing',
    body: 'Ongoing staffing needs, not per-diem or gig coverage.',
  },
  {
    title: "Your Facility's Procedures",
    body: 'Your team leads facility-specific orientation and day-to-day direction.',
  },
  {
    title: 'Recruiting for the Opening',
    body: 'We look at the position, schedule, responsibilities, and relevant experience before deciding who may be a fit.',
  },
  {
    title: 'Your Chain of Command',
    body: 'Workers report through the structure your facility already has in place.',
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
    title: 'Tell us where the need is',
    body: 'We learn your census, acuity level, current staffing gaps, and shift structure. Typically 20 minutes with your DON, administrator, or HR manager.',
  },
  {
    number: '02',
    title: 'We recruit for the opening',
    body: "We recruit with the position, schedule, responsibilities, and facility environment in mind. If we haven't found the right person yet, we'll tell you.",
  },
  {
    number: '03',
    title: 'Your team leads orientation',
    body: "Workers arrive ready to learn your facility's layout. Your DON or shift supervisor leads orientation to your specific procedures.",
  },
  {
    number: '04',
    title: 'We handle our side',
    body: 'We handle scheduling, HR, payroll, and documentation. You manage care quality. One point of contact, always.',
  },
]

export default function CarePage() {
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
              Fidend Care
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
              Senior Care Facility Staffing
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
              Full-time, non-clinical staffing for senior care communities. We recruit
              for housekeeping, dietary, laundry, activities, companion support, and
              other day-to-day support roles.
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
              Your facility sets the standards and directs the work. We focus on
              finding people who fit the position and schedule you actually need.
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
              Care Services
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
              Support for the work happening around residents every day.
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
              Housekeeping, meals, laundry, activities, and companionship all depend
              on having the right people in place. These are the roles we recruit for.
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
            <p className="eyebrow" style={{ marginBottom: 16 }}>Care Standards</p>
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
              We learn how your facility works before we start recruiting.
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
              We do not ask you to adapt to us. Your schedules, reporting lines,
              procedures, and department expectations already exist. We need to
              understand them so we can recruit for the actual opening.
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
              Every Placement · Every Facility
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
              Here's what happens when you need staff.
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
              Ready to staff your facility?
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
              Open-book pricing before anything is agreed.
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
