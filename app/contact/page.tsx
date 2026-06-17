import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import ApplyForm from '@/components/ApplyForm'
import FadeIn from '@/components/FadeIn'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Hire Fidend to staff your facility, or apply to work with us. We respond to facility inquiries within 4 hours and review every worker application.',
}

export default function ContactPage() {
  return (
    <>
      {/* ── PAGE HEADER ───────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#16243A',
          padding:
            'clamp(80px, 12vw, 140px) clamp(24px, 6vw, 80px) clamp(64px, 10vw, 100px)',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn delay={80}>
            <p
              className="eyebrow"
              style={{ color: 'rgba(184,153,104,0.85)', marginBottom: 16 }}
            >
              Contact
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
                maxWidth: '22ch',
                margin: '0 0 20px',
              }}
            >
              Two conversations. One company.
            </h1>
          </FadeIn>
          <FadeIn delay={320}>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 'clamp(14px, 1.6vw, 16px)',
                lineHeight: 1.65,
                color: 'rgba(244,236,220,0.65)',
                maxWidth: '52ch',
                margin: 0,
              }}
            >
              If you run a facility, tell us your staffing situation. If you want
              to work, apply below. We read everything and respond to every
              submission.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── DUAL FORMS ────────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#F4ECDC',
          padding: 'clamp(64px, 10vw, 120px) clamp(24px, 6vw, 80px)',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: 'clamp(48px, 8vw, 96px)',
            alignItems: 'start',
          }}
        >
          {/* ── HIRE FIDEND ─── */}
          <div id="hire">
          <FadeIn direction="left">
            {/* Section header */}
            <div style={{ marginBottom: 40 }}>
              <p className="eyebrow" style={{ marginBottom: 12 }}>
                For Facilities
              </p>
              <div className="gold-rule" style={{ marginBottom: 24 }} />
              <h2
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontVariationSettings: "'SOFT' 30, 'opsz' 36",
                  fontWeight: 400,
                  fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)',
                  color: '#16243A',
                  lineHeight: 1.12,
                  margin: '0 0 12px',
                }}
              >
                Hire Fidend
              </h2>
              <p
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: 14,
                  lineHeight: 1.65,
                  color: 'rgba(22,36,58,0.58)',
                  margin: 0,
                }}
              >
                We respond to every inquiry within 4 hours. If your need is
                urgent, call us directly.
              </p>
            </div>

            <ContactForm />

            {/* Direct contact */}
            <div
              style={{
                marginTop: 40,
                paddingTop: 32,
                borderTop: '1px solid rgba(22,36,58,0.12)',
              }}
            >
              <p
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: 'rgba(22,36,58,0.45)',
                  marginBottom: 16,
                }}
              >
                Or Reach Us Directly
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <a
                  href="tel:+1XXXXXXXXXX"
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontVariationSettings: "'SOFT' 30, 'opsz' 24",
                    fontWeight: 400,
                    fontSize: '1.1rem',
                    color: '#16243A',
                    textDecoration: 'none',
                    transition: 'color 240ms ease-out',
                  }}
                >
                  +1 (XXX) XXX-XXXX
                </a>
                <a
                  href="mailto:hello@fidend.com"
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: 14,
                    color: '#B89968',
                    textDecoration: 'none',
                    transition: 'color 240ms ease-out',
                  }}
                >
                  hello@fidend.com
                </a>
              </div>
            </div>
          </FadeIn>
          </div>

          {/* ── APPLY TO WORK ─── */}
          <div id="apply">
          <FadeIn delay={140}>
            {/* Section header */}
            <div style={{ marginBottom: 40 }}>
              <p className="eyebrow" style={{ marginBottom: 12 }}>
                For Workers
              </p>
              <div className="gold-rule" style={{ marginBottom: 24 }} />
              <h2
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontVariationSettings: "'SOFT' 30, 'opsz' 36",
                  fontWeight: 400,
                  fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)',
                  color: '#16243A',
                  lineHeight: 1.12,
                  margin: '0 0 12px',
                }}
              >
                Apply to Work
              </h2>
              <p
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: 14,
                  lineHeight: 1.65,
                  color: 'rgba(22,36,58,0.58)',
                  margin: 0,
                }}
              >
                We review every application. Expect a call within 2 business
                days. We place workers who are committed to senior care, not
                just available.
              </p>
            </div>

            <ApplyForm />

            {/* Worker FAQ */}
            <div
              style={{
                marginTop: 40,
                paddingTop: 32,
                borderTop: '1px solid rgba(22,36,58,0.12)',
              }}
            >
              <p
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: 'rgba(22,36,58,0.45)',
                  marginBottom: 20,
                }}
              >
                What to Expect
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {[
                  {
                    q: 'Do I need prior senior care experience?',
                    a: 'Not required, but preferred. We consider attitude and reliability.',
                  },
                  {
                    q: 'How flexible is the schedule?',
                    a: 'We match you to shifts based on the availability you give us.',
                  },
                  {
                    q: 'How quickly can I start?',
                    a: 'Once your application is reviewed, typically within one week of your first placement.',
                  },
                ].map((item, i, arr) => (
                  <div
                    key={item.q}
                    style={{
                      padding: '16px 0',
                      borderBottom:
                        i < arr.length - 1
                          ? '1px solid rgba(22,36,58,0.10)'
                          : 'none',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'Inter, system-ui, sans-serif',
                        fontSize: 13,
                        fontWeight: 500,
                        color: '#16243A',
                        margin: '0 0 6px',
                      }}
                    >
                      {item.q}
                    </p>
                    <p
                      style={{
                        fontFamily: 'Inter, system-ui, sans-serif',
                        fontSize: 13,
                        lineHeight: 1.6,
                        color: 'rgba(22,36,58,0.55)',
                        margin: 0,
                      }}
                    >
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
          </div>
        </div>
      </section>

      {/* ── LOCATION STRIP ────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#16243A',
          padding: 'clamp(40px, 6vw, 64px) clamp(24px, 6vw, 80px)',
        }}
      >
        <FadeIn
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 32,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'rgba(244,236,220,0.35)',
                marginBottom: 8,
              }}
            >
              Service Area
            </p>
            <p
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontVariationSettings: "'SOFT' 30, 'opsz' 24",
                fontWeight: 400,
                fontSize: '1.15rem',
                color: '#F4ECDC',
                margin: 0,
              }}
            >
              Pennsylvania: currently accepting new facilities
            </p>
          </div>
          <div
            style={{
              height: 1,
              backgroundColor: 'rgba(184,153,104,0.20)',
              flex: 1,
              minWidth: 40,
            }}
          />
          <p
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: '#B89968',
              margin: 0,
              whiteSpace: 'nowrap',
            }}
          >
            Claridad · Estrategia · Resultados
          </p>
        </FadeIn>
      </section>
    </>
  )
}
