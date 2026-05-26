'use client'
import Link from 'next/link'

interface LogoProps {
  variant?: 'cream' | 'navy'
  size?: 'sm' | 'md' | 'lg'
  asLink?: boolean
  showTagline?: boolean
}

const sizes = {
  sm: { markW: 20, markH: 26, fidend: '0.82rem', tagline: '0.38rem', gap: 10 },
  md: { markW: 28, markH: 36, fidend: '1.10rem', tagline: '0.50rem', gap: 14 },
  lg: { markW: 40, markH: 52, fidend: '1.52rem', tagline: '0.68rem', gap: 18 },
}

export default function Logo({
  variant = 'navy',
  size = 'md',
  asLink = true,
  showTagline = false,
}: LogoProps) {
  const isNavy    = variant === 'navy'
  const markColor = isNavy ? '#F4ECDC' : '#B89968'
  const textColor = isNavy ? '#F4ECDC' : '#16243A'
  const goldColor = '#B89968'
  const s = sizes[size]

  const inner = (
    <div
      style={{ display: 'inline-flex', alignItems: 'center', gap: s.gap, userSelect: 'none' }}
      aria-label="Fidend"
    >
      {/*
        Circular swash F mark — matches the Option 6 brand handoff.
        viewBox 0 0 72 92:
          • Main arc: large CCW arc from upper-right (≈1:30 o'clock) sweeping
            counterclockwise ~300° around the left side to lower-right (≈7 o'clock)
          • Crossbar: horizontal F bar at mid-height of the arc
          • Tail: calligraphic descender from the arc's lower terminus
      */}
      <svg
        width={s.markW}
        height={s.markH}
        viewBox="0 0 72 92"
        fill="none"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        {/* Main circular arc */}
        <path
          d="M 62,10 A 36,36 0 1 0 60,78"
          stroke={markColor}
          strokeWidth="5.5"
          strokeLinecap="round"
        />
        {/* Calligraphic descending tail */}
        <path
          d="M 60,78 C 66,84 70,88 72,92"
          stroke={markColor}
          strokeWidth="5.5"
          strokeLinecap="round"
        />
        {/* F crossbar at mid-height — slight diagonal follows the calligraphic axis */}
        <line
          x1="6"
          y1="44"
          x2="58"
          y2="40"
          stroke={markColor}
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>

      {/* Wordmark */}
      <div>
        {/* FIDEND — Italiana, editorial-luxury serif per brand spec */}
        <div
          style={{
            fontFamily: "'Italiana', Georgia, serif",
            fontWeight: 400,
            fontSize: s.fidend,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: textColor,
            lineHeight: 1,
          }}
        >
          FIDEND
        </div>

        {/* Tagline — shown in footer only */}
        {showTagline && (
          <div
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontVariationSettings: "'SOFT' 80, 'opsz' 18",
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: s.tagline,
              color: goldColor,
              marginTop: 6,
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
