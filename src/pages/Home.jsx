import Projects from "../components/Projects";
import Experience from "../components/Experience";
import SectionNav from "../components/SectionNav";
import PropTypes from "prop-types";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

function Section({ id, children, nextLabel, className = "" }) {
  return (
    <section id={id} className={`scroll-section relative ${className}`}>
      {children}
      {nextLabel && (
        <SectionNav nextSection={nextLabel.id} nextLabel={nextLabel.label} />
      )}
    </section>
  );
}

Section.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  nextLabel: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }),
  className: PropTypes.string,
};

function Home() {
  const nextOf = (label) => {
    const idx = SECTIONS.findIndex((s) => s.label === label);
    return SECTIONS[idx + 1] ?? null;
  };

  return (
    <div className="max-w-screen">
      <Section
        id="about"
        className="primary-container"
        nextLabel={nextOf("About")}
      >
        <div className="flex w-[60vw] flex-col items-start gap-5">
          <h1 className="text-5xl mb-3">Hi, I&apos;m Chloe.</h1>
          <span className="text-left text-slate-700 leading-8">
            I'm a{" "}
            <span className="text-secondary">Frontend-focused Engineer</span>{" "}
            who loves building thoughtful, human-centered products, with a
            sprinkle of creativity and whimsy.
          </span>
          <span className="text-left text-slate-700 leading-8">
            My journey start at{" "}
            <span className="text-secondary">Georgia Tech</span>, where I
            pursued a{" "}
            <span className="text-secondary">
              Bachelor&apos;s in Computer Science
            </span>{" "}
            with a concentration in{" "}
            <span className="text-secondary">People &amp; Media</span>. That's
            where I learned to value the end-user experience above almost
            everything else.
          </span>
          <span className="text-left text-slate-700 leading-8">
            There's nothing quite like hearing that some small UI decision made
            someone's day a little easier. That's why I use{" "}
            <span className="text-secondary ">
              software development as a medium
            </span>{" "}
            to chase the best possible user experience.
          </span>
        </div>
        {/* // todo: add more information about my current job and why i want to be a design engineer */}
      </Section>

      <Section
        id="experience"
        className="secondary-container"
        nextLabel={nextOf("Experience")}
      >
        <Experience />
      </Section>

      <Section id="projects" className="primary-container">
        <Projects />
      </Section>
    </div>
  );
}

export default Home;
