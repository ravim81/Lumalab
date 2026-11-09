# Phase 0 — Specification and Readiness Gate

## Deliverables
- [x] Repository identity confirmed: `ravim81/Lumalab` (empty at discovery).
- [x] Product requirements and MVP boundaries.
- [x] Brand direction: premium camera precision + futuristic creative technology.
- [x] Initial design system and responsive studio interaction rules.
- [x] Architecture and package boundaries.
- [x] Optical equations and unit conventions documented.
- [x] Optical golden/property test specification.
- [x] Asset sourcing, licensing and optimisation policy.
- [x] QA and deployment plan.
- [ ] Independent verification of all optical golden fixture values.
- [ ] Competitor review with current feature/pricing/license evidence.
- [ ] Actual asset candidate shortlist with license evidence and performance checks.
- [ ] Cloudflare account/project and deployment target inspection.
- [ ] Final name/domain/trademark screening.
- [ ] Phase 0 acceptance review and approval.

## Phase 0 exit criteria
Every open item above must be completed or explicitly marked as a deferred decision with rationale. No production UI/engine implementation begins until the spec gate is closed. Documentation commits are allowed during Phase 0.

## Phase 1 — Optical foundation
1. Set up workspace, strict TypeScript, lint/typecheck/test/build scripts.
2. Implement shared domain types and versioned experiment schema.
3. Implement P0 optics and exposure functions as pure packages.
4. Add golden, property, boundary and unit-conversion tests.
5. Build a minimal technical verification screen (not the full 3D studio).
6. Review numerical outputs and limitations.
7. Gate: all P0 tests pass and calculations remain independent of UI/Three.js.

## Later phases
- Phase 2: 3D camera studio foundation and camera/lens positioning.
- Phase 3: lighting, capture and A/B comparison.
- Phase 4: scenario library and local project workspace.
- Phase 5: learning/challenges and computational photography.
