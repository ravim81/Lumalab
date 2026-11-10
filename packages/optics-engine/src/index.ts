import { assertFinitePositive, assertFocusBeyondFocalLength } from "./validation.js";
export interface SensorDimensions { widthMm: number; heightMm: number }
export interface DepthOfFieldInput { focalLengthMm: number; fNumber: number; focusDistanceMm: number; circleOfConfusionMm: number }
export interface DepthOfFieldResult { hyperfocalDistanceMm: number; nearLimitMm: number; farLimitMm: number; totalDepthMm: number; farLimitIsInfinity: boolean }
export interface ExposureInput { fNumber: number; shutterSeconds: number; iso: number }
export interface ExposureResult { ev100: number; sceneEv: number }

function diagonal(sensor: SensorDimensions): number {
  assertFinitePositive("sensor.widthMm", sensor.widthMm);
  assertFinitePositive("sensor.heightMm", sensor.heightMm);
  return Math.hypot(sensor.widthMm, sensor.heightMm);
}
export function calculateFieldOfView(sensor: SensorDimensions, focalLengthMm: number) {
  const d = diagonal(sensor); assertFinitePositive("focalLengthMm", focalLengthMm);
  const deg = (r: number) => r * 180 / Math.PI;
  return {
    horizontalDegrees: deg(2 * Math.atan(sensor.widthMm / (2 * focalLengthMm))),
    verticalDegrees: deg(2 * Math.atan(sensor.heightMm / (2 * focalLengthMm))),
    diagonalDegrees: deg(2 * Math.atan(d / (2 * focalLengthMm)))
  };
}
export function calculateCropFactor(sensor: SensorDimensions, referenceSensor: SensorDimensions = { widthMm: 36, heightMm: 24 }): number {
  return diagonal(referenceSensor) / diagonal(sensor);
}
export function calculateHyperfocalDistance(input: Pick<DepthOfFieldInput, "focalLengthMm" | "fNumber" | "circleOfConfusionMm">): number {
  const { focalLengthMm: f, fNumber: n, circleOfConfusionMm: c } = input;
  assertFinitePositive("focalLengthMm", f); assertFinitePositive("fNumber", n); assertFinitePositive("circleOfConfusionMm", c);
  return f * f / (n * c) + f;
}
export function calculateDepthOfField(input: DepthOfFieldInput): DepthOfFieldResult {
  const { focalLengthMm: f, fNumber: n, focusDistanceMm: s, circleOfConfusionMm: c } = input;
  assertFocusBeyondFocalLength(s, f); assertFinitePositive("fNumber", n); assertFinitePositive("circleOfConfusionMm", c);
  const h = calculateHyperfocalDistance(input), near = h * s / (h + (s - f)), denominator = h - (s - f);
  const infinity = denominator <= 0, far = infinity ? Number.POSITIVE_INFINITY : h * s / denominator;
  return { hyperfocalDistanceMm: h, nearLimitMm: near, farLimitMm: far, totalDepthMm: infinity ? Infinity : far - near, farLimitIsInfinity: infinity };
}
export function calculateEntrancePupilDiameter(focalLengthMm: number, fNumber: number): number {
  assertFinitePositive("focalLengthMm", focalLengthMm); assertFinitePositive("fNumber", fNumber); return focalLengthMm / fNumber;
}
export function calculateExposure(input: ExposureInput): ExposureResult {
  const { fNumber, shutterSeconds, iso } = input;
  assertFinitePositive("fNumber", fNumber); assertFinitePositive("shutterSeconds", shutterSeconds); assertFinitePositive("iso", iso);
  const ev100 = Math.log2(fNumber * fNumber / shutterSeconds);
  return { ev100, sceneEv: ev100 - Math.log2(iso / 100) };
}
export function calculateExposureCompensationStops(reference: ExposureInput, candidate: ExposureInput): number {
  return calculateExposure(reference).sceneEv - calculateExposure(candidate).sceneEv;
}
