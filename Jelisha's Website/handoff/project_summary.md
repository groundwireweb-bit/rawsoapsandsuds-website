# Raw Soaps and Suds — Project Summary

**Internal document — GroundWire team use only**

---

## Project Info

| Field | Value |
|---|---|
| Client | Jelisha |
| Business | Raw Soaps and Suds |
| Project ID | raw-soaps-and-suds-001 |
| Submission date | 2026-06-30 |
| Package | Not recorded (stripe_session_id is null in the submission) |
| Built | 2026-06-30 |

---

## Pages Built

| Page | File |
|---|---|
| Home | index.html |
| Shop | shop.html |
| Ingredients & Allergens | ingredients-allergens.html |
| Contact | contact.html |
| 404 | 404.html |

---

## Features Implemented

- Sticky nav with mobile hamburger menu (Escape-to-close, focus returns to trigger, aria-expanded/aria-controls)
- Five product cards in a responsive grid on Shop, each with a custom inline SVG illustration
- FAQ accordion on Ingredients & Allergens
- mailto: CTAs throughout (prefilled "Soap order" subject), tel: placeholder wired and ready for the real number
- JSON-LD structured data on every page (LocalBusiness on Home + Contact, Product ItemList on Shop, FAQPage on Ingredients & Allergens)
- sitemap.xml covering the four indexable pages
- robots.txt pointing to the sitemap
- One shared stylesheet (globals/styles.css) across all five pages
- Skip link, visible :focus-visible states, aria-hidden on decorative SVGs, prefers-reduced-motion support

---

## What's Still Needed from the Client

**Phone number** — the Contact page and footer on every page show the placeholder `[PHONE NUMBER — Jelisha to add]`. The tel: link is already wired; it just needs the real number dropped in.

**"Eat Me" scent description** — the copy on Shop and the home preview card reads `[PLACEHOLDER — Jelisha to fill in real scent notes here.]`. She provided draft descriptions for the other four scents but left this one open. It's comment-marked in the HTML.

**Domain** — no domain was provided. Every canonical tag, Open Graph URL, Twitter URL, JSON-LD URL, sitemap.xml entry, and robots.txt reference currently uses `https://yourdomain.com`. Once the real domain is confirmed, it's a find-and-replace across the whole project — each affected location is comment-marked.

---

## Asset Status

| Asset | Status |
|---|---|
| Logo | No image file provided. A text-based wordmark ("Raw Soaps and Suds") built in HTML/CSS/SVG is live. Easy to swap for a real logo later — the nav has an `onerror` fallback that already handles this gracefully. |
| Product photos | None provided. Each soap card has a custom inline SVG illustration with a `<!-- REPLACE WITH REAL PHOTO: [slug].jpg -->` comment so real photos drop in without restructuring the page. |
| Favicon | Not provided. `/assets/favicon.ico` will 404 until a real file is added. |
| OG image | Not provided. `/assets/og-image.jpg` is referenced by Open Graph and Twitter meta tags but the file doesn't exist yet. Social previews will be blank until this is added. |

---

## Domain Status

Not provided. All URLs use the `https://yourdomain.com` placeholder.

---

## Notes for the Account Manager

**No contact form** — this was intentional and explicitly out of scope per the brief. There's no backend. Jelisha captures orders by email and phone, and the site is built around that. Don't add a form without also setting up a form handler.

**No testimonials** — none were provided. The site doesn't have a reviews section. If Jelisha collects real reviews later, a testimonials section can be added to the Home page.

**No About page** — also intentional per the brief. There's no personal story or biography anywhere on the site. The Home page has one short section about the soap and the process, but nothing about Jelisha personally.

**URL scheme note** — navigation and asset links use relative `.html` paths (works on drag-and-drop hosts and `file://`). Canonical/OG/sitemap URLs use clean extension-less paths (`/shop`, not `/shop.html`). Once a host is chosen, the team should reconcile these: either configure clean-URL rewrites on the host, or update the canonical/sitemap URLs to match `.html`. This is a one-time decision at deploy time.

---

## Estimated Time to Launch

Once Jelisha provides the missing items, a GroundWire team member should budget:

- **30 minutes** to swap in the phone number, domain, favicon, and OG image
- **Jelisha's time** to write the "Eat Me" scent description
- **1–2 hours** for DNS propagation and final cross-browser check

The build itself is done. Everything blocking launch is waiting on client content.
