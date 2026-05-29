# Agent Instructies — 12h.run

Dit bestand bevat instructies voor zowel **Claude Code** als **Codex**. Beide kunnen als AI-assistent gebruikt worden voor dit project; de instructies staan naast elkaar zodat je makkelijk kunt wisselen.

---

## Claude Code

### Standaard gedrag

- Gebruik de bestaande stack: Next.js 15 App Router, TypeScript strict, Tailwind CSS 4, Framer Motion, Vercel.
- Houd UI copy in het **Nederlands** tenzij expliciet anders gevraagd.
- Behoud de merkidentiteit: minimaal, filmisch, ingetogen, premium, emotioneel gegrond.
- Gebruik de bestaande kleuren: `#111111`, `#e9e9e7`, `#f06939`.
- Wijzigingen beperken tot wat gevraagd is — geen refactor zonder opdracht, geen extra features.
- Verifieer met `npm run build` als dependencies of configuratie gewijzigd zijn.
- Lees bestanden eerst voor je ze wijzigt.

### Specialist-profielen

Claude Code specialist-profielen staan in `.claude/agents/`. Ze worden automatisch ingezet wanneer je een complexe taak delegeert. Je kunt ze ook expliciet aanroepen.

Beschikbare profielen:

| Profiel | Gebruik wanneer |
|---------|-----------------|
| `nextjs-developer` | App Router architectuur, RSC, metadata, Vercel deployment |
| `ui-designer` | Componentdesign, visuele polish, responsive compositie, merkuitlijning |
| `accessibility-tester` | WCAG, toetsenbordnavigatie, semantische HTML, ARIA |
| `frontend-developer` | React-componenten, hooks, client-side logica |
| `react-specialist` | Geavanceerde React-patronen, state management |
| `typescript-pro` | Typeveiligheid, generics, strict mode issues |
| `performance-engineer` | Core Web Vitals, bundle analyse, Lighthouse |
| `code-reviewer` | Code review met bevindingen gesorteerd op prioriteit |
| `debugger` | Bugdiagnose, reproductie, stack traces |
| `error-detective` | Root cause analyse van runtime errors |
| `deployment-engineer` | Vercel config, build pipeline, domeinen |
| `refactoring-specialist` | Code kwaliteit, patronen, structuur verbeteren |
| `security-auditor` | XSS, CSRF, dependency vulnerabilities |
| `fullstack-developer` | Wanneer frontend én backend betrokken zijn |
| `multi-agent-coordinator` | Complexe taken die meerdere specialisten vereisen |

### Gebruik

Claude Code beheert subagents automatisch op basis van de taak. Je kunt ook expliciet vragen:

> "Voer een accessibility audit uit op de homepage."
> → Claude Code zal de `accessibility-tester` agent inzetten.

> "Review de component-architectuur."
> → Claude Code zal de `code-reviewer` en/of `react-specialist` inzetten.

### Referentiedocumenten

- `CLAUDE.md` — projectoverzicht, tech stack, conventies
- `DESIGN.md` — design system (kleuren, typografie, componenten)
- `TASKS.md` — gefaseerd implementatieplan
- `README.md` — projectsamenvatting en setup

---

## Codex

### Standaard gedrag

- Use the project stack already present: Next.js App Router, TypeScript, Tailwind CSS, shadcn-style components, Framer Motion, and Vercel.
- Keep visible UI copy in Dutch unless the user explicitly asks otherwise.
- Preserve the brand feel: minimal, cinematic, restrained, premium, endurance-focused, and emotionally grounded.
- Use the existing colors: `#111111`, `#E9E9E7`, and `#F06939`.
- Keep changes scoped and verify with `npm run build` when dependencies are available.
- Prefer small, focused commits with clear messages.

### Specialist Profiles

Codex specialist profiles live in `.codex/agents/`. They are not separate executable agents by themselves. Use them as role prompts when the user asks for a specialist, review, audit, debugging pass, deployment work, or multi-angle implementation.

When using a profile:

- Read the relevant `.codex/agents/*.md` file first.
- Apply its checklist to the current repository.
- Do not follow obsolete instructions from imported Claude agents such as `context-manager`, `model`, or `Read/Write/Edit/Bash` tool names.
- Use Codex-native workflow: inspect with shell/search, edit with patches, test/build when feasible, and report concise outcomes.
