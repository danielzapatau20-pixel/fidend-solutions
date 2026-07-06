'use client'

import Link from 'next/link'
import Logo from './Logo'

const mainLinks = [
  { label: 'Home',    href: '/' },
  { label: 'About',   href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const divisionLinks = [
  { label: 'Fidend Care',        href: '/care' },
  { label: 'Fidend Living',      href: '/living' },
  { label: 'Fidend Hospitality', href: '/hospitality' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      role="contentinfo"
      style={{
        backgroundColor: '#16243A',
        paddingTop: 'clamp(56px, 7vw, 96px)',
        paddingBottom: 40,
        paddingLeft:  'clamp(28px, 6.7vw, 88px)',
        paddingRight: 'clamp(28px, 6.7vw, 88px)',
      }}
    >
      {/* Top: Logo + Nav columns */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 48,
          marginBottom: 56,
        }}
      >
        {/* Logo block */}
        <div>
          <Logo variant="navy" size="md" showTagline={true} />
        </div>

        {/* Nav columns */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 48,
          }}
        >
          {/* Divisions */}
          <nav aria-label="Divisions navigation">
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#B89968',
                marginBottom: 16,
              }}
            >
              Divisions
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {divisionLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: 12,
                      fontWeight: 400,
                      letterSpacing: '0.06em',
                      color: 'rgba(244,236,220,0.65)',
                      textDecoration: 'none',
                      transition: 'color 240ms ease-out',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#B89968')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(244,236,220,0.65)')}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Main links */}
          <nav aria-label="Footer navigation">
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#B89968',
                marginBottom: 16,
              }}
            >
              Company
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {mainLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: 12,
                      fontWeight: 400,
                      letterSpacing: '0.06em',
                      color: 'rgba(244,236,220,0.65)',
                      textDecoration: 'none',
                      transition: 'color 240ms ease-out',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#B89968')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(244,236,220,0.65)')}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact block */}
          <div>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#B89968',
                marginBottom: 16,
              }}
            >
              Contact
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a
                href="tel:+12162589368"
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: 12,
                  color: 'rgba(244,236,220,0.65)',
                  textDecoration: 'none',
                  letterSpacing: '0.03em',
                  transition: 'color 240ms ease-out',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#B89968')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(244,236,220,0.65)')}
              >
                +1 (216) 258-9368
              </a>
              <a
                href="mailto:info@fidend.com"
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: 12,
                  color: 'rgba(244,236,220,0.65)',
                  textDecoration: 'none',
                  letterSpacing: '0.03em',
                  transition: 'color 240ms ease-out',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#B89968')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(244,236,220,0.65)')}
              >
                info@fidend.com
              </a>
              <p
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: 11,
                  color: 'rgba(244,236,220,0.35)',
                  margin: 0,
                  letterSpacing: '0.03em',
                }}
              >
                Pennsylvania, USA
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gold rule */}
      <div
        style={{
          height: 1,
          backgroundColor: 'rgba(184,153,104,0.25)',
          marginBottom: 32,
        }}
      />

      {/* Brand phrase */}
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <p
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: '0.45em',
            textTransform: 'uppercase',
            color: '#B89968',
          }}
        >
          CARE&nbsp;&nbsp;·&nbsp;&nbsp;LIVING&nbsp;&nbsp;·&nbsp;&nbsp;HOSPITALITY
        </p>
      </div>

      {/* Gold rule */}
      <div
        style={{
          height: 1,
          backgroundColor: 'rgba(184,153,104,0.15)',
          marginBottom: 24,
        }}
      />

      {/* Bottom row */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 16,
        }}
      >
        <p
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 11,
            color: 'rgba(244,236,220,0.35)',
            letterSpacing: '0.05em',
          }}
        >
          &copy; {year} Fidend Solutions LLC. All rights reserved. Pennsylvania, USA.
        </p>
        <p
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 11,
            color: 'rgba(244,236,220,0.25)',
            letterSpacing: '0.05em',
          }}
        >
          Operational Staffing · Care · Residential · Hospitality
        </p>
      </div>
    </footer>
  )
}
