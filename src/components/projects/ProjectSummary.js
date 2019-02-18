import React from 'react';
import {deleteProject} from '../../store/actions/projectActions'
import {connect} from 'react-redux';

const ProjectSummary = (props) => {
    console.log(props)
    return (
        <div className="card z-depth-0 project-summary">
                <div className="card-content  grey-text text-darken-darken-3">
                    <span className="card-title">{props.project.title} </span>
                    <p>{props.project.content}</p>
                    <p className="grey-text"> today date</p>
                    <button className='icon-delete' onClick={()=>props.deleteProject(props.project)} >X</button>
                </div>
        </div>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteProject: (project) => dispatch(deleteProject(project))
    }

}

export default connect(null,mapDispatchToProps)(ProjectSummary)