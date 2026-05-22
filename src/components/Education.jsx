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
              <p>{e.blurb}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
