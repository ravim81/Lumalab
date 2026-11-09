# 3D Asset Register and Selection Policy

## Ownership and decision
Asset discovery, selection, licensing review and optimisation are owned by the project implementation. The user is not expected to source or vet models. Prefer CC0 assets with explicit asset-level provenance. The entries below are source-verified candidates; none is marked production-approved until the binary is downloaded and inspected.

## Selected camera candidates

| Priority | Asset | Source facts | Role / decision |
|---|---|---|---|
| 1 | [Camera 01 — Poly Haven](https://polyhaven.com/a/Camera_01) | CC0; 27k triangles; PBR maps listed for lens/body; author Rajil Jose Macatangay | Best visual-quality lead for hero camera. Inspect GLB/available downloads, pivots and mesh separation; may need an independently modelled lens mount and camera controls |
| 2 | [Prism Frame DSLR — Innerscene](https://www.innerscene.com/tools/library/3d-parts/prism-frame-dslr-camera-8e3035ed) | CC0; GLB 310 KB; ~11k triangles; embedded PBR; stated real-world dimensions | Best lightweight performance candidate / backup. Generic lens/body may not be separable |
| 3 | [Frame Compact Mirrorless — Innerscene](https://www.innerscene.com/tools/library/3d-parts/frame-compact-mirrorless-camera-0c4526a2) | CC0; GLB 310 KB; ~11k triangles; embedded PBR | Alternative modern mirrorless form factor |
| 4 | [35 mm SLR with 50 mm lens — Innerscene](https://www.innerscene.com/tools/library/3d-parts/35-mm-slr-film-camera-with-50-mm-lens-generic-c3baef05) | CC0; GLB 362 KB; detailed unbranded manual camera and lens | Secondary learning prop for film-camera scenario |

## Studio environment candidates

| Priority | Asset | Source facts | Role / decision |
|---|---|---|---|
| 1 | [Story Studio 01](https://polyhaven.com/a/story_studio_01) | CC0; studio HDRI; umbrella softbox, window and lamp; medium-contrast mixed light; 20K source | Lead portrait/product studio environment. Download a 1K/2K/4K runtime version; keep 20K only as source |
| 2 | [Studio Small 02](https://polyhaven.com/a/studio_small_02) | CC0; 16K source; bright cool key lamps, high contrast, speculars and black backdrop | Dramatic lighting scenario; runtime resolution to be chosen after mobile profiling |
| 3 | [White Studio 03](https://polyhaven.com/a/white_studio_03) | CC0; 20K source; white studio with umbrella lamps; soft medium-contrast light | Clean product-photography scenario |
| 4 | [Blue Photo Studio](https://polyhaven.com/a/blue_photo_studio) | CC0; 16K source; cool mixed daylight/artificial studio | Optional creative colour-lighting scenario |

Poly Haven's official license states its assets are CC0 and may be used commercially without attribution: https://polyhaven.com/license.

## Other asset sources
- [ambientCG](https://ambientcg.com/): candidate source for CC0 PBR floors, walls and backdrops. Verify the license included with each downloaded asset.
- [Kenney](https://kenney.nl/support): official support page says its game assets are public-domain CC0, including commercial use. Use only for low-priority utility props where style fits; avoid using stylised packs for hero photographic equipment.
- [Grab3D](https://grab3d.com/models/electronics/camera/): alternate CC0 camera prop source. Prefer Poly Haven/Innerscene candidates unless a specific Grab3D model wins visual and technical inspection.

## Required MVP categories
- Camera body with independently selectable lens or a documented modularisation plan.
- At least two lens form factors; optical simulation uses numeric lens data, not the visual mesh.
- Tripod and camera positioning rig.
- Human portrait subject with neutral pose and controllable focus target.
- Studio environment and background.
- Key/fill/rim light fixtures and at least two modifiers.
- Floor, backdrop and calibration objects/materials.

## Licensing and provenance gate
Do not use a model merely because it is downloadable or visible in a preview. Verify the exact asset's license and retain a copy/snapshot of source evidence. Record creator, exact license, attribution obligations, original URL, retrieval date, download URL, file hash and any modifications. Avoid NC, editorial-only, unclear or incompatible licenses. Do not reuse preview renders as product imagery unless separately licensed.

## Binary inspection and optimisation gate
For every selected file, record:
- File format, compressed size and decoded size.
- Triangle/vertex count, mesh and material count, texture dimensions and formats.
- Real-world dimensions, scale, up/forward axes, origin and interaction pivots.
- Whether lens, rings, buttons, tripod socket and moving parts are separate meshes.
- Texture colour spaces, normal-map convention and PBR channel mapping.
- Mobile LOD strategy, GPU memory estimate and render QA on low/mid/high devices.
- Compression result (KTX2/Basis textures, Meshopt or Draco geometry) and visual comparison against the uncompressed source.

Do not bundle full-resolution HDRIs in the initial application payload. Keep source masters outside the runtime bundle and deliver appropriately sized, versioned runtime assets.

## Current approval state
Source-level license and listing checks are recorded above. Actual GLB/HDRI binaries have not yet been downloaded or inspected in this repository, so **no asset is production-approved yet**. The next asset task is binary inspection and a committed manifest with hashes and measured technical properties. If a hero camera model is not modular enough, use it for the hero render and create a separate modular camera/lens assembly for interactive controls rather than pretending a single mesh has working controls.
