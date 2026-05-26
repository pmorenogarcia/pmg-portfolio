import { useState, useEffect } from 'react';
import { useTyped } from '../hooks/useTyped';
import { Terminal } from '../ui/Terminal';
import { Gear } from '../ui/Gear';

const LINES = [
  { p: '$', t: 'whoami' },
  { p: '›', t: 'pol_moreno_garcia // backend engineer' },
  { p: '$', t: 'cat ./role.txt' },
  { p: '›', t: '1.5+ yrs @ BackMarket · mechanical engineer turned dev.' },
  { p: '$', t: '_' },
];

function DownloadIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M6.5 1v8M3 5.5l3.5 3.5L10 5.5M2 12h9" />
    </svg>
  );
}

export function Hero() {
  const [step, setStep] = useState(0);
  const [text, done] = useTyped(LINES[step]?.t || '', { speed: 22 });

  useEffect(() => {
    if (done && step < LINES.length - 1) {
      const t = setTimeout(() => setStep(s => s + 1), 280);
      return () => clearTimeout(t);
    }
  }, [done, step]);

  return (
    <section id="hero" className="section hero">
      <h1>
        Hi, I'm <span className="acc">Pol Moreno Garcia.</span>
      </h1>

      <p className="role-line">
        <span className="amp">Software Engineer</span>&<span className="amp">Mechanical Engineer</span>
      </p>

      <div className="grid">
        <div>
          <Terminal>
            {LINES.slice(0, step).map((l, i) => (
              <div key={i}><span className="p">{l.p}</span>{'  '}<span>{l.t}</span></div>
            ))}
            <div>
              <span className="p">{LINES[step]?.p}</span>{'  '}
              <span>{text}</span>
              {!done && <span className="caret" />}
            </div>
          </Terminal>

          <div className="ctas" style={{ marginTop: 24 }}>
            <a className="btn solid" href="#projects">View Work</a>
            <a className="btn accent" href="/pmorenogarcia_cv.pdf" download>
              <DownloadIcon /> Resume.pdf
            </a>
            <a className="btn ghost" href="#contact">Get in touch</a>
          </div>
        </div>

        <div className="gear-stack" aria-hidden="true">
          <Gear className="g g1" teeth={16} />
          <Gear className="g g2" teeth={12} />
          <span className="lbl">FIG. 001</span>
        </div>
      </div>
    </section>
  );
}
