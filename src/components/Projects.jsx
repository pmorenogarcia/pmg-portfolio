import { useState } from 'react';
import { SectionHead } from '../ui/SectionHead';

function GlitchOverlay({ onDone }) {
  return (
    <div
      className="glitch-overlay"
      onAnimationEnd={e => { if (e.animationName === 'glitch-exit') onDone(); }}
    >
      <div className="glitch-content">
        <div className="glitch-title" data-text="KRONNUS">KRONNUS</div>
        <div className="glitch-rule" />
        <div className="glitch-msg">be patient...</div>
        <div className="glitch-sig">▌ signal queued · 0x4B52</div>
      </div>
    </div>
  );
}

export function Projects() {
  const [glitch, setGlitch] = useState(false);

  return (
    <section id="projects" className="section projects">
      <SectionHead num="02 / WORK" title="3 projects" />

      <div className="stack reveal">

        <article className="pcard">
          <div className="stage photo">
            <img src="/handbike.jpg" alt="Electric handbike project" />
          </div>
          <div className="info">
            <div className="top">
              <span className="num">01</span>
              <span>Mechanical · Final degree project</span>
              <span className="badge">2023</span>
            </div>
            <h3>Attachable handbike — reinvented manufacturing, same performance.</h3>
            <p className="lede">
              Design of an attachable handbike reinventing the way it is manufactured
              to <b>reduce cost and maintain quality and performance</b>. Awarded{' '}
              <b>1st Prize for Best Final Degree Project (TFG)</b> in Industrial
              Engineering at <span style={{ color: 'var(--accent)' }}>UPC Manresa</span>.
            </p>
            <div className="chips">
              <span className="chip">SolidWorks</span>
              <span className="chip">FEM</span>
              <span className="chip">CAD-Adapt</span>
            </div>
          </div>
        </article>

        <article className="pcard mclub">
          <div className="stage">
            <div className="mlogo-wrap">
              <img src="/logo-motoclub-white.png" alt="Motoclub Sant Andreu de la Barca" />
            </div>
            <span className="msig">▌ MOTOCLUB · SAB</span>
          </div>
          <div className="info">
            <div className="top">
              <span className="num">02</span>
              <span>Web · Side project</span>
              <span className="badge live">Live</span>
            </div>
            <h3>Motoclub Sant Andreu — official club site.</h3>
            <p className="lede">
              I'm a <b>staff member</b> of Motoclub Sant Andreu de la Barca — the
              club that organises Catalan & national BMX Race / Downhill
              championships, plus vintage motor meets. I designed and built the
              site end-to-end: calendar, race info, multilingual content.
            </p>
            <div className="chips">
              <span className="chip">Next.js</span>
              <span className="chip">TypeScript</span>
              <span className="chip">Tailwind</span>
              <span className="chip">i18n</span>
            </div>
            <div className="links">
              <a href="https://www.motoclubsantandreu.com/" target="_blank" rel="noopener noreferrer">
                motoclubsantandreu.com →
              </a>
            </div>
          </div>
        </article>

        <article className="pcard kron">
          <div className="stage">
            <div className="klogo-wrap">
              <img src="/kronnus-logo.png" alt="Kronnus" />
            </div>
            <span className="ksig">▌ KRONNUS · 0x4B52</span>
          </div>
          <div className="info">
            <div className="top">
              <span className="num">03</span>
              <span>Mobile · Final degree project</span>
              <span className="badge coming">Incoming</span>
            </div>
            <h3>Kronnus — <span style={{ color: 'var(--accent)' }}>"Just in time."</span></h3>
            <p className="lede">
              A mobile app I'm building on the side. Coming soon — the rest stays
              under wraps until launch.
            </p>
            <div className="chips">
              <span className="chip">React Native</span>
              <span className="chip">iOS/Android</span>
              <span className="chip">EAS</span>
              <span className="chip">In development</span>
            </div>
            <div className="links">
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); setGlitch(true); }}
              >Check it out →</a>
            </div>
          </div>
        </article>

      </div>

      {glitch && <GlitchOverlay onDone={() => setGlitch(false)} />}
    </section>
  );
}
