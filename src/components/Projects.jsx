import { useState, useMemo } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import projects from "../assets/projectsData";
import { Link } from "react-router-dom";

const PROJECTS_PER_PAGE = 4;

const PROJECT_TYPES = [
  "ALL",
  "WEB DEVELOPMENT",
  // "MOBILE DEVELOPMENT",
  "DESIGN",
  // "VIDEO GAME",
];

function Projects() {
  const [filter, setFilter] = useState("ALL");

  const filteredProjects =
    filter === "ALL"
      ? projects
      : projects.filter((project) => project.type === filter);
  const sortedProjects = filteredProjects.sort(
    (a, b) => new Date(b.startDate) - new Date(a.startDate),
  );

  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastProject = useMemo(() => {
    return currentPage * PROJECTS_PER_PAGE;
  }, [currentPage]);
  const indexOfFirstProject = useMemo(() => {
    return indexOfLastProject - PROJECTS_PER_PAGE;
  }, [indexOfLastProject]);
  const hidePrevButton = useMemo(() => {
    return currentPage === 1;
  }, [currentPage]);
  const hideNextButton = useMemo(() => {
    return (
      sortedProjects.length <= PROJECTS_PER_PAGE ||
      currentPage === Math.ceil(sortedProjects.length / PROJECTS_PER_PAGE)
    );
  }, [currentPage, sortedProjects]);

  return (
    <div className="flex flex-col gap-6">
      <h1>Latest Projects.</h1>

      <div className="flex gap-5">
        {PROJECT_TYPES.map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
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

      <TransitionGroup className="project-list">
        {sortedProjects
          .slice(indexOfFirstProject, indexOfLastProject)
          .map((project) => (
            <CSSTransition key={project.key} timeout={300} classNames="fade">
              <Link to={`/projects/${project.key}`}>
                <div className="project">
                  <img src={project.image} />
                  <h4>{project.name}</h4>
                </div>
              </Link>
            </CSSTransition>
          ))}
      </TransitionGroup>

      <div>
        {!hidePrevButton && (
          <button onClick={() => setCurrentPage(currentPage - 1)}>
            Previous
          </button>
        )}
        {!hideNextButton && (
          <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
        )}
      </div>
    </div>
  );
}

export default Projects;
