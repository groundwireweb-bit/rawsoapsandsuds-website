# SEO Agent (07) — work log & flags for QA

## Files produced
- `sitemap.xml` — 4 architecture pages (home, shop, ingredients-allergens, contact). `lastmod` 2026-06-30.
- `robots.txt` — allows all, disallows `/api/`, points to sitemap.
- `schema/home.json` — LocalBusiness.
- `schema/shop.json` — ItemList of 5 Product items with $4 Offers.
- `schema/ingredients-allergens.json` — FAQPage (5 Q&As, verbatim from copy.json).

## Files modified (index, shop, ingredients-allergens, contact, 404)
Added to each page `<head>`: canonical, Open Graph, Twitter card, and inline JSON-LD:
- Home + Contact → LocalBusiness (mirrors `schema/home.json`).
- Shop → Product ItemList (mirrors `schema/shop.json`).
- Ingredients & Allergens → FAQPage (mirrors `schema/ingredients-allergens.json`).
- 404 → `<meta name="robots" content="noindex, follow">`, no canonical (a 404 must not self-canonicalize); excluded from sitemap.

Other fixes:
- Logo `alt` changed from `Raw Soaps and Suds` to `Raw Soaps and Suds logo` on all pages.
- Footer contact block marked up as an hCard microformat (`h-card`, `p-org p-name`, `u-email`, `p-tel`, `p-adr`/`p-locality`/`p-region`). Visible text and layout unchanged — only class names and two `<span>`s added.

## Titles (all unique, < 60 chars, city/state for local SEO)
- Home: `Raw Soaps and Suds — Handmade Soap in Johnson County, TX` (unchanged, 56)
- Shop: `Shop Soaps | Raw Soaps and Suds | Johnson County, TX` (52)
- Ingredients: `Soap Ingredients & Allergens — Raw Soaps and Suds, TX` (53)
- Contact: `Contact | Raw Soaps and Suds | Johnson County, TX` (49)
- 404: `Page not found | Raw Soaps and Suds` (unchanged; noindex)

Meta descriptions were already present, unique, < 155 chars, and matched `site_architecture.json` — left as-is. Home description already carries service-area context (Johnson County + local pickup).

## Flags / decisions for QA and the human reviewer
1. **Domain is a placeholder.** `project_brief.meta.domain` is null, so every canonical/OG/schema/sitemap/robots URL uses `https://yourdomain.com`. Find-and-replace the host site-wide once a real domain exists. Comments marking this are in each file.
2. **No body-copy city/state injection.** The SEO brief asks to add city/state into the first body paragraph of each page where absent (Shop, Contact, Ingredients heroes lack it). I did **not** edit visible copy — COPY IS LAW forbids adding/altering text from copy.json. Local signal is instead carried in titles, meta, OG, and schema. If the reviewer wants city/state in the visible intro lines, that's a copy.json change for Agent 04, not an SEO edit.
3. **Internal linking.** Every page links to all four pages via global nav + footer. Inline in-content links exist on Home (→ Shop ×3, → Ingredients) and Ingredients FAQ (→ Contact). Shop and Contact have no extra inline content links beyond nav/footer/mailto — none could be added without inventing copy. Acceptable but noted.
4. **Phone not fabricated.** Phone is a placeholder, so `telephone` is omitted from schema and the footer/contact `tel:` href is empty. Wire the real number into the `tel:` links and add `telephone` to the schema when available.
5. **Schema type.** Used `LocalBusiness` — schema.org has no specific handmade-soap-maker subtype. `priceRange` set to `$`. No street address published (pickup-only), so `PostalAddress` carries only region (TX) + country; coverage is expressed via `areaServed` (Johnson County, Cleburne, Burleson).
6. **Out-of-scope bug spotted (not fixed by me):** the nav logo `src="assets/logo.png"` is a root-relative-looking but actually relative path (no leading slash), while CSS/favicon use `/...`. On a clean-URL route like `/shop` this would resolve to `/shop/assets/logo.png` and 404 (the `onerror` hides it). Recommend the build/QA agent normalize to `/assets/logo.png`.
7. **og:image/twitter:image** point to `/assets/og-image.jpg`, which does not exist yet (no assets were provided). Drop the real image in at that path before launch.
