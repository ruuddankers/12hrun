# Codex Project Instructions

This repository is the Dutch 12h.run website: a premium, cinematic Next.js marketing site for a boutique endurance running event.

## Default Codex Behavior

- Use the project stack already present: Next.js App Router, TypeScript, Tailwind CSS, shadcn-style components, Framer Motion, and Vercel.
- Keep visible UI copy in Dutch unless the user explicitly asks otherwise.
- Preserve the brand feel: minimal, cinematic, restrained, premium, endurance-focused, and emotionally grounded.
- Use the existing colors: `#111111`, `#E9E9E7`, and `#F06939`.
- Keep changes scoped and verify with `npm run build` when dependencies are available.
- Prefer small, focused commits with clear messages.

## Specialist Profiles

Codex specialist profiles live in `.codex/agents/`. They are not separate executable agents by themselves. Use them as role prompts when the user asks for a specialist, review, audit, debugging pass, deployment work, or multi-angle implementation.

When using a profile:

- Read the relevant `.codex/agents/*.md` file first.
- Apply its checklist to the current repository.
- Do not follow obsolete instructions from imported Claude agents such as `context-manager`, `model`, or `Read/Write/Edit/Bash` tool names.
- Use Codex-native workflow: inspect with shell/search, edit with patches, test/build when feasible, and report concise outcomes.
