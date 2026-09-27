# Tejaswini Uppu — Immersive 3D Portfolio

Light, high-contrast agency-style portfolio for **Tejaswini Uppu**, Full-Stack Engineer (Hyderabad). Worlds: Core → Engine → Journey → Project Lab → Impact → Connection — with interactive R3F scenes on a monochrome canvas. Built with Next.js App Router, TypeScript, Tailwind CSS, React Three Fiber, Drei, Motion, and Lucide.

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000) (primary). Optional alias: [http://127.0.0.1:43127](http://127.0.0.1:43127) via `npm run preview:ports`.

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Dev server on port **3000** |
| `npm run build` | Production build |
| `npm run start` | Serve production build on **3000** |
| `npm run preview:ports` | Proxy **43127 → 3000** |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript (`tsc --noEmit`) |

## Content integrity

Resume-supported facts only (see `src/data/portfolio.ts`). LinkedIn and GitHub profile links are included in the portfolio data. Phone is never displayed. Optional `NEXT_PUBLIC_SITE_URL` enables absolute sitemap entries — no production domain is invented by default.

## Stack highlights

- Lazy-loaded R3F scenes with WebGL 2D fallbacks
- Reduced-motion and low-power particle budgets
- Animations pause when the tab is hidden
- Skip link, keyboard-accessible nav, semantic sections
