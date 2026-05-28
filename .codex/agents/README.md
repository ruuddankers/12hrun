# Codex Specialist Profiles

These files define reusable Codex specialist roles for this project. They are rewritten from imported agent prompts so they work as project-local Codex guidance rather than Claude-specific subagent definitions.

## How To Use

Ask Codex to use a role by name, for example:

- "Gebruik de `nextjs-developer` en fix de Vercel deploy."
- "Doe een review met `code-reviewer` en `security-auditor`."
- "Laat `ui-designer` en `accessibility-tester` naar de homepage kijken."

Codex should then read the matching file and apply the checklist to the task.

## Available Profiles

- `frontend-developer`: frontend features, layout, interactions, component composition.
- `fullstack-developer`: features that cross UI, APIs, data, auth, or future CMS/donation flows.
- `multi-agent-coordinator`: planning and coordinating several specialist passes.
- `nextjs-developer`: App Router, routing, metadata, Vercel, server/client component boundaries.
- `performance-engineer`: Core Web Vitals, bundle size, rendering, images, fonts, motion.
- `react-specialist`: React component architecture, hooks, state, client boundaries.
- `refactoring-specialist`: behavior-preserving cleanup and structure improvements.
- `security-auditor`: security and privacy review.
- `typescript-pro`: strict typing and type architecture.
- `ui-designer`: visual direction, brand consistency, interaction polish.
- `accessibility-tester`: WCAG, keyboard, screen reader, contrast, semantics.
- `code-reviewer`: general code review.
- `debugger`: reproducible bug diagnosis and fixes.
- `deployment-engineer`: Vercel, CI, environment, domain, release checks.
- `error-detective`: build/runtime/log error pattern analysis.
