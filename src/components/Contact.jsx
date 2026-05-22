import { useState } from 'react';
import { SectionHead } from '../ui/SectionHead';

const EMAIL = 'pmorenogarcia291@gmail.com';

function CopyIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4.5" y="4.5" width="7" height="7" rx="1" />
      <path d="M1.5 8.5V2.5a1 1 0 0 1 1-1h6" />
    </svg>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = (e) => {
    e.preventDefault();
    navigator.clipboard?.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    });
  };

  return (
    <section id="contact" className="section contact">
      <SectionHead num="06 / CONTACT" title="get in touch" />

      <div className="reveal">
        <h2 className="big">Let's <span className="acc">build</span> something solid.</h2>
        <p className="sub">
          Collaboration, consulting, side project — or anything else. Drop a line.
        </p>

        <div className="channels">
          <a className="ch" href={`mailto:${EMAIL}`}>
            <span className="k">Email</span>
            <span className="v email-row">
              {EMAIL}
              <button className="copy-btn" onClick={copy} title="Copy email">
                {copied ? <span className="copy-feedback">copied</span> : <CopyIcon />}
              </button>
            </span>
            <span className="act">open →</span>
          </a>
          <a className="ch" href="https://github.com/pmorenogarcia" target="_blank" rel="noopener noreferrer">
            <span className="k">GitHub</span>
            <span className="v">github.com/pmorenogarcia</span>
            <span className="act">open →</span>
          </a>
          <a className="ch" href="https://www.linkedin.com/in/pol-moreno-garcia-878031244/" target="_blank" rel="noopener noreferrer">
            <span className="k">LinkedIn</span>
            <span className="v">in/pol-moreno-garcia</span>
            <span className="act">open →</span>
          </a>
        </div>

        <div className="foot">
          <span>© 2026 Pol Moreno Garcia</span>
          <span>Built with <span className="acc">React</span> · <span className="acc">Vite</span></span>
          <span>v.2026.05</span>
        </div>
      </div>
    </section>
  );
}
