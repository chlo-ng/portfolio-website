import { useState } from "react";
import { experience, skills } from "../assets/experienceData";
import SkillChip from "../components/SkillChip";

function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = experience[activeIndex];

  return (
    <div className="flex w-full flex-col items-center gap-12 py-20">
      <h1>Experience.</h1>

      <div className="flex w-[min(800px,90vw)] flex-col gap-10">
        <div className="flex flex-col gap-8 sm:flex-row">
          {/* company tab list */}
          <div
            role="tablist"
            aria-label="Where I've worked"
            className="flex flex-row gap-1 overflow-x-auto border-b-2 border-secondary/50 sm:flex-col sm:border-b-0 sm:border-r-2 sm:pr-4"
          >
            {experience.map((job, i) => (
              <button
                key={job.company}
                type="button"
                role="tab"
                aria-selected={activeIndex === i}
                onClick={() => setActiveIndex(i)}
                className={`whitespace-nowrap border-b-2 px-4 py-2 text-left transition-all duration-300 sm:border-b-0 sm:border-r-2 sm:border-r-transparent`}
              >
                <span
                  className={`font-mono text-base text-primary hover:text-secondary ${
                    activeIndex === i
                      ? "border-primary font-medium"
                      : "border-transparent"
                  }`}
                >
                  {job.company}
                </span>
              </button>
            ))}
          </div>

          {/* active job panel */}
          <div role="tabpanel" className="flex-1">
            <h3 className="text-primary font-semibold">
              {active.role}
              <span className="text-secondary"> @ {active.company}</span>
            </h3>
            <span className="mt-1 block font-mono text-base text-secondary">
              {active.range}
              {active.location ? ` · ${active.location}` : ""}
            </span>
            <ul className="mt-5 flex list-disc flex-col gap-3 pl-5 text-slate-700">
              {active.points.map((point) => (
                <li key={point} className="text-left leading-relaxed text-md">
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <div className="flex w-full justify-start gap-3">
                {(active.skills ?? skills).map((skill) => (
                  <SkillChip key={skill} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
