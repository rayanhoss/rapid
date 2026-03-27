# Rapid Renovation & Demolition LLC — Website

**Company:** Rapid Renovation & Demolition LLC  
**Domain:** rapidrenovationdemolition.com  
**Stack:** Next.js 14, TypeScript, Tailwind CSS, Framer Motion  
**Contact:** rapidrenovationpa@gmail.com · 347-977-3212

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Local Development Setup](#local-development-setup)
3. [Project Structure](#project-structure)
4. [Brand Guidelines](#brand-guidelines)
5. [Formspree Contact Form Setup](#formspree-contact-form-setup)
6. [Vercel Deployment](#vercel-deployment)
7. [GoDaddy DNS Configuration](#godaddy-dns-configuration)
8. [SEO & Analytics](#seo--analytics)
9. [Content Management](#content-management)
10. [Performance Optimization](#performance-optimization)
11. [Customization Guide](#customization-guide)

---

## Project Overview

A premium, agency-level Next.js 14 website for Rapid Renovation & Demolition LLC featuring:

- **5 pages:** Home, Services, Projects, Blog, Contact
- **Design system:** Industrial steel blues + construction orange on a dark base
- **Typography:** Bebas Neue (display) + Barlow / Barlow Condensed (body)
- **Animations:** Framer Motion scroll-triggered reveals, parallax hero, micro-interactions
- **SEO:** LocalBusiness JSON-LD schema, sitemap.xml, robots.txt, meta tags
- **Contact form:** Multi-step (4-step) form powered by Formspree
- **Performance:** Image optimization via Next.js `<Image>`, route-based code splitting

---

## Local Development Setup

### Prerequisites

- **Node.js** 18.17.0 or higher ([download](https://nodejs.org))
- **npm** 9+ or **yarn** / **pnpm**

### Steps

```bash
# 1. Unzip the package
unzip rapid-renovation-website.zip
cd rapid-renovation-demolition

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev

# 4. Open in browser
# → http://localhost:3000
```

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production bundle |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          ← Root layout, metadata, JSON-LD schema
│   ├── page.tsx            ← Homepage
│   ├── globals.css         ← Global styles, CSS variables
│   ├── sitemap.ts          ← Auto-generated sitemap.xml
│   ├── robots.ts           ← robots.txt
│   ├── services/
│   │   └── page.tsx        ← Interactive services accordion
│   ├── projects/
│   │   └── page.tsx        ← Filterable project gallery
│   ├── blog/
│   │   └── page.tsx        ← Blog listing with categories
│   ├── contact/
│   │   └── page.tsx        ← 4-step quote request form
│   └── privacy/
│       └── page.tsx        ← Privacy policy
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      ← Sticky nav with mobile menu
│   │   └── Footer.tsx      ← Full footer with CTA strip
│   └── ui/
│       ├── AnimatedSection.tsx  ← Scroll-triggered animation wrapper
│       └── Button.tsx           ← Polymorphic button/link component
public/
├── images/
│   └── og-image.svg        ← Open Graph image (replace with photo)
└── favicon.svg             ← Site favicon
```

---

## Brand Guidelines

### Color Palette

| Name | Hex | Usage |
|---|---|---|
| `orange` | `#E8541A` | Primary CTA, accents, headings |
| `orange-light` | `#F4763A` | Hover states |
| `orange-dark` | `#C43E0F` | Active/pressed states |
| `steel` | `#1A2332` | Primary background |
| `steel-light` | `#243044` | Card backgrounds |
| `steel-mid` | `#2E3D55` | Section alternates |
| `slate` | `#8A9BB5` | Body text, secondary labels |
| `slate-light` | `#B8C5D6` | Subheadings, nav links |
| `cream` | `#F5F0E8` | Light text on dark orange |
| `gold` | `#D4A843` | Star ratings, featured badges |

### Typography

| Role | Font | Weight | Usage |
|---|---|---|---|
| Display | Bebas Neue | 400 | Page titles, hero headings |
| Condensed | Barlow Condensed | 400–700 | Nav, buttons, labels, badges |
| Body | Barlow | 300–700 | Paragraphs, descriptions |

**Heading scale:**
- Hero: `font-display text-7xl–9xl tracking-wider`
- Page title: `font-display text-6xl–8xl tracking-wider`
- Section title: `font-display text-5xl–7xl tracking-wider`
- Card title: `font-condensed text-xl tracking-wider uppercase`

### Logo Usage

The `RR` monogram appears in:
1. **Navbar** — 40×40px orange square with white "RR" text
2. **Footer** — Same treatment
3. **Favicon** — 32×32px orange square with "R"

**To replace with a custom logo:** Swap the `RR` block in `Navbar.tsx` and `Footer.tsx` with a Next.js `<Image>` tag pointing to your logo file in `/public/images/`.

---

## Formspree Contact Form Setup

The contact page uses [Formspree](https://formspree.io) to handle form submissions without a backend.

### Steps

1. **Create a free account** at [formspree.io](https://formspree.io)
2. **Create a new form** → choose "New Form"
3. **Copy your form ID** (looks like `xpwzknla`)
4. **Update the form endpoint** in `src/app/contact/page.tsx`:

```tsx
// Find this line (~line 60 in contact/page.tsx):
const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {

// Replace YOUR_FORM_ID with your actual ID:
const res = await fetch("https://formspree.io/f/xpwzknla", {
```

5. **Set notification email** in Formspree dashboard → Settings → Notifications → set to `rapidrenovationpa@gmail.com`

### Formspree Pro (optional upgrades)

| Feature | Plan |
|---|---|
| File uploads (photos of job site) | Pro ($25/mo) |
| Spam filtering (reCAPTCHA) | Free |
| Email auto-responder | Pro |
| Zapier/CRM integration | Pro |

To add file upload: add this to the form in contact/page.tsx step 3:
```tsx
<input type="file" name="project_photos" accept="image/*" multiple
  className="w-full bg-brand-steel border border-white/10 text-brand-slate text-sm px-4 py-3 rounded-sm" />
```

---

## Vercel Deployment

Vercel is the recommended platform for Next.js (made by the same team).

### One-Click Deploy

1. Push this project to GitHub (or GitLab/Bitbucket)
2. Go to [vercel.com](https://vercel.com) and sign up/log in
3. Click **"Add New Project"** → Import your GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site is live at `your-project.vercel.app`

### Environment Variables (if needed)

In Vercel dashboard → Settings → Environment Variables:

```
NEXT_PUBLIC_FORMSPREE_ID=your_form_id
```

### Performance Tips for Vercel Pro

- Enable **Edge Network** caching for static pages
- Enable **Image Optimization** (included free)
- Enable **Analytics** to monitor Core Web Vitals
- Set **ISR (Incremental Static Regeneration)** for blog pages once you add a CMS

---

## GoDaddy DNS Configuration

After deploying to Vercel, connect your GoDaddy domain.

### Step 1 — Get Vercel DNS info

In Vercel dashboard → Project → Settings → Domains → add `rapidrenovationdemolition.com`  
Vercel will show you either:
- An **A record** IP address (e.g. `76.76.21.21`)
- Or nameservers to point GoDaddy to

### Step 2 — Update GoDaddy DNS

1. Log in to [GoDaddy](https://godaddy.com)
2. Go to **My Products** → DNS for `rapidrenovationdemolition.com`
3. Add/edit these records:

**Option A — Keep GoDaddy nameservers (easier):**
```
Type  Name   Value          TTL
A     @      76.76.21.21    600
CNAME www    cname.vercel-dns.com  600
```

**Option B — Use Vercel nameservers (recommended for full control):**
- In Vercel: Settings → Domains → use Vercel DNS
- In GoDaddy: change nameservers to the ones Vercel provides

### Step 3 — Wait & verify

DNS propagation takes 15 minutes to 48 hours. Check at [whatsmydns.net](https://whatsmydns.net).  
Vercel issues a free **SSL certificate** automatically once DNS is verified.

### WWW Redirect

Add a redirect in `next.config.mjs` to canonicalize to `www`:

```js
async redirects() {
  return [
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'rapidrenovationdemolition.com' }],
      destination: 'https://www.rapidrenovationdemolition.com/:path*',
      permanent: true,
    },
  ];
},
```

---

## SEO & Analytics

### What's Already Configured

- ✅ `<title>` and `<meta description>` on every page
- ✅ Open Graph tags (Facebook/LinkedIn sharing)
- ✅ Twitter card meta tags
- ✅ `LocalBusiness` JSON-LD structured data (in `layout.tsx`)
- ✅ `sitemap.xml` auto-generated at `/sitemap.xml`
- ✅ `robots.txt` at `/robots.txt`
- ✅ Canonical URL set to `www.rapidrenovationdemolition.com`
- ✅ Keywords targeting Philadelphia, Upper Darby, Lansdowne

### Google Search Console Setup

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property → URL prefix → `https://www.rapidrenovationdemolition.com`
3. Verify via HTML tag (add to `layout.tsx` head) or Google Analytics
4. Submit sitemap: `https://www.rapidrenovationdemolition.com/sitemap.xml`

### Google Analytics 4

Add to `layout.tsx` inside `<head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script dangerouslySetInnerHTML={{ __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
`}} />
```
Replace `G-XXXXXXXXXX` with your Measurement ID.

### Google Business Profile

Register at [business.google.com](https://business.google.com) with:
- Business name: Rapid Renovation & Demolition LLC
- Category: General Contractor
- Service area: Philadelphia, Upper Darby, Lansdowne, PA
- Phone: 347-977-3212
- Website: https://www.rapidrenovationdemolition.com

This powers Google Maps and "near me" search results.

---

## Content Management

### Adding Blog Posts

Blog posts are currently hardcoded in `src/app/blog/page.tsx`. To add a post:

```tsx
// Add to the posts array in blog/page.tsx:
{
  id: 7,
  slug: "your-post-slug",
  title: "Your Post Title",
  excerpt: "A 2–3 sentence summary shown on the listing page.",
  category: "Renovation", // or Demolition, Kitchen, Bathroom, Flooring, Tips
  date: "April 1, 2025",
  readTime: "5 min read",
  featured: false,
},
```

**For a full blog CMS** (recommended as you scale), integrate:
- [Sanity](https://sanity.io) — free tier, excellent Next.js support
- [Contentful](https://contentful.com) — popular, free tier
- [Notion as CMS](https://notionapi.com) — manage posts in Notion

### Adding Projects

Projects are in `src/app/projects/page.tsx`. Same pattern — add to the `projects` array.

**To add real photos:** Replace the placeholder divs with:
```tsx
import Image from "next/image";
<Image src="/images/project-kitchen-upper-darby.jpg" alt="Upper Darby kitchen renovation" fill className="object-cover" />
```
Store photos in `/public/images/` — recommended size: 800×600px, under 200KB each.

### Updating Business Info

Business info is set in multiple places. Use Find & Replace across the project:

| Value | Location |
|---|---|
| Phone number | `Navbar.tsx`, `Footer.tsx`, `contact/page.tsx`, `layout.tsx` |
| Email | `Footer.tsx`, `layout.tsx` |
| Service area | `Footer.tsx`, `layout.tsx`, `page.tsx` |
| Hours | `Footer.tsx`, `contact/page.tsx`, `layout.tsx` |

---

## Performance Optimization

### Image Best Practices

Always use Next.js `<Image>` (never `<img>`):
```tsx
import Image from "next/image";
<Image src="/images/kitchen-reno.jpg" alt="Kitchen renovation Philadelphia" width={800} height={600} />
```

Recommended image sizes:
- Hero background: 1920×1080px, JPEG quality 80
- Project gallery: 800×600px, JPEG quality 80
- OG image: 1200×630px

### Core Web Vitals Targets

| Metric | Target | Current Setup |
|---|---|---|
| LCP | < 2.5s | ✅ Next.js image optimization |
| FID/INP | < 100ms | ✅ No blocking JS |
| CLS | < 0.1 | ✅ Fixed dimensions on images |

### Bundle Size

Run `npm run build` and check the output. To analyze the bundle:
```bash
npm install @next/bundle-analyzer
# Add to next.config.mjs: withBundleAnalyzer({ enabled: true })
npm run build
```

---

## Customization Guide

### Changing Colors

All brand colors are in `tailwind.config.ts` under `theme.extend.colors.brand`:

```ts
brand: {
  orange: "#E8541A",  // ← Change this to your primary color
  steel: "#1A2332",   // ← Change this for a lighter/different dark bg
  // ...
}
```

Also update the CSS variables in `globals.css`:
```css
:root {
  --color-orange: #E8541A;  /* match tailwind.config.ts */
}
```

### Changing Fonts

In `layout.tsx`, update the Google Fonts import URL. In `globals.css` update the `@import` and `:root` font variables. In `tailwind.config.ts` update `fontFamily`.

### Adding New Pages

1. Create folder: `src/app/your-page/`
2. Create file: `src/app/your-page/page.tsx`
3. Add link to `Navbar.tsx` navLinks array
4. Add to `sitemap.ts`

### Framer Motion Animations

The `AnimatedSection` component wraps any content with scroll-triggered animations:

```tsx
<AnimatedSection delay={0.2} direction="up">
  <YourContent />
</AnimatedSection>

// direction options: "up" | "left" | "right" | "none"
// delay: seconds (0.1 increments recommended for stagger effects)
```

---

## Support

For technical questions or customization help:

- **Website:** rapidrenovationdemolition.com
- **Email:** rapidrenovationpa@gmail.com
- **Phone:** 347-977-3212

---

*Built with Next.js 14, Tailwind CSS, and Framer Motion. Optimized for performance, accessibility, and local SEO.*
