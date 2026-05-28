# 12h.run

Nederlandstalige website voor **12h.run**: een kleinschalige endurance experience rond ritme, herstel en veerkracht.

12h.run is een 12-uurs running event waarin deelnemers elk uur samen starten voor een ronde van 5 km. De resterende tijd binnen het uur is herstel. De eerste editie is gepland voor juni 2027 in de omgeving van Berkel en ondersteunt Stichting DON.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn-style lokale UI componenten
- Framer Motion
- Vercel

## Lokaal Ontwikkelen

```bash
npm install
npm run dev
```

Open daarna:

```txt
http://localhost:3000
```

Belangrijke routes:

- `/`: marketing homepage
- `/doneer`: tijdelijke donatiepagina

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Projectstructuur

```txt
app/
  page.tsx
  layout.tsx
  globals.css
  doneer/page.tsx
components/
  sections/
  shared/
  motion/
  ui/
public/
  12hrun-logo.svg
  favicon.svg
.codex/
  agents/
```

## Codex Specialist Profiles

Dit project bevat herschreven Codex-profielen in `.codex/agents/`. Ze zijn bedoeld als projectlokale specialistrollen, bijvoorbeeld:

- `nextjs-developer` voor App Router, routes, metadata en Vercel.
- `ui-designer` voor merk, visuele polish en responsive compositie.
- `accessibility-tester` voor WCAG, toetsenbord en semantiek.
- `deployment-engineer` voor Vercel, domeinen en build-output.
- `code-reviewer` voor review met findings op prioriteit.

Zie `.codex/agents/README.md` en `AGENTS.md` voor gebruik.

## Brand

Belangrijkste kleuren:

```txt
#111111  achtergrond
#E9E9E7  tekst
#F06939  accent
```

De toon is Nederlands, kalm, filmisch, premium en ingetogen. Vermijd luide sportmarketing, generieke charity visuals en overdreven animatie.

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
