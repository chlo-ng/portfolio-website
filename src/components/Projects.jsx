import { useState } from "react"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import projects from "../assets/projectsData"
import { Link } from "react-router-dom"

function Projects() {

    const [filter, setFilter] = useState('ALL')

    const projectTypes = ['ALL', 'WEB DEVELOPMENT', 'DESIGN', 'VIDEO GAME', 'MOBILE DEVELOPMENT']

    const filteredProjects = filter === 'ALL' ? projects : projects.filter(project => project.type === filter);
    const sortedProjects = filteredProjects.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
    

    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 4;
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;

    return(
        <div className="projects">
            <h1>
                Latest Projects.
            </h1>

            <div style={{ marginTop: '2.5em'}}>
                {projectTypes.map(type => (
                    <button key={type} onClick={() => setFilter(type)} className={`transparentButton${filter === type ? ' selected' : ''}`}>
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
                                <h4>{project.name}</h4>
                            </div>
                        </Link>
                    </CSSTransition>
                ))}
            </TransitionGroup>
            
            <div>
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} className={`borderedButton${currentPage === 1 ? ' disabled' : ''}`}>Previous</button>
                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === Math.ceil(sortedProjects.length / projectsPerPage)} className={`borderedButton${currentPage === Math.ceil(sortedProjects.length / projectsPerPage) ? ' disabled' : ''}`}>Next</button> 
            </div>

        </div>
    )
}

export default Projects