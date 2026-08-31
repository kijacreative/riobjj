# Mat Pass → Elementor

The live page is a React app compiled in the browser by Babel. None of that can
run inside Elementor, so this folder is a **plain HTML/CSS/JS rebuild** of the
same page, cut into blocks you paste one at a time.

No React, no Babel, no design-system bundle, no build step. The only external
requests are Google Fonts, the Vimeo hero, YouTube (coach videos) and Leaflet
(map).

Verified against the original at 1280px: total page height **7443px in both**,
with 10 of the 11 blocks pixel-identical and the 11th within 1px.

---

## 1. Upload the images

Everything in `assets/` goes to one folder on your site — Media Library, or
straight to something like `/wp-content/uploads/rio/`. Keep the filenames.

## 2. Stamp your URL into the blocks

Every image path is written as `{{ASSETS}}/filename`. Replace that token with
the folder URL from step 1:

```bash
python3 set-asset-base.py https://yoursite.com/wp-content/uploads/rio
```

That writes ready-to-paste copies into `dist/` and never touches the originals,
so you can re-run it whenever the URL changes. (A find-and-replace on
`{{ASSETS}}` does the same thing by hand.)

## 3. Set the Elementor container up

For each block: add a **Container**, then set

| Setting | Value |
|---|---|
| Content width | **Full width** |
| Width | 100% |
| Padding | **0** |
| Gap | 0 |

The blocks bring their own max-width (`.rjj-wrap`, 1140px) and their own
vertical padding, so any container padding gets added on top and throws the
rhythm out.

Then drop an **HTML widget** inside and paste the block.

## 4. Paste in this order

| # | File | What it is |
|---|---|---|
| 00 | `00-global.html` | **Paste once, first.** Fonts, tokens, shared styles. Nothing else renders correctly without it. |
| 01 | `01-hero.html` | Header, Vimeo background video, headline, $25 offer card, proof strip |
| 02 | `02-objections.html` | "You don't need to be ready" — 3 cards |
| 03 | `03-benefits.html` | 4 icons |
| 04 | `04-first-class.html` | Minute-by-minute timeline |
| 05 | `05-voices.html` | 3 testimonials |
| 06 | `06-coaches.html` | Coaches + roster + video modal |
| 07 | `07-schedule.html` | Adult schedule table |
| 08 | `08-faq.html` | Accordion |
| 09 | `09-book.html` | Booking form + map |
| 10 | `10-footer.html` | Footer |
| 11 | `11-sticky-bar.html` | Mobile CTA bar — **paste last** |

Blocks 01–11 are independent. Reorder, delete or interleave native Elementor
widgets freely; each carries its own CSS and JS.

---

## Before you paste anything

Open `preview.html` in a browser to see the assembled page with local images.
Rebuild it any time with `python3 make-preview.py`.

## Things worth knowing

**Scripts and iframes often don't run in the Elementor editor.** The accordion,
video modal, map and hero video may all look dead in the builder and be fine on
the real page. Always check with *Preview Changes*, not the editor canvas.

**Everything is namespaced.** Classes are `rjj-*`, CSS variables are `--rjj-*`,
and all of it is scoped under `.rjj`. It can't leak into your theme, and your
theme is unlikely to leak in.

The element resets deliberately use `:where()`, which has zero specificity, so
component styles — and any override you add in Elementor — always win. If you
ever need to beat a stubborn theme rule, prefix your selector with `.rjj`
(e.g. `.rjj .rjj-hero__h1`) rather than reaching for `!important`.

**The CTAs link to `#rjj-book`**, which is the ID on block 09. If you drop that
block, repoint the hero button and the sticky bar.

**The sticky bar reserves its own space** with `body:has(.rjj-sticky)` at
≤640px. If your theme already pads the bottom on mobile, you may want to drop
that rule.

**The booking form is a mockup**, exactly as it was in the design — it doesn't
submit anywhere. In `09-book.html` it sits between two marker comments:

```html
<!-- ▼▼ REPLACE FROM HERE with Elementor Forms or the Wodify embed ▼▼ -->
```

Swap that out for Elementor Forms or the real Wodify embed. The surrounding card
styling stays.

**Fonts** load from Google Fonts in block 00 (Jost + Lato). If you'd rather
serve them locally or through Elementor's font settings, delete the two `<link>`
tags — the CSS variables already fall back to Century Gothic / Futura and
Helvetica.

**Leaflet loads from unpkg** and is guarded so it only ever loads once. If you
run a JS-optimisation plugin that defers or combines scripts, exclude this page
or the map may not initialise.

**The two `.webp` coach photos** (Stephen Hall, Nick Reding) only existed as
base64 inside the design project's sidecar file. They've been extracted to real
image files here.
