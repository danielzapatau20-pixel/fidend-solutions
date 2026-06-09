import HeroVideo from '@/components/HeroVideo'
import ServiceCard from '@/components/ServiceCard'
import PricingTable from '@/components/PricingTable'
import FadeIn from '@/components/FadeIn'
import CountUp from '@/components/CountUp'
import Marquee from '@/components/Marquee'
import Link from 'next/link'

const FMARK = (
  <g fill="currentColor">
    <path d="M 196.00 41.00 L 178.00 26.00 L 176.00 26.00 L 173.00 23.00 L 171.00 23.00 L 161.00 17.00 L 158.00 17.00 L 156.00 15.00 L 150.00 14.00 L 147.00 12.00 L 137.00 11.00 L 133.00 9.00 L 122.00 9.00 L 121.00 8.00 L 101.00 9.00 L 98.00 11.00 L 92.00 11.00 L 91.00 12.00 L 87.00 12.00 L 85.00 14.00 L 78.00 15.00 L 76.00 17.00 L 71.00 18.00 L 69.00 20.00 L 65.00 21.00 L 55.00 27.00 L 41.00 38.00 L 26.00 56.00 L 26.00 58.00 L 24.00 59.00 L 23.00 63.00 L 18.00 70.00 L 17.00 75.00 L 15.00 77.00 L 14.00 83.00 L 12.00 86.00 L 11.00 95.00 L 9.00 99.00 L 9.00 130.00 L 11.00 135.00 L 12.00 144.00 L 21.00 165.00 L 26.00 173.00 L 39.00 189.00 L 41.00 190.00 L 41.00 150.00 L 38.00 146.00 L 38.00 143.00 L 36.00 141.00 L 35.00 134.00 L 33.00 130.00 L 33.00 124.00 L 32.00 123.00 L 33.00 95.00 L 39.00 76.00 L 41.00 74.00 L 44.00 66.00 L 58.00 47.00 L 77.00 32.00 L 79.00 32.00 L 81.00 30.00 L 96.00 23.00 L 103.00 22.00 L 107.00 20.00 L 122.00 19.00 L 123.00 18.00 L 142.00 19.00 L 143.00 20.00 L 149.00 20.00 L 157.00 23.00 L 160.00 23.00 L 180.00 33.00 L 195.00 44.00 L 205.00 55.00 L 211.00 63.00 L 211.00 65.00 L 213.00 65.00 L 206.00 53.00 Z" />
    <path d="M 119.00 149.00 L 118.00 148.00 L 82.00 148.00 L 81.00 149.00 L 83.00 152.00 L 83.00 169.00 L 82.00 170.00 L 82.00 175.00 L 81.00 176.00 L 81.00 180.00 L 80.00 181.00 L 80.00 184.00 L 79.00 185.00 L 79.00 187.00 L 78.00 188.00 L 78.00 190.00 L 77.00 191.00 L 77.00 193.00 L 74.00 198.00 L 74.00 200.00 L 72.00 202.00 L 72.00 203.00 L 71.00 204.00 L 71.00 205.00 L 69.00 207.00 L 68.00 210.00 L 64.00 214.00 L 64.00 215.00 L 59.00 220.00 L 59.00 221.00 L 57.00 223.00 L 56.00 223.00 L 56.00 224.00 L 55.00 225.00 L 54.00 225.00 L 47.00 231.00 L 44.00 232.00 L 44.00 233.00 L 43.00 234.00 L 41.00 234.00 L 40.00 235.00 L 39.00 235.00 L 37.00 237.00 L 35.00 237.00 L 34.00 238.00 L 32.00 238.00 L 30.00 240.00 L 27.00 240.00 L 26.00 241.00 L 22.00 241.00 L 19.00 243.00 L 9.00 243.00 L 8.00 244.00 L 32.00 244.00 L 33.00 243.00 L 40.00 243.00 L 41.00 242.00 L 43.00 242.00 L 44.00 241.00 L 47.00 241.00 L 48.00 240.00 L 51.00 240.00 L 54.00 238.00 L 56.00 238.00 L 57.00 237.00 L 59.00 237.00 L 60.00 236.00 L 61.00 236.00 L 62.00 235.00 L 63.00 235.00 L 64.00 234.00 L 65.00 234.00 L 66.00 233.00 L 67.00 233.00 L 68.00 232.00 L 71.00 231.00 L 73.00 229.00 L 74.00 229.00 L 77.00 226.00 L 78.00 226.00 L 81.00 223.00 L 82.00 223.00 L 86.00 219.00 L 87.00 219.00 L 87.00 218.00 L 88.00 217.00 L 89.00 217.00 L 91.00 214.00 L 92.00 214.00 L 92.00 213.00 L 95.00 210.00 L 95.00 209.00 L 100.00 204.00 L 101.00 201.00 L 104.00 198.00 L 104.00 196.00 L 106.00 194.00 L 107.00 191.00 L 109.00 189.00 L 109.00 187.00 L 110.00 186.00 L 110.00 184.00 L 112.00 182.00 L 112.00 180.00 L 113.00 179.00 L 113.00 176.00 L 115.00 173.00 L 115.00 170.00 L 116.00 169.00 L 116.00 164.00 L 117.00 163.00 L 117.00 161.00 L 118.00 160.00 L 118.00 151.00 L 119.00 150.00 Z" />
    <path d="M 81.00 119.00 L 158.00 119.00 L 159.00 120.00 L 160.00 119.00 L 160.00 118.00 L 161.00 117.00 L 161.00 116.00 L 163.00 114.00 L 163.00 113.00 L 164.00 112.00 L 164.00 111.00 L 166.00 109.00 L 166.00 108.00 L 168.00 106.00 L 168.00 105.00 L 169.00 104.00 L 169.00 103.00 L 172.00 100.00 L 172.00 99.00 L 173.00 98.00 L 173.00 97.00 L 175.00 95.00 L 175.00 94.00 L 174.00 93.00 L 95.00 93.00 L 94.00 94.00 L 93.00 94.00 L 93.00 95.00 L 92.00 96.00 L 92.00 97.00 L 90.00 99.00 L 90.00 100.00 L 89.00 101.00 L 89.00 102.00 L 87.00 104.00 L 87.00 105.00 L 86.00 106.00 L 86.00 108.00 L 84.00 110.00 L 84.00 111.00 L 83.00 112.00 L 83.00 114.00 L 82.00 115.00 L 82.00 116.00 L 81.00 117.00 Z" />
  </g>
)

const SERVICES = [
  {
    title: 'Housekeeping',
    description:
      'Daily room cleaning, common-area maintenance, and infection-control protocols. Trained to long-term care standards — proper disinfection sequences, biohazard awareness, resident dignity throughout.',
  },
  {
    title: 'Dietary / Food Service',
    description:
      'Tray delivery, dining-room service, and kitchen support aligned with your dietary specifications and care plans. Workers familiar with therapeutic diet protocols and allergy management.',
  },
  {
    title: 'Laundry',
    description:
      "Resident laundry, linen exchange, and dry-goods handling. Sorted, tracked, and returned on schedule per your facility's infection-control procedures.",
  },
  {
    title: 'Activities Assistance',
    description:
      "Structured program support under your activities coordinator's direction — engagement, facilitation, and logistical setup. Warm, patient, and resident-focused.",
  },
  {
    title: 'Companion Care',
    description:
      'Attentive non-medical companionship: conversation, ambulation assistance, and presence that sustains resident dignity. Briefed on cognitive sensitivity and communication preferences.',
  },
]

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Initial call',
    body: 'We learn your census, acuity level, and staffing gaps. Typically 20 minutes with your DON, administrator, or HR manager.',
  },
  {
    number: '02',
    title: 'Worker match',
    body: 'We assign TB-cleared, background-checked workers matched to your service area, shift length, and facility type.',
  },
  {
    number: '03',
    title: 'On-site orientation',
    body: "Workers arrive briefed on your facility's layout and general protocols. Your DON or shift supervisor handles final orientation.",
  },
  {
    number: '04',
    title: 'Ongoing management',
    body: 'We handle scheduling, HR, payroll, and compliance documentation. You manage care quality. One point of contact — always.',
  },
]

const WHY_FIDEND = [
  '4-hour response guarantee, 7 days a week',
  'Founder personally reviews every placement',
  'No rotating account representatives — ever',
  'Pennsylvania-based, same time zone as your facility',
  'Complete compliance file before day one',
]

const KEY_MESSAGES = [
  {
    number: '01',
    title: 'Open book pricing.',
    subtitle: 'Precios a libro abierto',
    body: 'Every invoice shows two line items: the worker\'s pay rate and our management fee — listed separately, always. You can audit either number. The markup is never hidden.',
  },
  {
    number: '02',
    title: 'Compliance handled.',
    subtitle: 'Cumplimiento gestionado',
    body: "Background checks, TB tests, state clearances, I-9 compliance — all managed by us. Your HR receives the complete file before the worker's first shift.",
  },
  {
    number: '03',
    title: 'Direct leadership access.',
    subtitle: 'Acceso directo',
    body: 'You work with the founder — not a rotating account rep. Founder mobile on every contract. When a surveyor walks in at 6 PM Friday, you have one number to call.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <HeroVideo overlayOpacity={0.60} minHeight="100svh">

        {/* F mark watermark — floats slowly */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: '-4%',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1,
            opacity: 0.055,
            pointerEvents: 'none',
          }}
        >
          <div style={{ animation: 'floatMark 14s ease-in-out infinite' }}>
            <svg width="480" height="547" viewBox="0 0 222 253" aria-hidden="true">
              {FMARK}
            </svg>
          </div>
        </div>

        {/* Hero content */}
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 80px)',
            display: 'flex',
            flexDirection: 'column',
            gap: 28,
            position: 'relative',
            zIndex: 2,
          }}
        >
          <FadeIn delay={80}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  backgroundColor: '#B89968',
                  display: 'inline-block',
                  animation: 'pulse-dot 2.5s ease-in-out infinite',
                  flexShrink: 0,
                }}
              />
              <p className="eyebrow" style={{ color: 'rgba(184,153,104,0.85)' }}>
                Pennsylvania · Senior Living Staffing
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <h1
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontVariationSettings: "'SOFT' 30, 'opsz' 72",
                fontWeight: 300,
                fontSize: 'clamp(2.8rem, 7vw, 6rem)',
                lineHeight: 1.03,
                color: '#F4ECDC',
                maxWidth: '16ch',
                margin: 0,
              }}
            >
              The staff your residents{' '}
              <em
                style={{
                  fontStyle: 'italic',
                  fontVariationSettings: "'SOFT' 80, 'opsz' 72",
                  color: '#B89968',
                }}
              >
                depend on.
              </em>
            </h1>
          </FadeIn>

          <FadeIn delay={340}>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 'clamp(15px, 1.8vw, 18px)',
                lineHeight: 1.68,
                color: 'rgba(244,236,220,0.72)',
                maxWidth: '44ch',
                margin: 0,
              }}
            >
              Fidend places TB-cleared, background-checked housekeepers, dietary
              aides, laundry attendants, activities aides, and companion caregivers
              in senior living homes across Pennsylvania.
            </p>
          </FadeIn>

          <FadeIn delay={460}>
            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'center' }}>
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
                  color: 'rgba(244,236,220,0.65)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '14px 0',
                  borderBottom: '1px solid rgba(244,236,220,0.20)',
                  transition: 'color 240ms ease-out, border-color 240ms ease-out',
                }}
              >
                See All Services
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={560}>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {['TB Cleared', 'Background Checked', 'Survey Ready'].map(badge => (
                <span
                  key={badge}
                  className="compliance-badge"
                  style={{ color: 'rgba(184,153,104,0.75)', borderColor: 'rgba(184,153,104,0.25)' }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Scroll cue */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: 36,
            left: '50%',
            zIndex: 2,
            animation: 'scrollCue 2.8s ease-in-out infinite',
            pointerEvents: 'none',
          }}
        >
          <svg width="20" height="28" viewBox="0 0 20 28" fill="none" aria-hidden="true">
            <path d="M3 4l7 7 7-7" stroke="#B89968" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.35"/>
            <path d="M3 12l7 7 7-7" stroke="#B89968" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.65"/>
            <path d="M3 20l7 7 7-7" stroke="#B89968" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="1"/>
          </svg>
        </div>
      </HeroVideo>

      {/* ── MARQUEE TRUST STRIP ───────────────────────────────────────── */}
      <div
        style={{
          backgroundColor: '#16243A',
          borderTop: '1px solid rgba(184,153,104,0.15)',
          borderBottom: '1px solid rgba(184,153,104,0.15)',
          paddingTop: 16,
          paddingBottom: 16,
        }}
      >
        <Marquee />
      </div>

      {/* ── STATS ─────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#F4ECDC', padding: 'clamp(56px, 9vw, 96px) clamp(24px, 6vw, 80px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: 'clamp(32px, 5vw, 0px)',
            }}
          >
            {[
              { to: 48,  suffix: ' hrs', label: 'to first shift', sub: 'from initial call' },
              { to: 5,   suffix: '',     label: 'service disciplines', sub: 'under one contract' },
              { to: 100, suffix: '%',    label: 'compliance documented', sub: 'before day one' },
              { to: 4,   suffix: ' hr',  label: 'response guarantee', sub: '7 days a week' },
            ].map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 100} direction="up">
                <div
                  style={{
                    textAlign: 'center',
                    padding: 'clamp(20px, 3vw, 32px) 16px',
                    borderRight: i < 3 ? '1px solid rgba(22,36,58,0.10)' : 'none',
                    position: 'relative',
                  }}
                >
                  {/* Number */}
                  <p
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontVariationSettings: "'SOFT' 30, 'opsz' 72",
                      fontWeight: 300,
                      fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
                      color: '#B89968',
                      margin: '0 0 6px',
                      lineHeight: 1,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    <CountUp to={stat.to} suffix={stat.suffix} />
                  </p>
                  {/* Label */}
                  <p
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: 13,
                      fontWeight: 500,
                      letterSpacing: '0.06em',
                      color: '#16243A',
                      margin: '0 0 4px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {stat.label}
                  </p>
                  {/* Sub-label */}
                  <p
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: 11,
                      color: 'rgba(22,36,58,0.45)',
                      letterSpacing: '0.04em',
                      margin: 0,
                    }}
                  >
                    {stat.sub}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE + SERVICES ───────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#EDE3CF',
          padding: 'clamp(72px, 11vw, 128px) clamp(24px, 6vw, 80px)',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {/* Intro */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(32px, 6vw, 80px)',
              alignItems: 'end',
              marginBottom: 'clamp(40px, 6vw, 72px)',
            }}
          >
            <FadeIn direction="left">
              <p className="eyebrow-navy" style={{ marginBottom: 16 }}>Who We Serve</p>
              <div style={{ height: 1, backgroundColor: '#B89968', marginBottom: 28, transformOrigin: 'left', animation: 'draw-x 1.2s ease-out forwards' }} />
              <h2
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontVariationSettings: "'SOFT' 30, 'opsz' 48",
                  fontWeight: 300,
                  fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                  color: '#16243A',
                  lineHeight: 1.08,
                  margin: 0,
                }}
              >
                Built for the professionals who keep care homes running.
              </h2>
            </FadeIn>

            <FadeIn direction="right" delay={120}>
              <p
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: 15,
                  lineHeight: 1.75,
                  color: 'rgba(22,36,58,0.62)',
                  margin: '0 0 28px',
                }}
              >
                We serve administrators, HR managers, and directors of operations
                at skilled nursing facilities, assisted living communities, memory
                care units, and senior residences across Pennsylvania.
              </p>
              <Link href="/services" className="btn-primary-navy">
                Explore Services
              </Link>
            </FadeIn>
          </div>

          {/* Service cards — staggered */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: 16,
            }}
          >
            {SERVICES.map((svc, i) => (
              <FadeIn key={svc.title} delay={i * 70} direction="up">
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

      {/* ── WHY FIDEND — DIRECT ACCESS ────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#16243A',
          padding: 'clamp(72px, 11vw, 128px) clamp(24px, 6vw, 80px)',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 'clamp(48px, 8vw, 96px)',
            alignItems: 'center',
          }}
        >
          {/* Branded image placeholder */}
          <FadeIn direction="left">
            <div
              style={{
                position: 'relative',
                aspectRatio: '4 / 5',
                background: 'linear-gradient(145deg, #0d1824 0%, #16243A 55%, #1d2f4a 100%)',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* F mark at low opacity */}
              <svg
                width="260"
                height="296"
                viewBox="0 0 222 253"
                aria-hidden="true"
                style={{ opacity: 0.07, position: 'absolute' }}
              >
                {FMARK}
              </svg>

              {/* Corner ornaments */}
              {[
                { top: 20, left: 20 },
                { top: 20, right: 20 },
                { bottom: 20, left: 20 },
                { bottom: 20, right: 20 },
              ].map((pos, i) => (
                <div key={i} style={{ position: 'absolute', ...pos }}>
                  <div style={{ width: 28, height: 1, backgroundColor: '#B89968', opacity: 0.5 }} />
                  <div style={{ width: 1, height: 28, backgroundColor: '#B89968', opacity: 0.5, position: 'absolute', top: 0, left: 0 }} />
                </div>
              ))}

              {/* Central quote mark */}
              <p
                style={{
                  position: 'absolute',
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontVariationSettings: "'SOFT' 80, 'opsz' 144",
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: 'clamp(6rem, 12vw, 10rem)',
                  color: 'rgba(184,153,104,0.12)',
                  margin: 0,
                  lineHeight: 1,
                  userSelect: 'none',
                }}
              >
                &#8220;
              </p>

              {/* Bottom label */}
              <p
                style={{
                  position: 'absolute',
                  bottom: 24,
                  left: 24,
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: 9,
                  letterSpacing: '0.35em',
                  textTransform: 'uppercase',
                  color: 'rgba(184,153,104,0.40)',
                  margin: 0,
                }}
              >
                Fidend Solutions · Pennsylvania
              </p>
            </div>
          </FadeIn>

          {/* Copy */}
          <FadeIn direction="right" delay={150}>
            <p className="eyebrow" style={{ marginBottom: 16 }}>Why Fidend</p>
            <div style={{ height: 1, backgroundColor: '#B89968', marginBottom: 28 }} />
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontVariationSettings: "'SOFT' 30, 'opsz' 48",
                fontWeight: 300,
                fontSize: 'clamp(1.9rem, 3.8vw, 3rem)',
                color: '#F4ECDC',
                lineHeight: 1.08,
                margin: '0 0 20px',
              }}
            >
              You work with leadership. Not a queue.
            </h2>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 15,
                lineHeight: 1.75,
                color: 'rgba(244,236,220,0.60)',
                margin: '0 0 32px',
              }}
            >
              Every Fidend contract includes direct access to founder leadership.
              When a surveyor walks in unannounced on a Friday evening, you are not
              submitting a ticket. You have one number. We answer.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {WHY_FIDEND.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 16,
                    padding: '14px 0',
                    borderBottom: i < WHY_FIDEND.length - 1
                      ? '1px solid rgba(184,153,104,0.12)'
                      : 'none',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ marginTop: 2, flexShrink: 0 }}>
                    <path d="M3 8l3.5 3.5L13 4" stroke="#B89968" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: 14,
                      color: 'rgba(244,236,220,0.80)',
                      lineHeight: 1.5,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 36 }}>
              <Link href="/about" className="btn-primary">
                Meet the Team
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── KEY MESSAGES — THE STANDARD ──────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#F4ECDC',
          padding: 'clamp(72px, 11vw, 128px) clamp(24px, 6vw, 80px)',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ maxWidth: 520, marginBottom: 'clamp(48px, 7vw, 80px)' }}>
              <p className="eyebrow-navy" style={{ marginBottom: 16 }}>The Standard</p>
              <div className="gold-rule" style={{ marginBottom: 28 }} />
              <h2
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontVariationSettings: "'SOFT' 30, 'opsz' 48",
                  fontWeight: 300,
                  fontSize: 'clamp(1.9rem, 3.8vw, 3rem)',
                  color: '#16243A',
                  lineHeight: 1.08,
                  margin: 0,
                }}
              >
                Three truths on every invoice.
              </h2>
            </div>
          </FadeIn>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {KEY_MESSAGES.map((msg, i) => (
              <FadeIn key={msg.number} delay={i * 80} direction="up">
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '72px 1fr',
                    gap: 'clamp(20px, 4vw, 40px)',
                    padding: 'clamp(32px, 5vw, 48px) 0',
                    borderBottom: i < KEY_MESSAGES.length - 1
                      ? '1px solid rgba(22,36,58,0.10)'
                      : 'none',
                    alignItems: 'start',
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontVariationSettings: "'SOFT' 30, 'opsz' 72",
                      fontWeight: 300,
                      fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                      color: '#B89968',
                      margin: 0,
                      lineHeight: 1,
                      opacity: 0.45,
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
                        fontSize: 'clamp(1.25rem, 2.5vw, 1.8rem)',
                        color: '#16243A',
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
                        lineHeight: 1.72,
                        color: 'rgba(22,36,58,0.60)',
                        margin: 0,
                        maxWidth: '58ch',
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

      {/* ── PROCESS TIMELINE ──────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#16243A',
          padding: 'clamp(72px, 11vw, 128px) clamp(24px, 6vw, 80px)',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ maxWidth: 520, marginBottom: 'clamp(48px, 7vw, 72px)' }}>
              <p className="eyebrow" style={{ marginBottom: 16 }}>The Process</p>
              <div style={{ height: 1, backgroundColor: '#B89968', marginBottom: 28 }} />
              <h2
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontVariationSettings: "'SOFT' 30, 'opsz' 48",
                  fontWeight: 300,
                  fontSize: 'clamp(1.9rem, 3.8vw, 3rem)',
                  color: '#F4ECDC',
                  lineHeight: 1.08,
                  margin: 0,
                }}
              >
                First call to first shift in 48 hours.
              </h2>
            </div>
          </FadeIn>

          {/* Timeline grid */}
          <div style={{ position: 'relative' }}>
            {/* Connecting line (desktop) */}
            <FadeIn direction="none">
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: 28,
                  left: 28,
                  right: 28,
                  height: 1,
                  backgroundColor: 'rgba(184,153,104,0.20)',
                  transformOrigin: 'left',
                  animation: 'draw-x 1.4s ease-out forwards',
                }}
              />
            </FadeIn>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                gap: 'clamp(32px, 5vw, 48px)',
                position: 'relative',
              }}
            >
              {PROCESS_STEPS.map((step, i) => (
                <FadeIn key={step.number} delay={i * 110} direction="up">
                  <div style={{ position: 'relative' }}>
                    {/* Step circle */}
                    <div
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: '50%',
                        border: '1px solid rgba(184,153,104,0.40)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 28,
                        backgroundColor: '#16243A',
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Fraunces', Georgia, serif",
                          fontVariationSettings: "'SOFT' 30, 'opsz' 24",
                          fontWeight: 300,
                          fontSize: '1rem',
                          color: '#B89968',
                          lineHeight: 1,
                        }}
                      >
                        {step.number}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontFamily: "'Fraunces', Georgia, serif",
                        fontVariationSettings: "'SOFT' 30, 'opsz' 24",
                        fontWeight: 400,
                        fontSize: '1.2rem',
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
                        lineHeight: 1.68,
                        color: 'rgba(244,236,220,0.50)',
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
        </div>
      </section>

      {/* ── PULL QUOTE ────────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#EDE3CF',
          padding: 'clamp(72px, 12vw, 140px) clamp(24px, 6vw, 80px)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background F mark */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: 0.04,
            pointerEvents: 'none',
          }}
        >
          <svg width="600" height="683" viewBox="0 0 222 253" aria-hidden="true">
            {FMARK}
          </svg>
        </div>

        <div style={{ maxWidth: 880, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <FadeIn direction="scale">
            {/* Opening mark */}
            <p
              aria-hidden="true"
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontVariationSettings: "'SOFT' 30, 'opsz' 144",
                fontWeight: 300,
                fontSize: 'clamp(4rem, 8vw, 7rem)',
                color: '#B89968',
                lineHeight: 0.6,
                margin: '0 0 24px',
                opacity: 0.5,
              }}
            >
              &#8220;
            </p>

            <blockquote
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontVariationSettings: "'SOFT' 60, 'opsz' 72",
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
                lineHeight: 1.2,
                color: '#16243A',
                margin: '0 0 36px',
                letterSpacing: '-0.01em',
              }}
            >
              Your facility has a survey tomorrow.<br />
              Your workers are ready or they aren&#39;t.
            </blockquote>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 16,
              }}
            >
              <div style={{ width: 32, height: 1, backgroundColor: '#B89968', opacity: 0.5 }} />
              <p
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: 'rgba(22,36,58,0.50)',
                  margin: 0,
                }}
              >
                The Fidend Standard
              </p>
              <div style={{ width: 32, height: 1, backgroundColor: '#B89968', opacity: 0.5 }} />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── PRICING ───────────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#F4ECDC',
          padding: 'clamp(72px, 11vw, 128px) clamp(24px, 6vw, 80px)',
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

          <FadeIn delay={140} direction="right">
            <p className="eyebrow-navy" style={{ marginBottom: 16 }}>Pricing</p>
            <div className="gold-rule" style={{ marginBottom: 28 }} />
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontVariationSettings: "'SOFT' 30, 'opsz' 48",
                fontWeight: 300,
                fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)',
                color: '#16243A',
                lineHeight: 1.1,
                margin: '0 0 20px',
              }}
            >
              You see every dollar.<br />We hide nothing.
            </h2>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 15,
                lineHeight: 1.75,
                color: 'rgba(22,36,58,0.60)',
                margin: '0 0 32px',
              }}
            >
              Most staffing agencies present one blended bill rate — the margin
              is buried and you cannot see it. Fidend invoices show two line
              items every time: the worker's pay rate and our management fee.
              Both numbers. Always visible. The transparency is the product.
            </p>
            <Link href="/contact" className="btn-primary-navy">
              Request a Rate Sheet
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#16243A',
          padding: 'clamp(80px, 12vw, 140px) clamp(24px, 6vw, 80px)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background ornament */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: '-8%',
            bottom: '-10%',
            opacity: 0.03,
            pointerEvents: 'none',
          }}
        >
          <svg width="560" height="638" viewBox="0 0 222 253" aria-hidden="true">
            {FMARK}
          </svg>
        </div>

        <FadeIn direction="scale">
          <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <p className="eyebrow" style={{ marginBottom: 20 }}>Ready to Begin</p>
            <div
              style={{
                height: 1,
                backgroundColor: '#B89968',
                maxWidth: 56,
                margin: '0 auto 36px',
                opacity: 0.6,
              }}
            />
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontVariationSettings: "'SOFT' 30, 'opsz' 48",
                fontWeight: 300,
                fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                color: '#F4ECDC',
                lineHeight: 1.08,
                margin: '0 0 24px',
              }}
            >
              Tell us your staffing gap.<br />
              <em
                style={{
                  fontStyle: 'italic',
                  fontVariationSettings: "'SOFT' 60, 'opsz' 48",
                  color: '#B89968',
                }}
              >
                We will close it.
              </em>
            </h2>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 15,
                lineHeight: 1.72,
                color: 'rgba(244,236,220,0.55)',
                margin: '0 0 44px',
              }}
            >
              Our intake process takes 20 minutes. Workers placed within 48 hours.
              No long-term contracts required.
            </p>
            <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary">
                Request a Conversation
              </Link>
              <Link href="/contact#apply" className="btn-primary">
                Apply to Work With Us
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  )
}
