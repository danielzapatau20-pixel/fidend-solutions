import HeroVideo from '@/components/HeroVideo'
import ServiceCard from '@/components/ServiceCard'
import PricingTable from '@/components/PricingTable'
import Link from 'next/link'

const SERVICES = [
  {
    title: 'Housekeeping',
    description:
      'Daily room cleaning, common-area maintenance, and infection-control protocols. Our housekeepers are trained to the standards of long-term care environments.',
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
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 80px)',
            display: 'flex',
            flexDirection: 'column',
            gap: 32,
          }}
        >
          {/* Eyebrow */}
          <p
            className="eyebrow"
            style={{ color: 'rgba(184,153,104,0.85)', marginBottom: 0 }}
          >
            Pennsylvania · Senior Living Staffing
          </p>

          {/* Headline */}
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

          {/* Sub-copy */}
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

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
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

          {/* Compliance badges */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 8 }}>
            {['TB Cleared', 'Background Checked', 'Senior Care Oriented'].map(
              badge => (
                <span
                  key={badge}
                  className="compliance-badge"
                  style={{
                    color: 'rgba(184,153,104,0.80)',
                    borderColor: 'rgba(184,153,104,0.30)',
                  }}
                >
                  {badge}
                </span>
              )
            )}
          </div>
        </div>
      </HeroVideo>

      {/* ── PROMISE STRIP ─────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#B89968',
          padding: 'clamp(32px, 5vw, 48px) clamp(24px, 6vw, 80px)',
        }}
      >
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
            { stat: '48 hrs', label: 'Worker placement' },
            { stat: 'Open book', label: 'Flat management fee. No markup.' },
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
      </section>

      {/* ── WHO WE SERVE ──────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#F4ECDC',
          padding: 'clamp(64px, 10vw, 120px) clamp(24px, 6vw, 80px)',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
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
              We serve administrators, HR managers, and directors of operations
              at skilled nursing facilities, assisted living communities,
              memory care units, and multifamily senior residences. If staffing
              gaps are costing you compliance hours, we're built for you.
            </p>
          </div>

          {/* Service cards grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: 20,
            }}
          >
            {SERVICES.map(svc => (
              <ServiceCard
                key={svc.title}
                title={svc.title}
                description={svc.description}
                href="/services"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN BOOK PRICING ─────────────────────────────────────────── */}
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
          {/* Left — PricingTable */}
          <PricingTable variant="navy" />

          {/* Right — copy */}
          <div>
            <p className="eyebrow" style={{ marginBottom: 16 }}>The Fidend Standard</p>
            <div
              style={{ height: 1, backgroundColor: '#B89968', marginBottom: 28 }}
            />
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontVariationSettings: "'SOFT' 30, 'opsz' 48",
                fontWeight: 300,
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                color: '#F4ECDC',
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
                color: 'rgba(244,236,220,0.62)',
                margin: '0 0 32px',
              }}
            >
              Most staffing agencies mark up the worker rate and never disclose
              it. We don't. Our management fee is flat. The worker rate you see
              is the worker rate they're paid. Your invoice is two numbers, not
              a paragraph of adjustments.
            </p>
            <Link href="/contact" className="btn-primary">
              Request a Conversation
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#F4ECDC',
          padding: 'clamp(64px, 10vw, 120px) clamp(24px, 6vw, 80px)',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ maxWidth: 480, marginBottom: 'clamp(40px, 6vw, 72px)' }}>
            <p className="eyebrow" style={{ marginBottom: 16 }}>How It Works</p>
            <div className="gold-rule" style={{ marginBottom: 28 }} />
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontVariationSettings: "'SOFT' 30, 'opsz' 48",
                fontWeight: 300,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: '#16243A',
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              From first call to first shift in 48 hours.
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: 40,
            }}
          >
            {PROCESS_STEPS.map(step => (
              <div key={step.number}>
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
                    backgroundColor: 'rgba(22,36,58,0.15)',
                    marginBottom: 20,
                  }}
                />
                <h3
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontVariationSettings: "'SOFT' 30, 'opsz' 24",
                    fontWeight: 400,
                    fontSize: '1.15rem',
                    color: '#16243A',
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
                    color: 'rgba(22,36,58,0.60)',
                    margin: 0,
                  }}
                >
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO INTERLUDE ───────────────────────────────────────────── */}
      {/*
       * HIGGSFIELD ASSET 02 — Full-width image (cinematic still)
       * Replace this placeholder <div> with <Image> once asset is generated:
       *   Tool: generate_image · Model: flux_dev or seedance_2_0_image
       *   Prompt: "Interior of an upscale senior living common room. Cream walls,
       *   navy accents, warm golden-hour light streaming through tall windows.
       *   Dining table set for service. No people. Institutional calm. Film grain."
       *   Aspect: 21:9 (ultra-wide banner)
       *   Place at: /public/images/common-room.jpg
       */}
      <div
        aria-hidden="true"
        style={{
          width: '100%',
          height: 'clamp(200px, 28vw, 480px)',
          backgroundColor: '#16243A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(135deg, rgba(22,36,58,1) 0%, rgba(22,36,58,0.7) 50%, rgba(184,153,104,0.15) 100%)',
          }}
        />
        <p
          className="eyebrow"
          style={{
            position: 'relative',
            zIndex: 1,
            color: 'rgba(184,153,104,0.35)',
            letterSpacing: '0.5em',
          }}
        >
          Higgsfield Asset 02
        </p>
      </div>

      {/* ── FOOTER CTA ────────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#16243A',
          padding: 'clamp(64px, 10vw, 120px) clamp(24px, 6vw, 80px)',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <p className="eyebrow" style={{ marginBottom: 20 }}>Ready to Begin</p>
          <div
            style={{
              height: 1,
              backgroundColor: '#B89968',
              marginBottom: 36,
              maxWidth: 80,
              margin: '0 auto 36px',
            }}
          />
          <h2
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontVariationSettings: "'SOFT' 30, 'opsz' 48",
              fontWeight: 300,
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              color: '#F4ECDC',
              lineHeight: 1.1,
              margin: '0 0 24px',
            }}
          >
            Tell us your staffing gap. We'll close it.
          </h2>
          <p
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: 15,
              lineHeight: 1.7,
              color: 'rgba(244,236,220,0.60)',
              margin: '0 0 40px',
            }}
          >
            Our intake process takes 20 minutes. Workers are placed within 48
            hours. No long contracts.
          </p>
          <div
            style={{
              display: 'flex',
              gap: 20,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Link href="/contact" className="btn-primary">
              Request a Conversation
            </Link>
            <Link href="/contact#apply" className="btn-primary-navy">
              Apply to Work With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
