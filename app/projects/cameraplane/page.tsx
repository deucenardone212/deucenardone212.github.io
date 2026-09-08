import type { Metadata } from 'next';
export const dynamic = 'force-static';
import Link from '../../site-link';
import { ArrowLeft, ArrowUpRight, Download } from 'lucide-react';
import { Header, Footer, Tags } from '../../shared';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from '@/components/ui/table';
export const metadata: Metadata = {
  title: 'CameraPlane 1800 — CAD & MATLAB CFD',
  description:
    'A 1.8 m camera-aircraft concept: native SOLIDWORKS geometry, interactive CAD, and evidence-bounded MATLAB/SU2 section analysis.',
};
export default function CameraPlane() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="case-hero wrap">
          <Link className="back-link" href="/#work">
            <ArrowLeft size={15} /> Selected work
          </Link>
          <div className="eyebrow">
            01 / AIRCRAFT DESIGN & COMPUTATIONAL ANALYSIS
          </div>
          <h1>CameraPlane 1800</h1>
          <p className="case-deck">
            Connecting a printable aircraft concept to the analysis that informs
            its next revision.
          </p>
          <Tags
            items={[
              'SOLIDWORKS',
              'MATLAB R2025b',
              'SU2 8.5.0',
              'Python / Gmsh',
              'Three.js',
            ]}
          />
          <div className="case-meta">
            <span>PERSONAL PROJECT · SEPTEMBER 2026</span>
            <span>AI-ASSISTED CAD AUTOMATION & ANALYSIS</span>
            <span>DESIGN / SIMULATION STAGE</span>
          </div>
        </section>
        <figure className="case-banner wrap">
          <img
            src="/images/cameraplane.png"
            alt="Rev E CameraPlane full-aircraft native SOLIDWORKS assembly"
            width="2000"
            height="1250"
          />
          <figcaption>
            Latest featured assembly: Rev E. The section CFD and interactive
            explorer below use the earlier, frozen Rev B geometry.
          </figcaption>
        </figure>
        <div className="case-body wrap">
          <aside className="case-nav" aria-label="Case study sections">
            <a href="#brief">The design problem</a>
            <a href="#assembly">Interactive assembly</a>
            <a href="#analysis">MATLAB & CFD</a>
            <a href="#decision">Design decision</a>
            <a href="#evidence">Evidence</a>
          </aside>
          <div className="case-content">
            <section id="brief">
              <div className="eyebrow">THE DESIGN PROBLEM</div>
              <h2>A small aircraft is a system of tradeoffs.</h2>
              <p>
                The objective was a modular camera aircraft that could be
                manufactured in printed sections while accommodating a Raspberry
                Pi 5, camera, battery, and flight hardware. The configuration
                uses a 1.8 m wing and twin tail booms, keeping the forward
                camera view clear in a pusher layout.
              </p>
              <p>
                The project combines native SOLIDWORKS assemblies, exported
                geometry, mass and packaging estimates, and a separate
                aerodynamic screening study. CAD automation and analysis code
                were developed with AI assistance; model checks and simulation
                limits are part of the project record.
              </p>
              <div className="decision-grid">
                <div>
                  <h3>Packaging</h3>
                  <p>
                    Accommodate camera and electronics envelopes while retaining
                    an inspectable assembly and modular parts.
                  </p>
                </div>
                <div>
                  <h3>Manufacturing</h3>
                  <p>
                    Track print orientation, closed meshes, and build-volume fit
                    rather than treating an STL export as proof of print
                    success.
                  </p>
                </div>
                <div>
                  <h3>Analysis</h3>
                  <p>
                    Use the exported airfoil contour and a frozen revision so
                    aerodynamic comparisons remain tied to a specific design.
                  </p>
                </div>
              </div>
            </section>
            <section id="assembly">
              <div className="eyebrow">INSPECT THE GEOMETRY</div>
              <h2>Take the assembly apart.</h2>
              <p>
                This explorer contains 66 placed components from 24 unique
                printable meshes in the Rev B CAD snapshot. Orbit the aircraft,
                select a part, or use the exploded view to inspect the
                packaging.
              </p>
              <div className="explorer-frame">
                <iframe
                  src="/explorer/"
                  title="Interactive CameraPlane Rev B CAD assembly"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
              <a
                className="text-link"
                href="/explorer/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open the full-screen explorer <ArrowUpRight size={17} />
              </a>
              <p className="small-note">
                The interactive model is Rev B. It is a geometry viewer; it does
                not simulate structural loads or flight.
              </p>
            </section>
            <section id="analysis">
              <div className="eyebrow">
                MATLAB & COMPUTATIONAL FLUID DYNAMICS
              </div>
              <h2>Start with the actual wing.</h2>
              <p>
                The CFD study cut a section from the frozen Rev B STL at local Y
                = 45 mm. It retained the polygonal exported contour, finite
                trailing edge, and native 2 mm wing-to-aileron gap. An idealized
                replacement airfoil would have removed the very details the
                study was intended to evaluate.
              </p>
              <div className="workflow-strip">
                <div>
                  <span>01</span>
                  <b>CAD contour</b>
                  <small>Frozen Rev B STL</small>
                </div>
                <div>
                  <span>02</span>
                  <b>Mesh preparation</b>
                  <small>Python / Gmsh</small>
                </div>
                <div>
                  <span>03</span>
                  <b>Flow solution</b>
                  <small>MATLAB → SU2</small>
                </div>
                <div>
                  <span>04</span>
                  <b>Comparison</b>
                  <small>Saved fields & histories</small>
                </div>
              </div>
              <p>
                MATLAB R2025b orchestrated the SU2 8.5.0 finite-volume solver
                and generated the figures from saved data. Eleven accepted
                section cases explored hinge treatments and mesh refinement
                using steady incompressible RANS with the fully turbulent SST
                model.
              </p>
              <figure className="data-figure">
                <a
                  href="/images/wing-flow.png"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/wing-flow.png"
                    alt="Computed velocity field around the exported wing section, with labeled simulation conditions"
                    loading="lazy"
                  />
                </a>
                <figcaption>
                  Original result figure from the MATLAB/SU2 study. Select any
                  analysis figure to view it at full resolution.
                </figcaption>
              </figure>
              <h3>Compare at stated conditions.</h3>
              <p>
                At 15 m/s and 4° angle of attack, the L3 results favor closing
                the upper hinge opening. These are section coefficients,
                referenced to a 0.2 m chord and unit span.
              </p>
              <Table className="evidence-table">
                <TableCaption>
                  Last-200-iteration means. Native open-hinge values use the
                  extended run; the upper-film case uses the repaired mesh.
                </TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Section treatment</TableHead>
                    <TableHead>
                      Lift c<sub>l</sub>
                    </TableHead>
                    <TableHead>
                      Drag c<sub>d</sub>
                    </TableHead>
                    <TableHead>
                      c<sub>l</sub> / c<sub>d</sub>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Native open hinge</TableCell>
                    <TableCell>0.5479</TableCell>
                    <TableCell>0.02728</TableCell>
                    <TableCell>20.08</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>0.1 mm upper film</TableCell>
                    <TableCell>0.6346</TableCell>
                    <TableCell>0.02378</TableCell>
                    <TableCell>26.69</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Ideal fully sealed hinge</TableCell>
                    <TableCell>0.6402</TableCell>
                    <TableCell>0.02319</TableCell>
                    <TableCell>27.61</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <figure className="data-figure">
                <a
                  href="/images/hinge-gap.png"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/hinge-gap.png"
                    alt="Side-by-side section CFD: native 2 mm open hinge and 0.1 mm upper film, showing speed through and around the gap"
                    loading="lazy"
                  />
                </a>
                <figcaption>
                  Computed flow near the native hinge and the upper-film
                  concept. Static neutral-surface geometry, 15 m/s, 4°, L3 mesh.
                </figcaption>
              </figure>
            </section>
            <section id="decision">
              <div className="eyebrow">THE DESIGN DECISION</div>
              <h2>Prototype the reversible change.</h2>
              <p>
                The useful outcome is a removable upper aileron gap-seal trial,
                with full control travel preserved. It is a low-commitment way
                to investigate the direction suggested by the computed flow
                without locking the aileron shut or immediately redesigning the
                trailing edge.
              </p>
              <div className="finding-panel">
                <strong>17.1%</strong>
                <div>
                  <h3>Provisional section-drag difference</h3>
                  <p>
                    Interpolating the film&apos;s 3° and 4° simulations to match
                    the open-hinge lift gives approximately c<sub>d</sub> =
                    0.02262 versus 0.02728. This is an interpolated
                    comparison—not a newly simulated point or a measured
                    aircraft improvement.
                  </p>
                </div>
              </div>
              <h3>What makes the conclusion provisional?</h3>
              <p>
                The native inner-wing drag coefficient changes by 14.2% from the
                L3 to L4 mesh. Printed roughness, transition, moving control
                surfaces, and spanwise flow were not resolved. The result
                supports a prototype direction; it does not establish a
                mesh-independent drag value.
              </p>
              <figure className="data-figure">
                <a
                  href="/images/numerical-checks.png"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/numerical-checks.png"
                    alt="Original plots of mesh sensitivity and provisional section-design comparisons"
                    loading="lazy"
                  />
                </a>
                <figcaption>
                  Refinement sensitivity is reported alongside the design
                  comparisons.
                </figcaption>
              </figure>
              <div className="boundary-note">
                <h3>Current validation boundary</h3>
                <p>
                  No valid full-aircraft 3D CFD solution was completed: meshes
                  containing degenerate cells were rejected. Total-aircraft
                  drag, optimum cruise speed, endurance, structural strength,
                  and flight performance remain unvalidated.
                </p>
                <p>
                  The next steps are a physical seal-fit check, measured mass
                  and balance, a valid assembled-aircraft fluid mesh, and
                  controlled testing.
                </p>
              </div>
            </section>
            <section id="evidence">
              <div className="eyebrow">TRACEABILITY</div>
              <h2>A result worth checking.</h2>
              <p>
                The saved-case replay was executed for the repaired-film 3° case
                over 1,200 iterations. Both lift and drag histories matched the
                original values within 10⁻⁸. Reproducibility of a calculation is
                distinct from agreement with a physical experiment.
              </p>
              <div className="download-list">
                <a href="/evidence/cfd-section-summary.csv" download>
                  <span>
                    Accepted section results
                    <small>CSV · coefficients and numerical checks</small>
                  </span>
                  <Download size={18} />
                </a>
                <a href="/evidence/replay-check.json" download>
                  <span>
                    Recorded replay verification
                    <small>JSON · saved-case history comparison</small>
                  </span>
                  <Download size={18} />
                </a>
                <a href="/evidence/matlab/replay_saved_case.m" download>
                  <span>
                    MATLAB replay source
                    <small>
                      M-file · requires original case folders and SU2 8.5.0
                    </small>
                  </span>
                  <Download size={18} />
                </a>
                <a href="/evidence/matlab/run_case.m" download>
                  <span>
                    MATLAB solver orchestration
                    <small>
                      M-file · source excerpt from the analysis package
                    </small>
                  </span>
                  <Download size={18} />
                </a>
              </div>
              <p className="small-note">
                Source files are provided for inspection. The complete solver,
                mesh, and result directories are not bundled with this
                portfolio.
              </p>
            </section>
          </div>
        </div>
        <div className="next-project wrap">
          <span className="eyebrow">NEXT PROJECT</span>
          <Link href="/projects/alignment-gimbal/">
            Optical-alignment gimbal <ArrowUpRight size={30} />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
