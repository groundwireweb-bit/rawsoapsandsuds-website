# Remaining Items — Raw Soaps and Suds

Pulled from the QA report. No severity "error" items remain — all blocking errors were fixed during QA. Everything below is either a placeholder waiting on client input or a deploy-time decision.

---

## Item 1: Phone number placeholder

**File:** footer on every page, and `globals/footer.html`
**Type:** Placeholder — needs client input
**Description:** The phone number shows as `[PHONE NUMBER: Jelisha to add]` in the footer of every page. The `tel:` link is already in the HTML with an empty `href="tel:"`, so it just needs the real number. (The Contact page that used to also show the phone has been removed; the Request form's phone field is for the *customer's* number, not Jelisha's.)
**Action required:** Get the phone number from Jelisha. Search the project for `[PHONE NUMBER: Jelisha to add]` — it appears in the footer of every page and in `globals/footer.html`. Replace both the visible text and the empty `tel:` href (e.g. `tel:+18175551234`) everywhere it appears.
**Blocking launch:** No — the site works without it, but a missing phone number is a real gap for a business that relies on direct contact. Resolve before sending the preview to Jelisha.

---

## Item 2: "Eat Me" scent description — optional enhancement (placeholder text removed)

**File:** shop.html, index.html, copy.json
**Type:** Optional — nice to have, not required
**Description:** RESOLVED for launch. The visible `[PLACEHOLDER — Jelisha to fill in real scent notes here.]` text has been removed from the live "Eat Me" card on both Home and Shop (it rendered on the page and read as unfinished — an anti-slop-directive violation). The card now shows the real one-line description "Playful and a little mischievous.", which stands on its own. An HTML comment (`<!-- Jelisha: expand this with the real scent notes when you're ready ... -->`) marks the spot in both files, and `copy.json` carries a matching `_note_for_jelisha` field.
**Action required:** Optional — when Jelisha wants, ask her for a sentence or two describing what "Eat Me" actually smells like and append it after "Playful and a little mischievous." in `shop.html`, `index.html`, and `copy.json`. Search for `Jelisha: expand` to find the spots.
**Blocking launch:** No — nothing placeholder is visible anymore; this is now purely a content upgrade.

---

## Item 3: Domain is a placeholder everywhere

**File:** index.html, shop.html, ingredients-allergens.html, contact.html, sitemap.xml, robots.txt
**Type:** Placeholder — needs client input
**Description:** No domain was provided. Every canonical tag, Open Graph URL, Twitter URL, JSON-LD URL, sitemap entry, and robots.txt uses `https://yourdomain.com`. Every affected location has a comment marker.
**Action required:** Get the real domain from Jelisha. Do a project-wide find-and-replace: `yourdomain.com` → the real domain (without a trailing slash). Check sitemap.xml and robots.txt manually after — they're plain text files, so the replace is simple. Then decide on URL scheme (see Item 5) and update canonical/sitemap accordingly.
**Blocking launch:** Yes — the site should not go live with placeholder domain URLs in its metadata. Do this immediately before launch.

---

## Item 4: Brand assets — designed and in place (were missing)

**File:** assets/ directory
**Type:** RESOLVED — real assets now ship with the site
**Description:** All three previously-missing brand assets have been created from the site's own signature element (the stamped bluebonnet maker's badge), so the browser tab, social previews, and structured data all carry the brand instead of blanks/broken references:
- `assets/favicon.svg` — a custom SVG favicon of the stamped bluebonnet badge. Linked in `<head>` on every page via `<link rel="icon" href="assets/favicon.svg" type="image/svg+xml">` (replaces the old broken `favicon.ico` reference). Renders crisply at any size, no build step.
- `assets/og-image.png` — a designed 1200×630 social-preview card (bluebonnet-blue field, kraft stamp badge, "Raw Soaps and Suds" wordmark, tagline, and "$4 a bar · 3 for $10 · Local pickup" line). Wired into the Open Graph / Twitter `image` tags and the JSON-LD `image` on all pages (replaces the old broken `og-image.jpg` reference).
- `assets/logo.png` — a square 512×512 logo (badge + wordmark) used by the JSON-LD `logo` field, which previously pointed at a nonexistent file.
- `assets/logo-mark.svg` — a badge-only mark (no wordmark) that now sits beside the text wordmark in the nav bar, giving a proper stamp + wordmark lockup. The nav `<img>` points here (it used to point at the nonexistent `logo.png`, which would otherwise have shown the wordmark twice).

**Action required:** None required for launch — these are real, on-brand assets. Optional: if Jelisha ever commissions a hand-drawn logo or has a product photo she'd rather use for social sharing, drop a replacement at the same path (`assets/og-image.png`, `assets/logo.png`) and it will be picked up automatically. All four generated assets are easy to refine later (the SVGs are editable text you can open in any editor; the PNGs can be re-rendered or simply swapped for a real photo/logo at the same path).
**Blocking launch:** No longer blocking — resolved.

---

## Item 5: URL scheme decision at deploy time

**File:** Site-wide (canonical tags, sitemap.xml vs. page navigation)
**Type:** Deploy-time decision — no client input needed
**Description:** Navigation links and asset paths use relative `.html` extensions (e.g. `shop.html`, `globals/styles.css`) so the site works when dragged onto any static host or opened via `file://`. SEO metadata (canonical tags, Open Graph URLs, sitemap.xml) uses clean extension-less paths (e.g. `/shop`). These two approaches need to match on the final host.
**Action required:** When the host is chosen, pick one of two options:
- **Option A (recommended for Netlify/GitHub Pages):** Configure the host to serve clean URLs without `.html` extensions. The canonical/sitemap URLs are already correct and no changes are needed.
- **Option B:** Update every canonical tag and sitemap entry to use `.html` extensions to match what the host actually serves. Search for `canonical` in each HTML file and update `sitemap.xml`.

There's no wrong answer — just be consistent. Clean URLs (Option A) are more common and look better in search results.
**Blocking launch:** Not technically blocking, but mismatched canonical URLs can cause duplicate-content issues in search. Resolve before submitting to Search Console.

---

## Item 6: Request form — activate FormSubmit on first submission

**File:** `request.html`
**Type:** One-time setup — needs client action
**Description:** A new **Send a Request** page (`request.html`) was added with a working
contact/order form. Because the site is static (no backend), the form submits through
**FormSubmit.co** straight to Jelisha's email. The form `action` is
`https://formsubmit.co/jelishayork439@gmail.com`.
**Action required:** The **first time** anyone submits the form, FormSubmit sends a
one-time confirmation email to `jelishayork439@gmail.com`. Jelisha must click the
activation link in that email **once** — after that, every submission is delivered to
her inbox automatically. To test: deploy the site, submit the form yourself, then have
Jelisha confirm the activation email. To send submissions somewhere else, change the
email in the form's `action` attribute (and re-activate). Spam protection is handled by
a hidden honeypot field; you can also turn FormSubmit's captcha back on by setting the
hidden `_captcha` field to `true`.
**Note:** This form was added at the client's request. The original brief listed a
contact form as out of scope (it needs a backend); FormSubmit is the no-backend way to
satisfy that without a server, and it works on any static host.
**Blocking launch:** The page works and validates without activation, but submissions
won't reach Jelisha until the one-time activation is done. Do it as part of launch.
