import { useState } from "react"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import projects from "../assets/projectsData"

function Projects() {

    const [filter, setFilter] = useState('ALL')

    const projectTypes = ['ALL', 'WEB DEVELOPMENT', 'DESIGN', 'VIDEO GAME', 'MOBILE DEVELOPMENT']

    const filteredProjects = filter === 'ALL' ? projects : projects.filter(project => project.type === filter);

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
                {filteredProjects.map(project => (
                    <CSSTransition key={project.key} timeout={300} classNames="fade">
                            <div className="project">
                                <img src={project.image} />
                                <h3>{project.name}</h3>
                            </div>
                    </CSSTransition>
                ))}
            </TransitionGroup>

        </div>
    )
}

export default Projects