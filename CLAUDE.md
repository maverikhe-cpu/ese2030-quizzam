# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ESE 2030 Quizzam — Interactive practice final exam site for Linear Algebra. 43 conceptual multiple-choice questions, 120-minute timer, partial credit scoring, deployed as a static site on Vercel.

## Commands

```bash
pnpm run dev        # Dev server on localhost:3000
pnpm run build      # Production build (static export to out/)
pnpm run lint       # ESLint
```

No test framework is configured.

## Architecture

**Static export** (`output: "export"` in next.config.ts) — no server-side features, no API routes. Everything runs client-side.

**Data flow**: `src/data/questions.ts` (43 typed question objects) → `src/stores/examStore.ts` (Zustand with localStorage persistence) → three page components.

**Pages**:
- `/` (server component) — Landing with instructions and start button
- `/exam` (client component) — Exam interface: timer, question card with 5 options, navigation grid, flag-for-review, submit dialog. Keyboard shortcuts: arrow keys (nav), A-E (select), F (flag)
- `/results` (client component) — Score summary, topic breakdown by week group, expandable answer review with explanations and distractor analysis

**Math rendering**: `MathRenderer` component parses `$...$` (inline) and `$$...$$` (display) delimiters in strings, renders via `katex.renderToString()`. All question stems, options, and explanations contain LaTeX.

**State**: Single Zustand store (`examStore.ts`) with persist middleware. Exam lifecycle: `not-started` → `in-progress` → `submitted`. Timer ticks via `setInterval`, auto-submits at zero. Answers, flags, and timer state survive page refresh.

## Key Patterns

**Question data schema** (`src/types/exam.ts`): Each question has engineered distractors with named error types (`partial-credit` or `trick-answer`). The `week` field is a number or `[number, number]` tuple for synthesis questions. Partial credit is 0.5 points per designated option.

**Scoring**: Computed on the results page (not in the store). Raw = correct count. Adjusted = correct + (partial credit count × 0.5). Topic scores grouped by week ranges defined in `TOPIC_GROUPS` array on the results page.

**Tailwind v4**: Theme tokens defined inline in `globals.css` via `@theme inline { --color-exam-* }`. KaTeX CSS imported there as well. Use `@/` path alias for imports.

**Course notation**: Questions use ker/im/ker⊥/im⊥ vocabulary (not "row space/column space"). The MC-skill-2030.md file contains the full specification for question engineering.

## Next.js Version

This project uses Next.js 16 with breaking changes. Check `node_modules/next/dist/docs/` before modifying framework-level code.
