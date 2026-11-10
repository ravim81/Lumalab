# Phase 1 — Optical Foundation
## Implemented in this branch
- Strict TypeScript workspace and React/Vite technical verification app.
- UI-independent pure optics package: FOV (horizontal/vertical/diagonal), crop factor, hyperfocal distance, near/far DoF, entrance pupil, EV100, ISO-adjusted scene EV and exposure compensation.
- Physical input validation, explicit infinity, golden fixtures and monotonicity tests.
- Editable technical verification screen.
## Engineering rules
- Internal lengths are millimetres; shutter time is seconds; FOV is returned in degrees at the presentation boundary.
- Thin-lens DoF requires focus distance greater than focal length and exposes the chosen CoC.
- Domain package imports no React, Three.js or browser APIs.
- R3F is deliberately deferred: Phase 1 validates the optical foundation, not the 3D studio. Stable R3F v9 pairs with React 19; v10 remains alpha in current docs. See https://r3f.docs.pmnd.rs/getting-started/installation.
## Deferred risks
- Phase 0 camera/HDRI binary inspection and final trademark clearance remain open. No third-party assets are bundled and LumaLab remains a working name.
- No pupil magnification, lens profiles, distortion, aberrations, focus breathing or ray tracing.
- EV is an exposure index, not scene luminance metering.
## Verification
- Vitest test suite is authored. This connected GitHub editing environment cannot run npm install/test/build against a checked-out working tree; local/CI execution is required before merge. Do not mark release-ready until typecheck, tests, production build and browser QA pass.
