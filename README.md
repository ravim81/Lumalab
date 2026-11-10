# LumaLab

A standalone virtual photography platform combining a realistic camera simulator, an immersive 3D studio, and an optical learning laboratory.

## Current implementation

- Phase 0 product, architecture, scientific and asset governance specifications are documented in `docs/`.
- Phase 1 optical foundation is implemented on `feature/phase-1-optical-foundation`.
- The current app is a numerical verification workspace, not the final 3D studio.
- Product name remains provisional pending formal trademark review.
- Camera/HDRI binary inspection remains open; no unverified third-party assets are included.

## Run locally

```bash
npm install
npm run dev
npm test
npm run typecheck
npm run build
```

## Repository boundaries

This repository is independent. Do not import code or deployment configuration from ChemLab or the personal portfolio.

See [Phase 1 implementation notes](docs/PHASE-1-IMPLEMENTATION.md) and [Phase 0 plan](docs/PHASE-0-PLAN.md).
