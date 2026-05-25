'use client'

import Link from 'next/link'

interface LogoProps {
  /**
   * 'cream' → Option 1: gold F-mark + navy FIDEND + gold SOLUTIONS (for cream/light backgrounds)
   * 'navy'  → Option 2: cream F-mark + cream FIDEND + gold SOLUTIONS (for navy/dark backgrounds)
   */
  variant?: 'cream' | 'navy'
  className?: string
  size?: 'sm' | 'md' | 'lg'
  asLink?: boolean
}

const sizes = {
  sm: { mark: 20, fidend: '0.85rem', solutions: '0.48rem' },
  md: { mark: 28, fidend: '1.1rem',  solutions: '0.58rem' },
  lg: { mark: 36, fidend: '1.4rem',  solutions: '0.70rem' },
}

export default function Logo({
  variant = 'navy',
  className = '',
  size = 'md',
  asLink = true,
}: LogoProps) {
  const isNavy = variant === 'navy'
  const markColor   = isNavy ? '#F4ECDC' : '#B89968'
  const fidendColor = isNavy ? '#F4ECDC' : '#16243A'
  const goldColor   = '#B89968'
  const s = sizes[size]

  const inner = (
    <div
      className={`inline-flex items-center gap-0 select-none ${className}`}
      style={{ minWidth: 72 }}
      aria-label="Fidend Solutions"
    >
      {/* F-mark SVG */}
      <svg
        width={s.mark}
        height={Math.round(s.mark * 1.25)}
        viewBox="0 0 32 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        {/* Vertical stroke */}
        <rect x="4" y="2" width="5" height="36" fill={markColor} />
        {/* Top horizontal bar */}
        <rect x="4" y="2" width="22" height="5" fill={markColor} />
        {/* Top serif left */}
        <rect x="1" y="2" width="3" height="2" fill={markColor} />
        <rect x="1" y="5" width="2" height="2" fill={markColor} />
        {/* Middle horizontal bar */}
        <rect x="4" y="19" width="17" height="4" fill={markColor} />
        {/* Bottom serif */}
        <rect x="1" y="36" width="3" height="2" fill={markColor} />
        <rect x="1" y="34" width="2" height="2" fill={markColor} />
        {/* Top bar right serif */}
        <rect x="24" y="2" width="2" height="2" fill={markColor} />
        <rect x="26" y="4" width="1" height="2" fill={markColor} />
      </svg>

      {/* Wordmark lockup */}
      <div style={{ marginLeft: 10 }}>
        {/* Gold rule above SOLUTIONS */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3 }}>
          <div style={{ height: 1, width: 20, backgroundColor: goldColor }} />
          <span
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: s.solutions,
              fontWeight: 500,
              letterSpacing: '0.38em',
              textTransform: 'uppercase',
              color: goldColor,
              lineHeight: 1,
            }}
          >
            SOLUTIONS
          </span>
          <div style={{ height: 1, width: 20, backgroundColor: goldColor }} />
        </div>

        {/* FIDEND */}
        <div
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontVariationSettings: "'SOFT' 30, 'opsz' 72",
            fontWeight: 400,
            fontSize: s.fidend,
            letterSpacing: '0.22em',
            color: fidendColor,
            lineHeight: 1,
            textTransform: 'uppercase',
          }}
        >
          FIDEND
        </div>
      </div>
    </div>
  )

  if (!asLink) return inner

  return (
    <Link href="/" style={{ display: 'inline-flex', textDecoration: 'none' }}>
      {inner}
    </Link>
  )
}
