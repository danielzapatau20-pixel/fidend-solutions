'use client'

import { useState, FormEvent } from 'react'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

interface FieldError {
  fullName?: string
  phone?: string
}

const SERVICE_AREAS = [
  'Housekeeping',
  'Dietary / Food Service',
  'Laundry',
  'Activities Assistance',
  'Companion Care',
]

const AVAILABILITY = [
  'Full-time (40 hrs/wk)',
  'Part-time (under 30 hrs/wk)',
  'Per diem / as needed',
  'Weekends only',
  'Evenings / nights',
]

const inputStyle: React.CSSProperties = {
  width: '100%',
  backgroundColor: 'transparent',
  border: '1px solid rgba(22,36,58,0.18)',
  padding: '12px 16px',
  fontFamily: 'Inter, system-ui, sans-serif',
  fontSize: 15,
  color: '#16243A',
  transition: 'border-color 240ms ease-out',
  outline: 'none',
  borderRadius: 0,
  appearance: 'none' as const,
  WebkitAppearance: 'none' as const,
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'Inter, system-ui, sans-serif',
  fontSize: 10,
  fontWeight: 500,
  letterSpacing: '0.25em',
  textTransform: 'uppercase' as const,
  color: '#16243A',
  marginBottom: 8,
}

const errorStyle: React.CSSProperties = {
  fontFamily: 'Inter, system-ui, sans-serif',
  fontSize: 11,
  color: '#C0392B',
  marginTop: 5,
}

export default function ApplyForm() {
  const [status, setStatus]   = useState<FormStatus>('idle')
  const [errors, setErrors]   = useState<FieldError>({})
  const [experience, setExperience] = useState<string>('')

  function validate(data: FormData): FieldError {
    const errs: FieldError = {}
    if (!data.get('fullName')) errs.fullName = 'Full name is required.'
    const phone = String(data.get('phone') ?? '')
    if (!phone) errs.phone = 'Phone number is required.'
    return errs
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const errs = validate(data)
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setStatus('submitting')
    try {
      data.append('access_key', '6110af5f-dba8-4340-be15-705584a34124')
      data.append('subject', `Fidend — Job application from ${data.get('fullName')}`)
      data.append('from_name', 'Fidend Apply Form')
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      })
      if (!res.ok) throw new Error('submission failed')
      setStatus('success')
      form.reset()
      setExperience('')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        style={{
          padding: '40px 32px',
          border: '1px solid rgba(184,153,104,0.30)',
          backgroundColor: 'rgba(184,153,104,0.04)',
        }}
        role="status"
        aria-live="polite"
      >
        <div style={{ height: 1, backgroundColor: '#B89968', marginBottom: 24 }} />
        <h3
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontVariationSettings: "'SOFT' 30, 'opsz' 36",
            fontWeight: 400,
            fontSize: '1.4rem',
            color: '#16243A',
            marginBottom: 12,
          }}
        >
          Application received.
        </h3>
        <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 14, color: 'rgba(22,36,58,0.65)', lineHeight: 1.6 }}>
          We review every application. Expect a call within 2 business days. Thank you for your interest in Fidend.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Work with Fidend application form">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

        {/* Full name */}
        <div>
          <label htmlFor="fullName" style={labelStyle}>Full Name <span aria-hidden="true">*</span></label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            aria-required="true"
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            style={{ ...inputStyle, borderColor: errors.fullName ? '#C0392B' : 'rgba(22,36,58,0.18)' }}
            onFocus={e => { e.target.style.borderColor = '#B89968' }}
            onBlur={e => { e.target.style.borderColor = errors.fullName ? '#C0392B' : 'rgba(22,36,58,0.18)' }}
          />
          {errors.fullName && <p id="fullName-error" style={errorStyle} role="alert">{errors.fullName}</p>}
        </div>

        {/* Phone + Email */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
          <div>
            <label htmlFor="applyPhone" style={labelStyle}>Phone Number <span aria-hidden="true">*</span></label>
            <input
              id="applyPhone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              aria-required="true"
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              style={{ ...inputStyle, borderColor: errors.phone ? '#C0392B' : 'rgba(22,36,58,0.18)' }}
              onFocus={e => { e.target.style.borderColor = '#B89968' }}
              onBlur={e => { e.target.style.borderColor = errors.phone ? '#C0392B' : 'rgba(22,36,58,0.18)' }}
            />
            {errors.phone && <p id="phone-error" style={errorStyle} role="alert">{errors.phone}</p>}
          </div>
          <div>
            <label htmlFor="applyEmail" style={labelStyle}>Email Address</label>
            <input
              id="applyEmail"
              name="email"
              type="email"
              autoComplete="email"
              style={inputStyle}
              onFocus={e => { e.target.style.borderColor = '#B89968' }}
              onBlur={e => { e.target.style.borderColor = 'rgba(22,36,58,0.18)' }}
            />
          </div>
        </div>

        {/* Service area */}
        <div>
          <label htmlFor="serviceArea" style={labelStyle}>Service Area</label>
          <select
            id="serviceArea"
            name="serviceArea"
            defaultValue=""
            style={{ ...inputStyle, cursor: 'pointer' }}
            onFocus={e => { e.target.style.borderColor = '#B89968' }}
            onBlur={e => { e.target.style.borderColor = 'rgba(22,36,58,0.18)' }}
          >
            <option value="">Select area of work</option>
            {SERVICE_AREAS.map(a => <option key={a} value={a}>{a}</option>)}
          </select>
        </div>

        {/* Availability */}
        <div>
          <label htmlFor="availability" style={labelStyle}>Availability</label>
          <select
            id="availability"
            name="availability"
            defaultValue=""
            style={{ ...inputStyle, cursor: 'pointer' }}
            onFocus={e => { e.target.style.borderColor = '#B89968' }}
            onBlur={e => { e.target.style.borderColor = 'rgba(22,36,58,0.18)' }}
          >
            <option value="">Select availability</option>
            {AVAILABILITY.map(a => <option key={a} value={a}>{a}</option>)}
          </select>
        </div>

        {/* Prior senior care experience */}
        <div>
          <p style={labelStyle} id="exp-label">Prior Senior Care Experience</p>
          <div
            role="radiogroup"
            aria-labelledby="exp-label"
            style={{ display: 'flex', gap: 24 }}
          >
            {['Yes', 'No'].map(val => (
              <label
                key={val}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: 14,
                  color: experience === val ? '#16243A' : 'rgba(22,36,58,0.60)',
                  cursor: 'pointer',
                  transition: 'color 240ms ease-out',
                  userSelect: 'none',
                }}
              >
                <input
                  type="radio"
                  name="experience"
                  value={val}
                  checked={experience === val}
                  onChange={() => setExperience(val)}
                  style={{ accentColor: '#B89968', width: 16, height: 16 }}
                />
                {val}
              </label>
            ))}
          </div>
        </div>

        {/* Submit */}
        {status === 'error' && (
          <p style={{ ...errorStyle, fontSize: 13 }} role="alert">
            Something went wrong. Please call us directly or try again.
          </p>
        )}

        <div>
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="btn-primary-navy"
            style={{ opacity: status === 'submitting' ? 0.6 : 1, cursor: status === 'submitting' ? 'wait' : 'pointer' }}
            aria-busy={status === 'submitting'}
          >
            {status === 'submitting' ? 'Submitting...' : 'Submit Your Application'}
          </button>
        </div>

      </div>
    </form>
  )
}
