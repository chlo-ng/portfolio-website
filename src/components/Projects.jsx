import { useState } from "react"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import projects from "../assets/projectsData"
import { Link } from "react-router-dom"

function Projects() {

    const [filter, setFilter] = useState('ALL')
    const [displayCount, setDisplayCount] = useState(3)

    const projectTypes = ['ALL', 'WEB DEVELOPMENT', 'DESIGN', 'VIDEO GAME', 'MOBILE DEVELOPMENT']

    const filteredProjects = filter === 'ALL' ? projects : projects.filter(project => project.type === filter);
    const sortedProjects = filteredProjects.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
    

    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 3;
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;

    return(
        <div className="projects">
            <h1>
                Latest Projects.
            </h1>

            <div>
                {projectTypes.map(type => (
                    <button key={type} onClick={() => setFilter(type)} className={`filterButton ${filter === type ? 'selected' : ''}`}>
                        {type}
                    </button>
                ))}
            </div>

            <TransitionGroup className="project-list">
                {sortedProjects.slice(indexOfFirstProject, indexOfLastProject).map(project => (
                    <CSSTransition key={project.key} timeout={300} classNames="fade">
                        <Link to={`/projects/${project.key}`}>
                            <div className="project">
                                <img src={project.image} />
                                <h3>{project.name}</h3>
                            </div>
                        </Link>
                    </CSSTransition>
                ))}
            </TransitionGroup>
            
            <div>
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} className="paginationButton">Previous</button>
                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === Math.ceil(sortedProjects.length / projectsPerPage)} className="paginationButton">Next</button> 
            </div>

        </div>
    )
}

export default Projects