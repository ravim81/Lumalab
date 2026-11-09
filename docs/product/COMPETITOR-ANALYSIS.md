# Competitor and Adjacent Product Review

Research snapshot: 9 November 2026. Feature descriptions below reflect publicly accessible product pages and may change. Pricing is included only where an official source states it; do not infer a competitor's pricing from a third-party directory.

## Direct and adjacent products

| Product | Strongest public capabilities | Positioning / caveats | Opportunity for LumaLab |
|---|---|---|---|
| [Focal Lab](https://focallab.net/) | Interactive lens/DoF scene; sensor format, focal length, aperture, subject and background distance; FOV and focus-range readouts | Focused optical learning tool | Extend into full camera operation, lighting, capture, saved experiments and guided pathways |
| [CamSim](https://camsim.damoat.com/console/) | Browser simulator with 37 bodies, 142 lenses, HDR panorama locations, exposure modes, AF, stabilisation, ND filters, flash, bokeh, motion blur, sensor noise, histogram and shot metadata | Strongest direct benchmark; desktop WebGL2 requirement is stated; browser-local settings | Differentiate through a movable 3D studio, editable lighting/set, mobile-first interaction, technical explanations and unified learning |
| [CameraSim Pro](https://www.camerasim.com/camerasim-pro) | 3D DSLR learning simulator: aperture, shutter, ISO, focal length, motion blur, tripod, focus, exposure modes, flash, composition and lighting | Official page says it is no longer in active development; Windows product listed at $29 on the page reviewed | Modern browser-first platform, broader device support and active modular expansion |
| [Amin-HP Camera Simulator](https://github.com/Amin-HP/camera-simulator) | Open-source browser simulator with simple/advanced modes, exposure triangle, focus, sensor size, white balance, histogram, DoF map, snapshots and explanatory overlays | Useful feature and implementation benchmark; inspect repository license and code before reusing anything | Deliver more immersive 3D spatial control and a richer creative workflow |
| [Lumen Tool](https://lumentool.com/) | 3D portrait lighting set builder, rooms, lights/modifiers, camera/lens preview and printable setup | Specialised portrait-lighting tool; beta/membership terms can change | Combine its spatial lighting workflow with a full optics/camera simulator |
| [LightKit Pro](https://lightkitpro.com/) | Virtual studio equipment, live lighting, photographic preview and selected-light properties | Desktop Windows/macOS product; site describes lighting as estimated for planning | Browser-based unified experience and a connected learning/optics layer |
| [Orby](https://orby.studio/) | Browser 3D model studio with lighting, grading, real-time material controls, lens effects and multiple model formats | General 3D product visualisation rather than photography education | Camera/scene simulation with physical camera parameters and reproducible photographic results |
| [Picture Anatomy](https://pictureanatomy.com/) | Multiple camera, lens and light simulators; bring-your-own-image workflow; local browser processing | Modular educational simulators, not one continuous 3D studio | One shared experiment state across optics, exposure, lighting and capture |

## Strategic findings
1. The category is not empty. CamSim already has a broad and sophisticated camera simulation feature set; LumaLab must not claim to be the first or only realistic browser camera simulator.
2. Lens-focused simulators are good at explaining focal length, framing, sensor format and depth of field. LumaLab should make these controls tangible in a spatial 3D environment, while preserving an accurate technical panel.
3. Lighting simulators demonstrate the value of physically arranging stands, modifiers and subjects. This is a major opportunity, but lighting accuracy must be labelled and validated rather than implied by photorealistic rendering.
4. CameraSim Pro is an established teaching reference but its official product page says active development has stopped. This supports a modern cross-device alternative, not a claim that the product is obsolete.
5. General 3D studios offer excellent rendering and grading but do not necessarily model camera exposure and optical outcomes as a coherent learning system.

## Recommended differentiation
- One persistent experiment state shared by camera, optics, exposure, lighting and capture.
- Two-camera mental model in the UI: editor/view camera versus simulated camera.
- Physical controls represented spatially in 3D, with exact numeric controls alongside them.
- Capture results explain what changed and why; compare mode links a photograph to its parameter state.
- Progressive fidelity: analytically accurate P0 optics first; more complex sensor/lens effects added only with reference tests.
- Designed for touch as well as desktop, with automatic performance adaptation.
- Scenario-based creative practice, not only sliders and static diagrams.

## Risks and responses
- **Scope explosion:** sequence the modules; ship optics/exposure foundation before a full lighting engine.
- **False realism:** clearly separate analytical, approximate and measured/asset-specific models.
- **Performance:** one high-quality scene first; lazy-load assets and tune for low/mid devices.
- **Asset rights:** maintain per-file license evidence; do not copy models, code, screenshots or brand assets from competitor products.
- **Brand collision:** LumaLab remains a working name until formal name/domain/trademark checks.

## Sources reviewed
- Focal Lab: https://focallab.net/
- CamSim: https://camsim.damoat.com/console/
- CameraSim Pro: https://www.camerasim.com/camerasim-pro
- Amin-HP Camera Simulator: https://github.com/Amin-HP/camera-simulator
- Lumen Tool: https://lumentool.com/
- LightKit Pro: https://lightkitpro.com/
- Orby: https://orby.studio/
- Picture Anatomy: https://pictureanatomy.com/
