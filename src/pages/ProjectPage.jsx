import projects from "../assets/projectsData"
import { useParams } from "react-router-dom";

function ProjectPage({ match }) {
    const { projectId } = useParams();
    const project = projects.find(p => p.key === Number(projectId));

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            {/* other project details... */}
            <button><a href="/experience">Back</a></button>
        </div>
    );
}

export default ProjectPage;