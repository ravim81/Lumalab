# Product Requirements — LumaLab

## Vision
Build a complete virtual photography platform where anyone—from first-time learners to working professionals—can operate a realistic camera, arrange a 3D scene, shape light, capture images, and understand why the image looks the way it does.

## Positioning
A creative technology studio grounded in photographic science: premium camera-instrument precision with cinematic, exploratory interaction. The product is not a camera retailer, a preset editor, or a static educational page.

## Audience and jobs
- Beginner: understand exposure, focus, focal length, and light through direct experimentation.
- Enthusiast: compare lenses, sensors, depth of field, and lighting setups.
- Professional: previsualise scenes, test equipment choices, and communicate lighting/camera setups.
- Educator: demonstrate photographic principles with reproducible experiments.

## Core journey
Discover → choose a scenario → enter the shared 3D studio → adjust camera/scene/light → capture → inspect technical explanation → compare or save.

## Experience modes
- Explore: free-form studio, no tutorial pressure.
- Experiment: change one or more variables and see immediate effects.
- Compare: A/B captures with matched or deliberately changed settings.
- Learn: guided explanations and structured lessons (post-foundation).
- Challenge: scenario-based tasks with measurable outcomes (later phase).
- Create: save, duplicate, name, and share experiment setups (local-first MVP).

## Product modules
1. Virtual camera studio
2. Optical laboratory
3. Exposure laboratory
4. Lighting laboratory
5. Sensor and image-quality laboratory
6. Computational photography
7. Scenario library
8. Academy and challenge engine
9. Project workspace

All modules consume one versioned experiment state. Switching modules must not silently reset the user's setup.

## MVP scope
Phase 1: deterministic optical/exposure core and technical demo.
Phase 2: polished camera studio with one high-quality scene, camera positioning, lens/sensor controls, focus plane and depth-of-field visualisation.
Phase 3: lighting controls, capture pipeline and image comparison.
Phase 4: multiple scenarios, asset catalogue, local project workspace.
Later: guided academy, challenges, computational photography and cloud accounts.

## Non-functional requirements
- Responsive from small mobile screens to desktop; mobile landscape studio is a first-class layout.
- WebGL2 baseline; WebGPU is optional progressive enhancement, never a launch requirement.
- Automatic quality adaptation; no user-facing quality toggle required.
- Optical calculations are deterministic, independently tested, and independent of React/Three.js.
- Respect reduced-motion and keyboard accessibility for non-3D controls.
- Fast initial page, lazy-load 3D scenes/assets, show useful fallback if WebGL is unavailable.
- Local-first project persistence before introducing account/backend complexity.
- No unverified asset licensing or unbounded third-party runtime dependencies.

## MVP acceptance criteria
- A user can change focal length, sensor format, aperture, focus distance, shutter and ISO and see validated readings.
- FOV and DoF outputs match documented golden fixtures within specified tolerances.
- Invalid physical inputs are rejected with understandable errors; NaN/Infinity never enter persisted state.
- Camera movement and simulated camera placement are distinct controls.
- The studio remains usable on touch devices and degrades gracefully on low-power hardware.
- A saved experiment can be restored with the same parameter values and simulation version.
- A/B comparison preserves independent capture states.
- All MVP assets have a verified source, license and optimization record before shipping.

## Out of scope for initial MVP
- Real-time ray-traced photorealism as a requirement.
- Exact modelling of every commercial camera/lens.
- Cloud sync, social feeds, marketplace, subscriptions or user-generated asset uploads.
- Claims that a simplified thin-lens model reproduces every real lens behaviour.
