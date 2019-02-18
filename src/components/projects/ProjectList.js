import React from 'react';
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = (props) => {
   
    return (       
        <div className="poject-list section">
           
            { props.projects && props.projects.map(project=> (
                <Link to={'/projects/' + project.id}  key={project.id}>
                    <ProjectSummary project={project}/>
                </Link>
                )
            )}
           
        </div>
    )
}

export default ProjectList