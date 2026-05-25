# Fidend Solutions — Website

Next.js 16 · TypeScript · Tailwind CSS

## Setup

```bash
# requires Node.js 18+
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
```

## Before launch checklist

### 1. Fonts
Both fonts are loaded from Google Fonts in `app/globals.css`. No action required if the site has internet access at build time. For a fully self-hosted setup, download the variable font files and update the `@font-face` declarations.

- **Fraunces** (variable) — used for all headlines
- **Inter** — used for all body text, labels, and UI

### 2. Higgsfield video and image assets

Six asset placeholders are documented in the code with exact generation prompts.

| Asset | File | Component | Prompt location |
|-------|------|-----------|-----------------|
| Hero video loop | `/public/videos/hero-loop.mp4` | `HeroVideo` on Home | `app/page.tsx` JSDoc |
| Hero poster frame | `/public/images/hero-poster.jpg` | `HeroVideo` on Home | `app/page.tsx` JSDoc |
| Full-width common room | `/public/images/common-room.jpg` | Photo interlude on Home | `app/page.tsx` comment |
| Services hero | `/public/images/services-hero.jpg` | `HeroVideo` on Services | `app/services/page.tsx` JSDoc |
| About hero | `/public/images/about-hero.jpg` | `HeroVideo` on About | `app/about/page.tsx` JSDoc |
| Founder portrait | `/public/images/founder.jpg` | About page | `app/about/page.tsx` comment |

After generating assets with Higgsfield:
1. Place files in `/public/` at the paths above
2. Uncomment the `src` and `poster` props on each `<HeroVideo>` component
3. Replace the grey placeholder `<div>` on the About page with `<Image>` from `next/image`

### 3. Form endpoints

Both forms currently simulate submission with `setTimeout`. Replace with your real endpoint:

**ContactForm** (`components/ContactForm.tsx` line ~82):
```ts
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  body: data,
  headers: { Accept: 'application/json' },
})
if (!res.ok) throw new Error('submission failed')
```

**ApplyForm** (`components/ApplyForm.tsx` line ~84):
Same pattern. Use a separate Formspree form ID or a different endpoint for applicant data.

Alternatives: Netlify Forms (add `netlify` attribute to `<form>`), a custom API route, or any service that accepts `multipart/form-data`.

### 4. Pricing rates

Worker rates and the management fee are placeholders (`$__.__`) in `components/PricingTable.tsx` lines 13–19. Replace with actual figures before launch.

### 5. Contact details

Phone and email in `app/contact/page.tsx` (around line 270) are placeholders:
- `+1 (XXX) XXX-XXXX` → actual phone number
- `hello@fidend.com` → actual email address

Update the `href="tel:..."` and `href="mailto:..."` links accordingly.

### 6. Founder name

In `app/about/page.tsx` (around line 200), replace `[Founder Name]` with the actual name and update the title line beneath it.

## Brand reference

| Token | Value | Use |
|-------|-------|-----|
| `fidend-navy` | `#16243A` | Primary background, body text on light |
| `champagne-gold` | `#B89968` | Rules, accents, badge borders, CTAs |
| `parchment-cream` | `#F4ECDC` | Primary light background, text on dark |
| `dark-cream` | `#EDE3CF` | Secondary light sections |

**Fraunces** variable axes: `SOFT 30, opsz 72` for display; `SOFT 30, opsz 36` for section heads; `SOFT 30, opsz 18` for card titles.

**Inter** weights: 400 body, 500 labels and eyebrows.

## File structure

```
app/
  layout.tsx          root layout (Nav + Footer)
  page.tsx            Home
  services/page.tsx   Services
  about/page.tsx      About
  contact/page.tsx    Contact (dual-form: hire + apply)
  globals.css         fonts, CSS tokens, utility classes

components/
  Logo.tsx            F-mark + wordmark, cream/navy variants
  Nav.tsx             sticky header, mobile overlay
  Footer.tsx          navy footer with tagline
  HeroVideo.tsx       video hero with navy overlay + fallback
  ServiceCard.tsx     service tile with hover lift
  PricingTable.tsx    open-book pricing display
  ContactForm.tsx     facility inquiry form
  ApplyForm.tsx       worker application form
```
