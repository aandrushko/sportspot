import React from 'react';
import ProjectSummary from './ProjectSummary'

const ProjectList = (props) => {
   
    return (
        <div className="poject-list section">
            { props.projects && props.projects.map(project=> (<ProjectSummary key={project.id} project={project}/>)) }
        </div>
    )
}

export default ProjectList