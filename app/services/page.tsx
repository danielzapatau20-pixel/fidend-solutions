import type { Metadata } from 'next'
import HeroVideo from '@/components/HeroVideo'
import ServiceCard from '@/components/ServiceCard'
import PricingTable from '@/components/PricingTable'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Housekeeping, dietary, laundry, activities, and companion care staffing for senior living facilities. TB-cleared, background-checked workers placed within 48 hours.',
}

const SERVICES = [
  {
    title: 'Housekeeping',
    description:
      'Daily room cleaning, common-area maintenance, and infection-control protocols. Our housekeepers are trained to long-term care standards — proper disinfection sequences, biohazard awareness, and resident dignity throughout.',
  },
  {
    title: 'Dietary / Food Service',
    description:
      'Tray delivery, dining-room service, and kitchen support aligned with your dietary specifications and resident care plans. We place workers familiar with therapeutic diet protocols and allergy management.',
  },
  {
    title: 'Laundry',
    description:
      'Resident laundry, linen exchange, and dry-goods handling. Sorted, tracked, and returned on schedule. Workers follow your facility\'s sorting and infection-control procedures from day one.',
  },
  {
    title: 'Activities Assistance',
    description:
      'Structured program support under your activities coordinator\'s direction. Engagement, facilitation, and logistical setup for recreational and therapeutic programming. Warm, patient, and resident-focused.',
  },
  {
    title: 'Companion Care',
    description:
      'Attentive non-medical companionship: conversation, ambulation assistance, and presence that sustains resident dignity. Companions are briefed on cognitive sensitivity and communication preferences.',
  },
]

const COMPLIANCE_ITEMS = [
  'TB test — current and documented',
  'Criminal background check — state and federal',
  'Identity verification — I-9 compliant',
  'Reference check — prior senior care preferred',
  'HIPAA awareness training',
  'Infection control orientation',
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
    body: 'Within 48 hours we assign TB-cleared, background-checked workers aligned to your service area, shift length, and facility type.',
  },
  {
    number: '03',
    title: 'On-site orientation',
    body: 'Workers arrive briefed on your facility\'s layout and general protocols. Your DON or shift supervisor handles final orientation to your specific procedures.',
  },
  {
    number: '04',
    title: 'Ongoing management',
    body: 'We handle scheduling, HR, payroll, and compliance documentation. You manage care quality. One point of contact — always.',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <HeroVideo
        /**
         * HIGGSFIELD ASSET 03 — Services hero (static image or short video)
         * src="/videos/services-loop.mp4"  (optional short loop)
         * poster="/images/services-hero.jpg"
         * Tool: generate_image · Model: flux_dev
         * Prompt: "Close-up of a freshly made bed in a senior living room. Crisp
         * white linens, navy throw pillow, warm bedside lamp. Golden hour.
         * Institutional precision. No people. Film grain."
         */
        overlayOpacity={0.65}
        minHeight="60svh"
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 80px)',
          }}
        >
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
            Every Fidend worker is TB-cleared, background-checked, and oriented
            to senior care before their first shift at your facility.
          </p>
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
            {SERVICES.map(svc => (
              <ServiceCard
                key={svc.title}
                title={svc.title}
                description={svc.description}
              />
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
          <div style={{ maxWidth: 560, marginBottom: 'clamp(40px, 6vw, 72px)' }}>
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
            {HOW_IT_WORKS.map(step => (
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE ────────────────────────────────────────────────── */}
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
          <div>
            <p className="eyebrow" style={{ marginBottom: 16 }}>Compliance</p>
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
              Every worker arrives ready for survey.
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
              We maintain documentation on every worker in our network. If a
              surveyor asks for proof of compliance, you can produce it. We keep
              your facility audit-ready as a baseline condition of service, not
              an upsell.
            </p>
            <Link href="/contact" className="btn-primary-navy">
              Request a Conversation
            </Link>
          </div>

          {/* Right — checklist */}
          <div>
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
              Every Worker · Every Time
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {COMPLIANCE_ITEMS.map((item, i) => (
                <div
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    padding: '16px 0',
                    borderBottom:
                      i < COMPLIANCE_ITEMS.length - 1
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
          </div>
        </div>
      </section>

      {/* ── PRICING ───────────────────────────────────────────────────── */}
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
          <div>
            <p className="eyebrow" style={{ marginBottom: 16 }}>Pricing</p>
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
              The invoice you receive is the invoice we'd show anyone.
            </h2>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 15,
                lineHeight: 1.7,
                color: 'rgba(244,236,220,0.60)',
                margin: '0 0 32px',
              }}
            >
              Worker rate plus our flat management fee. No blended rates, no
              hidden charges, no percentage markups. Transparent billing is not
              a feature — it's the foundation of a working relationship.
            </p>
            <Link href="/contact" className="btn-primary">
              Request a Rate Sheet
            </Link>
          </div>

          <PricingTable variant="navy" />
        </div>
      </section>
    </>
  )
}
