# 3D Asset Register and Selection Policy

## Ownership and decision
Asset discovery, selection, licensing review and optimisation are owned by the project implementation. The user is not expected to source or vet models. Prefer CC0 assets with explicit asset-level provenance. Entries below are source-verified candidates; none is production-approved until the binary is downloaded and inspected.

## Selected camera candidates
| Priority | Asset | Source facts | Role / decision |
|---|---|---|---|
| 1 | [Camera 01 — Poly Haven](https://polyhaven.com/a/Camera_01) | CC0; 27k triangles; PBR maps listed for lens/body; author Rajil Jose Macatangay | Lead hero-camera candidate; inspect pivots and mesh separation |
| 2 | [Prism Frame DSLR — Innerscene](https://www.innerscene.com/tools/library/3d-parts/prism-frame-dslr-camera-8e3035ed) | CC0; GLB 310 KB; ~11k triangles; embedded PBR; stated real-world dimensions | Lightweight candidate / backup; lens/body may not separate |
| 3 | [Frame Compact Mirrorless — Innerscene](https://www.innerscene.com/tools/library/3d-parts/frame-compact-mirrorless-camera-0c4526a2) | CC0; GLB 310 KB; ~11k triangles | Alternative modern mirrorless form factor |
| 4 | [35 mm SLR with 50 mm lens — Innerscene](https://www.innerscene.com/tools/library/3d-parts/35-mm-slr-film-camera-with-50-mm-lens-generic-c3baef05) | CC0; GLB 362 KB | Secondary learning prop |

## Studio environment candidates
| Priority | Asset | Source facts | Role / decision |
|---|---|---|---|
| 1 | [Story Studio 01](https://polyhaven.com/a/story_studio_01) | CC0; studio HDRI; umbrella softbox, window and lamp; medium-contrast mixed light; 20K source | Lead portrait/product studio; runtime 1K/2K/4K after profiling |
| 2 | [Studio Small 02](https://polyhaven.com/a/studio_small_02) | CC0; 16K source; high contrast and black backdrop | Dramatic lighting scenario |
| 3 | [White Studio 03](https://polyhaven.com/a/white_studio_03) | CC0; 20K source; soft even studio light | Clean product scenario |
| 4 | [Blue Photo Studio](https://polyhaven.com/a/blue_photo_studio) | CC0; 16K source; cool mixed light | Optional creative scenario |

Poly Haven's official license states its assets are CC0 and may be used commercially without attribution: https://polyhaven.com/license. Its API documents metadata, download URLs, file sizes and checksums: https://polyhaven.com/our-api.

## Other asset sources
- [ambientCG](https://ambientcg.com/): candidate source for CC0 PBR materials; verify each asset's license.
- [Kenney](https://kenney.nl/support): official support page states its assets are CC0. Use only utility props, not hero equipment.
- [Grab3D](https://grab3d.com/models/electronics/camera/): alternate camera-prop source; lower priority.

## Required MVP categories
- Camera body with independently selectable lens or documented modularisation plan.
- At least two lens form factors; optical simulation uses numeric lens data, not visual mesh.
- Tripod and camera positioning rig.
- Portrait subject with controllable focus target.
- Studio environment and background.
- Key/fill/rim fixtures and at least two modifiers.
- Floor, backdrop and calibration objects/materials.

## Licensing and provenance gate
Verify the exact asset license and retain source evidence. Record creator, exact license, attribution obligations, original URL, retrieval date, download URL, file hash and modifications. Avoid NC, editorial-only, unclear or incompatible licenses. Do not reuse preview renders unless separately licensed.

## Binary inspection and optimisation gate
For every selected file, record:
- Format, compressed size and decoded size.
- Triangle/vertex count, mesh/material count, texture dimensions and formats.
- Real-world dimensions, scale, up/forward axes, origin and interaction pivots.
- Whether lens, rings, buttons, tripod socket and moving parts are separate meshes.
- Texture colour spaces, normal-map convention and PBR channel mapping.
- Mobile LOD strategy, GPU memory estimate and render QA on low/mid/high devices.
- Compression result (KTX2/Basis, Meshopt or Draco) and visual comparison.

Do not bundle full-resolution HDRIs in the initial application payload. Keep source masters outside the runtime bundle and deliver versioned runtime assets.

## Binary inspection execution record — 2026-11-09
**Status: BLOCKED / NOT VERIFIED.** Candidate files were not downloaded into the working environment during this pass. The public API documentation was reachable, but direct retrieval of API file manifests and binary download endpoints was unavailable in the connected execution environment. No GLB or HDRI bytes were inspected; no hashes, mesh counts, texture dimensions, pivots or runtime memory figures are asserted.

This is an explicit blocker, not a pass. Next action: retrieve exact files from official sources in an environment with outbound access, verify provider checksums, compute local SHA-256, parse GLB JSON/BIN chunks, inspect texture payloads and HDRI dimensions, then commit a machine-readable manifest and inspection report. Visual review and mobile render tests remain required.

## Current approval state
Source-level license and listing checks are recorded above. Actual GLB/HDRI binaries have not been downloaded or inspected in this repository, so **no asset is production-approved**. If the hero model is not modular, use it for hero rendering and create a separate modular camera/lens assembly for interactive controls.
