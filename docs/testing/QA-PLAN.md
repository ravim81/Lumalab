# QA Plan

## Test layers
- Unit: pure optical, exposure, sensor and state-transition functions.
- Property: monotonic and invariant relationships in OPTICAL-TEST-SPEC.md.
- Reference: golden fixtures independently checked and version-controlled.
- Integration: UI controls → experiment state → derived values → scene projection.
- Rendering: materials, lighting, camera framing, focus guides, responsive render scale and context-loss recovery.
- E2E: home → scenario → studio → adjust → capture → compare → save → restore.
- Accessibility: keyboard, focus order, reduced motion, contrast, screen-reader labels for controls.
- Device/browser: Chrome, Edge, Firefox, Safari where supported; Android Chrome and iOS Safari; desktop, tablet and narrow mobile.

## Release gates
- All P0 golden and boundary tests pass.
- No invalid numeric state or silent unit conversion.
- All critical workflows pass on supported browsers.
- No blocking console errors, unhandled promise rejections or WebGL resource leaks during repeated scene entry/exit.
- Mobile controls remain usable in portrait and landscape.
- Performance budgets are measured on representative low/mid/high devices; no universal FPS promise.
- All production assets have license evidence and technical QA status.
- Accessibility issues affecting core workflows are resolved before public beta.

## Performance measurement
Track initial JS payload, first meaningful content, scene-ready time, GPU memory estimate, frame-time distribution, asset transfer size and interaction latency. Set numeric budgets after a representative scene and device matrix exist; do not invent a budget before measurement.
