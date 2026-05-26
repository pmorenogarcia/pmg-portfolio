import { SectionHead } from '../ui/SectionHead';
import { EDUCATION } from '../data/education';

export function Education() {
  return (
    <section id="education" className="section education">
      <SectionHead num="05 / EDUCATION" title="academic background" />

      <div className="rows reveal">
        {EDUCATION.map((e, i) => (
          <div key={i} className={`row${e.current ? ' now' : ''}`}>
            <div className="range">{e.range}</div>
            <div className="rail"><i /></div>
            <div className="content">
              <div className="role">
                <h3>{e.deg}</h3>
                <span className="org">· {e.org}</span>
              </div>
              <p>
                {e.prize ? (
                  <>
                    {e.blurb.split('1st Prize')[0]}
                    <b>
                      <svg
                        width="14" height="14" viewBox="0 0 24 24" fill="currentColor"
                        aria-hidden="true"
                        style={{ color: 'var(--accent)', verticalAlign: '-2px', marginRight: '3px' }}
                      >
                        <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V18H7v2h10v-2h-4v-2.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
                      </svg>
                      1st Prize
                    </b>
                    {e.blurb.split('1st Prize')[1]}
                  </>
                ) : e.blurb}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
