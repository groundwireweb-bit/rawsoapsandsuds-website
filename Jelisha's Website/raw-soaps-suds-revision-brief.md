# Website Revision Brief: Raw Soaps & Suds

You're updating copy and content on an already-built static marketing site for Raw Soaps & Suds, a handmade soap business run by Jelisha in Johnson County, Texas (currently live at rawsoapsandsuds-website.groundwireweb.workers.dev). Based on the rendered pages, the site is built from source files with front matter (`meta-description`, `meta-og:*`, `meta-twitter:*`, `title`, etc.) that compile into four pages — `index.html` (Home), `shop.html` ("The Bars"), `ingredients-allergens.html` ("What's In 'Em"), and `request.html` ("Order"). All four share one header (logo, nav: Home / The Bars / What's In 'Em / Order, plus a "Holler at Jelisha" button) and one footer (business blurb, nav repeat, contact info, copyright). Find the actual source files and any shared header/footer partial before you start editing — the instructions below describe what needs to change based on the rendered site, not a guaranteed file layout.

**Keep the voice.** This site is warm, plainspoken, and a little cheeky: "Fussy little bars," "no cart, no shipping, no nonsense," "quit deciding," "Patchouli that behaves itself. Mostly." Any new copy you write should sound like it came from the same person. Don't let it drift corporate.

**Don't touch:** the $4/bar and 3-for-$10 pricing, the pickup-only/no-shipping policy, the general lye/saponification safety explanation (only remove the shea butter reference from it, per §3), the nav structure, or the contact info.

## 1. Retire the entire current scent lineup

These five scents exist today on `index.html` and `shop.html` and need to come out completely — cards, images, and order links:

- **Mango Madness** (`assets/soaps/mango-madness.jpg`)
- **Cherry Blossom** (`assets/soaps/cherry-blossom.jpg`)
- **Apple Fantasy** (`assets/soaps/apple-fantasy.jpg`)
- **Perfect Patchouli** (`assets/soaps/perfect-patchouli.jpg`)
- **Eat Me** (`assets/soaps/eat-me.jpg`) — this is the name that can't be used anymore ("eat it raw," per the client). She floated renaming it to "Soft Lavender," then said never mind. So it isn't being renamed — it's retiring along with the other four.

Pull all five cards from the homepage's "Five bars, one tiny soap operation" section and from the full lineup on `shop.html`. Leaving the old `.jpg` files sitting unused in the assets folder is fine; nothing on any page should reference them anymore.

## 2. Launch the new lineup — four scents

Replace the five retired scents with exactly these four:

- **Tangerine**
- **Beautiful**
- **Bliss**
- **Orange Blast**

All four are being positioned as made with **100% natural essential oils** — new language, and important to the client (it's specifically why these four are sellable when the old batch wasn't).

No final photos or scent descriptions exist yet. Until they arrive:

- Use these placeholder one-liners, written in the site's existing voice, and mark them clearly in a code comment as drafts to swap out later:
  - Tangerine — "Bright, zippy citrus that means business. Fresh-peeled and wide awake."
  - Beautiful — "Soft, warm, and quietly sure of itself. Smells like your best day."
  - Bliss — "Calm, easy, in no hurry at all. The bar equivalent of a long exhale."
  - Orange Blast — "Big, bold citrus with its foot on the gas. Not here to be subtle."
- Don't invent or fake a product photo for any of them. Use a plain placeholder (a color block, soap-bar silhouette, or "photo coming soon" treatment matching the site's style) at `assets/soaps/tangerine.jpg`, `assets/soaps/beautiful.jpg`, `assets/soaps/bliss.jpg`, and `assets/soaps/orange-blast.jpg` respectively, so real photos can drop into those exact paths later with no code changes. Alt text should follow the existing pattern (e.g. "Tangerine soap bar").
- Keep the same card structure the old scents used (name, one-line description, image, CTA) — see §5 for what the CTA should say for now.

## 3. Remove shea butter from the formula — everywhere

Every bar going forward is coconut oil only, no shea butter. Search the whole site for "shea butter"; known instances include:

- Home front matter `meta-description` — "…Coconut oil + shea butter, essential-oil scented…"
- Home hero bullet list — "Coconut oil + shea butter"
- Home, "Five bars, one tiny soap operation" — "Same gentle base every time: coconut oil and shea butter."
- Home, "Yes, there's lye. No, it's not in your bar." — "Every bar is coconut oil and shea butter, turned into soap with lye…"
- Sitewide footer (all four pages) — "Coconut oil, shea butter, and a serious essential-oil habit."
- `shop.html` intro — "Five scents, one gentle coconut oil and shea butter base."
- `ingredients-allergens.html` front matter `meta-description` — "…coconut oil, shea butter, lye, and essential oils…"
- `ingredients-allergens.html`, "One base. Five scents." section — "coconut oil and shea butter, turned into soap with lye (sodium hydroxide)…"
- `ingredients-allergens.html` FAQ, "Is there still lye in the finished soap?" — "…reacts completely with the coconut oil and shea butter during saponification…"
- `ingredients-allergens.html` FAQ, "What is the soap made of?" — "Coconut oil and shea butter, saponified with lye…"

In each case, drop "and shea butter" / "shea butter, " and adjust grammar so it reads cleanly (e.g., "coconut oil, turned into soap with lye").

## 4. Every "five" needs to become "four"

The scent count is dropping from five to four. Known instances:

- Home `meta-og:description` / `meta-twitter:description` — "Five fruity little handmade soaps…"
- Home intro paragraph — "Five fruity little soaps, made by hand the slow way…"
- Home section heading — "Five bars, one tiny soap operation"
- `shop.html` `meta-description` / `og` / `twitter` — "Five handmade essential-oil soaps: Mango Madness, Cherry Blossom, Apple Fantasy, Perfect Patchouli, and Eat Me." → replace with the new four names plus the natural-essential-oil framing
- `shop.html` intro — "Five scents, one gentle coconut oil and shea butter base."
- `ingredients-allergens.html` heading — "One base. Five scents. That's the whole trick."
- `ingredients-allergens.html` FAQ, "How much does a bar cost?" — "…Mix and match any of the five scents."

Leave "3 for $10" / "Pick your three" alone — that's the bundle deal, unrelated to scent count.

## 5. Don't let the site imply anything is ready to order yet

The client was clear that the bars she currently has on hand aren't good enough to sell (made for practice/experience), new pictures are still a few days out, and she won't have sellable stock until roughly **four weeks from now — the week of August 3, 2026**. So the new four-scent lineup shouldn't read as instantly orderable the way the old one did.

This part isn't a direct quote from the client — it's the sensible way to reflect what she said, so adjust freely:

- Add a short banner/note near the top of `index.html` and `shop.html`, something like: "New lineup on the way — Tangerine, Beautiful, Bliss, and Orange Blast, made with 100% natural essential oils. Real photos coming soon; ready to order starting the week of August 3, 2026."
- On the four new scent cards specifically (on `shop.html`), swap the "Grab this bar" mailto CTA for something that doesn't promise immediate pickup — e.g. "Get on the list," mailto subject `Interest: Tangerine` (matching the site's existing URL-encoded mailto pattern) instead of `Soap order: Tangerine`.
- The homepage's "Meet this bar →" links can stay as-is; they just navigate to `shop.html` rather than placing an order.
- Structure this so that once real photos exist and the client gives the go-ahead, swapping in photos and flipping "Get on the list" back to "Grab this bar" / `Soap order: [scent]` is the only remaining step.

## 6. Metadata pass

Beyond §3/§4, do one more pass on every page's front matter (`meta-description`, `meta-og:description`, `meta-og:title`, `meta-twitter:description`, `meta-twitter:title`) to confirm none of it mentions a retired scent name or shea butter, and that any scent count says four.

## 7. Before calling this done, check:

- [ ] "Mango Madness," "Cherry Blossom," "Apple Fantasy," "Perfect Patchouli," and "Eat Me" appear nowhere — including metadata, alt text, and mailto subject lines.
- [ ] "Shea butter" appears nowhere, including metadata.
- [ ] No leftover "five" where it refers to scent count.
- [ ] Tangerine, Beautiful, Bliss, and Orange Blast all appear consistently on both `index.html` and `shop.html`.
- [ ] Every new scent has an image at the `assets/soaps/[slug].jpg` convention, even if it's a placeholder for now.
- [ ] `request.html` — if the order form has a hardcoded scent checklist/dropdown anywhere in the actual markup (it rendered as a free-text field on inspection, but double-check the real source), update it to the new four scents too.
- [ ] Pricing, pickup policy, and contact info are untouched.
- [ ] Every placeholder (copy or image) is flagged clearly enough that the client can find and replace it in one pass.

## Open items for the client to confirm

- Final one-line descriptions for the four new scents (drafts above are placeholders).
- Real product photos, once ready.
- Exact phrasing of "100% natural essential oils" — confirm that's the claim she wants, word for word.
- Whether the "coming soon" treatment in §5 matches what she wants, or whether she'd rather keep this update off the live site entirely until it's fully ready.

*(Unrelated to the client's requested changes, but noticed in passing: the canonical/`og:url` front matter on every page still says `yourdomain.com` — a placeholder domain that was probably never swapped for the real one. Worth a look at some point, not blocking for this revision.)*
