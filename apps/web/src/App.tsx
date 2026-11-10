import { useMemo, useState } from "react";
import { calculateDepthOfField, calculateExposure, calculateFieldOfView, calculateEntrancePupilDiameter } from "@lumalab/optics-engine";

type FieldProps = { label: string; value: number; unit: string; min?: number; step?: number | "any"; onChange: (value: number) => void };
function Field({label,value,unit,min=0.001,step="any",onChange}:FieldProps) {
 return <label className="field"><span>{label}</span><div className="input-wrap"><input type="number" min={min} step={step} value={value} onChange={e=>onChange(Number(e.target.value))}/><small>{unit}</small></div></label>;
}
function Metric({label,value}:{label:string;value:string}) { return <div className="metric"><span>{label}</span><strong>{value}</strong></div>; }
const sensor={widthMm:36,heightMm:24};
export default function App() {
 const [focal,setFocal]=useState(50),[aperture,setAperture]=useState(2.8),[focus,setFocus]=useState(3000),[coc,setCoc]=useState(0.03),[shutter,setShutter]=useState(1/125),[iso,setIso]=useState(100);
 const data=useMemo(()=>{try{return {error:"",fov:calculateFieldOfView(sensor,focal),dof:calculateDepthOfField({focalLengthMm:focal,fNumber:aperture,focusDistanceMm:focus,circleOfConfusionMm:coc}),ev:calculateExposure({fNumber:aperture,shutterSeconds:shutter,iso}),pupil:calculateEntrancePupilDiameter(focal,aperture)}}catch(e){return {error:e instanceof Error?e.message:"Invalid input"}}},[focal,aperture,focus,coc,shutter,iso]);
 const fmt=(n:number,d=2)=>Number.isFinite(n)?n.toLocaleString(undefined,{maximumFractionDigits:d}):"∞";
 return <main className="page">
  <header><a className="brand" href="#"><span>◉</span> LUMALAB</a><span className="mono muted">OPTICAL FOUNDATION / 01</span><span className="online"><i/> ENGINE ONLINE</span></header>
  <section className="intro"><p className="mono blue">UNDERSTAND LIGHT. MASTER THE IMAGE.</p><h1>See the physics<br/><em>behind the frame.</em></h1><p className="lede">A precision workspace for exploring focal length, focus and exposure. Change a camera setting and watch the optical model respond.</p></section>
  <section className="layout">
   <aside className="panel controls"><div className="section-head"><div><small>01 / CAMERA</small><h2>Optical setup</h2></div><b>FULL FRAME</b></div>
    <Field label="Focal length" value={focal} unit="mm" min={1} step={1} onChange={setFocal}/>
    <Field label="Aperture" value={aperture} unit="f /" min={0.7} step={0.1} onChange={setAperture}/>
    <Field label="Focus distance" value={focus} unit="mm" min={1} step={50} onChange={setFocus}/>
    <Field label="Circle of confusion" value={coc} unit="mm" min={0.001} step={0.005} onChange={setCoc}/>
    <div className="line"/><small>02 / EXPOSURE</small>
    <Field label="Shutter time" value={shutter} unit="seconds" min={0.000001} step={0.001} onChange={setShutter}/>
    <Field label="ISO" value={iso} unit="ISO" min={1} step={50} onChange={setIso}/>
    <p className="note">Thin-lens model · 36 × 24 mm sensor. CoC is an explicit assumption, not a universal sharpness threshold.</p>
   </aside>
   <div className="results">{data.error?<div className="panel error" role="alert">{data.error}</div>:<>
    <section className="panel"><div className="section-head"><div><small>03 / FIELD OF VIEW</small><h2>Frame geometry</h2></div><b className="blue-tag">LIVE MODEL</b></div>
     <div className="frame-stage"><div className="frame"><span>36 × 24</span><strong>{fmt(data.fov!.horizontalDegrees,1)}°</strong></div><small>FULL-FRAME SENSOR / 50 MM REFERENCE</small></div>
     <div className="metrics three"><Metric label="Horizontal" value={fmt(data.fov!.horizontalDegrees)+"°"}/><Metric label="Vertical" value={fmt(data.fov!.verticalDegrees)+"°"}/><Metric label="Diagonal" value={fmt(data.fov!.diagonalDegrees)+"°"}/></div>
    </section>
    <section className="panel"><div className="section-head"><div><small>04 / FOCUS</small><h2>Depth of field</h2></div><b>THIN LENS</b></div>
     <div className="metrics four"><Metric label="Hyperfocal" value={fmt(data.dof!.hyperfocalDistanceMm/1000,2)+" m"}/><Metric label="Near limit" value={fmt(data.dof!.nearLimitMm/1000,3)+" m"}/><Metric label="Far limit" value={data.dof!.farLimitIsInfinity?"∞":fmt(data.dof!.farLimitMm/1000,3)+" m"}/><Metric label="Entrance pupil" value={fmt(data.pupil!,2)+" mm"}/></div>
     <div className="focus-line"><i/></div><p className="note">Calculated from focal length, f-number, focus distance and the selected CoC.</p>
    </section>
    <section className="panel"><div className="section-head"><div><small>05 / EXPOSURE</small><h2>Exposure value</h2></div><b className="amber-tag">EV100</b></div>
     <div className="metrics two"><Metric label="EV at ISO 100" value={fmt(data.ev!.ev100,3)}/><Metric label="Scene-equivalent EV" value={fmt(data.ev!.sceneEv,3)}/></div><p className="note">EV100 = log₂(N² / t). Scene-equivalent EV adjusts for ISO relative to ISO 100.</p>
    </section>
   </>}</div>
  </section>
  <footer><span>LUMALAB / OPTICS ENGINE 0.1</span><span>ANALYTICAL MODEL · NOT A PHYSICAL LENS RAY TRACE</span></footer>
 </main>;
}
