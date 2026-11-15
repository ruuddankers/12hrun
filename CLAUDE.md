# CLAUDE.md — 12HVBE Website

## Projectoverzicht

Nederlandstalige marketingwebsite voor **12HVBE**: een boutique endurance running event in juni 2027 in Berkel-Enschot, georganiseerd ten behoeve van Stichting DON (Type 1 Diabetes).

Format: deelnemers starten elk uur samen voor een ronde van 5 km. De resterende tijd binnen het uur is herstel. 12 ronden in 12 uur.

## Tech Stack

| Laag | Technologie |
|------|-------------|
| **Framework** | Next.js 15 (App Router, RSC) |
| **Taal** | TypeScript 5.8 (strict mode) |
| **Styling** | Tailwind CSS 4 (via `@tailwindcss/postcss`) |
| **Animatie** | Framer Motion 12 |
| **UI components** | shadcn-stijl lokale componenten (CVA + Radix Slot) |
| **Fonts** | Inter (Google Fonts) + Benzin-Bold (lokaal, custom TTF) |
| **Kaart** | Leaflet 1.9.4 (CDN, lazy-loaded) |
| **Deployment** | Vercel |

## Projectstructuur

```
12hrun/
├── app/
│   ├── page.tsx           # Homepagina (compositeert sections)
│   ├── layout.tsx         # Root layout (metadata, fonts, dark mode)
│   └── globals.css        # Tailwind 4 + CSS-variabelen + utilities
├── components/
│   ├── sections/
│   │   ├── site-header.tsx       # Sticky nav: logo, datum, CTA
│   │   ├── concept-section.tsx   # Hero: route map + heading
│   │   └── site-footer.tsx       # Footer: logo, dots, contact
│   ├── shared/
│   │   ├── animated-dot-system.tsx  # 12-punts ritme-animatie
│   │   └── route-map.tsx            # Leaflet/GPX kaartcomponent
│   ├── motion/
│   │   └── reveal.tsx             # Framer Motion fade+slide wrapper
│   └── ui/
│       └── button.tsx             # Button (CVA-variants: default/outline/ghost)
├── lib/
│   └── utils.ts           # cn() helper + interestMailto constante
├── public/
│   ├── 12hvbe-wordmark.svg
│   ├── 12hvbe-logo.svg
│   ├── favicon.svg
│   ├── route-12hrun.gpx   # GPX routedata voor kaart
│   └── fonts/
│       └── Benzin-Bold.ttf
├── .claude/
│   └── agents/            # Claude Code specialist-profielen
├── .codex/
│   └── agents/            # Codex specialist-profielen
├── CLAUDE.md              # Dit bestand
├── README.md              # Projectoverzicht (NL)
├── DESIGN.md              # Design system
├── TASKS.md               # Gefaseerd implementatieplan
└── AGENTS.md              # Agent-instructies (Claude + Codex)
```

## Conventies

### Code Style
- **Taal:** TypeScript strict mode
- **Formatting:** Prettier (standaard config)
- **Linting:** ESLint 9 flat config (next/core-web-vitals + next/typescript)
- **Imports:** Path alias `@/` verwijst naar projectroot
- **Naamgeving:** camelCase voor variabelen/functies, PascalCase voor componenten/types, kebab-case voor bestanden

### Components
- Functionele React-componenten, geen class components
- Server Components by default — gebruik `"use client"` alleen waar nodig (interactiviteit, browser APIs, Framer Motion)
- Gebruik `cn()` uit `@/lib/utils` voor conditionele classnames
- Varianten via CVA (`class-variance-authority`)
- `asChild` patroon via Radix Slot voor polymorfische componenten

### Styling
- Tailwind CSS 4 utility classes
- CSS-variabelen in `globals.css` voor design tokens (kleuren, fonts)
- Custom utilities gedefinieerd in `globals.css` (`.container-page`, `.display-tight`, etc.)
- **Nooit** inline styles tenzij dynamisch noodzakelijk

### Animatie
- Framer Motion voor scroll-triggered animaties (`whileInView`)
- Gebruik de `Reveal`-wrapper (`components/motion/reveal.tsx`) voor standaard fade+slide
- Animaties subtiel: 200–900ms, `ease-out` voor verschijnen
- Geen bounce, geen overdreven motion

### Taal & Toon
- UI copy altijd in het **Nederlands**
- Toon: kalm, filmisch, premium, ingetogen — geen sportmarketingclichés
- Geen luide call-to-actions, geen overdreven uitroeptekens

## Design Tokens (snel overzicht)

```
Achtergrond:    #111111   (true black)
Tekst:          #e9e9e7   (off-white)
Accent:         #92E4BA   (mintgroen)
Muted:          #9d9d97   (grijs)
Panel:          #171717   (elevated surface)
```

Fonts:
- Display/Headlines: `Benzin` (CSS var: `--font-benzin`), uppercase
- Body: `Inter` (CSS var: `--font-inter`)

Zie `DESIGN.md` voor het volledige design system.

## Beschikbare Claude Agents

In `.claude/agents/` staan specialist-profielen. Gebruik ze via de `/agents` of door een agent aan te roepen bij complexe taken:

| Agent | Wanneer gebruiken |
|-------|-------------------|
| `nextjs-developer` | App Router, RSC, metadata, Vercel |
| `ui-designer` | Visuele polish, componentdesign, responsive |
| `accessibility-tester` | WCAG, toetsenbord, semantiek |
| `frontend-developer` | React-componenten, hooks, patronen |
| `typescript-pro` | Typeveiligheid, generics, strict mode |
| `performance-engineer` | Core Web Vitals, bundle analyse |
| `code-reviewer` | Review met bevindingen op prioriteit |
| `debugger` | Bugdiagnose, stack traces |
| `deployment-engineer` | Vercel, build, CI/CD |

## Niet gebruiken

- **Geen class components** in React
- **Geen Prisma / database** — dit is een statische marketingsite
- **Geen server actions / API routes** tenzij expliciet gevraagd
- **Geen externe CSS-frameworks** naast Tailwind (geen Bootstrap, etc.)
- **Geen Python** — alles in TypeScript/JavaScript
- **Geen WidthType.PERCENTAGE** in eventuele document exports

## Git

- **Conventional commits:** `feat:`, `fix:`, `chore:`, `docs:`, `style:`
- **Branch strategie:** werk op `main` voor kleine wijzigingen, `feature/naam` voor grotere features
- Controleer altijd met `npm run build` voor deployment
