import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { id: 'about',      label: 'About'      },
  { id: 'projects',   label: 'Work'       },
  { id: 'skills',     label: 'Stack'      },
  { id: 'experience', label: 'Experience' },
  { id: 'contact',    label: 'Contact'    },
];

function MenuIcon({ open }) {
  return (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      {open ? (
        <>
          <line x1="1" y1="1" x2="15" y2="11" />
          <line x1="15" y1="1" x2="1" y2="11" />
        </>
      ) : (
        <>
          <line x1="0" y1="1"  x2="16" y2="1"  />
          <line x1="0" y1="6"  x2="16" y2="6"  />
          <line x1="0" y1="11" x2="16" y2="11" />
        </>
      )}
    </svg>
  );
}

export function Nav({ theme, setTheme }) {
  const [active, setActive] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 820) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    let raf;
    const tick = () => {
      const mid = (window.innerHeight || 800) * 0.35;
      let best = 'hero';
      for (const l of [{ id: 'hero' }, ...NAV_LINKS]) {
        const el = document.getElementById(l.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= mid) best = l.id;
      }
      setActive(prev => prev === best ? prev : best);
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => cancelAnimationFrame(raf);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <nav className="nav">
      <div className="row">
        <a href="#hero" className="brand" onClick={close}>
          <b>PoleroDev</b>
          <span style={{ color: 'var(--ink-mute)' }}>// pol moreno garcia</span>
        </a>

        <div className="links">
          {NAV_LINKS.map(l => (
            <a key={l.id} href={`#${l.id}`} className={active === l.id ? 'on' : ''}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="right">
          <a
            className="social"
            href="https://www.linkedin.com/in/pol-moreno-garcia-878031244/"
            target="_blank" rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5 1.78 1.78 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
            </svg>
            <span>LinkedIn</span>
          </a>

          <div
            className="toggle"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            role="button"
            aria-label="Toggle theme"
          >
            <span className={theme === 'light' ? 'on' : ''}>Light</span>
            <span className={theme === 'dark' ? 'on' : ''}>Dark</span>
          </div>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>

      <div className={`nav-mobile${menuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map((l, i) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className={active === l.id ? 'on' : ''}
            onClick={close}
          >
            <span className="idx">0{i + 1}</span>
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
