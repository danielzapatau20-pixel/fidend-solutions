'use client'
import Link from 'next/link'

interface LogoProps {
  variant?: 'cream' | 'navy'
  size?: 'sm' | 'md' | 'lg'
  asLink?: boolean
  showTagline?: boolean
}

const sizes = {
  sm: { markW: 20, markH: 32, fidend: '0.80rem', solutions: '0.37rem', gap: 9 },
  md: { markW: 28, markH: 45, fidend: '1.06rem', solutions: '0.48rem', gap: 12 },
  lg: { markW: 38, markH: 61, fidend: '1.38rem', solutions: '0.62rem', gap: 16 },
}

export default function Logo({
  variant = 'navy',
  size = 'md',
  asLink = true,
  showTagline = false,
}: LogoProps) {
  const isNavy    = variant === 'navy'
  const markColor = isNavy ? '#F4ECDC' : '#B89968'
  const fidendColor = isNavy ? '#F4ECDC' : '#16243A'
  const goldColor = '#B89968'
  const s = sizes[size]

  const inner = (
    <div
      style={{ display: 'inline-flex', alignItems: 'center', gap: s.gap, userSelect: 'none' }}
      aria-label="Fidend Solutions"
    >
      {/* Curved calligraphic F mark — mirrors the brand handoff SVG */}
      <svg
        width={s.markW}
        height={s.markH}
        viewBox="0 0 56 90"
        fill="none"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        {/* Main arc: sweeps from upper-right, counterclockwise (left→down) forming the C-shape */}
        <path
          d="M 46,12 C 30,2 4,16 4,42 C 4,68 20,80 38,80"
          stroke={markColor}
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* F crossbar — horizontal through the mid-point of the arc */}
        <line
          x1="2"
          y1="42"
          x2="52"
          y2="38"
          stroke={markColor}
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        {/* Calligraphic tail — descends from the bottom of the arc */}
        <path
          d="M 38,80 C 46,84 52,88 54,90"
          stroke={markColor}
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Wordmark */}
      <div>
        {/* FIDEND */}
        <div
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontVariationSettings: "'SOFT' 30, 'opsz' 48",
            fontWeight: 400,
            fontSize: s.fidend,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: fidendColor,
            lineHeight: 1,
            marginBottom: 5,
          }}
        >
          FIDEND
        </div>

        {/* — SOLUTIONS — */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <div style={{ height: 1, width: 10, backgroundColor: goldColor }} />
          <span
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: s.solutions,
              fontWeight: 500,
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: goldColor,
              lineHeight: 1,
            }}
          >
            SOLUTIONS
          </span>
          <div style={{ height: 1, width: 10, backgroundColor: goldColor }} />
        </div>

        {/* Tagline — optional, shown in footer */}
        {showTagline && (
          <div
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontVariationSettings: "'SOFT' 80, 'opsz' 18",
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: s.solutions,
              color: isNavy ? 'rgba(184,153,104,0.80)' : '#A88A4B',
              marginTop: 7,
              letterSpacing: '0.04em',
            }}
          >
            the faithful house of care
          </div>
        )}
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
