import { SectionHead } from '../ui/SectionHead';
import { SKILL_GROUPS } from '../data/skills';

export function Skills() {
  return (
    <section id="skills" className="section skills">
      <SectionHead num="03 / STACK" title="self-rated · honest" />

      <div className="rows reveal">
        {SKILL_GROUPS.map(g => (
          <div key={g.cat} className={`row${g.accent ? ' acc' : ''}`}>
            <div className="label">
              <div className="cat">{g.cat}</div>
              <div className="note">{g.note}</div>
            </div>
            <div className="items">
              {g.items.map(it => (
                <span key={it} className="it">{it}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
