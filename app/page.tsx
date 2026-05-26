import HeroVideo from '@/components/HeroVideo'
import ServiceCard from '@/components/ServiceCard'
import PricingTable from '@/components/PricingTable'
import FadeIn from '@/components/FadeIn'
import Link from 'next/link'

const SERVICES = [
  {
    title: 'Housekeeping',
    description:
      'Daily room cleaning, common-area maintenance, and infection-control protocols. Our housekeepers are trained to long-term care standards.',
  },
  {
    title: 'Dietary / Food Service',
    description:
      'Tray delivery, dining-room service, and kitchen support aligned with your dietary specifications and resident care plans.',
  },
  {
    title: 'Laundry',
    description:
      'Resident laundry, linen exchange, and dry-goods handling. Sorted, tracked, and returned on schedule.',
  },
  {
    title: 'Activities Assistance',
    description:
      "Structured program support under your activities coordinator's direction. Engagement, facilitation, and logistical setup.",
  },
  {
    title: 'Companion Care',
    description:
      'Attentive non-medical companionship: conversation, ambulation assistance, and presence that sustains resident dignity.',
  },
]

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Initial call',
    body: 'We learn your census, acuity level, and staffing gaps. Typically 20 minutes.',
  },
  {
    number: '02',
    title: 'Worker match',
    body: 'We assign cleared, experienced workers aligned to your service area and schedule within 48 hours.',
  },
  {
    number: '03',
    title: 'On-site orientation',
    body: "Workers arrive briefed on your facility's policies. Your DON or supervisor provides final orientation.",
  },
  {
    number: '04',
    title: 'Ongoing management',
    body: 'We handle scheduling, HR, and compliance. You manage care. One point of contact.',
  },
]

const KEY_MESSAGES = [
  {
    number: '01',
    title: 'Open book pricing.',
    subtitle: 'Precios a libro abierto',
    body: 'You see exactly what we pay the worker, and exactly what we charge for management. No hidden burden, no opaque markup.',
  },
  {
    number: '02',
    title: 'Compliance handled.',
    subtitle: 'Cumplimiento gestionado',
    body: 'Background checks, TB tests, state clearances — all managed by us, never by you. File delivered to your HR before day one.',
  },
  {
    number: '03',
    title: 'Direct leadership access.',
    subtitle: 'Acceso directo',
    body: 'You work with leadership — not a rotating account rep. Founder mobile on every contract. 4-hour response, 7 days a week.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <HeroVideo
        /**
         * HIGGSFIELD ASSET 01 — Hero video loop
         * src="/videos/hero-loop.mp4"
         * poster="/images/hero-poster.jpg"
         */
        overlayOpacity={0.62}
        minHeight="100svh"
      >
        {/* Watermark F mark in background */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: '-5%',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1,
            opacity: 0.04,
            pointerEvents: 'none',
          }}
        >
          <svg width="560" height="900" viewBox="0 0 56 90" fill="none">
            <path d="M 46,12 C 30,2 4,16 4,42 C 4,68 20,80 38,80" stroke="#F4ECDC" strokeWidth="5.5" strokeLinecap="round"/>
            <line x1="2" y1="42" x2="52" y2="38" stroke="#F4ECDC" strokeWidth="4.5" strokeLinecap="round"/>
            <path d="M 38,80 C 46,84 52,88 54,90" stroke="#F4ECDC" strokeWidth="5.5" strokeLinecap="round"/>
          </svg>
        </div>

        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 80px)',
            display: 'flex',
            flexDirection: 'column',
            gap: 32,
            position: 'relative',
            zIndex: 2,
          }}
        >
          {/* Eyebrow */}
          <FadeIn delay={100}>
            <p className="eyebrow" style={{ color: 'rgba(184,153,104,0.85)', marginBottom: 0 }}>
              Pennsylvania · Senior Living Staffing
            </p>
          </FadeIn>

          {/* Headline */}
          <FadeIn delay={220}>
            <h1
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontVariationSettings: "'SOFT' 30, 'opsz' 72",
                fontWeight: 300,
                fontSize: 'clamp(2.6rem, 6.5vw, 5.5rem)',
                lineHeight: 1.05,
                color: '#F4ECDC',
                maxWidth: '18ch',
                margin: 0,
              }}
            >
              The staff your residents depend on.
            </h1>
          </FadeIn>

          {/* Sub-copy */}
          <FadeIn delay={360}>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 'clamp(15px, 1.8vw, 18px)',
                lineHeight: 1.65,
                color: 'rgba(244,236,220,0.72)',
                maxWidth: '46ch',
                margin: 0,
              }}
            >
              Fidend places TB-cleared, background-checked housekeepers, dietary
              aides, laundry attendants, activities aides, and companion
              caregivers in senior living homes across Pennsylvania.
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={480}>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
              <Link href="/contact" className="btn-primary">
                Request a Conversation
              </Link>
              <Link
                href="/services"
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(244,236,220,0.70)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '14px 0',
                  borderBottom: '1px solid rgba(244,236,220,0.25)',
                  transition: 'color 240ms ease-out, border-color 240ms ease-out',
                }}
              >
                View Services
              </Link>
            </div>
          </FadeIn>

          {/* Compliance badges */}
          <FadeIn delay={580}>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {['TB Cleared', 'Background Checked', 'Senior Care Oriented'].map(badge => (
                <span
                  key={badge}
                  className="compliance-badge"
                  style={{ color: 'rgba(184,153,104,0.80)', borderColor: 'rgba(184,153,104,0.30)' }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </HeroVideo>

      {/* ── PROMISE STRIP ─────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#B89968', padding: 'clamp(32px, 5vw, 48px) clamp(24px, 6vw, 80px)' }}>
        <FadeIn>
          <div
            style={{
              maxWidth: 1200,
              margin: '0 auto',
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'clamp(24px, 4vw, 64px)',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {[
              { stat: '48 hrs', label: 'From first call to placed worker' },
              { stat: 'Open book', label: 'Flat fee. No markup on worker rate.' },
              { stat: 'One call', label: 'Scheduling, HR, compliance — handled.' },
            ].map(item => (
              <div key={item.stat}>
                <p
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontVariationSettings: "'SOFT' 30, 'opsz' 36",
                    fontWeight: 400,
                    fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                    color: '#16243A',
                    margin: '0 0 4px',
                  }}
                >
                  {item.stat}
                </p>
                <p
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: 13,
                    letterSpacing: '0.04em',
                    color: 'rgba(22,36,58,0.70)',
                    margin: 0,
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── WHO WE SERVE ──────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#F4ECDC',
          padding: 'clamp(64px, 10vw, 120px) clamp(24px, 6vw, 80px)',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ maxWidth: 560, marginBottom: 'clamp(40px, 6vw, 72px)' }}>
              <p className="eyebrow" style={{ marginBottom: 16 }}>Who We Serve</p>
              <div className="gold-rule" style={{ marginBottom: 28 }} />
              <h2
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontVariationSettings: "'SOFT' 30, 'opsz' 48",
                  fontWeight: 300,
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  color: '#16243A',
                  lineHeight: 1.1,
                  margin: '0 0 20px',
                }}
              >
                Built for the professionals who keep care homes running.
              </h2>
              <p
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: 'rgba(22,36,58,0.65)',
                  margin: 0,
                }}
              >
                We serve administrators, HR managers, and directors of operations at
                skilled nursing facilities, assisted living communities, memory care
                units, and multifamily senior residences.
              </p>
            </div>
          </FadeIn>

          {/* Service cards — staggered */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: 20,
            }}
          >
            {SERVICES.map((svc, i) => (
              <FadeIn key={svc.title} delay={i * 80}>
                <ServiceCard
                  title={svc.title}
                  description={svc.description}
                  href="/services"
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY MESSAGES ──────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#16243A',
          padding: 'clamp(64px, 10vw, 120px) clamp(24px, 6vw, 80px)',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ maxWidth: 480, marginBottom: 'clamp(40px, 6vw, 64px)' }}>
              <p className="eyebrow" style={{ marginBottom: 16 }}>The Standard</p>
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
                Three truths on every invoice.
              </h2>
            </div>
          </FadeIn>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {KEY_MESSAGES.map((msg, i) => (
              <FadeIn key={msg.number} delay={i * 100}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '80px 1fr',
                    gap: 32,
                    padding: 'clamp(28px, 4vw, 40px) 0',
                    borderBottom: i < KEY_MESSAGES.length - 1
                      ? '1px solid rgba(184,153,104,0.15)'
                      : 'none',
                    alignItems: 'start',
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontVariationSettings: "'SOFT' 30, 'opsz' 72",
                      fontWeight: 300,
                      fontSize: '2.8rem',
                      color: '#B89968',
                      margin: 0,
                      lineHeight: 1,
                      opacity: 0.5,
                    }}
                  >
                    {msg.number}
                  </p>
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Fraunces', Georgia, serif",
                        fontVariationSettings: "'SOFT' 30, 'opsz' 32",
                        fontWeight: 400,
                        fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)',
                        color: '#F4ECDC',
                        margin: '0 0 4px',
                      }}
                    >
                      {msg.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Fraunces', Georgia, serif",
                        fontVariationSettings: "'SOFT' 80, 'opsz' 18",
                        fontStyle: 'italic',
                        fontWeight: 300,
                        fontSize: '0.78rem',
                        color: '#B89968',
                        margin: '0 0 16px',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {msg.subtitle}
                    </p>
                    <p
                      style={{
                        fontFamily: 'Inter, system-ui, sans-serif',
                        fontSize: 15,
                        lineHeight: 1.68,
                        color: 'rgba(244,236,220,0.60)',
                        margin: 0,
                        maxWidth: '56ch',
                      }}
                    >
                      {msg.body}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN BOOK PRICING ─────────────────────────────────────────── */}
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
            gap: 'clamp(48px, 8vw, 96px)',
            alignItems: 'center',
          }}
        >
          <FadeIn direction="left">
            <PricingTable variant="cream" />
          </FadeIn>

          <FadeIn delay={120}>
            <div>
              <p className="eyebrow" style={{ marginBottom: 16 }}>Pricing</p>
              <div className="gold-rule" style={{ marginBottom: 28 }} />
              <h2
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontVariationSettings: "'SOFT' 30, 'opsz' 48",
                  fontWeight: 300,
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                  color: '#16243A',
                  lineHeight: 1.12,
                  margin: '0 0 24px',
                }}
              >
                You see every dollar. We hide nothing.
              </h2>
              <p
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: 'rgba(22,36,58,0.62)',
                  margin: '0 0 32px',
                }}
              >
                Most staffing agencies mark up the worker rate and never disclose it.
                We do not. Our management fee is flat. The worker rate you see is the
                worker rate they are paid. Your invoice is two numbers, not a paragraph
                of adjustments.
              </p>
              <Link href="/contact" className="btn-primary-navy">
                Request a Rate Sheet
              </Link>
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
          <FadeIn>
            <div style={{ maxWidth: 480, marginBottom: 'clamp(40px, 6vw, 72px)' }}>
              <p className="eyebrow" style={{ marginBottom: 16 }}>The Process</p>
              <div style={{ height: 1, backgroundColor: '#B89968', marginBottom: 28 }} />
              <h2
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontVariationSettings: "'SOFT' 30, 'opsz' 48",
                  fontWeight: 300,
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  color: '#F4ECDC',
                  lineHeight: 1.1,
                  margin: 0,
                }}
              >
                From first call to first shift in 48 hours.
              </h2>
            </div>
          </FadeIn>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: 40,
            }}
          >
            {PROCESS_STEPS.map((step, i) => (
              <FadeIn key={step.number} delay={i * 90}>
                <div>
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
                  <div style={{ height: 1, backgroundColor: 'rgba(184,153,104,0.25)', marginBottom: 20 }} />
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
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA ────────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#F4ECDC',
          padding: 'clamp(64px, 10vw, 120px) clamp(24px, 6vw, 80px)',
          textAlign: 'center',
        }}
      >
        <FadeIn>
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            <p className="eyebrow" style={{ marginBottom: 20 }}>Ready to Begin</p>
            <div
              style={{
                height: 1,
                backgroundColor: '#B89968',
                maxWidth: 64,
                margin: '0 auto 36px',
              }}
            />
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontVariationSettings: "'SOFT' 30, 'opsz' 48",
                fontWeight: 300,
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                color: '#16243A',
                lineHeight: 1.1,
                margin: '0 0 24px',
              }}
            >
              Tell us your staffing gap. We will close it.
            </h2>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 15,
                lineHeight: 1.7,
                color: 'rgba(22,36,58,0.60)',
                margin: '0 0 40px',
              }}
            >
              Our intake process takes 20 minutes. Workers are placed within 48
              hours. No long contracts.
            </p>
            <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary-navy">
                Request a Conversation
              </Link>
              <Link href="/contact#apply" className="btn-primary-navy">
                Apply to Work With Us
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  )
}
