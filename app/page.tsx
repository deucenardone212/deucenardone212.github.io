import Link from './site-link';
import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react';
import { Header, Footer, Tags } from './shared';
export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="hero wrap">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              VIRGINIA TECH · MECHANICAL ENGINEERING
            </div>
            <h1>
              Mechanical design.
              <br />
              <em>
                Grounded
                <br />
                in analysis.
              </em>
            </h1>
            <p className="hero-description">
              I&apos;m Thomas Nardone, a mechanical engineering senior
              interested in turning complex requirements into practical
              designs—and understanding how they perform.
            </p>
            <a className="text-link" href="#work">
              Explore my work <ArrowDown size={18} />
            </a>
          </div>
          <Link
            href="/projects/cameraplane/"
            className="hero-figure"
            aria-label="Explore the CameraPlane aircraft project"
          >
            <img
              src="/images/cameraplane.png"
              alt="SOLIDWORKS model of CameraPlane with a long-span wing, camera fuselage, and twin-boom tail"
              width="2000"
              height="1250"
              fetchPriority="high"
            />
            <div className="figure-label">
              <span>
                <b>CAMERAPLANE 1800</b>
                <small>Rev E · Native SOLIDWORKS assembly</small>
              </span>
              <ArrowUpRight size={24} />
            </div>
          </Link>
        </section>
        <div className="credential-bar wrap">
          <span>
            BS MECHANICAL ENGINEERING<strong>May 2027</strong>
          </span>
          <span>
            VIRGINIA TECH<strong>Senior</strong>
          </span>
          <span>
            SOLIDWORKS<strong>CSWA certified</strong>
          </span>
        </div>
        <section id="work" className="work-section wrap">
          <div className="section-top">
            <h2>Selected engineering work</h2>
            <span className="mono">01—02 / PROJECTS</span>
          </div>
          <article className="feature-story">
            <div>
              <div className="eyebrow">
                01 / AIRCRAFT DESIGN & COMPUTATIONAL ANALYSIS
              </div>
              <h3>CameraPlane 1800</h3>
              <p className="project-lead">
                A printable airframe.
                <br />A traceable analysis workflow.
              </p>
              <p>
                Connecting native CAD, onboard camera packaging, and
                MATLAB-driven aerodynamic screening in a 1.8 m twin-boom
                aircraft concept.
              </p>
              <Tags
                items={['SOLIDWORKS', 'MATLAB', 'SU2 CFD', 'Design for FDM']}
              />
              <Link className="button primary" href="/projects/cameraplane/">
                Read the case study <ArrowUpRight size={18} />
              </Link>
            </div>
            <div className="feature-aside">
              <div className="metric">
                <strong>
                  1.8<span>m</span>
                </strong>
                <p>Nominal wingspan</p>
              </div>
              <div className="metric">
                <strong>11</strong>
                <p>Accepted section CFD cases</p>
              </div>
              <div className="metric">
                <strong>66</strong>
                <p>Components in the Rev B 3D explorer</p>
              </div>
              <a
                className="text-link"
                href="/explorer/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore the assembly in 3D <ArrowUpRight size={17} />
              </a>
            </div>
          </article>
          <article className="secondary-project">
            <Link
              className="secondary-image"
              href="/projects/alignment-gimbal/"
              aria-label="Read the optical alignment gimbal case study"
            >
              <img
                src="/images/gimbal.png"
                alt="Two-axis optical alignment gimbal with a blue frame and an orange split clamp"
                width="1600"
                height="1100"
                loading="lazy"
              />
            </Link>
            <div className="secondary-copy">
              <div className="eyebrow">
                02 / MECHANISM DESIGN & MANUFACTURABILITY
              </div>
              <h3>
                Precision starts
                <br />
                with the assembly.
              </h3>
              <p>
                A manually adjusted optical-alignment gimbal, designed around
                PETG printing, accessible hardware, and documented assembly
                checks.
              </p>
              <Tags
                items={['SOLIDWORKS', 'Mechanism design', 'CAD verification']}
              />
              <Link className="text-link" href="/projects/alignment-gimbal/">
                Explore the gimbal <ArrowUpRight size={18} />
              </Link>
            </div>
          </article>
        </section>
        <section id="experience" className="experience-section">
          <div className="wrap experience-grid">
            <div className="section-heading">
              <div className="eyebrow">BEYOND THE CAD MODEL</div>
              <h2>
                Engineering
                <br />
                in practice.
              </h2>
              <p>
                Hands-on experience with equipment qualification, mechanical
                testing, and the data that supports a design decision.
              </p>
            </div>
            <div className="experience-list">
              <article>
                <div className="experience-title">
                  <h3>Zoetis</h3>
                  <span>SUMMER 2026</span>
                </div>
                <h4>R&D Pilot Laboratory Engineering Intern</h4>
                <p>
                  Implemented and qualified a pilot-scale powder compression
                  simulator, coordinated acceptance testing, and developed a
                  repeatable mechanical test method. Built an HTML
                  batch-planning tool and structured production records for
                  analysis.
                </p>
                <div className="experience-foot">
                  Equipment qualification · Test methods · Data workflows
                </div>
              </article>
              <article>
                <div className="experience-title">
                  <h3>Dignity Lifts</h3>
                  <span>SUMMER 2025</span>
                </div>
                <h4>Engineering Intern</h4>
                <p>
                  Built an Arduino data-acquisition system for lift reliability
                  testing. Applied repeated service loading, identified a
                  load-bearing bracket failure mode, and used SOLIDWORKS to
                  assess clearances and mechanical interfaces.
                </p>
                <div className="experience-foot">
                  Reliability testing · Arduino DAQ · Mechanical interfaces
                </div>
              </article>
              <article>
                <div className="experience-title">
                  <h3>The Diggeridoos</h3>
                  <span>VIRGINIA TECH</span>
                </div>
                <h4>Design Team · Not-a-Boring Competition</h4>
                <p>
                  Worked on a 12-person team that designed and fabricated a
                  competition-winning tunnel-boring device. Modified the tunnel
                  interface in SOLIDWORKS to integrate a string potentiometer
                  for displacement measurement.
                </p>
                <div className="experience-foot">
                  Team design · Fabrication · Instrumentation
                </div>
              </article>
            </div>
          </div>
        </section>
        <section id="about" className="about-section wrap">
          <div className="eyebrow">A LITTLE ABOUT ME</div>
          <div className="about-grid">
            <h2>
              Curious about the system.
              <br />
              <em>Careful with the details.</em>
            </h2>
            <div>
              <p>
                I&apos;m Thomas Michael Nardone II, a senior studying mechanical
                engineering at Virginia Tech, graduating in May 2027.
              </p>
              <p>
                My experience spans R&D equipment, mechanical reliability, CAD,
                and manufacturing. I&apos;m especially interested in projects
                where the geometry, the test setup, and the analysis have to
                work together.
              </p>
              <p>
                I&apos;m a Certified SOLIDWORKS Associate and an Eagle Scout. I
                bring the same combination of initiative and follow-through to
                individual projects and engineering teams.
              </p>
              <Tags
                items={[
                  'SOLIDWORKS / CSWA',
                  'MATLAB',
                  'Mechanical testing',
                  'Arduino',
                  'Excel',
                  'Technical documentation',
                ]}
              />
            </div>
          </div>
        </section>
        <section id="contact" className="contact-section">
          <div className="wrap">
            <div className="eyebrow">LET&apos;S TALK ENGINEERING</div>
            <div className="contact-row">
              <h2>
                Have a problem
                <br />
                worth working on?
              </h2>
              <div>
                <a className="contact-email" href="mailto:tmn123@vt.edu">
                  tmn123@vt.edu <Mail size={23} />
                </a>
                <a
                  className="text-link"
                  href="https://www.linkedin.com/in/thomas-michael-nardone-ii/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect on LinkedIn <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
