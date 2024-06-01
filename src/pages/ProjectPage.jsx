import projects from "../assets/projectsData"
import { useParams } from "react-router-dom";

function ProjectPage({ match }) {
    const { projectId } = useParams();
    const project = projects.find(p => p.key === Number(projectId));

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="project-page">
            <div className="project-container">
                <img src={project.image} />
                <div className="project-description">
                    <h2>{project.name}.</h2>
                    <p>{project.description.split('\n').map((line, i) => (
                        <span key={i}>
                            {line}
                            <br />
                        </span>
                    ))}</p>
                </div>
            </div>

            <div>
                {project.github && <button className="transparentButton link"><a href={project.github} target='_blank' rel="noreferrer"> github </a></button>}
                {project.figma && <button className="transparentButton link"><a href={project.figma} target='_blank' rel="noreferrer"> figma </a></button>}
            </div>
            
            <button className="transparentButton" style={{ position: 'fixed', left: '8em', bottom: '2em'}}><a href="/experience">Back to Projects</a></button>
        </div>
    );
}

export default ProjectPage;