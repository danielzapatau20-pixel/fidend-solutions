'use client'

import Link from 'next/link'
import Logo from './Logo'

const navLinks = [
  { label: 'Home',     href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About',    href: '/about' },
  { label: 'Contact',  href: '/contact' },
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
      {/* Top: Logo + Nav */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 40, marginBottom: 48 }}>

        {/* Logo block */}
        <div>
          <Logo variant="navy" size="md" showTagline={true} />
        </div>

        {/* Nav links */}
        <nav aria-label="Footer navigation">
          <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '12px 32px' }}>
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: 12,
                    fontWeight: 400,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
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
      </div>

      {/* Gold rule */}
      <div style={{ height: 1, backgroundColor: 'rgba(184,153,104,0.25)', marginBottom: 32 }} />

      {/* CLARIDAD · ESTRATEGIA · RESULTADOS */}
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
          CLARIDAD&nbsp;&nbsp;·&nbsp;&nbsp;ESTRATEGIA&nbsp;&nbsp;·&nbsp;&nbsp;RESULTADOS
        </p>
      </div>

      {/* Gold rule */}
      <div style={{ height: 1, backgroundColor: 'rgba(184,153,104,0.15)', marginBottom: 24 }} />

      {/* Bottom row */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
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
          Operational Staffing · Senior Living · Multifamily · Institutional
        </p>
      </div>
    </footer>
  )
}
