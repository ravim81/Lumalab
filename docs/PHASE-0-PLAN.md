# Phase 0 — Specification and Readiness Gate

## Deliverables
- [x] Repository identity confirmed: ravim81/Lumalab (working repository).
- [x] Product requirements and MVP boundaries.
- [x] Brand direction: premium camera precision + futuristic creative technology.
- [x] Initial design system and responsive studio interaction rules.
- [x] Architecture and package boundaries.
- [x] Optical equations and unit conventions documented.
- [x] Optical golden/property test specification.
- [x] Asset sourcing, licensing and optimisation policy.
- [x] QA and deployment plan.
- [x] Independent verification of DoF, FOV and exposure fixtures (EV100 corrected to 9.936637939 for f/2.8, 1/125 s, ISO 100).
- [x] Competitor review completed against public product pages; claims and differentiation documented.
- [x] Asset candidate shortlist researched with source/license references.
- [x] Cloudflare account inspected; no LumaLab Worker exists yet, so deployment target remains to be created after app scaffold.
- [ ] Download and inspect exact camera GLB and studio HDRI binaries; verify provider checksums; calculate SHA-256; parse geometry, materials, texture payloads, transforms, scale and pivots; visually review and run mobile rendering QA.
- [ ] Produce and commit asset manifest and inspection report; approve or reject each candidate.
- [ ] Complete India trademark registry search (classes 9, 41 and 42), WIPO and target-market trademark searches, company/app-store/domain/common-law screening, and professional legal review.
- [ ] Select a distinctive public product name only after clearance; LumaLab remains a provisional internal repository identifier.
- [ ] Final Phase 0 acceptance review and approval.

## Current gate decision — 2026-11-09
**Phase 0 is NOT accepted. Phase 1 implementation is not authorised by this gate.**

Two blockers remain:
1. Asset binary inspection has not been completed. Candidate-source and license research is not equivalent to inspecting the actual files.
2. The LumaLab name has a material collision signal: a live/pending LUMA LAB international application was found for another owner with software/education-related services in the US. This does not establish infringement or determine Indian rights, but it is sufficient to withhold public-name approval pending official registry and professional review.

The Poly Haven API documents direct download URLs, file sizes and checksums, and its assets are CC0. This supports the retrieval plan but does not verify the candidate binaries themselves. References: https://polyhaven.com/our-api and https://polyhaven.com/license.

## Phase 0 exit criteria
Every open item above must be completed or explicitly deferred with rationale and owner. No production UI/engine implementation begins until the spec gate is closed. Documentation commits are allowed during Phase 0.

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


## Phase 1 authorization note
Phase 1 implementation was started in a separate feature branch following the user's explicit request. This is a controlled progression of the numerical engine and verification UI only; it does not constitute Phase 0 acceptance. The asset-binary and brand-clearance gates remain release blockers for the later 3D studio and public product launch. No unverified assets or public brand claims are included.
