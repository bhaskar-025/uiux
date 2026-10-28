# Nexora AI — Embedded AI Agent Solutions

A professional, multi-page website for **Nexora AI**, a fictional company that provides embedded AI agents, enterprise AI integrations, intelligent workflow automation, and AI-powered customer support solutions.

Built with **Next.js App Router**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**. Designed to demonstrate comprehensive on-page SEO optimization techniques.

---

## Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm 9+

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## Configuring the Site URL

The site URL is configured via the `NEXT_PUBLIC_SITE_URL` environment variable. This URL is used for:

- Canonical URLs
- Open Graph metadata
- Sitemap generation
- robots.txt sitemap reference
- Structured data (JSON-LD)

### Development

The default in `.env.local` is:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Production

Before deploying, set this to your actual production domain:

```
NEXT_PUBLIC_SITE_URL=https://your-actual-domain.com
```

See `.env.example` for reference.

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx            # Root layout with metadata, fonts, nav, footer, JSON-LD
│   ├── page.tsx              # Home page (/)
│   ├── globals.css           # Design system — Tailwind + shadcn CSS variables
│   ├── sitemap.ts            # XML sitemap generation
│   ├── robots.ts             # robots.txt generation
│   ├── opengraph-image.tsx   # Dynamic OG image generation
│   ├── solutions/page.tsx    # Solutions page (/solutions)
│   ├── platform/page.tsx     # Platform page (/platform)
│   ├── use-cases/page.tsx    # Use Cases page (/use-cases)
│   └── contact/page.tsx      # Contact page (/contact)
├── components/
│   ├── ui/                   # shadcn/ui base components
│   ├── navbar.tsx            # Responsive navigation with mobile sheet
│   ├── footer.tsx            # Site footer with links and contact info
│   ├── page-hero.tsx         # Reusable page hero section
│   ├── section-heading.tsx   # Reusable section heading
│   ├── solution-card.tsx     # Card for displaying solutions
│   ├── use-case-card.tsx     # Card for detailed use cases
│   ├── architecture-diagram.tsx  # CSS/icon-based platform diagram
│   ├── faq-section.tsx       # FAQ section with accordion
│   ├── cta-section.tsx       # Call-to-action section
│   ├── breadcrumbs.tsx       # Breadcrumb navigation
│   └── contact-form.tsx      # Validated contact form
└── lib/
    ├── site-config.ts        # Centralized brand & URL config
    ├── metadata.ts           # Metadata factory for pages
    ├── navigation.ts         # Navigation link definitions
    ├── structured-data.ts    # JSON-LD schema generators
    └── utils.ts              # Tailwind merge utility (shadcn)
```

---

## Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Hero, core services, process, use case highlights, trust section |
| Solutions | `/solutions` | Six detailed AI solutions with comparison table |
| Platform | `/platform` | Architecture diagram, capabilities, security, FAQ |
| Use Cases | `/use-cases` | Six detailed use cases with workflow visualization |
| Contact | `/contact` | Validated consultation form with planning tips |

---

## SEO Implementation

Detailed documentation of all SEO techniques is in [`SEO-IMPLEMENTATION.md`](./SEO-IMPLEMENTATION.md).

### Where Metadata Is Defined

- **Shared metadata** (title template, metadataBase, robots): `src/app/layout.tsx`
- **Page-specific metadata**: Each page's `page.tsx` exports a `metadata` object via `createMetadata()` from `src/lib/metadata.ts`
- **Site config** (name, URL, description): `src/lib/site-config.ts`

### Verifying SEO

1. **View page source** — Check that headings, content, and meta tags are server-rendered
2. **Inspect `<head>`** — Verify unique titles, descriptions, canonical URLs, OG tags
3. **Visit `/sitemap.xml`** — Confirm all 5 pages are listed
4. **Visit `/robots.txt`** — Confirm crawling is allowed and sitemap is referenced
5. **Check JSON-LD** — Search for `<script type="application/ld+json">` in page source
6. **Lighthouse audit** — Run Chrome DevTools Lighthouse for SEO score
7. **Mobile test** — Resize browser or use DevTools device mode

---

## Technology Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide React](https://lucide.dev/) (icons)

---

## Notes

- This is a **demonstration website** for an academic UI/UX assignment
- No real AI functionality, backend services, or data storage is implemented
- Contact form is client-side only — no data is transmitted
- All contact information is illustrative
- SEO verification should be performed against the running application
