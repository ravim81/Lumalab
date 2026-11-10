# Architecture

## Baseline stack
- React 19, TypeScript strict, Vite.
- Three.js with React Three Fiber v9 and compatible Drei.
- Zustand for shared experiment state; Zod for runtime validation.
- Vitest for unit/property tests; Playwright for browser workflows.
- GSAP only for deliberate transitions; avoid competing animation systems.
- Web Workers for expensive image/optics tasks where profiling justifies them.
- IndexedDB for local-first projects.
- Cloudflare Workers + Workers Static Assets for hosting. Add Worker APIs only when a real server requirement exists.

## Rendering strategy
WebGL2 is the compatibility baseline. WebGPU may be evaluated later as progressive enhancement. Use glTF 2.0/GLB, KTX2 textures where beneficial, and Meshopt/Draco only after measured asset validation. Use physically based materials, image-based lighting, correct colour-space handling and restrained post-processing.

## Monorepo layout
```
apps/
  web/src/{app,routes,components,layouts,studio,academy,challenges,workspace}/
  worker/src/
packages/
  shared-types/
  camera-core/
  optics-engine/
  exposure-engine/
  sensor-engine/
  lighting-engine/
  scene-engine/
  image-engine/
  equipment-catalog/
  experiment-engine/
  learning-engine/
  design-system/
assets/{cameras,lenses,subjects,environments,lighting,materials}/
tests/{unit,reference,integration,rendering,e2e}/
docs/{product,architecture,optics,assets,design,testing,deployment}/
```

## Dependency boundaries
- shared-types contains schemas and domain types only.
- camera-core and optics-engine are pure TypeScript; no React, Three.js or DOM imports.
- exposure-engine and sensor-engine depend on shared-types and domain math, not UI.
- scene-engine maps validated domain state to Three.js scene objects.
- image-engine owns capture/render output and image metadata.
- experiment-engine composes domain calculations and versioned state.
- UI packages may depend on domain packages; domain packages must never depend on UI.
- Equipment catalogue stores data and references, not rendering logic.

## Experiment state
Versioned, serialisable state includes camera pose, subject pose, sensor, lens, focus, aperture, shutter, ISO, lighting, environment, accuracy profile and render profile. Persist user inputs and schema version; derive calculated outputs rather than duplicating them in state. Every saved project must be reproducible against a named engine version.

## Data flow
UI action → validated state transition → pure calculation selectors → scene/image projection → rendered feedback. Keep expensive image operations off the main thread when measurements justify it. Do not let Three.js object transforms become the only source of truth for optical calculations.

## Persistence and services
Start local-first with IndexedDB. Cloud sync, authentication and relational records are later decisions; do not add Supabase or a database before the product needs accounts or cross-device sync. Use R2 only if large user assets/captures require object storage. Avoid unnecessary platform dependencies.

## Performance
Adaptive render scale, DPR caps, shadow quality and post-processing based on measured device capability. Lazy-load scenes and assets, dispose GPU resources, use instancing where appropriate, and monitor frame time and memory. Never promise a fixed FPS across all devices.

## Failure handling
Detect WebGL/context loss; show recoverable fallback. Validate all imported/saved experiment data. Handle missing assets with placeholders and explicit warnings. Keep UI controls usable if 3D rendering fails.
