export function assertFinitePositive(name: string, value: number): void {
  if (!Number.isFinite(value) || value <= 0) throw new RangeError(`${name} must be finite and greater than zero.`);
}
export function assertFocusBeyondFocalLength(focusDistanceMm: number, focalLengthMm: number): void {
  assertFinitePositive("focusDistanceMm", focusDistanceMm);
  assertFinitePositive("focalLengthMm", focalLengthMm);
  if (focusDistanceMm <= focalLengthMm) throw new RangeError("Focus distance must exceed focal length for this thin-lens model.");
}
