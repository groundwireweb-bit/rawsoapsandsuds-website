# The Anti-Slop Design Directive
*A complete system prompt for building a website that doesn't read as AI-generated*

> **How to use this:** Paste this whole document into the system prompt, project instructions, or "design system" file of whatever you're building with (Claude Code, Claude Design, Cursor, v0, Lovable, or your own head). It also works as a personal pre-ship checklist if you're designing by hand. Section 12 has specifics if you're building with an AI coding tool — most now default to shadcn/ui + Tailwind, which has its own well-known sameness problem. Section 13 is a standalone audit you can run on a finished page even if you skip everything else.

---

## 1. Why Sites End Up Generic (Read This First)

Generic output isn't one bad decision — it's dozens of *undecided* ones. Every time a choice gets made by "whatever the framework or library defaults to" instead of a deliberate call, the result drifts one degree closer to every other AI-built site. These tools are trained on an enormous pile of existing websites, so their unprompted default is, almost by definition, close to the statistical center of the whole web — and the center of the whole web has no point of view, because it belongs to no one in particular.

The fix isn't a single trick or a banned-word list (though this document has one, in section 3). It's treating every layer below — palette, type, layout, motion, copy, component choice — as a decision that has to be justified by *this specific brief*, not inherited from the nearest template.

**One more layer of this trap, worth naming up front:** the reaction against slop has itself started to calcify into new defaults. A warm cream background with a high-contrast serif and a terracotta accent was a genuine departure from SaaS-purple a couple of years ago; it now shows up often enough to be its own tell. Same with a near-black background carrying a single acid-green or vermilion accent, an oversized italic serif hero headline, and broadsheet-style layouts with hairline rules and zero border-radius. All four are legitimate choices for the right brief. None of them are a substitute for actually thinking about *this* brief. If you're reaching for one of these because it feels like "the sophisticated alternative to generic," notice that you're still defaulting — just to a newer default. The test is always the same: can the choice be justified from the subject in front of you, or was it imported because it's what "good AI-avoiding design" currently looks like?

---

## 2. The Anchoring Technique (Do This Before Touching Layout)

The average of the whole web isn't a website with a wrong answer in it — it's a website with no point of view in it. Getting away from average starts before any pixel is placed, code is written, or component is chosen.

1. **Name the subject, audience, and the page's one job**, in a sentence, even if the brief didn't specify it. Distinctive choices come from the subject's own world — its materials, instruments, vernacular — not from "clean and modern," which isn't a point of view, it's the absence of one.
2. **Pick two real reference points and force them together.** A single reference tends to get imitated too literally — the result reads as a copy of that one thing. Two references, combined, require actual synthesis, because nothing that already exists is both of those things at once. For a technical product, that might mean pairing the information density of a specific transit map with the tactile, physical color language of a piece of analog hardware. The exact pairing matters less than the discipline of using two anchors instead of zero or one — and at least one anchor should come from outside software: a magazine, a building, a film title sequence, packaging, a specific decade of graphic design. If every reference in the pile is another SaaS landing page, expect another SaaS landing page as the output.
3. **Write a compact token system before writing any code:**
   - *Color* — 4–6 named hex values with a one-line reason for each, not just "primary / secondary / gray-100 through gray-900."
   - *Type* — faces for 2–3 roles: a characterful display face used with restraint, a complementary body face chosen for actual readability, and optionally a utility or mono face for data, labels, or captions.
   - *Layout* — a one-paragraph description of the structural idea plus a rough box-sketch or ASCII wireframe, before any real markup exists.
   - *Signature* — the one element this page should be remembered by: a specific interaction, a typographic move, a layout quirk that embodies the brief. Spend the boldness there and keep everything around it disciplined; a page that takes one real risk reads as more confident than one that takes five timid ones.
4. **Critique the plan before building anything.** For each part of the token system, ask: would this exact answer come out for a differently-branded but similarly-shaped brief? If yes, it's still a default — revise it and note what changed and why. Only start writing markup once the plan itself feels specific to this brief.

---

## 3. The Instant Tells — What Reads as "AI Made This" on Sight

If a page has three or more of these, it reads as generic no matter how well any single piece is executed. Treat this as a blocklist, not a style guide.

**Hero & background**
- **Radial gradient "blobs" or "orbs"** (especially purple→blue or purple→pink) floating behind hero text, with no relationship to the content.
- **A pill-shaped "eyebrow" badge** above the headline, often with a sparkle emoji, reading something like "✨ New" or "🚀 Introducing" — and worse, the same tiny uppercase tracked label repeated above *every* section heading down the page, turning the whole layout into scaffolding.
- **Perfectly centered hero-in-a-box:** headline, subheadline, two buttons (one filled, one outline), dead center, every time.
- **An oversized italic serif as the primary headline** — a distinctive move not long ago, common enough now to be its own default. Set it roman, or reach for a non-serif display, unless an editorial register genuinely calls for it.
- **A grayscale "Trusted by" logo strip** immediately under the hero.

**Layout & components**
- **Cards nested inside cards inside cards** — four or five layers deep, each with its own padding and shadow, until the page is mostly container.
- **The same hero → stat-strip → three-feature-grid template** repeated section after section with only the copy and accent color changed.
- **A rounded-square icon sitting above a bold title and two lines of gray description**, repeated three, six, or nine times — this exact shape is the first thing nearly every generator reaches for. If the icon container is visually larger than the heading it introduces, that's the tell in miniature: the decoration outweighs the message.
- **Bento grids** applied to content with no actual grid relationship, because the pattern is trending rather than earned.
- **Numbered 3-step "how it works"** with circles and a connecting line — legitimate *only* when the content is a real, ordered sequence. If the three things could be reordered without losing meaning, they're not a process, they're a list wearing a process costume.
- **Three-tier pricing** with the middle card scaled up 5% and a "Most Popular" ribbon.
- **An FAQ accordion bolted on at the bottom** as an afterthought, and a four-to-five-column mega-footer with generic categories (Product / Company / Resources / Legal) plus a "Subscribe to our newsletter" box.

**Visual treatment**
- **One border-radius value applied to everything** — radius creeping past ~16px on cards and sections rounds the whole page into the same soft blob. Save true pill/full-round shapes for tags, chips, and buttons; let structural containers stay tighter.
- **Glassmorphism** (frosted, blurred translucent panels) used as decoration rather than to solve an actual layering or legibility problem.
- **Gradient-filled headline text**, clipped to the type.
- **Identical low-opacity drop shadows** on every card at the same blur radius.
- **Repeating diagonal gradient stripes** as background surface texture — a specific, recognizable generated-UI signature at this point. Reach for a real texture or leave the surface plain.
- **Default-settings icons** straight from Lucide/Heroicons at default stroke width, dropped in as decoration rather than communication.
- **A near-black background with a single neon accent** as the reflexive signal for "advanced/technical" — now about as overused as the purple gradient it was originally a reaction to.
- **Hand-coded SVG mascots or scenes** that read as amateur doodles rather than charm. If real illustration or photography isn't available, shipping no illustration beats shipping a sketchy placeholder.

**Typography**
- **Inter, Roboto, Poppins, Manrope, Plus Jakarta Sans, or Space Grotesk**, chosen because they shipped in the starter template, not because anyone made a call.
- **One font, one weight, for everything** — headings, body, labels, and buttons all in the same voice, which is really no voice.
- **Font sizes bunched too close together** with no real hierarchy; if adjacent type steps aren't at least a 1.25× ratio apart, the "hierarchy" is cosmetic.
- **All-caps used reflexively** to mark anything small as a "label," whether or not it fits the voice.

**Motion**
- **Every section fading up 20px on scroll**, same duration, same easing, applied uniformly — the single most common tell, because it's the literal default behavior of the most popular scroll-animation libraries.
- **Every hover state identical:** scale to 1.02, add a shadow, nothing else.
- **Parallax used as a default "premium" signal** rather than because it serves the content.

**Copy & microcopy**
- **The vocabulary:** unlock, elevate, seamless, effortless, supercharge, revolutionize, empower, game-changing, cutting-edge, frictionless, "take your X to the next level," "in today's fast-paced [digital] world," "built for the modern Y," "the future of X."
- **The three-word imperative headline formula:** "Build. Ship. Scale."
- **"It's not just X — it's Y"** and its close relatives, used as a crutch rather than because the contrast is real.
- **Redundant micro-copy:** a label, a sublabel, helper text, and a hint, all saying the same thing in slightly different words. Say it once, well, and stop.

---

## 4. Typography

- Choose one typeface pairing on purpose and be able to state the reason in a sentence. A few registers worth researching (not copying wholesale — naming these too many times just makes them the next default): an editorial serif like Freight Display or Tiempos for authority; a technical mono like JetBrains Mono or Berkeley Mono for developer tools; a warm contemporary face like Fraunces or Bricolage Grotesque for approachability; a precise, restrained grotesque like Söhne or Neue Montreal for systematic, utility-driven products.
- Notice how real products differentiate rather than copying their exact choice: a precision-focused product might commission or heavily modify a grotesque, a premium product might pair a bespoke serif headline with a clean sans body for contrast, a platform-scale product might commission its own typeface entirely. The specific choice matters less than the fact that someone made one on purpose.
- Don't default to sans-serif for everything — a well-set serif body can be more distinctive and just as readable.
- Build a type scale with intentional jumps, not one ratio mechanically applied at every step; some jumps should be dramatic, some subtle, based on what actually needs emphasis. Keep at least 1.25× between adjacent steps or the hierarchy reads as decorative rather than functional.
- Vary weight and alignment across the page on purpose — not everything needs to be centered, and not every heading needs to be bold.
- Control line length for body copy, roughly 60–75 characters per line. This alone reads as more considered than most AI-generated pages, which routinely ignore measure.
- Hand-adjust letter-spacing and kerning on large display type; default browser kerning above ~72px often looks loose and unconsidered.
- Mix weights within a single headline for emphasis instead of bolding the whole line uniformly.

---

## 5. Color

- Build a palette with a point of view: a primary that isn't the nearest framework default, neutrals that are warm or cool *on purpose* rather than pure gray, and one accent used sparingly and with intent. Name 4–6 hex values and be able to justify each.
- Be suspicious of indigo/violet-to-blue as a default primary — it became "the tech-startup color" largely because it ships as the default in popular UI kits, not because it fits most of the brands using it.
- Be equally suspicious of near-black-plus-neon-accent as the default "we're technical/advanced" signal, and of cream-plus-terracotta as the default "we're the tasteful alternative" signal — both are covered in section 1, and both are now common enough to be recognizable in their own right.
- Use color functionally — for hierarchy, state, and emphasis — not purely as decoration. If removing a color wouldn't change how someone reads the page, it isn't doing design work.
- Check real contrast ratios rather than eyeballing it on one monitor. This is an accessibility requirement, and, done properly, it's also a craft signal: confident, high-contrast color rarely looks generic. Watch specifically for gray text sitting on colored backgrounds — a very common low-contrast combination.
- Let one color choice feel a little uncomfortable or unexpected. A palette with zero risk in it usually reads as having no point of view at all.

---

## 6. Layout & Composition

- Break symmetry somewhere on purpose. A page where every section is centered and balanced starts to feel templated within the first two scrolls.
- Vary rhythm between sections — padding, density, and pacing shouldn't be identical top to bottom. Let some sections breathe and others feel dense; uniform spacing everywhere is itself a tell.
- Let something break the container: full-bleed imagery, oversized type that crosses a grid line, an element overlapping a section boundary. Small, intentional violations of the grid read as confidence rather than "template being filled in."
- Use whitespace as an active compositional tool, not a byproduct of "add padding until it resembles other sites."
- Avoid nesting cards inside cards inside sections inside containers — every layer of nesting is a layer of visual noise.
- Let the actual content shape the structure, rather than pouring whatever exists into a generic three-column or bento template regardless of fit. Sketch the layout in prose or a rough box diagram before writing markup, and check it against the brief the same way you'd check the color and type choices.

---

## 7. Imagery, Icons & Illustration

- Avoid stock-photo clichés: diverse groups smiling at laptops, handshake close-ups, people pointing at whiteboards. These read as stock within half a second and undercut everything built around them.
- Two AI-illustration styles have themselves become as recognizable as stock photography: flat "blob-people" illustrations with disproportionate limbs, and glossy 3D gradient-mesh renders floating on a dark background. Avoid both unless there's a specific reason they fit the brief.
- If using photography, make it specific to the actual product, team, or place. Specificity is what makes an image feel real rather than decorative filler.
- Customize icons rather than dropping in a default set at default settings — adjust stroke width, mix in a custom icon for key moments, or ask whether typography alone communicates the point better than an icon would. Keep icon containers no larger than the content they introduce; an oversized icon box above small text is a visible AI tell.
- If real illustration or photography isn't available, it's usually better to ship no illustration than a rough, hand-coded SVG scene that reads as an amateur placeholder.
- For every image and icon on the page, ask: does this communicate something, or is it filling a section that felt empty without it? Cut the ones filling space.

---

## 8. Motion & Interaction

- Motion should clarify state or direct attention, not decorate. Before adding an animation, name what it communicates — "this reveals that these two panels are related" — and cut it if there's no answer.
- Don't apply one scroll-triggered fade-up to every section on the page. If a motion pattern repeats, vary duration, easing, distance, or trigger so it doesn't read as one library default applied uniformly everywhere.
- One well-orchestrated moment — a page-load sequence with staggered reveals, for instance — usually lands harder than the same small effect scattered across a dozen elements.
- Hover and focus states should reflect the specific interaction and the brand's personality, not one scale-plus-shadow treatment reused on every clickable element.
- Prefer CSS for motion where CSS can do the job; reach for a JS animation library only when the interaction genuinely needs it. The constraint of "just CSS" often produces a more considered result than a library's default easing curve.
- Respect `prefers-reduced-motion`. Handling it properly is both an accessibility requirement and quiet proof of care.
- Consider stillness. A page confident enough to hold a static, well-composed moment — rather than animating everything into view — often reads as more premium, not less.

---

## 9. Copywriting & Voice

**Marketing copy**
- Purge the AI-slop vocabulary list from section 3. These phrases are so overrepresented in AI-generated copy that their presence alone is often enough to identify a page as templated.
- Be concrete. Replace vague benefit statements ("helps teams work better together") with specific claims, mechanisms, or numbers that couldn't be copy-pasted onto a competitor's site unchanged.
- Vary sentence length and rhythm on purpose. A run of uniform 8–14 word declarative sentences back to back is one of the more reliable tells of AI-written copy — read a paragraph aloud and listen for a metronome.
- Write the headline last, after everything else, and test it with one question: could a direct competitor use this exact sentence with only the logo swapped? If yes, it isn't saying anything specific yet.

**Interface / microcopy**
- Write from the end user's side of the screen. Name things by what people control and recognize, never by how the system is built underneath — someone manages *notifications*, not *webhook config*.
- Default to active voice, and keep an action's name consistent through the whole flow: a button that says "Publish" should produce a confirmation that says "Published," not "Submitted successfully."
- Don't repeat the same message across a label, a sublabel, helper text, and a hint. Say it once, in the right place, and stop.
- Treat empty and error states as design surface, not an afterthought. An error explains what happened and how to fix it, without apologizing and without vagueness. An empty state is an invitation to act, not just a gray icon and "No data."
- Keep the register conversational and specific to the brand — plain verbs, sentence case, no filler — and let every element do exactly one job: a label labels, an example demonstrates, and nothing does double duty.

---

## 10. Standard Components — Rethink Before Reusing

Every "expected" section is a template someone else's product needed, not a law. For each one, ask what *this* product actually requires before reaching for the default:

- **Features** — is a 3–9 icon-card grid really the clearest way to show this, or would a single annotated screenshot, a short comparison, or a real embedded demo say more in less space?
- **Testimonials** — a real, specific quote with a concrete detail beats a generic "this changed our business!" plus a five-star row, every time. If there's no real testimonial yet, cutting the section is more honest than fabricating the feeling of social proof.
- **Pricing** — does the actual pricing logic call for three tiers with one artificially inflated as "most popular," or does it need something structured differently: usage-based, single-tier, a calculator?
- **How it works** — a numbered three-step diagram is one option, not the only one; a short annotated flow, a before/after, or a real walkthrough might fit better.
- **FAQ** — worth asking whether these are real, frequently-asked questions, or a list invented because the page "needed to have one."

---

## 11. Craft Details That Signal a Human Was Paying Attention

Cheap to do, disproportionately convincing, and routinely skipped by templates and AI defaults alike:

- A custom favicon and a designed OG/social-preview image, not framework defaults.
- Designed empty, error, and loading states — an opportunity to reinforce voice, not an afterthought.
- An actual, considered 404 page instead of a bare "Page not found."
- Real content in every state — no leftover "Lorem ipsum," no "[insert testimonial here]."
- Visible, well-designed keyboard focus states, not just mouse-hover polish.
- A spacing system applied with rhythm and variation, not uniformly-incremented default tokens used everywhere without exception.
- A mobile experience that reconsiders content priority for the smaller screen, rather than a desktop layout mechanically squeezed narrower.

---

## 12. If You're Building This With an AI Coding Tool, Read This

As of 2026, almost every AI coding tool — Claude Code, Cursor, v0, Lovable, Bolt — reaches for the same component foundation by default: shadcn/ui on top of Tailwind CSS. That's not a problem by itself; shadcn ships genuinely solid accessibility primitives and clean composition. The problem is that almost nobody edits its defaults before generating a full app, and a coding agent treats whatever's already sitting in the codebase as the pattern to keep repeating — so an unedited default on screen one quietly becomes the default on screen fifty.

Because shadcn is built entirely on CSS custom properties, the fix is fast and happens at the token layer, not by hand-editing individual components. A handful of variable changes cascades to every component at once; editing components one at a time never catches up to the next thing the agent generates.

- **Neutral color** — the default grays are themselves recognizable as "unedited shadcn." Pick a warmer or cooler neutral on purpose instead of the stock slate/zinc scale.
- **Radius** — the default sits right in the safe middle. Move off it deliberately: near-zero for a sharp, confident register, or something more generous for soft and approachable — and reserve a fully rounded pill shape specifically for tags and buttons, not the base radius for every card and container.
- **Font** — defaults to Inter or the system sans through the Tailwind config. Override the sans and display font variables with an actual pairing chosen for the brief, not whatever was already sitting in the starter.
- **Primary accent** — defaults to a muted indigo or gray-adjacent tone. Replace it with one saturated color that's actually yours, and resist the reflex to add a second accent for secondary actions; one confident accent reads better than two competing ones.

Do this before generating more than a screen or two, not after. An agent that has already produced ten screens off the default tokens will keep extending the default pattern; one that starts from edited tokens extends *those* instead. The same logic holds for whichever component system a given tool defaults to — the point isn't shadcn specifically, it's that the AI will standardize on whatever's already in the repo, so the repo needs to start from a decision, not a default.

---

## 13. 🔍 Pre-Ship Self-Audit

Run this on the finished page, literally, item by item:

- [ ] Could this hero be dropped onto a direct competitor's site with only the logo swapped? If yes, it isn't saying anything specific yet — rewrite it.
- [ ] Is there a gradient blob, orb, or mesh in a background "because that's what these sites have"? Remove it or give it an actual reason to exist.
- [ ] Count the scroll animations. Are they all the identical fade-up? Vary or cut them.
- [ ] Search the copy for the words in section 3. Rewrite every hit.
- [ ] Is every card the same radius, same shadow, same padding, with zero variation anywhere on the page?
- [ ] Is the typeface one of the six most common "default modern" web fonts, chosen without a reason you could say out loud?
- [ ] With the logo removed, would someone recognize this as belonging to this specific brand — or could it be any of a dozen competitors?
- [ ] Read the homepage copy aloud. Does it sound like a specific person wrote it, or a confident, generic narrator?
- [ ] Is there at least one deliberately asymmetric or off-template moment on the page?
- [ ] Are the empty, error, 404, and loading states designed, or default?
- [ ] Does the page have one genuine "signature" moment it will be remembered by, or is every section equally (un)memorable?

If more than two or three of these fail, the page is still running on defaults, not decisions.
