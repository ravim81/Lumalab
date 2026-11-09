# 3D Asset Register and Selection Policy

## Ownership
Asset discovery, suitability review, licensing verification and optimisation are owned by the project implementation. The user is not expected to source or vet individual models.

## Selection priorities
1. Commercial-use rights must be explicit and compatible with a public hosted product.
2. Prefer glTF/GLB with clean PBR materials and correct scale/pivots.
3. Choose realistic camera bodies, lenses, tripod, studio lights, modifiers, human/portrait subjects and environments.
4. Prefer assets with editable material slots and separate components where interaction is required.
5. Validate mobile geometry, texture memory, draw calls and loading time before adoption.
6. Keep source, creator, exact license, attribution obligations, original URL, retrieval date, file hash and optimisation history.

## Required MVP categories
- Interchangeable-lens camera body with independently selectable lens.
- At least two lens form factors for focal-length representation.
- Tripod and camera positioning rig.
- Human portrait subject with neutral pose and controllable focus target.
- Simple studio environment and background.
- Key/fill/rim light fixtures and at least two modifiers.
- Floor, backdrop and calibration objects/materials.

## Licensing gate
Do not use a model just because it is downloadable or visible in a preview. Verify the exact asset's license and attribution requirements from its source page and retain evidence. Avoid NC, editorial-only, unclear, or incompatible licenses. For CC BY/CC BY-SA, document attribution and share-alike obligations and obtain a deliberate approval before inclusion. Prefer CC0, public-domain or clearly permissive commercial licenses when quality is comparable.

## Technical validation
Record polygon count, material count, texture dimensions/formats, file size, scale, forward axis, origin/pivot, LOD availability, compression, mobile test result and visual QA result. Optimise only after retaining source provenance. Never overwrite the source asset.

## Candidate shortlist (not yet production-approved)
| Need | Candidate/source | License evidence | Decision |
|---|---|---|---|
| Camera body | [Prism Frame DSLR Camera — Innerscene](https://www.innerscene.com/tools/library/3d-parts/prism-frame-dslr-camera-8e3035ed) | Search-indexed source listing identifies original model as CC0, GLB, ~310 KB and ~11k triangles | Strong first candidate; download, inspect mesh/materials/pivots and retain source evidence before approval |
| Alternate camera body | [Camera GLB — Grab3D](https://grab3d.com/models/electronics/camera/) | Listing identifies CC0, GLB, 18,428 triangles, 2K textures, ~1.4 MB | Backup candidate; compare visual fidelity and geometry before choosing |
| Studio HDRI / environment | [Poly Haven](https://polyhaven.com/) | Official license page states all HDRIs, textures and models are CC0 and usable commercially without attribution | Preferred source for HDRI and environment assets |
| PBR surface materials | [ambientCG](https://ambientcg.com/) | Publisher listing identifies CC0-1.0 | Preferred source for floor, wall, backdrop and material maps; verify each asset page |
| Modular utility props | [Kenney](https://kenney.nl/assets) | Official support page states game assets are public domain CC0, including commercial use | Use only where the stylised look fits; not for hero camera/optical hardware |

## Status
This is a researched shortlist, not a blanket approval of every asset on these sites. The camera candidates require an actual download and technical inspection before production use. For each selected file, capture the exact asset page, license text, download URL, retrieval date, file hash, polygon/material/texture metrics, scale, pivots and mobile render result. Poly Haven's official license page is https://polyhaven.com/license. Do not reuse source-site preview renders as product content unless separately licensed.

If a hero camera model does not meet the realism and interaction requirements, use a permissively licensed base model only as a visual placeholder and plan an original camera/lens assembly rather than compromising the simulator.
