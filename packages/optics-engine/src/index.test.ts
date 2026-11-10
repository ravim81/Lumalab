import { describe, expect, it } from "vitest";
import { calculateCropFactor, calculateDepthOfField, calculateEntrancePupilDiameter, calculateExposure, calculateExposureCompensationStops, calculateFieldOfView, calculateHyperfocalDistance } from "./index.js";
describe("field of view", () => {
 it("matches full-frame 50mm reference", () => { const r=calculateFieldOfView({widthMm:36,heightMm:24},50); expect(r.horizontalDegrees).toBeCloseTo(39.5978,3); expect(r.verticalDegrees).toBeCloseTo(26.9915,3); expect(r.diagonalDegrees).toBeCloseTo(46.793,2); });
 it("widens as focal length decreases", () => { const s={widthMm:36,heightMm:24}; expect(calculateFieldOfView(s,24).horizontalDegrees).toBeGreaterThan(calculateFieldOfView(s,50).horizontalDegrees); });
});
describe("sensor format",()=>{it("returns one for full-frame reference",()=>expect(calculateCropFactor({widthMm:36,heightMm:24})).toBe(1));});
describe("depth of field",()=>{
 const input={focalLengthMm:50,fNumber:2.8,focusDistanceMm:3000,circleOfConfusionMm:0.03};
 it("matches the golden thin-lens fixture",()=>{const r=calculateDepthOfField(input);expect(r.hyperfocalDistanceMm).toBeCloseTo(29811.9047619,6);expect(r.nearLimitMm).toBeCloseTo(2729.869186,5);expect(r.farLimitMm).toBeCloseTo(3329.462861,5);expect(r.totalDepthMm).toBeCloseTo(599.593676,5);});
 it("uses explicit infinity at hyperfocal focus",()=>{const h=calculateHyperfocalDistance(input);const r=calculateDepthOfField({...input,focusDistanceMm:h+input.focalLengthMm});expect(r.farLimitIsInfinity).toBe(true);expect(r.farLimitMm).toBe(Infinity);});
 it("rejects focus at focal length",()=>expect(()=>calculateDepthOfField({...input,focusDistanceMm:50})).toThrow(RangeError));
 it("increases DoF when stopped down",()=>expect(calculateDepthOfField({...input,fNumber:8}).totalDepthMm).toBeGreaterThan(calculateDepthOfField(input).totalDepthMm));
});
describe("exposure",()=>{
 it("matches corrected EV100",()=>expect(calculateExposure({fNumber:2.8,shutterSeconds:1/125,iso:100}).ev100).toBeCloseTo(9.936637939,8));
 it("adjusts scene EV by one stop at double ISO",()=>{const a=calculateExposure({fNumber:4,shutterSeconds:1/125,iso:100}),b=calculateExposure({fNumber:4,shutterSeconds:1/125,iso:200});expect(b.sceneEv).toBeCloseTo(a.sceneEv-1,10);});
 it("recognizes equivalent exposures",()=>{const a={fNumber:2,shutterSeconds:1/125,iso:100},b={fNumber:4,shutterSeconds:1/31.25,iso:100};expect(calculateExposureCompensationStops(a,b)).toBeCloseTo(0,2);});
});
describe("entrance pupil and validation",()=>{
 it("calculates pupil diameter",()=>expect(calculateEntrancePupilDiameter(50,2)).toBe(25));
 it("rejects invalid physical inputs",()=>{expect(()=>calculateFieldOfView({widthMm:36,heightMm:24},0)).toThrow(RangeError);expect(()=>calculateCropFactor({widthMm:NaN,heightMm:24})).toThrow(RangeError);expect(()=>calculateEntrancePupilDiameter(50,Infinity)).toThrow(RangeError);expect(()=>calculateExposure({fNumber:2,shutterSeconds:0,iso:100})).toThrow(RangeError);});
});
