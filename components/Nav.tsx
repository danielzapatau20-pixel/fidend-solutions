'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'

const navLinks = [
  { label: 'Home',     href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About',    href: '/about' },
  { label: 'Contact',  href: '/contact' },
]

const DESKTOP_BREAKPOINT = 1280

export default function Nav() {
  const [menuOpen,   setMenuOpen]   = useState(false)
  const [scrolled,   setScrolled]   = useState(false)
  const [isDesktop,  setIsDesktop]  = useState(false)
  const pathname = usePathname()

  // Close on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Scroll shadow
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Responsive: track if desktop width
  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`)
    setIsDesktop(mq.matches)
    const handler = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches)
      if (e.matches) setMenuOpen(false)
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  // Body scroll lock while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        role="banner"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          backgroundColor: '#16243A',
          borderBottom: scrolled ? '1px solid rgba(184,153,104,0.25)' : '1px solid transparent',
          transition: 'border-color 240ms ease-out',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft:  'clamp(20px, 5vw, 88px)',
            paddingRight: 'clamp(20px, 5vw, 88px)',
            height: 68,
          }}
        >
          <Logo variant="navy" size="md" />

          {/* Desktop nav — JS-controlled, no Tailwind display conflict */}
          {isDesktop && (
            <nav
              aria-label="Main navigation"
              style={{ display: 'flex', alignItems: 'center', gap: 28 }}
            >
              {navLinks.map(({ label, href }) => {
                const active = href === '/' ? pathname === '/' : pathname.startsWith(href)
                return (
                  <Link
                    key={href}
                    href={href}
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: 13,
                      fontWeight: 400,
                      letterSpacing: '0.08em',
                      color: active ? '#B89968' : '#F4ECDC',
                      textDecoration: 'none',
                      transition: 'color 240ms ease-out',
                      paddingBottom: 2,
                      borderBottom: active ? '1px solid #B89968' : '1px solid transparent',
                    }}
                  >
                    {label}
                  </Link>
                )
              })}

              <div style={{ width: 1, height: 20, backgroundColor: 'rgba(184,153,104,0.35)' }} />

              <Link
                href="/contact#hire"
                className="btn-gold-fill"
                style={{ fontSize: 11, padding: '10px 20px', letterSpacing: '0.25em' }}
              >
                Hire Fidend
              </Link>

              <Link
                href="/contact#apply"
                className="btn-primary"
                style={{ fontSize: 11, padding: '10px 20px', letterSpacing: '0.25em' }}
              >
                Apply to Work
              </Link>
            </nav>
          )}

          {/* Mobile: CTA + hamburger */}
          {!isDesktop && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Link
                href="/contact#hire"
                className="btn-gold-fill"
                style={{ fontSize: 10, padding: '8px 16px', letterSpacing: '0.2em' }}
              >
                Hire Fidend
              </Link>

              <button
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                onClick={() => setMenuOpen(prev => !prev)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: 5,
                  cursor: 'pointer',
                }}
              >
                <span style={{
                  display: 'block', width: 24, height: 1,
                  backgroundColor: '#F4ECDC',
                  transformOrigin: 'center',
                  transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none',
                  transition: 'transform 240ms ease-out',
                }} />
                <span style={{
                  display: 'block', width: 24, height: 1,
                  backgroundColor: '#F4ECDC',
                  opacity: menuOpen ? 0 : 1,
                  transition: 'opacity 240ms ease-out',
                }} />
                <span style={{
                  display: 'block', width: 24, height: 1,
                  backgroundColor: '#F4ECDC',
                  transformOrigin: 'center',
                  transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
                  transition: 'transform 240ms ease-out',
                }} />
              </button>
            </div>
          )}
        </div>

        <div style={{ height: 1, backgroundColor: 'rgba(184,153,104,0.20)' }} />
      </header>

      {/* Mobile full-screen overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 49,
          backgroundColor: '#16243A',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 48,
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 240ms ease-out',
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        <nav aria-label="Mobile navigation" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40 }}>
          {navLinks.map(({ label, href }) => {
            const active = href === '/' ? pathname === '/' : pathname.startsWith(href)
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontVariationSettings: "'SOFT' 30, 'opsz' 72",
                  fontWeight: 300,
                  fontSize: '2rem',
                  color: active ? '#B89968' : '#F4ECDC',
                  textDecoration: 'none',
                  letterSpacing: '-0.01em',
                  transition: 'color 240ms ease-out',
                }}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        <div style={{ color: '#B89968', fontSize: 12 }}>◇</div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <Link
            href="/contact#hire"
            onClick={() => setMenuOpen(false)}
            className="btn-gold-fill"
            style={{ letterSpacing: '0.25em', fontSize: 11, minWidth: 200, textAlign: 'center' }}
          >
            Hire Fidend
          </Link>
          <Link
            href="/contact#apply"
            onClick={() => setMenuOpen(false)}
            className="btn-primary"
            style={{ letterSpacing: '0.25em', fontSize: 11, minWidth: 200, textAlign: 'center' }}
          >
            Apply to Work
          </Link>
        </div>

        <p style={{
          fontFamily: "'Fraunces', Georgia, serif",
          fontStyle: 'italic',
          fontVariationSettings: "'SOFT' 30, 'opsz' 72",
          fontWeight: 300,
          fontSize: 13,
          color: 'rgba(184,153,104,0.7)',
          letterSpacing: '0.05em',
        }}>
          the faithful house of care
        </p>
      </div>
    </>
  )
}
