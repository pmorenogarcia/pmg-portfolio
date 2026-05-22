import { SectionHead } from '../ui/SectionHead';
import { EXPERIENCE } from '../data/experience';

export function Experience() {
  return (
    <section id="experience" className="section experience">
      <SectionHead num="04 / EXPERIENCE" title="where I've worked" />

      <div className="rows reveal">
        {EXPERIENCE.map((e, i) => (
          <div key={i} className={`row${e.current ? ' now' : ''}`}>
            <div className="range">{e.range}</div>
            <div className="rail"><i /></div>
            <div className="content">
              <div className="role">
                <h3>{e.role}</h3>
                <span className="org">· {e.org}</span>
                {e.where && <span className="where">{e.where}</span>}
              </div>
              <p>{e.blurb}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
