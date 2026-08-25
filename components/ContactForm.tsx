'use client'

import { useState, FormEvent } from 'react'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'
type Division = '' | 'Care' | 'Living' | 'Hospitality'

interface FieldError {
  companyName?: string
  contactName?: string
}

const DIVISION_ROLES: Record<Exclude<Division, ''>, string[]> = {
  Care: [
    'Housekeeping',
    'Cleaning Support',
    'Dietary Aides',
    'Laundry Attendants',
    'Activities Assistants',
    'Companion Support',
  ],
  Living: [
    'Janitorial Staff',
    'Porter Services',
    'Common Area Cleaning',
    'Maintenance Helpers',
    'Grounds Support',
  ],
  Hospitality: [
    'Housekeepers',
    'Public Area Attendants',
    'Laundry Attendants',
    'Dishwashers & Stewards',
    'Cooks & Prep Cooks',
    'Maintenance Helpers',
  ],
}

const TIMES = ['Morning (8am–12pm)', 'Afternoon (12pm–5pm)', 'Evening (5pm–7pm)', 'Anytime']

const inputStyle: React.CSSProperties = {
  width: '100%',
  backgroundColor: 'transparent',
  border: '1px solid rgba(22,36,58,0.20)',
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

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errors, setErrors] = useState<FieldError>({})
  const [division, setDivision] = useState<Division>('')
  const [roles, setRoles] = useState<string[]>([])

  function validate(data: FormData): FieldError {
    const errs: FieldError = {}
    if (!data.get('companyName')) errs.companyName = 'Company name is required.'
    if (!data.get('contactName')) errs.contactName = 'Contact name is required.'
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
      const divisionLabel = division ? `Fidend ${division}` : 'Division not specified'
      data.append('subject', `Fidend — New inquiry from ${data.get('companyName')} · ${divisionLabel}`)
      data.append('from_name', 'Fidend Contact Form')
      if (roles.length > 0) data.append('roles_requested', roles.join(', '))
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      })
      if (!res.ok) throw new Error('submission failed')
      setStatus('success')
      form.reset()
      setDivision('')
      setRoles([])
    } catch {
      setStatus('error')
    }
  }

  function handleDivisionChange(d: Division) {
    setDivision(d)
    setRoles([])
  }

  const toggleRole = (role: string) => {
    setRoles(prev =>
      prev.includes(role) ? prev.filter(r => r !== role) : [...prev, role]
    )
  }

  if (status === 'success') {
    return (
      <div
        style={{
          padding: '40px 32px',
          border: '1px solid rgba(184,153,104,0.35)',
          backgroundColor: 'rgba(184,153,104,0.05)',
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
          We received your message.
        </h3>
        <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 14, color: 'rgba(22,36,58,0.65)', lineHeight: 1.6 }}>
          Expect a response within 4 hours. If the matter is urgent, call us directly.
        </p>
      </div>
    )
  }

  const availableRoles = division ? DIVISION_ROLES[division] : null

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Hire Fidend inquiry form">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

        {/* Company / Property Name */}
        <div>
          <label htmlFor="companyName" style={labelStyle}>Company / Property Name <span aria-hidden="true">*</span></label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            autoComplete="organization"
            required
            aria-required="true"
            aria-describedby={errors.companyName ? 'companyName-error' : undefined}
            style={{ ...inputStyle, borderColor: errors.companyName ? '#C0392B' : 'rgba(22,36,58,0.20)' }}
            onFocus={e => { e.target.style.borderColor = '#B89968' }}
            onBlur={e => { e.target.style.borderColor = errors.companyName ? '#C0392B' : 'rgba(22,36,58,0.20)' }}
          />
          {errors.companyName && <p id="companyName-error" style={errorStyle} role="alert">{errors.companyName}</p>}
        </div>

        {/* Contact Name */}
        <div>
          <label htmlFor="contactName" style={labelStyle}>Contact Name <span aria-hidden="true">*</span></label>
          <input
            id="contactName"
            name="contactName"
            type="text"
            autoComplete="name"
            required
            aria-required="true"
            aria-describedby={errors.contactName ? 'contactName-error' : undefined}
            style={{ ...inputStyle, borderColor: errors.contactName ? '#C0392B' : 'rgba(22,36,58,0.20)' }}
            onFocus={e => { e.target.style.borderColor = '#B89968' }}
            onBlur={e => { e.target.style.borderColor = errors.contactName ? '#C0392B' : 'rgba(22,36,58,0.20)' }}
          />
          {errors.contactName && <p id="contactName-error" style={errorStyle} role="alert">{errors.contactName}</p>}
        </div>

        {/* Email + Phone */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
          <div>
            <label htmlFor="contactEmail" style={labelStyle}>Email Address</label>
            <input
              id="contactEmail"
              name="email"
              type="email"
              autoComplete="email"
              style={inputStyle}
              onFocus={e => { e.target.style.borderColor = '#B89968' }}
              onBlur={e => { e.target.style.borderColor = 'rgba(22,36,58,0.20)' }}
            />
          </div>
          <div>
            <label htmlFor="phone" style={labelStyle}>Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              style={inputStyle}
              onFocus={e => { e.target.style.borderColor = '#B89968' }}
              onBlur={e => { e.target.style.borderColor = 'rgba(22,36,58,0.20)' }}
            />
          </div>
        </div>

        {/* Division — drives role options */}
        <div>
          <label htmlFor="division" style={labelStyle}>Division</label>
          <select
            id="division"
            name="division"
            value={division}
            onChange={e => handleDivisionChange(e.target.value as Division)}
            style={{ ...inputStyle, cursor: 'pointer' }}
            onFocus={e => { e.target.style.borderColor = '#B89968' }}
            onBlur={e => { e.target.style.borderColor = 'rgba(22,36,58,0.20)' }}
          >
            <option value="">Select a division</option>
            <option value="Care">Fidend Care — Senior Care Facilities</option>
            <option value="Living">Fidend Living — Property Management & Residential</option>
            <option value="Hospitality">Fidend Hospitality — Hotels, Resorts & Guest Properties</option>
          </select>
        </div>

        {/* Roles Needed — conditional on division */}
        {availableRoles && (
          <div>
            <p style={labelStyle} id="roles-label">Roles Needed</p>
            <div
              role="group"
              aria-labelledby="roles-label"
              style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}
            >
              {availableRoles.map(role => {
                const checked = roles.includes(role)
                return (
                  <label
                    key={role}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: 13,
                      color: checked ? '#16243A' : 'rgba(22,36,58,0.60)',
                      cursor: 'pointer',
                      border: `1px solid ${checked ? '#B89968' : 'rgba(22,36,58,0.15)'}`,
                      padding: '8px 14px',
                      transition: 'all 240ms ease-out',
                      userSelect: 'none',
                    }}
                  >
                    <input
                      type="checkbox"
                      name="roles"
                      value={role}
                      checked={checked}
                      onChange={() => toggleRole(role)}
                      style={{ accentColor: '#B89968', width: 14, height: 14 }}
                    />
                    {role}
                  </label>
                )
              })}
            </div>
          </div>
        )}

        {/* Best Time to Call */}
        <div>
          <label htmlFor="callTime" style={labelStyle}>Best Time to Call</label>
          <select
            id="callTime"
            name="callTime"
            defaultValue=""
            style={{ ...inputStyle, cursor: 'pointer' }}
            onFocus={e => { e.target.style.borderColor = '#B89968' }}
            onBlur={e => { e.target.style.borderColor = 'rgba(22,36,58,0.20)' }}
          >
            <option value="">Select window</option>
            {TIMES.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        {/* Additional Information */}
        <div>
          <label htmlFor="message" style={labelStyle}>Additional Information</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Describe your current staffing situation. We read every message."
            style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.55 }}
            onFocus={e => { e.target.style.borderColor = '#B89968' }}
            onBlur={e => { e.target.style.borderColor = 'rgba(22,36,58,0.20)' }}
          />
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
            {status === 'submitting' ? 'Sending...' : 'Request a Conversation'}
          </button>
        </div>

      </div>
    </form>
  )
}
