import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import projects from "../assets/projectsData";

const PROJECTS_PER_PAGE = 3;

const PROJECT_TYPES = [
  "ALL",
  "WEB DEVELOPMENT",
  // "MOBILE DEVELOPMENT",
  "DESIGN",
  // "VIDEO GAME",
];

// projects the user has opted into showing as feature highlights
const highlighted = projects.filter((p) => p.highlight);

function FeaturedTiles() {
  return (
    <div className="flex justify-center gap-8 w-full">
      {highlighted.slice(0, 3).map((project) => (
        <Link
          key={project.key}
          to={`/projects/${project.key}`}
          className="group flex w-[260px] flex-col items-center gap-3 rounded-lg border border-primary/25 bg-white/40 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-secondary-background"
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.name}
              className="h-[140px] w-full rounded object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="h-[140px] w-full rounded bg-primary/15" />
          )}
          <h4 className="text-center text-primary font-normal group-hover:text-secondary">
            {project.name}
          </h4>
          <div className="flex flex-wrap justify-center gap-1.5">
            {(project.tags ?? []).map((tag) => (
              <span key={tag} className="skill-chip">
                {tag}
              </span>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
}

function Projects() {
  const [filter, setFilter] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);

  const sortedProjects = useMemo(() => {
    const matching =
      filter === "ALL"
        ? projects
        : projects.filter((project) => project.type === filter);

    return [...matching].sort(
      (a, b) => new Date(b.startDate) - new Date(a.startDate),
    );
  }, [filter]);

  const totalPages = Math.max(
    1,
    Math.ceil(sortedProjects.length / PROJECTS_PER_PAGE),
  );
  const indexOfLastProject = currentPage * PROJECTS_PER_PAGE;
  const indexOfFirstProject = indexOfLastProject - PROJECTS_PER_PAGE;
  const visibleProjects = sortedProjects.slice(
    indexOfFirstProject,
    indexOfLastProject,
  );

  const handleFilter = (type) => {
    if (type === filter) return;
    setFilter(type);
    setCurrentPage(1);
  };

  const goToPage = (nextPage) => setCurrentPage(nextPage);

  return (
    <div className="flex w-full max-h-screen flex-col items-center gap-6 py-15">
      <h1>Projects.</h1>

      {highlighted.length > 0 && (
        <div className="flex w-[min(760px,90vw)] flex-col items-center gap-6">
          <h3 className="text-secondary font-medium">Featured</h3>
          <FeaturedTiles />
        </div>
      )}

      <div className="flex w-[min(760px,90vw)] flex-col items-center gap-3">
        <h3 className="text-secondary font-medium">
          {highlighted.length > 0 ? "More projects" : "All projects"}
        </h3>

        <div className="flex gap-5">
          {PROJECT_TYPES.map((type) => (
            <button
              key={type}
              onClick={() => handleFilter(type)}
              className="project-nav-button"
            >
              <span
                className={`underline-offset-4 transition-all hover:underline hover:text-secondary ${
                  filter === type ? "font-semibold underline" : "no-underline"
                }`}
              >
                {type}
              </span>
            </button>
          ))}
        </div>

        {/* paginated list of projects */}
        <div className="flex w-full flex-col gap-4">
          {visibleProjects.length === 0 && (
            <h4 className="text-center text-secondary">
              No projects here yet.
            </h4>
          )}

          {visibleProjects.map((project) => (
            <Link
              key={project.key}
              to={`/projects/${project.key}`}
              className="flex items-center gap-5 rounded-lg border border-primary/25 bg-white/40 p-4 transition-all duration-300 hover:border-primary hover:bg-secondary-background"
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-16 w-16 shrink-0 rounded object-cover"
                />
              ) : (
                <div className="h-16 w-16 shrink-0 rounded bg-primary/15" />
              )}
              <div className="flex flex-col gap-2">
                <h4 className="text-primary font-normal group-hover:text-secondary">
                  {project.name}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {(project.tags ?? []).map((tag) => (
                    <span key={tag} className="skill-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`font-sans-serif text-sm ${currentPage === 1 ? "disabled" : ""}`}
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
      </div>
    </div>
  );
}

export default Projects;
