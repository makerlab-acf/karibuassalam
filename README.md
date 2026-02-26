# Karibu Assalam Frontend Rebuild

Production-ready React + Vite website for **Karibu Assalam**, built from local assets in `pics/` and constrained to the provided facts.

## How To Run

1. `npm install`
2. `npm run dev`
3. `npm run build`

## Content Editing Guide

- Retreat content model: `src/data/retreats.js`
- FAQ content: `src/data/faq.js`
- Brand/contact settings (name, WhatsApp, email, tagline): `src/data/siteConfig.js`
- UI language labels (English / Turkish / German toggle labels for navigation/common UI): `src/data/i18n.js`

## Image Usage

- All local images are loaded from the existing workspace `pics/` directory.
- No external images are required.

## Booking Integrations

- WhatsApp number is configured in `src/data/siteConfig.js` as:
  - `SITE.whatsAppPhone` (used for `wa.me`)
  - `SITE.phoneDisplay` / `SITE.phoneTel` (display + click-to-call)
- Email address is configured in `src/data/siteConfig.js` as `SITE.email`
- Contact URL builders live in `src/utils/contact.js`
- Future backend integration point:
  - Replace `sendEmailApiStub()` in `src/utils/contact.js` with a real API call

## SEO Notes

- Route-level titles and descriptions are set in each page via `src/components/SEO.jsx`
- OpenGraph tags (`og:title`, `og:description`, `og:image`, `og:type`) are updated client-side

## Accessibility + Performance Checklist

### Accessibility

- [x] Meaningful alt text added for content images
- [x] Skip link included (`Skip to main content`)
- [x] Visible focus outlines with `:focus-visible`
- [x] Keyboard-accessible accordion buttons with `aria-expanded`
- [x] Form labels connected to inputs on Contact page
- [x] Mobile nav and Eco-Village submenu work with keyboard controls
- [x] No dead `Tours` or `Volunteer` navigation links

### Performance

- [x] Local assets used only from `pics/`
- [x] WebP used where available
- [x] Non-hero images use `loading="lazy"` and `decoding="async"`
- [x] No heavy UI or animation libraries added
- [x] CSS-based visual effects used instead of runtime animations

## Admin Note (Brand Naming)

`Karibu Assalam` is used as the primary public-facing brand across the site for consistency and clarity. `Assalam Community Foundation` is referenced in About/impact sections as the nonprofit entity, matching the provided facts.

