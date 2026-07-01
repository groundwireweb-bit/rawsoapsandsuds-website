# Raw Soaps and Suds — Redesign: "Wash Day at the Roadside Soap Stand"

## The subject, honestly
A one-woman handmade-soap operation. Jelisha makes five small-batch bars in
Johnson County, Texas, out of coconut oil + shea butter, scents them with
essential oils, and sells them by local pickup — no cart, no checkout, you just
holler at her. The scents are fruity and cheeky (Mango Madness, Cherry Blossom,
Apple Fantasy, Perfect Patchouli, and the winking **Eat Me**).

## The concept
A **roadside Texas soap stand crossed with a vintage fruit-crate label.** Bright,
juicy, hand-printed, a little wonky — like a hand-stamped soap wrapper you'd want
to peel off and keep. The personality comes from what the thing actually is:
**suds** (the site's other half of its own name) and **fruit** (the scents).

Two anchors forced together (so it's not a "fun startup" template):
1. **Vintage citrus/fruit-crate label art** — chunky poster type, flat printed
   inks, bold outlines, a stamped-sticker feel. (Outside software.)
2. **Actual soap suds** — clusters of bubbles as the connective tissue.

## The signature move
**Suds.** A recurring soap-bubble motif is the thing this site is remembered by:
- bubbles drift up and pop into place in the hero (the one orchestrated motion),
- bubble clusters sit between sections instead of plain rules,
- the thing people touch first — scent cards — give a little bubble "pop" on hover.
Everything else (type, palette, sticker cards) is the quiet, disciplined system
that lets the suds be the loud part.

## Token system

### Color — "Suds & Citrus" (a considered base + one signature pop + fruit tints)
| token | hex | role / why |
|-------|-----|-----------|
| `--paper`   | `#EDEFFA` | pale periwinkle-white bg — fresh, nods to the Texas bluebonnet heritage without being the old rustic blue |
| `--ink`     | `#20223F` | deep indigo, near-navy — all body text & the hard "printed" outlines/shadows (never pure black) |
| `--blue`    | `#3B4CC0` | bright bluebonnet cobalt — primary structure, links, one button style |
| `--mango`   | `#FF7A2F` | **the signature accent** — juicy tangerine (Mango Madness). Big fills, the primary CTA. Dark ink text on it (deliberately, not white). |
| `--cherry`  | `#EA4E86` | berry pink — secondary pop / Cherry Blossom / cheeky bits, used sparingly |
| `--leaf`    | `#2FA36B` | fresh green — natural-ingredients / Apple / used sparingly |
| `--sun`     | `#FFC53D` | warm yellow — bubbles & highlights only |

Per-scent accent (content-justified variety, not a random pile): Mango=mango,
Cherry Blossom=cherry, Apple Fantasy=leaf, Perfect Patchouli=blue, Eat Me=sun.
Contrast: ink-on-paper and white-on-blue pass AA comfortably; mango/cherry/leaf
are only ever used as large fills with **ink** text on top, or as decoration —
never small colored text on the light bg.

### Type
- **Display: Shrikhand** (Google Fonts) — a juicy, high-contrast poster serif with
  real character. Used *with restraint*: wordmark, hero, section titles, scent
  names, the big price. Reads like a fruit-label; unmistakable and not a default.
- **Body: Karla** (Google Fonts) — clean, friendly, extremely readable humanist
  sans. Carries all running text, labels, buttons, form fields so the personality
  never costs usability.
- Scale uses real jumps (≥1.25×), not one ratio everywhere.

### Layout — controlled grid-breaking
Underlying: a centered max-width column with generous, *varied* section rhythm.
On top of it, a "hand-applied sticker" language: chunky elements sit on a **hard,
offset ink shadow** (`--shadow-hard: 5px 5px 0 var(--ink)`, no blur; larger for
big stickers) with a **thick ink outline**
and a **slight rotation** (±1–2°) so they read as stuck-on labels, not boxes.
Straighten-on-hover makes them feel tactile. Bubbles overlap section edges.

Hero sketch (sentence + wireframe): *big stamped wordmark, a cheeky one-liner, two
chunky sticker buttons, an oversized "star bar" sticker tilted to one side, and
soap bubbles drifting up across the whole thing.*
```
┌───────────────────────────────────────────────┐
│  ✺  ✺        ° bubbles drifting up °      ✺     │
│        RAW SOAPS & SUDS   (stamped, big)       │
│     "Fussy little soap. Made by hand,          │
│         sold by holler."                       │
│     [ Meet the bars ]  [ Holler at Jelisha ]   │
│                            ╭─────────╮ (tilted  │
│      ✺    ° °              │  ~bar~  │  sticker) │
│                           ╰─────────╯           │
└───────────────────────────────────────────────┘
```

### Motion
One orchestrated moment: **hero load-in** — bubbles rise + scale/fade in on a
stagger, wordmark drops in, buttons settle. Elsewhere, only tactile hovers
(buttons press into their shadow; cards straighten + pop a bubble). All gated by
`prefers-reduced-motion: reduce` → everything renders in final state, no motion.

### Iconography / illustration
- Recurring **bubble** motif = inline SVG circle clusters (custom).
- Per-scent = the existing **OpenMoji** fruit glyphs (mango, blossom, apple, herb,
  savoring face) — open-source (CC BY-SA 4.0), genuinely playful, already on-subject.
- Brand mark = the existing bluebonnet **maker's stamp**, now presented as a tilted
  hand-stamped sticker (fits "handmade/stamped" perfectly).

## Voice
Warm, dry, a little cheeky — Jelisha at a farmers' market, not a startup. Cheeky
sits *next to* clear instructions, never instead of them. Consistent everywhere
(pricing, 404, form errors), e.g. buttons say "Holler at Jelisha" → confirmation
says "Hollered." Nav gets personality: **The Bars**, **What's In 'Em**, **Order**.

## Self-critique (would I ship this for any playful brief?)
- *First palette pass* was blue + one orange — fine, but generic "bold pairing."
  Revised: kept mango as the single signature pop but let the **five scents carry
  five fruit tints**, which is specific to *this* product (five real scents), not
  decoration. That's the difference between "playful colors" and "these soaps."
- *First type pass* reached for a rounded friendly sans (Fredoka-ish) = the exact
  playful-default trap. Revised to **Shrikhand**, a juicy label serif — specific to
  the fruit-crate/soap-wrapper concept, not "generic fun."
- *First motion idea* was confetti/wiggle everywhere = noise. Revised to a single
  **suds load-in** + tactile hovers, tied to the actual product (suds).
- Checked against current AI defaults: not cream+serif+terracotta (periwinkle base,
  poster serif, no terracotta), not near-black+neon, not newspaper hairline. The
  hard-shadow "sticker" language is doing specific work (hand-printed label), not
  imported as a trend.

## Hard constraints preserved (don't break)
- FormSubmit order form (`action`, hidden `_subject`/`_template`/`_captcha`/
  honeypot, field `name`s) stays intact.
- `mailto:`/`tel:` links + `jelishayork439@gmail.com` unchanged.
- Scent photo drop-in (`assets/soaps/<slug>.jpg` + `onerror` → OpenMoji) unchanged.
- Nav-toggle JS, FAQ `<details>` accordion JS, active-nav JS preserved.
- SEO: canonical/OG/Twitter + JSON-LD (LocalBusiness, ItemList, FAQPage) kept,
  copy refreshed to match new voice.
