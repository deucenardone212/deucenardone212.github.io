# Content sources and scope

Selected on September 8, 2026, using three Luna research subagents to review prior engineering tasks and local project deliverables.

| Portfolio content                             | Source artifact                                                         | Scope                                                            |
| --------------------------------------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Name, degree, graduation, experience, contact | CHA Consulting Early Career Mechanical Engineer Resume, August 27, 2026 | Current available application resume; no phone/address published |
| CSWA credential                               | Tangix exam result: PASSED THIS EXAM                                    | Result verified locally; raw account record not published        |
| CameraPlane hero                              | CameraPlane_1800_RevE_Full_Aircraft / Full_Aircraft.png                 | Native CAD snapshot, not flight-tested hardware                  |
| Interactive CAD                               | cameraplane-explorer.html, September 7, 2026                            | Rev B; 66 instances, 24 unique meshes                            |
| CFD claims and plots                          | CameraPlane_CFD / REPORT.md and results                                 | Accepted final Rev B study; earlier Rev A results excluded       |
| CFD numerical data                            | section_summary.csv                                                     | Section values and recorded numerical checks                     |
| Replay evidence                               | replay_check.json                                                       | Repaired-film 3-degree case; 1,200 iterations                    |
| MATLAB code                                   | run_case.m, replay_saved_case.m                                         | Original source, requires unbundled solver/case inputs           |
| Gimbal claims                                 | VALIDATION.md, September 6, 2026                                        | Native saved/reopened CAD and mesh verification                  |
| Gimbal images/drawing                         | Assembly_View.png, Exploded_View.png, Alignment_Gimbal_Assembly.pdf     | Original native SOLIDWORKS exports                               |
| Gimbal motion samples                         | motion_samples.csv                                                      | 20 discrete positions, not continuous swept volume               |

Professional experience summaries use the resume's factual record. The site does not redistribute employer reports, designs, raw records, or internal tools.

## Revision and validation distinctions

The Rev E render, Rev B explorer, and final Rev B section CFD are separate snapshots and are labeled accordingly. A replay match verifies reproducibility of the saved computation; it does not validate the turbulence model against an experiment. Section-level improvement estimates are provisional and cannot be applied to the complete aircraft.

The gimbal is an unbuilt prototype. All physical performance and manufacturing claims remain subject to prototype testing.

## Third-party code

The 3D explorer includes Three.js 0.128.0. Its MIT license is retained at `public/vendor/LICENSE`. Framework and component package licenses remain with their respective dependencies.
