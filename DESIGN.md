# DESIGN.md — 12h.run Design System

> Dit document definieert de visuele taal en UX-principes van de 12h.run website.
> Gebruik dit als leidraad bij elk nieuw component of elke nieuwe sectie.

---

## Ontwerpfilosofie

12h.run voelt aan als een filmische, zelfverzekerde site. Geen visueel geschreeuw, geen overvolle secties. Elk element heeft een reden om er te zijn. De site ademt rust, maar straalt kwaliteit uit in elk detail.

**Drie kernprincipes:**

1. **Filmisch en ingetogen.** De ervaring van het event — ritme, rust, herhaling — weerspiegelt zich in de site. Genereuze witruimte, rustige beweging, geen sportmarketingclichés.
2. **Content-first.** Tekst, beeld en de route staan centraal. Navigatie en chrome treden terug.
3. **Eén accent.** Oranje (#f06939) is het enige accentkleur. Gebruik het spaarzaam — maximaal één of twee geaccentueerde elementen per sectie.

**Referentie-gevoel:** Merken als Arc'teryx, Rapha of Kinfolk — premium, rustig, iets technisch maar niet koel.

---

## Kleurenpalet

### Primaire tokens (CSS-variabelen in `globals.css`)

```css
--color-background: #111111    /* Hoofdachtergrond — true black voor OLED */
--color-foreground: #e9e9e7    /* Primaire tekst — warm off-white */
--color-accent:     #f06939    /* Accentkleur — oranje */
--color-muted:      #9d9d97    /* Secundaire tekst, placeholders */
--color-panel:      #171717    /* Verhoogd oppervlak (cards, panels) */
--color-line:       rgb(233 233 231 / 0.14)  /* Subtiele lijnen en randen */
```

### Gebruik

| Situatie | Kleur |
|----------|-------|
| Paginaachtergrond | `--color-background` (#111111) |
| Lopende tekst | `--color-foreground` (#e9e9e7) |
| Labels, meta, subtitels | `--color-muted` (#9d9d97) |
| Kaarten, panels, footer | `--color-panel` (#171717) |
| Interactieve elementen, accenten | `--color-accent` (#f06939) |
| Borders, dividers | `--color-line` |

### Regels

- Gebruik oranje **spaarzaam**: logo, animatie-dots, interactieve hover-states, één CTA per scherm.
- Gebruik nooit pure witte (#FFFFFF) tekst — gebruik `--color-foreground` (#e9e9e7) voor warmte.
- Geen gradients als achtergrond. Subtiele radiale overlays op de kaart zijn toegestaan als functioneel visueel element.
- Alle oppervlakken zijn donker — er is geen light mode.

---

## Typografie

### Fonts

| Font | CSS Var | Gebruik |
|------|---------|---------|
| **Benzin-Bold** | `--font-benzin` | Display headlines, slogans, grote koppen |
| **Inter** | `--font-inter` | Body tekst, labels, navigatie, alles overig |

Benzin-Bold is een lokaal gehost custom font (`public/fonts/Benzin-Bold.ttf`). Het wordt geladen als `next/font/local` in `layout.tsx`.

### Hiërarchie

```
Niveau         Font          Grootte    Gewicht    Tracking    Gebruik
──────────────────────────────────────────────────────────────────────────
display        Benzin        clamp      Bold       tight       Grote herokoppen ("12 uur lang.")
title          Inter         2xl–3xl    Semibold   tight       Sectiekoppen
body           Inter         base–lg    Regular    normal      Lopende tekst, beschrijvingen
meta / caption Inter         sm         Regular    wide        Datum, locatie, labels
nav            Inter         sm         Medium     wide        Navigatielinks
```

### Regels

- Display headlines in Benzin **altijd uppercase** via `.display-tight` utility of `font-[family-name:var(--font-benzin)] uppercase tracking-tight`.
- Maximaal 2 fontsizes per sectie/component.
- Titels niet langer dan 2 regels — breek logisch af of gebruik kortere copy.
- Gebruik `--color-muted` voor alles dat ondersteunend is (datums, locatie, kleine labels).
- Geen underlines voor links — gebruik kleur (accent) of opacity.

---

## Spacing & Layout

Gebaseerd op het Tailwind-grid. Gebruik veelvouden van 4px (Tailwind's standaard schaal).

### Container

De `.container-page` utility in `globals.css`:
- `max-width: 1440px`
- `margin: 0 auto`
- Side borders (`--color-line`) voor visuele kaderstructuur

### Horizontale padding

- Sectie-inhoud: `px-6` (24px) op mobiel, `px-12` (48px) op desktop
- Navigatie en footer: gelijke padding als sectie-inhoud

### Verticale ritme

- Ruimte tussen componenten binnen een sectie: `gap-4` tot `gap-8`
- Ruimte tussen secties: `py-20` tot `py-32`
- Nooit elementen direct tegen schermranden — alles ademt

### Grid overlay

De grid-overlay in `globals.css` (`96×96px`, 16% opacity) is decoratief en geeft de site textuur. Nooit verwijderen.

---

## Typografische Utilities (globals.css)

```css
.display-tight     /* Benzin-Bold, uppercase, tight tracking — voor herokoppen */
.container-page    /* Max-width container met side borders */
.soft-border       /* 1px rand met --color-line */
.event-shell       /* Card-styling: border + bg-panel + subtiele shadow */
.dot-divider       /* 4.5rem accent-dot met glow — voor sectiedividers */
```

---

## Componenten

### SiteHeader

```
Positie:         sticky top-0, z-index hoog
Achtergrond:     bg-background met backdrop-blur
Hoogte:          ~5rem (80px)
Border:          border-bottom (--color-line)
Inhoud:          Logo links | verborgen nav op mobile | datum + locatie | CTA button
```

- Logo: SVG image-link naar `/`
- CTA-button: "Interesse" → mailto-link via `interestMailto`
- Op mobile: datum/locatie verborgen, alleen logo en button
- Backdrop blur voor leesbaarheid over kaart/content

### ConceptSection (Hero)

```
Hoogte:          min-h-[calc(100svh-5rem)]
Achtergrond:     RouteMap (Leaflet, full-bleed)
Overlay:         radiale/lineaire gradient voor tekstleesbaarheid
Inhoud:          Reveal-geanimeerde heading + meta-tekst
```

- De kaart is decoratief — geen interactiviteit
- Heading: Benzin-Bold display, 2 regels, links uitgelijnd
- Meta-tekst (datum, locatie): klein, muted, onder de heading

### RouteMap

```
Type:            Client component ("use client")
Hoogte:          68vh
Filter:          grayscale + opacity 80%
Basemap:         CartoDB Dark Matter
Accentkleur:     --color-accent (#f06939) voor route-lijn
Markers:         Oranje start, zwart einde
```

- Lazy-loaded Leaflet (CDN) — geen npm installatie
- Parset `/route-12hrun.gpx` via fetch
- Alle interactiviteit uitgeschakeld (decoratief element)
- Faalt stil bij fout — kaart is niet kritiek voor content

### AnimatedDotSystem

```
Structuur:       12 dots in cirkel (30° per stap)
Animatie:        Opacity pulse + scale + glow — oneindige loop
Duur:            4.8s, staggered (0.18s delay per dot)
Kleur:           --color-accent (#f06939)
Modi:            compact (8–14px dots) of full (14–22px dots)
```

- Vertegenwoordigt de 12 ronden van het event
- Altijd voorzien van `aria-label` in het Nederlands

### Reveal

```
Animatie:        opacity 0→1 + y 28px→0
Trigger:         whileInView (met -12% margin)
Duur:            0.9s
Easing:          [0.22, 1, 0.36, 1] (custom bezier, zachte ease-out)
Configuratie:    delay prop voor gestapt verschijnen
```

- Wrap secties of componenten die scroll-triggered verschijnen
- Gebruik spaarzaam — niet elk element hoeft te animeren

### Button

```
Varianten:
  default    bg-accent (#f06939), witte tekst, glow-shadow
  outline    subtiele border, bg-tint, hover → accent
  ghost      transparant, lage opacity, hover → vol

Maten:
  sm         kleinste, xs tekst
  default    standaard, sm tekst
  lg         grootste, base tekst

Pressed state:   opacity 0.7 + scale 0.97
Disabled state:  opacity 0.5
Focus outline:   2px offset, zichtbaar
```

### SiteFooter

```
Achtergrond:     bg-panel (via .event-shell)
Inhoud:          Logo + beschrijving | AnimatedDotSystem | contactlink
Layout:          flex, responsive (kolom op mobile, rij op desktop)
```

---

## Animatie & Motion

### Principes

- Elke animatie heeft een functioneel doel — geen decoratie zonder reden
- Duur: 200–400ms voor UI-microinteracties, 600–900ms voor scroll-animaties
- Easing: `ease-out` voor verschijnen, `ease-in` voor verdwijnen
- Geen bounce-effecten, geen overdreven beweging
- Respecteer altijd `prefers-reduced-motion`

### Standaard animaties

```
Scroll-triggered content    Reveal (fade + slide up)     900ms    custom bezier
Dot-systeem pulse           Scale + opacity loop          4.8s     easeInOut
Button hover                Opacity / kleur               150ms    ease-out
Button press                Scale 0.97                   100ms    ease-out
```

---

## Lege States & Feedback

Momenteel bevat de site geen interactieve states. Voor toekomstige formulieren of interactieve elementen:

- Inline validatiefouten: klein, muted rood, onder het veld
- Loading: subtiele opacity-pulse op het laad-element
- Succes: korte bevestigingstekst, geen modale popup

---

## Do's & Don'ts

### Do's
- Gebruik witruimte genereus — als het te vol aanvoelt, haal iets weg
- Houd secties scanbaar: de bezoeker moet in 3 seconden de kern begrijpen
- Gebruik de Reveal-wrapper voor scroll-triggered content
- Test elke sectie op 375px (mobiel) én 1440px (desktop)
- Controleer tekstcontrast: foreground (#e9e9e7) op background (#111111) scoort >16:1

### Don'ts
- Geen gradient-achtergronden of kleurrijke vlakken
- Geen decoratieve illustraties, clipart of stock-beelden
- Geen tekst in meer dan 2 kleuren per sectie
- Geen animaties langer dan 1 seconde
- Geen interactiviteit op de kaart — die is puur decoratief
- Geen light mode — de site is dark-mode only
- Nooit pure wit (#FFFFFF) gebruiken voor tekst
- Geen zware schaduwen — gebruik `--color-line` borders in plaats van box-shadows
