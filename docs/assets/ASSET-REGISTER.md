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

## Status
No third-party asset is marked approved in this initial register. Each candidate must be researched and individually verified before being added to the production asset manifest. If no suitable permissively licensed asset exists, use a clearly documented replacement plan or commission/create an original asset.
