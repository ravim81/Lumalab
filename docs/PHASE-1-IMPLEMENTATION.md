# Phase 1 — Optical Foundation

## Implemented
- Strict TypeScript workspace and React/Vite technical verification application.
- UI-independent pure optics package: horizontal/vertical/diagonal sensor FOV, crop factor, hyperfocal distance, near/far DoF, entrance pupil, EV100, ISO-adjusted scene EV and exposure compensation.
- Physical input validation, explicit infinity handling and golden reference fixtures.
- Desktop and mobile Chromium smoke tests: app rendering, interactive focal-length change, and horizontal overflow check.
- GitHub Actions checks for install, unit tests, strict project typecheck/build, production bundle and browser tests.

## Model conventions and limits
- Internal lengths are millimetres; shutter time is seconds; FOV is returned in degrees at the presentation boundary.
- Thin-lens DoF requires focus distance greater than focal length. With the exact focal-length correction in the selected formula, the far limit tends to infinity at the H + f threshold; the API reports infinity explicitly.
- Domain package imports no React, Three.js or browser APIs.
- This numerical model is not a ray-traced physical lens; EV is an exposure index, not scene luminance metering.

## Verification
- The Phase 1 GitHub Actions run completed successfully for npm install, npm test, npm run typecheck and npm run build.
- The browser smoke suite is now included in CI and must complete successfully before merge.
- Manual cross-browser visual QA beyond Chromium automation remains a release check; no claim of exhaustive Safari/Firefox/device testing is made.

## Deferred
- 3D camera studio, lighting/capture renderer, camera/lens asset integration, sensor simulation and image processing are later phases.
- Phase 0 asset binary inspection and formal brand clearance remain separate release gates. No unverified third-party assets are bundled; LumaLab remains a working name.
