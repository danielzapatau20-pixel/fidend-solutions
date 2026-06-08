'use client'
import Link from 'next/link'

interface LogoProps {
  variant?: 'cream' | 'navy'
  size?: 'sm' | 'md' | 'lg'
  asLink?: boolean
  showTagline?: boolean
}

const sizes = {
  sm: { markW: 22, markH: 26, fidend: '0.80rem', solutions: '0.33rem', ruleW: 7, tagline: '0.38rem', gap: 9 },
  md: { markW: 30, markH: 36, fidend: '1.06rem', solutions: '0.43rem', ruleW: 9, tagline: '0.50rem', gap: 12 },
  lg: { markW: 42, markH: 50, fidend: '1.44rem', solutions: '0.58rem', ruleW: 13, tagline: '0.68rem', gap: 16 },
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
        Circular swash F mark — viewBox 0 0 80 96
        Center (38, 47), r=36. Gap: 90° centered on right (y=22 to y=72).
        Crossbar at y=47 extends to x=78, exiting PAST the arc right edge (x=74).
        This is what makes it read as F (not G): the crossbar exits through the gap.
      */}
      <svg
        width={s.markW}
        height={s.markH}
        viewBox="0 0 80 96"
        fill="none"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        {/* 270° arc CCW: (64,22) → top → left → bottom → (64,72). Gap 90° on right. */}
        <path
          d="M 64,22 A 36,36 0 1 0 64,72"
          stroke={markColor}
          strokeWidth="5.5"
          strokeLinecap="round"
        />
        {/* Calligraphic tail from lower arc terminus */}
        <path
          d="M 64,72 C 70,81 70,88 67,95"
          stroke={markColor}
          strokeWidth="5.5"
          strokeLinecap="round"
        />
        {/* F crossbar — exits RIGHT through the gap (past arc boundary at x=74) */}
        <line
          x1="4"
          y1="47"
          x2="78"
          y2="47"
          stroke={markColor}
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>

      {/* Wordmark */}
      <div>
        {/* FIDEND — Italiana, high-contrast editorial serif */}
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

        {/* — SOLUTIONS — with flanking gold rules */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 5,
            marginTop: 3,
          }}
        >
          <div style={{ height: 1, width: s.ruleW, backgroundColor: goldColor, flexShrink: 0 }} />
          <div
            style={{
              fontFamily: "'Italiana', Georgia, serif",
              fontWeight: 400,
              fontSize: s.solutions,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: goldColor,
              lineHeight: 1,
              whiteSpace: 'nowrap',
            }}
          >
            SOLUTIONS
          </div>
          <div style={{ height: 1, width: s.ruleW, backgroundColor: goldColor, flexShrink: 0 }} />
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
