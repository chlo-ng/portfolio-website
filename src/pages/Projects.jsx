import { useState } from "react";
import { Link } from "react-router-dom";
import projects from "../assets/projectsData";
import SkillChip from "../components/SkillChip";
import { RiProgress1Line } from "react-icons/ri";
import { RxFigmaLogo } from "react-icons/rx";
import { FiGithub } from "react-icons/fi";
import { GoLinkExternal } from "react-icons/go";

const FEATURED_PER_PAGE = 3;

// projects the user has opted into showing as feature highlights
const highlighted = projects.filter((p) => p.highlight);

function Projects() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(
    1,
    Math.ceil(highlighted.length / FEATURED_PER_PAGE),
  );
  const indexOfLast = currentPage * FEATURED_PER_PAGE;
  const indexOfFirst = indexOfLast - FEATURED_PER_PAGE;
  const visibleProjects = highlighted.slice(indexOfFirst, indexOfLast);

  const goToPage = (nextPage) => setCurrentPage(nextPage);

  return (
    <div className="flex w-full h-screen flex-col items-center justify-center gap-8 py-16">
      <h1>Projects.</h1>

      <div className="flex w-[min(1200px,92vw)] min-h-content flex-col items-center gap-6">
        {/* <h3 className="text-secondary font-medium">Featured</h3> */}

        <div className="grid size-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.length === 0 && (
            <h4 className="col-span-full text-center text-secondary">
              No featured projects yet.
            </h4>
          )}

          {visibleProjects.map((project) => (
            <div
              key={project.key}
              className="flex flex-col gap-4 rounded-lg border border-primary/25 bg-white/40 p-5"
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-[220px] w-full rounded object-cover"
                />
              ) : (
                <div className="h-[220px] w-full rounded bg-primary/15 flex items-center justify-center">
                  <RiProgress1Line className="text-4xl" />
                </div>
              )}
              <div className="flex flex-col justify-between gap-3 flex-grow">
                <div className="flex flex-col gap-4">
                  {project.url ? (
                    <Link
                      to={project.url}
                      target="_blank"
                      className="flex items-center gap-2 font-mono font-medium text-lg text-secondary hover:underline underline-offset-3"
                      title="Open project in a new tab"
                    >
                      {project.name}
                      <GoLinkExternal className="text-sm" />
                    </Link>
                  ) : (
                    <h4 className="text-primary font-medium">{project.name}</h4>
                  )}

                  <span className="text-primary text-base">
                    {project.description}
                  </span>
                  <div className="flex gap-3">
                    {project.figma && (
                      <Link
                        to={project.figma}
                        target="_blank"
                        className="text-secondary hover:text-primary"
                        title="View project figma"
                      >
                        <RxFigmaLogo />
                      </Link>
                    )}
                    {project.github && (
                      <Link
                        to={project.github}
                        target="_blank"
                        className="text-secondary hover:text-primary"
                        title="View project repo"
                      >
                        <FiGithub />
                      </Link>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-1">
                  {(project.tags ?? []).map((tag) => (
                    <SkillChip key={tag} skill={tag} bordered small />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex gap-4">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`font-sans-serif text-sm ${
                currentPage === 1 ? "disabled" : ""
              }`}
            >
              Previous
            </button>
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`font-sans-serif ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
