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
    body: 'We match cleared, experienced workers to your service area, shift length, and facility type.',
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
    body: 'Every invoice shows two line items: the worker\'s pay rate and our management fee. Both numbers, always visible. You can audit either one.',
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
          <svg width="492" height="560" viewBox="0 0 222 253" aria-hidden="true">
            <g fill="#F4ECDC">
              <path d="M 196.00 41.00 L 178.00 26.00 L 176.00 26.00 L 173.00 23.00 L 171.00 23.00 L 161.00 17.00 L 158.00 17.00 L 156.00 15.00 L 150.00 14.00 L 147.00 12.00 L 137.00 11.00 L 133.00 9.00 L 122.00 9.00 L 121.00 8.00 L 101.00 9.00 L 98.00 11.00 L 92.00 11.00 L 91.00 12.00 L 87.00 12.00 L 85.00 14.00 L 78.00 15.00 L 76.00 17.00 L 71.00 18.00 L 69.00 20.00 L 65.00 21.00 L 55.00 27.00 L 41.00 38.00 L 26.00 56.00 L 26.00 58.00 L 24.00 59.00 L 23.00 63.00 L 18.00 70.00 L 17.00 75.00 L 15.00 77.00 L 14.00 83.00 L 12.00 86.00 L 11.00 95.00 L 9.00 99.00 L 9.00 130.00 L 11.00 135.00 L 12.00 144.00 L 21.00 165.00 L 26.00 173.00 L 39.00 189.00 L 41.00 190.00 L 41.00 150.00 L 38.00 146.00 L 38.00 143.00 L 36.00 141.00 L 35.00 134.00 L 33.00 130.00 L 33.00 124.00 L 32.00 123.00 L 33.00 95.00 L 39.00 76.00 L 41.00 74.00 L 44.00 66.00 L 58.00 47.00 L 77.00 32.00 L 79.00 32.00 L 81.00 30.00 L 96.00 23.00 L 103.00 22.00 L 107.00 20.00 L 122.00 19.00 L 123.00 18.00 L 142.00 19.00 L 143.00 20.00 L 149.00 20.00 L 157.00 23.00 L 160.00 23.00 L 180.00 33.00 L 195.00 44.00 L 205.00 55.00 L 211.00 63.00 L 211.00 65.00 L 213.00 65.00 L 206.00 53.00 Z" />
              <path d="M 119.00 149.00 L 118.00 148.00 L 82.00 148.00 L 81.00 149.00 L 83.00 152.00 L 83.00 169.00 L 82.00 170.00 L 82.00 175.00 L 81.00 176.00 L 81.00 180.00 L 80.00 181.00 L 80.00 184.00 L 79.00 185.00 L 79.00 187.00 L 78.00 188.00 L 78.00 190.00 L 77.00 191.00 L 77.00 193.00 L 74.00 198.00 L 74.00 200.00 L 72.00 202.00 L 72.00 203.00 L 71.00 204.00 L 71.00 205.00 L 69.00 207.00 L 68.00 210.00 L 64.00 214.00 L 64.00 215.00 L 59.00 220.00 L 59.00 221.00 L 57.00 223.00 L 56.00 223.00 L 56.00 224.00 L 55.00 225.00 L 54.00 225.00 L 47.00 231.00 L 44.00 232.00 L 44.00 233.00 L 43.00 234.00 L 41.00 234.00 L 40.00 235.00 L 39.00 235.00 L 37.00 237.00 L 35.00 237.00 L 34.00 238.00 L 32.00 238.00 L 30.00 240.00 L 27.00 240.00 L 26.00 241.00 L 22.00 241.00 L 19.00 243.00 L 9.00 243.00 L 8.00 244.00 L 32.00 244.00 L 33.00 243.00 L 40.00 243.00 L 41.00 242.00 L 43.00 242.00 L 44.00 241.00 L 47.00 241.00 L 48.00 240.00 L 51.00 240.00 L 54.00 238.00 L 56.00 238.00 L 57.00 237.00 L 59.00 237.00 L 60.00 236.00 L 61.00 236.00 L 62.00 235.00 L 63.00 235.00 L 64.00 234.00 L 65.00 234.00 L 66.00 233.00 L 67.00 233.00 L 68.00 232.00 L 71.00 231.00 L 73.00 229.00 L 74.00 229.00 L 77.00 226.00 L 78.00 226.00 L 81.00 223.00 L 82.00 223.00 L 86.00 219.00 L 87.00 219.00 L 87.00 218.00 L 88.00 217.00 L 89.00 217.00 L 91.00 214.00 L 92.00 214.00 L 92.00 213.00 L 95.00 210.00 L 95.00 209.00 L 100.00 204.00 L 101.00 201.00 L 104.00 198.00 L 104.00 196.00 L 106.00 194.00 L 107.00 191.00 L 109.00 189.00 L 109.00 187.00 L 110.00 186.00 L 110.00 184.00 L 112.00 182.00 L 112.00 180.00 L 113.00 179.00 L 113.00 176.00 L 115.00 173.00 L 115.00 170.00 L 116.00 169.00 L 116.00 164.00 L 117.00 163.00 L 117.00 161.00 L 118.00 160.00 L 118.00 151.00 L 119.00 150.00 Z" />
              <path d="M 81.00 119.00 L 158.00 119.00 L 159.00 120.00 L 160.00 119.00 L 160.00 118.00 L 161.00 117.00 L 161.00 116.00 L 163.00 114.00 L 163.00 113.00 L 164.00 112.00 L 164.00 111.00 L 166.00 109.00 L 166.00 108.00 L 168.00 106.00 L 168.00 105.00 L 169.00 104.00 L 169.00 103.00 L 172.00 100.00 L 172.00 99.00 L 173.00 98.00 L 173.00 97.00 L 175.00 95.00 L 175.00 94.00 L 174.00 93.00 L 95.00 93.00 L 94.00 94.00 L 93.00 94.00 L 93.00 95.00 L 92.00 96.00 L 92.00 97.00 L 90.00 99.00 L 90.00 100.00 L 89.00 101.00 L 89.00 102.00 L 87.00 104.00 L 87.00 105.00 L 86.00 106.00 L 86.00 108.00 L 84.00 110.00 L 84.00 111.00 L 83.00 112.00 L 83.00 114.00 L 82.00 115.00 L 82.00 116.00 L 81.00 117.00 Z" />
            </g>
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
              { stat: 'Open book', label: 'Worker rate + management fee — both on every invoice.' },
              { stat: 'Survey ready', label: 'TB-cleared, background-checked, documented on arrival.' },
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
                Most staffing agencies present one blended bill rate — the margin is
                buried inside and you cannot see it. We work differently. Every Fidend
                invoice lists the worker's pay rate and our management fee as separate
                line items. You know both numbers. The markup is not hidden — it is the
                basis of a relationship that doesn't need to hide anything.
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
                How we go from first call to first shift.
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
