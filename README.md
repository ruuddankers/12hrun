# 12h.run

Nederlandstalige marketingwebsite voor **12h.run**: een kleinschalige boutique endurance experience rond ritme, herstel en veerkracht.

12h.run is een 12-uurs running event waarin deelnemers elk uur samen starten voor een ronde van 5 km. De resterende tijd binnen het uur is herstel. De eerste editie is gepland voor juni 2027 in de omgeving van Berkel-Enschot en ondersteunt Stichting DON (Type 1 Diabetes).

## Stack

- Next.js 15 (App Router, React Server Components)
- TypeScript 5.8 (strict)
- Tailwind CSS 4
- Framer Motion 12
- shadcn-stijl lokale UI componenten (CVA + Radix)
- Leaflet (GPX routekaart)
- Vercel

## Lokaal Ontwikkelen

```bash
npm install
npm run dev
```

Open daarna:

```
http://localhost:3000
```

## Scripts

```bash
npm run dev      # Next.js dev server
npm run build    # Productiebuild
npm run start    # Productieserver
npm run lint     # ESLint check
```

## Projectstructuur

```
app/
  layout.tsx          # Root layout (metadata, fonts, dark mode)
  page.tsx            # Homepagina
  globals.css         # Tailwind 4 + CSS-variabelen
components/
  sections/
    site-header.tsx   # Sticky navigatiebalk
    concept-section.tsx  # Hero section met routekaart
    site-footer.tsx   # Footer met contact
  shared/
    animated-dot-system.tsx  # 12-punts ritme-animatie
    route-map.tsx            # Leaflet/GPX kaartcomponent
  motion/
    reveal.tsx        # Framer Motion scroll-animatie wrapper
  ui/
    button.tsx        # Herbruikbare button (CVA variants)
lib/
  utils.ts            # cn() helper, interestMailto
public/
  12h-run-logo-text.svg
  12hrun-logo.svg
  favicon.svg
  route-12hrun.gpx   # GPX routedata
  fonts/
    Benzin-Bold.ttf   # Custom display font
.claude/
  agents/             # Claude Code specialist-profielen
.codex/
  agents/             # Codex specialist-profielen
```

## Brand

Kleuren:

```
#111111  achtergrond (true black)
#E9E9E7  tekst (off-white)
#F06939  accent (oranje)
#9d9d97  muted (grijs)
```

Fonts:
- **Benzin-Bold** — display headlines, uppercase
- **Inter** — body tekst

De toon is Nederlands, kalm, filmisch, premium en ingetogen. Vermijd luide sportmarketing, generieke charity-visuals en overdreven animatie.

## Agent-profielen

Dit project bevat specialist-profielen in twee formaten:

- `.claude/agents/` — Claude Code specialist-rollen
- `.codex/agents/` — Codex specialist-rollen

Zie `AGENTS.md` voor instructies en gebruik.

## Deploy

Vercel gebruikt de expliciete configuratie in `vercel.json`:

```json
{
  "framework": "nextjs",
  "installCommand": "npm install",
  "buildCommand": "npm run build",
  "outputDirectory": ".next"
}
```

Controleer bij deploymentproblemen dat Vercel de laatste commit op `main` gebruikt en dat de Root Directory op de repo-root staat.

## Contact

[hello@12h.run](mailto:hello@12h.run)
