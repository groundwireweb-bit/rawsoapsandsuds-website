# Launch Checklist — Raw Soaps and Suds

Work through this top to bottom before pointing the domain. Check each item off as you go.

---

## Content — Get from Client First

- [ ] Confirm Jelisha's real phone number is in the site (it's a placeholder in the footer on every page). Note: the Contact page was removed — the Request form (`request.html`) is now the main way visitors reach Jelisha, and the footer carries the email/phone.
- [x] "Eat Me" card no longer shows placeholder text — it now reads "Playful and a little mischievous." on Shop and Home. (Optional: expand with Jelisha's real scent notes later; a `Jelisha: expand` comment marks the spot in both files.)
- [ ] Confirm Jelisha's email (`jelishayork439@gmail.com`) is correct and she's checked it recently
- [ ] Confirm pickup area description is accurate — currently says "Johnson County, Texas"
- [x] Nav now shows the stamped bluebonnet badge (`assets/logo-mark.svg`) beside the text wordmark. If Jelisha later provides a hand-drawn logo, swap it in — the `onerror` fallback still hides the mark and keeps the wordmark if an image ever fails.

---

## Assets — Designed and In Place

- [x] Custom favicon at `assets/favicon.svg` (the bluebonnet stamp) is linked on every page — confirm it appears in the browser tab on Chrome, Safari, and Firefox
- [x] Designed OG/social image at `assets/og-image.png` (1200×630 brand card) is wired into all Open Graph / Twitter tags — test the preview with [Meta's Sharing Debugger](https://developers.facebook.com/tools/debug/) once the domain is live
- [x] Square `assets/logo.png` (512×512) now exists for the JSON-LD `logo` field (was a broken reference)
- [ ] Scent-card and contact icons now use open-source OpenMoji artwork (`assets/emoji/*.svg`), not AI-generated SVGs — see `handoff/CREDITS.md` for the CC BY-SA 4.0 attribution requirement
- [ ] Add real soap photos by dropping files into `assets/soaps/` — no code editing needed. Use the exact names `mango-madness.jpg`, `cherry-blossom.jpg`, `apple-fantasy.jpg`, `perfect-patchouli.jpg`, `eat-me.jpg` (see `assets/soaps/README.txt`). Each card auto-shows the photo when present and falls back to the placeholder icon when it isn't.

---

## Domain

- [ ] Confirm the real domain with Jelisha (currently a placeholder — `yourdomain.com` everywhere)
- [ ] Do a project-wide find-and-replace on `yourdomain.com` → the real domain in these files:
  - `index.html`
  - `shop.html`
  - `ingredients-allergens.html`
  - `contact.html`
  - `request.html`
  - `sitemap.xml`
  - `robots.txt`
- [ ] Decide on URL scheme: will the host serve clean URLs (`/shop`) or `.html` URLs (`/shop.html`)? Update canonical tags and sitemap accordingly
- [ ] Log in to domain registrar and point DNS to the hosting provider
- [ ] Confirm SSL certificate is active — site should load on `https://`, not `http://`
- [ ] Set up redirect so both `www` and non-`www` work, and pick one as the canonical version
- [ ] Confirm all five pages load correctly on the live domain

---

## Technical

- [ ] Upload the full project folder to the static host (GitHub Pages, Netlify, or similar — site is plain HTML, no build step needed)
- [ ] Verify `sitemap.xml` is accessible at `yourdomain.com/sitemap.xml`
- [ ] Verify `robots.txt` is accessible at `yourdomain.com/robots.txt`
- [ ] Test the 404 page — navigate to a nonexistent URL and confirm the custom 404.html loads
- [ ] Test the mobile hamburger menu on a real phone (not just a browser resize)
- [ ] Test all mailto: links — clicking "Email Jelisha to order" should open the device's mail app with the subject pre-filled
- [ ] Test the tel: link once the real phone number is in place
- [ ] Test the **Send a Request** form (`request.html`): submit it once live, then have Jelisha click the FormSubmit activation email so submissions start reaching her inbox (see `remaining_items.md` Item 6)
- [ ] Run a quick check on Google PageSpeed Insights or similar — no heavy dependencies, so scores should be solid
- [ ] Set up Google Analytics and add the tracking snippet to the `<head>` of all five pages
- [ ] Submit the site to Google Search Console and verify the sitemap

---

## Post-Launch

- [ ] Send Jelisha the live URL
- [ ] Send Jelisha the `client_guide.md` document (personalize it first — fill in the revision count and double-check the contact email)
- [ ] Set a 30-day check-in reminder to confirm the site is still running and ask if she's received any orders through it
- [ ] Add Jelisha to monthly maintenance billing
- [ ] Archive the project files and this handoff folder internally
