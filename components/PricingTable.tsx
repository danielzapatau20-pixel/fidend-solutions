interface PricingRow {
  role: string
  rate: string
  unit?: string
}

interface PricingTableProps {
  variant?: 'cream' | 'navy'
  showManagementFee?: boolean
  compact?: boolean
}

const workerRates: PricingRow[] = [
  { role: 'Housekeeper',          rate: '$__.__', unit: 'per hr' },
  { role: 'Dietary Aide',         rate: '$__.__', unit: 'per hr' },
  { role: 'Laundry Attendant',    rate: '$__.__', unit: 'per hr' },
  { role: 'Activities Aide',      rate: '$__.__', unit: 'per hr' },
  { role: 'Companion Caregiver',  rate: '$__.__', unit: 'per hr' },
]

export default function PricingTable({
  variant = 'cream',
  showManagementFee = true,
  compact = false,
}: PricingTableProps) {
  const isNavy      = variant === 'navy'
  const textColor   = isNavy ? '#F4ECDC' : '#16243A'
  const subColor    = isNavy ? 'rgba(244,236,220,0.55)' : 'rgba(22,36,58,0.50)'
  const ruleColor   = isNavy ? 'rgba(184,153,104,0.30)' : 'rgba(22,36,58,0.12)'
  const goldColor   = '#B89968'
  const accentColor = isNavy ? 'rgba(244,236,220,0.08)' : 'rgba(22,36,58,0.04)'

  const py = compact ? 12 : 16

  return (
    <div
      role="region"
      aria-label="Pricing transparency table"
      style={{
        width: '100%',
        maxWidth: 560,
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: compact ? 20 : 28 }}>
        <p className="eyebrow" style={{ marginBottom: 10 }}>OPEN BOOK PRICING</p>
        <div style={{ height: 1, backgroundColor: goldColor }} />
      </div>

      {/* Worker rates */}
      <div style={{ marginBottom: showManagementFee ? (compact ? 20 : 28) : 0 }}>
        <p
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: subColor,
            marginBottom: 12,
          }}
        >
          Worker Compensation
        </p>

        {workerRates.map((row, i) => (
          <div
            key={row.role}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: `${py}px 0`,
              borderBottom: `1px solid ${ruleColor}`,
              backgroundColor: i % 2 === 0 ? accentColor : 'transparent',
              paddingLeft: i % 2 === 0 ? 8 : 0,
              paddingRight: i % 2 === 0 ? 8 : 0,
              gap: 16,
            }}
          >
            <span
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontVariationSettings: "'SOFT' 30, 'opsz' 18",
                fontWeight: 400,
                fontSize: compact ? 14 : 16,
                color: textColor,
              }}
            >
              {row.role}
            </span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexShrink: 0 }}>
              <span
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: 10,
                  letterSpacing: '0.15em',
                  color: subColor,
                  textTransform: 'lowercase',
                }}
              >
                {row.unit}
              </span>
              <span
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontVariationSettings: "'SOFT' 30, 'opsz' 18",
                  fontWeight: 400,
                  fontSize: compact ? 16 : 20,
                  color: goldColor,
                  letterSpacing: '0.02em',
                }}
              >
                {row.rate}
              </span>
            </div>
          </div>
        ))}
      </div>

      {showManagementFee && (
        <>
          {/* Separator */}
          <div style={{ height: 1, backgroundColor: goldColor, marginBottom: compact ? 16 : 24 }} />

          {/* Management fee row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: `${py}px 0`,
              gap: 16,
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontVariationSettings: "'SOFT' 30, 'opsz' 18",
                  fontWeight: 400,
                  fontSize: compact ? 14 : 16,
                  color: textColor,
                }}
              >
                Management Fee
              </span>
              <p
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: 11,
                  color: subColor,
                  marginTop: 3,
                  maxWidth: '30ch',
                }}
              >
                Flat. No markup on worker rate. Ever.
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexShrink: 0 }}>
              <span
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: 10,
                  letterSpacing: '0.15em',
                  color: subColor,
                }}
              >
                per hr
              </span>
              <span
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontVariationSettings: "'SOFT' 30, 'opsz' 18",
                  fontWeight: 400,
                  fontSize: compact ? 16 : 20,
                  color: goldColor,
                }}
              >
                $__.__
              </span>
            </div>
          </div>

          {/* Gold rule */}
          <div style={{ height: 1, backgroundColor: goldColor, margin: `${compact ? 16 : 24}px 0` }} />

          {/* Total row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 16,
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: subColor,
                }}
              >
                Total invoice per hour
              </span>
              <p
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: 11,
                  color: subColor,
                  marginTop: 4,
                }}
              >
                Nothing else on the invoice.
              </p>
            </div>
            <span
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontVariationSettings: "'SOFT' 30, 'opsz' 18",
                fontWeight: 400,
                fontSize: compact ? 20 : 26,
                color: textColor,
                flexShrink: 0,
              }}
            >
              $__.__
            </span>
          </div>
        </>
      )}
    </div>
  )
}
