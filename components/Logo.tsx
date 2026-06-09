'use client'
import Link from 'next/link'

interface LogoProps {
  variant?: 'cream' | 'navy'
  size?: 'sm' | 'md' | 'lg'
  asLink?: boolean
  showTagline?: boolean
}

// viewBox 0 0 222 253, aspect ≈ 0.878
const sizes = {
  sm: { markW: 20, markH: 23, fidend: '0.80rem', solutions: '0.32rem', ruleW: 7, tagline: '0.38rem', gap: 9 },
  md: { markW: 28, markH: 32, fidend: '1.06rem', solutions: '0.42rem', ruleW: 9, tagline: '0.50rem', gap: 12 },
  lg: { markW: 40, markH: 46, fidend: '1.44rem', solutions: '0.56rem', ruleW: 13, tagline: '0.68rem', gap: 16 },
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
      aria-label="Fidend Solutions"
    >
      {/* Official F mark — approved brand asset, viewBox 0 0 222 253 */}
      <svg
        width={s.markW}
        height={s.markH}
        viewBox="0 0 222 253"
        aria-hidden="true"
        style={{ flexShrink: 0, color: markColor }}
      >
        <g fill="currentColor">
          <path d="M 196.00 41.00 L 178.00 26.00 L 176.00 26.00 L 173.00 23.00 L 171.00 23.00 L 161.00 17.00 L 158.00 17.00 L 156.00 15.00 L 150.00 14.00 L 147.00 12.00 L 137.00 11.00 L 133.00 9.00 L 122.00 9.00 L 121.00 8.00 L 101.00 9.00 L 98.00 11.00 L 92.00 11.00 L 91.00 12.00 L 87.00 12.00 L 85.00 14.00 L 78.00 15.00 L 76.00 17.00 L 71.00 18.00 L 69.00 20.00 L 65.00 21.00 L 55.00 27.00 L 41.00 38.00 L 26.00 56.00 L 26.00 58.00 L 24.00 59.00 L 23.00 63.00 L 18.00 70.00 L 17.00 75.00 L 15.00 77.00 L 14.00 83.00 L 12.00 86.00 L 11.00 95.00 L 9.00 99.00 L 9.00 130.00 L 11.00 135.00 L 12.00 144.00 L 21.00 165.00 L 26.00 173.00 L 39.00 189.00 L 41.00 190.00 L 41.00 150.00 L 38.00 146.00 L 38.00 143.00 L 36.00 141.00 L 35.00 134.00 L 33.00 130.00 L 33.00 124.00 L 32.00 123.00 L 33.00 95.00 L 39.00 76.00 L 41.00 74.00 L 44.00 66.00 L 58.00 47.00 L 77.00 32.00 L 79.00 32.00 L 81.00 30.00 L 96.00 23.00 L 103.00 22.00 L 107.00 20.00 L 122.00 19.00 L 123.00 18.00 L 142.00 19.00 L 143.00 20.00 L 149.00 20.00 L 157.00 23.00 L 160.00 23.00 L 180.00 33.00 L 195.00 44.00 L 205.00 55.00 L 211.00 63.00 L 211.00 65.00 L 213.00 65.00 L 206.00 53.00 Z" />
          <path d="M 119.00 149.00 L 118.00 148.00 L 82.00 148.00 L 81.00 149.00 L 83.00 152.00 L 83.00 169.00 L 82.00 170.00 L 82.00 175.00 L 81.00 176.00 L 81.00 180.00 L 80.00 181.00 L 80.00 184.00 L 79.00 185.00 L 79.00 187.00 L 78.00 188.00 L 78.00 190.00 L 77.00 191.00 L 77.00 193.00 L 74.00 198.00 L 74.00 200.00 L 72.00 202.00 L 72.00 203.00 L 71.00 204.00 L 71.00 205.00 L 69.00 207.00 L 68.00 210.00 L 64.00 214.00 L 64.00 215.00 L 59.00 220.00 L 59.00 221.00 L 57.00 223.00 L 56.00 223.00 L 56.00 224.00 L 55.00 225.00 L 54.00 225.00 L 47.00 231.00 L 44.00 232.00 L 44.00 233.00 L 43.00 234.00 L 41.00 234.00 L 40.00 235.00 L 39.00 235.00 L 37.00 237.00 L 35.00 237.00 L 34.00 238.00 L 32.00 238.00 L 30.00 240.00 L 27.00 240.00 L 26.00 241.00 L 22.00 241.00 L 19.00 243.00 L 9.00 243.00 L 8.00 244.00 L 32.00 244.00 L 33.00 243.00 L 40.00 243.00 L 41.00 242.00 L 43.00 242.00 L 44.00 241.00 L 47.00 241.00 L 48.00 240.00 L 51.00 240.00 L 54.00 238.00 L 56.00 238.00 L 57.00 237.00 L 59.00 237.00 L 60.00 236.00 L 61.00 236.00 L 62.00 235.00 L 63.00 235.00 L 64.00 234.00 L 65.00 234.00 L 66.00 233.00 L 67.00 233.00 L 68.00 232.00 L 71.00 231.00 L 73.00 229.00 L 74.00 229.00 L 77.00 226.00 L 78.00 226.00 L 81.00 223.00 L 82.00 223.00 L 86.00 219.00 L 87.00 219.00 L 87.00 218.00 L 88.00 217.00 L 89.00 217.00 L 91.00 214.00 L 92.00 214.00 L 92.00 213.00 L 95.00 210.00 L 95.00 209.00 L 100.00 204.00 L 101.00 201.00 L 104.00 198.00 L 104.00 196.00 L 106.00 194.00 L 107.00 191.00 L 109.00 189.00 L 109.00 187.00 L 110.00 186.00 L 110.00 184.00 L 112.00 182.00 L 112.00 180.00 L 113.00 179.00 L 113.00 176.00 L 115.00 173.00 L 115.00 170.00 L 116.00 169.00 L 116.00 164.00 L 117.00 163.00 L 117.00 161.00 L 118.00 160.00 L 118.00 151.00 L 119.00 150.00 Z" />
          <path d="M 81.00 119.00 L 158.00 119.00 L 159.00 120.00 L 160.00 119.00 L 160.00 118.00 L 161.00 117.00 L 161.00 116.00 L 163.00 114.00 L 163.00 113.00 L 164.00 112.00 L 164.00 111.00 L 166.00 109.00 L 166.00 108.00 L 168.00 106.00 L 168.00 105.00 L 169.00 104.00 L 169.00 103.00 L 172.00 100.00 L 172.00 99.00 L 173.00 98.00 L 173.00 97.00 L 175.00 95.00 L 175.00 94.00 L 174.00 93.00 L 95.00 93.00 L 94.00 94.00 L 93.00 94.00 L 93.00 95.00 L 92.00 96.00 L 92.00 97.00 L 90.00 99.00 L 90.00 100.00 L 89.00 101.00 L 89.00 102.00 L 87.00 104.00 L 87.00 105.00 L 86.00 106.00 L 86.00 108.00 L 84.00 110.00 L 84.00 111.00 L 83.00 112.00 L 83.00 114.00 L 82.00 115.00 L 82.00 116.00 L 81.00 117.00 Z" />
        </g>
      </svg>

      {/* Wordmark */}
      <div>
        {/* FIDEND — Fraunces weight 500, per brand spec */}
        <div
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontVariationSettings: "'opsz' 72, 'SOFT' 30",
            fontWeight: 500,
            fontSize: s.fidend,
            letterSpacing: '0.16em',
            marginLeft: '0.16em',
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
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: 500,
              fontSize: s.solutions,
              letterSpacing: '0.40em',
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
