# Agent 06 — Page Build Notes

Pages built (one per `site_architecture.json` `pages[]`):

- `index.html` — Home (`data-page="home"`): hero, trust_bar, scents preview, ingredients snippet, cta_strip.
- `shop.html` — Shop (`data-page="shop"`): hero, pricing callout, 5-card scent grid, cta_strip.
- `ingredients-allergens.html` — Ingredients & Allergens (`data-page="ingredients"`): hero, base + lye reassurance, allergen note, FAQ accordion, cta_strip.
- `contact.html` — Contact (`data-page="contact"`): hero, contact methods (mailto/tel — NO form), 3-step ordering, service area, cta_strip.
- `404.html` — also built: `routing.404_page: true` is declared and copy.json provides `404` content, so it was produced to place that copy. Not in `pages[]`; flagging for SEO/QA awareness.

## Decisions and concerns for downstream agents

1. **Shared stylesheet, not per-page CSS.** Section-layout styles (hero, trust-bar,
   scent-grid, pricing-callout, prose, cta-strip, FAQ, steps, contact-methods) were
   **appended** to `globals/styles.css` under a clearly-marked `§14 Page sections —
   added by Agent 06` block. No existing token/component rule was modified — additions
   only. This honors the brief's explicit constraint that "four pages share ONE
   stylesheet" and avoids four near-duplicate page CSS files. No page-specific CSS
   files were created.

2. **Additive classes only** (all use existing design tokens): `.btn--on-dark`
   (white button for use on the primary-blue cta-strip band — `.btn--primary`/
   `.btn--secondary` would not contrast there), plus section/layout helpers. The
   cta-strip uses `--color-primary` (not the kraft `--color-accent`) as its band
   colour, keeping accent "used sparingly" per the design direction; accent appears
   only on small details (badge, dots, dividers, pricing card top border, FAQ icon).

3. **Copy placed verbatim** from `copy.json`. The "Eat Me" description retains its
   literal `[PLACEHOLDER — Jelisha to fill in real scent notes here.]` text (copy is
   law) plus an HTML comment marker so it is easy to find and replace.

4. **Custom inline-SVG scent graphics** (no stock photos / no placehold.co per the
   brief): mango slice, cherry blossom, apple, patchouli leaf, and a playful
   bubbles+sparkle mark for Eat Me. Each is preceded by
   `<!-- REPLACE WITH REAL PHOTO: <slug>.jpg -->` and carries real `aria-label` alt
   text. The hero stamp badge holds an inline bluebonnet sprig SVG (the one bold
   moment).

5. **No contact form** anywhere — `contact_methods` is a mailto + tel placeholder
   block, as the architecture and brief require (a working form needs a backend, out
   of scope). Phone is wired as `tel:` with the `[PHONE NUMBER — Jelisha to add]`
   placeholder visible and commented in nav-adjacent spots, footer, and the contact
   row.

6. **FAQ accordion** uses native `<details>/<summary>` (accessible, schema-ready) with
   a small vanilla-JS enhancement that enforces one-open-at-a-time. SEO can attach
   `FAQPage` schema directly to `#ingredients_faq`.

7. **POSSIBLE DEPLOYMENT ISSUE — root-relative links.** The nav/footer built by Agent
   05 link to extension-less, root-relative paths (`/`, `/shop`,
   `/ingredients-allergens`, `/contact`) and assets at `/globals/styles.css`,
   `/assets/...`. These were preserved verbatim (I do not rebuild the globals). On a
   plain drag-and-drop static host (e.g. GitHub Pages project subpath) these will not
   resolve to the actual files `shop.html`, `ingredients-allergens.html`, etc. without
   server rewrites or a redirect config. **Flagging for Agent 07/08** to either add
   rewrites/`netlify.toml`/`_redirects`, or normalise links to the `.html` filenames
   and root-relative `/` to a relative base. Left as-is here to respect "do not rebuild
   the nav/footer."

8. **Google Fonts** (Bitter + Karla, weights 400/500/700) are loaded via `<link>` in
   each page `<head>` per the code standards (styles.css references the families but
   does not import them).
