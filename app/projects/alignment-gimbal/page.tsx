import type { Metadata } from 'next';
export const dynamic = 'force-static';
import Link from '../../site-link';
import { ArrowLeft, ArrowUpRight, Download } from 'lucide-react';
import { Header, Footer, Tags } from '../../shared';
export const metadata: Metadata = {
  title: 'Optical-Alignment Gimbal — Native CAD',
  description:
    'A manually adjusted FDM gimbal with documented native SOLIDWORKS assembly, mate, motion-sample, and STL verification.',
};
export default function Gimbal() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="case-hero wrap">
          <Link className="back-link" href="/#work">
            <ArrowLeft size={15} /> Selected work
          </Link>
          <div className="eyebrow">
            02 / MECHANISM DESIGN & MANUFACTURABILITY
          </div>
          <h1>Optical-alignment gimbal</h1>
          <p className="case-deck">
            A small mechanism with a complete assembly story: adjustable axes,
            printable parts, and checks that survive reopening the model.
          </p>
          <Tags
            items={[
              'SOLIDWORKS 2026',
              'PETG / FDM',
              'Assembly mates',
              'Technical documentation',
            ]}
          />
          <div className="case-meta">
            <span>PERSONAL PROJECT · SEPTEMBER 2026</span>
            <span>NATIVE CAD AUTOMATION</span>
            <span>FDM DESIGN STUDY</span>
          </div>
        </section>
        <figure className="case-banner gimbal-banner wrap">
          <img
            src="/images/gimbal.png"
            alt="Native two-axis gimbal assembly with clamp, adjustment hardware, and base"
            width="1600"
            height="1100"
          />
          <figcaption>
            Native SOLIDWORKS assembly. A manually adjusted optical fixture with
            built around accessible hardware.
          </figcaption>
        </figure>
        <div className="case-body wrap">
          <aside className="case-nav" aria-label="Case study sections">
            <a href="#brief">The design brief</a>
            <a href="#manufacturing">Assembly & printing</a>
            <a href="#verification">Native CAD checks</a>
            <a href="#evidence">Evidence</a>
          </aside>
          <div className="case-content">
            <section id="brief">
              <div className="eyebrow">THE DESIGN BRIEF</div>
              <h2>
                Make adjustment simple.
                <br />
                Make assembly inspectable.
              </h2>
              <p>
                This project explores a two-axis fixture for positioning an
                optical module. The assembly uses a printed base, yaw stage,
                pitch frame, and split clamp, with separate hardware and
                documented stops.
              </p>
              <p>
                The design intent is PETG FDM manufacture with accessible
                fasteners and configurable yaw and pitch positions. Native CAD
                generation used the SOLIDWORKS API, with
                separate verification of the saved assembly.
              </p>
              <div className="decision-grid">
                <div>
                  <h3>23 native parts</h3>
                  <p>
                    Editable SLDPRT files and 37 resolved component instances.
                  </p>
                </div>
                <div>
                  <h3>5 configurations</h3>
                  <p>
                    Neutral and endpoint poses saved in the native assembly.
                  </p>
                </div>
                <div>
                  <h3>8 printable meshes</h3>
                  <p>
                    Separate STL designs with recorded geometry-integrity
                    checks.
                  </p>
                </div>
              </div>
            </section>
            <section id="manufacturing">
              <div className="eyebrow">MANUFACTURABILITY</div>
              <h2>Design beyond the assembled view.</h2>
              <p>
                The split clamp, separated frame members, bushings, and
                adjustment hardware make the build sequence visible. An exploded
                configuration and basic assembly drawing support that sequence,
                while print and assumption records document the design inputs for the next iteration.
                
              </p>
              <figure className="data-figure">
                <a
                  href="/images/gimbal-exploded.png"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/gimbal-exploded.png"
                    alt="Exploded native CAD view showing the gimbal frame, clamp, base, and hardware separated for assembly"
                    loading="lazy"
                  />
                </a>
                <figcaption>
                  The native exploded view exposes part relationships and the
                  assembly sequence.
                </figcaption>
              </figure>
              <p>
                The documented nominal motion range is yaw −90° to +90° and
                pitch −20° to +45°. Stops and hardware are represented
                geometrically, providing a clear basis for checks of retention, contact loads, and
                tolerance behavior.
              </p>
            </section>
            <section id="verification">
              <div className="eyebrow">VERIFICATION</div>
              <h2>Check the file that will be used.</h2>
              <p>
                The final assembly was saved, fully closed, reopened, and
                rebuilt. All 37 component paths resolved, and all 23 part files
                contained one solid body. The 108 mates returned zero error
                codes and no warnings across all five configurations.
              </p>
              <div className="finding-panel">
                <strong>20</strong>
                <div>
                  <h3>Sampled yaw/pitch combinations</h3>
                  <p>
                    Native interference checks returned zero overlaps at the
                    recorded positions. The sampled positions provide a repeatable baseline for
                    the next motion study.
                  </p>
                </div>
              </div>
              <p>
                All eight STL meshes passed the recorded closed-edge,
                nonmanifold-edge, degenerate-triangle, and positive-volume
                checks. These checks document mesh integrity for fabrication preparation.
              </p>
              <div className="boundary-note">
                <h3>Next iteration</h3>
                <p>
                  The next iteration moves from CAD into fabrication. The fabrication study focuses on fit, stiffness,
                  creep, strength, payload capacity, angular repeatability, and
                  print performance. The PDF captures the assembly
                  definition and supports that build sequence.
                </p>
                <p>
                  The build sequence starts with a test print of the fits and moving
                  interfaces, followed by assembly and repeatability
                  measurements.
                </p>
              </div>
            </section>
            <section id="evidence">
              <div className="eyebrow">PROJECT RECORD</div>
              <h2>Inspect the documentation.</h2>
              <div className="download-list">
                <a
                  href="/evidence/gimbal-assembly.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    Assembly drawing
                    <small>
                      PDF · native drawing export
                      available
                    </small>
                  </span>
                  <ArrowUpRight size={18} />
                </a>
                <a href="/evidence/gimbal-motion-samples.csv" download>
                  <span>
                    Recorded motion samples
                    <small>CSV · measured poses and interference counts</small>
                  </span>
                  <Download size={18} />
                </a>
              </div>
            </section>
          </div>
        </div>
        <div className="next-project wrap">
          <span className="eyebrow">EXPLORE MORE</span>
          <Link href="/projects/cameraplane/">
            CameraPlane 1800 <ArrowUpRight size={30} />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
