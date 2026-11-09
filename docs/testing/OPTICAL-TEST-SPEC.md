# Optical Engine Test Specification

## Pure API
- calculateFieldOfView(sensorDimensionMm, focalLengthMm)
- calculateCropFactor(sensorWidthMm, sensorHeightMm, referenceWidthMm, referenceHeightMm)
- calculateHyperfocal(focalLengthMm, fNumber, circleOfConfusionMm)
- calculateDepthOfField(focalLengthMm, fNumber, focusDistanceMm, circleOfConfusionMm)
- calculateApertureDiameter(focalLengthMm, fNumber)
- calculateExposureValue(fNumber, shutterSeconds, iso)
- calculateMagnification(...)
- calculateDiffraction(...)

All functions are deterministic, pure, typed, unit-explicit and independent of UI/Three.js.

## Golden fixtures
1. DoF: f=50 mm, N=2.8, focus=3000 mm, CoC=0.03 mm. Expected hyperfocal ≈ 29,811.9047619 mm; near ≈ 2,729.869186 mm; far ≈ 3,329.462861 mm; total ≈ 599.593676 mm. Verify using an independent high-precision calculation before locking fixture constants.
2. FOV: sensor 36 × 24 mm, lens 50 mm. Expected horizontal ≈ 39.60°, vertical ≈ 26.99°, diagonal ≈ 46.79°.
3. Exposure: f/2.8, 1/125 s, ISO 100 gives EV100 ≈ 9.936637939 (≈ 9.94). Changing to 1/250 s at same aperture and ISO changes EV100 by +1 stop.

## Property tests
- Increasing f-number (smaller aperture) increases DoF for fixed scene inputs.
- Increasing CoC increases acceptable DoF.
- Shorter focal length widens FOV for a fixed sensor dimension.
- Larger sensor dimension widens FOV for fixed focal length.
- Higher f-number reduces entrance pupil diameter.
- Shorter shutter duration reduces captured exposure.
- Higher ISO changes the ISO-normalised scene EV according to the stated equation.
- Focus at/beyond hyperfocal yields an infinite far limit.
- Unit conversion round-trips within floating-point tolerance.

## Boundaries and validation
Reject zero/negative focal length, f-number, sensor dimensions, CoC, shutter time, ISO and focus distance; reject NaN and ±Infinity. Guard singularities and return an explicit infinity representation for far DoF, never a giant sentinel number. No invalid value may enter persisted experiment state.

## Tolerances and display
Analytical golden fixtures: relative error < 1e-6 before display rounding. Display formatting must never feed back into calculations. Error results must be structured and actionable. Test millimetre/metre conversion boundaries explicitly.

## Integration
Verify controls update the shared experiment model, derived readings update once, and a restored experiment produces identical calculated outputs. Verify optical package can be tested without mounting React or WebGL.
