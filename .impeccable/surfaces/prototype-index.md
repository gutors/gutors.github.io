# prototype/index.html

## Scope and mode

One route: the portfolio prototype for Gustavo Schmid de Jesus, built as a
side-by-side alternative to the incumbent `index.html`. Mode: **Experience** —
the record itself is the artifact, and the interface recedes behind the figures.

Visitor: a recruiter or hiring manager screening several candidates, often on a
phone, who needs the track record and the contact path inside one screen.

Decided with the user: recruiters are the primary audience; the prototype lives
at its own route rather than replacing the live page; proof is the real
professional record plus one interactive craft moment (the figure↔footnote
pairing).

## Direction contract

**THESIS.** A career set as the technical report its systems came with: figures
in ruled rows, each one sourced by a live footnote, on a sheet of printed
engineering paper. It refuses the category's centred-headline-over-project-cards
arrangement and the "passionate developer" register that the incumbent page used.

**OWN-WORLD.** Warm off-white paper `#f8f7ea` under a real tiled ground texture;
near-black `#141514` ink; one deep blue `#1f3f8f` for footnote numerals, rules
and the pairing highlight; one red `#a21715` reserved for the rotated P95 stamp.
Saira Extra Condensed carries every figure, JetBrains Mono carries every label
and footnote, Faustina italic carries role titles only. Every edge is a hairline;
nothing is rounded, shadowed, or gradient-filled.

**STORY.** Within one screen the visitor understands that this engineer shipped
systems measured in money saved and latency removed at city scale, sees the five
roles and their dates in order, and can reach the email. Scrolling gives the work
behind each figure at the level of system and decision, then the public
repositories where the claims can be checked, then the stack, then the contact.

**FIRST VIEWPORT.** One 1280×720 sheet, measured to the approved comp. Round
portrait top left; name line in tracked caps beside it; rotated red
`SENIOR · 12 YRS` stamp top right. `US$ 800k` at enormous condensed scale
occupying the left half, its claim right-aligned beneath it. Three supporting
figures — 172, 80%, 70% — in a hairline-ruled column at 67% of the width, each
with its own footnote numeral. The career register below as five ruled rows,
employer in mono caps, role in Faustina italic, dotted leader, tabular dates flush
right. Four footnotes in two columns at the foot, email flush right. The primary
action is the email, and it is reachable from the same screen.

**FORM.** Position 2 of the grounded list; the composition the user locked after
seeing all three. `seed: 2700bdf1645da0b5`.

**FINISH.** unreviewed and undocumented is unfinished; this build ends with the
finish review, the verdict, DESIGN.md, and every shipping raster carrying its
provenance.

## Memorable moment

Hovering or focusing any figure lights its footnote — the source arrives exactly
where the claim is, which is the one thing a printed report cannot do. It is
keyboard reachable and announced, not decorative.

## Content provenance

Every figure, role, date and technology on this page comes from Gustavo's public
LinkedIn record or the incumbent site. Nothing is invented. The page's own footer
states that the figures are reported by the city health department and the dates
come from LinkedIn, so a reader can weigh them.

The portrait is the user's own `logo.png`, resized to 240×240 and kept as the
round seal the original already was. It is the only photograph of a person.

## Resolved with the user

- Portrait: included in the first viewport, opposite the stamp.
- Route: stays at `/prototype/`; the live `index.html` is untouched.
- Stamp: `SENIOR · 12 YRS`, replacing the draft's `P95`.

## Unresolved

Promoting the prototype means replacing `index.html` and bringing the old
`styles.css` / `script.js` along or deleting them, and the incumbent route's
assets (`logo.png` at 778KB) would become dead weight on the live site.
