# Initial Design System

## Design intent
Premium photographic workstation + cinematic creative studio. The scene and resulting image must dominate; controls should feel like instruments rather than dashboard widgets.

## Tokens
| Token | Value |
|---|---|
| canvas | #0B0D10 |
| panel | #15191F |
| surface | #202630 |
| border | #343C47 |
| text | #F3F5F7 |
| muted | #A0A9B5 |
| accent | #77A9FF |
| warm | #D7A86E |
| success | #83C9A5 |
| warning | #E7B66C |
| danger | #E18B8B |

## Type and numbers
- UI: Inter / system sans fallback.
- Technical readouts: tabular numerals.
- Display: restrained, large editorial headlines on marketing surfaces only.
- Units always visible beside values; do not rely on placeholder text.

## Spacing and shape
- 4 px base grid; 8 px compact; 16 px standard; 24 px section; 32 px major.
- 6 px small control radius; 12 px panel radius; 16 px large viewport radius.
- Borders are subtle; reserve shadows for layered controls over the 3D scene.

## Navigation and page layouts
- Home: editorial hero with a live/looping studio glimpse, clear “Enter studio” action, concise platform explanation and scenario entry points.
- Scenario selection: visual scene cards grouped by learning goal; show the camera/lighting variables each scenario explores.
- Studio desktop: scene viewport ~68%, instrument rail ~32%; collapsible rail; capture and compare actions always discoverable.
- Studio mobile: full-screen scene, compact top status, floating essential controls, swipe-up parameter sheets, landscape-optimised workspace.
- Technical view: optical diagram, numeric readings, assumptions and units.
- Compare view: synchronised A/B image panes and a compact difference summary.
- Workspace: saved experiments with preview, name, timestamp and simulation schema version.

## Interaction rules
- Drag empty scene = orbit editor/view camera.
- Pinch/scroll = zoom editor/view camera.
- Drag virtual camera body = move simulated camera position.
- Drag focus marker = change focus distance.
- Tap subject = set focus target.
- Lens selection changes optical configuration, not scene navigation.
- Light gizmos move/aim lights; intensity and colour temperature are separate controls.
- Reset must offer a clear, deterministic reset of the current experiment.
- Do not stack permanent instructional overlays over the photograph.

## Modes
- Creative: scene and image first, minimal readouts.
- Technical: diagrams, values, units, focus plane and calculations.
- Compare: side-by-side captures with linked/unlinked controls.

## Motion
- Control feedback 120–200 ms.
- Panel transitions 200–300 ms.
- Scene transitions 350–600 ms.
- Damped motion, no perpetual idle animation unless it serves the scene.
- Respect prefers-reduced-motion.

## Accessibility and resilience
- Contrast target WCAG AA for text and controls.
- Keyboard access for all non-spatial controls; visible focus.
- Touch targets ideally 44×44 CSS px.
- Provide non-WebGL fallback and text alternatives for important readings.
- Do not encode status by colour alone.
