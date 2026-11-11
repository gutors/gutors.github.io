# Design

<!-- impeccable:design-schema 1 -->

The visual system of the technical-record portfolio at `prototype/`. Written
from the built artifact, not from intentions.

## World

A printed engineering report. The page is one sheet of warm paper carrying
measured results, with monospaced annotations in the margins. It borrows the
authority of a spec sheet and the legibility of a broadsheet index, and refuses
both the centred-hero-and-cards portfolio and the "passionate developer" voice.

The world's discipline is **one truth per measure**: a figure is never decoration,
it always owns a rule, a unit, and a source. Anything that cannot name its source
does not get set in type.

## Colour

Four roles, each doing one job. Sampled from the approved comp.

| Token | Value | Role |
|---|---|---|
| `--paper` | `#f8f7ea` | The ground. Every surface not deliberately inverted. |
| `--paper-deep` | `#f2f0e0` | One step down, used only for the language selector's hover state. |
| `--band` | `rgba(223, 219, 196, 0.42)` | Every second section, starting with the record. Translucent on purpose: a solid tone would paint over the paper texture and the sheet would lose its material. |
| `--ink` | `#141514` | All primary type, all rules that carry structure. |
| `--ink-soft` | `#4a4a44` | Secondary type: captions, role titles, list body. |
| `--ink-faint` | `#6a6a65` | Metadata only: dates, stack lists, footnotes at rest. Never body copy. Darkened from `#73726e` so it clears 4.5:1 on the band, where the old value read 4.02. |
| `--rule` | `#c9c7bd` | Hairlines that divide without asserting. |
| `--rule-strong` | `#141514` | Section boundaries; the ink itself. |
| `--blue` | `#1f3f8f` | Footnote numerals, list markers, the lit pairing state, link hover. The only "interactive" colour. |
| `--red` | `#a21715` | The stamp and nothing else. |

The inverted close section uses `--ink` as ground with `--paper` as type, so the
page ends on the same paper it began on, reversed. This is the only place the
value relationship flips.

The page alternates two stocks of paper the whole way down. The summary sheet
above the fold is plain; the record is tinted; the method is plain again; the
evidence is tinted; the capabilities are plain; the close inverts to ink. No two
neighbouring sections share a ground, so a section can be found by its stock
before its heading is read. It is a **wash, not a panel**: because the tint is
translucent, the paper grain carries through and the alternation reads as one
sheet seen under changing light, not as cards stacked on a page.

Contrast: `--ink` on `--paper` reads 15.9:1. `--ink-soft` reads 8.4:1.
`--ink-faint` reads 4.7:1 and is therefore restricted to non-essential metadata.
`--blue` on `--paper` reads 8.9:1. All pass WCAG AA at every size used.

On the tint every tone is one step lower: `--ink` 15.3:1, `--ink-soft` 7.5:1,
`--blue` 8.1:1, and `--ink-faint` 4.5:1 — still AA, which is why the metadata
tone is the value it is. Both stocks are therefore safe for the same type, which
is what allows a section to change ground without changing its typography.

## Type

Three voices, each with a single job. Nothing overlaps.

- **Saira Extra Condensed 700** — figures and section headings. Chosen by
  measuring the comp: compressed width, black weight, cap height 128.7px on the
  lead figure. It is a condensed grotesque that holds its density at display
  scale without needing negative tracking, which is what lets `US$ 800k` carry a
  third of the page width.
- **JetBrains Mono 400/500** — every label, every date, every footnote, every
  caption. Monospace is used here as it is in real technical documentation: for
  things that are measured or indexed, never as a costume for "technical".
- **Faustina italic 500** — role titles in the register and nowhere else. The
  single serif voice marks the human record inside the machine typesetting.

Scale is set in `em` from one sheet-level unit: `1.171875cqw` on the measured
sheet, so the comp's proportions hold at any width. The stack below the sheet
uses `rem` with fluid `clamp()` steps.

Letter-spacing is wide only on uppercase labels (0.1–0.3em). Body copy and roles
sit at or near zero.

## Space and rhythm

The sheet is a measured composition: every region is placed as a percentage of a
1280×720 frame, transcribed from the approved comp. It does not reflow
proportionally — below 900px it stops being a measured sheet and becomes a
reading stack in the same voice.

Below the sheet, one rhythm throughout: sections separated by a `--rule-strong`
hairline, entries by `--rule`, with more space above a heading than below it.
Nothing is boxed. There are no cards anywhere on the page; the dividing rule is
the only container.

## Outline

One `h1`, on the identity line in the masthead, then `h2` per section and `h3`
for the items inside one. The headings are ordered the way the eye travels, not
the way the markup happened to grow: the name is the document's title, and every
block below it is a section of that document. Before this, the only `h1` sat on
"What I actually built", halfway down the page, so the outline opened with a
section and a screen reader reached the career list before anything named the
page.

## Motion

One authored moment: the figure↔footnote pairing. Hovering or focusing a figure
highlights its footnote numeral in solid blue with the source text lifting to
full ink. It is the page's one interaction, it carries meaning (this figure has a
source), and it is keyboard reachable with an accessible label that reads the
figure and its claim together.

There is no entrance animation. Content is visible at rest, always — a page that
hides itself until an observer fires is a page that fails in print, in capture,
and in search. Transitions are limited to `color` and `border-color` at 120–160ms.

## Component language

- **Rules, not cards.** Every separation inside a section is a 1px line. No
  borders on four sides, no floating panels, no shadows. A section may change
  its ground, but only edge to edge and only as a wash — the tint is never a box
  around content.
- **Kicker above a block.** A section inside the sheet opens with the same mono
  caps used by the career register, so the sheet reads as one document with one
  label grammar rather than a hero followed by a report. The figures above the
  fold carry one too: they were the only block on the page that arrived with no
  statement of what it was measuring.
- **Numeral-plus-source.** A figure and its footnote numeral are one object; the
  numeral is decorative to assistive tech and the claim lives in the label.
- **The register row.** Employer in mono caps, role in Faustina italic, a dotted
  leader at `radial-gradient` spacing, dates in tabular figures flush right. On
  narrow screens the same four parts restack into two lines rather than shrinking.
- **The stamp.** A rotated, slightly translucent outlined box reading
  `SENIOR · 12 YRS`. It is a `<p>` with a border, not an SVG and not an image,
  because it carries words that a reader must be able to select and a screen
  reader must be able to announce. The wording is the user's: the first draft said
  "P95", an engineering-honest percentile claim, but a recruiter has to parse it
  and does not. "Senior, twelve years" is the same fact at the same confidence, in
  the register the audience actually reads.

## Paper texture and the portrait

Two rasters ship, and each has one job.

`assets/plates/ground.png` — a clean sample of the comp's paper mirror-tiled to
1200×1200, applied at 55% opacity under a fixed layer. It carries the world's
material; without it the page reads as a flat swatch.

`assets/plates/portrait.png` — the headshot, resized to 240×240 and cropped round
in CSS. It is the only photograph of a person on the page, and it sits at the top
of the sheet opposite the stamp so the two seal-like objects balance the name line
between them. On a hiring page the face is not decoration: a recruiter decides
whether to keep reading partly on whether a human is behind the record. The navy
ground of the original photograph is left as it is; it reads as a second accent
and is close enough to `--blue` not to fight it.

## Do not

- Do not add shadows, rounded corners, or gradients. This world has none.
- Do not add a third raster. Two is the budget: paper and the person.
- Do not animate content into view.
- Do not set body copy in monospace at 15px on the long-form sections; the stack
  uses it for labels and metadata only.
- Do not introduce a second display face.
- Do not crop the portrait to a square or a rectangle; the circle is what makes it
  a seal rather than a profile widget.
