# Optical Reference — Analytical Model v1

## Conventions
Internal length unit: millimetres (mm). Shutter time: seconds. F-number and ISO: dimensionless/numeric. Angles: radians internally, degrees in UI. Convert at boundaries only. Reject non-finite values and physically invalid inputs.

## Field of view
For sensor dimension d and focal length f:
`FOV = 2 atan(d / (2f))`.
Calculate horizontal, vertical and diagonal FOV independently. Inputs d and f must use the same length unit.

## Crop factor
`cropFactor = referenceSensorDiagonal / sensorDiagonal`.
Document the reference format used (normally 36 × 24 mm full-frame diagonal).

## Hyperfocal distance and depth of field
With focal length f, f-number N, circle of confusion c, and focus distance s:
`H = f² / (N c) + f`
`Dnear = (H s) / (H + (s - f))`
`Dfar = (H s) / (H - (s - f))`, if denominator > 0; otherwise infinity.
The equations assume a conventional thin-lens approximation and a chosen acceptable circle of confusion. State the CoC policy and do not imply it is universal.

## Entrance pupil
Approximate entrance pupil diameter: `D = f / N`. This is a first-order geometric value; real lens pupil magnification and construction can affect effective behaviour.

## Exposure value
`EV100 = log2(N² / t)` for ISO 100.
Scene-equivalent EV: `EV = EV100 - log2(ISO / 100)`.
Exposure equivalence: one stop corresponds to a factor of two in exposure. Keep displayed shutter conventions separate from stored seconds.

## Magnification and macro
Thin-lens magnification may be derived from object/image distances or extension under stated assumptions. Macro extension and effective aperture must explicitly state assumptions about pupil magnification and lens design. Do not ship a simplified formula as universal.

## Diffraction
Airy disk diameter at image plane: `2.44 × λ × N` under the ideal circular-aperture approximation. State wavelength and output sampling assumptions. Diffraction is a later priority, not a Phase 1 blocker.

## Priority
P0: FOV, crop factor, hyperfocal/DoF, entrance pupil, EV/exposure equivalence.
P1: magnification, macro effective aperture, diffraction.
P2: distortion, chromatic aberration, focus breathing and lens-specific profiles.

## Known limitations
Analytical thin-lens DoF is not a ray-traced model of a real lens. Real results vary with lens construction, pupil magnification, focus breathing, wavelength, output size, viewing distance and acceptable sharpness criterion. Keep model assumptions visible in technical mode.
