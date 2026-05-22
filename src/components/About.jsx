import { SectionHead } from '../ui/SectionHead';

export function About() {
  return (
    <section id="about" className="section about">
      <SectionHead num="01 / ABOUT" title="bio.txt" />

      <div className="grid reveal">
        <div className="side">
          <div className="row">
            Based in
            <b>Sant Andreu de la Barca, Barcelona</b>
          </div>
          <div className="row">
            Currently
            <b>Backend Engineer · BackMarket</b>
          </div>
          <div className="row">
            Background
            <b>Software & Mechanical Engineering</b>
          </div>
        </div>

        <div className="bio">
          <p>
            My name is Pol, I'm <b>25</b>, and I hold a degree in{' '}
            <b>Mechanical Engineering</b> from <span className="acc">UPC Manresa</span>.
            Currently I'm pursuing a{' '}
            <b>Bachelor's Degree in Techniques for Software Application Development</b>{' '}
            at the <span className="acc">UOC</span> while working full-time as a{' '}
            <b>Backend Engineer</b> at <span className="acc">BackMarket</span>.
          </p>
          <p>
            I'm ambitious, self-critical, and quick to learn — the kind of person
            who treats personal growth as a habit. Strong at teamwork and
            leadership, comfortable in front of people, and genuinely curious
            about anything new in tech.
          </p>
          <p>
            Professionally I live in <b>backend</b> and <b>CI/CD</b>, but I'm
            actively spending time on <b>full-stack</b> and <b>mobile development</b> work —
            stretching toward the parts of the product I don't touch every day.
          </p>
        </div>
      </div>
    </section>
  );
}
